const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

let findMatches = function (wordToMatch, cities) {
    return cities.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    });
}


// Code to divide numbers like 10000 to 10,000 with coma

// With vanillaJS
// function numberWithCommas(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }
// With arrow function
const numberWithCommas = (x) => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');


// With vanillaJS
// function displayMatches() {
//     const matchArray = findMatches(this.value, cities);
//     const html = matchArray.map(place => {
//         const regex = new RegExp(this.value, 'gi');
//         const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//         const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
//         return `
//             <li>
//             <span class="name">${cityName}, ${stateName}</span>
//             <span class="population">${numberWithCommas(place.population)}</span>
//             </li>
//         `;
//     }).join('');
//     suggestions.innerHTML = html;
// }

let displayMatches = function () {
    const matchArray = findMatches(this.value, cities);
    // This code displaying all fetched data to console:
    //console.log(matchArray);


    // This code displaying all fetched data to HTML:
    const html = matchArray.map(place => {

        // code to pluck and replace ordinary characters with color of the highlighted class "hl".
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        // the end of code for highlighting with "hl" class.

        return `
            <li>
            <span class="name">${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);