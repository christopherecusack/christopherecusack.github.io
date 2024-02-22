export const students = [
    {
        name: 'Parasio, Herbert',
        class: 'GEX Class of 2024',
        website: 'https://herbertph.com/'
    }, {
        name: 'Echeandia, Manuel',
        class: 'WMAD Class of 2024',
        website: 'https://manuelecheandia.com/'
    }, 
    {
        name: 'Saenz Montano, Marcela',
        class: 'WMAD Class of 2024',
        website: 'https://marcelasaenz.com/'
    }, 
    {
        name: 'Dorfman, Anastasia',
        class: 'WMAD Class of 2024',
        website: 'https://anastasiadorfman.com/'
    }
    , 
    {
        name: 'Budd, Taylor',
        class: 'WMAD Class of 2023',
        website: 'https://taylorbudd.com/'
    }
].sort((a, b) => a.name > b.name ? 1 : -1);