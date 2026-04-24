// --- Validation Functions ---

function validateEmail(val) {
    if (!val) return { ok: false, msg: 'Email is Necessary' };
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(val)) return { ok: false, msg: 'Correct format: example@domain.com' };
    return { ok: true, msg: 'Correct Email' };
}

function validatePassword(val) {
    if (!val) return { ok: false, msg: 'Password is Necessary' };
    if (val.length < 8) return { ok: false, msg: 'Minimum 8 Characters are Allowed' };
    if (!/[A-Z]/.test(val)) return { ok: false, msg: 'Need One Capital Letter' };
    if (!/[0-9]/.test(val)) return { ok: false, msg: 'Need One Lowercase Letter' };
    return { ok: true, msg: 'Strong Password' };
}

function validatePhone(val) {
    if (!val) return { ok: false, msg: 'Phone number is Necessary' };
    if (!/^((\+92)|0)?3[0-9]{9}$/.test(val))
        return { ok: false, msg: 'Pakistan format: 03001234567' };
    return { ok: true, msg: 'Correct Phone Number' };
}

// --- UI Update ---

function showMsg(msgId, inputId, result) {
    const msgEl = document.getElementById(msgId);
    const inputEl = document.getElementById(inputId);
    if (!msgEl.dataset.touched) return;

    inputEl.className = result.ok ? 'valid' : 'invalid';
    msgEl.className = 'msg ' + (result.ok ? 'success' : 'error');
    msgEl.innerHTML = `<span class="msg-icon">${result.ok ? '✓' : '✕'}</span><span>${result.msg}</span>`;
}

function checkAll() {
    const allOk =
        validateEmail(document.getElementById('email').value).ok &&
        validatePassword(document.getElementById('password').value).ok &&
        validatePhone(document.getElementById('phone').value).ok;
    document.getElementById('submit-btn').disabled = !allOk;
}

// --- Event Listeners ---

const validators = { email: validateEmail, password: validatePassword, phone: validatePhone };

['email', 'password', 'phone'].forEach(id => {
    const el = document.getElementById(id);
    const msgEl = document.getElementById(id + '-msg');

    el.addEventListener('input', () => {
        msgEl.dataset.touched = 'true';
        showMsg(id + '-msg', id, validators[id](el.value));
        checkAll();
    });

    el.addEventListener('blur', () => {
        msgEl.dataset.touched = 'true';
        showMsg(id + '-msg', id, validators[id](el.value));
    });
});

document.getElementById('submit-btn').addEventListener('click', () => {
    document.getElementById('success-banner').style.display = 'block';
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('submit-btn').textContent = 'Submitted!';
});