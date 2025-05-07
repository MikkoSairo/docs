
fetch('/glossary.json')
  .then(response => response.json())
  .then(glossary => {
    document.querySelectorAll('p').forEach(paragraph => {
      Object.keys(glossary).forEach(term => {
        const regex = new RegExp(`\\b${term}\\b`, 'gi'); // 'gi' for global and case-insensitive matching
        paragraph.innerHTML = paragraph.innerHTML.replace(regex, match => {
          return `<span class="tooltip" data-tooltip="${glossary[term]}">${match}</span>`;
        });
      });
    });
  })
  .catch(error => console.error('Error loading glossary:', error));
