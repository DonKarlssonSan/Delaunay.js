import bowyerWatson from './bowyer-watson.js';
import Triangle from './triangle.js';
import Vector from 'vectory-lib';

function getRandomPoints() {
  let points = [];
  let nrOfPoints = 10;
  for(let i = 0; i < nrOfPoints; i++) {
    points.push(new Vector(
      Math.random() * 100,
      Math.random() * 100
    ));
  }
  return points;
}

let pointList = getRandomPoints();

let superTriangle = new Triangle(
    new Vector(-1000, 1000),
    new Vector(1000, 1000),
    new Vector(0, -1000)
);

let triangles = bowyerWatson(superTriangle, pointList);

triangles.forEach(triangle => {
  console.log(triangle.vertexes());
});