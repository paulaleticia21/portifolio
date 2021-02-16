
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");

        }else{
            $('.navbar').removeClass("sticky");
}
    })
     //toggle menu/navbar script
     $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
     })
});
var typed = new Typed(".typing",{
    strings:["Web, Java Jr, Full Stack developer."],
    typeSpeed:100,
    backSpeed:60,
    loop:true

});
