var b=0;
var c=0;
var e=0;
var f=1;
function btclear()
{
    window.location.reload();
}
function btnumber(num)
{
    var a=document.getElementById('up')
    var aa=parseFloat(a.innerHTML);
    num = parseFloat(num);
    if (e!=0){
        f=f*10;
        aa=aa+num/f;
    }else if (aa!=0){
        aa=aa*10+num;
    }else{
        aa=num;
    }
    a.innerHTML=aa;
}
function btres(d)
{
    var a=document.getElementById('up')
    if (b==0){
        b=parseFloat(a.innerHTML);
        a.innerHTML=0;
        c=d;
        e=0;
        f=1;
    }else{
        res();
    }
}
function pm()
{
    var a=document.getElementById('up')
    var aa=parseFloat(a.innerHTML);
    var d=-aa;
    a.innerHTML=d;
}
function res()
{
    e=0;
    f=1;
    var a=document.getElementById('up')
    var aa=parseFloat(a.innerHTML);
    var bb=parseFloat(b);
    if (c==1){
        a.innerHTML=aa+bb;
    }
    if(c==2){
        a.innerHTML=bb-aa;
    }
    if (c==3){
        a.innerHTML=bb*aa;
    }
    if (c==4){
        a.innerHTML=bb/aa;
    }
    c=0;
}
function del()
{
    var a=document.getElementById('up')
    var aa=parseFloat(a.innerHTML);
    aa=aa/10;
    var d = parseInt(aa);
    a.innerHTML=d;
    if (f>1){
        f=f/10;
    }
}
document.addEventListener('keyup', function(event){
    for (var i=0;i<10;i++){
        var ii = String(i);
        if(event.key==ii){
           btnumber(i);
        }
    }
    if (event.key=="Enter")
    {
        res();
    }
    if (event.key=="Backspace")
    {
        del()
    }
});
function btfl()
{
    e=1;
}