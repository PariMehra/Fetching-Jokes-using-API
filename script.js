// Selecting elements from the HTML
const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// Function to fetch a random joke
async function fetchJoke() {
    try {
        const response = await fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = await response.json();
        return data.joke;
    } catch (error) {
        console.error('Error fetching joke:', error);
        return 'Failed to fetch joke';
    }
}

// Function to update the joke element with a new joke
async function updateJoke() {
    const joke = await fetchJoke();
    jokeElement.textContent = joke;
}

// Event listener for the joke button
jokeBtn.addEventListener('click', updateJoke);

// Initial fetch to display a joke when the page loads
updateJoke();



