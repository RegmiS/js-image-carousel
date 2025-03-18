let curSlide = 0
let lenImages = document.querySelectorAll('.image-container').length;
const allImages = document.querySelectorAll('.image-container');
const allDots = document.querySelectorAll('.dot');

const deactivateAllImages = (allImageObj) => {
    for(let i = 0; i < allImageObj.length; i++){
        allImageObj[i].classList = "image-container hidden";
    }
    deactiveAllDots(allDots);
}

const activateIndexImg = (imageObj) => {
    deactivateAllImages(allImages);
    imageObj.classList = "image-container visible";
}

const deactiveAllDots = (allDotsObj) => {
    for(let i = 0; i < allDotsObj.length; i++){
        allDotsObj[i].innerHTML = "○";
    }
}

const activateDot = (dotObj) => {
    deactiveAllDots(allDots);
    dotObj.innerHTML = "◉";
}

const constMoveToSlide = (n) => {
    curSlide = n;
    displayDefaultSlide(curSlide);
}

const moveSlide = (n) => {
    // move slides up or down n. 
    // If 0, then rotate to last and change the dots value to be active
    // if greater than num of values, then reset it to 1 and set that dot to be active
    curSlide += n;
    if(curSlide >= lenImages){
        curSlide = 0
    }
    else if (curSlide < 0){
        curSlide = lenImages -1;
    }
    activateIndexImg(allImages[curSlide]);
    activateDot(allDots[curSlide]);
}

const displayDefaultSlide = (n) => {
    deactivateAllImages(allImages);
    activateIndexImg(allImages[n]);
    deactiveAllDots(allDots);
    activateDot(allDots[n]);
}

displayDefaultSlide(curSlide);