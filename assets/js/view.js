
$(window).scroll(function() {
    var y=$(window).scrollTop()+$(window).height();
    $('.scrollValue').text('scrolltop value:'+y);

       var elements = document.getElementsByClassName('fadeRight');

        for(let i=0; i<elements.length;i++){
            console.log(elements[i].offsetHeight);
            if(y>elements[i].offsetTop+(elements[i].offsetHeight/2)){
                elements[i].classList.add('fadeInRight');
                elements[i].classList.remove('fadeOutRight');
            } else if(y<elements[i].offsetTop+(elements[i].offsetHeight/2)){
          elements[i].classList.add('fadeOutRight'); 
          elements[i].classList.remove('fadeInRight');

            };
        };
});