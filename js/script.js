// init controller
var controller = new ScrollMagic.Controller();

// create scenes
$( document ).ready(function() {
    var scene95 = new ScrollMagic.Scene({
		triggerElement: "#overall",
		offset: 50,
		triggerHook: 0.9,
		reverse: true
	})
	.setClassToggle("#overall95", "visible") 
	var sceneXP = new ScrollMagic.Scene({
		duration: 100, // the scene should last for a scroll distance of 100px
		offset: 100 // start this scene after scrolling for 50px
	})
    .setPin('#overallxp') // pins the element for the the scene's duration

	var sceneVista = new ScrollMagic.Scene({
		duration: 100, // the scene should last for a scroll distance of 100px
		offset: 200 // start this scene after scrolling for 50px
	})
    .setPin('#overallvista') // pins the element for the the scene's duration

	var scene10 = new ScrollMagic.Scene({
		duration: 100, // the scene should last for a scroll distance of 100px
		offset: 300 // start this scene after scrolling for 50px
	})
    .setPin('#overall10') // pins the element for the the scene's duration

	controller.addScene([
		scene95,
		sceneXP,
		sceneVista,
		scene10
	]);
});
