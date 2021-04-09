/*
 * -- FREE-TO-USE FEATURE FROM
 * -- https://github.com/Maximus220/website-features
 */

var items;

var animation = function(element, holdTime, textList, speed, delCoef) {
  this.element = element;
  this.holdTime = parseInt(holdTime,10) || 2000;
  this.texts = JSON.parse(textList);
  this.speed = parseInt(speed, 10) || 20;
  this.delCoef = parseInt(delCoef, 10) || 2;

  this.isDeleting=false;
  this.loop = 0;
  this.curText = '';
  this.tick();
}
animation.prototype.tick = function() {
  var i = this.loop % this.texts.length;
  var writtingText = this.texts[i];
  var time = (this.speed*10)-Math.random()*100;

  if(this.isDeleting){ time /= this.delCoef; }
  if(this.isDeleting){
    this.curText = writtingText.substring(0, this.curText.length -1);
  }else{
    this.curText = writtingText.substring(0, this.curText.length +1);
  }
  if(this.element.id!=null){
    this.element.innerHTML = '<span id="writing-text-animation-' + this.element.id + '">' + this.curText+ '</span>';
  }else{
    this.element.innerHTML = this.curText;
  }

  if(!this.isDeleting && this.curText === writtingText){
    time=this.holdTime;
    this.isDeleting=true;
  }else if(this.isDeleting && this.curText === ''){
    this.isDeleting = false;
    time = this.holdTime / 2;
    this.loop++;
  }

  var that = this;
  setTimeout(function() {
    that.tick();
  }, time)
};

window.onload = function() {
  items = document.getElementsByClassName("writing-text-animation");
  for(let x=0;x<items.length;x++){
    new animation(items[x], items[x].dataset.time, items[x].dataset.text, items[x].dataset.speed, items[x].dataset.delcoef);
  }
}
