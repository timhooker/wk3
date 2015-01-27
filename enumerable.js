// Word Count
function wordCount(str) {
  // Create an Array that we will use to publish our results
  var result = [];

  // Create an Object that we will use to generate our results
  var wordsCountObject = {};

  // Create a Constructor Function for our Objects
  function WordObject(spec) {
    return {
      word: spec.word,
      count: spec.count
    }
  }

  // Split up the Array into words
  wordsArray = str.toLowerCase().split(' ');

  //Loop Through Words
  wordsArray.forEach(function(evalWord){
    // Get rid of extra characters
    if ( evalWord.substr(-1) === ',' || evalWord.substr(-1)==='.' ) {
      evalWord = evalWord.slice(0,-1);
    }

    // If the key does not exist
    if ( !wordsCountObject[ evalWord ] ) {
      // Create key from each item to be placed in the WordsCountObject
      wordsCountObject[ evalWord ] = 0;
    }
    // If the object key already exists, increment the count
    ++wordsCountObject[evalWord];
  });

  // parse the array out into individual Objects by word
  for (words in wordsCountObject) {
    result.push( WordObject( { 'word': words, 'count': wordsCountObject[words] } ) );
  }

  // return the result
  return result;
}


var myWords = 'A cat, a mouse, and the Cat Captain.'
wordCount(myWords);

//
// function wordCount(str) {
//   // Array to Deliver the words Counted in
//   var result = [];
//
//   // Function to Contruct the Word Objects
//   function CreateWord(spec) {
//     return {
//       word: spec.word,
//       count: spec.count
//     }
//   }
//
//   // Function to assess words and store them as objects
//   var wordsToCount = str.split(' ');
//
//   wordsToCount.forEach(function(strItem) {
//     // word is the current indexed word
//     // result.forEach(function(countIndex) {
//     for (var i=0; i < wordsToCount.length; ++i ) {
//
//       // if we have a new word object increment it's value
//       if (wordsToCount[i].word === strItem) {
//         ++countIndex.value;
//       } else {
//         // if we need a new word object, create it
//         result.push( CreateWord({ word: strItem, count: 0 }) );
//       } // End of If/ELSE
//
//     }; // end of result.forEach
//
//   }); // end of str.split
//   return result;
// }



// function Sayable() {
//   var result = {
//     say: function (text) {
//       console.log(text);
//       return result;
//     }
//   }
// }


// Enumerable Exercises

// function ArrayEnumerable(arr, options) {
//
// }
//
// var options = {
//   'cancel' = function(){};
// };
//
// var options['cancel'] = function () {
// }

/*
Range Enumerable
*/
//
// function RangeEnumerable(fromX, toY) {
//   var cancelled = false;
//
//   var options = {
//     cancel: function() {
//       cancelled = true;
//     }
//   }
//
//   var result = {
//     enumerate: function(callback) {
//       for(var x = fromX; x <= toY; ++x) {
//         callback(x);
//       }
//
//       callback(x, options);
//     }
//   };
//
//
//
//   return result;
// }
//
// var testEnum = RangeEnumerable(1,10);
// testEnum.enumerate(function (item) {
//
// });
//
// function linqEnumerable(enumerable) {
//   return {
//
//   };
// }
