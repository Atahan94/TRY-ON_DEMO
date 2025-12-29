<!DOCTYPE html>
<html lang="en" data-theme="light">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="TRYON AI - AI-Powered Virtual Try-On Application">
    <title>Home - TRYON AI</title>
    <link rel="stylesheet" href="/assets/css/styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <div class="page-wrapper">
        <!-- Header -->
        <header class="header">
            <div class="container">
                <nav class="nav">
                    <div class="logo">
                        <span>✨</span>
                        TRYON AI
                    </div>
                    <div class="nav-actions">
                        <button class="theme-toggle" id="themeToggle" aria-label="Toggle Theme"></button>
                        <div class="user-menu">
                            <div class="user-avatar" id="userAvatar">U</div>
                            <div class="dropdown-menu" id="userDropdown">
                                <a href="#" class="dropdown-item">👤 My Profile</a>
                                <a href="#" class="dropdown-item">⚙️ Settings</a>
                                <a href="#" class="dropdown-item">📜 History</a>
                                <div style="border-top: 1px solid var(--border-color); margin: 0.5rem 0;"></div>
                                <a href="/login" class="dropdown-item">🚪 Sign Out</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-content">
            <div class="container">
                <!-- Welcome Section -->
                <section class="welcome-section">
                    <h2>Welcome! 👋</h2>
                    <p class="text-muted">Try on clothes virtually and see how they look on you</p>
                </section>

                <!-- Upload Section -->
                <section class="upload-section">
                    <!-- User Photo Upload -->
                    <div class="upload-card card">
                        <h3>
                            <span>📸</span>
                            Your Photo
                        </h3>

                        <div class="upload-tabs">
                            <button class="upload-tab active" data-tab="user-file">Upload File</button>
                            <button class="upload-tab" data-tab="user-url">Upload via URL</button>
                        </div>

                        <!-- File Upload -->
                        <div class="upload-content active" id="user-file">
                            <div class="file-upload-area" id="userFileArea">
                                <div class="upload-icon">🖼️</div>
                                <p><strong>Upload your photo</strong></p>
                                <p class="text-muted">Drag and drop or click</p>
                                <input type="file" id="userFileInput" accept="image/*">
                            </div>
                        </div>

                        <!-- URL Upload -->
                        <div class="upload-content" id="user-url">
                            <div class="url-input-group">
                                <input type="url" class="form-input" id="userUrlInput"
                                    placeholder="https://example.com/photo.jpg">
                                <button class="btn btn-primary" id="userUrlBtn">Upload</button>
                            </div>
                        </div>

                        <!-- Preview Area -->
                        <div class="preview-area" id="userPreview">
                            <img src="" alt="User Photo" class="preview-image" id="userPreviewImg">
                            <div class="preview-actions">
                                <button class="btn btn-secondary btn-block" id="userRemoveBtn">
                                    🗑️ Remove
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Clothing Photo Upload -->
                    <div class="upload-card card">
                        <h3>
                            <span>👕</span>
                            Clothing Image
                        </h3>

                        <div class="upload-tabs">
                            <button class="upload-tab active" data-tab="clothing-file">Upload File</button>
                            <button class="upload-tab" data-tab="clothing-url">Upload via URL</button>
                        </div>

                        <!-- File Upload -->
                        <div class="upload-content active" id="clothing-file">
                            <div class="file-upload-area" id="clothingFileArea">
                                <div class="upload-icon">👔</div>
                                <p><strong>Upload clothing image</strong></p>
                                <p class="text-muted">Drag and drop or click</p>
                                <input type="file" id="clothingFileInput" accept="image/*">
                            </div>
                        </div>

                        <!-- URL Upload -->
                        <div class="upload-content" id="clothing-url">
                            <div class="url-input-group">
                                <input type="url" class="form-input" id="clothingUrlInput"
                                    placeholder="https://example.com/clothing.jpg">
                                <button class="btn btn-primary" id="clothingUrlBtn">Upload</button>
                            </div>
                        </div>

                        <!-- Preview Area -->
                        <div class="preview-area" id="clothingPreview">
                            <img src="" alt="Clothing Image" class="preview-image" id="clothingPreviewImg">
                            <div class="preview-actions">
                                <button class="btn btn-secondary btn-block" id="clothingRemoveBtn">
                                    🗑️ Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Generate Section -->
                <section class="generate-section">
                    <button class="btn btn-primary btn-large" id="generateBtn" disabled>
                        <span>✨</span>
                        Generate
                    </button>
                    <p class="text-muted mt-2">Upload both images then click the generate button</p>
                </section>

                <!-- Result Section -->
                <section class="result-section" id="resultSection">
                    <div class="card">
                        <h3 class="text-center mb-3">🎉 Result</h3>
                        <div style="text-align: center;">
                            <img src="" alt="Result Image" class="result-image" id="resultImage">
                        </div>
                        <div style="display: flex; gap: 1rem; margin-top: 2rem; justify-content: center;">
                            <button class="btn btn-primary" id="downloadBtn">
                                💾 Download
                            </button>
                            <button class="btn btn-secondary" id="shareBtn">
                                🔗 Share
                            </button>
                            <button class="btn btn-outline" id="newTryBtn">
                                🔄 New Try
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </main>

        <!-- Footer -->
        <footer
            style="padding: 2rem 0; text-align: center; border-top: 1px solid var(--border-color); margin-top: 4rem;">
            <div class="container">
                <p class="text-muted" style="margin: 0;">
                    © 2024 TRYON AI. All rights reserved.
                </p>
            </div>
        </footer>
    </div>

    <script src="/assets/js/script.js"></script>
</body>

</html>