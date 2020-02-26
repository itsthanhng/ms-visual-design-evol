$(function () { // wait for document ready
    
    var sController = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo(".section.two",    1, {y:  "100%"}, {y: "0", ease: Linear.easeNone}) 
        .fromTo(".section.three", 1, {y: "100%"}, {y: "0", ease: Linear.easeNone}) 
		.fromTo(".section.four", 1, {y: "100%"}, {y: "0", ease: Linear.easeNone})
		.fromTo(".section.five", 1, {y: "100%"}, {y: "0", ease: Linear.easeNone}); 

    // create scene to pin and link animation
    new ScrollMagic.Scene({
            triggerElement: ".sections",
            triggerHook: "onLeave",
			duration: "10000vh"
        })
        .setPin(".sections")
        .setTween(wipeAnimation)
        .addTo(sController);

	// OVERALL	
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3000vh"
	})
	.setTween(new TweenMax.to("#overall95", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3000vh"
	})
	.setTween(new TweenMax.to("#overall95d", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3000vh"
	})
	.setTween(new TweenMax.to("#overallxpd", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3500vh"
	})
	.setTween(new TweenMax.to("#overallxpd", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3500vh"
	})
	.setTween(new TweenMax.to("#overallxp", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4000vh"
	})
	.setTween(new TweenMax.to("#overallvistad", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "3500vh"
	})
	.setTween(new TweenMax.to("#overallvistad", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4000vh"
	})
	.setTween(new TweenMax.to("#overallvista", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4000vh"
	})
	.setTween(new TweenMax.to("#overallw10d", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	// LOGO	
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "6000vh"
	})
	.setTween(new TweenMax.to("#logo95", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "6000vh"
	})
	.setTween(new TweenMax.to("#logo95d", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "6000vh"
	})
	.setTween(new TweenMax.to("#logoxpd", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "6500vh"
	})
	.setTween(new TweenMax.to("#logoxpd", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "6500vh"
	})
	.setTween(new TweenMax.to("#logoxp", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "7000vh"
	})
	.setTween(new TweenMax.to("#logovistad", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "6500vh"
	})
	.setTween(new TweenMax.to("#logovistad", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "7000vh"
	})
	.setTween(new TweenMax.to("#logovista", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "7000vh"
	})
	.setTween(new TweenMax.to("#logow10d", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	// icon	
	var controller = new ScrollMagic.Controller();
	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "8000vh"
	})
	.setTween(new TweenMax.to("#icon95", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "8000vh"
	})
	.setTween(new TweenMax.to("#icon95d", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "8000vh"
	})
	.setTween(new TweenMax.to("#iconxpd", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "8500vh"
	})
	.setTween(new TweenMax.to("#iconxpd", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "8500vh"
	})
	.setTween(new TweenMax.to("#iconxp", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "9000vh"
	})
	.setTween(new TweenMax.to("#iconvistad", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "8500vh"
	})
	.setTween(new TweenMax.to("#iconvistad", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "9000vh"
	})
	.setTween(new TweenMax.to("#iconvista", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "9000vh"
	})
	.setTween(new TweenMax.to("#iconw10d", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);
});