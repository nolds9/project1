// $(document).ready(function(){

var game = {

    gamesPlayed : 0,
    answeredCorrect : 0,
    answeredWrong : 0,
    whichCard : 1,
    deckSize: 8,

    //setting decksize below
    // deckSizeFunction : function(obj) {
    //   var size = 0, key;
    //   for (key in obj) {
    //       if (obj.hasOwnProperty(key)) size++;
    //   }
    //   return size;
    // },

    playGame : function(){
      this.loadCard();
      this.clickAnswer();
    },


    loadCard : function(){

      if(this.gamesPlayed == this.deckSize){
        $('#questions').html(this.answeredCorrect + "/" + this.gamesPlayed + " correct!");
        $('#buttons').html("It is over");
      }else{
              var cards = this.allCards["card"+this.whichCard];
              $('#questions').html(cards.question);
              $('#0').html(cards.option[0]);
              $('#1').html(cards.option[1]);
              $('#2').html(cards.option[2]);
              $('#3').html(cards.option[3]);
              $('#4').html(cards.option[4]);
              // put answer in a propery rather than making it a global variable
              answer = this.allCards["card"+this.whichCard].answer;
            }
    },

    clickAnswer : function(){
      var cards = this.allCards["card"+this.whichCard];
      // var answer = cards.answer;
      $('.button').on('click', function(evt){
        if ((evt.target.textContent) == (answer)){
          this.answeredCorrect++;
        }else{
          this.answeredWrong++;
        }
        this.gamesPlayed++;
        this.whichCard++;
        this.loadCard();
        $('.score').html(this.answeredCorrect + "/" + this.gamesPlayed + " correct!")
      }.bind(this))
    },

    // objectSize : function(obj) {
    //   var size = 0, key;
    //   for (key in obj) {
    //       if (obj.hasOwnProperty(key)) size++;
    //   }
    //   return size;
    // },



    allCards : {
  //
      card1 :
        {
        question : "Why did the chicken cross the road?",
        answer : "To Get to the Otherside",
        option : ["To Eat", "To Get to the Otherside", "To Fly", "To Sleep", "To Cry"],
      },

      card2 : {
        question: "What is the capital of China?",
        answer : "Beijing",
        option : ["Beijing", "Tokyo", "Moscow", "Ho Chi Min", "Shanghai"],
      },

      card3 : {
        question: "What is with this course?",
        answer : "Learning to learn",
        option : ["Insanity", "Triginometry", "Start of human extinction", "Learning to learn", "No correct answer"],
      },

      card4 : {
        question: "Hurry ,Capital of Canada, what is it?",
        answer : "Ottawa",
        option : ["Toronto", "Quebec", "Vancouver", "Ottawa", "Washington DC"],
      },

      card5 : {
        question: "Fill in the blank: Get to the ________!!!",
        answer : "chopper",
        option : ["hospital", "boat", "chopper", "bar", "gym"],
      },

      card6 : {
        question: "What was the first day of Autum in 2015?",
        answer : "September 23rd",
        option : ["September 15th", "August 5th", "September 27th", "August 13th", "September 23rd"],
      },
      card7 : {
        question: "Work dammit?",
        answer : "Learning",
        option : ["Insanity", "Triginometry", "Start of human extinction", "Learning", "No correct answer"],
      },
      card8 : {
        question: "In the popular TV program Adventure Time, what is the name of the cranky despot styled afer a lemon?",
        answer : "Lemongrab",
        option : ["Princess Bubblegum", "Jake", "Lemonhurt", "Lemongrab", "Peppermint Butler"],
      },
  },
}

game.playGame();

// });
