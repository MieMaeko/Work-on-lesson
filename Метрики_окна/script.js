//Размер окна
let RW = document.getElementById('RW');
let w = document.documentElement.clientHeight;
let h = document.documentElement.clientWidth;
let wP = window.innerWidth;
let hP = window.innerHeight
RW.addEventListener('click',()=>{
    console.log(w,h);
    if((wP-w)>0){
        console.log('Гор прокрутка есть', wP, w)
    }
    if ((hP-h)>0){
        console.log('Верт прокрутка есть', hP, h)
    }
});

//Размеры окна с учетом прокрутки в JavaScript
let Pr = document.getElementById('Pr');
let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
);
let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth
);
Pr.addEventListener('click',()=>{
    console.log(scrollHeight);
    console.log(scrollWidth);
})


//Получение прокрутки окна в JavaScript
let x = window.pageXOffset;
let y = window.pageYOffset;
let get_Pr = document.getElementById('get_Pr');
get_Pr.addEventListener('click',()=>{
    console.log(x,y)
})

//Получение и изменение прокрутки окна в JavaScript
let get_Pr_Ch = document.getElementById('get_Pr_Ch');
let t = document.documentElement.scrollTop;
let l = document.documentElement.scrollLeft;
get_Pr_Ch.addEventListener('click',()=>{
    // document.documentElement.scrollTop = 300;
    // document.documentElement.scrollTop = 0;
    document.documentElement.scrollTop = scrollHeight - 100;
    // document.documentElement.scrollTop = scrollHeight;

})



//Метод для прокрутки окна в положение в JavaScript
let method = document.getElementById('method');
method.addEventListener('click',()=>{
    // window.scrollTo({
    //     top:300,
    //     left:0,
    //     behavior:'auto'
    // })
    // window.scrollTo({
    //     top:0,
    //     left:0,
    //     behavior:'smooth'
    // })
    window.scrollTo({
        top: scrollHeight,
        left: 100,
        behavior:'smooth'
    })
})

//Метод для прокрутки окна на величину в JavaScript
let method_vel = document.getElementById('method_vel');
method_vel.addEventListener('click',()=>{
    // window.scrollBy({
    //     top:100,
    //     left:0,
    //     behavior:'auto'
    // })
    // window.scrollBy({
    //     top:-100,
    //     left:20,
    //     behavior:'auto'
    // })
    //  window.scrollBy({
    //     top:300,
    //     left:0,
    //     behavior:'smooth'
    // })
    window.scrollBy({
        top:-300,
        left:0,
        behavior:'smooth'
    })
})

//Метод для прокрутки окна к элементу в JavaScript
let method_to = document.getElementById('method_to')
let h4 = document.querySelector('h4');
method_to.addEventListener('click',()=>{
    h4.scrollIntoView({
	behavior: 'smooth',
	block: 'start',
	inline: 'end',
    });
})


//Cобытие прокрутки
window.addEventListener('scroll', function() {
	if(this.pageYOffset >= 2860 ) {
        console.log('Done')
    }
});


//Map
let map = new Map;
let arr1 = [1,2];
let arr2 = [3,4];
map.set(arr1, 'data1')