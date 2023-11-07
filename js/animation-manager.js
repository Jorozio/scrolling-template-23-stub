// adds the html of the button
const ANIMATOR = document.getElementById("animator")
const DEANIMATOR = document.getElementById("deanimator")

// adds a fucntion
ANIMATOR.onclick = (event) => {
    // this selects the the parent div and adds to the class list of that object
    ANIMATOR.parentNode.classList.add("right-to-left")
    DEANIMATOR.disabled = false;
    ANIMATOR.disabled = true;
}
DEANIMATOR.onclick = (event) => {
    DEANIMATOR.parentNode.classList.remove("right-to-left")
    DEANIMATOR.disabled = true;
    ANIMATOR.disabled = false;
}

// ==========================intersection============================

// this is for the observer, basically tells it to use the whole viewport, and only to activate it when its 10% onto the screen
const options = {
    rootMargin: '0px',
    threshold: 0.1
}

// is triggered whne the observer is observed
const callback = (entries, observer) => {
    // different way of doing a loop
    /**
     * entry.isIntersecting is a boolean that will be true if in view, and not if not
     * entry.target is a reference to the html element that allows us to change its calss
     */
   for(const entry of entries) {
    if(entry.isIntersecting) {
        // if in view, add the animation
        entry.target.classList.add("active")
    } else {
        // if not active dont play the active animation 
        entry.target.classList.remove("active")
    }
   }
}
// the observer is linked to the view port and holds the logic to trigger the callback eberytime it is detected
// combinding the new function and the parameters, we can use IntersectionObserver from the js library to put them both together
const observer = new IntersectionObserver(callback, options);

// creates an array of all html elements  with all the classes with the tag
const targetList = document.getElementsByClassName("observable");

// this lets the observer go through each html thing and tells it this should be observed 
for(const target of targetList) {
    // from the js library, it links each target to the observer.
    observer.observe(target);
}