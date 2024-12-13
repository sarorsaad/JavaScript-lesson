// JavaScript Libraries Tutorial

// Display function for the webpage
function displayLibraryInfo() {
    const libraryInfo = {
        'jQuery': {
            description: 'A fast, small, and feature-rich JavaScript library for DOM manipulation',
            example: '$("#element").hide();'
        },
        'Lodash': {
            description: 'A modern JavaScript utility library delivering modularity, performance & extras',
            example: '_.shuffle([1, 2, 3, 4, 5]);'
        },
        'Moment.js': {
            description: 'Parse, validate, manipulate, and display dates and times in JavaScript',
            example: 'moment().format("MMMM Do YYYY");'
        },
        'Axios': {
            description: 'Promise based HTTP client for the browser and node.js',
            example: 'axios.get("https://api.example.com/data");'
        }
    };

    let output = '<h4>Common JavaScript Libraries:</h4>';
    for (const [library, info] of Object.entries(libraryInfo)) {
        output += `
            <div class="library-info">
                <strong>${library}</strong>
                <p>${info.description}</p>
                <code>${info.example}</code>
            </div>
        `;
    }

    document.getElementById('libraries-output').innerHTML = output;
}

// Call the function when the page loads
window.addEventListener('load', displayLibraryInfo);

// Common JavaScript Libraries and their uses:

// 1. Using jQuery (DOM manipulation library)
/*
// First, include jQuery in your HTML:
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

// Then you can use jQuery:
$(document).ready(function() {
    $("#myButton").click(function() {
        $(".content").hide();
    });
});
*/

// 2. Using Lodash (utility library)
/*
// Include Lodash:
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

// Examples:
const numbers = [1, 2, 3, 4, 5];
_.shuffle(numbers);  // Randomly shuffles array
_.sum(numbers);     // Calculates sum
*/

// 3. Using Moment.js (date manipulation library)
/*
// Include Moment.js:
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js"></script>

// Examples:
moment().format('MMMM Do YYYY');  // Current date formatted
moment().add(7, 'days');         // Add 7 days to current date
*/

// 4. Using Axios (HTTP client library)
/*
// Include Axios:
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// Example of making HTTP requests:
axios.get('https://api.example.com/data')
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));
*/

// To use these libraries in your project:
// 1. Either include them via CDN (as shown above)
// 2. Or install via npm if using Node.js:
/*
npm install jquery
npm install lodash
npm install moment
npm install axios
*/

// Then import them in your JavaScript:
/*
import $ from 'jquery';
import _ from 'lodash';
import moment from 'moment';
import axios from 'axios';
*/
