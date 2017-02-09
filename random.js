var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.

// makeEllipse(cx, cy, rx, ry, fill, opacity)
// makeRect(x, y, width, height, fill, opacity)
// makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity)
// makePolyline(points, stroke, strokeWidth, opacity)
// makePolygon(points, fill, opacity)
// makeText(message, x, y, fontSize, fontFamily, fill, opacity)
// makeImage(url, x, y, width, height, opacity)
// makeCircle(cx, cy, r, fill, opacity)

// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
  makeRect(0, 0, 200, 100, "red", 1)
  makeCircle(100, 50, 51, "black", 1)
  makeCircle(100, 50, 50, "green", 1)
  makeLine(80, 25, 80, 50, "black", 2, 1)
  makeLine(100, 25, 100, 50, "black", 2, 1)
  makeLine(70, 20, 85, 15, "black", 2, 1)
  makeLine(90, 20, 105, 20, "black", 2, 1)
  makeLine(80, 60, 105, 60, "black", 2, 1)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
  makeRect(0, 0, 200, 100, "yellow", 1)
  makeCircle(100, 50, 51, "black", 1)
  makeCircle(100, 50, 50, "blue", 1)
  makeLine(80, 25, 80, 50, "black", 2, 1)
  makeLine(100, 25, 100, 50, "black", 2, 1)
  makeLine(90, 15, 105, 20, "black", 2, 1)
  makeLine(70, 20, 85, 15, "black", 2, 1)
  makePolyline("80,60 90,50 100,60", "black", 1, 1)
  makeEllipse(100, 50, 3, 5, "aquamarine", 1)
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
  makeRect(0, 0, 200, 100, "aquamarine", 1)
  makeCircle(100, 50, 51, "black", 1)
  makeCircle(100, 50, 50, "yellow", 1)
  makeLine(80, 25, 80, 50, "black", 2, 1)
  makeLine(100, 25, 100, 50, "black", 2, 1)
  makeLine(70, 15, 85, 20, "black", 2, 1)
  makeLine(90, 20, 105, 15, "black", 2, 1)
  makeEllipse(95, 60, 25, 7, "black", 1)
  makeEllipse(95, 60, 22, 5, "coral", 1)
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
  var number = Math.random()
    if (number < 0.33){
      createFirstScene()
    } else if (number > 0.67){
      createSecondScene()
    } else {
      createThirdScene()
    }
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}
