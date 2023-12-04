function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);

if(tipo.value == 'pista') {
    comprarPista(qtd);
} else if(tipo.value == 'superior'){
    comprarSuperior(qtd);
} else{
    comprarInferior(qtd);
}
    }

    function comprarPista(qtd) {
        let qtdPsita = parseInt(document.getElementById('qtd-pista').textContent);
        if(qtd>qtdPsita){
            alert('Quantidade indisponivel para  tipo pista');
        } else{
            qtdPsita = qtdPsita - qtd;
            document.getElementById('qtd-pista') .textContent = qtdPsita;
            alert('Compra realizada com sucesso!');
        }
    }

    function comprarSuperior(qtd) {
        let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
        if(qtd>qtdSuperior){
            alert('Quantidade indisponivel para  tipo suoerior');
        } else{
            qtdSuperior = qtdSuperior - qtd;
            document.getElementById('qtd-superior') .textContent = qtdSuperior;
            alert('Compra realizada com sucesso!');
        }
    }

    function comprarInferior(qtd) {
        let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
        if(qtd>qtdInferior){
            alert('Quantidade indisponivel para  tipo inferior');
        } else{
            qtdInferior = qtdInferior - qtd;
            document.getElementById('qtd-inferior') .textContent = qtdSuperior;
            alert('Compra realizada com sucesso!');
        }
    }