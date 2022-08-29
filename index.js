// Remove the <main>
document.querySelector('main').remove();

// Create h1#victory element
var newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory');

// Set the text
newHeader.innerHTML = 'YOUR-NAME is the champion';
