function firstImg(x) {
    if(x==0){
    document.getElementById('image1').src="Surprise.jpg";
} else if(x==1){
    document.getElementById('image1').src="skank.jpg";
}
}
function secondImg(x) {
    if(x==0){
    document.getElementById('image2').src="image 1 edito.jpg";
} else if(x==1){
    document.getElementById('image2').src="clown.jpg";
}
}

  /* THis is the code for my rollover images. It works by using an IF function and working out parameters.
   In layman's terms, if the mouse is over the image it should return the second image */