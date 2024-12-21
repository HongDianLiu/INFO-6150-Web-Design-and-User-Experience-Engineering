"use strict";
(function () {
    const nameEl = document.querySelector('#name');
    const emailEl = document.querySelector('#email');
    const confirmEmailEl = document.querySelector('#confirm-email');
    const form = document.querySelector('#registration-form');

    const nameErrorEl = document.querySelector('#name-error');
    const emailErrorEl = document.querySelector('#email-error');
    const confirmEmailErrorEl = document.querySelector('#confirm-email-error');

    const state = {
        name: nameEl.value,
        email: emailEl.value,
        confirmEmail: confirmEmailEl.value,
        nameError: '',
        emailError: '',
        confirmEmailError: ''
    };

    nameEl.addEventListener('input', () => {
        state.name = nameEl.value;
        if (!isNameValid(state)) {
            state.nameError = 'Name is required';
        } else {
            state.nameError = '';
        }
        render(state);
    });

    emailEl.addEventListener('input', () => {
        state.email = emailEl.value;
        if (!isEmailValid(state)) {
            state.emailError = 'Email is required';
        } else {
            state.emailError = '';
        }
        render(state);
    });

    confirmEmailEl.addEventListener('input', () => {
        state.confirmEmail = confirmEmailEl.value;
        if (!isConfirmEmailValid(state)) {
            state.confirmEmailError = 'Emails do not match';
        } else {
            state.confirmEmailError = '';
        }
        render(state);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        state.name = nameEl.value;
        state.email = emailEl.value;
        state.confirmEmail = confirmEmailEl.value;

        if (!isNameValid(state)) {
            state.nameError = 'Name is required';
        } else {
            state.nameError = '';
        }

        if (!isEmailValid(state)) {
            state.emailError = 'Email is required';
        } else {
            state.emailError = '';
        }

        if (!isConfirmEmailValid(state)) {
            state.confirmEmailError = 'Emails do not match';
        } else {
            state.confirmEmailError = '';
        }

        render(state);

        if (isFormValid(state)) {
            form.submit();
        }
    });

    function isNameValid(state) {
        return state.name.trim() !== '';
    }

    function isEmailValid(state) {
        return state.email.trim() !== '';
    }

    function isConfirmEmailValid(state) {
        return state.email === state.confirmEmail;
    }

    function isFormValid(state) {
        return isNameValid(state) && isEmailValid(state) && isConfirmEmailValid(state);
    }

    function render(state) {
        nameErrorEl.innerText = state.nameError;
        emailErrorEl.innerText = state.emailError;
        confirmEmailErrorEl.innerText = state.confirmEmailError;
    }
})();