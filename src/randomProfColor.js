// Random color generator for userProfile.
const rcolor = require('rcolor');
const goldenRatio = 0.618;

export default function randomProfColor() {

    const userProfile = document.getElementById('userProfile');

    // Randomly generate profile colors.
    userProfile.querySelector('button').style.backgroundColor = rcolor({
                                                                        hue: (Math.random() + goldenRatio) % 1, 
                                                                        saturation: 0.5, 
                                                                        value: 0.8
                                                                        });

}