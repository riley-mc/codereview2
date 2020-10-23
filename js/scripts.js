function totalValue (number1, number2, number3, number4)  {
  return parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4)

}

$(document).ready(function() {
  $("#questions").submit(function(event) {
    event.preventDefault();
    
  }

  $(".start-button").click(function() {
    $(".begin-showing").show();
    $(".begin-hidden").hide();
  });
});

