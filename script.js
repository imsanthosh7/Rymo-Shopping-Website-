

var mainimg = document.getElementById('main-img')
var smallimg = document.getElementsByClassName('small-img')

smallimg[0].onclick = function () {
    mainimg.src = smallimg[0].src;

}
smallimg[1].onclick = function () {
    mainimg.src = smallimg[1].src;

}
smallimg[2].onclick = function () {
    mainimg.src = smallimg[2].src;

}
smallimg[3].onclick = function () {
    mainimg.src = smallimg[3].src;

}

//  singleproduct click event 
function abc() {
    window.location.href = 'singleproduct.html'
}




