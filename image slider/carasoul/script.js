let index = 1;

function show() {
  document.getElementById("slide").src =
    "https://picsum.photos/400/200?" + index;
}

function next() {
  index++;
  show();
}

function prev() {
  index--;
  if (index < 1) index = 1;
  show();
}