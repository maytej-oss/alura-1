// Variáveis globais
let monalisaX, monalisaY;
let canvasW = 600;
let canvasH = 750;

// Cores da Monalisa original (paleta de cores do quadro)
const cores = {
    pele: '#D4A574',
    peléDark: '#B8860B',
    peleLight: '#E8D7B9',
    cabelo: '#3D2817',
    olhos: '#5C4033',
    brancosOlhos: '#F5F5DC',
    iris: '#704214',
    pupila: '#1A1410',
    boca: '#A0826D',
    fundo: '#7CB342',
    fundoEscuro: '#558B2F',
    tecido: '#8B7355'
};

// Variáveis dos olhos
let olhoEsquerda = { x: 0, y: 0, raio: 12 };
let olhoDireita = { x: 0, y: 0, raio: 12 };

function setup() {
    const container = document.getElementById('sketch-container');
    const sketch = createCanvas(canvasW, canvasH);
    sketch.parent('sketch-container');
    
    // Posicionamento inicial
    monalisaX = width / 2;
    monalisaY = height / 2;
    
    // Posição dos olhos
    olhoEsquerda.x = monalisaX - 60;
    olhoEsquerda.y = monalisaY - 80;
    olhoDireita.x = monalisaX + 60;
    olhoDireita.y = monalisaY - 80;
}

function draw() {
    background(220);
    
    // Desenhar fundo/cabelo
    desenharCabelo();
    
    // Desenhar rosto
    desenharRosto();
    
    // Desenhar traços faciais
    desenharTraços();
    
    // Desenhar olhos com acompanhamento do mouse
    desenharOlhos();
    
    // Desenhar boca
    desenharBoca();
    
    // Desenhar tecido/roupas
    desenharTecido();
    
    // Desenhar mãos (opcional)
    desenharMãos();
}

function desenharCabelo() {
    fill(cores.cabelo);
    noStroke();
    
    // Cabelo - parte superior e laterais
    ellipse(monalisaX, monalisaY - 100, 200, 220);
    
    // Detalhes do cabelo
    fill(cores.fundoEscuro);
    arc(monalisaX - 120, monalisaY - 60, 80, 100, PI, TWO_PI);
    arc(monalisaX + 120, monalisaY - 60, 80, 100, PI, TWO_PI);
}

function desenharRosto() {
    fill(cores.pele);
    noStroke();
    ellipse(monalisaX, monalisaY, 160, 200);
    
    // Sombreado para dimensão
    fill(cores.peléDark);
    ellipse(monalisaX - 60, monalisaY + 20, 50, 80);
    ellipse(monalisaX + 60, monalisaY + 20, 50, 80);
}

function desenharTraços() {
    stroke(cores.peléDark);
    strokeWeight(1);
    
    // Sobrancelhas
    noFill();
    strokeWeight(3);
    stroke(cores.cabelo);
    
    // Sobrancelha esquerda
    arc(monalisaX - 55, monalisaY - 60, 40, 15, PI, TWO_PI);
    
    // Sobrancelha direita
    arc(monalisaX + 55, monalisaY - 60, 40, 15, PI, TWO_PI);
    
    // Nariz
    noStroke();
    fill(cores.peléDark);
    triangle(monalisaX, monalisaY - 30, monalisaX - 15, monalisaY + 20, monalisaX + 15, monalisaY + 20);
}

function desenharOlhos() {
    // Calcular direção para o mouse
    let anguloEsquerda = atan2(mouseY - olhoEsquerda.y, mouseX - olhoEsquerda.x);
    let anguloDireita = atan2(mouseY - olhoDireita.y, mouseX - olhoDireita.x);
    
    // Desenhar olho esquerdo
    fill(cores.brancosOlhos);
    noStroke();
    ellipse(olhoEsquerda.x, olhoEsquerda.y, olhoEsquerda.raio * 2.2, olhoEsquerda.raio * 2.5);
    
    // Íris
    fill(cores.iris);
    let irisPosXEsq = olhoEsquerda.x + cos(anguloEsquerda) * 8;
    let irisPosYEsq = olhoEsquerda.y + sin(anguloEsquerda) * 8;
    ellipse(irisPosXEsq, irisPosYEsq, olhoEsquerda.raio * 1.5, olhoEsquerda.raio * 1.8);
    
    // Pupila
    fill(cores.pupila);
    let pupilaXEsq = olhoEsquerda.x + cos(anguloEsquerda) * 9;
    let pupilaYEsq = olhoEsquerda.y + sin(anguloEsquerda) * 9;
    ellipse(pupilaXEsq, pupilaYEsq, olhoEsquerda.raio * 0.8, olhoEsquerda.raio);
    
    // Brilho
    fill(255, 255, 255, 200);
    ellipse(pupilaXEsq - 3, pupilaYEsq - 3, 4, 4);
    
    // Desenhar olho direito
    fill(cores.brancosOlhos);
    ellipse(olhoDireita.x, olhoDireita.y, olhoDireita.raio * 2.2, olhoDireita.raio * 2.5);
    
    // Íris
    fill(cores.iris);
    let irisPosXDir = olhoDireita.x + cos(anguloDireita) * 8;
    let irisPosYDir = olhoDireita.y + sin(anguloDireita) * 8;
    ellipse(irisPosXDir, irisPosYDir, olhoDireita.raio * 1.5, olhoDireita.raio * 1.8);
    
    // Pupila
    fill(cores.pupila);
    let pupilaXDir = olhoDireita.x + cos(anguloDireita) * 9;
    let pupilaYDir = olhoDireita.y + sin(anguloDireita) * 9;
    ellipse(pupilaXDir, pupilaYDir, olhoDireita.raio * 0.8, olhoDireita.raio);
    
    // Brilho
    fill(255, 255, 255, 200);
    ellipse(pupilaXDir - 3, pupilaYDir - 3, 4, 4);
}

function desenharBoca() {
    // Boca - sorriso famoso
    noFill();
    stroke(cores.boca);
    strokeWeight(2);
    
    // Lábio superior
    arc(monalisaX, monalisaY + 50, 80, 40, PI, TWO_PI);
    
    // Detalhe dos lábios
    stroke(cores.peléDark);
    strokeWeight(1);
    line(monalisaX - 40, monalisaY + 50, monalisaX + 40, monalisaY + 50);
}

function desenharTecido() {
    // Ombros e tecido
    fill(cores.tecido);
    noStroke();
    
    // Ombro esquerdo
    ellipse(monalisaX - 120, monalisaY + 150, 100, 80);
    
    // Ombro direito
    ellipse(monalisaX + 120, monalisaY + 150, 100, 80);
    
    // Detalhes do tecido
    stroke(cores.fundoEscuro);
    strokeWeight(1);
    line(monalisaX - 100, monalisaY + 140, monalisaX - 120, monalisaY + 180);
    line(monalisaX + 100, monalisaY + 140, monalisaX + 120, monalisaY + 180);
}

function desenharMãos() {
    fill(cores.pele);
    noStroke();
    
    // Mão esquerda
    ellipse(monalisaX - 140, monalisaY + 200, 50, 40);
    
    // Mão direita
    ellipse(monalisaX + 140, monalisaY + 200, 50, 40);
    
    // Detalhes das mãos
    fill(cores.peléDark);
    arc(monalisaX - 140, monalisaY + 220, 30, 20, 0, PI);
    arc(monalisaX + 140, monalisaY + 220, 30, 20, 0, PI);
}

// Atualizar posição dos olhos ao redimensionar
function windowResized() {
    if (width < 800) {
        resizeCanvas(windowWidth - 40, windowWidth * 1.25 - 40);
    }
}
