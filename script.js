let lists = document.getElementsByClassName("list");
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (list of lists) {
  list.addEventListener("dragstart", function (e) {
    let selected = e.target;
    selected.style.backgroundColor = "#27be11";

    rightBox.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    rightBox.addEventListener("drop", function (e) {
      rightBox.appendChild(selected);
      selected = null;
    });
  });
}

function reset() {
  location.reload();
}

let changer = (event) => {
  document.getElementById("para").style.color = "#e91363";
  setTimeout(function () {
    document.getElementById("para").style.color = "#0b0423";
  }, 1500);
};
