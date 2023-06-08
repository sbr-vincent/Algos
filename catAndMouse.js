function catAndMouse(x, y, z) {
    let distanceFromCatA = Math.abs(x-z);
    let distanceFromCatB =Math.abs(y-z);
    
    if(distanceFromCatA === distanceFromCatB){
        return "Mouse C"
    }else if( distanceFromCatB < distanceFromCatA){
        return "Cat B"
    }else{
        return "Cat A"
    }

}