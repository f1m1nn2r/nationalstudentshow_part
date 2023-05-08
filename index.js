



// 섹션01
const leftZone = document.querySelector('.left-column-zone');
const rightZone = document.querySelector('.right-column-zone'); 
for(var i=0; i<7; i++){
    const leftZoneTxt = document.createElement('span');    
    leftZoneTxt.innerHTML = 'National Student Show and Conference 18';
    leftZone.appendChild(leftZoneTxt);

    const rightZoneTxt = document.createElement('span');
    rightZoneTxt.innerHTML = 'National Student Show and Conference 18';
    rightZone.appendChild(rightZoneTxt);
}
const section01 = document.querySelector('.section01');
const centerFloatingText = document.querySelectorAll('.center-floating-txt h1');
window.addEventListener('mousemove', function(e){
    var posX = e.clientX / section01.clientHeight;
    var posY = e.clientY / section01.clientHeight;
    for(var i=0; i<centerFloatingText.length; i++){
        centerFloatingText[i].style.transform = `translate3d(${posX}%, ${posY}%, 0)`
    }
});

