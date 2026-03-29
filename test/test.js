import bowyerWatson from '../src/bowyer-watson.js';
import Triangle from '../src/triangle.js';
import Vector from 'vectory-lib';

function getRandomPoints(n) {
  let points = [];
  let nrOfPoints = n;
  for(let i = 0; i < nrOfPoints; i++) {
    points.push(new Vector(
      Math.random() * 100,
      Math.random() * 100
    ));
  }
  return points;
}


let args = process.argv.slice(2);
if(args.length !== 1) {
  console.error("Usage: npm test <number of points>");
  process.exit(1);
}

let nPoints = Number.parseInt(args[0], 10);
if(Number.isNaN(nPoints) || nPoints <= 0) {
  console.error("Please provide a valid number of points.");
  process.exit(1);
}

let pointList = getRandomPoints(nPoints);

let superTriangle = new Triangle(
    new Vector(-1000, 1000),
    new Vector(1000, 1000),
    new Vector(0, -1000)
);

const t0 = performance.now();
let triangles = bowyerWatson(superTriangle, pointList);
const t1 = performance.now();
console.log(`It took ${t1 - t0} milliseconds.`);

// triangles.forEach(triangle => {
//   console.log(triangle.vertexes());
// });