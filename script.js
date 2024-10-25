document.getElementById('trip-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const distance = parseFloat(document.getElementById('distance').value);
    const mode = document.getElementById('mode').value;
    let emission = 0;

    if (mode === 'public_transport') {
        emission = 0.5 * distance; // Example emission factor for public transport
    } else if (mode === 'bike') {
        emission = 0; // No emissions for biking
    } else if (mode === 'ev') {
        emission = 0.2 * distance; // Example emission factor for electric vehicles
    }

    document.getElementById('result').innerText = `Estimated CO2 emissions: ${emission.toFixed(2)} kg`;
});

document.getElementById('get-traffic').addEventListener('click', function() {
    const trafficData = [
        { level: 'low', message: 'Traffic is flowing smoothly!' },
        { level: 'medium', message: 'Traffic is moderate. Plan accordingly.' },
        { level: 'high', message: 'Heavy traffic. Consider alternative routes.' },
    ];
    
    const randomTraffic = trafficData[Math.floor(Math.random() * trafficData.length)];
    document.getElementById('traffic-result').innerText = `${randomTraffic.message} (Congestion level: ${randomTraffic.level})`;
});
