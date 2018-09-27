let illustration = $('#home-top')
let layer = $('#page')
let text= $('.dont-move')

layer.mousemove(function(e){
  let valueX = (e.pageX * -1 / 20)
  let valueY = (e.pageY * -1 / 50)
  let invValueX = (e.pageX * 1 / 70)
  let invValueY = (e.pageY * 1 / 100)

  illustration.css('background-position', valueX + 'px '+ valueY + 'px')

  text.css ({
    'transform':'translate3d('+invValueX+'px,'+invValueY+'px,0)'
  })
})

<!--[if lt IE 9]><script>document.createElement('video');</script><![endif]-->

var video=document.querySelector("video");
var click=1;

video.addEventListener("click", function() {

  if (click===1) {
  video.play();
  }

  if (click===-1) {
  video.pause();
  }

  click=click*-1;

});







var cloud1=document.getElementById("cloud1");
var xCloud1=parseFloat(getComputedStyle(cloud1).marginLeft);
var cloud2=document.getElementById("cloud2");
var xCloud2=parseFloat(getComputedStyle(cloud2).marginLeft);
var sky=document.querySelector(".sky");
var sun=document.getElementById("sun");
var wSun=100;
var hSun=100;
var vitesseCloud1=0.8;
var vitesseCloud2=1.5;
var vitesseSun=0.5;



function  animerCloud1() {
  cloud1.style.marginLeft=(xCloud1-vitesseCloud1)+"px";
  xCloud1=xCloud1-vitesseCloud1;
}

function  animerCloud2() {
  cloud2.style.marginLeft=(xCloud2+vitesseCloud2)+"px";
  xCloud2=xCloud2+vitesseCloud2;
}

function animerSoleil() {
  sun.style.width=(wSun+vitesseSun)+"%";
  sun.style.height=(hSun+vitesseSun)+"%";
  wSun=wSun+vitesseSun;
  hSun=hSun+vitesseSun;
}

function launchAnimerSoleil() {
  var interval3=setInterval(animerSoleil,30);
  setTimeout(function(){clearInterval(interval3);},1000);
}

function animation() {

  var interval=setInterval(animerCloud1,10);
  var interval2=setInterval(animerCloud2,10);
  setTimeout(function(){clearInterval(interval);},2000);
  setTimeout(function(){clearInterval(interval2);},2000);
  sky.removeEventListener("click",animation);

  var interval4=setInterval(launchAnimerSoleil,2000);
  setTimeout(function(){clearInterval(interval4);},2000);
}

  sky.addEventListener("click", animation);
