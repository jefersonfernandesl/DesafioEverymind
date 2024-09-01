<?php 

namespace App\Repositories;

use App\Models\Product;
use App\Repositories\Contracts\ProductRepositoryInterface;

class ProductRepository implements ProductRepositoryInterface
{
    protected $product;

    public function __construct(Product $product) {
        $this->product = $product;
    }

    public function all() 
    {   
        return $this->product->all();
    }

    public function create($data) 
    {
        return $this->product->create($data->all());

    }

    public function update($id, $data) 
    {
        $product = $this->find($id);
        return $product->update([
            'nome' => $data->nome,
            'codigo' => $data->codigo,
            'descricao' => $data->descricao,
            'preco' => $data->preco
        ]);
    }

    public function delete($id) 
    {
        $this->product->delete($id);
    }

    public function find($id) 
    {
        return $this->product->find($id);
    }
}