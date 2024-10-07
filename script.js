function calcularTotal(){
    var precoPrato = parseFloat(document.getElementById('prato').value);
    var quantidade = parseInt(document.getElementById('quantidade').value);

    if(precoPrato == 0){
        document.getElementById('resultado').textContent = "Por favor, selecione seu prato";
    }
    else {
        var total = precoPrato * quantidade;
        document.getElementById('resultado').textContent = "Total a Pagar:" + total.toFixed(2) //toFixed é para delimitar o número máximo de casas decimais
    }
}