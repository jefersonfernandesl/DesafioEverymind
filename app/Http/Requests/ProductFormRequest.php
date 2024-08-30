<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nome' => 'required|min:3|max:255',
            'codigo' => 'required|min:3|max:255',
            'descricao' => 'required|min:3|max:255',
            'preco' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'nome.required' => 'O nome é obrigatório',
            'nome.min' => 'O nome precisa ter no mínimo 3 caracteres',
            'nome.max' => 'O nome pode ter no máximo 255 caracteres',
            'codigo.required' => 'O código do evento é obrigatório',
            'codigo.min' => 'O código precisa ter no mínimo 3 caracteres',
            'codigo.max' => 'O código pode ter no máximo 255 caracteres',
            'descricao.required' => 'A descrição é obrigatório',
            'descricao.min' => 'A descrição precisa ter no mínimo 3 caracteres',
            'descricao.max' => 'A descrição ter no máximo 255 caracteres',
            'preco.required' => 'O preço é obrigatório'
        ];
    }
}
