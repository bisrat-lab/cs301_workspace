let hfc = function(n1,n2){
    let hcf =0 ;
    for(let i=1; i<=n1 && i<=n2; i++){
        if(n1%i==0 && n2%i ==0){
            hfc = i;
        }
    }
    return hfc
    
}
console.log(hfc(6,8));
