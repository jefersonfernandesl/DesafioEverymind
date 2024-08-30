<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Novo produto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form action="{{ route('product.create') }}" method="POST" id="createForm">
                @csrf
                <div class="modal-body">
                    <div class="mb-3" id="nomeContainer">
                        <div class="input-group mb-1 d-flex">
                            <input type="text" class="form-control" name="nome" id="nome"
                                placeholder="Nome do produto">
                        </div>
                        <div id="nomeErros"></div>
                    </div>
                    <div class="mb-3" id="codigoCotainer">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" name="codigo" id="codigo"
                                placeholder="Código do produto">
                        </div>
                        <div id="codigoErros"></div>
                    </div>
                    <div class="mb-3" id="descricaoContainer">
                        <div class="input-group mb-1">
                            <input type="text" class="form-control" name="descricao" id="descricao"
                                placeholder="Descrição do produto">
                        </div>
                        <div id="descricaoErros"></div>
                    </div>
                    <div class="mb-3" id="precoContainer">
                        <div class="input-group mb-1">
                            <input type="number" class="form-control" name="preco" id="preco"
                                placeholder="Preço do produto">
                        </div>
                        <div id="precoErros"></div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-center aling-itens-center">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                    <button type="submit" class="btn btn-success" id="btnCreateProject">Cdastrar</button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>
