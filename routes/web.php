<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::controller(ProductController::class)->group(function () {
    Route::get('/', 'index')->name('product.index');
    Route::post('/salvar', 'create')->name('product.create');
    Route::put('/atualizar/{produto}', 'update')->name('product.update');
    Route::delete('/apagar/{produto}', 'delete')->name('product.delete');

    Route::prefix('api')->group(function () {
        Route::get('/atualizar-produtos', 'atualizarProdutos')->name('product.refrash');
        Route::get('/encontrar-produto/{produto}', 'encontrarProduto')->name('product.find');
    });
});
