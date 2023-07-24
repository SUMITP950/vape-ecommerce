(function ($) {
  "use strict";

  var ctx = document.getElementById("growthChart").getContext("2d");

  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Jan 21",
        "Feb 21",
        "Mar 21",
        "Apr 21",
        "May 21",
        "Jun 21",
        "Jul 21",
        "Aug 21",
        "Sep 12",
        "Oct 21",
      ],
      datasets: [
        {
          label: "Uploads", // Name the series
          data: [2, 50, 45, 65, 63, 56, 50, 35, 28, 45], // Specify the data values array
          fill: false,
          borderColor: "#2196f3", // Add custom color border (Line)
          backgroundColor: "#2196f3", // Add custom color background (Points and Fill)
          borderWidth: 1, // Specify bar border width
        },
        {
          label: "Earnings",
          data: [20, 58, 32, 78, 56, 89, 87, 96, 92, 100],
          fill: false,
          borderColor: "#ff6191",
          backgroundColor: "#ff6191",
          borderWidth: 1,
        },
        {
          label: "Sales",
          data: [20, 25, 10, 35, 45, 32, 78, 56, 89, 87],
          fill: false,
          borderColor: "#33317d",
          backgroundColor: "#33317d",
          borderWidth: 1,
        },
        {
          label: "Returns",
          data: [2, 7, 4, 10, 5, 3, 2, 8, 3, 4],
          fill: false,
          borderColor: "#f79165",
          backgroundColor: "#f79165",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
    },
  });
})(jQuery);

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) => {
  if (!menu.classList.contains("active")) {
    return;
  }
  if (e.target.closest(".menu-item-has-children")) {
    const hasChildren = e.target.closest(".menu-item-has-children");
    showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click", () => {
  hideSubMenu();
});
menuTrigger.addEventListener("click", () => {
  toggleMenu();
});
closeMenu.addEventListener("click", () => {
  toggleMenu();
});
document.querySelector(".menu-overlay").addEventListener("click", () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren) {
  subMenu = hasChildren.querySelector(".sub-menu");
  subMenu.classList.add("active");
  subMenu.style.animation = "slideLeft 0.5s ease forwards";
  const menuTitle =
    hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
  menu.querySelector(".current-menu-title").innerHTML = menuTitle;
  menu.querySelector(".mobile-menu-head").classList.add("active");
}

function hideSubMenu() {
  subMenu.style.animation = "slideRight 0.5s ease forwards";
  setTimeout(() => {
    subMenu.classList.remove("active");
  }, 300);
  menu.querySelector(".current-menu-title").innerHTML = "";
  menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains("active")) {
      toggleMenu();
    }
  }
};
