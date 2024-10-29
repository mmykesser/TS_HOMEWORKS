const banned_txt = ['file', 'folder', 'price'];

function highlightForbiddenWords(txt: string, banned_txt: string[]): string {
  let ourTxt = txt.split(' ');

  ourTxt = ourTxt.map((word) => {
    const cleanedWord = word.replace(/[^\w\s]/gi, '');

    if (banned_txt.includes(cleanedWord)) {
      return `<del>${word}</del>`;
    }
    return word;
  });
  return ourTxt.join(' ');
}

document.getElementById('test_form')?.addEventListener('submit', (event) => {
  event.preventDefault();

  const textarea = document.getElementById('txt') as HTMLTextAreaElement;
  const resultElement = document.getElementById('result');

  if (textarea && resultElement) {
    const txt = textarea.value;
    resultElement.innerHTML = highlightForbiddenWords(txt, banned_txt);
    textarea.value = '';
  }
});
