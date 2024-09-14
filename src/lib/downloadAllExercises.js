import Papa from "papaparse";
import fs from "fs";

const googleSheetsURL = "https://docs.google.com/spreadsheets/d/1DZMhY33-_r869aGWpNOK2mfO3_PpK1uZGiWS3RfW5_8/export?format=csv";

fetch(googleSheetsURL).then((response) => {
  response.text().then((exercisesCSV) => {
    const exercises = Papa.parse(exercisesCSV, { header: true });
    exercises.data.forEach((exercise) => {
      downloadMarkdown(exercise["Slug"], exercise["Markdown URL"]);
    });
  });
});

function downloadMarkdown(slug, url) {
  fetch(url).then((response) => {
    response.text().then((docMarkdown) => {
      fs.writeFileSync(`src/content/exercises/${slug}.md`, docMarkdown);
    });
  });
}
