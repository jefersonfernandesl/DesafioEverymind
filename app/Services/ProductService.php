<?php

namespace App\Services;

use App\Repositories\ProductRepository;

class ProductService
{
    private $repository;

    public function __construct(ProductRepository $productRepository) {
        $this->repository = $productRepository;
    }

    public function all()
    {
        return $this->repository->all();
    }

    public function create($dados)
    {
        return $this->repository->create($dados);
    }

    public function update($id, $dados)
    {
        return $this->repository->update($id, $dados);
    }

    public function delete($id)
    {
        return $this->repository->delete($id);
    }

    public function find($id) 
    {
        return $this->repository->find($id);
    }
}
