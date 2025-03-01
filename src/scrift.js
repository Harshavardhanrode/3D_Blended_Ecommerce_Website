

const scrollcontainer = document.querySelectorAll('.products');
for(const ele of scrollcontainer){
    ele.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        ele.scrollLeft += evt.deltaY;
    })
}