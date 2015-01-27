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
      // Create key from each item to be placesd in the WordsCountObject
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
//         callback(x, options);
//       }
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

/*
Rand Enumerable
Create an Object that creates Random Number within a given scope
*/

function RandEnumerable(fromX, toY) {
  var cancelled = false;
  // Object Constructor
  var options = {
    cancel: function () {
      cancelled = true;
    },
    count: 0
  }

  var result = {
    enumerateRand: function (callback) {
      var i = 0;
      while (!cancelled){
        i++;
        toY = toY - fromX;
        var randNum = Math.round(Math.random()*toY) + fromX;
        ++options.count;
        callback(randNum, options);
      }
    }
  }

  return result;
}

var testRand = RandEnumerable(1, 100000);
testRand.enumerateRand(function (item, options) {
  console.log(item);
  if (options.count > 50){
    console.log('ok, that\'s it')
    options.cancel();
  }
});
