$(function () { // wait for document ready
    
    var sController = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo(".section.two",    1, {y:  "100%"}, {y: "0", ease: Linear.easeNone})  // in from right
        .fromTo(".section.three", 1, {y: "100%"}, {y: "0", ease: Linear.easeNone}) // in from top
        .fromTo(".section.four", 1, {y: "100%"}, {y: "0", ease: Linear.easeNone}); // in from top

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: ".sections",
            triggerHook: "onLeave",
			duration: "7000vh"
        })
        .setPin(".sections")
        .setTween(wipeAnimation)
        .addIndicators() // add indicators (requires plugin)
        .addTo(sController);

    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3000vh"
	})
	.setTween(new TweenMax.to("#overall95", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3000vh"
	})
	.setTween(new TweenMax.to("#overall95d", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3000vh"
	})
	.setTween(new TweenMax.to("#overallxpd", 1, {css: {opacity: 100}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3500vh"
	})
	.setTween(new TweenMax.to("#overall95d", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3500vh"
	})
	.setTween(new TweenMax.to("#overallxpd", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);
	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4000vh"
	})
	.setTween(new TweenMax.to("#overallxp", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4000vh"
	})
	.setTween(new TweenMax.to("#overallvistad", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3500vh"
	})
	.setTween(new TweenMax.to("#overallvistad", 1, {css: {opacity: 100}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4000vh"
	})
	.setTween(new TweenMax.to("#overallvista", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4000vh"
	})
	.setTween(new TweenMax.to("#overallw10d", 1, {css: {opacity: 100}, ease: Linear.easeNone}))
	.addIndicators()
	.addTo(controller);
});