// $(document).ready(function(){

var game = {

    gamesPlayed : 0,
    answeredCorrect : 0,
    answeredWrong : 0,
    whichCard : 1,
    deckSize: 20,

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
              $('#questions').html('<span>' + cards.question + '</span>');
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
        question: "What is a Honey Badger's favorite food?",
        answer : "Honey",
        option : ["Honey", "Humans", "Ants", "Beer", "Math"],
      },
      card8 : {
        question: "Who played Sirius Black in the Harry Potter feature film franchise?",
        answer : "Lemongrab",
        option : ["Jude Law", "Elijah Wood", "Benedict Cumberbatch", "Gary Oldman", "Steve Buscemi"],
      },
      card9 : {
        question: "The Karni Mata temple in India is dedicated to which furry animal?",
        answer : "Rats",
        option : ["Koalas", "Cows", "Red Pandas", "Rats", "Gerard Butler"],
      },
      card10 : {
        question: "One of the most complex parts of a watch is known as a ",
        answer : "Tourbillon",
        option : ["Barrel Spring", "Bregeut Slip Spring", "Parachrom Hairspring", "Synthetic Ruby", "Tourbillon"],
      },
      card11 : {
        question: "What would happn if you pass the event horizon?",
        answer : "No one knows",
        option : ["No one knows", "Spaghettification", "You attain Nirvana", "Immediate death", "Alien contact"],
      },
      card12 : {
        question: "Out of the options below, who is the hottest President of the United States of America?",
        answer : "Slick Willy",
        option : ["W", "Slick Willy", "Calivn Coolidge", "Vladamir Putin", "Obama for 2016"],
      },
      card13 : {
        question: "Why do cats blink slowly at you?",
        answer : "A sign of purrr love",
        option : ["A sign of purrr hate", "Jealousy", "Intoxication", "Anger", "A sign of purrr love"],
      },
      card14 : {
        question: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
        answer : "60 lols",
        option : ["50 cords", "20 cords", "10 cords", "30 cords", "60 lols"],
      },
      card15 : {
        question: "What was the first computer called?",
        answer : "ENIAC",
        option : ["ENIAC", "SKYNET", "MNTDOOM", "DARPA", "Antikythera mechanism"],
      },
      card16 : {
        question: "Velociraptor takes you by surprise, you say:",
        answer : "Clever girl",
        option : ["&!@#", "....", "Ellie, the doorlocks!", "Clever girl", "Must go faster"],
      },
      card17 : {
        question: "What color is #FF0000",
        answer : "Red",
        option : ["Yellow", "Purple Mountain Majesty", "Red", "Periwinkle", "Grey"],
      },
      card18 : {
        question: "Although lesser known, this style of Buddhism focuses on immediate enlightnement.",
        answer : "Vajrayana",
        option : ["Theravada", "Mahayana", "Jodo Shinshu", "Vajrayana", "Hinduyana"],
      },
      card19 : {
        question: "Who is the man/woman?",
        answer : "You are!",
        option : ["Jack Sparrow", "You are!", "Mr. Bond", "Dr. Grant", "Nick Cage"],
      },
      card20 : {
        question: "Where is the highest swamp in the world?",
        answer : "Kauai, Hawaii",
        option : ["Kauai, Hawaii", "Mordor", "England", "Colombia", "Colorado"],
      },


  },
}

game.playGame();

// });
