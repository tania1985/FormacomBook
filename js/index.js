var corazones=document.getElementsByClassName("fa-heart");
for (let index = 0; index < corazones.length; index++) {
    const element = corazones[index];
    element.onclick=function(c){
        var cont=c.target.nextElementSibling;
        cont.innerHTML++;
    }
}
