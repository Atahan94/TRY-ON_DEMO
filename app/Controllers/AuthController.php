<?php

namespace App\Controllers;

use App\Core\View;
use App\Models\User;

class AuthController
{
    public function showRegister()
    {
        session_destroy();   // real logout
        session_start();     // start fresh session
        
        View::render('auth/signup');
    }

    public function register()
    {
        $name = $_POST['name'] ?? null;
        $email = $_POST['email'] ?? null;
        $password = $_POST['password'] ?? null;

        if (!$name || !$email || !$password) {
            die('Missing fields');
        }

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        User::create($name, $email, $hashedPassword);

        header('Location: /login');
        exit;
    }


    public function showLogin()
    {
        session_destroy();   // real logout
        session_start();     // start fresh session

        View::render('auth/login');
    }

    public function login()
   {
    $email = $_POST['email'] ?? null;
    $password = $_POST['password'] ?? null;

    if (!$email || !$password) {
        die('Missing fields');
    }

    $user = User::findByEmail($email);

    if (!$user) {
        die('User not found');
    }

    if (!password_verify($password, $user['password'])) {
        die('Invalid password');
    }
    
    $_SESSION['user_id'] = $user['id'];

    header('Location: /');
    exit;
   }
}
