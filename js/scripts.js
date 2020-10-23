$(document).ready(function() {
  $(".start-button").click(function() {
    $(".begin-showing").show();
    $(".begin-hidden").hide();
  });
  });


  const brand = $("input:radio[name=brand]:checked").val();