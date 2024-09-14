// Observer for .hidden elements
const observerHidden = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observerHidden.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observerHidden.observe(el));

// Observer for .hidden elements
const observerHiddenright = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-right');
            observerHiddenright.unobserve(entry.target);
        }
    });
});

const hiddenElementsright = document.querySelectorAll('.hidden-right');
hiddenElementsright.forEach((el) => observerHiddenright.observe(el));


// Increment the top position by 5% for each subsequent .hidden2 element
const hiddenElements2 = document.querySelectorAll('.hidden2');
hiddenElements2.forEach((el, index) => {
    el.style.top = `${12 + index * 8.5}%`; // Increment by 8.5% for each element
});

// Observer for .hidden2 elements
const observerHidden2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-2');
            observerHidden2.unobserve(entry.target);
        }
    });
});

hiddenElements2.forEach((el) => observerHidden2.observe(el));

// Observer for triggering typewriter effect
const typewriterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Introduce a delay before starting the typewriter animation
            setTimeout(() => {
                typeWriter(entry.target); // Call the typewriter function on the target element
                typewriterObserver.unobserve(entry.target); // Unobserve after effect runs
            }, 500); // Delay in milliseconds (500ms in this example)
        }
    });
});

// Select the element where the typewriter effect will happen
const typewriterElement = document.getElementById('typewriter');
typewriterObserver.observe(typewriterElement);