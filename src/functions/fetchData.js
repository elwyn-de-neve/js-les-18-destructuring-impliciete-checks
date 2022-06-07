/*import axios from "axios";

async function fetchData () {

    try {
        const response = await axios.get('https://restcountries.com/v3.1/all')

        // console.log( response.data );

        // Destructuring
        const {
            name: { official: countryName },
            population : countryPopulation,
            flags: { png: countryFlag }
        } = response.data[0]

        // console.log(`${countryName} has a population of ${countryPopulation} people and this is a url to their flag: ${countryFlag}`);

    } catch ( err ) {
        console.error( err );
    }
}

fetchData()*/
