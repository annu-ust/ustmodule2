function prime(limit) {
    document.write(limit);
    var i;
    var j;
    var flag=0;
    for(i=1;i<limit;i++){
        for(j=2;j<limit;j++){
         if(i%j===0){
            break; 
         }
         else{
            document.write(i);
         }
        }
         
        }
    }
 function callfn(){
    let limit=prompt("enter value");
    //var limit=document.getElementById("number").value;
    //document.write(limit);
    var run=prime(limit);
    document.write(run);
 }