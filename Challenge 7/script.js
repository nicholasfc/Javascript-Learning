(function() {
  var Question = function(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  };

  Question.prototype.displayQuestion = function(){
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

  Question.prototype.checkAnswer = function(ans, callback) {
    var sc;
    if (ans === this.correct) {
      console.log('You got it right');
      sc = callback(true);
    } else {
      console.log('You got it Wrong. The correct answer is ' + this.correct);
      sc = callback(false);
    }
    this.displayeScore(sc);
  }

  Question.prototype.displayeScore = function(score) {
    console.log('Your current score is: ' + score);
    console.log('--------------------');
  }

  var question1 = new Question('What is 2+2?', [1,8,4], 2);
  var question2 = new Question('Which is the capital of Portugal?', ['Lisboa', 'Porto', 'Aveiro'], 0);
  var question3 = new Question('Who is teaching this class?', ['John', 'Jonas', 'Mike'], 1);

  var questions = [question1, question2, question3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score();

  function nextQuestion() {

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answers = prompt('Please select the correct answer');

    if (answers !== 'exit') {
      questions[n].checkAnswer(parseInt(answers), keepScore);
      nextQuestion();
    }

  }
  nextQuestion();
})();



/*var questionChoice = function() {
  var choice = Math.floor(Math.random() * 3) + 1;

  if (choice === 1) {
    return function() {
      console.log(question1.question);
      for (var i = 0; i < question1.answers.length; i++) {
        console.log(question1.answers[i]);
      }
    }
  } else if (choice === 2) {
    return function() {
      console.log(question2.question);
      for (var i = 0; i < question2.answers.length; i++) {
        console.log(question2.answers[i]);
      }
    }
  } else {
    return function() {
      console.log(question3.question);
      for (var i = 0; i < question3.answers.length; i++) {
        console.log(question3.answers[i]);
      }
    }
  }
};

questionChoice();*/
