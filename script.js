var element = document.getElementById("genera");

element.addEventListener('click',
    function () {
        var nomeInput = document.getElementById('nome').value;
        console.log(nomeInput);
        var distanza = Number(document.getElementById('km').value);
        console.log(distanza);
        var eta = document.getElementById('eta').value;
        console.log(eta);

        var costoBiglietto = 0.21 * distanza;
        console.log(costo);


        if (eta == 'minorenne') {
            costoBiglietto = costoBiglietto * 0.8;
            message = 'Sconto minorenne'



        }
        else if (eta == 'over') {
            costoBiglietto = costoBiglietto * 0.6;
            message = 'Sconto silver'

        };


        // dettagli passeggero
        document.getElementById('nome-passeggero').innerHTML = nomeInput;
        document.getElementById('offerta-applicata').innerHTML = message;
        document.getElementById('carrozza').innerHTML = Math.floor(Math.random() * 9) + 1;
        document.getElementById('codicecp').innerHTML = getRndInteger(9000, 9999);
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        };

        document.getElementById('costo').innerHTML = costoBiglietto.toFixed(2) + '€';
    }
);


var pulsanteAnnulla = document.getElementById("annulla");

element.addEventListener('click',
    function () {
        document.getElementById('nome-passeggero').innerHTML = '';
        document.getElementById('offerta-applicata').innerHTML = '';
        document.getElementById('carrozza').innerHTML = '';
        document.getElementById('codicecp').innerHTML = '';
        

        document.getElementById('costo').innerHTML = '';
        document.getElementById('km').innerHTML = '';
        document.getElementById('nome').innerHTML = '';
        document.getElementById('eta').innerHTML = '';
    };












