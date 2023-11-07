const ANIMATOR = document.getElementById("animator")
const DEANIMATOR = document.getElementById("deanimator")

ANIMATOR.onclick = (event) => {
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

const options = {
    rootMargin: '0px',
    threshold: 0.1
}

const callback = (entries, observer) => {
   for(const entry of entries) {
    if(entry.isIntersecting) {
        entry.target.classList.add("active")
    } else {
        entry.target.classList.remove("active")
    }
   }
}

const observer = new IntersectionObserver(callback, options);

const targetList = document.getElementsByClassName("observable");


for(const target of targetList) {
    observer.observe(target);
}