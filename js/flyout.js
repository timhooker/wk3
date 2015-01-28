(function(){

  function toggleClass(element, className) {
    var currentClasses = element.className;

    if (currentClasses.indexOf(className) >= 0) {
      element.className = currentClasses.replace(className, '').trim();
    } else {
      element.className += ' ' + className;
    }
  }

  function removeClass(element, className) {
    var currentClasses = element.className;

    if (currentClasses.indexOf(className) >= 0) {
      element.className = currentClasses.replace(className, '').trim();
    }
  }


  var nav = document.querySelector('.page-nav');

  nav.addEventListener('click', function(e) {
    e.stopPropagation();
    if( e.target.className.indexOf('dropdown-button') >= 0 ){

      // find parent node
      var myDropDown = e.target.parentNode;
      // add active class
      toggleClass(myDropDown, 'dropdown-active');

      closeDropDown(nav, myDropDown);
    }
  })

  function closeDropDown(parentNav, myDrop){
    // search navigate out to the parent and search for other
    var dropdowns = parentNav.querySelectorAll('.dropdown');
    // elements with the same class and remove them
    for (i=0; i < dropdowns.length; ++i) {
      if (dropdowns[i] !== myDrop) {
        removeClass(dropdowns[i], 'dropdown-active');
      }
    }

  }

  var body = document.querySelector('body');

  body.addEventListener('click', function(){
    var activeDropdowns = document.querySelectorAll('.dropdown-active');
    for (i=0; i < activeDropdowns.length; ++i) {
        removeClass(activeDropdowns[i], 'dropdown-active');
    }
  })
})();
