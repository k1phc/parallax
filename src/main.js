var parallaxContainer = document.getElementById('parallax');
var layers = parallaxContainer.children;


var moveLayers = e => {
    var initialX = (window.innerWidth / 2) - e.pageX;
    var initialY = (window.innerHeight / 2) - e.pageY;

    let i = 0;
    for (let layer of layers){
        var divider = i / 60;
        var positionX = initialX * divider;
        var positionY = initialY * divider;
        var bottomPosition = (window.innerHeight / 2) * divider;
        var image = layer.firstElementChild;

        layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
        image.style.bottom = '-' + bottomPosition + 'px';
        i++;
    }

};

window.addEventListener('mousemove', moveLayers);