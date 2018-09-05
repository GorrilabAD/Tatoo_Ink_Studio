$(document).ready( function () {
  $("#mobile_menu").hide();

  $("#click").on('click', function () {
    $(".container_line").toggleClass(" slide_toggle");
    $("#mobile_menu").slideToggle(1000);
  })
});
