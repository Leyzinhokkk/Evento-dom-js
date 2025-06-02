<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Conversor de Unidades</title>
</head>
<body>

<h2>Conversor de Comprimento</h2>

<label for="metros">Metros:</label>
<input type="number" id="metros" placeholder="Digite o valor em metros">

<label for="unidade">Converter para:</label>
<select id="unidade">
    <option value="jarda">Jarda</option>
    <option value="pé">Pé</option>
    <option value="polegada">Polegada</option>
    <option value="milha">Milha</option>
</select>

<button onclick="converter()">Converter</button>

<h3>Resultado:</h3>
<p id="resultado"></p>

<script>
function converter() {
    const metros = parseFloat(document.getElementById('metros').value);
    const unidade = document.getElementById('unidade').value;
    let resultado;

    if (isNaN(metros)) {
        resultado = "Por favor, insira um valor numérico válido.";
    } else {
        switch(unidade) {
            case 'jarda':
                resultado = metros * 1.094 + " jardas";
                break;
            case 'pé':
                resultado = metros * 3.281 + " pés";
                break;
            case 'polegada':
                resultado = metros * 39.37 + " polegadas";
                break;
            case 'milha':
                resultado = metros * 0.000621 + " milhas";
                break;
            default:
                resultado = "Selecione uma unidade válida.";
        }
    }

    document.getElementById('resultado').textContent = resultado;
}
</script>

</body>
</html>
