gsap.registerPlugin(ScrollTrigger);

// Locomotive Scroll
const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});

// Sync ScrollTrigger
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
return arguments.length
? locoScroll.scrollTo(value, 0, 0)
: locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
return {top:0,left:0,width:window.innerWidth,height:window.innerHeight};
}
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


gsap.utils.toArray(".panel").forEach(panel => {

gsap.fromTo(panel.querySelector("img"),
{
scale:0.8,
opacity:0
},
{
scale:1,
opacity:1,
duration:1,
scrollTrigger:{
trigger:panel,
scroller:"#main",
start:"top 75%",
end:"top 30%",
toggleActions:"play none none reverse"
}
});

gsap.fromTo(panel.querySelector("h2"),
{
y:50,
opacity:0
},
{
y:0,
opacity:1,
duration:1,
scrollTrigger:{
trigger:panel,
scroller:"#main",
start:"top 70%",
end:"top 40%",
toggleActions:"play none none reverse"
}
});

});

setTimeout(()=>{
ScrollTrigger.refresh();
locoScroll.update();
},1000);