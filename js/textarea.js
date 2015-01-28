(function(){

  var textAreas = document.querySelectorAll('textArea[maxlength]');

  for(var i = 0; i < textAreas.length; ++i) {
    maxLengthTextArea(textAreas[i]);
  }

  function maxLengthTextArea(textArea) {
    var textMirror = textArea.parentNode.querySelector('.text-mirror');
    var textRemaining = textArea.parentNode.querySelector('.characters-remain');
    var textLimit = textArea.getAttribute('maxlength');
    charRemain();
    function charRemain () {
      textMirror.innerText = textArea.value;
      var charactersRemain = textLimit - textArea.value.length;
      textRemaining.innerText = 'You have ' + String(charactersRemain) + ' characters remaining';
      if (charactersRemain = 0) {
        textRemaining.color = red;
      }
      return charactersRemain;
    }

    textArea.addEventListener('keyup', charRemain);

  }

})();
