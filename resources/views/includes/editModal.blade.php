<div class="modal fade" id="editaModal-{{ $product->id }}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Novo produto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('product.update') }}" method="POST" id="editForm">
                @csrf
                @method('PUT')
                <div class="modal-body">
                    <div class="mb-3" id="nomeContainer">
                        <div class="input-group mb-1 d-flex">
                            <input type="text" class="form-control" name="nome" id="nomeEdit" value=""
                                placeholder="Nome do produto">
                        </div>
                        <div id="nomeEditErros"></div>
                    </div>
                    <div class="mb-3" id="codigoCotainer">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" name="codigo" id="codigoEdit" value=""
                                placeholder="Código do produto">
                        </div>
                        <div id="codigoEditErros"></div>
                    </div>
                    <div class="mb-3" id="descricaoContainer">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" name="descricao" id="descricaoEdit" value=""
                                placeholder="Descrição do produto">
                        </div>
                        <div id="descricaoEditErros"></div>
                    </div>
                    <div class="mb-3" id="precoContainer">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" name="preco" id="precoEdit" value=""
                                placeholder="Preço do produto">
                        </div>
                        <div id="precoEditErros"></div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center aling-itens-center">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                    <button type="submit" class="btn btn-success" id="btnUpdateProduct">Editar</button>
                </div>
            </form>
        </div>
    </div>
</div>
