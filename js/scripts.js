$(document).ready(function() {
  $(".start-button").click(function() {
    $(".begin-showing").show();
    $(".begin-hidden").hide();
     event.preventDefault();   
  });
});




let weapon = $("input[name='weapon']:checked").val();

let beverage = $("input[name='beverage']:checked").val();

let land = $("input[name='land']:checked").val();

let treasure = $("input[name='treasure']:checked").val();

let truth = $("input[name='truth']:checked").val();

let total = totalValue (weapon, beverage, land, treasure, truth);

$(".result1").hide();
$(".result2").hide();
$(".result3").hide();
$(".result4").hide();

if (total >=14) {
  $(".result1").show();
} else if (total >=11) {
  $(".result2").show(); 
} else if (total >= 8) {
  $(".result3").show();
} else if (total >=4) {
  $(".result4").show();
} 

function totalValue (number1, number2, number3, number4) {
  return parseInt(number1) + parseInt(number2) + parseInt(number3) + parseInt(number4)
}

