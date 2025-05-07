
// Glossary data embedded directly in the JavaScript file
const glossary = {
  "JavaScript": "A programming language commonly used in web development.",
  "HTML": "The standard markup language for creating web pages.",
  "CSS": "A style sheet language used for describing the presentation of a document written in HTML or XML."
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('p').forEach(paragraph => {
    Object.keys(glossary).forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi'); // 'gi' for global and case-insensitive matching
      paragraph.innerHTML = paragraph.innerHTML.replace(regex, match => {
        return `<span class="tooltip" data-tooltip="${glossary[term]}">${match}</span>`;
      });
    });
  });
});
