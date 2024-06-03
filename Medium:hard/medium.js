const fs = require('fs');

// Read the planets from the text file
fs.readFile('planets.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Split the data by comma to get individual planet names
    const planets = data.split(',').map(planet => planet.trim());

    // Print the planets to the console
    console.log('Planets in the solar system:');
    planets.forEach(planet => {
        console.log(planet);
    });
});
