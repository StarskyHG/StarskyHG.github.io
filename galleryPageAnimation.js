

// First Header Animation
anime({
    targets: '#firstHeader',
    translateY: [-550, 0],
    easing: 'spring(5, 90, 25, 0)'
})

// Second Header Animation
anime({
    targets: '#secondHeader',
    opacity: [
    { value: [0, 1], easing: 'easeOutQuad',  }
     ],
    translateX: [550, 0],
    easing: 'spring(5, 90, 25, 0)',
})

// Arrow Down Animation
anime({
    targets: '#arrowDown',
    translateY: [-40, 0],
    easing: 'spring(3, 100, 25, 1)',
    loop: true,
    direction: 'alternate',
})
