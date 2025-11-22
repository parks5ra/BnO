gsap.registerPlugin(ScrollTrigger)

const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

/* nav */
$(document).ready(function(){
  $('.menu_wrapper').mouseenter(function(){
    $('.header_bg').stop().css({'backgroundColor':'rgba(255, 255, 255, 1)'})
    $('.menu_items_wrapper').stop().fadeIn(0);
  }).mouseleave(function(){
    $('.header_bg').stop().css({'backgroundColor':'rgba(255, 255, 255, 0.6)'})
    $('.menu_items_wrapper').stop().fadeOut(0);
  })
});