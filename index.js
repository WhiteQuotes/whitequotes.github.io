var Name_Introducer = document.getElementById('Name-Heading')
var Work_Introducer = document.getElementById('Work-Heading')


// The First Animation Which Makes 'Work_Introducer' Fade In And Out While 'Name_Introducer' Transitions Left
anime.timeline({})

		// Adding The Animation Chronologically
		.add({

			// The Element To Animate
			targets: '#Name-Heading',

			// Move To The Left By 234 px
			translateX: -234,

			// Move Smoothly
			easing: 'easeInOutQuad',
		},0)
			.add({
			targets: '#Work-Heading',
			color: 'rgba(255,255,255, 1)',
			easing: 'easeInOutQuad'	
		},500)
			.add({
			targets: '#Work-Heading',
			color: 'rgba(255,255,255, 0)',
			easing: 'easeInOutQuad'	
		},2000)
			.add({
			targets: '#Name-Heading',
			translateX: 0,
			easing: 'easeInOutQuad'
		},2500)

// This Function Makes "The First Animation Which Makes 'Work_Introducer' Fade In And Out While 'Name_Introducer' Transitions Left" Happen Only When The Text Is Hovered
function AboveNote1() {
	function ComingInside() {
		anime.timeline({})

			.add({
			  targets: '#Name-Heading',
			  translateX: -234,
			  easing: 'easeInOutQuad',
			},0)
			.add({
				targets: '#Work-Heading',
				color: 'rgba(0,0,0, 1)',
				easing: 'easeInOutQuad'	
			},500)
	}

	function GoingOutside() {
		anime.timeline({})

			.add({
			  targets: '#Name-Heading',
			  translateX: 0,
			  easing: 'easeInOutQuad'
			},500)
			.add({
				targets: '#Work-Heading',
				color: 'rgba(0,0,0, 0)',
				easing: 'easeInOutQuad'	
			},0)
	}




	// The Mouse Enter Event

	// The Mouse Enter Event Listener
	Name_Introducer.addEventListener("mouseenter", 
		
		// The Commands To Execute Come Inside It, Naming A Function Wont Work
		function(){ComingInside()},false);

	// Adding The Hovering Thing It To The Work Heading As Well Just In Case :)
	Work_Introducer.addEventListener("mouseenter", 
		
		// The Commands To Execute Come Inside It, Naming A Function Wont Work
		function(){ComingInside()},false);



	// The Mouse Leave Event

	// The Mouse Leave Event Listener
	Name_Introducer.addEventListener("mouseleave", 
		
		// The Commands To Execute Come Inside It, Naming A Function Wont Work
		function(){GoingOutside()},false);

	// Adding The Hovering Thing It To The Work Heading As Well Just In Case :)
	Work_Introducer.addEventListener("mouseleave", 
		
		// The Commands To Execute Come Inside It, Naming A Function Wont Work
		function(){GoingOutside()},false);}
