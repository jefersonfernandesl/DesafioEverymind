function atualizarProdutos() {
    $.ajax({
        url: '/api/atualizar-produtos',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            let productsHtml = '';

            response.forEach(product => {
                let productTr = `
                  <tr>
                     <th scope="row">${product.codigo}</th>
                     <td>${product.nome}</td>
                     <td>${product.descricao}</td>
                     <td>R$ ${product.preco}</td>
                     <td>
                        <button type="button" class="btn btn-warning" onclick="editarModal(${product.id})">Editar</button>
                        <button type="button" class="btn btn-danger apagarProdutoBtn" data-id="${product.id}">Apagar</button>
                     </td>
                 </tr>  

                 
                 `
                productsHtml += productTr;
            });

            $('#tbody').html(productsHtml);
        },
        error: function (xhr, status, error) {
            console.error('Erro ao buscar os produtos: ' + error);
        }
    });
}

function editarModal(id) {
    $.ajax({
        type: 'GET',
        url: `/api/encontrar-produto/${id}`,
        dataType: "json",
        success: function (response) {
            let modal =
                `
                <div class="modal fade" id="editaModal" tabindex="-1" aria-labelledby="editModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="editModal">Editar Produto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="editForm" data-id="${response.id}">
                                    <div class="mb-3">
                                        <label for="nomeEdit" class="form-label">Nome</label>
                                        <input type="text" class="form-control" id="nomeEdit" name="nomeEdit" value="${response.nome}">
                                        <div id="nomeEditErros" class="invalid-feedback"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="codigoEdit" class="form-label">Código</label>
                                        <input type="text" class="form-control" id="codigo" name="codigoEdit" value="${response.codigo}">
                                        <div id="codigoEditErros" class="invalid-feedback"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="descricaoEdit" class="form-label">Descrição</label>
                                        <textarea class="form-control" id="descricao" name="descricaoEdit">${response.descricao}</textarea>
                                        <div id="descricaoEditErros" class="invalid-feedback"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="precoEdit" class="form-label">Preço</label>
                                        <input type="text" class="form-control" id="precoEdit" name="precoEdit" value="${response.preco}">
                                        <div id="precoEditErros" class="invalid-feedback"></div>
                                    </div>
                                    <button type="submit" class="btn btn-warning pull-rigth">Salvar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
            `;
            $('body').append(modal);
            $('#editaModal').modal('show');
        },
        error: function (response) {
            console.log(response.responseJSON);
        }
    });
}

$('#editForm').submit(function (e) { 
    e.preventDefault();

    let preco = $('#precoEdit').val();
    preco = preco.replace(/[R$.]/g, '').replace(',', '.');
    $('#precoEdit').val(preco);

    $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: $(this).serialize(),
        dataType: "json",
        success: function (response) {
            atualizarProdutos();
            $('#editaModal').modal('hide');
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


$(document).ready(function () {
    atualizarProdutos();
});
