// $(document).ready(function(){

var game = {

    gamesPlayed : 0,
    answeredCorrect : 0,
    answeredWrong : 0,

    playGame : function(){
      this.loadCard();
      this.clickAnswer();
    },

    loadCard : function(){
      var cards = this.allCards.card1;
      $('#questions').html(cards.question);
      $('#0').html(cards.option[0]);
      $('#1').html(cards.option[1]);
      $('#2').html(cards.option[2]);
      $('#3').html(cards.option[3]);
      $('#4').html(cards.option[4]);
    },

    clickAnswer : function(){
      var cards = this.allCards.card1;
      $('.button').on('click', function(evt){
        if ((evt.target.textContent) == (cards.answer)){
          console.log("correct");
          this.answeredCorrect++;
        }else{
          console.log("wrong");
          this.answeredWrong++;
        }
        this.gamesPlayed++;
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
  },
}

game.playGame();

// });
