var myIndex = 0;
animation()
function animation (){
    var x = document.getElementsByClassName('mySlide');console.log(x)
    for(var i =0;i< x.length;i++){
        x[i].style.display = 'none';
    }
    myIndex++;
    if(myIndex > x.length){
       myIndex = 1;
    }
    x[myIndex - 1].style.display = 'block';
    setTimeout(animation,3000)
}

var slideIndex = 1;
showDivs(slideIndex);
function plusDiv(n){
    showDivs(slideIndex += n);
}
function currentDiv(n){
    showDivs(slideIndex = n);
}
function showDivs(n){
    var i;
    var x = document.getElementsByClassName('mySlide_2');
    var dots = document.getElementsByClassName('badge-img');
    if(n > x.length){
        slideIndex =1;
    }
    if(n < 1){
        slideIndex = x.length;
    }
    for(i = 0 ; i < x.length;i++){
        dots[i].className.replace('badge-white','');
    }
    x[slideIndex -1 ].style.display = 'block';
    dots[slideIndex -1].className += 'badge-white';
};
// Slide 
