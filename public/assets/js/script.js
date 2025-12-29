// ==========================================
// TRYON AI - JavaScript Functionality
// ==========================================

// Theme Management
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);

// Theme toggle functionality
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Form Validation
// ==========================================

// Login Form
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        /* e.preventDefault(); */

        const email = document.getElementById('email');
        const password = document.getElementById('password');

        let isValid = true;

        // Email validation
        if (!validateEmail(email.value)) {
            email.classList.add('error');
            isValid = false;
        } else {
            email.classList.remove('error');
        }

        // Password validation
        if (password.value.length < 6) {
            password.classList.add('error');
            isValid = false;
        } else {
            password.classList.remove('error');
        }

        if (isValid) {
            // Simulate login
            showLoading(e.target.querySelector('button[type="submit"]'));
           /*  setTimeout(() => {
                window.location.href = '/';
            }, 1500); */
        }
    });
}

// Signup Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        /* e.preventDefault(); */

        const fullname = document.getElementById('fullname');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirmPassword');
        const terms = document.getElementById('terms');

        let isValid = true;

        // Fullname validation
        if (fullname.value.trim().length < 3) {
            fullname.classList.add('error');
            isValid = false;
        } else {
            fullname.classList.remove('error');
        }

        // Email validation
        if (!validateEmail(email.value)) {
            email.classList.add('error');
            isValid = false;
        } else {
            email.classList.remove('error');
        }

        // Password validation
        if (password.value.length < 8) {
            password.classList.add('error');
            isValid = false;
        } else {
            password.classList.remove('error');
        }

        // Confirm password validation
        if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add('error');
            isValid = false;
        } else {
            confirmPassword.classList.remove('error');
        }

        // Terms validation
        if (!terms.checked) {
            isValid = false;
            alert('Please accept the terms of service');
        }

        if (isValid) {
            // Simulate signup
           /*  showLoading(e.target.querySelector('button[type="submit"]'));
            setTimeout(() => {
                window.location.href = 'login';
            }, 1500); */
        }
    });
}

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Loading state helper
function showLoading(button) {
    const originalText = button.innerHTML;
    button.innerHTML = originalText + ' <span class="loading"></span>';
    button.disabled = true;
}

// Homepage Functionality
// ==========================================

// User Menu Dropdown
const userAvatar = document.getElementById('userAvatar');
const userDropdown = document.getElementById('userDropdown');

if (userAvatar && userDropdown) {
    userAvatar.addEventListener('click', (e) => {
        e.stopPropagation();
        userDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        userDropdown.classList.remove('active');
    });
}

// Upload Tab Switching
// ==========================================
const uploadTabs = document.querySelectorAll('.upload-tab');

uploadTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        const parentCard = tab.closest('.upload-card');

        // Remove active class from all tabs in this card
        parentCard.querySelectorAll('.upload-tab').forEach(t => t.classList.remove('active'));
        parentCard.querySelectorAll('.upload-content').forEach(c => c.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');
        parentCard.querySelector(`#${tabName}`).classList.add('active');
    });
});

// Image Upload State
let userImage = null;
let clothingImage = null;

// User Photo Upload - File
// ==========================================
const userFileArea = document.getElementById('userFileArea');
const userFileInput = document.getElementById('userFileInput');
const userPreview = document.getElementById('userPreview');
const userPreviewImg = document.getElementById('userPreviewImg');
const userRemoveBtn = document.getElementById('userRemoveBtn');

if (userFileArea && userFileInput) {
    // Click to upload
    userFileArea.addEventListener('click', () => {
        userFileInput.click();
    });

    // File input change
    userFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            handleUserImageUpload(file);
        }
    });

    // Drag and drop
    userFileArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        userFileArea.classList.add('dragover');
    });

    userFileArea.addEventListener('dragleave', () => {
        userFileArea.classList.remove('dragover');
    });

    userFileArea.addEventListener('drop', (e) => {
        e.preventDefault();
        userFileArea.classList.remove('dragover');

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleUserImageUpload(file);
        }
    });
}

// User Photo Upload - URL
const userUrlInput = document.getElementById('userUrlInput');
const userUrlBtn = document.getElementById('userUrlBtn');

if (userUrlBtn) {
    userUrlBtn.addEventListener('click', () => {
        const url = userUrlInput.value.trim();
        if (url) {
            handleUserImageUrl(url);
        }
    });
}

// User Remove Button
if (userRemoveBtn) {
    userRemoveBtn.addEventListener('click', () => {
        userImage = null;
        userPreview.classList.remove('active');
        userPreviewImg.src = '';
        userFileInput.value = '';
        userUrlInput.value = '';
        checkGenerateButton();
    });
}

// Clothing Photo Upload - File
// ==========================================
const clothingFileArea = document.getElementById('clothingFileArea');
const clothingFileInput = document.getElementById('clothingFileInput');
const clothingPreview = document.getElementById('clothingPreview');
const clothingPreviewImg = document.getElementById('clothingPreviewImg');
const clothingRemoveBtn = document.getElementById('clothingRemoveBtn');

if (clothingFileArea && clothingFileInput) {
    // Click to upload
    clothingFileArea.addEventListener('click', () => {
        clothingFileInput.click();
    });

    // File input change
    clothingFileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            handleClothingImageUpload(file);
        }
    });

    // Drag and drop
    clothingFileArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        clothingFileArea.classList.add('dragover');
    });

    clothingFileArea.addEventListener('dragleave', () => {
        clothingFileArea.classList.remove('dragover');
    });

    clothingFileArea.addEventListener('drop', (e) => {
        e.preventDefault();
        clothingFileArea.classList.remove('dragover');

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleClothingImageUpload(file);
        }
    });
}

// Clothing Photo Upload - URL
const clothingUrlInput = document.getElementById('clothingUrlInput');
const clothingUrlBtn = document.getElementById('clothingUrlBtn');

if (clothingUrlBtn) {
    clothingUrlBtn.addEventListener('click', () => {
        const url = clothingUrlInput.value.trim();
        if (url) {
            handleClothingImageUrl(url);
        }
    });
}

// Clothing Remove Button
if (clothingRemoveBtn) {
    clothingRemoveBtn.addEventListener('click', () => {
        clothingImage = null;
        clothingPreview.classList.remove('active');
        clothingPreviewImg.src = '';
        clothingFileInput.value = '';
        clothingUrlInput.value = '';
        checkGenerateButton();
    });
}

// Image Upload Handlers
// ==========================================
function handleUserImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        userImage = e.target.result;
        userPreviewImg.src = userImage;
        userPreview.classList.add('active');
        checkGenerateButton();
    };
    reader.readAsDataURL(file);
}

function handleUserImageUrl(url) {
    // Validate URL format
    try {
        new URL(url);
        userImage = url;
        userPreviewImg.src = url;
        userPreview.classList.add('active');
        checkGenerateButton();
    } catch (e) {
        alert('Please enter a valid URL');
    }
}

function handleClothingImageUpload(file) {
    const reader = new FileReader();
    reader.onload = (e) => {
        clothingImage = e.target.result;
        clothingPreviewImg.src = clothingImage;
        clothingPreview.classList.add('active');
        checkGenerateButton();
    };
    reader.readAsDataURL(file);
}

function handleClothingImageUrl(url) {
    // Validate URL format
    try {
        new URL(url);
        clothingImage = url;
        clothingPreviewImg.src = url;
        clothingPreview.classList.add('active');
        checkGenerateButton();
    } catch (e) {
        alert('Please enter a valid URL');
    }
}

// Generate Button
// ==========================================
const generateBtn = document.getElementById('generateBtn');
const resultSection = document.getElementById('resultSection');
const resultImage = document.getElementById('resultImage');

function checkGenerateButton() {
    if (generateBtn) {
        if (userImage && clothingImage) {
            generateBtn.disabled = false;
        } else {
            generateBtn.disabled = true;
        }
    }
}

if (generateBtn) {
    generateBtn.addEventListener('click', () => {
        // Show loading state
        const originalText = generateBtn.innerHTML;
        generateBtn.innerHTML = '<span class="loading"></span> Processing...';
        generateBtn.disabled = true;

        // Simulate AI processing
        setTimeout(() => {
            // In a real app, this would call an AI API
            // For demo, we'll just show the user image
            resultImage.src = userImage;
            resultSection.classList.add('active');

            // Scroll to result
            resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Reset button
            generateBtn.innerHTML = originalText;
            generateBtn.disabled = false;
        }, 3000);
    });
}

// Result Actions
// ==========================================
const downloadBtn = document.getElementById('downloadBtn');
const shareBtn = document.getElementById('shareBtn');
const newTryBtn = document.getElementById('newTryBtn');

if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        // Create download link
        const link = document.createElement('a');
        link.href = resultImage.src;
        link.download = 'tryon-result.jpg';
        link.click();
    });
}

if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'TRYON AI Result',
                    text: 'My virtual try-on result created with TRYON AI',
                    url: window.location.href
                });
            } catch (err) {
                console.log('Share cancelled');
            }
        } else {
            // Fallback: Copy link
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied!');
        }
    });
}

if (newTryBtn) {
    newTryBtn.addEventListener('click', () => {
        // Reset everything
        userImage = null;
        clothingImage = null;
        userPreview.classList.remove('active');
        clothingPreview.classList.remove('active');
        resultSection.classList.remove('active');
        userPreviewImg.src = '';
        clothingPreviewImg.src = '';
        userFileInput.value = '';
        clothingFileInput.value = '';
        userUrlInput.value = '';
        clothingUrlInput.value = '';
        checkGenerateButton();

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Initialize
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    checkGenerateButton();
});
