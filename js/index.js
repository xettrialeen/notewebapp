$(document).ready(function () {
  $(".create").click(function (e) {
    e.preventDefault();
    $(".uil").css({
      transform: "rotate(45deg)",
      // trasition: "all 5s ease-in",
    });
  });

  setInterval(function () {
    $("#box").css({
      opacity: "100%",
      //   "background-color": "#000000",
    });
  }, 1400);
  setInterval(function () {
    // $(".textareas").mouseenter(function () {
    //   $(this).css({
    //     "text-decoration": "underline",
    //   });
    // });
    // $(".textareas").mouseout(function () {
    //   $(this).css({
    //     "text-decoration": "none",
    //   });
    // });
    $(".text-box-wrapper").css({
      display: "block",
      "animation-name": " wrapper",
      "animation-duration": " 1s",
      " animation-delay": " 0.2s",

      //   "background-color": "#000000",
    });
  }, 2700);
});
