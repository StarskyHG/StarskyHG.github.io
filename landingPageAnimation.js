anime({
    targets: '.animateObject',
    translateX: [-500, 0],
    translateY: [-500, 0],
    easing: 'spring(0.8,70,10,0 )'
})

anime({
    targets: '.animateButton',
    translateY: [30,0],
    easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000)',
    loop: true,
    direction: 'alternate'
})

anime({
    targets: '.profilePicture',
    opacity: [
    { value: [0, 1], easing: 'easeOutQuad', duration: 1000 }
     ],
    translateY: [500,0],
    easing: 'spring(0.8,70,10,0 )',

})