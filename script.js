var tl=gsap.timeline() 
 tl.from("#nav h3 ", {
    y:-50 ,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:0.3 

 })

 tl.from("#div1", {
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3
 })
 tl.from("#div2", {
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3
 })
 tl.from("#div3", {
    x:-500,
    opacity:0,
    duration:0.8,
    stagger:0.3
 }) 
 tl.from("img",{
   x:100,
   opacity:0,
   rotate:45,
   duration:1.5,
   stagger:1.3
 })
 tl.from("#bottom h3 ", {
   y:50 ,
   opacity:0,
   delay:0.4,
   duration:1,
   stagger:0.3 

})