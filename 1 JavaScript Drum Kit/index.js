let keyData=[
  {key:65,char:"A",sound:"clap"},{key:85,char:"S",sound:"hithat"},{key:68,char:"D",sound:"kick"},
  {key:70,char:"F",sound:"openhat"},{key:71,char:"G",sound:"boom"},{key:72,char:"H",sound:"ride"},
  {key:74,char:"J",sound:"snare"},{key:75,char:"K",sound:"tom"},{key:76,char:"L",sound:"tink"}
];

let numbers=[1,2,3,4,5,6,7,8,9];

const body = document.getElementById(`body`);
const audio= document.getElementById('audio');
(function(){
  keyData.map((data,i)=>{
    body.insertAdjacentHTML(`afterbegin`,
                            `<div data-key="${data.key}" class="key">
                                <kbd>${data.char}</kbd>
                                <span class="sound">${data.sound}</span>
                                                                </div>`);
    audio.insertAdjacentHTML('afterbegin',`<audio data-key="${data.key}" src="http://www.soundjay.com/button/button-${i}.mp3"></audio>`)
  });
})();
