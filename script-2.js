$(function () { // wait for document ready
    
    var sController = new ScrollMagic.Controller();

    // define movement of panels
    var wipeAnimation = new TimelineMax()
        .fromTo(".section.two", 1, {y:  "100%"}, {y: "0", ease: Linear.easeNone}) 
        .fromTo(".section.three", 1, {y: "100%"}, {y: "0", ease: Linear.easeNone})
		.fromTo(".section.four", 1, {y: "100%"}, {y: "0", ease: Linear.easeNone});

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
		offset: "4500vh"
	})
	.setTween(new TweenMax.to("#desktop-only", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4500vh"
	})
	.setTween(new TweenMax.to("#desktop-only-d", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4500vh"
	})
	.setTween(new TweenMax.to("#desktop-first-d", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5000vh"
	})
	.setTween(new TweenMax.to("#desktop-first-d", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "4500vh"
	})
	.setTween(new TweenMax.to("#desktop-first", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5000vh"
	})
	.setTween(new TweenMax.to("#desktop-first", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5000vh"
	})
	.setTween(new TweenMax.to("#responsive-d", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5500vh"
	})
	.setTween(new TweenMax.to("#responsive-d", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5000vh"
	})
	.setTween(new TweenMax.to("#adaptive-d", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5500vh"
	})
	.setTween(new TweenMax.to("#adaptive-d", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5000vh"
	})
	.setTween(new TweenMax.to("#responsive-adaptive", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5500vh"
	})
	.setTween(new TweenMax.to("#responsive-adaptive", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5000vh"
	})
	.setTween(new TweenMax.to("#responsive", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5500vh"
	})
	.setTween(new TweenMax.to("#responsive", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);
	
	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5000vh"
	})
	.setTween(new TweenMax.to("#adaptive", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5500vh"
	})
	.setTween(new TweenMax.to("#adaptive", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5500vh"
	})
	.setTween(new TweenMax.to("#mobile-first", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "6000vh"
	})
	.setTween(new TweenMax.to("#mobile-first", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: ".sections",
		duration: "300vh",
		offset: "5500vh"
	})
	.setTween(new TweenMax.to("#mobile-first-d", 1, {css: {opacity: 1}, ease: Linear.easeNone}))
	.addTo(controller);
});