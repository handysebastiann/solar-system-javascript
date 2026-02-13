var canvas = document.getElementById("Gl_Canvas");

var ctx = canvas.getContext("2d");

var earth = new Image();
var moon = new Image();
var sun = new Image();

//direktori gambar
earth.src = "./images/animations_earth.png";
moon.src = "./images/animations_moon.png";
sun.src = "./images/animations_sun.png";

function draw() {
  ctx.fillstyle = "#000";

  //persegi panjang sebesar canvas
  //background dari radRect
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.height);

  //menyimpan state awal canvas
  ctx.save();

  //titik canvas ke tengah
  ctx.translate(canvas.width / 2, canvas.height / 2);

  //matahari
  ctx.drawImage(sun, -sun.width / 2, -sun.height / 2);

  //GARIS ORBIT BUMI
  ctx.strokeStyle = "white";
  ctx.beginPath();
  ctx.arc(0, 0, 150, 0, Math.PI * 2, false);
  ctx.stroke();

  //BUMI berputar
  var time = new Date();
  ctx.rotate(
    ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds()
  );
  ctx.translate(150, 0);
  ctx.drawImage(earth, -13, -13, 26, 26);

  //BULAN berputar
  ctx.save();
  ctx.rotate(((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
  ctx.translate(0, 25);
  ctx.drawImage(moon, -5, -5, 10, 10);
  ctx.restore();

  //BAYANGAN BUMI
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, -13, 50, 26);

  //mengembalikan canvas ke state awal
  ctx.restore();

  //menggambar terus menerus dengan memanggil fungsi draw
  window.requestAnimationFrame(draw);
}

draw();
