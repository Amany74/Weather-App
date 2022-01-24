async function disp(){
        let options = document.getElementById("options");
        // let selectedText = "alexandria"; //default text
        // let selectedValue = "alexandria"; //default value
        selectedText = options.options[options.selectedIndex].innerHTML;
        selectedValue = options.value;
        console.log("Selected Text: " + selectedText + " Value: " + selectedValue);
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${selectedValue}&appid=7ddd280e05cda94c62d6a13cff265b1b&units=metric`;
        let data ;
        await fetch(url)
        .then(response => response.json())
        .then(res => { 
            data = res ;
            console.log(data);
        let d = new Date(); //time for now
        let w_data = {
        'cityName' : selectedValue,
        'time' : d.toString().slice(15,21) ,
        'desc' : data["weather"][0]["description"],
        'temp' : data["main"]["temp"] +"° C",
        'icon':data["weather"][0]["icon"],
        'wind' : data["wind"]["speed"] +" km/h",
        };
        console.log(w_data);
         update_weather_ui(w_data);
        })
      
        
}

  function update_weather_ui(data){
     data = data ;
    // reshow weather div
    let weather_div = document.querySelector(".weather");
    weather_div.classList.remove('invisible');

    // update ui elements
    // update city name 
    let city_name = document.querySelector('.city_name');
    city_name.innerHTML = data["cityName"] ;

    // update time
    let t = document.querySelector('.time');
    t.innerHTML = data["time"] ;

    // update desc
    if(!data["desc"]){
    let desc = document.querySelector('.decription');
    desc.innerHTML = data["desc"] ;
    }
    // update temp
    let temp = document.querySelector('.temp');
    temp.innerHTML = data["temp"] ;
    // update wind
    let w = document.querySelector('.wind_speed');
    w.innerHTML = data["wind"] ;
    
    // update icon
    let i = document.querySelector('.ico');
    i.src = `https://openweathermap.org/img/wn/${data.icon}.png`; 
}
