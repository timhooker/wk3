(function(){

  var textArea = document.querySelector('.text-input');
  textArea.value = '';
  var textMirror = document.querySelector('.text-mirror');
  var textRemaining = document.querySelector('.characters-remain');
  var textLimit = 200;

  // textArea.addEventListener('keydown', function(e){
  //   textMirror.innerText = textArea.value;
  // });
  textArea.addEventListener('keyup', function(e){
    textMirror.innerText = textArea.value;
    var char = charRemain();
    if (char ===0 ) {
      // not sure

    }
  });
  function charRemain () {
    var charactersRemain = textLimit - textArea.value.length;
    textRemaining.innerText = 'You have ' + charactersRemain + ' characters remaining';
    return charactersRemain;
  }
})();
