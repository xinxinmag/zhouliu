window.onload = function () {
    let home = document.getElementById('home');
    home.onmouseenter = function () {
        home.style.color = 'red'
    };
    home.onmouseleave = function () {
        home.style.color = '#fff'
    };
    let page_list = document.getElementsByClassName('page_list');
    let li = page_list[0].getElementsByTagName('li');
    for (let i = 0; i < li.length; i++) {
        li[i].onmouseenter = function () {
            this.style.background = "#12b7de"
        }
        li[i].onmouseleave = function () {
            this.style.background = "#fff"
        }
    }

    let diary1 = document.getElementsByClassName('diary-1')
    let title = diary1[0].getElementsByClassName('title')
    let li1 = title[0].getElementsByTagName('li')
    for (let i = 0; i < li1.length; i++) {
        li1[i].onclick = function () {
            for (let j = 0; j < li1.length; j++) {
                li1[j].style.borderBottom = 'none'
            }
            this.style.borderBottom = '2px solid #000';
            return false;
        }
    }

    /*  let diary_1_body_right =document.getElementsByClassName('diary-1-body-right');
      let li2 = diary_1_body_right[0].getElementsByTagName('li');
      for(let i = 0;i <)*/
    //轮播图
    // let index1 = 0;
    //11
    let current = 0, next = 0;
    let li4 = document.querySelectorAll('.page_list li')
    let body_1 = document.querySelector('.body-1')
    let page_next_2 = document.querySelector('.page-next-2');
    let li3 = document.querySelectorAll('.cold li');
    let page_next_1 = document.querySelector('.page-next-1');
    let w = li3[0].offsetWidth;
    let flag =true;
    //图片自动过
    let t= setInterval(page_next_2.onclick,2000);
    body_1.onmouseenter=function(){
        clearInterval(t)
    }
    body_1.onmouseleave=function(){
        t= setInterval(page_next_2.onclick,2000);
    }
    page_next_2.onclick = function () {
            if(!flag){
            return;
        }
        flag=false;
        next--;
        if(next < 0){
            next = li3.length - 1;
        }
        li3[next].style.left = -w + 'px';
        li4[current].classList.remove('hot6');
        li4[next].classList.add('hot6');
        animate(li3[current],{left: w});
        animate(li3[next],{left: 0},function () {
            flag = true;
        });
        current = next;
    };
    page_next_1.onclick = function () {
        if(!flag){
            return;
    }
        flag = false;
        next++;
        if(next == li3.length){
            next = 0;
        }
        li3[next].style.left = w + 'px';
        li4[current].classList.remove('hot6');
        li4[next].classList.add('hot6');
        animate(li3[current],{left: -w});
        animate(li3[next],{left: 0},function () {
            flag = true;
        });
        current = next;
    }
    for(let i=0;i<li4.length;i++){
        li4[i].onclick=function () {
            if(next===i){
                return;
            }
            next=i;
            if(next>current){
                li3[next].style.left=w+'px';
                animate(li3[current],{left:-w});
                animate(li3[next],{left:0});

            }else{
                li3[next].style.left=-w+'px';
                animate(li3[current],{left:w});
                animate(li3[next],{left:0});
            }
            li4[current].classList.remove('hot6');
            li4[next].classList.add('hot6');
            current=next;

        }
    }

    let newslist=document.querySelectorAll('.newslist li');
    let newslistP=document.querySelectorAll('.newslist p');
    let newslistA=document.querySelectorAll('.newslist a');
    for(let i=0;i<newslist.length;i++){
        newslist[i].onmouseover=function(){
            for(let j=0;j<newslist.length;j++){
                newslistP[j].style.display='none';
                newslist[j].style.background="none";
                newslistA[j].style.fontWeight="normal";

            }
            newslistP[i].style.display='-webkit-box';
            newslist[i].style.background="#f7f7f7";
            newslistA[i].style.fontWeight="bold";
        }
    }



    /* page_next_2.onclick = function(){
      index1++;
      if(index1 == 4){
          index1=0;
      }
      li3.forEach(function (ele){
              ele.style.zIndex = 1;
      });*/
 /*     for(let i = 0;i<li3.length;i++){
          li3[i].style.zIndex = 1;
      }*/
/*      console.log(li3[index1])
      li3[index1].style.zIndex = 999;
          return false;
  }*/

  //左
  //   let index = 3;
    /*let page_next_1 =document.querySelector('.page-next-1');
    page_next_1.onclick = function(){
        index--;
        if(index < 0){
            index=page_next_1.length-1;
        }
        li3.forEach(function (ele){
            ele.style.zIndex = 1;
        });
        console.log(li3[index])
        li3[index].style.zIndex = 999;
        return false;
    }

    let page_list1 = document.querySelector('.page_list');
    let li4 = page_list1[0].getElementsByTagName('li')
    console.log(li4);*/
//延迟加载
    let viewH =window.innerHeight;
    let imgs = document.querySelectorAll('.lazyload');
    let positionArr = [];
    imgs.forEach(function (ele) {
        positionArr.push(ele.offsetTop);
    });

    window.onscroll = function () {
        let scrolltop = document.documentElement.scrollTop;
        for(let i=0;i<positionArr.length;i++){
            if(scrolltop + viewH >= positionArr[i]){
                if(!imgs[i].src){
                    imgs[i].src = imgs[i].getAttribute('aa');
                }
            }
        }

    }

}