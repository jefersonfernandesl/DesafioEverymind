<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::controller(ProductController::class)->group(function () {
    Route::get('/', 'index')->name('product.index');
    Route::post('/salvar', 'create')->name('product.create');
    Route::get('/editar/{produto}', 'update')->name('product.edit');
    Route::put('/atualizar', 'update')->name('product.update');
});
