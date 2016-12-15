var secEl = document.getElementById('seconds');
var minutesEl = document.getElementById('minutes');
var hoursEl = document.getElementById('hours');

var time = () =>{
  const date = new Date();
  const secondsDegree=(date.getSeconds()/60)*360+90;
  const minutesDegree=(date.getMinutes()/60)*360+90;
  const hoursDegree=((date.getHours()%12 || 12)/12)*360+90;
  secEl.style.transform=`rotate(${secondsDegree}deg)`;
  minutesEl.style.transform=`rotate(${minutesDegree}deg)`;
  hoursEl.style.transform=`rotate(${hoursDegree}deg)`;
}
setInterval(time,1000);
