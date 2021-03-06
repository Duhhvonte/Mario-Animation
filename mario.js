// AnimationJS

//Mario  Movement
document.getElementById("mario").animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateX(50px)' },
    { transform: 'translateY(-500px)' },
    { transform: 'translateY(0px)' },
    

  ], {
    // timing options
    delay: 1000,
    duration: 1200,
    iterations: 1,

    
});

//Yoshi Movement
document.getElementById("yoshi").animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateX(50px)'},
    { transform: 'translateY(-400px)' },
    { transform: 'translateY(0px)' }
    

  ], {
    // timing options
    delay: 500,
    duration: 1300,
    iterations: 1,

    
});

//Peach Movement
document.getElementById("peach").animate([
    // keyframes
    { transform: 'translateY(0px)' },
    { transform: 'translateX(50px)'},
    { transform: 'translateY(-400px)' },
    { transform: 'translateY(0px)' }
    

  ], {
    // timing options
    delay: 2600,
    duration: 1300,
    iterations: 1,

    
});

// Right Bullet Movement
document.getElementById("bullet-right").animate([
    // keyframes
    { transform: 'translateX(597px)' },
    { transform: 'translateX(-9000px)' },
    

  ], {
    // timing options
    duration: 5000,
    iterations: 1
});

// Left Bullet Movement
document.getElementById("bullet-left").animate([
    // keyframes
    { transform: 'translateX(0px)' },
    { transform: 'translateX(9000px)' },
    

  ], {
    // timing options
    duration: 7300,
    iterations: 1
});