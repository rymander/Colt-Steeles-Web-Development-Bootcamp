const container = document.querySelector('#container');

function getPokemonNameById(pokemonId) {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    const url = `${baseUrl}${pokemonId}/`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => data.name)
        .catch(error => {
            console.error('Failed to fetch Pokémon data:', error);
            return 'Unknown';
        });
}

async function displayPokemonImages(startId, endId) {
    for (let i = startId; i <= endId; i++) {
        const newImg = document.createElement('img');
        const newDiv = document.createElement('div');
        const pokenum = document.createElement('span');

        newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
        newDiv.classList.add('pokemon');
        newImg.classList.add('sprite');

        try {
            const name = await getPokemonNameById(i);
            pokenum.innerText = `#${i} ${name}`;
            newImg.onclick = () => {
                window.open(`https://www.serebii.net/pokemon/${name}`, '_blank');
            };
        } catch (error) {
            pokenum.innerText = `#${i} Unknown`;
        }

        newDiv.appendChild(newImg);
        newDiv.appendChild(pokenum);
        container.appendChild(newDiv);

        // Delay to prevent overwhelming the API and browser
        await new Promise(resolve => setTimeout(resolve, 100)); // 100 ms delay
    }
}

// Example: Load Pokémon 1 to 1026 in batches
async function loadAllPokemons() {
    const totalPokemons = 251;
    const batchSize = 20; // Load 20 Pokémon at a time
    for (let i = 1; i <= totalPokemons; i += batchSize) {
        const endId = Math.min(i + batchSize - 1, totalPokemons); // Make sure not to exceed total
        await displayPokemonImages(i, endId);
    }
}

// Call the function to load all Pokémon
loadAllPokemons();




