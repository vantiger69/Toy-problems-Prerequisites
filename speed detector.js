function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmDemeritPoint = 5;
  const pointThreshold = 12;

  // Calculate how much over the speed limit
  let overspeed = speed - speedLimit;

  // If speed is less than or equal to the speed limit, print "OK"
  if (speed <= speedLimit) {
    console.log("OK");
    return; // Exit the function early
  }

  // Calculate demerit points
  let demeritPoints = Math.floor(overspeed / kmDemeritPoint);

  // Output the demerit points
  console.log(`Points: ${demeritPoints}`);

  // Check if license should be suspended
  if (demeritPoints > pointThreshold) {
    console.log("License suspended");
  }
}

// Example usage:
calculateDemeritPoints(80); // Output: Points: 2
calculateDemeritPoints(70); // Output: OK
calculateDemeritPoints(90); // Output: Points: 4
calculateDemeritPoints(150); // Output: License suspended
