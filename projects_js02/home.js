const form=document.querySelector('form');
// this use case will give you empty
// const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function (e) {
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');
    const guide=document.querySelector('#Guide');

    if (height===''|| height<0||isNaN(height)) {
        result.innerHTML=`please give valid height :- ${height}`;
    }else if (weight===''|| weight<0||isNaN(weight)) {
        result.innerHTML=`please give valid weight :- ${weight}`;
    } else{
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        result.innerHTML=`<span>${bmi}</span>`;
        if (bmi<18.6) {
            guide.innerHTML=`you are Under Weight`
        }else if (bmi>=18.6 && bmi<=24.9) {
            guide.innerHTML=`you are in Normal weight`
        }else{
            guide.innerHTML=`you are Overweight`
        }
    }

})

const clock=document.getElementById('clock');
setInterval(function(){
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)