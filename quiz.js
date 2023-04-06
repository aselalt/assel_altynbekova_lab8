$(document).ready(function(){
     
     
  var correct = ["2009", "Astana"];
  var questions = [    "Q1. Which year Nazarbayev University was founded?",    "Q2. What is the capital of Kazakhstan?" ];
  var choice_options = [    ["2009","2010","2011","2012"],
  ["Astana","Almaty","Shymkent","Karaganda"]
  ];
  
 
  var quizBox = $("#quiz-box");
  
  var questionDivs = questions.map(function(question, i) {
    var questionDiv = $("<div class='question'>");
    questionDiv.append("<p class='d'>" + question + "</p>");
    
    var optionLabels = choice_options[i].map(function(option, j) {
      var optionLabel = $("<label>");
      var optionInput = $("<input type='radio' name='q" + (i+1) + "' value='" + option + "'>");
      optionLabel.append(optionInput);
      optionLabel.append(" " + option);
      return optionLabel;
    });
    
    questionDiv.append(optionLabels);
    return questionDiv;
  });
  
  quizBox.append(questionDivs);
    
  
  
  var countCorrect = 0;
  var reset = false;
  
  $("button").click(function(event) {
    let countCorrect = 0;
    
    $("input[type='radio']:checked").each(function() {
      const answer = $(this).val();
      const questionIndex = $(this).attr("name").slice(1) - 1;
      
      if (answer === correct[questionIndex]) {
        countCorrect++;
      }
    });
    
    $("#quiz-result").html("<h2>Quiz result is: " + countCorrect + " out of " + questions.length + "</h2>");
  });
});
