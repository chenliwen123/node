function submit(url,data){
    let xmlhttp,index;
    if (window.XMLHttpRequest) {
        xmlhttp= new XMLHttpRequest;
    }else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function () {
        if (xmlhttp.readyState==4&&xmlhttp.status==200){
            index=JSON.parse(xmlhttp.responseText);
            console.log(index);
            return index;
        }
    }
    xmlhttp.open('post',url,true);
    xmlhttp.setRequestHeader("Content-Type","Application/x-www-form-urlencoded");
    xmlhttp.send(data)

}