// A $( document ).ready() block.
$( document ).ready(function() {
				var s = skrollr.init(/*other stuff*/);

				//The options (second parameter) are all optional. The values shown are the default values.
				skrollr.menu.init(s, {
				    //skrollr will smoothly animate to the new position using `animateTo`.
				    animate: true,

				    //The easing function to use.
				    easing: 'sqrt',

				    //Multiply your data-[offset] values so they match those set in skrollr.init
				    scale: 2,

				    //How long the animation should take in ms.
				    duration: function(currentTop, targetTop) {
				        //By default, the duration is hardcoded at 500ms.
				        return 500;
				    },
				});
});