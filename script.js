// Get references to the buttons and textarea
const txtArea = document.getElementById('txt');
const capBtn = document.getElementById('cap');
const smallBtn = document.getElementById('small');
const boldBtn = document.getElementById('bold');
const italBtn = document.getElementById('ital');
const lineBtn = document.getElementById('line');
const strikeBtn = document.getElementById('strike');
const fontUpBtn = document.getElementById('font-up');
const fontDownBtn = document.getElementById('font-down');
const windowUpBtn = document.getElementById('window-up');
const windowDownBtn = document.getElementById('window-down');
const fontSelect = document.getElementById('font-select');

// Uppercase button functionality
capBtn.addEventListener('click', () => {
  txtArea.value = txtArea.value.toUpperCase();
});

// Lowercase button functionality
smallBtn.addEventListener('click', () => {
  txtArea.value = txtArea.value.toLowerCase();
});

// Bold button functionality
boldBtn.addEventListener('click', () => {
  txtArea.style.fontWeight = txtArea.style.fontWeight === 'bold' ? 'normal' : 'bold';
});

// Italic button functionality
italBtn.addEventListener('click', () => {
  txtArea.style.fontStyle = txtArea.style.fontStyle === 'italic' ? 'normal' : 'italic';
});

// Underline button functionality
lineBtn.addEventListener('click', () => {
  txtArea.style.textDecoration = txtArea.style.textDecoration === 'underline' ? 'none' : 'underline';
});

// Strikethrough button functionality
strikeBtn.addEventListener('click', () => {
  txtArea.style.textDecoration = txtArea.style.textDecoration === 'line-through' ? 'none' : 'line-through';
});

// Font size increase functionality (Does not affect window size)
fontUpBtn.addEventListener('click', () => {
  let currentSize = parseFloat(window.getComputedStyle(txtArea).fontSize);
  txtArea.style.fontSize = (currentSize * 1.1) + 'px'; // Increase font size
});

// Font size decrease functionality (Does not affect window size)
fontDownBtn.addEventListener('click', () => {
  let currentSize = parseFloat(window.getComputedStyle(txtArea).fontSize);
  txtArea.style.fontSize = (currentSize / 1.1) + 'px'; // Decrease font size
});

// Window size increase functionality (Only affects window size, not font size)
windowUpBtn.addEventListener('click', () => {
  let currentWidth = parseFloat(window.getComputedStyle(txtArea).width);
  let currentHeight = parseFloat(window.getComputedStyle(txtArea).height);

  // Increase window size without changing font size
  txtArea.style.width = (currentWidth * 1.1) + 'px';
  txtArea.style.height = (currentHeight * 1.1) + 'px';
});

// Window size decrease functionality (Only affects window size, not font size)
windowDownBtn.addEventListener('click', () => {
  let currentWidth = parseFloat(window.getComputedStyle(txtArea).width);
  let currentHeight = parseFloat(window.getComputedStyle(txtArea).height);

  // Decrease window size without changing font size
  txtArea.style.width = (currentWidth / 1.1) + 'px';
  txtArea.style.height = (currentHeight / 1.1) + 'px';
});

// Font family change functionality
fontSelect.addEventListener('change', (e) => {
  txtArea.style.fontFamily = e.target.value;
});
