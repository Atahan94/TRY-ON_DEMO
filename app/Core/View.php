<?php

namespace App\Core;

class View
{
    public static function render(string $view, array $data = [])
    {
        extract($data);

        $content = __DIR__ . '/../../views/' . $view . '.php';

        require __DIR__ . '/../../views/layouts/app.php';
    }
}