let buton=document.getElementsByClassName("akordiyon")
console.log(buton);
for(let i=0;i<buton.length;i++)
{
    buton[i].onclick=function(){
        let panel=this.nextElementSibling;
        console.log(panel);
        if(panel.getElementsByClassName.maxheight){
            panel.getElementsByClassName.maxheight=null;
        }
        else{
            panel.getElementsByClassName.maxheight=panel . scrollHeight + "px";
        }
    }
}