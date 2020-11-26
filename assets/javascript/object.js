//OpenWeather API key: 0f848c85d2b3dd23041f7c21a9bd6d0b
//Current weather url: api.openweathermap.org/data/2.5/weather?q=Newmarket&appid=0f848c85d2b3dd23041f7c21a9bd6d0b






//Current Weather JSON object example
const jsonObj = {
"coord":
    {
        "lon":-79.47,
        "lat":44.05
    },
    "weather":
        [
            {
                "id":802,
                "main":"Clouds",
                "description":"scattered clouds",
                "icon":"03n"
            }
        ],
    "base":"stations",
    "main":
        {
            "temp":274.97,
            "feels_like":271.76,
            "temp_min":274.15,
            "temp_max":275.93,
            "pressure":1021,
            "humidity":80,
            "sea_level":1021,
            "grnd_level":990
        },
    "visibility":10000,
    "wind":
        {
            "speed":1.5,
            "deg":120
        },
    "clouds":
        {
            "all":37
        },
    "dt":1605236399,
    "sys":
        {
            "type":1,
            "id":643,
            "country":"CA",
            "sunrise":1605182988,
            "sunset":1605218074
        },
    "timezone":-18000,
    "id":6087701,
    "name":"Newmarket",
    "cod":200
}

