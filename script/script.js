const loginEmailInput = document.getElementById("login-email");
const loginPasswordInput = document.getElementById("login-password");
const loginEmailLabel = document.getElementById("login-email-label");
const loginPasswordLabel = document.getElementById("login-password-label");

const usernameInput = document.getElementById("username");
const usernameLabel = document.getElementById("username-label");
const signupEmailInput = document.getElementById("signup-email");
const signupPasswordInput = document.getElementById("signup-password");
const signupEmailLabel = document.getElementById("signup-email-label");
const signupPasswordLabel = document.getElementById("signup-password-label");

function toggleActiveClass(active, remove) {
  remove.classList.remove("active");
  active.classList.add("active");
}

function removeActive(container1, container2) {
  container1.classList.remove("active");
  container2.classList.remove("active");
}

/* outline icon */
/* login */
const loginEmailIcon = document.getElementById("lg-email-icon");
const loginPassIcon = document.getElementById("lg-pass-icon");
/* signup */
const signupUserIcon = document.getElementById("sg-user-icon");
const signupEmailIcon = document.getElementById("sg-email-icon");
const signupPassIcon = document.getElementById("sg-pass-icon");

/* filled icon */
/* login */
const loginEmailFilledIcon = document.getElementById("lg-email-filled-icon");
const loginPassFilledIcon = document.getElementById("lg-pass-filled-icon");
/* signup */
const signupUserFilledIcon = document.getElementById("sg-user-filled-icon");
const signupEmailFilledIcon = document.getElementById("sg-email-filled-icon");
const signupPassFilledIcon = document.getElementById("sg-pass-filled-icon");

/* validity checker */
function validityCheck(input, icon) {
  if (input) {
    if (!input.checkValidity()) {
      icon.style.color = "#fc5858";
    } else {
      icon.style.color = "#89ff89";
    }
  }

  /*  if (inputType === "password" || inputType === "text") {
    if (input.value.length < parseInt(input.getAttribute("minlength"))) {
      icon.style.color = "#ff3a3a";
    } else {
      icon.style.color = "#79ff70";
    }
  } */
}

loginEmailInput.addEventListener("input", function () {
  function checkFocusState() {
    if (document.activeElement === loginEmailInput) {
      validityCheck(loginEmailInput, loginEmailFilledIcon);
      toggleActiveClass(loginEmailFilledIcon, loginEmailIcon);
    } else {
      toggleActiveClass(loginEmailIcon, loginEmailFilledIcon);
    }
  }
  setInterval(checkFocusState, 100);
  if (loginEmailInput.value.trim() !== "") {
    loginEmailLabel.style.top = "0.3rem";
  } else {
    loginEmailLabel.style.top = "50%";
  }
});
loginPasswordInput.addEventListener("input", function () {
  function checkFocusState() {
    if (document.activeElement === loginPasswordInput) {
      validityCheck(loginPasswordInput, loginPassFilledIcon);
      toggleActiveClass(loginPassFilledIcon, loginPassIcon);
    } else {
      toggleActiveClass(loginPassIcon, loginPassFilledIcon);
    }
  }
  setInterval(checkFocusState, 100);
  if (loginPasswordInput.value.trim() !== "") {
    loginPasswordLabel.style.top = "0.3rem";
  } else {
    loginPasswordLabel.style.top = "50%";
  }
});

usernameInput.addEventListener("input", function () {
  function checkFocusState() {
    if (document.activeElement === usernameInput) {
      validityCheck(usernameInput, signupUserFilledIcon);
      toggleActiveClass(signupUserFilledIcon, signupUserIcon);
    } else {
      toggleActiveClass(signupUserIcon, signupUserFilledIcon);
    }
  }
  setInterval(checkFocusState, 100);
  if (usernameInput.value.trim() !== "") {
    usernameLabel.style.top = "0.3rem";
  } else {
    usernameLabel.style.top = "50%";
  }
});
signupEmailInput.addEventListener("input", function () {
  function checkFocusState() {
    if (document.activeElement === signupEmailInput) {
      validityCheck(signupEmailInput, signupEmailFilledIcon);
      toggleActiveClass(signupEmailFilledIcon, signupEmailIcon);
    } else {
      toggleActiveClass(signupEmailIcon, signupEmailFilledIcon);
    }
  }
  setInterval(checkFocusState, 100);
  if (signupEmailInput.value.trim() !== "") {
    signupEmailLabel.style.top = "0.3rem";
  } else {
    signupEmailLabel.style.top = "50%";
  }
});
signupPasswordInput.addEventListener("input", function () {
  function checkFocusState() {
    if (document.activeElement === signupPasswordInput) {
      validityCheck(signupPasswordInput, signupPassFilledIcon);
      toggleActiveClass(signupPassFilledIcon, signupPassIcon);
    } else {
      toggleActiveClass(signupPassIcon, signupPassFilledIcon);
    }
  }
  setInterval(checkFocusState, 100);
  if (signupPasswordInput.value.trim() !== "") {
    signupPasswordLabel.style.top = "0.3rem";
  } else {
    signupPasswordLabel.style.top = "50%";
  }
});

const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("signup-btn");
const loginToogleActive = document.getElementById("login-container");
const signupToogleActive = document.getElementById("signup-container");
const wrapper = document.getElementById("wrapper");

function updateWrapperHeight() {
  let container;

  if (loginToogleActive.classList.contains("active")) {
    container = loginToogleActive;
    wrapper.style.height = container.offsetHeight + "px";
  }

  if (signupToogleActive.classList.contains("active")) {
    container = signupToogleActive;
    wrapper.style.height = container.offsetHeight + "px";
  }
}

setInterval(updateWrapperHeight, 100);

loginBtn.addEventListener("click", function () {
  toggleActiveClass(loginToogleActive, signupToogleActive);
  /* changer = "login"; */
  wrapper.style.height = loginToogleActive.offsetHeight + "px";
  wrapper.classList.add("active");
});

signupBtn.addEventListener("click", function () {
  toggleActiveClass(signupToogleActive, loginToogleActive);
  /* changer = "signup"; */
  wrapper.style.height = signupToogleActive.offsetHeight + "px";
  wrapper.classList.add("active");
});

const toogleLogin = document.getElementById("login");
const toolgeSignup = document.getElementById("signup");

toogleLogin.addEventListener("click", function () {
  toggleActiveClass(loginToogleActive, signupToogleActive);
  wrapper.style.height = loginToogleActive.offsetHeight + "px";
  loginBtns.forEach((allBtn) => {
    allBtn.classList.add("active");
  });
  signupBtns.forEach((allBtn) => {
    allBtn.classList.remove("active");
  });
});

toolgeSignup.addEventListener("click", function () {
  toggleActiveClass(signupToogleActive, loginToogleActive);
  wrapper.style.height = signupToogleActive.offsetHeight + "px";
  signupBtns.forEach((allBtn) => {
    allBtn.classList.add("active");
  });
  loginBtns.forEach((allBtn) => {
    allBtn.classList.remove("active");
  });
});

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", function () {
  wrapper.classList.remove("active");
  removeActive(loginToogleActive, signupToogleActive);
  loginBtns.forEach((allBtn) => {
    allBtn.classList.remove("active");
  });
  signupBtns.forEach((allBtn) => {
    allBtn.classList.remove("active");
  });
});

const toogleMenu = document.getElementById("hamburger-menu-btn");
const menuContainer = document.getElementById("menu-container");
const closeMenu = document.getElementById("close-menu-btn");

toogleMenu.addEventListener("click", function () {
  menuContainer.classList.add("active");
});
closeMenu.addEventListener("click", function () {
  menuContainer.classList.remove("active");
});

const hbLoginBtn = document.getElementById("hb-login-btn");
const hbSignupBtn = document.getElementById("hb-signup-btn");

hbLoginBtn.addEventListener("click", function () {
  loginToogleActive.classList.add("active");
  signupToogleActive.classList.remove("active");
  wrapper.style.height = loginToogleActive.offsetHeight + "px";
  wrapper.classList.add("active");
  menuContainer.classList.remove("active");
});

hbSignupBtn.addEventListener("click", function () {
  signupToogleActive.classList.add("active");
  loginToogleActive.classList.remove("active");
  wrapper.style.height = signupToogleActive.offsetHeight + "px";
  wrapper.classList.add("active");
  menuContainer.classList.remove("active");
});

const navs = document.querySelectorAll(".nav");

navs.forEach(function (nav) {
  nav.addEventListener("click", function () {
    menuContainer.classList.remove("active");
    navs.forEach(function (otherNav) {
      otherNav.classList.remove("active");
    });
    nav.classList.add("active");
  });
});

const loginBtns = document.querySelectorAll(".loginBtn");

loginBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    loginBtns.forEach((otherBtn) => {
      otherBtn.classList.add("active");
    });
    signupBtns.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
  });
});

const signupBtns = document.querySelectorAll(".signupBtn");

signupBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    signupBtns.forEach((otherBtn) => {
      otherBtn.classList.add("active");
    });
    loginBtns.forEach((otherBtn) => {
      otherBtn.classList.remove("active");
    });
  });
});

/* const icons = document.querySelectorAll(".icon");
const iconFocus = document.querySelectorAll(".icon-focus");
const inputs = document.querySelectorAll("input");

inputs.forEach(function (input) {
  input.addEventListener("input", function () {
    // Remove "active" class from all iconFocus elements
    iconFocus.forEach(function (iconF) {
      iconF.classList.remove("active");
    });

    // Find the iconFocus element corresponding to the input with a value
    const iconF = input.nextElementSibling;

    if (input.value.trim() !== "") {
      iconF.classList.add("active");
    }
  });
});
 */

/* JCFcodex */
