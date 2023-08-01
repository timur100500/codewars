const flip=(d, a)=>{
    //TODO
    return d == 'R' ? a.sort((x,y) => x - y) : a.sort((x,y) => y - x)
}