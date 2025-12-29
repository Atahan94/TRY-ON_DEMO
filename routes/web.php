<?php

use App\Controllers\HomeController;
use App\Controllers\AuthController;

return [
    'GET' => [
        '/' => [HomeController::class, 'index'],
        '/signup' => [AuthController::class, 'showRegister'],
        '/login'  => [AuthController::class, 'showLogin']
    ],

    'POST' => [
    '/signup' => [AuthController::class, 'register'],
    '/login'  => [AuthController::class, 'login']
    ],
];