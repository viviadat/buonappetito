$(document).foundation()

function openwindow() {
  var today = new Date();
  var hourNow = today.getHours();
  if (hourNow > 15) {
    window.open("menu_dinner.html","_self");}
  else if (hourNow > 0) {
    window.open("menu.html","_self")
  }

}
