let input;
let pix;
let img;
let obr;
let x1, x2, y1, y2;
let w, h, m;
let a = 0;
let sr = 40;

function setup() {
  pixelDensity(displayDensity());
  let c = createCanvas(window.innerWidth, window.innerHeight);
  textAlign(CENTER);
  textSize(16);
  text('PRITOMNOST IMAGE TOOL 1.7 BETA', width / 2, height / 2-48);
  c.drop(gotFile);
}

function gotFile(file) {
//uloží obrázok kam?
  img = createImg(file.data, created).hide();
//vycisti obrazovku canvas?
  clear();
}

function created() {
  graphics = createGraphics(img.width, img.height);
  graphics.pixelDensity(displayDensity());
  graphics.image(img, 0, 0, graphics.width, graphics.height);
  pix = graphics.get(0, 0, graphics.width, graphics.height);
//preuložim obraz do draw?
  obr = pix;
  updatePixels();
  obr.loadPixels(draw);
}

function draw() {
  if (obr){
//  image(obr, 0, 0);
  obr.resize(0, window.innerHeight);
//  obr.scale(0.5, 1.3);
  a = a + sr;
  if (a > windowWidth) {
    a = 0;
  noLoop();
  }
  m = m + 10;
  if (m > height / 4) {
    m = 0;
  }
  m = int(m);
  copy(obr, x1, y1, w, h, a, y2, w, h);
  x1 = m+mouseY;
  y1 = 0;
  y2 = 0;
  w = sr;
  h = height;
  }

}

function keyTyped() {
  if (key === 's') {
    noLoop();
    save('pritomnost-canvas.png');
  }
}
function mousePressed() {
noLoop();  // Holding down the mouse activates looping
}
function mouseReleased() {
loop();  // Releasing the mouse stops looping draw()
}
