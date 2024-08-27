<?php

namespace App\Repositories\Contracts;

interface BaseRepositoryInterface
{
    public function all();

    public function create($data);

    public function update($id, $data);

    public function delete($id);

    public function find($id);
}