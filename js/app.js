// Picking random number coordinates
var getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

// Setting the Treasure Coordinates
var width = 400;
var height = 400;

var target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

// Counting Clicks
var clicks = 0; //tracks number of clicks

// Calculating the Distance betwee the click and the treasure
var getDistance = function (event, target) {
    var diffX = event.offsetX - target.x; //event.offset is the value of the x and y coordiantes of the click - this value if provided by the click event function
    var diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY)); // uses the pythagorean theorem to find the distance between the two points; a^2 + b^2 = c^2; Math.sqrt takes the square root of c^2, so you are left with the distance C
}; 

// Telling the player how close they are
var getDistanceHint = function (distance) {
    if (distance < 10) {
        return "Boiling hot!";
    } else if (distance < 20) {
        return "Really Hot";
    } else if (distance < 40) {
        return "Hot";
    } else if (distance < 80) {
        return "Warm";
    } else if (distance < 160) {
        return "Cold";
    } else if (distance < 320) {
        return "Really Cold";
    } else if (distance < 420) {
        return "Really Really Cold";
    } else {
        return "Freezing!";
    }
};

// Add a Click Handler to the image element
$("#map").click(function (event) {
    if (clicks <= 14) {
        clicks++;
        $("#clicks").text('Clicks: ' + clicks); //display clicks
    } else {
        alert("GAME OVER! You've exceeded 15 clicks :( ");
    }
    // get distance between click event and target
    var distance = getDistance(event, target); //sets distance equal to the getDistance function which has the value of the distance
    // convert distance to a hint
    var distanceHint = getDistanceHint(distance);
    // update the #distance element with the new hint
    $("#distance").text(distanceHint);
    // Checking if player won
    if (distance < 8) {
        alert('Found the treasure in ' + clicks + " clicks!");
}
});