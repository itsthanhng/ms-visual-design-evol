$(document).ready(function() {
	// init
	TweenLite.defaultEase = Linear.easeNone;
	var controller = new ScrollMagic.Controller();
	var slideController = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave',
			duration: "200%" 
		}
	});

	//get all slides
	var slides = $("section.full-height");

	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
				triggerElement: slides[i]
			})
			.setPin(slides[i], {pushFollowers: false})
			.addTo(slideController);
	}

	// create scene 
	new ScrollMagic.Scene({
		triggerElement: "#trigger",
		duration: 100,
		offset: 50
	})
	.setTween(new TweenMax.to("#overall95", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators({name: "95"})
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#trigger",
		duration: 100,
		offset: 250
	})
	.setTween(new TweenMax.to("#overallxp", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators({name: "XP"})
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#trigger",
		duration: 100,
		offset: 450
	})
	.setTween(new TweenMax.to("#overallvista", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators({name: "Vista"})
	.addTo(controller);

	new ScrollMagic.Scene({
		triggerElement: "#trigger",
		duration: 100,
		offset: 650
	})
	.setTween(new TweenMax.to("#overallw10", 1, {css: {opacity: 0}, ease: Linear.easeNone}))
	.addIndicators({name: "10"})
	.addTo(controller);
});
