<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProductFormRequest;
use App\Services\ProductService;

class ProductController extends Controller
{
    protected $service;

    public function __construct(ProductService $productService)
    {
        $this->service = $productService;
    }

    public function index()
    {
        return view('index');
    }

    public function create(ProductFormRequest $request)
    {
        try {
            $products = $this->service->create($request);
            if (!isset($products)) {
                return response()->json('Erro ao cadastrar o produto!', 500);
            }
            return response()->json('Produto cadastrado com sucesso!', 201);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function update(ProductFormRequest $request)
    {
        try {
            $products = $this->service->update($request->id, $request);
            if (!isset($products)) {
                return response()->json('Erro ao atualizar o produto!', 500);
            }
            return response()->json('Produto atualizado com sucesso!', 201);
        } catch (\Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }

    public function delete($id)
    {
        $product = $this->service->delete($id);
        return response()->json('Produto excluído com sucesso!');
    }

    public function atualizarProdutos()
    {
        $products = $this->service->all();
        return response()->json($products, 200);
    }

    public function encontrarProduto($id)
    {
        $product = $this->service->find($id);
        if (!isset($product)) {
            return response()->json('O produto não foi encontrado!', 500);
        }
        return response()->json($product, 201);
    }
}
