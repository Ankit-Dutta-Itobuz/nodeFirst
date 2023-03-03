// function getWeatherData(userLocation) {
//     const weatherData =[
//         {
//             location: 'kolkata',
//             lat:'23',
//             long:'12',
//             condition: {
//                 current: 'sunny',
//                 day_val: '1',
//                 overcast: '9'

//             }

            
//         }
        
//         ,{
//             location: 'Mumbai',
//             lat:'13',
//             long:'42',
//             condition: {
//                 current: 'sunny',
//                 day_val: '1',
//                 overcast: '9'

//             }

            
//         }
//     ]
// //     let obj = weatherData.find(o => o.condition.day_val === '1');

// // console.log(obj);
// function specificLocationData(data) {
//     return data.location==userLocation;
// }

// const filteredData=weatherData.filter(specificLocationData);
// console.log(filteredData[0]);


// }

// getWeatherData('Kolkata');

function getWeatherData(enterLocation) {
    const weatherData =[
        {
           
            location:'kolkata',
            lat:'23',
            long:'12',
            temp:"25",
            feels : "32",
            wind:"12kmph",
        },
        {
            location: 'burdwan',
            lat:'24',
            long:'13',
            temp:"29",
            feels : "31",
            wind:"12.4kmph",
        },
        

    ]
    function specificLocation(data) {
        return data.location==enterLocation;
    }
    const filteredData=weatherData.filter(specificLocation);
    console.log(filteredData[0]);
}
getWeatherData('burdwan');