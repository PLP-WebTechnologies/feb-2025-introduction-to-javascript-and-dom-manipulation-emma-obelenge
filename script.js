// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', () => {
    const heading = document.getElementById('main-heading');
    heading.textContent = 'Text Changed Dynamically!';
    heading.style.color = 'blue'; // Modify CSS style
});

// Add a new element dynamically
document.getElementById('add-element-btn').addEventListener('click', () => {
    const dynamicContent = document.getElementById('dynamic-content');
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a dynamically added paragraph.';
    newElement.style.fontStyle = 'italic'; // Modify CSS style
    dynamicContent.appendChild(newElement);
});

// Remove the last added element
document.getElementById('remove-element-btn').addEventListener('click', () => {
    const dynamicContent = document.getElementById('dynamic-content');
    if (dynamicContent.lastChild) {
        dynamicContent.removeChild(dynamicContent.lastChild);
    }
});