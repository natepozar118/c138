img = ""; 
status = "";

function preload()  {
 img = loadImage('dog_cat.jpeg');
}

function setup()  {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetecter = ml5.objectDetecter('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetecter.detect(img, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
}

function draw()  {
  image(img, 0, 0, 640, 420);
  fill("FF0000");
  text("Dog", 45, 75)
  nofill();
  stroke("FF0000");
  rect(30, 60, 450, 350 );

  fill("FF0000");
  text("Cat", 320, 120);
  nofill();
  stroke("#FF0000")
  rect(300, 90, 270, 320 );
}