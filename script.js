'use strict';
let secretnumber=Math.trunc(Math.random()*20)+1;
console.log(secretnumber);
let score=20;
let highscore=0

document.querySelector('#check').addEventListener('click',function ()
{

    var key=Number(document.querySelector('#num').value);
    if(score>1)
    {
    if(!key)
    {
        document.querySelector('#think').textContent='No Number';
    }
   else if(key===secretnumber)
{
    document.querySelector('.hidden').textContent=secretnumber;
    document.querySelector('body').style.backgroundColor='rgb(0, 230, 0)';
    document.querySelector('.head').style.backgroundColor='rgb(0, 230, 0)';
    document.querySelector('.left').style.backgroundColor='rgb(0, 230, 0)';
    document.querySelector('.right').style.backgroundColor='rgb(0, 230, 0)';
    document.querySelector('#num').style.backgroundColor='rgb(0,230,0)';
    if(score>highscore)
    {
        highscore=score;
    }
    document.querySelector('#ush').textContent=highscore;
}
else if(key!==secretnumber)
{
    document.querySelector('#think').textContent=key>secretnumber?'Your  number is large':'Your number is small';
    score--;
    document.querySelector('#us').textContent=score;
}
}
else{
    document.querySelector('#think').textContent='You lost the game';
    document.querySelector('#us').textContent=0;
    document.querySelector('.item1').style.backgroundColor="red";
}
});
document.querySelector('.item1').addEventListener('click',function()
{
    score=20;
    document.querySelector('.item1').style.backgroundColor="white";
     secretnumber=Math.trunc(Math.random()*20)+1;
    console.log(secretnumber);
    document.querySelector('.hidden').textContent='?';
    document.querySelector('body').style.backgroundColor='rgb(41,40,40)';
    document.querySelector('.head').style.backgroundColor='rgb(41, 40, 40)';
    document.querySelector('.left').style.backgroundColor='rgb(41, 40, 40)';
    document.querySelector('.right').style.backgroundColor='rgb(41, 40, 40)';
    document.querySelector('#num').style.backgroundColor='rgb(41,40,40)';
    document.querySelector('#num').value='none';
    document.querySelector('#us').textContent=score;
})
