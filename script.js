//your JS code here. If required.
const bands = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil',
  'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State',
  'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
  'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Remove leading A, An, The for sorting
function strip(article) {
  return article.replace(/^(a |an |the )/i, '').trim();
}

const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

document.getElementById("band").innerHTML =
  sortedBands.map(item => `<li>${item}</li>`).join("");
