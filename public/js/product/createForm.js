$('#createForm').on('submit', function (event) {
    event.preventDefault();

    let preco = $('#preco').val();
    preco = preco.replace(/[R$.]/g, '').replace(',', '.');
    $('#preco').val(preco);

    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: $(this).serialize(),
        dataType: "json",
        success: function (response) {
            atualizarProdutos();
            $('#staticBackdrop').modal('hide');
        },
        error: function (response) {
            if (response.status == 422) {
                let erros = response.responseJSON.errors;
                exibeErros(erros);
            }
            else {
                console.log(response.responseJSON);
            }
        }
    });
});


function exibeErros(erros) {
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
    $('#nomeErros').empty();
    $('#codigoErros').empty();
    $('#descricaoErros').empty();
    $('#precoErros').empty();
}


$(document).ready(function () {
    $('#preco').mask('000.000.000,00', { reverse: true });
});