$(document).ready(function () {
    initializeCookieBanner();
  $("#burger").click(function () {
    $(".menu").toggle(1000);
  });
  $("body").on("click", '[href*="#"]', function (e) {
    var fixed_offset = 100;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });
  $("#1").click(function () {
    $("#11").toggle(1000);
  });
  $("#2").click(function () {
    $("#22").toggle(1000);
  });
  $("#3").click(function () {
    $("#33").toggle(1000);
  });
  $(".single-item").slick();
});

function showCookieBanner() {
  let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
  cookieBanner.style.display = "block";
}
function hideCookieBanner() {
    sessionStorage.setItem("web_dev_isCookieAccepted", "yes");
  let cookieBanner = document.getElementsByClassName("nk-cookie-banner")[0];
  cookieBanner.style.display = "none";
}
function initializeCookieBanner() {
  let isCookieAccepted = sessionStorage.getItem("web_dev_isCookieAccepted");
  if (isCookieAccepted === null) {
    sessionStorage.clear();
    sessionStorage.setItem("web_dev_isCookieAccepted", "no");
    showCookieBanner();
  }
  if (isCookieAccepted === "no") {
    showCookieBanner();
  }
}
window.onload = initializeCookieBanner();
