var portfo = document.getElementById("separator");
var links = document.querySelectorAll(".menu li");
window.addEventListener("scroll", () => {
  if (portfo.getBoundingClientRect().y <= 50) {
    document.getElementById("port").style.color = "black";
    document.getElementById("menu").style.color = "black";
    links.forEach((link) =>
      link.addEventListener("onmouseover", () => {
        link.style.color = "black";
      })
    );
  } else {
    document.getElementById("port").style.color = "white";
    document.getElementById("menu").style.color = "white";
  }
});
