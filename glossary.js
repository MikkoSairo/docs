
// Glossary data embedded directly in the JavaScript file
const glossary = {
  "process": "Integration flow or logic in Frends."
  "process list": "View in Frends that lists Processes to edit or manage them.",
  "instance list": "List of process executions.",
  "process instance": "View in Frends that shows what a specific process execution did."
};

console.log("Got to glossary loading!");

document.querySelectorAll('p').forEach(paragraph => {
  Object.keys(glossary).forEach(term => {
    const regex = new RegExp(`\\b${term}\\b`, 'gi'); // 'gi' for global and case-insensitive matching
    paragraph.innerHTML = paragraph.innerHTML.replace(regex, match => {
      return `<span class="tooltip" data-tooltip="${glossary[term]}">${match}</span>`;
    });
  });
});