import { initializeApp } from 'firebase/app';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  getFirestore,
  onSnapshot,
  QuerySnapshot,
  serverTimestamp,
  setDoc,
  Timestamp,
  Unsubscribe,
} from 'firebase/firestore';
import type {
  ClientDocument,
  ClientProfile,
  Plan,
  ResourceItem,
  WorkspaceUser,
} from '../models/ResourceState';

const firebaseConfig = {
  apiKey: 'AIzaSyCw9bbJGjuL2dgR9qerwnJpE3vJ1lXoqmU',
  authDomain: 'superstore-b3500.firebaseapp.com',
  databaseURL: 'https://superstore-b3500-default-rtdb.firebaseio.com',
  projectId: 'superstore-b3500',
  storageBucket: 'superstore-b3500.firebasestorage.app',
  messagingSenderId: '224965135494',
  appId: '1:224965135494:web:be8b1896fdff06c3129507',
  measurementId: 'G-GWNZSLE80Z',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const normalizeFirestoreValue = (value: unknown): unknown => {
  if (value instanceof Timestamp) {
    return value.toDate().toISOString();
  }

  if (Array.isArray(value)) {
    return value.map((entry) => normalizeFirestoreValue(entry));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, nestedValue]) => [
        key,
        normalizeFirestoreValue(nestedValue),
      ]),
    );
  }

  return value;
};

const normalizeRecord = <T extends Record<string, unknown>>(data: DocumentData): T => (
  normalizeFirestoreValue(data) as T
);

const normalizeDoc = <T extends Record<string, unknown>>(id: string, data: DocumentData): T => ({
  id,
  ...normalizeRecord<T>(data),
}) as T;

const pruneUndefined = (value: unknown): unknown => {
  if (Array.isArray(value)) {
    return value.map((entry) => pruneUndefined(entry));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .filter(([, nestedValue]) => nestedValue !== undefined)
        .map(([key, nestedValue]) => [key, pruneUndefined(nestedValue)]),
    );
  }

  return value;
};

const legacyResourcesCollection = (phoneNumber: string) => collection(db, 'users', phoneNumber, 'resources');
const clientResourcesCollection = (clientId: string) => collection(db, 'clients', clientId, 'resources');
const clientDocumentsCollection = (clientId: string) => collection(db, 'clients', clientId, 'documents');

const buildMergePayload = (data: Record<string, unknown>, includeCreatedAt = false) => {
  const payload = pruneUndefined(data) as Record<string, unknown>;
  if (includeCreatedAt && payload.createdAt === undefined) {
    payload.createdAt = serverTimestamp();
  }
  if (payload.updatedAt === undefined) {
    payload.updatedAt = serverTimestamp();
  }
  return payload;
};

export function subscribeToClientResources(
  clientId: string,
  callback: (data: ResourceItem[]) => void,
): Unsubscribe {
  return onSnapshot(
    clientResourcesCollection(clientId),
    (snapshot: QuerySnapshot<DocumentData>) => {
      const items = snapshot.docs.map((entry) => normalizeDoc<ResourceItem>(entry.id, entry.data()));
      callback(items);
    },
    (error: Error) => {
      console.error('Firestore resource subscription error:', error);
    },
  );
}

export function subscribeToClientDocuments(
  clientId: string,
  callback: (data: ClientDocument[]) => void,
): Unsubscribe {
  return onSnapshot(
    clientDocumentsCollection(clientId),
    (snapshot: QuerySnapshot<DocumentData>) => {
      const items = snapshot.docs.map((entry) => normalizeDoc<ClientDocument>(entry.id, entry.data()));
      callback(items);
    },
    (error: Error) => {
      console.error('Firestore document subscription error:', error);
    },
  );
}

export async function fetchWorkspaceUser(phone: string): Promise<WorkspaceUser | null> {
  const snapshot = await getDoc(doc(db, 'workspaceUsers', phone));
  if (!snapshot.exists()) {
    return null;
  }

  return normalizeRecord<WorkspaceUser>(snapshot.data());
}

export async function fetchPlan(planId: string): Promise<Plan | null> {
  const snapshot = await getDoc(doc(db, 'plans', planId));
  if (!snapshot.exists()) {
    return null;
  }

  return normalizeRecord<Plan>(snapshot.data());
}

export async function fetchClient(clientId: string): Promise<ClientProfile | null> {
  const snapshot = await getDoc(doc(db, 'clients', clientId));
  if (!snapshot.exists()) {
    return null;
  }

  return normalizeRecord<ClientProfile>(snapshot.data());
}

export async function fetchClientResources(clientId: string): Promise<ResourceItem[]> {
  const snapshot = await getDocs(clientResourcesCollection(clientId));
  return snapshot.docs.map((entry) => normalizeDoc<ResourceItem>(entry.id, entry.data()));
}

export async function fetchClientDocuments(clientId: string): Promise<ClientDocument[]> {
  const snapshot = await getDocs(clientDocumentsCollection(clientId));
  return snapshot.docs.map((entry) => normalizeDoc<ClientDocument>(entry.id, entry.data()));
}

export async function upsertClient(clientId: string, data: Partial<ClientProfile>): Promise<void> {
  const clientRef = doc(db, 'clients', clientId);
  await setDoc(clientRef, buildMergePayload(data as Record<string, unknown>, true), { merge: true });
}

export async function deleteClient(clientId: string): Promise<void> {
  await deleteDoc(doc(db, 'clients', clientId));
}

export async function upsertWorkspaceUser(phone: string, data: Partial<WorkspaceUser>): Promise<void> {
  const workspaceUserRef = doc(db, 'workspaceUsers', phone);
  await setDoc(
    workspaceUserRef,
    buildMergePayload({ ...data, phone } as Record<string, unknown>, true),
    { merge: true },
  );
}

export async function deleteWorkspaceUser(phone: string): Promise<void> {
  await deleteDoc(doc(db, 'workspaceUsers', phone));
}

export async function updateClientResource(
  clientId: string,
  resourceId: string,
  data: Partial<ResourceItem>,
): Promise<void> {
  const resourceRef = doc(db, 'clients', clientId, 'resources', resourceId);
  const payload = buildMergePayload({
    ...data,
    clientId,
    artifacts: data.artifacts ?? data.resources,
  } as Record<string, unknown>);
  await setDoc(resourceRef, payload, { merge: true });
}

export async function deleteClientResource(clientId: string, resourceId: string): Promise<void> {
  await deleteDoc(doc(db, 'clients', clientId, 'resources', resourceId));
}

export async function addClientDocument(
  clientId: string,
  documentData: Omit<ClientDocument, 'id'> & Partial<Pick<ClientDocument, 'id'>>,
): Promise<string> {
  const payload = buildMergePayload({
    ...documentData,
    clientId,
    uploadedAt: documentData.uploadedAt ?? serverTimestamp(),
  } as Record<string, unknown>, true);

  if (documentData.id) {
    await setDoc(doc(db, 'clients', clientId, 'documents', documentData.id), payload, { merge: true });
    return documentData.id;
  }

  const createdDoc = await addDoc(clientDocumentsCollection(clientId), payload);
  return createdDoc.id;
}

export async function deleteClientDocument(clientId: string, documentId: string): Promise<void> {
  await deleteDoc(doc(db, 'clients', clientId, 'documents', documentId));
}

function subscribeToLegacyUserResources(
  phoneNumber: string,
  callback: (data: ResourceItem[]) => void,
): Unsubscribe {
  return onSnapshot(
    legacyResourcesCollection(phoneNumber),
    (snapshot: QuerySnapshot<DocumentData>) => {
      const items = snapshot.docs.map((entry) => normalizeDoc<ResourceItem>(entry.id, entry.data()));
      callback(items);
    },
    (error: Error) => {
      console.error('Legacy Firestore resource subscription error:', error);
    },
  );
}

export function subscribeToUserResources(
  phoneNumber: string,
  callback: (data: ResourceItem[]) => void,
): Unsubscribe {
  let unsubscribeInner: Unsubscribe | null = null;
  let closed = false;

  void fetchWorkspaceUser(phoneNumber)
    .then((workspaceUser) => {
      if (closed) {
        return;
      }

      if (workspaceUser?.clientId) {
        unsubscribeInner = subscribeToClientResources(workspaceUser.clientId, callback);
        return;
      }

      unsubscribeInner = subscribeToLegacyUserResources(phoneNumber, callback);
    })
    .catch((error: Error) => {
      console.error('Workspace user lookup failed, falling back to legacy path:', error);
      if (!closed) {
        unsubscribeInner = subscribeToLegacyUserResources(phoneNumber, callback);
      }
    });

  return () => {
    closed = true;
    if (unsubscribeInner) {
      unsubscribeInner();
    }
  };
}
