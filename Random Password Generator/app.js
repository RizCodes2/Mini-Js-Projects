const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const NUMS = '0123456789';
const SYMS = '!@#$%^&*()-_=+[]{}|;:,.<>?';
const AMBIGUOUS = /[0Ol1I]/g;

const state = { upper: true, lower: true, nums: true, syms: true, noamb: false };
let currentPw = '';

const pwDisplay = document.getElementById('pwDisplay');
const lenSlider = document.getElementById('lenSlider');
const lenVal = document.getElementById('lenVal');
const genBtn = document.getElementById('genBtn');
const copyBtn = document.getElementById('copyBtn');
const refreshBtn = document.getElementById('refreshBtn');
const toast = document.getElementById('toast');
const segs = [document.getElementById('s1'), document.getElementById('s2'), document.getElementById('s3'), document.getElementById('s4')];
const strengthLbl = document.getElementById('strengthLabel');

function getCharset() {
    let cs = '';
    if (state.upper) cs += UPPER;
    if (state.lower) cs += LOWER;
    if (state.nums) cs += NUMS;
    if (state.syms) cs += SYMS;
    if (state.noamb) cs = cs.replace(AMBIGUOUS, '');
    return cs;
}

function generate() {
    const len = parseInt(lenSlider.value);
    const cs = getCharset();
    if (!cs.length) return;

    const arr = new Uint32Array(len);
    crypto.getRandomValues(arr);
    currentPw = Array.from(arr).map(n => cs[n % cs.length]).join('');

    pwDisplay.textContent = currentPw;
    pwDisplay.classList.remove('placeholder');
    updateStrength(len, cs.length);
}

function updateStrength(len, poolSize) {
    const entropy = len * Math.log2(poolSize);
    let level, label, color;
    if (entropy < 40) { level = 1; label = 'Weak'; color = '#E24B4A'; }
    else if (entropy < 60) { level = 2; label = 'Fair'; color = '#EF9F27'; }
    else if (entropy < 80) { level = 3; label = 'Strong'; color = '#639922'; }
    else { level = 4; label = 'Fort'; color = '#1D9E75'; }

    segs.forEach((s, i) => {
        s.style.background = i < level ? color : 'var(--color-border)';
    });
    strengthLbl.textContent = label;
}

lenSlider.addEventListener('input', () => {
    lenVal.textContent = lenSlider.value;
    if (currentPw) generate();
});

document.querySelectorAll('.toggle-row').forEach(row => {
    row.addEventListener('click', () => {
        const key = row.dataset.key;
        state[key] = !state[key];
        row.classList.toggle('active', state[key]);
        if (currentPw) generate();
    });
});

genBtn.addEventListener('click', generate);
refreshBtn.addEventListener('click', generate);

copyBtn.addEventListener('click', () => {
    if (!currentPw) return;
    navigator.clipboard.writeText(currentPw).then(() => {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    });
});

generate();