require('./style/normalize.css')
require('./style/app.css')

const convertButton = document.querySelector('#convertButton');
const leftField = document.getElementById('left-text');
const rightField = document.getElementById('right-text');

convertButton.addEventListener('click', convert);
document.addEventListener('keydown', checkEnter);

function convert() {
  const leftText = leftField.value || "";
  const formattedText = leftText.replace(/(\s\r\n|\s\n|\s\r)/gm, "\n");
  rightField.value = "";
  rightField.value = formattedText.replace(/(\n)/gm, " ");

  navigator.clipboard.writeText(rightField.value);
  leftField.select();
}

function checkEnter(e) {
  if ((e.ctrlKey && e.code === 'Enter')
    || (e.ctrlKey && e.code === 'KeyS')) {
      e.preventDefault();
      e.stopPropagation();
      convert();
      return false;
    }
}