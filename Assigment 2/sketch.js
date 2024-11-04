function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#000000"); //voglio sfondo nero e glifi bianchi

  let outerPadding = 30;
  angleMode(DEGREES); //unità di misura in gradi 
  strokeWeight(1); //spessore della linea
  stroke("white"); // glifi bianchi
  noFill(); //forme non riempite

  //calcolo l'area di ogni glifo
  let totalWidth = width - outerPadding * 2; 
  let totalHeight = height - outerPadding * 2;

  let side = 20; //dimensione base glifo
  let padding = 40; //spazio tra i glifi
  let glyphSize = side + padding; //dimensione totale che occupa il glifo

  let totalRows = totalHeight / glyphSize;
  let totalCols = totalWidth / glyphSize;


  for (let row = 0; row < totalRows; row++) { //ciclo per generare ogni riga
    for (let col = 0; col < totalCols; col++) { //ciclo per generare ogni colonna
      let y = outerPadding + row * glyphSize; //posizione verticale glio
      let x = outerPadding + col * glyphSize; //pos. verticale colonna

      push();
      translate(x, y);
      rotate(random(-15, 15));
      drawGeometricGlyph(side);
      pop();   // Ripristina lo stato di trasformazione salvato in precedenza
    }
  }
}

function draw() {
  
}

function drawGeometricGlyph(size) {
  let shapeCount = int(random(2, 5)); // Seleziona casualmente un numero di forme tra 2 e 4 da disegnare nel glifo

  for (let i = 0; i < shapeCount; i++) { // Ciclo per disegnare ogni forma del glifo
    let shapeType = int(random(0, 3)); // Seleziona casualmente un tipo di forma tra 0 (quadrato), 1 (rettangolo) e 2 (triangolo)

    // Calcola una posizione casuale per la forma all'interno del glifo
    let x = random(-size / 2, size / 2);
    let y = random(-size / 2, size / 2);

    //dimensione casuale per la forma tra il 30% e il 100% della dimensione del glifo
    let shapeSize = random(size * 0.3, size);

    push();
    translate(x, y);
    rotate(random(0, 360));  // Ruota la forma di un angolo casuale tra 0 e 360 gradi

    //ora disegna il tipo di forma selezionato

    if (shapeType === 0) {
      // quadrato
      rectMode(CENTER);
      rect(0, 0, shapeSize, shapeSize);
    } else if (shapeType === 1) {
      // rettangolo
      rectMode(CENTER);
      rect(0, 0, shapeSize, shapeSize / 2);
    } else if (shapeType === 2) {
      // triangolo equilatero
      triangle(
        -shapeSize / 2, shapeSize / 2, //punto in basso a sinistra
        shapeSize / 2, shapeSize / 2, //punto in basso a destra
        0, -shapeSize / 2 //punto in alto
      );
    }
    pop();
  }
}
