const images = document.querySelectorAll('section img'); 
const numbersComeAlive = document.querySelectorAll('.number-come-alive');
const processTextContainer = document.querySelector('.process-text-container'); 

function slide(){
    const screenBottom = window.innerHeight + document.body.scrollTop;
    const middleOfProcessTextContainer = processTextContainer.offsetTop + (processTextContainer.offsetHeight / 2);

    // Image fade in when top of image meets bottom of screen
    // If window is over 1000px wide, slide in AND fade in (on small desktop size, and larger)
    // If window is under 1000px, only fade in (on tablet size, and smaller)
    images.forEach(image => {
        (screenBottom >= image.offsetTop && window.innerWidth >= 1000) && image.classList.add('fade-in');
        (screenBottom >= image.offsetTop && window.innerWidth < 1000) && image.classList.add('fade-in-mobile');
    });

    // If bottom of screen reaches the middle of the Process Text Container
    // then run countdown fade-in effect in "Process Section" header: `As Simple as 1, 2, 3 !`
    screenBottom >= middleOfProcessTextContainer && numbersComeAlive.forEach(number => setTimeout(() => number.classList.add('number-grow'), number.id * 1000));
}

window.addEventListener('scroll', slide);

