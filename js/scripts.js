$(document).ready(function() {
  $("form#userData").submit(function(event) {
    const drink = $("select#drinkChoice").val();
    const weapon = $("select#weaponChoice").val();
    const treasure = $("select#treasureChoice").val();
    const land = $("select#landChoice").val();

  $("results").show();
  $("span#name").prepent().text(name);

  