function getWeatherData(location) {
    const weatherData =[
        {
            location: 'kolkata',
            lat:'23',
            long:'12',
            

            
        }
    ]
    let obj = weatherData.find(o => o.lat === '23');

console.log(obj);
}

getWeatherData()