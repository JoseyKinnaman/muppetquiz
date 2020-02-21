$(document).ready(function() {
  $("form#survey").submit(function(){

    var gonzoScore = parseInt($("#gonzo-anxiety").val());
    var animalScore = parseInt($("#animal-party").val());
    
    console.log(gonzoScore);
    console.log(animalScore);
    event.preventDefault();
  });
});