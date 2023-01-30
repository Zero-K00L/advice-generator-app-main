let adviceId;

document.getElementById("generate-advice-button").addEventListener("click", function(){
    //generate random advice id
    adviceId = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

    //fetch advice from api
    fetch("https://api.adviceslip.com/advice/" + adviceId)
    .then(res => res.json())
    .then(data => {
        //display advice in element with id "advice-text"
        document.getElementById("advice-text").innerHTML = data.slip.advice;
        document.getElementById("advice-ID").innerHTML = "ADVICE #" + data.slip.id;
    });
});



/* document.getElementById("generate-advice-button").addEventListener("click", function(){
    // Get the current advice element
    var currentAdvice = document.getElementById("advice-text");
    var currentAdviceId = document.getElementById("advice-ID");
    
    // Add the fade-out class to the current advice element
    currentAdvice.classList.add("fade-out");
    currentAdviceId.classList.add("fade-out");
  
    // Fetch the new advice
    fetch("https://api.adviceslip.com/advice/random")
      .then(response => response.json())
      .then(data => {
        // Update the advice text and id
        currentAdvice.innerHTML = data.slip.advice;
        currentAdviceId.innerHTML = data.slip.slip_id;
  
        // Wait for the fade-out animation to finish before removing the class
        setTimeout(() => {
          currentAdvice.classList.remove("fade-out");
          currentAdviceId.classList.remove("fade-out");
        }, 1000);
      });
  });
 */



