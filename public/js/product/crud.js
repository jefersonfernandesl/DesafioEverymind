$(document).ready(function () {
    atualizarProdutos();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $('#preco').mask('000.000.000,00', { reverse: true });
});

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
                        <button type="button" class="btn btn-danger" onclick="deletarModal(${product.id})">Apagar</button>
                    </td>
                </tr>`;
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
    $('#editaModal').remove();

    $.ajax({
        type: 'GET',
        url: `/api/encontrar-produto/${id}`,
        dataType: "json",
        success: function (response) {
            let modal = `
                <div class="modal fade" id="editaModal" tabindex="-1" aria-labelledby="editModal" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="editModal">Editar Produto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="editForm" data-id="${response.id}" method="POST">
                                
                                    <input type="hidden" name="_token" value="${$('meta[name="csrf-token"]').attr('content')}">
                                    <input type="hidden" name="_method" value="PUT">

                                    <div class="mb-3">
                                        <label for="nomeEdit" class="form-label">Nome</label>
                                        <input type="text" class="form-control" id="nomeEdit" name="nomeEdit" value="${response.nome}">
                                        <div id="nomeEditErros" class="invalid-feedback"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="codigoEdit" class="form-label">Código</label>
                                        <input type="text" class="form-control" id="codigoEdit" name="codigoEdit" value="${response.codigo}">
                                        <div id="codigoEditErros" class="invalid-feedback"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="descricaoEdit" class="form-label">Descrição</label>
                                        <textarea class="form-control" id="descricaoEdit" name="descricaoEdit">${response.descricao}</textarea>
                                        <div id="descricaoEditErros" class="invalid-feedback"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="precoEdit" class="form-label">Preço</label>
                                        <input type="text" class="form-control" id="precoEdit" name="precoEdit" value="${response.preco}">
                                        <div id="precoEditErros" class="invalid-feedback"></div>
                                    </div>
                                    <button type="submit" class="btn btn-warning">Salvar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>`;
            $('body').append(modal);
            $('#editaModal').modal('show');

            $('#precoEdit').mask('000.000.000,00', { reverse: true });

            $('#editForm').submit(function (e) {
                e.preventDefault();

                let produtoId = $(this).data('id');

                let preco = $('#precoEdit').val();
                preco = preco.replace(/[R$.]/g, '').replace(',', '.');
                $('#precoEdit').val(preco);

                $.ajax({
                    type: 'POST',
                    headers: { 'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content') },
                    url: `/atualizar/${produtoId}`,
                    data: $(this).serialize(),
                    dataType: "json",
                    success: function (response) {
                        atualizarProdutos();
                        $('#editaModal').modal('hide');
                        $('#editaModal').remove();
                    },
                    error: function (response) {
                        if (response.status == 422) {
                            let erros = response.responseJSON.errors;
                            exibeErros(erros);
                        } else {
                            console.log(response.responseJSON);
                        }
                    }
                });
            });
        },
        error: function (response) {
            console.log(response.responseJSON);
        }
    });
}

function deletarModal(id) {
    $('#deletarModal').remove();

    let modal = `
        <div class="modal fade" id="deletarModal" tabindex="-1" aria-labelledby="deleteModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteModal">Confirmar Exclusão</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p>Tem certeza de que deseja excluir este produto?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-danger" onclick="deletarProduto(${id})">Excluir</button>
                    </div>
                </div>
            </div>
        </div>`;
    $('body').append(modal);
    $('#deletarModal').modal('show');
}

function deletarProduto(id) {
    $.ajax({
        type: 'DELETE',
        url: `/api/deletar-produto/${id}`,
        success: function (response) {
            atualizarProdutos();
            $('#deletarModal').modal('hide');
            $('#deletarModal').remove();
        },
        error: function (response) {
            console.log('Erro ao deletar o produto:', response);
        }
    });
}

function exibeErros(erros) {
    Object.entries(erros).forEach(([key, value]) => {
        let campo = key;
        switch (campo) {
            case "nome":
                exibeErrosNome(value);
                break;
            case "codigo":
                exibeErrosCodigo(value);
                break;
            case "descricao":
                exibeErrosDescricao(value);
                break;
            case "preco":
                exibeErrosPreco(value);
        };
    });
}

function exibeErrosNome(value) {
    $('#nomeEditErros').html('');
    $('#nomeEditErros').append(`<span class="invalid">${value}</span>`);
}

function exibeErrosCodigo(value) {
    $('#codigoEditErros').html('');
    $('#codigoEditErros').append(`<span class="invalid">${value}</span>`);
}

function exibeErrosDescricao(value) {
    $('#descricaoEditErros').html('');
    $('#descricaoEditErros').append(`<span class="invalid">${value}</span>`);
}

function exibeErrosPreco(value) {
    $('#precoEditErros').html('');
    $('#precoEditErros').append(`<span class="invalid">${value}</span>`);
}

function limparCamposDeErros() {
    $('#nomeEditErros').empty();
    $('#codigoEditErros').empty();
    $('#descricaoEditErros').empty();
    $('#precoEditErros').empty();
}
