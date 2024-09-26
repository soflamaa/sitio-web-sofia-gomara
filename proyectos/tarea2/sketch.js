function setup() {
  createCanvas(800, 400);
  background(0);
}

function draw() {
  background(0);  // Limpiar la pantalla en cada fotograma

  let numberOfWaves = 5;  // Número de ondas
  let baseAmplitude = 20; // Amplitud base
  let baseWavelength = 50; // Longitud de onda base
  let speed = 0.05;       // Velocidad del movimiento

  for (let i = 0; i < numberOfWaves; i++) {
    let amplitude = baseAmplitude + i * 20;  // Aumentar la amplitud con cada onda
    let wavelength = baseWavelength + i * 30; // Aumentar la longitud de onda con cada onda
    stroke(map(i, 0, numberOfWaves, 0, 255), 100, 150);  // Cambiar el color para cada onda

    for (let x = 0; x < width; x++) {
      let y = height / 2 + amplitude * sin(TWO_PI * (x / wavelength + frameCount * speed));
      point(x, y);
    }
  }
}