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
        $products = $this->service->all();
        return view('index', compact('products'));
    }

    public function create(ProductFormRequest $request)
    {
        try {
            $this->service->create($request);
            return redirec()->route('product.index');
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    }
}
