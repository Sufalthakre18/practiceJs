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



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const url = 'https://api.github.com/users/Sufalthakre18';
        const xmr = new XMLHttpRequest();
        xmr.open('GET', url);
        xmr.onreadystatechange = function () {
            if (xmr.readyState === 4) {
                const data = JSON.parse(this.responseText);
                document.getElementById('image').innerHTML = `<img src="${data.avatar_url}" alt="Profile">`;
                document.getElementById('followers').innerHTML = `<h2>Followers: <span>${data.followers}</span></h2>`;
                document.getElementById('repo').innerHTML = `<h2>repository : <span>${data.public_repos}</span></h2>`;
                document.getElementById('ur').innerHTML = `<h2>URL: <a href="${data.html_url}" target="_blank">profile</a></h2>`;

            }
        };
        xmr.send();