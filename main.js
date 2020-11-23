// Written by Danial Fitri (dfx)
// This is a function to show or hide an element.
// Pass in the id of the element to show, and it will
// display the element by adding or removing the "shown"
// class.
// Also updates the navigation button styles by adding or
// removiing the "active" class (the buttons must follow
// the idname-btn naming format)

function show(tag) {
  let target = document.getElementById(tag);
  let active = document.getElementsByClassName("shown");
  let targetBtn = document.getElementById(tag + "-btn");
  let activeBtn = document.getElementsByClassName("active");

  active[0].classList.remove("shown");
  activeBtn[0].classList.remove("active");
  target.classList.add("shown");
  targetBtn.classList.add("active");
}