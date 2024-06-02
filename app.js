let car = document.getElementById('car');
let carSpeed = 5; // pixels per frame
let animationId;

function moveCar() {
    let leftPosition = parseInt(car.style.left, 10) || 0;
    if (leftPosition + carSpeed < window.innerWidth) {
        car.style.left = leftPosition + carSpeed + 'px';
    } else {
        car.style.left = '0px'; // Reset car to the starting position
    }
    animationId = requestAnimationFrame(moveCar);
}

function startCar() {
    if (!animationId) {
        moveCar();
    }
}

function stopCar() {
    cancelAnimationFrame(animationId);
    animationId = null;
}
