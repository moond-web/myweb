$(function(){
    let i = 0
    function slide(){
        if (i < 3) {
            i++;
        } else {
            i = 0;
        }
    
    $(".slide ul").animate({ left: -1200 * i}, 600);
    }
    setInterval(slide, 3000);
})