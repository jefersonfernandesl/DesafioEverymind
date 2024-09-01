<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::controller(ProductController::class)->group(function () {
    Route::get('/', 'index')->name('product.index');
    Route::post('/salvar', 'create')->name('product.create');
    Route::get('/editar/{produto}', 'update')->name('product.edit');
    Route::put('/atualizar', 'update')->name('product.update');

    Route::prefix('api')->group(function () {
        Route::get('/atualizar-produtos', 'atualizarProdutos')->name('product.refrash');
        Route::get('/encontrar-produto/{produto}', 'encontrarProduto')->name('product.find');
    });
});
