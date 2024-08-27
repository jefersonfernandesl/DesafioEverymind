<?php

namespace App\Http\Controllers;

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
}
