<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="TRYON AI - AI-Powered Virtual Try-On Application">
    <title>Login - TRYON AI</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <div class="page-wrapper">
        <div class="auth-container">
            <div class="auth-card card">
                <div class="auth-header">
                    <h1>TRYON AI</h1>
                    <p>Sign in to your account</p>
                </div>

                <form id="loginForm" class="auth-form">
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" id="email" name="email" class="form-input" placeholder="example@email.com"
                            required>
                        <span class="form-error">Please enter a valid email address</span>
                    </div>

                    <div class="form-group">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" id="password" name="password" class="form-input" placeholder="••••••••"
                            required>
                        <span class="form-error">Password must be at least 6 characters</span>
                    </div>

                    <div class="form-group" style="display: flex; justify-content: space-between; align-items: center;">
                        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                            <input type="checkbox" id="remember" name="remember">
                            <span class="text-muted" style="font-size: 0.9rem;">Remember me</span>
                        </label>
                        <a href="#" class="text-muted" style="font-size: 0.9rem;">Forgot password?</a>
                    </div>

                    <button type="submit" class="btn btn-primary btn-large btn-block">
                        Sign In
                    </button>
                </form>

                <div class="divider">or</div>

                <button type="button" class="btn btn-secondary btn-block">
                    <span>🔐</span>
                    Sign in with Google
                </button>

                <div class="auth-footer">
                    <p class="text-muted">
                        Don't have an account?
                        <a href="signup.html">Sign Up</a>
                    </p>
                </div>

                <div style="position: absolute; top: 1.5rem; right: 1.5rem;">
                    <button class="theme-toggle" id="themeToggle" aria-label="Toggle Theme"></button>
                </div>
            </div>
        </div>
    </div>

    <script src="/assets/js/script.js"></script>
</body>

</html>