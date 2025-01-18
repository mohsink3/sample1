function printpattern(patternchar,numlines){
    let pattern  =' ';
    for(let i = 0; i<numlines;i++){
        pattern  =pattern +'*';
        console.log(pattern);
    }
}
printpattern('*',5);
