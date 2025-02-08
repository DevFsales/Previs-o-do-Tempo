const key ='3565bcfe609431f7bd7bc8685ef74499';

function colocardados(dados) {
    console.log(dados)
    document.querySelector(".titulo").innerHTML= "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".textoprevisao").innerHTML = dados.weather[0].description;
   document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
   document.querySelector(".imgprevisao").src = `https://openweathermap.org/img/wn/${dados.wheather[0].icon}.png`
}

async function buscacidade(cidade){
   
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta =>resposta.json())
colocardados(dados)

}



function cliquei(){
    const cidade = document.querySelector('.cidade').value;
    buscacidade(cidade)
}

