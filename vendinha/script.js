function Adicionar() {

    let frutaSelecionada = document.getElementById("fruta").value
    //alert(frutaSelecionada) 
    switch (frutaSelecionada) {
        case "Banana":alert(frutaSelecionada) 
            break;
        case "Maça":alert(frutaSelecionada) 
            break;
        case "Abacaxi":alert(frutaSelecionada) 
            break;
        case "Abacate":alert(frutaSelecionada) 
            break;
        default:
            alert("Selecionou nada")
            break;

    }
}