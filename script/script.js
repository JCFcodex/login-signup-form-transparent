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
/* 

function buttonClick(input) {
  submitBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {

    });
  });
} */

/* const submitBtn = document.querySelectorAll("#sub-btn"); */

function validityCheck(input, icon) {
  if (input) {
    if (!input.checkValidity()) {
      icon.style.color = "#fc5858";
      input.classList.add("active");
    } else {
      icon.style.color = "#89ff89";
      input.classList.remove("active");
    }
  }

  /*   submitBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      console.log(input);
      if (input) {
        if (!input.checkValidity()) {
          input.classList.add("active");
        } else {
          input.classList.remove("active");
        }
      }
    });
  }); */

  /*  if (inputType === "password" || inputType === "text") {
    if (input.value.length < parseInt(input.getAttribute("minlength"))) {
      icon.style.color = "#ff3a3a";
    } else {
      icon.style.color = "#79ff70";
    }
  } */
}
function handleInputFocus(input, label, filledIcon, unfilledIcon) {
  if (document.activeElement === input) {
    if (input.value !== "") {
      label.style.top = "0.3rem";
      validityCheck(input, filledIcon);
      toggleActiveClass(filledIcon, unfilledIcon);
    } else {
      label.style.top = "50%";
      toggleActiveClass(unfilledIcon, filledIcon);
      input.classList.remove("active");
    }
  } else {
    input.classList.remove("active");
    toggleActiveClass(unfilledIcon, filledIcon);
  }
}

loginEmailInput.addEventListener("input", function () {
  setInterval(
    () =>
      handleInputFocus(
        loginEmailInput,
        loginEmailLabel,
        loginEmailFilledIcon,
        loginEmailIcon
      ),
    100
  );
});
loginPasswordInput.addEventListener("input", function () {
  setInterval(
    () =>
      handleInputFocus(
        loginPasswordInput,
        loginPasswordLabel,
        loginPassFilledIcon,
        loginPassIcon
      ),
    100
  );
});

usernameInput.addEventListener("input", function () {
  setInterval(
    () =>
      handleInputFocus(
        usernameInput,
        usernameLabel,
        signupUserFilledIcon,
        signupUserIcon
      ),
    100
  );
});
signupEmailInput.addEventListener("input", function () {
  setInterval(
    () =>
      handleInputFocus(
        signupEmailInput,
        signupEmailLabel,
        signupEmailFilledIcon,
        signupEmailIcon
      ),
    100
  );
});
signupPasswordInput.addEventListener("input", function () {
  setInterval(
    () =>
      handleInputFocus(
        signupPasswordInput,
        signupPasswordLabel,
        signupPassFilledIcon,
        signupPassIcon
      ),
    100
  );
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
