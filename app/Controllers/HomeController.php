<?php

namespace App\Controllers;

use App\Core\Controller;
use App\Core\View;
use App\Core\Database;

class HomeController extends Controller
{
    public function index()
    {

        if (!isset($_SESSION['user_id'])) {
        header('Location: /login');
        exit;
    }

        View::render('home');
    }
}
