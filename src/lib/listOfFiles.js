// Tips
// https://stackoverflow.com/questions/24720075/how-to-get-list-of-files-by-folder-on-google-drive-api
// https://stackoverflow.com/questions/18116152/how-do-i-get-a-file-list-for-a-google-drive-public-hosted-folder
//
// API Docs
// https://developers.google.com/drive/api/guides/search-files

import * as fs from "fs";
const API_KEY = fs.readFileSync("./API_KEY", "utf8");

const folderId = "1CO76EyTqdplnPOxifieXBQITZlLFyRX7";
const q = `'${folderId}'+in+parents+and+trashed+=+false`;
const fetchURL = `https://www.googleapis.com/drive/v3/files?q=${q}&key=${API_KEY}`;
console.log(`${fetchURL}`);

const results = await (await fetch(fetchURL)).json();
console.log(results);
