const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('SABIA QUE DIRIAS QUE SI :V JSJS ACA NO HAY TRAMPA')
    alert('ME HACES MUY FELIZ QUE ACEPTES TU REALIDAD :^) ')
	alert('ADEMAS SABER QUE ESE PERRO ES COJUDA, ASI QUE NO JODAN JSJSJS')
	alert('PSDT. HERNAN NO TE AMA DIGO DIGO TE QUIERO MUCHO :V')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})