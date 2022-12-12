$( document ).ready(function() {
;

console.log("I'm here, I'm here!!")

let audioSources = [
"audio/hilde.mp3",
"audio/hilde2.mp3",
"audio/hilde3.mp3",
"audio/hilde4.mp3"
]

console.log("all audio sources: ", audioSources)


function randomAudioSrc() {
    randomNumber = Math.floor(Math.random()*audioSources.length)
    console.log("a random number between 0 and the number of sources i have: ", randomNumber)

    randomAudioSrc = audioSources[randomNumber]
    console.log("a randome source was chosen! ", randomAudioSrc)

    $("#sound1").attr("src", randomAudioSrc);
}

//calling the function on pageload
  randomAudioSrc();


  setInterval(function() {
  var d = new Date(),
     hours = d.getHours(),
     min = d.getMinutes(),
     sec = d.getSeconds();
  if (hours === 15 && min === 20 && sec === 01 && clicked == true) {
    console.log("its showtime")
     var audio = document.getElementsByTagName('audio')[0]
     //add the time in seconds
     audio.currentTime = 0;
     audio.play();
     audio.loop = true;
     audio.autoplay = true;
     audio.style.display = 'block'
  }
  }, 1000)


let clicked = false;

  document.getElementById('hilde').addEventListener('click', () => {
          // document.querySelector('audio').play();
          clicked = true;
      })

 });
