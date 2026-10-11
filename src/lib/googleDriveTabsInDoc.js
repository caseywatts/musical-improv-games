// Testing with https://docs.google.com/document/d/14PP-TOGFYcmsdFt4g5u0qdwOz0Fsh1nMfDpjUWo7iNY/edit?tab=t.y7x0soegl6lb
//

// API Docs
// Nodejs client is the main one! This is the most up to date and relevant to what I'm doing here
// https://github.com/googleapis/google-api-nodejs-client#oauth2-client

// The API Reference documentation is still helpful, but it's out of date
// https://developers.google.com/workspace/docs/api/how-tos/tabs
// https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get
// https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#Tab

// Access notes
// It looks like you MUST Have auth credentials to use the API at all
// But service account can access any public document!
// OR any private document shared with the service account

// It looks like the docs/tabs API does NOT have the ability to return markdown right now
// I would have to do custom parsing of a Google Doc to markdown, which I do not want to do - darn!

import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "./credentials.json",
  scopes: ["https://www.googleapis.com/auth/documents.readonly"],
});

const docs = google.docs({
  version: "v1",
  auth: auth,
});

export default async function googleDriveDocWithTabs(id) {
  const doc = await docs.documents.get({
    documentId: id,
    includeTabsContent: true,
  });

  console.log(doc.data.tabs[0].documentTab.documentStyle);
  return doc;
}

googleDriveDocWithTabs("14PP-TOGFYcmsdFt4g5u0qdwOz0Fsh1nMfDpjUWo7iNY");
