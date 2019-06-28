//loader
let loader = document.getElementById('loader');
let value = 4;
let upper = () => {
  if (value <= 4 && value > -1) {
    value--;
    loader.innerHTML = value;
  }

  if (value === -1) {
    document.getElementById('home').style.display = "none";
    document.body.style.overflow = "initial";
  }
};

if(loader){
  setInterval(upper, 700);
}

//redirection
let homePage = document.querySelector('.homePage');
let homeDesc = document.querySelector('.home__contentDesc');
let homeTitle = document.querySelector('.home__contentTitle');

if(homePage){
  setTimeout(()=>{
    homePage.style.backgroundColor="#D5D5D5";
    homeTitle.style.display="none";
    homeDesc.style.display="initial";
  }, 4000)
}

//animation slide
let slides = document.querySelectorAll('.intro__slide');
slides.forEach(slide => {
  setTimeout(()=>{
    slide.style.display = "initial";
  }, 3400)
  setTimeout(()=>{
    slide.style.display = "none";
  }, 3900)
});

//functions play/pause video
let buttonPause = document.querySelector('.controls__pause');
let buttonPlay = document.querySelector('.controls__play');
let introVideo = document.querySelector('.intro__video');

if(buttonPause){
  buttonPause.addEventListener('click', ()=>{
    introVideo.pause();
  })

  buttonPlay.addEventListener('click', ()=>{
    introVideo.play();
  })
}

//hover point
let point2 = document.querySelector('.affaireNext__point--2');
let point3 = document.querySelector('.affaireNext__point--3');
let point4 = document.querySelector('.affaireNext__point--4');
let previewTed = document.querySelector('.preview--ted');
let previewCentral = document.querySelector('.preview--central');
let previewJacqueline = document.querySelector('.preview--jacqueline');

if(point2){

  point2.addEventListener('mouseover', ()=>{
    previewTed.style.opacity = 1;
  })

  point2.addEventListener('mouseout', ()=>{
    previewTed.style.opacity = 0;
  })

  point3.addEventListener('mouseover', ()=>{
    previewCentral.style.opacity = 1;
  })

  point3.addEventListener('mouseout', ()=>{
    previewCentral.style.opacity = 0;
  })

  point4.addEventListener('mouseover', ()=>{
    previewJacqueline.style.opacity = 1;
  })

  point4.addEventListener('mouseout', ()=>{
    previewJacqueline.style.opacity = 0;
  })
}

//redirection affaireSectionPage
// let affaireCentral = document.querySelector('.articlePage--central');
// let affaireJacqueline = document.querySelector('.articlePage--jacqueline');
// let affaireTed = document.querySelector('.articlePage--ted')

// if(affaireCentral){
//   setTimeout(()=>{
//     document.location.href="affaireSectionCentral.html";
//   }, 3000)
// }

// if(affaireJacqueline){
//   setTimeout(()=>{
//     document.location.href="affaireSectionJacqueline.html";
//   }, 3000)
// }

// if(affaireTed){
//   setTimeout(()=>{
//     document.location.href="affaireSectionTed.html";
//   }, 3000)
// }

//img name central
let nameKevin = document.querySelector('.section2Central__name--kevin');
let nameKorey = document.querySelector('.section2Central__name--korey');
let nameRaymond = document.querySelector('.section2Central__name--raymond');
let nameYuseef = document.querySelector('.section2Central__name--yuseef');
let nameAntron = document.querySelector('.section2Central__name--antron');
let imgKevin = document.querySelector('.section2Central__img--kevin');
let imgKorey = document.querySelector('.section2Central__img--korey');
let imgRaymond = document.querySelector('.section2Central__img--raymond');
let imgYuseef = document.querySelector('.section2Central__img--yuseef');
let imgAntron = document.querySelector('.section2Central__img--antron');
let biography = document.querySelector('.section2Central__biography');
let biographyKevin = document.querySelector('.section2Central__biographyContent--kevin');
let biographyKorey = document.querySelector('.section2Central__biographyContent--korey');
let biographyRaymond = document.querySelector('.section2Central__biographyContent--raymond');
let biographyYuseef = document.querySelector('.section2Central__biographyContent--yuseef');
let biographyAntron = document.querySelector('.section2Central__biographyContent--antron');
let biographyButton = document.querySelector('.section2Central__biographyButton');

if(nameKevin){
  nameKevin.addEventListener('mouseover', ()=>{
    imgKevin.style.display = "initial";
  })

  nameKevin.addEventListener('mouseout', ()=>{
    imgKevin.style.display = "none";
  })

  nameKorey.addEventListener('mouseover', ()=>{
    imgKorey.style.display = "initial";
  })

  nameKorey.addEventListener('mouseout', ()=>{
    imgKorey.style.display = "none";
  })

  nameRaymond.addEventListener('mouseover', ()=>{
    imgRaymond.style.display = "initial";
  })

  nameRaymond.addEventListener('mouseout', ()=>{
    imgRaymond.style.display = "none";
  })

  nameYuseef.addEventListener('mouseover', ()=>{
    imgYuseef.style.display = "initial";
  })

  nameYuseef.addEventListener('mouseout', ()=>{
    imgYuseef.style.display = "none";
  })

  nameAntron.addEventListener('mouseover', ()=>{
    imgAntron.style.display = "initial";
  })

  nameAntron.addEventListener('mouseout', ()=>{
    imgAntron.style.display = "none";
  })

  nameAntron.addEventListener('click', ()=>{
    biographyKorey.style.display="none";
    biographyKevin.style.display="none";
    biographyYuseef.style.display="none";
    biographyRaymond.style.display="none";
    biography.style.display="flex";
    biographyButton.addEventListener('click', ()=>{
      biography.style.display="none";
      biographyKorey.style.display="flex";
      biographyKevin.style.display="flex";
      biographyRaymond.style.display="flex";
      biographyYuseef.style.display="flex";
      biographyAntron.style.display="flex";
    })
  })
  
  nameKorey.addEventListener('click', ()=>{
    biographyAntron.style.display="none";
    biographyKevin.style.display="none";
    biographyYuseef.style.display="none";
    biographyRaymond.style.display="none";
    biography.style.display="flex";
    biographyButton.addEventListener('click', ()=>{
      biography.style.display="none";
      biographyKorey.style.display="flex";
      biographyKevin.style.display="flex";
      biographyRaymond.style.display="flex";
      biographyYuseef.style.display="flex";
      biographyAntron.style.display="flex";
    })
  })
  
  nameYuseef.addEventListener('click', ()=>{
    biographyAntron.style.display="none";
    biographyKevin.style.display="none";
    biographyKorey.style.display="none";
    biographyRaymond.style.display="none";
    biography.style.display="flex";
    biographyButton.addEventListener('click', ()=>{
      biography.style.display="none";
      biographyKorey.style.display="flex";
      biographyKevin.style.display="flex";
      biographyRaymond.style.display="flex";
      biographyYuseef.style.display="flex";
      biographyAntron.style.display="flex";
    })
  })
  
  nameKevin.addEventListener('click', ()=>{
    biographyAntron.style.display="none";
    biographyYuseef.style.display="none";
    biographyKorey.style.display="none";
    biographyRaymond.style.display="none";
    biography.style.display="flex";
    biographyButton.addEventListener('click', ()=>{
      biography.style.display="none";
      biographyKorey.style.display="flex";
      biographyKevin.style.display="flex";
      biographyRaymond.style.display="flex";
      biographyYuseef.style.display="flex";
      biographyAntron.style.display="flex";
    })
  })
  
  nameRaymond.addEventListener('click', ()=>{
    biographyAntron.style.display="none";
    biographyYuseef.style.display="none";
    biographyKorey.style.display="none";
    biographyKevin.style.display="none";
    biography.style.display="flex";
    biographyButton.addEventListener('click', ()=>{
      biography.style.display="none";
      biographyKorey.style.display="flex";
      biographyKevin.style.display="flex";
      biographyRaymond.style.display="flex";
      biographyYuseef.style.display="flex";
      biographyAntron.style.display="flex";
    })
  })
}

//hover medias
let mediaDonald = document.querySelector('.section3Central__content--donald');
let mediaJoan = document.querySelector('.section3Central__content--joan');
let mediaDaily = document.querySelector('.section3Central__content--daily');
let mediaElizabeth = document.querySelector('.section3Central__content--elizabeth');
let mediaMedias = document.querySelector('.section3Central__content--medias');
let mediaMouvement = document.querySelector('.section3Central__content--mouvement');
let nameDonald = document.querySelector('.section3Central__name--donald');
let nameJoan = document.querySelector('.section3Central__name--joan');
let nameDaily = document.querySelector('.section3Central__name--daily');
let nameElizabeth = document.querySelector('.section3Central__name--elizabeth');
let nameMedias = document.querySelector('.section3Central__name--medias');
let nameMouvement = document.querySelector('.section3Central__name--mouvement');


if(mediaDonald){
  mediaDonald.addEventListener('mouseover', ()=>{
    nameDonald.style.display="initial";
  })
  mediaDonald.addEventListener('mouseout', ()=>{
    nameDonald.style.display="none";
  })

  mediaJoan.addEventListener('mouseover', ()=>{
    nameJoan.style.display="initial";
  })
  mediaJoan.addEventListener('mouseout', ()=>{
    nameJoan.style.display="none";
  })

  mediaDaily.addEventListener('mouseover', ()=>{
    nameDaily.style.display="initial";
  })
  mediaDaily.addEventListener('mouseout', ()=>{
    nameDaily.style.display="none";
  })

  mediaElizabeth.addEventListener('mouseover', ()=>{
    nameElizabeth.style.display="initial";
  })
  mediaElizabeth.addEventListener('mouseout', ()=>{
    nameElizabeth.style.display="none";
  })

  mediaMedias.addEventListener('mouseover', ()=>{
    nameMedias.style.display="initial";
  })
  mediaMedias.addEventListener('mouseout', ()=>{
    nameMedias.style.display="none";
  })

  mediaMouvement.addEventListener('mouseover', ()=>{
    nameMouvement.style.display="initial";
  })
  mediaMouvement.addEventListener('mouseout', ()=>{
    nameMouvement.style.display="none";
  })
}



//jacqueline img

let img1Jacqueline = document.querySelector('.info2Jacqueline__img--1');
let img2Jacqueline = document.querySelector('.info2Jacqueline__img--2');
let img3Jacqueline = document.querySelector('.info2Jacqueline__img--3');
let img4Jacqueline = document.querySelector('.info2Jacqueline__img--4');
let text1Jacqueline = document.querySelector('.info2Jacqueline__text--1');
let text2Jacqueline = document.querySelector('.info2Jacqueline__text--2');
let text3Jacqueline = document.querySelector('.info2Jacqueline__text--3');
let text4Jacqueline = document.querySelector('.info2Jacqueline__text--4');
let nb1Jacqueline = document.querySelector('.info3Jacqueline__nb--01');
let nb2Jacqueline = document.querySelector('.info3Jacqueline__nb--02');
let nb3Jacqueline = document.querySelector('.info3Jacqueline__nb--03');
let nb4Jacqueline = document.querySelector('.info3Jacqueline__nb--04');

if(img1Jacqueline){
  console.log(nb2Jacqueline);
  nb2Jacqueline.addEventListener('click', ()=>{
    img1Jacqueline.style.display="none";
    img3Jacqueline.style.display="none";
    img4Jacqueline.style.display="none";
    img2Jacqueline.style.display="initial";
    text1Jacqueline.style.display="none";
    text3Jacqueline.style.display="none";
    text4Jacqueline.style.display="none";
    text2Jacqueline.style.display="initial";
    nb1Jacqueline.style.color="#AAAAAA";
    nb3Jacqueline.style.color="#AAAAAA";
    nb4Jacqueline.style.color="#AAAAAA";
    nb2Jacqueline.style.color="black";
  })
  
  nb3Jacqueline.addEventListener('click', ()=>{
    img1Jacqueline.style.display="none";
    img2Jacqueline.style.display="none";
    img4Jacqueline.style.display="none";
    img3Jacqueline.style.display="initial";
    text1Jacqueline.style.display="none";
    text2Jacqueline.style.display="none";
    text4Jacqueline.style.display="none";
    text3Jacqueline.style.display="initial";
    nb1Jacqueline.style.color="#AAAAAA";
    nb2Jacqueline.style.color="#AAAAAA";
    nb4Jacqueline.style.color="#AAAAAA";
    nb3Jacqueline.style.color="black";
  })
  
  nb4Jacqueline.addEventListener('click', ()=>{
    img1Jacqueline.style.display="none";
    img3Jacqueline.style.display="none";
    img2Jacqueline.style.display="none";
    img4Jacqueline.style.display="initial";
    text1Jacqueline.style.display="none";
    text3Jacqueline.style.display="none";
    text2Jacqueline.style.display="none";
    text4Jacqueline.style.display="initial";
    nb1Jacqueline.style.color="#AAAAAA";
    nb3Jacqueline.style.color="#AAAAAA";
    nb2Jacqueline.style.color="#AAAAAA";
    nb4Jacqueline.style.color="black";
  })
  
  nb1Jacqueline.addEventListener('click', ()=>{
    img2Jacqueline.style.display="none";
    img3Jacqueline.style.display="none";
    img4Jacqueline.style.display="none";
    img1Jacqueline.style.display="initial";
    text2Jacqueline.style.display="none";
    text3Jacqueline.style.display="none";
    text4Jacqueline.style.display="none";
    text1Jacqueline.style.display="initial";
    nb2Jacqueline.style.color="#AAAAAA";
    nb3Jacqueline.style.color="#AAAAAA";
    nb4Jacqueline.style.color="#AAAAAA";
    nb1Jacqueline.style.color="black";
  })
}

//audio

let audioButtonCentral = document.querySelector('.desktopContent__controls--central');
let audioButtonTed = document.querySelector('.desktopContent__controls--ted');
let audioButtonJacqueline = document.querySelector('.desktopContent__controls--jacqueline');
let audioCentral = document.querySelector('.desktopContent__audio--central');
let audioTed = document.querySelector('.desktopContent__audio--ted');
let audioJacqueline = document.querySelector('.desktopContent__audio--jacqueline');

if(audioButtonCentral){
  if(audioButtonCentral.style.border="2px solid white"){
    audioButtonCentral.addEventListener('click', ()=>{
      audioCentral.play();
      audioButtonCentral.style.border="2px solid red";
    })
  }
}

if(audioButtonTed){
  if(audioButtonTed.style.border="2px solid white"){
    audioButtonTed.addEventListener('click', ()=>{
      audioTed.play();
      audioButtonTed.style.border="2px solid red";
    })
  }
}

if(audioButtonJacqueline){
  if(audioButtonJacqueline.style.border="2px solid white"){
    audioButtonJacqueline.addEventListener('click', ()=>{
      audioJacqueline.play();
      audioButtonJacqueline.style.border="2px solid red";
    })
  }
}



