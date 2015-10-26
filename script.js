// $(document).ready(function(){

var game = {

    gamesPlayed : 0,
    answeredCorrect : 0,
    answeredWrong : 0,
    whichCard : 1,

    playGame : function(){
      this.loadCard();
      this.clickAnswer();
    },

    loadCard : function(){

      var cards = this.allCards["card"+this.whichCard];
      $('#questions').html(cards.question);
      $('#0').html(cards.option[0]);
      $('#1').html(cards.option[1]);
      $('#2').html(cards.option[2]);
      $('#3').html(cards.option[3]);
      $('#4').html(cards.option[4]);
      // put answer in a propery rather than making it a global variable
      answer = this.allCards["card"+this.whichCard].answer;
    },

    clickAnswer : function(){
      var cards = this.allCards["card"+this.whichCard];
      // var answer = cards.answer;
      $('.button').on('click', function(evt){
        if ((evt.target.textContent) == (answer)){
          console.log("correct");
          console.log(evt.target.textContent);
          console.log(cards.answer);
          this.answeredCorrect++;
        }else{
          console.log("wrong");
          console.log(evt.target.textContent);
          console.log(cards.answer);
          this.answeredWrong++;
        }
        this.gamesPlayed++;
        this.whichCard++;
        this.loadCard();
        $('.score').html(this.answeredCorrect + "/" + this.gamesPlayed + " correct!")
      }.bind(this))
    },


    allCards : {
  //
      card1 :
        {
        question : "Why did the chicken cross the road?",
        answer : "To Die",
        option : ["To Eat", "To Die", "To Fly", "To Sleep", "To Cry"],
      },

      card2 : {
        question: "What is the capital of China?",
        answer : "Beijing",
        option : ["Beijing", "Tokyo", "Moscow", "Ho Chi Min", "Shanghai"],
      },

      card3 : {
        question: "What is with this course?",
        answer : "Learning",
        option : ["Insanity", "Triginometry", "Start of human extinction", "Learning", "No correct answer"],
      },

      card4 : {
        question: "Peace out",
        answer : "Learning",
        option : ["Insanity", "Triginometry", "Start of human extinction", "Learning", "No correct answer"],
      },

      card5 : {
        question: "Chill out?",
        answer : "Learning",
        option : ["Insanity", "Triginometry", "Start of human extinction", "Learning", "No correct answer"],
      },

      card6 : {
        question: "Work dammit?",
        answer : "Learning",
        option : ["Insanity", "Triginometry", "Start of human extinction", "Learning", "No correct answer"],
      },
      card7 : {
        question: "Work dammit?",
        answer : "Learning",
        option : ["Insanity", "Triginometry", "Start of human extinction", "Learning", "No correct answer"],
      },
  },
}

game.playGame();

// });
