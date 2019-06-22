window.addEventListener('load',function () {
    let thumb =document.querySelectorAll('img');
    let prevThumb = 0;
    let index;
    for(let i =0;i<thumb.length;i++){
        thumb[i].onclick = function () {
            thumb[prevThumb].style.opacity = 0.7;
            this.style.opacity = 1;
            prevThumb = i;
            index = i;
        }
    }
    let spans = document.getElementById('inputSpan');
    let textarea = document.querySelector('textarea');
    let span1 = document.getElementById('inputSpan1');
    textarea.onkeyup = function () {
        let value = this.value;
        spans.innerText = value.length;
        span1.innerText = 160 - spans.innerText;
    }

    let message = document.querySelector('.message');
    let submit = document.querySelector('input[type=submit]');
    // let messageBox = document.querySelector('form > ul > li:last-child')
    submit.onclick = function (e) {
        e.preventDefault();
        let userName = document.querySelector('input[type=text]');
        let thumbs = thumb[index].src;
        let users = userName.value.trim();
        let time = new Date().toLocaleDateString();
        let content = textarea.value;
        let obj = {thumbs, users, time, content};
        insertMessage(obj);

        function insertMessage({}) {
            let str = `
        <ul class="message">
           <li>
               <div class="thumb"><img src="${thumbs}" alt="fail"></div>
               <div class="text">
                    <p><b>${users}</b><span>${time}</span></p>
                    <p>${content}</p>
               </div>
           </li>
        </ul>       
        `;
            message.innerHTML = message.innerHTML+str;
        }
    }
});