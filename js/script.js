const dinossauro = document.querySelector('.dinossauro');
const background = document.querySelector('.background');
let estaPulando = false;
let posicao = 0;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!estaPulando) {
            pular();
        }
    }
}

function pular() {
    estaPulando = true;

    let intervaloUp = setInterval(() => {
        if (posicao >= 150) {
            clearInterval(intervaloUp);

            let intervaloDown = setInterval(() => {
                if (posicao <= 0) {
                    clearInterval(intervaloDown);
                    estaPulando = false;
                } else {
                    posicao -= 20;
                    dinossauro.style.bottom = posicao + 'px';
                }
            }, 20);
        } else {
            posicao += 20;
            dinossauro.style.bottom = posicao + 'px';
        }
    }, 25);
}

function criaCactus() {
    const cactus = document.createElement('div');
    let cactusPosisao = 1000;
    let random = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let intervaloEsquerda = setInterval(() => {
        if (cactusPosisao < -60) {
            clearInterval(intervaloEsquerda);
            background.removeChild(cactus);
        } else if (cactusPosisao > 0 && cactusPosisao < 60 && posicao < 60) {
            clearInterval(intervaloEsquerda);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>'
        } else {
            cactusPosisao -= 10;
            cactus.style.left = cactusPosisao + 'px';
        }
    }, 20);

    setTimeout(criaCactus, random);
}

criaCactus();
document.addEventListener('keyup', handleKeyUp);