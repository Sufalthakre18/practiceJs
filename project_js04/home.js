const randomColor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for (let i = 0; i <6; i++) {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};

let intervalId;
const StartChangeColor=function(){
    if (!intervalId) {
        intervalId=setInterval(bg,1000)
    }
    function bg(){
    document.body.style.backgroundColor=randomColor()
    }
}
const StopChangeColor=function(){
   clearInterval(intervalId);
   intervalId=null
}

document.querySelector('#start').addEventListener('click',StartChangeColor)
document.querySelector('#stop').addEventListener('click',StopChangeColor)

