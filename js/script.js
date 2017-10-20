(function(){
    var parallax = document.querySelectorAll('.parallax'),
        speed = 0.5;

    window.addEventListener('scroll', function(){
        [].slice.call(parallax).forEach(function(el, i){
            var offset = window.pageYOffset,
                position = '50% ' + (200 - offset * speed) + 'px';

            console.log(position);
            speed = speed - 0.001;
            el.style.backgroundPosition = position;
        });
    });
})()
//Credits to Nick: http://callmenick.com/post/advanced-parallax-scrolling-effect
