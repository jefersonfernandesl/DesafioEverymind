<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Novo produto</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form method="POST" id="createForm">
                <div class="modal-body">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" name="nome" id="nome"
                            placeholder="Nome do produto">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" name="codigo" id="codigo"
                            placeholder="Código do produto">
                    </div>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" name="descricao" id="descricao"
                            placeholder="Descrição do produto">
                    </div>
                    <div class="input-group mb-3">
                        <input type="number" class="form-control" name="preco" id="preco"
                            placeholder="Preço do produto">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                        <button type="button" class="btn btn-success" id="btnCreateProject">Cadastrar</button>
                    </div>
                </form>
        </div>
    </div>
</div>
</div>
