$(document).ready(function() {
  $("form#userData").submit(function(event) {
    const drink = $("select#drinkChoice").val();
    const weapon = $("select#weaponChoice").val();
    const treasure = $("select#treasureChoice").val();
    event.preventDefault();

  $("results").show();
  $("span#name").prepent().text(name);

  if(weapon === "theSword") {
    $("#JavaScriptWarrior").fadeIn();
    $("#RubyWizard").hide();
    $("#PythonMonk").hide();
    $("#CSharpBard").hide();
  }
  else if (drink === "theWine" && weapon != "theSword") {
    $("#CSharpBard").fadeIn();
    $("#JavaScriptWarrior").hide();
    $("#RubyWizard").hide();
    $("#PythonMonk").hide();
  }
  else if (drink === "theGoo" && weapon ==="theStaff") {
    $("#RubyWizard").fadeIn();
    $("#CSharpBard").hide();
    $("#JavaScriptWarrior").hide();
    $("#PythonMonk").hide();
  }
  else {
    $("#PythonMonk").fadeIn();
    $("#RubyWizard").hide();
    $("#CSharpBard").hide();
    $("JavaScriptWarrior").hide();
  }
  
    });
  });