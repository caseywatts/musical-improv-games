// API Docs
// https://developers.google.com/workspace/docs/api/how-tos/tabs
// https://developers.google.com/workspace/docs/api/reference/rest/v1/documents/get
// https://developers.google.com/workspace/docs/api/reference/rest/v1/documents#Tab

import * as fs from "fs";
const API_KEY = fs.readFileSync("./API_KEY", "utf8");

export default async function googleDriveTabsInDoc(documentId) {
  const fetchURL = `https://docs.googleapis.com/v1/documents/${documentId}?includeTabsContent=true`;
  const results = await (await fetch(fetchURL)).text();
  console.log(results); // debugging
  return results;
}
