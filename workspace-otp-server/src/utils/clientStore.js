const fs = require('fs');
const path = require('path');

const clientsPath = path.join(__dirname, '../../../src/data/clients.json');

const readClientsData = () => JSON.parse(fs.readFileSync(clientsPath, 'utf8'));

const writeClientsData = (data) => {
  fs.writeFileSync(clientsPath, JSON.stringify(data, null, 2));
};

const getWorkspaceUserByPhone = (clientsData, phone) => clientsData.workspaceUsers?.[phone] ?? null;
const getClientById = (clientsData, clientId) => clientsData.clients?.[clientId] ?? null;
const getPlanById = (clientsData, planId) => clientsData.plans?.[planId] ?? null;

const buildAuthClientInfo = (clientsData, phone) => {
  const workspaceUser = getWorkspaceUserByPhone(clientsData, phone);
  if (!workspaceUser) {
    return null;
  }

  const client = getClientById(clientsData, workspaceUser.clientId);
  if (!client) {
    return null;
  }

  const plan = getPlanById(clientsData, client.subscription?.planId);
  const isActive = Boolean(workspaceUser.isActive) && ['active', 'trial'].includes(client.subscription?.status);

  return {
    phone,
    phone_1: client.phone_1,
    phone_2: client.phone_2,
    clientId: client.clientId,
    name: workspaceUser.name || client.organization?.name || 'Workspace Client',
    organizationName: client.organization?.name,
    email: workspaceUser.email || client.organization?.email,
    role: workspaceUser.role || 'viewer',
    access: workspaceUser.accessLevel || 'all',
    accessLevel: workspaceUser.accessLevel || 'all',
    subscription: client.subscription?.planId,
    subscriptionStatus: client.subscription?.status,
    planId: client.subscription?.planId,
    tier: plan?.tier,
    status: isActive ? 'active' : 'inactive',
    isActive,
    subscribed_to_whatsapp_otp: Boolean(workspaceUser.subscribed_to_whatsapp_otp),
  };
};

module.exports = {
  clientsPath,
  readClientsData,
  writeClientsData,
  getWorkspaceUserByPhone,
  getClientById,
  buildAuthClientInfo,
};
