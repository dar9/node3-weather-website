const request = require('request')

const forecast=(lat, lon, callback)=>{
    const url='http://api.weatherstack.com/current?access_key=5d8766e7e5e288d5eb6a2275bd59a73c&query='+lat+','+lon+'&units=f'
    request({url,json:true},(error,{body})=>{
                if(error){
                    callback('Unable to connect to weather service',undefined)
                }else if(body.error){
                    callback('Unable to find location',undefined)
                }else{
                    callback(undefined, 'The weather is "'+ body.current.weather_descriptions[0] +'" It is currently ' + body.current.temperature + ' degress out. It feels like ' + body.current.feelslike + ' degress out. The humidty is '+body.current.humidity+'% and the uv_index is '+body.current.uv_index+'. The wind speed is '+body.current.wind_speed+'. The wind direction is :'+body.current.wind_dir+'. Is it daytime? :'+body.current.is_day)

                }
            })
}

module.exports=forecast
