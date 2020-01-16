$(document).ready(function() {
	// init
	var controller = new ScrollMagic.Controller();
	var slideController = new ScrollMagic.Controller();

	var wipeAnimation = new TimelineMax()
		.fromTo(".panel.two", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".panel.three", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
		.fromTo(".panel.four", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone});
	
	new ScrollMagic.Scene({
		triggerElement: ".pinContainer",
		triggerHook: "onLeave",
		duration: "300%"
		})
		.setPin(".pinContainer")
		.setTween(wipeAnimation)
		.addTo(slideController);

	/*new ScrollMagic.Scene({
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
	.addTo(controller);*/
});
