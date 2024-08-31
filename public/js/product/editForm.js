
// $('#editForm').on('submit', function (event) {
//     event.preventDefault();
//     limparCamposEditDeErros();

//     $.ajax({
//         type: $(this).attr('method'),
//         url: $(this).attr('action'),
//         data: $(this).serialize(),
//         dataType: "json",
//         success: function (response) {
//             console.log('po');
//         },
//         error: function (response) {
//             exibeErros(response.responseJSON.errors)
//         }
//     });
// });

// function exibeErros(erros) {
//     console.log();
//     Object.entries(erros).forEach(([key, value]) => {
//         let campo = key;
//         switch (campo) {
//             case "nome": exibeErrosNome(value);
//                 break;
//             case "codigo": exibeErrosCodigo(value);
//                 break;
//             case "descricao": exibeErrosDescricao(value);
//                 break;
//             case "preco": exibeErrosPreco(value);
//         };
//     });
// }

// function exibeErrosNome(value) {
//     $('#nomeEditErros').html();
//     $('#nomeEditErros').append(`<span class="invalid">${value}</span>`)
// }

// function exibeErrosCodigo(value) {
//     $('#codigoEditErros').html();
//     $('#codigoEditErros').append(`<span class="invalid">${value}</span>`)
// }

// function exibeErrosDescricao(value) {
//     $('#descricaoEditErros').html();
//     $('#descricaoEditErros').append(`<span class="invalid">${value}</span>`)
// }

// function exibeErrosPreco(value) {
//     $('#precoEditErros').html();
//     $('#precoEditErros').append(`<span class="invalid">${value}</span>`)
// }

// function limparCamposEditDeErros() {
//     $('#nomeEditErros').empty();
//     $('#codigoEditErros').empty();
//     $('#descricaoEditErros').empty();
//     $('#precoEditErros').empty();
// }
