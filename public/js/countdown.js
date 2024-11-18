const countdown = (message,redirect="/")=>{
 return` 
   <h1>${message}</h1>
  <p>You will be redirected to the register page in <span id="timer">5</span> seconds.</p>
  <a href="/register">Go to Register Page</a>
  <script>
    let countdown = 5;
    let timerElement = document.getElementById("timer");
    
    // Countdown function
    let interval = setInterval(function() {
      countdown--;
      timerElement.textContent = countdown;
      if (countdown <= 0) {
        clearInterval(interval);
        window.location.href = "/register"; 
      }
    }, 1000);
  </script>`
}
module.exports = countdown;
