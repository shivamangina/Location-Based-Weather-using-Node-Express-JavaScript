const request = require('request')

const forecast =(long,lat,callback) =>{

const url = 'https://api.darksky.net/forecast/3e5cf181d1e8abc234c31dc235f4f537/' + encodeURIComponent(long) + ',' + encodeURIComponent(lat) + ''

request({ url:url, json:true}, (error,response) =>{

    if(error){

    
       callback('Unable to connect to weather service!',undefined)
    }else if(response.body.error){

       callback('Unable to find location', undefined)
    }else{


       callback(undefined,{

        
     
           placename : response.body.daily.data[0].summary,
           temperature : response.body.currently.temperature,
           Rainchance :  response.body.currently.precipProbability


                 

          })
       }

  })


}

module.exports = forecast