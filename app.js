function change()
{
    var img=document.getElementById("bulb");
    if(img.src.match("img3"))
    {
        img.src="./image/img2.jpg";
    }
    else{
        img.src="./image/img3.jpg";
    }
}