import fs from "fs";

const oneDoc = `https://docs.google.com/document/d/1JWhhEI8wnHgkySlgJEXN24mELEnAPkqUzUC93JwE6jo/export?format=md`;

fetch(oneDoc).then((response) => {
  response.text().then((docMarkdown) => {
    fs.writeFileSync("src/content/exercises/example.md", docMarkdown);
  });
});
