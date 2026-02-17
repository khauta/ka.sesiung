/**
 * Google Apps Script for "Suspense Backend"
 * 
 * Instructions:
 * 1. Open your Google Sheet.
 * 2. Go to Extensions > Apps Script.
 * 3. Paste this code into Code.gs.
 * 4. Add the 'Firestore' library if needed, or use REST API as shown below.
 * 5. Set up triggers: Edit -> Current project's triggers -> Add Trigger -> syncRowToFirestore -> onEdit (or Time-driven).
 */

function syncRowToFirestore(e) {
  // If triggered by onEdit, 'e' contains event object. 
  // For manual testing or time-driven, we might scan modified rows.
  // Here we assume row is passed or we get active range.
  
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Master_Log");
  if (!sheet) return;

  const range = e ? e.range : sheet.getActiveRange();
  if (!range) return;
  
  const rowIdx = range.getRow();
  if (rowIdx < 2) return; // Skip header
  
  const row = sheet.getRange(rowIdx, 1, 1, 8).getValues()[0];
  
  // 1. Parse Sheet Data
  // Column A: ClientID (Email or UUID)
  const email = row[0]; 
  if (!email) return;

  const data = {
    resourceId: row[1],
    category: row[2], // hub, tracker, vault
    title: row[3],
    status: row[4], // integer progress or string
    url: row[5],
    meta:   isValidJSON(row[6]) ? JSON.parse(row[6]) : {},
    updatedAt: new Date().toISOString()
  };

  // 2. Construct Firestore JSON (REST API format)
  // Note: Firestore REST API requires specific format for types
  const firestoreUrl = "https://firestore.googleapis.com/v1/projects/[YOUR_PROJECT_ID]/databases/(default)/documents/users/";
  
  const payload = {
    fields: {
      category: { stringValue: data.category || "" },
      title: { stringValue: data.title || "" },
      status: { 
        mapValue: {
          fields: {
            state: { stringValue: "active" }, // Default, logic to derive this from sheet needed
            percentage: { integerValue: (typeof data.status === 'number' ? data.status : 0) },
            label: { stringValue: String(data.status) }
          }
        }
      },
      artifacts: {
        arrayValue: {
          values: [
            {
              mapValue: {
                fields: {
                  url: { stringValue: data.url || "" },
                  type: { stringValue: "link" }, // Default
                  name: { stringValue: "Resource Link" }
                }
              }
            }
          ]
        }
      },
      updatedAt: { timestampValue: data.updatedAt }
    }
  };

  // 3. Push to Firestore (Upsert)
  // Path: users/{email}/resources/{resourceId}
  const endpoint = firestoreUrl + email + "/resources/" + data.resourceId;
  const options = {
    method: "patch", // PATCH updates existing docs or creates new ones
    contentType: "application/json",
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(endpoint, options);
  Logger.log(response.getContentText());
}

function isValidJSON(str) {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
}
