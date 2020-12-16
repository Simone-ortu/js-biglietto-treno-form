var btnGenera = document.getElementById("genera");

btnGenera.addEventListener('click',
    function () {
        var nomeInput = document.getElementById('nome').value;
        var distanza =document.getElementById('km').value;
        var eta = document.getElementById('eta').value;
        var message = 'Tariffa standard'
        var costoBiglietto = 0.21 * distanza;


        if (eta == 'minorenne') {
            costoBiglietto = costoBiglietto * 0.8;
            message = 'Sconto minorenne'



        }
        else if (eta == 'over') {
            costoBiglietto = costoBiglietto * 0.6;
            message = 'Sconto silver'

        };
        // else (eta == 'maggiorenne') {
        //     costoBiglietto = costoBiglietto * 1;
        //     message = 'Tariffa standard'
        // };


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


var btnAnnulla = document.getElementById("annulla");

btnAnnulla.addEventListener('click',
    function () {
        document.getElementById('nome-passeggero').innerHTML = '';
        document.getElementById('offerta-applicata').innerHTML = '';
        document.getElementById('carrozza').innerHTML = '';
        document.getElementById('codicecp').innerHTML = '';
        

        document.getElementById('costo').innerHTML = '';
        document.getElementById('nome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('eta').value = '';
    }
);











