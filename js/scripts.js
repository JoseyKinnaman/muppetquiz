$(document).ready(function() {
  $("form#survey").submit(function(){

    var animalScore = parseInt($("#animal-party").val());
    var gonzoScore = parseInt($("#gonzo-anxiety").val());
    var fozzieScore = parseInt($("#fozzie-funny").val());
    var piggyScore = parseInt($("#piggy-sassy").val());


    console.log("Your current Gonzo Score is:  " + gonzoScore);
    console.log("Your current Animal Score is:  " + animalScore);
    console.log("Your current Fozzie score is:  " + fozzieScore);
    console.log("Your current Ms. Piggy score is:  " + piggyScore);

    if animalScore > fozzieScore && animalScore > gonzoScore && animalScore > piggyScore
    
    event.preventDefault();
  });
});