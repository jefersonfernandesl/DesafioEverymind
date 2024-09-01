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

                 <div class="modal fade" id="editaModal-${product.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${product.id}" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel-${product.id}">Editar Produto</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form id="editForm-${product.id}" data-id="${product.id}">
                                    <div class="mb-3">
                                        <label for="nome-${product.id}" class="form-label">Nome</label>
                                        <input type="text" class="form-control" id="nome-${product.id}" name="nome" value="${product.nome}">
                                        <div id="nomeErros-${product.id}" class="invalid-feedback"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="codigo-${product.id}" class="form-label">Código</label>
                                        <input type="text" class="form-control" id="codigo-${product.id}" name="codigo" value="${product.codigo}">
                                        <div id="codigoErros-${product.id}" class="invalid-feedback"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="descricao-${product.id}" class="form-label">Descrição</label>
                                        <textarea class="form-control" id="descricao-${product.id}" name="descricao">${product.descricao}</textarea>
                                        <div id="descricaoErros-${product.id}" class="invalid-feedback"></div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="preco-${product.id}" class="form-label">Preço</label>
                                        <input type="text" class="form-control" id="preco-${product.id}" name="preco" value="${product.preco}">
                                        <div id="precoErros-${product.id}" class="invalid-feedback"></div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Salvar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                 </div>
                 `;
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
            console.log(response);

        },
        error: function (response) {
            console.log(response.responseJSON);
        }
    });
}

$(document).ready(function () {
    atualizarProdutos();
});
