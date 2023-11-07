window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 735 || document.documentElement.scrollTop > 735) {
    document.getElementById("navbar").style.backgroundColor = "rgb(45, 45, 45)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
  }
}