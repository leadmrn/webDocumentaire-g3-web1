let count = document.querySelector('.count__number--one');
let start = 0;
let plus = () => {
  if (start < 33) {
    start++;
    count.innerHTML = start;
    
  }
}
setInterval(plus, 30)

let counting = document.querySelector('.count__number--two');
let from = 0;
let more = () => {
  if (from < 60) {
    from++;
    counting.innerHTML = from;
    
  }
}
setInterval(more, 18)

// Get the video
let video = document.querySelector('.video__bundy');
let play = document.querySelector('.play__icon--btn')

// Pause and play the video
function videoPause() {
  if (video.paused) {
    video.play();
    
  } else {
    video.pause();
    
  }
} 

play.addEventListener('click', ()=> {
  videoPause();
})

window.onscroll = function(){
  video.pause();
};

let textContainer = document.querySelector('.text__container')
let textCircle = document.querySelector('.text__containers')
let textLine = document.querySelector('.text__line')

textCircle.addEventListener('mouseover', () => {
  textContainer.style.display = "flex";
  textContainer.style.alignItems = "center";
  textContainer.style.justifyContent = "center";
  textContainer.style.flexDirection = "column";
  textLine.style.display = "none";
})

textCircle.addEventListener('mouseout', () => {
  textContainer.style.display = "none"
  textLine.style.display = "initial"
})

let textContainer2 = document.querySelector('.text__containers--two')
let bigContainerText = document.querySelector('.big__container--text')

textContainer2.addEventListener('mouseover', () => {
  bigContainerText.style.display= "initial";
  bigContainerText.style.position = "absolute"
  bigContainerText.style.top = "45%"
  bigContainerText.style.transform = "translate(0%, -50%)"
})

textContainer2.addEventListener('mouseout', () => {
  bigContainerText.style.display = "none"
})

let locaterFirst = document.querySelector('.carte__locater--1')
let locaterSecond = document.querySelector('.carte__locater--2')
let locaterThird = document.querySelector('.carte__locater--3')
let locaterFourth = document.querySelector('.carte__locater--4')
let locaterFifth = document.querySelector('.carte__locater--5')
let locaterSixth = document.querySelector('.carte__locater--6')
let locaterSeventh = document.querySelector('.carte__locater--7')
let locaterEighth = document.querySelector('.carte__locater--8')

let femmeFirst = document.querySelector('.carte__victim--1')
let femmeSecond = document.querySelector('.carte__victim--2')
let femmeThird = document.querySelector('.carte__victim--3')
let femmeFourth = document.querySelector('.carte__victim--4')
let femmeFifth = document.querySelector('.carte__victim--5')
let femmeSixth = document.querySelector('.carte__victim--6')
let femmeSeventh = document.querySelector('.carte__victim--7')
let femmeEighth = document.querySelector('.carte__victim--8')

locaterFirst.addEventListener('mouseover', () => {
  femmeFirst.style.display = "initial";
})

locaterFirst.addEventListener('mouseout', () => {
  femmeFirst.style.display = "none"
})

locaterSecond.addEventListener('mouseover', () => {
  femmeSecond.style.display = "initial";
})

locaterSecond.addEventListener('mouseout', () => {
  femmeSecond.style.display = "none"
})

locaterThird.addEventListener('mouseover', () => {
  femmeThird.style.display = "initial";
})

locaterThird.addEventListener('mouseout', () => {
  femmeThird.style.display = "none"
})

locaterFourth.addEventListener('mouseover', () => {
  femmeFourth.style.display = "initial";
})

locaterFourth.addEventListener('mouseout', () => {
  femmeFourth.style.display = "none"
})

locaterFifth.addEventListener('mouseover', () => {
  femmeFifth.style.display = "initial";
})

locaterFifth.addEventListener('mouseout', () => {
  femmeFifth.style.display = "none"
})

locaterSixth.addEventListener('mouseover', () => {
  femmeSixth.style.display = "initial";
})

locaterSixth.addEventListener('mouseout', () => {
  femmeSixth.style.display = "none"
})

locaterSeventh.addEventListener('mouseover', () => {
  femmeSeventh.style.display = "initial";
})

locaterSeventh.addEventListener('mouseout', () => {
  femmeSeventh.style.display = "none"
})

locaterEighth.addEventListener('mouseover', () => {
  femmeEighth.style.display = "initial";
})

locaterEighth.addEventListener('mouseout', () => {
  femmeEighth.style.display = "none"
})


// Get all horizontal scroll element
var horizontals = document.querySelectorAll('.scroll--horizontal');

// For each horizontal scroll element, apply the effect
horizontals.forEach(function (horizontal) {
  
  // Get the inner element
  var inner = horizontal.querySelector('.section__horizontal');

  // When the user scroll and an animation frame is available
  window.addEventListener('scroll', function() {
    window.requestAnimationFrame(function() {
      
      // The distance to scroll inside the horizontal element
      // is its height - the window's height
      var toGo = horizontal.offsetHeight - window.innerHeight;
      
      // The scroll position inside the element
      // is the scroll position - the element's distance from the top
      var position = window.scrollY - horizontal.offsetTop;
      
      // The progression between 0 & 1 is the scroll position
      // inside the element divided by the distance to scroll
      var progression = (position / toGo);

      // If progression is between 0 & 1 that means we are viewing
      // the section so fix it
      if (progression > 0 && progression < 1) {
        horizontal.classList.add('section--isFixed');
      } else { // Don't fix it
        horizontal.classList.remove('section--isFixed');
      }

      // If the progression is above 1 that means the
      // section has been completly scrolled
      if (progression >= 1) {
        horizontal.classList.add('section--isScrolled');
      } else {
        horizontal.classList.remove('section--isScrolled');
      }
      
      // Set the translation for the element
      setTranslateX(inner, progression);
    });
  });
});

function setTranslateX(element, progression) {
  // Limit the progression factor between 0 & 1
  if (progression > 1) {
    progression = 1;
  } else if (progression < 0) {
    progression = 0;
  }
  
  // The size to move is the element width minus the window width
  var toMove = element.offsetWidth - window.innerWidth;
  
  // The transform factor is the size to move multiplied by the progression
  var transform = (-1 * toMove * progression) + 'px';
  element.style.transform = 'translateX(' + transform + ')';
  
}


let navChapOne = document.querySelector('.nav__container--one')
let titleNavChapOne = document.querySelector('.nav__title--one')
let navChapTwo = document.querySelector('.nav__container--two')
let titleNavChapTwo = document.querySelector('.nav__title--two')
let navChapThree = document.querySelector('.nav__container--three')
let titleNavChapThree = document.querySelector('.nav__title--three')
let navChapFour = document.querySelector('.nav__container--four')
let titleNavChapFour = document.querySelector('.nav__title--four')

navChapOne.addEventListener('mouseover', () => {
  titleNavChapOne.style.display = "initial"
})

navChapOne.addEventListener('mouseout', () => {
  titleNavChapOne.style.display = "none"
})

navChapTwo.addEventListener('mouseover', () => {
  titleNavChapTwo.style.display = "initial"
})

navChapTwo.addEventListener('mouseout', () => {
  titleNavChapTwo.style.display = "none"
})

navChapThree.addEventListener('mouseover', () => {
  titleNavChapThree.style.display = "initial"
})

navChapThree.addEventListener('mouseout', () => {
  titleNavChapThree.style.display = "none"
})

navChapFour.addEventListener('mouseover', () => {
  titleNavChapFour.style.display = "initial"
})

navChapFour.addEventListener('mouseout', () => {
  titleNavChapFour.style.display = "none"
})