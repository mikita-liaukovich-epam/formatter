require('./style/normalize.css')
require('./style/app.css')

const convertButton = document.querySelector('#convertButton');
const leftField = document.getElementById('left-text');
const rightField = document.getElementById('right-text');

convertButton.addEventListener('click', convert);
leftField.addEventListener('keydown', checkEnter);

function convert() {
  const leftText = leftField.value || "";
  const formattedText = leftText.replace(/(\s\r\n|\s\n|\s\r)/gm, "\n");
  rightField.value = formattedText.replace(/(\n)/gm, " ");
}

function checkEnter(e) {
  if (e.ctrlKey && e.keyCode === 13) convert();
}