const display = document.querySelector('.display');
const button = document.querySelectorAll('button');

button.forEach((item)=>{
    item.onclick = ()=>{
        if(item.id == 'clear') {
            display.innerText = '';
        }else if(item.id=='') {
            let string = display.innerText.tostring();
        }
    }
})