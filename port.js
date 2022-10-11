window.onload = pageLoad;
window.addEventListener("click",onAudio);
var changeImage;
var change_Text;
var sansDodge;
var deathFlowey;
var discordButton;
var check
var isOpenedSound =false;
function pageLoad()
{
    changeImage = document.getElementById("change_image");
    sansDodge = document.getElementById("sans");
    deathFlowey = document.getElementById("flowey");
    change_Text = document.getElementById("change_text");
    changeImage.onmouseover = changeImage.onmousedown = change_text_OnhoverImage;
    changeImage.onmouseout = changeImage.onmouseup = change_text_OnoutImage;
    changeImage.onclick = changeImage.onmousedown = myImage;
    deathFlowey.click = deathFlowey.onmousedown = floweyDeath;
    sansDodge.click = sansDodge.onmousedown = sans_dodging;
    discordButton = document.getElementById("Discord");
    discordButton.click = discordButton.onmousedown = copyLinkToDiscord; 
    var audio = document.getElementById("body");
    //onAudio();
}
function change_text_OnhoverImage(){
    changeimage(changeImage,"temmie.gif");
    changeText("Are you sure want to click this?");   
}
function change_text_OnoutImage(){
    changeimage(changeImage,"temmie.png");
    changeText("Yeah,you've thought well.");
}
function myImage(){
    changeimage(changeImage,"10818.png");
    changeText("That's cool? I think not.");
    changeImage.onmouseover = changeImage.onmousedown = changeText("That's cool? I think not.");
    changeImage.onmouseout = changeImage.onmouseup = changeText("That's cool? I think not.");
}
function changeText(text){
    change_Text.innerHTML = text;
}
function floweyDeath(){
    changeimage(deathFlowey,"floweyD.gif");
    setTimeout(waitDisappear,9000);
}
function sans_dodging(){
    changeimage(sansDodge,"dodge2.gif");
    setTimeout(waitTest,4800);
}
function changeimage(origin,newImage){
    origin.src = newImage;
}
function waitDisappear(){
    deathFlowey.src = "";
}
function waitTest(){
    sansDodge.src = "sans2.gif";
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

