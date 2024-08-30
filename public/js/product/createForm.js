
$('#createForm').on('submit', function (event) {
    event.preventDefault();

    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: $(this).serialize(),
        dataType: "json",
        success: function (response) {
            console.log('po');
        },
        error: function (response) {
            exibeErros(response.responseJSON.errors)
        }
    });
});


function exibeErros(erros) {
    console.log();
    Object.entries(erros).forEach(([key, value]) => {
        let campo = key;
        switch (campo) {
            case "nome": exibeErrosNome(value);
                break;
            case "codigo": exibeErrosCodigo(value);
                break;
            case "descricao": exibeErrosDescricao(value);
                break;
            case "preco": exibeErrosPreco(value);
        };
    });
}

function exibeErrosNome(value) {
    $('#nomeErros').html();
    $('#nomeErros').append(`<span class="invalid">${value}</span>`)
}

function exibeErrosCodigo(value) {
    $('#codigoErros').html();
    $('#codigoErros').append(`<span class="invalid">${value}</span>`)
}

function exibeErrosDescricao(value) {
    $('#descricaoErros').html();
    $('#descricaoErros').append(`<span class="invalid">${value}</span>`)
}

function exibeErrosPreco(value) {
    $('#precoErros').html();
    $('#precoErros').append(`<span class="invalid">${value}</span>`)
}

function limparCamposDeErros() {
    $('#nomeErros').html();
    $('#codigoErros').html();
    $('#descricaoErros').html();
    $('#precoErros').html();
}