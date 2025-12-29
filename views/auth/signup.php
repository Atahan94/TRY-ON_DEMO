<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="TRYON AI - AI-Powered Virtual Try-On Application">
    <title>Sign Up - TRYON AI</title>
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
                    <p>Create a new account</p>
                </div>

                <form id="signupForm" class="auth-form" method="Post" action="/signup">
                    <div class="form-group">
                        <label for="fullname" class="form-label">Full Name</label>
                        <input type="text" id="fullname" name="name" class="form-input" placeholder="Your Full Name"
                            required>
                        <span class="form-error">Full name must be at least 3 characters</span>
                    </div>

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
                        <span class="form-error">Password must be at least 8 characters</span>
                    </div>

                    <div class="form-group">
                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" class="form-input"
                            placeholder="••••••••" required>
                        <span class="form-error">Passwords do not match</span>
                    </div>

                    <div class="form-group">
                        <label style="display: flex; align-items: flex-start; gap: 0.5rem; cursor: pointer;">
                            <input type="checkbox" id="terms" name="terms" required style="margin-top: 0.25rem;">
                            <span class="text-muted" style="font-size: 0.9rem;">
                                I have read and accept the
                                <a href="#" style="color: var(--accent-primary);">Terms of Service</a> and
                                <a href="#" style="color: var(--accent-primary);">Privacy Policy</a>
                            </span>
                        </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-large btn-block">
                        Sign Up
                    </button>
                </form>

                <div class="divider">or</div>

                <button type="button" class="btn btn-secondary btn-block">
                    <span>🔐</span>
                    Sign up with Google
                </button>

                <div class="auth-footer">
                    <p class="text-muted">
                        Already have an account?
                        <a href="login">Log In</a>
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