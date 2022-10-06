const textArea = document.querySelector('textarea');
const btnEnviar = document.getElementById('btnEnviar');
const btnTzeet = document.getElementById('btnTzeet');
const numeroElemetos = document.getElementById('contador');
const maxCarac = 140;


textArea.addEventListener('keyup', () => {
    let numCharDigitados = textArea.value.length;
    
    if(numCharDigitados == 0){
        btnEnviar.disabled = true;
        numeroElemetos.innerHTML = "";
        
    }

    if(numCharDigitados > 0){
        numeroElemetos.innerHTML = maxCarac - textArea.value.length;
        numeroElemetos.className = "";
        btnEnviar.disabled = false;
    }

    if(maxCarac - numCharDigitados < 40){
        numeroElemetos.className = "amarelo";
        if(maxCarac - numCharDigitados < 0){
            numeroElemetos.className = "red";
            btnEnviar.disabled = true;
        }
    }

});

