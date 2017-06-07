
function scroll(eID, speed) {

  var windowObject = window;

  var windowPos = windowObject.pageYOffset;

  //var pointer = toElement.getAttribute('href').slice(1);

  var elem = document.getElementById(eID);

  var elemOffset = elem.offsetTop;



  if (windowPos > elemOffset) {

    speed = (windowPos - elemOffset) / speed;

  }

  if (windowPos < elemOffset) {

    speed = (elemOffset - windowPos) / speed;

  }

  var counter = setInterval(function () {

    windowPos;



    if (windowPos > elemOffset) { // from bottom to top

      windowObject.scrollTo(0, windowPos);

      windowPos -= speed;



      if (windowPos <= elemOffset) { // scrolling until elemOffset is higher than scrollbar position, cancel interval and set scrollbar to element position

        clearInterval(counter);

        windowObject.scrollTo(0, elemOffset);

      }

    } else { // from top to bottom

      windowObject.scrollTo(0, windowPos);

      windowPos += speed;



      if (windowPos >= elemOffset) { // scroll until scrollbar is lower than element, cancel interval and set scrollbar to element position

        clearInterval(counter);

        windowObject.scrollTo(0, elemOffset);

      }

    }



  }, 1

  );

}

