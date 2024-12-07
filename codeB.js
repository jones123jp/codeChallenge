function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPoint = 5;

    if(speed <= speedLimit){
        console.log('ok');
    }else{
        const points =  Math.floor((speed - speedLimit) / demeritPoint)
        console.log('points: ${points}) 
        if(points >12){
            console.log('Lincense suspended')
        }
    }
}



speedDetector(100)