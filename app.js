let adviceId;

document.getElementById("generate-advice-button").addEventListener("click", function(){
    //generate random advice id
    adviceId = Math.floor(Math.random() * (215 - 1 + 1)) + 1;

    //fetch advice from api
    fetch("https://api.adviceslip.com/advice/" + adviceId)
    .then(res => res.json())
    .then(data => {
        //display advice in element with id "advice-text"
        document.getElementById("advice-text").innerHTML = data.slip.advice;
        document.getElementById("advice-ID").innerHTML = "ADVICE #" + data.slip.id;
    });
});








