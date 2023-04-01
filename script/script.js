let countDownDate = new Date("Oct 6, 2023 14:00:00").getTime();

const countDownTime = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("time").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds;

  if (distance < 0) {
    clearInterval(countDownTime);
    document.getElementById("time").innerHTML = "EXPIRED";
  }
}, 1000);
