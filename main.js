const  shareBtn = document.querySelector('.share-btn');
const michelle    = document.querySelector('.avatar-michelle');
const shareCon  = document.querySelector('.share-container');
const footer = document.querySelector('footer');
const icon = document.querySelector('.share-icon')






shareBtn.addEventListener('click',e => {
    let width = window.innerWidth;
    if(width <376){
        shareBtn.classList.toggle('btn-clicked');
        shareCon.classList.toggle('share-container-show');
        michelle.classList.toggle('michelle-hide');
        footer.classList.toggle('footer-change');
        icon.classList.toggle('filter')
    }else{
        shareBtn.classList.toggle('btn-clicked');
        icon.classList.toggle('filter');
        shareCon.classList.toggle('share-container-show-big')


    }

})