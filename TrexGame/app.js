document.addEventListener('DOMContentLoaded', function() {
    const dino = document.querySelector('.dino');
    const grid = document.querySelector('.grid'); 
    function control(e){
        if(e.code == "Space"){
            console.log("jump");
            jump();
        }
    };
    let position = 0;
    function jump(){
        let count = 0;
        let timerId=setInterval(function(){
            if (count === 15){
                clearInterval(timerId);
            }
            //move up 
            position +=30;
            position =  position * gravity;    
            dino.style.bottom = position + 'px';

         },20);
    }
    document.addEventListener('keydown', control); 


});