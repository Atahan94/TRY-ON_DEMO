<?php
session_start();

require_once __DIR__ . '/../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable(dirname(__DIR__));
$dotenv->load();

echo $_ENV['APP_NAME'];

$routes = require __DIR__ . '/../routes/web.php';

$method = $_SERVER['REQUEST_METHOD'];
$path   = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

if (isset($routes[$method][$path])) {
    [$class, $methodName] = $routes[$method][$path];
    $controller = new $class();
    $controller->$methodName();
} else {
    http_response_code(404);
    echo "404 Not Found";
}