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
}