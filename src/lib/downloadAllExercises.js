import Papa from "papaparse";
import fs from "fs";

const googleSheetsURL = "https://docs.google.com/spreadsheets/d/1DZMhY33-_r869aGWpNOK2mfO3_PpK1uZGiWS3RfW5_8/export?format=csv";

fetch(googleSheetsURL).then((response) => {
  response.text().then((exercisesCSV) => {
    const exercises = Papa.parse(exercisesCSV, { header: true });
    exercises.data.forEach((exercise) => {
      downloadMarkdown(exercise);
    });
  });
});

function downloadMarkdown(exercise) {
  const slug = exercise["Slug"];
  const mdURL = exercise["Markdown URL"];

  fetch(mdURL).then((response) => {
    response.text().then((docMarkdown) => {
      const mdFileContent = `
---
name: ${exercise["Name"]}
editURL: ${exercise["Edit URL"]}
difficulty: ${exercise["Difficulty"]}
summary: ${exercise["Summary"]}
sayingWords: ${exercise["Saying Words"]}
newIdeas: ${exercise["New Ideas"]}
yesAnd: ${exercise["Yes, And"]}
rhyme: ${exercise["Rhyme"]}
characters: ${exercise["Characters"]}
plot: ${exercise["Plot"]}
meter: ${exercise["Meter"]}
pitch: ${exercise["Pitch"]}
harmony: ${exercise["Harmony"]}
articulation: ${exercise["Articulation"]}
---

${docMarkdown}
      `.trim();

      fs.writeFileSync(`src/content/exercises/${slug}.md`, mdFileContent);
    });
  });
}
