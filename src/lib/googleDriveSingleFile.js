const googleDocURL = "https://docs.google.com/document/d/1auLNyN5etvGFp6Fjea8fsty8uVkgx5fj8LKBktn2gl8/export?format=md";

fetch(googleDocURL).then(async (response) => {
  console.log(await response.text());
});
