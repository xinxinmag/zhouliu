window.addEventListener('load',function () {
    let tab=document.querySelectorAll('.tab>li');
    let prev=0;
    let type="all";
    let dotolist=[{id:1,content:'其实还好',ctime:'2019/6/1',status:false},
        {id:2,content:'一切都好',ctime:'2019/6/2',status:false},
        {id:3,content:'一丝丝好',ctime:'2019/6/3',status:true},
        {id:4,content:'好爆了',ctime:'2019/6/4',status:false},
    ];

    let str=localStorage.getItem('dotolist');
    if(!str){
        saveDate();
        str=localStorage.getItem('dotolist');
}
    dotolist=JSON.parse(str);
    let content=document.querySelector('.content');
    function render(arr){
        let html='';
        arr.forEach(elem=>{
            if(elem.status){
                html +=`<li id="${elem.id}"><input type="checkbox" checked="checked" }><p>${elem.content}</p><del>X</del><time>${elem.ctime}</time></li>`
            }else{
                html +=`<li id="${elem.id}"><input type="checkbox"}><p>${elem.content}</p><del>X</del><time>${elem.ctime}</time></li>`
            }
        });
        content.innerHTML=html;
    }


    tab.forEach(function (ele,index) {
        ele.onclick=function () {
            tab[prev].classList.remove('hot');
            this.classList.add('hot');
            prev = index;
            type = this.getAttribute('type');
            saveDate();
            render(filterData(type));
        }
    });
    function filterData(type){
        let arr=[];
        switch(type){
            case 'all':
                arr =dotolist;
                break;
            case 'done':
                arr =dotolist.filter(ele=>ele.status);
                break;
            case 'doing':
                arr =dotolist.filter(ele=>!ele.status);
                break;
        }
        return arr;
    }

    tab[0].onclick();
    //删除或选中
    content.onclick=function(e){
        let target=e.target;
        let id=target.parentNode.id;
        if(target.nodeName == "DEL"){
            dotolist= dotolist.filter(ele=>ele.id !==id);
           let index= dotolist.findIndex(ele=>ele.id==id);
            dotolist.splice(index,1);
        }else if((target.nodeName == "INPUT")){
            let ele=dotolist.filter(ele=>ele.id==id)[0];
            ele.status=target.checked;
        }
        saveDate();
        render(filterData(type))
    }


    //更新
    let forms=document.forms[0];
    let textBtn=forms.elements[0];
    let submitBtn=forms.elements[1];
    submitBtn.onclick=function(e){
        e.preventDefault();
        let obj=createObj();
        if(!obj){
            return
        }
        dotolist.push(obj);
        forms.reset();
        saveDate();
        render(filterData(type));
    }
    function createObj(){
        let id;
        if(!dotolist[dotolist.length-1]){
          id=1;
        }else{
            id=dotolist[dotolist.length-1].id+1;
        }
        let content=textBtn.value;
        let ctime=new Date().toLocaleDateString();
        let status=false;
        if(!content){
            alert('添加不能为空');
        }else{
            return {id,content,ctime,status};
        }

    }

    //存储到localStorage
    function saveDate(){
        localStorage.setItem("dotolist",JSON.stringify(dotolist));
    }
})