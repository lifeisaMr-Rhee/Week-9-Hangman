var lettersToDisplay = function(word, goodGuesses){
    
    this.goodLetters = goodGuesses;
    this.displayText = '';
    this.gameWord = word;

    // player starts the game as loser to not have premature win
    this.winner = false;
  
    this.parseDisplay = function(){
  
      // Show the user the word
      var shown = '';
  
      if(this.goodLetters == undefined){
       for(var i = 0; i < this.gameWord.length; i++){
        
          shown += ' _ ';
        }
      }

      else{
  
        // loop through the word itself and then each possible correct letter
        for(var i = 0; i < this.gameWord.length; i++){
  
          var letterWasFound = false;
  
          for(var j = 0; j < this.goodLetters.length; j++){

            if(this.gameWord[i] == this.goodLetters[j]){
              shown += this.goodLetters[j];
              letterWasFound = true;
            }
          }
          if(!letterWasFound){
            shown += ' _ ';
          }
        }
      }
  

      this.displayText = shown.trim();
      console.log(this.displayText);
  
      if(this.displayText == this.gameWord){
        this.winner = true;
      }
  
    }
  };
  
  // export to word.js
  module.exports = lettersToDisplay;