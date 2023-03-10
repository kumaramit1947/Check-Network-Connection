const popupBox = document.getElementsByClassName('popup')[0];
const title = document.getElementsByClassName('title')[0];
const descript = document.getElementsByClassName('desc')[0];
const reconnectBtn = document.getElementsByClassName('reconnect')[0];

let timer, isOnline = true;
let intervalId;
const checkConnection=async ()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        isOnline = response.status>=200 && response.status<300;
    }
    catch(error){
        isOnline = false;
    }
    timer=10;
    clearInterval(intervalId);
    handlePopup(isOnline);
}

const handlePopup = (status) =>{
    if(status) {
        title.textContent='Restored Connection';
        descript.innerHTML='Your device is succesfully connected to the Internet...';
        reconnectBtn.textContent= 'Restored';
        reconnectBtn.style.background='rgb(11, 155, 40)';
        popupBox.style.borderTopColor='rgb(11, 155, 40)';
        title.style.color='rgb(11, 155, 40)';
        setTimeout(()=>{
             popupBox.classList.remove('show');
             reconnectBtn.textContent= 'Restore Now';
             reconnectBtn.style.background='rgb(26, 111, 201)';
             popupBox.style.borderTopColor='rgb(249, 18, 118)';
             title.style.color='rgb(249, 18, 118)';
        },2000);
        return;
    }
        title.textContent='Lost Connection';
        descript.innerHTML='Network is unavailable. We will attempt to reconnect in <span>10</span> seconds...';
        popupBox.classList.add('show');
        intervalId = setInterval(()=>{
            const countdownBox = document.querySelector('.desc span');
            countdownBox.textContent = --timer;
            if(timer < 1) {
                timer=0;
                checkConnection();
            }
        },1000);
}
setInterval(()=>{
    return isOnline && checkConnection();
}, 3000);
reconnectBtn.addEventListener('click',checkConnection);