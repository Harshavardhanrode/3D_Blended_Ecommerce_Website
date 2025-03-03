

const scrollcontainer = document.querySelectorAll('.products');
for(const ele of scrollcontainer){
    ele.addEventListener('wheel',(evt)=>{
        evt.preventDefault();
        ele.scrollLeft += evt.deltaY;
    })
}


// connection between three.js and website
function redirect(img_no){

    sessionStorage.setItem('img_no', img_no);
    window.location.href = 'threejs/index2.html'; // Redirect to index.html

  }