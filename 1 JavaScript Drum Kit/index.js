let keyData=[
  {key:65,char:"A",sound:"clap"},{key:83,char:"S",sound:"hithat"},{key:68,char:"D",sound:"kick"},
  {key:70,char:"F",sound:"openhat"},{key:71,char:"G",sound:"boom"},{key:72,char:"H",sound:"ride"},
  {key:74,char:"J",sound:"snare"}
];

const body = document.getElementById(`buttonsDiv`);
const audio= document.getElementById('audio');
(function(){
  keyData.map((data,i)=>{
    body.insertAdjacentHTML(`beforeend`,
                            `<div id="keys" data-key="${data.key}" class="key">
                                <kbd>${data.char}</kbd>
                                <span class="sound">${data.sound}</span>
                                                                </div>`);
    document.querySelector(`div[data-key="${data.key}"]`).addEventListener('animationend',(e)=>{
       e.srcElement.classList.remove('shake');
    })
    audio.insertAdjacentHTML('afterbegin',`<audio data-key="${data.key}" src="http://www.soundjay.com/button/button-${i+1}.mp3"></audio>`)
  });
})();

window.addEventListener('keydown',(e)=>{
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!audio) return;
  audio.currentTime=0;
  audio.play();
  btn.classList.add('shake');
});
