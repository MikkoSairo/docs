fetch('glossary.json')
    .then(response => response.json())
    .then(glossary => {
      document.querySelectorAll('p').forEach(paragraph => {
        Object.keys(glossary).forEach(term => {
          const regex = new RegExp(`\\b${term}\\b`, 'g');
          paragraph.innerHTML = paragraph.innerHTML.replace(regex, `<span class="tooltip" data-tooltip="${glossary[term]}">${term}</span>`);
        });
      });
    })
