export function delay(n = 1.5){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}