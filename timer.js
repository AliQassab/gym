const countdown = () => {
  const countDate = new Date("Aug 30, 2023").getTime();
  const now = new Date().getTime();
  let gap = countDate - now;

  // Check if countdown is finished
  if (gap <= 0) {
    gap = 0;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  gap %= day;

  const textHour = Math.floor(gap / hour);
  gap %= hour;

  const textMinute = Math.floor(gap / minute);
  gap %= minute;

  const textSecond = Math.floor(gap / second);

  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;
};
setInterval(countdown, 1000);
