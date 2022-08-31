let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let progessFramesNumber = $$(".progess__bar-frames .progess__bar-number");
console.log(progessFramesNumber);

progessFramesNumber.forEach((progess) => {
    console.log(progess.innerHTML);
    let num = progess.innerHTML;
    progess.innerHTML = "";
    let count = 0;
    setInterval(() => {     
        if(count == num){
            clearInterval();
        }else{
            count += 10;
            progess.innerHTML = count ;
        }
    },1)
});

// project the frames

let tabs = $$(".cases__tab-item");
let panes = $$(".cases__tab-pane");
let tabsActive = $(".cases__tab-item.active");
let line = $(".cases__tabs .line");

requestIdleCallback(()=>{
    line.style.left = tabsActive.offsetLeft + "px";
    line.style.width = tabsActive.offsetWidth + "px";
});

tabs.forEach((tab,index)=> {
    let pane = panes[index];
    tab.onclick = function(){
        $(".cases__tab-item.active").classList.remove("active");
        $(".cases__tab-pane.active").classList.remove("active");
        
        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});