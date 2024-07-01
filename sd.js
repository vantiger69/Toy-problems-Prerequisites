function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmDemeritPoint = 5;
    const pointTheshold = 12;

    //calculate how much over the speed limit
    let overspeed = speed - speedLimit;

    //if speed is less than or equal to the speed limit, print "OK"
    if (speed <= speedLimit) {
        console.log("OK");
        return;
    }

    //calculate demerit points
    let kmDemeritPoint = Math.floor(overspeed / kmPerDemeritPoint);

    //output the demerit points
    console.log(`points : ${demeritPoints}`);

    //check if license should be suspended
    if (demeritPoint > pointTheshold) {
        console.log("license suspended");
    }
}
//example usage:
calculateDemeritPoints(80); //output:points:2
calculateDemeritPoints(70); //output:OK
calculateDemeritPoints(90);//output:points:4
calculateDemeritPoints(150);//output:license suspended
