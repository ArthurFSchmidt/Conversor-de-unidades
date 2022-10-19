let button = document.querySelector("#btnCalculo");

button.onclick = function(){

    // Declarar variáveis e pegar as informações do HTML.

    let tempCelcius;
    let tempFarenheit;
    let tempKelvin;
    let tempRankine;

    let tempInicial = parseInt(document.querySelector("#temperaturaInserida").value);
    let unidade = parseInt(document.querySelector("#unidade").value);
    let celcius = document.querySelector("#celcius");
    let farenheit = document.querySelector("#farenheit");
    let kelvin = document.querySelector("#kelvin");
    let rankine = document.querySelector("#rankine");

    // Limpa o formulário

    let entrada = document.querySelector("#temperaturaInserida");
    entrada.value = "";

    // Converter a unidade selecionada para celcius.

    // 0 --> Celcius
    if(unidade == 0)
    {
        tempCelcius = tempInicial;
    }else

    // 1 --> Farenheit
    if(unidade == 1)
    {
        tempFarenheit = tempInicial;

        tempCelcius = (tempFarenheit - 32) * 5/9;
    }else

    // 2 --> Kelvin
    if(unidade == 2)
    {
        tempKelvin = tempInicial;

        tempCelcius = tempKelvin - 273;
    }else

    // 3 --> Rankine
    if(unidade == 3)
    {
        tempRankine = tempInicial;

        tempCelcius = (tempRankine - 491.67) * 5/9;
    }

    // Converter celcius para as demais unidades.

    tempFarenheit = (tempCelcius * 9/5) + 32;

    tempKelvin = tempCelcius + 273;

    tempRankine = tempCelcius * 9/5 + 491.67;

    // Enviar os valores calculados para o HTML.

    celcius.innerHTML = tempCelcius.toFixed(2) + " ºC";
    celcius.style.display = "inline";

    farenheit.innerHTML = tempFarenheit.toFixed(2) + " ºF";
    farenheit.style.display = "inline";

    kelvin.innerHTML = tempKelvin.toFixed(2) + " K";
    kelvin.style.display = "inline";

    rankine.innerHTML = tempRankine.toFixed(2) + " ºR";
    rankine.style.display = "inline";

    return false;
}