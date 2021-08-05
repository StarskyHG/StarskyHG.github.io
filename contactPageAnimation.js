anime({
	targets: '#headerOne',
	opacity: [
    { value: [0, 1], easing: 'easeOutQuad',  }
     ],
	translateX: [500,0],
	translateY: [-400,0],
	easing: 'easeOutBack',
})

anime({
	targets: '#headerTwo',
	opacity: [
    { value: [0, 1], easing: 'easeOutQuad',  }
     ],
	translateX: [-500,0],
	easing: 'easeOutBack',
})

anime({
	targets: '#headerThree',
	opacity: [
    { value: [0, 1], easing: 'easeOutQuad',  }
     ],
	translateX: [600,0],
	easing: 'easeOutBack'
})

anime({
	targets: '#mailButton',
	translateY: [30,0],
	easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
	loop: true,
	direction: 'alternate'
})

