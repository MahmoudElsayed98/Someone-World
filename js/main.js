// Start Animate Width On Scroll
let skills = document.querySelector(".skills");
let progressDivs = document.querySelectorAll(
  ".skills .container .skills-content .links li div"
);
// End Animate Width On Scroll
// Start Increase Numbers On Scroll
let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(
  ".stats .container .stats-content .stat .number"
);
let started = false;
window.onscroll = function () {
  // Start Animate Width On Scroll
  if (window.scrollY >= skills.offsetTop) {
    progressDivs.forEach((e) => {
      e.style.width = e.dataset.width;
    });
  }
  // End Animate Width On Scroll
  if (window.scrollY >= stats.offsetTop) {
    if (!started) {
      numbers.forEach((e) => {
        increaseNumbers(e);
      });
      started = true;
    }
  }
};
function increaseNumbers(ele) {
  let goal = ele.dataset.number;
  let counter = setInterval(() => {
    ele.textContent++;
    if (ele.textContent == goal) {
      clearInterval(counter);
    }
  }, 2000 / goal);
}
// End Increase Numbers On Scroll
// Start CountDown
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours.length
    ? `00${hours}`
    : hours;
  document.querySelector(".minutes").innerHTML = minutes
    ? `0${minutes}`
    : minutes;
  document.querySelector(".seconds").innerHTML = seconds
    ? `0${seconds}`
    : seconds;
}, 1000);

// End CountDown
