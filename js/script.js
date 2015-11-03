// NHO: Ran code through Atom's beautify package to correct formatting, spacing, etc.

$(document).ready(function() { // NHO: why was this commented out?
  var game = { // NHO: great job wrapping everything in an object!

      // NHO: Set defaults...
      gamesPlayed: 0,
      answeredCorrect: 0,
      answeredWrong: 0,
      whichCard: 1,
      deckSize: 20,
      countDown: 91,
      intervals: "",
      timeoutId: "",
      playerName: "",

      // NHO: stylistically, why the extra spaces before the colons for the keys in this object?
      playGame: function() {
        this.loadCard();
        this.clickAnswer();
        this.setTime();
      },

      setTime: function() { // NHO: nice timer functionality!
        this.timeoutId = setTimeout(function() {
          game.winningConditions(); // NHO: how could we reference the global object without referring to it by name?
        }, 92000);
        this.intervals = setInterval(function() {
          game.countDown--;
          $('.title').html(game.countDown);
        }, 1000);
      },

      loadCard: function() {
        if (this.gamesPlayed == this.deckSize) {
          this.winningConditions();
        } else {
          var cards = this.allCards["card" + this.whichCard]; // NHO: Awesome!
          $('#questions').html('<span>' + cards.question + '</span>');
          $('#0').html(cards.option[0]);
          $('#1').html(cards.option[1]);
          $('#2').html(cards.option[2]);
          $('#3').html(cards.option[3]);
          $('#4').html(cards.option[4]);
          // put answer in a propery rather than making it a global variable // NHO: +1!
          answer = this.allCards["card" + this.whichCard].answer; // NHO: how would we do this?
        }
      },

      clickAnswer: function() {
        var cards = this.allCards["card" + this.whichCard]; // NHO: where do we use this variable in this method?
        // var answer = cards.answer;
        $('.button').on('click', function(evt) {
          if ((evt.target.textContent) == (answer)) {
            this.answeredCorrect++;
          } else {
            this.answeredWrong++;
          }
          this.gamesPlayed++;
          this.whichCard++;
          this.loadCard();
          // $('.score').html('<h2>' + this.answeredCorrect + "/" + this.deckSize + " correct!" + '</h2>')
          $('.score').html('<h2>' + this.answeredCorrect + "/" + this.deckSize + " Correct" + "!     " + this.answeredWrong + "/" + this.deckSize + " Wrong" + "!     " + ((this.deckSize + 1) - this.whichCard) + " cards remaining!" + '</h2>')
        }.bind(this))
      },

      reset: function() {
        this.gamesPlayed = 0,
          this.gamesPlayed = 0, // NHO: Duplicate line?
          this.answeredCorrect = 0,
          this.answeredWrong = 0,
          this.whichCard = 1,
          this.deckSize = 20,
          this.countDown = 91;
        $('#buttons').html('<button id="0" class="button">' + "A" + '</button>' + '<button id="1" class="button">' + "B" + '</button>' + '<button id="2" class="button">' + "C" + '</button>' + '<button id="3" class="button">' + "D" + '</button>' + '<button id="4" class="button">' + "E" + '</button>')
          // this.playGame();
        $('.score').html('<h2>' + "What will you score be?" + '</h2>')
        $('.title').html('<h1 class="title">' + "Trivia: Answer right, get a surprise!" + '</h1>')
        $('#questions').html('<h4>' + "Enter Your Name and Click Start Game to Begin:" + '</h4>' + '<input type="text" name="FirstName" placeholder="Arnold" id="inputBox">' + '<button id="startgame">' + "Start Game" + '</button>');
        $('#startgame').on('click', function() {
          game.playerName = $('#inputBox').val();
          game.playGame();
        });
      },

      winningConditions: function() {
        var self = game;
        console.log(self);
        if ((game.answeredCorrect / game.deckSize) <= .25) { // NHO: Unhappy Arnold!
          $('#questions').html('<div class="picture">' + '<img src="images/unhappyarnold.jpg">' + '<div>' + '<h4>' + this.playerName + ", it is over, you think that was good enough?" + '</h4>');
          $('#buttons').html('<button id="reset">' + "reset" + '</button>');
          $('#reset').on('click', function() {
            self.reset()
          });
          clearInterval(self.intervals);
          clearTimeout(self.timeoutId);
        } else if (game.answeredCorrect / game.deckSize <= .75) { // NHO: Mildly not displeased Arnold!
          $('#questions').html('<div class="picture">' + '<img src="images/arnoldmedium.jpg">' + '<div>' + '<h4>' + "Good job " + this.playerName + ", but you are still out of shape.  Work harder!" + '</h4>');
          $('#buttons').html('<button id="reset">' + "reset" + '</button>');
          $('#reset').on('click', function() {
            self.reset()
          });
          clearInterval(self.intervals);
          clearTimeout(self.timeoutId);
        } else { // NHO: Game Over Arnold
          $('#questions').html('<div class="picture">' + '<img src="images/itsover.jpg">' + '<div>' + '<h4>' + "Wow! " + this.playerName + ", you are the best!" + '</h4>');
          $('#buttons').html('<button id="reset">' + "reset" + '</button>');
          $('#reset').on('click', function() {
            self.reset()
          });
          clearInterval(self.intervals);
          clearTimeout(self.timeoutId);
        }
      },

      allCards: {

        card1: {
          question: "Why did the chicken cross the road?",
          answer: "To Get to the Otherside",
          option: ["To Eat", "To Get to the Otherside", "To Fly", "To Sleep", "To Cry"],
        },

        card2: {
          question: "What is the capital of China?",
          answer: "Beijing",
          option: ["Beijing", "Tokyo", "Moscow", "Ho Chi Min", "Shanghai"],
        },

        card3: {
          question: "What is the true purpose of this course?",
          answer: "Learning to learn",
          option: ["To tigger psychotic episodes", "Triginometry", "The beginning human extinction", "Learning to learn", "No correct answer"],
        },

        card4: {
          question: "What is the Captial of Canada?",
          answer: "Ottawa",
          option: ["Toronto", "Quebec", "Vancouver", "Ottawa", "Washington DC"],
        },

        card5: {
          question: "Fill in the blank: Get to the ________!!!",
          answer: "chopper",
          option: ["hospital", "boat", "chopper", "bar", "gym"],
        },

        card6: {
          question: "What was the first day of Autum in 2015?",
          answer: "September 23rd",
          option: ["July 15th", "August 5th", "November 27th", "August 1st", "September 23rd"],
        },
        card7: {
          question: "What is a Honey Badger's favorite food?",
          answer: "Honey",
          option: ["Honey", "Humans", "Ants", "Beer", "Math"],
        },
        card8: {
          question: "Who played Sirius Black in the Harry Potter feature film franchise?",
          answer: "Gary Oldman",
          option: ["Jude Law", "Elijah Wood", "Benedict Cumberbatch", "Gary Oldman", "Steve Buscemi"],
        },
        card9: {
          question: "The Karni Mata temple in India is dedicated to which furry animal?",
          answer: "Rats",
          option: ["Koalas", "Cows", "Red Pandas", "Rats", "Gerard Butler"],
        },
        card10: {
          question: "One of the most complex parts of a watch is known as a ",
          answer: "Tourbillon",
          option: ["Barrel Spring", "Bregeut Slip Spring", "Parachrom Hairspring", "Synthetic Ruby", "Tourbillon"],
        },
        card11: {
          question: "What would happn if you pass the event horizon?",
          answer: "No one knows",
          option: ["No one knows", "Spaghettification", "You attain Nirvana", "Immediate death", "Alien contact"],
        },
        card12: {
          question: "In the popular animation series Adventure Time, what is the name of the cranky despot styled after a Lemon?",
          answer: "Lemongrab",
          option: ["Lemongarp", "Princess Bubblegum", "Jake", "Lemongrab", "Finn"],
        },
        card13: {
          question: "Why do cats blink slowly at you?",
          answer: "A sign of purrr love",
          option: ["A sign of purrr hate", "Jealousy", "Intoxication", "Anger", "A sign of purrr love"],
        },
        card14: {
          question: "How much wood could a woodchuck chuck if a woodchuck could chuck wood?",
          answer: "60 lols",
          option: ["50 cords", "20 cords", "10 cords", "30 cords", "60 lols"],
        },
        card15: {
          question: "What was the first computer called?",
          answer: "ENIAC",
          option: ["ENIAC", "SKYNET", "MNTDOOM", "DARPA", "Antikythera mechanism"],
        },
        card16: {
          question: "Velociraptor takes you by surprise, you say:",
          answer: "Clever girl",
          option: ["&!@#", "Well, that's it.", "Ellie, the doorlocks!", "Clever girl", "Must go faster"],
        },
        card17: {
          question: "What color is #FF0000",
          answer: "Red",
          option: ["Yellow", "Purple Mountain Majesty", "Red", "Periwinkle", "Grey"],
        },
        card18: {
          question: "Although lesser known, this style of Buddhism focuses on immediate enlightnement.",
          answer: "Vajrayana",
          option: ["Theravada", "Mahayana", "Jodo Shinshu", "Vajrayana", "Hinduyana"],
        },
        card19: {
          question: "Who is the man/woman?",
          answer: "You are!",
          option: ["Jack Sparrow", "You are!", "Mr. Bond", "Dr. Grant", "Nick Cage"],
        },
        card20: {
          question: "Where is the highest swamp in the world?",
          answer: "Kauai, Hawaii",
          option: ["Kauai, Hawaii", "Mordor", "England", "Washington DC", "Arizona"],
        } // NHO: watch out for syntax in objects - the last key does not need a comma after
        // ========= NHO: Make sure to remove commented out / unused code ===============
      }
    } // NHO: ends game object

  // NHO: When `start game` button is clicked...
  $('#startgame').on('click', function() {
    game.playerName = $('#inputBox').val();
    game.playGame();
  });

}); // NHO: ends document.ready

// ============= NHO: Great job! Please see feedback_nho.md for more comments ==================
