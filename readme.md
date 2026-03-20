# Installation

```
npm install delaunay
```

# Usage

The `bowyerWatson` function takes two parameters:
- superTriangle is a triangle that encloses all the points in the list, an instance of Triangle
- pointList is a list of points, instances of Vector

```
let triangles = bowyerWatson(superTriangle, pointList);
```

A more complete example:

```JavaScript
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
```

# Referenses
https://en.wikipedia.org/wiki/Delaunay_triangulation

https://en.wikipedia.org/wiki/Bowyer%E2%80%93Watson_algorithm  

https://en.wikipedia.org/wiki/Circumscribed_circle