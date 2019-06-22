$(function () {
    let tx = $('.tx');
    let prevThumb = 0;
    let index;
    let choTx = $('.choTx');

    for(let i =0;i<tx.length;i++){
        tx[i].onclick = function () {
            tx[prevThumb].style.opacity = 0.7;
            this.style.opacity = 1;
            prevThumb = i;
            index = i;
        }
    }
})