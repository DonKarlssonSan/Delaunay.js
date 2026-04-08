![alt text](doc/image.png)

# About
This is a JavaScript library for performing Delaunay triangulation for a set of points. It is implemented using the Bowyer-Watson algorithm.

## Live demos

- Colorful Triangle Pattern Generator, draws a pattern using canvas in the browser: [live demo](https://donkarlssonsan.github.io/colorful-triangle-pattern/), [(source code)](https://github.com/DonKarlssonSan/colorful-triangle-pattern)
- Striped Triangles Pattern Generator, draws striped triangles using SVG in the browser: [live demo](https://donkarlssonsan.github.io/striped-triangles-pattern/), [(source code)](https://github.com/DonKarlssonSan/striped-triangles-pattern)

# Installation

```
npm install delaunay.js
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
import { bowyerWatson, Triangle } from 'delaunay.js';
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
// Do something exciting with the triangles!
```
- [`vectory-lib`](https://github.com/DonKarlssonSan/vectory) is another library written by me, it contains basic vector math, exposed via the `Vector` JavaScript class.
- `Triangle` is included in the delaunay.js library, it contains math operations on triangles like `circumcenter`, `centroid` and `pointIsInsideCircumcircle` which are needed by the Bowyer-Watson algorithm.


# Referenses
https://en.wikipedia.org/wiki/Delaunay_triangulation

https://en.wikipedia.org/wiki/Bowyer%E2%80%93Watson_algorithm

https://en.wikipedia.org/wiki/Circumscribed_circle