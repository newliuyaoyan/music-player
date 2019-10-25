var get=function(method,url,date,callback){
    var xhr=new XMLHttpRequest();
    if(method.toLocaleUpperCase()=="GET"){
     var str="?";
     for(var key in date){
         str+=key+"="+date[key]+"&";
     }

     url+=str.slice(0,str.length-1);
    }
    xhr.open(method,url,true);
     xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.status==200&&xhr.readyState==4){
            callback(xhr.response);
        }
}
}