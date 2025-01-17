
const btn = document.getElementById('button')
const info = document.getElementById('weatherInfo')

async function weatherNews() {
    const city = document.getElementById('input').value

    if(!city){
        console.log("False");
        return;
    }
    
    try{
    
        const apiKey = await 'fb2cff02b71168e9f0c68fd3f83d168a';
        const apiUrl = await `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=kk`;

        const response = await fetch(apiUrl)
        const data = await response.json()
        
        info.innerHTML = `
        <p><strong>City:  </strong>${data.name}</p>
        <p><strong>Weather:  </strong>${data.weather[0].description}<p>
        <p><strong>Temperature:  </strong>${data.main.temp}°C </p>
        `

        info.classList.add("infoWea")
        }catch(error){
        alert("source doesn't work");
        
    }
}

weatherNews()

btn.addEventListener("click",  weatherNews);