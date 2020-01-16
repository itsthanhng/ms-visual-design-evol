$(function () { // wait for document ready
    
    var sController = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo(".section.two",    1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
        .fromTo(".section.three", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
        .fromTo(".section.four", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: ".sections",
            triggerHook: "onLeave",
            duration: "300%"
        })
        .setPin(".sections")
        .setTween(wipeAnimation)
        .addIndicators() // add indicators (requires plugin)
        .addTo(sController);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "10%",
		offset: "1500%"
	})
	.setTween(new TweenMax.to("#overall95", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators({name: "95"})
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "10%",
		offset: "1700%"
	})
	.setTween(new TweenMax.to("#overallxp", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators({name: "XP"})
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "10%",
		offset: "1900%"
	})
	.setTween(new TweenMax.to("#overallvista", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators({name: "Vista"})
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "10%",
		offset: "2100%"
	})
	.setTween(new TweenMax.to("#overallw10", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators({name: "10"})
	.addTo(controller);
});