$(function () {
    let leftBtn = $('.page-next-1'),
        rightBtn = $('.page-next-2'),
        list = $('.page_list > li'),
        imgs =$('.cold >li'),
        body_1 =$('.body-1');
        imgsWidth = imgs.width();
    console.log(body_1);
    let current = 0;
    let next =0;
    let flag =true;
    rightBtn.click(function () {
        if(!flag){
            return;
        }
        flag = true;
        next++;
        if(next == imgs.length){
            next = 0;
        }
         $(imgs[current]).css({left: -imgsWidth})
         $(imgs[next]).css({left:0})

         $(list[current]).removeClass('hot6');

         $(list[next]).addClass('hot6');
        current = next;
    })
    leftBtn.click(function () {
        if(!flag){
            return;
        }
        flag = true;
        next--;
        if(next < 0){
            next = 3;
        }
        $(imgs[current]).css({left: imgsWidth})
        $(imgs[next]).css({left:0})

        $(list[current]).removeClass('hot6');

        $(list[next]).addClass('hot6');
        current = next;
    })

    let t;
     $(body_1[0]).mouseenter(function () {
         clearInterval(t);
     })
    $(body_1[0]).mouseleave(function () {
        t=setInterval(function () {
            rightBtn.click()
        },1000)
    })

    //延迟加载
    $("img.lazy").lazyload({effect: "fadeIn"});
})