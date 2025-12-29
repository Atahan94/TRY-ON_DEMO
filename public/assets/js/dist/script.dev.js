"use strict";

// ==========================================
// TRYON AI - JavaScript Functionality
// ==========================================
// Theme Management
// ==========================================
var themeToggle = document.getElementById('themeToggle');
var html = document.documentElement; // Load saved theme or default to light

var savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme); // Theme toggle functionality

if (themeToggle) {
  themeToggle.addEventListener('click', function () {
    var currentTheme = html.getAttribute('data-theme');
    var newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
} // Form Validation
// ==========================================
// Login Form


var loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', function (e) {
    /* e.preventDefault(); */
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var isValid = true; // Email validation

    if (!validateEmail(email.value)) {
      email.classList.add('error');
      isValid = false;
    } else {
      email.classList.remove('error');
    } // Password validation


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
} // Signup Form


var signupForm = document.getElementById('signupForm');

if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    /* e.preventDefault(); */
    var fullname = document.getElementById('fullname');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    var terms = document.getElementById('terms');
    var isValid = true; // Fullname validation

    if (fullname.value.trim().length < 3) {
      fullname.classList.add('error');
      isValid = false;
    } else {
      fullname.classList.remove('error');
    } // Email validation


    if (!validateEmail(email.value)) {
      email.classList.add('error');
      isValid = false;
    } else {
      email.classList.remove('error');
    } // Password validation


    if (password.value.length < 8) {
      password.classList.add('error');
      isValid = false;
    } else {
      password.classList.remove('error');
    } // Confirm password validation


    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.add('error');
      isValid = false;
    } else {
      confirmPassword.classList.remove('error');
    } // Terms validation


    if (!terms.checked) {
      isValid = false;
      alert('Please accept the terms of service');
    }

    if (isValid) {// Simulate signup

      /*  showLoading(e.target.querySelector('button[type="submit"]'));
       setTimeout(() => {
           window.location.href = 'login';
       }, 1500); */
    }
  });
} // Email validation helper


function validateEmail(email) {
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
} // Loading state helper


function showLoading(button) {
  var originalText = button.innerHTML;
  button.innerHTML = originalText + ' <span class="loading"></span>';
  button.disabled = true;
} // Homepage Functionality
// ==========================================
// User Menu Dropdown


var userAvatar = document.getElementById('userAvatar');
var userDropdown = document.getElementById('userDropdown');

if (userAvatar && userDropdown) {
  userAvatar.addEventListener('click', function (e) {
    e.stopPropagation();
    userDropdown.classList.toggle('active');
  }); // Close dropdown when clicking outside

  document.addEventListener('click', function () {
    userDropdown.classList.remove('active');
  });
} // Upload Tab Switching
// ==========================================


var uploadTabs = document.querySelectorAll('.upload-tab');
uploadTabs.forEach(function (tab) {
  tab.addEventListener('click', function () {
    var tabName = tab.getAttribute('data-tab');
    var parentCard = tab.closest('.upload-card'); // Remove active class from all tabs in this card

    parentCard.querySelectorAll('.upload-tab').forEach(function (t) {
      return t.classList.remove('active');
    });
    parentCard.querySelectorAll('.upload-content').forEach(function (c) {
      return c.classList.remove('active');
    }); // Add active class to clicked tab

    tab.classList.add('active');
    parentCard.querySelector("#".concat(tabName)).classList.add('active');
  });
}); // Image Upload State

var userImage = null;
var clothingImage = null; // User Photo Upload - File
// ==========================================

var userFileArea = document.getElementById('userFileArea');
var userFileInput = document.getElementById('userFileInput');
var userPreview = document.getElementById('userPreview');
var userPreviewImg = document.getElementById('userPreviewImg');
var userRemoveBtn = document.getElementById('userRemoveBtn');

if (userFileArea && userFileInput) {
  // Click to upload
  userFileArea.addEventListener('click', function () {
    userFileInput.click();
  }); // File input change

  userFileInput.addEventListener('change', function (e) {
    var file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      handleUserImageUpload(file);
    }
  }); // Drag and drop

  userFileArea.addEventListener('dragover', function (e) {
    e.preventDefault();
    userFileArea.classList.add('dragover');
  });
  userFileArea.addEventListener('dragleave', function () {
    userFileArea.classList.remove('dragover');
  });
  userFileArea.addEventListener('drop', function (e) {
    e.preventDefault();
    userFileArea.classList.remove('dragover');
    var file = e.dataTransfer.files[0];

    if (file && file.type.startsWith('image/')) {
      handleUserImageUpload(file);
    }
  });
} // User Photo Upload - URL


var userUrlInput = document.getElementById('userUrlInput');
var userUrlBtn = document.getElementById('userUrlBtn');

if (userUrlBtn) {
  userUrlBtn.addEventListener('click', function () {
    var url = userUrlInput.value.trim();

    if (url) {
      handleUserImageUrl(url);
    }
  });
} // User Remove Button


if (userRemoveBtn) {
  userRemoveBtn.addEventListener('click', function () {
    userImage = null;
    userPreview.classList.remove('active');
    userPreviewImg.src = '';
    userFileInput.value = '';
    userUrlInput.value = '';
    checkGenerateButton();
  });
} // Clothing Photo Upload - File
// ==========================================


var clothingFileArea = document.getElementById('clothingFileArea');
var clothingFileInput = document.getElementById('clothingFileInput');
var clothingPreview = document.getElementById('clothingPreview');
var clothingPreviewImg = document.getElementById('clothingPreviewImg');
var clothingRemoveBtn = document.getElementById('clothingRemoveBtn');

if (clothingFileArea && clothingFileInput) {
  // Click to upload
  clothingFileArea.addEventListener('click', function () {
    clothingFileInput.click();
  }); // File input change

  clothingFileInput.addEventListener('change', function (e) {
    var file = e.target.files[0];

    if (file && file.type.startsWith('image/')) {
      handleClothingImageUpload(file);
    }
  }); // Drag and drop

  clothingFileArea.addEventListener('dragover', function (e) {
    e.preventDefault();
    clothingFileArea.classList.add('dragover');
  });
  clothingFileArea.addEventListener('dragleave', function () {
    clothingFileArea.classList.remove('dragover');
  });
  clothingFileArea.addEventListener('drop', function (e) {
    e.preventDefault();
    clothingFileArea.classList.remove('dragover');
    var file = e.dataTransfer.files[0];

    if (file && file.type.startsWith('image/')) {
      handleClothingImageUpload(file);
    }
  });
} // Clothing Photo Upload - URL


var clothingUrlInput = document.getElementById('clothingUrlInput');
var clothingUrlBtn = document.getElementById('clothingUrlBtn');

if (clothingUrlBtn) {
  clothingUrlBtn.addEventListener('click', function () {
    var url = clothingUrlInput.value.trim();

    if (url) {
      handleClothingImageUrl(url);
    }
  });
} // Clothing Remove Button


if (clothingRemoveBtn) {
  clothingRemoveBtn.addEventListener('click', function () {
    clothingImage = null;
    clothingPreview.classList.remove('active');
    clothingPreviewImg.src = '';
    clothingFileInput.value = '';
    clothingUrlInput.value = '';
    checkGenerateButton();
  });
} // Image Upload Handlers
// ==========================================


function handleUserImageUpload(file) {
  var reader = new FileReader();

  reader.onload = function (e) {
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
  var reader = new FileReader();

  reader.onload = function (e) {
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
} // Generate Button
// ==========================================


var generateBtn = document.getElementById('generateBtn');
var resultSection = document.getElementById('resultSection');
var resultImage = document.getElementById('resultImage');

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
  generateBtn.addEventListener('click', function () {
    // Show loading state
    var originalText = generateBtn.innerHTML;
    generateBtn.innerHTML = '<span class="loading"></span> Processing...';
    generateBtn.disabled = true; // Simulate AI processing

    setTimeout(function () {
      // In a real app, this would call an AI API
      // For demo, we'll just show the user image
      resultImage.src = userImage;
      resultSection.classList.add('active'); // Scroll to result

      resultSection.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      }); // Reset button

      generateBtn.innerHTML = originalText;
      generateBtn.disabled = false;
    }, 3000);
  });
} // Result Actions
// ==========================================


var downloadBtn = document.getElementById('downloadBtn');
var shareBtn = document.getElementById('shareBtn');
var newTryBtn = document.getElementById('newTryBtn');

if (downloadBtn) {
  downloadBtn.addEventListener('click', function () {
    // Create download link
    var link = document.createElement('a');
    link.href = resultImage.src;
    link.download = 'tryon-result.jpg';
    link.click();
  });
}

if (shareBtn) {
  shareBtn.addEventListener('click', function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!navigator.share) {
              _context.next = 11;
              break;
            }

            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(navigator.share({
              title: 'TRYON AI Result',
              text: 'My virtual try-on result created with TRYON AI',
              url: window.location.href
            }));

          case 4:
            _context.next = 9;
            break;

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](1);
            console.log('Share cancelled');

          case 9:
            _context.next = 13;
            break;

          case 11:
            // Fallback: Copy link
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied!');

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 6]]);
  });
}

if (newTryBtn) {
  newTryBtn.addEventListener('click', function () {
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
    checkGenerateButton(); // Scroll to top

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
} // Initialize
// ==========================================


document.addEventListener('DOMContentLoaded', function () {
  checkGenerateButton();
});