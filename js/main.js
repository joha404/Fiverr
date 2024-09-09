window.onscroll = function () {
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;
  var item1 = document.getElementById("myItem2");
  var item2 = document.getElementById("myItem");

  if (scrollPosition > 200) {
    item1.style.display = "block";
  } else {
    item1.style.display = "none";
  }

  if (scrollPosition > 500) {
    item2.style.display = "block";
  } else {
    item2.style.display = "none";
  }
};
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
