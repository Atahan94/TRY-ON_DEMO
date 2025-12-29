<?php

namespace App\Models;

use App\Core\Database;
use PDO;

class User
{
    public static function create(string $name, string $email, string $passwordHash): int
    {
        $pdo = Database::connect();

        $stmt = $pdo->prepare("
            INSERT INTO users (name, email, password)
            VALUES (:name, :email, :password)
        ");

        $stmt->execute([
            ':name' => $name,
            ':email' => $email,
            ':password' => $passwordHash,
        ]);

        return (int) $pdo->lastInsertId();
    }

    public static function findByEmail(string $email): ?array
   {
    $pdo = Database::connect();

    $stmt = $pdo->prepare("
        SELECT * FROM users WHERE email = :email LIMIT 1
    ");

    $stmt->execute([
        'email' => $email,
    ]);

    $user = $stmt->fetch();

    return $user ?: null;
   }
}
