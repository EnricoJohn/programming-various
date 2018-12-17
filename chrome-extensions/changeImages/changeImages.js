let filenames = ["bg.jpg"];

let imgs = document.getElementsByTagName("img");

for (imgElt of imgs) {
  let r = Math.floor(Math.random() * filenames.length);
  let file = "images/" + filenames[r];
  let url = chrome.extension.getURL(file);
  imgElt.src = url;
  console.log(url);
}
