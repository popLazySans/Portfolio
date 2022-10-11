window.onload = pageLoad;
window.addEventListener("click",onAudio);
var isOpenedSound = false;
var discordButton;
function pageLoad()
{
   discordButton = document.getElementById("Discord");
   discordButton.click = discordButton.onmousedown = copyLinkToDiscord;
}
function copyLinkToDiscord(){
navigator.clipboard.writeText("P-P#9390");
alert("Copied!");
}
function onAudio(){
   if(isOpenedSound == false){
   var audio = new Audio('waterfall.mp3');
   audio.autoplay = true;
   audio.loop = true;
   audio.play();
   audio.volume = 0.2;
   isOpenedSound = true; 
   }
}


