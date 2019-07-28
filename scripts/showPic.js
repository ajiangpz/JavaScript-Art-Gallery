function showPic(imgItem){
    if(!document.getElementById('placeholder')) return true;
    var placeholder=document.getElementById('placeholder');
    console.log(placeholder.nodeName)
    if(placeholder.nodeName!=='IMG') return true;
    var href=imgItem.getAttribute('href');
    if(!document.getElementById('description')) return false;
    var description=document.getElementById('description');
    var text=imgItem.getAttribute('title')||"";
    if(description.firstChild.nodeType==3){
        description.firstChild.nodeValue=text;
    }
    placeholder.setAttribute('src',href);
    //成功执行
    return false
}   
function prepareAnimals(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById('animalsList')) return false;
    var animalsList=document.getElementById('animalsList');
    var links=animalsList.getElementsByTagName('a');
    console.log(links)
    for(var i=0;i<links.length;i++){
        links[i].onclick=function(){
            return showPic(this);
            // return false;
        }
    }
}
function addEventLoader(func){
    var oldFunc=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func
    }else{
        window.onload=function(){
            oldFunc();
            func();
        }
    }
}
window.onload=prepareAnimals();