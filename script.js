$(document).ready(function () {
    console.log('JQuery loaded!');


    $('#retornoCEP').hide();

    $('#CEP').on('blur', function(){
        var inputCep = $('#CEP');
        console.log(inputCep.val());

        buscaCEP(inputCep.val()).then(
            (response) => {
                console.log(response);
                if(response && response.cep !== ''){
                    $('#retornoCEP').show();
                    $('#rua').val(response.logradouro);
                    $('#bairro').val(response.bairro);
                    $('#cidade').val(response.localidade);
                    $('#UF').val(response.uf);
                }
            
            }
        );
    }) ;
});

function buscaCEP(cep) {
    var urlAPI = `http://viacep.com.br/ws/${cep}/json/`;

    return fetch(urlAPI).then(resp => resp.json());
}


