const data = {
    length: {
        units: ['Meter', 'Kilometer', 'Centimeter', 'Mile', 'Foot', 'Inch'],
        rates: { 'Meter': 1, 'Kilometer': 0.001, 'Centimeter': 100, 'Mile': 0.000621371, 'Foot': 3.28084, 'Inch': 39.3701 }
    },
    weight: {
        units: ['Kilogram', 'Gram', 'Pound', 'Ounce'],
        rates: { 'Kilogram': 1, 'Gram': 1000, 'Pound': 2.20462, 'Ounce': 35.274 }
    },
    volume: {
        units: ['Liter', 'Milliliter', 'Gallon', 'Cubic Meter'],
        rates: { 'Liter': 1, 'Milliliter': 1000, 'Gallon': 0.264172, 'Cubic Meter': 0.001 }
    },
    area: {
        units: ['Square Meter', 'Square Foot', 'Acre', 'Hectare'],
        rates: { 'Square Meter': 1, 'Square Foot': 10.7639, 'Acre': 0.000247105, 'Hectare': 0.0001 }
    },
    temp: {
        units: ['Celsius', 'Fahrenheit', 'Kelvin']
    }
};

let currentCategory = 'length';

function setCategory(cat) {
    currentCategory = cat;

    // Update UI buttons
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === cat || (cat === 'temp' && btn.innerText === 'Temp'));
    });

    // Populate Selects
    const fromSelect = document.getElementById('fromUnit');
    const toSelect = document.getElementById('toUnit');

    fromSelect.innerHTML = '';
    toSelect.innerHTML = '';

    data[cat].units.forEach(unit => {
        fromSelect.options.add(new Option(unit, unit));
        toSelect.options.add(new Option(unit, unit));
    });

    // Default selection
    toSelect.selectedIndex = 1;
    convert();
}

function convert() {
    const val = parseFloat(document.getElementById('inputValue').value);
    const from = document.getElementById('fromUnit').value;
    const to = document.getElementById('toUnit').value;
    const display = document.getElementById('resultDisplay');

    if (isNaN(val)) {
        display.innerText = "0.00";
        return;
    }

    let result;

    if (currentCategory === 'temp') {
        result = convertTemperature(val, from, to);
    } else {
        // Logic: Convert to base unit then to target unit
        const baseValue = val / data[currentCategory].rates[from];
        result = baseValue * data[currentCategory].rates[to];
    }

    display.innerText = result.toLocaleString(undefined, { maximumFractionDigits: 4 });
    document.getElementById('unitLabel').innerText = to;
}

function convertTemperature(value, from, to) {
    let celsius;
    if (from === 'Celsius') celsius = value;
    else if (from === 'Fahrenheit') celsius = (value - 32) * 5 / 9;
    else celsius = value - 273.15;

    if (to === 'Celsius') return celsius;
    if (to === 'Fahrenheit') return (celsius * 9 / 5) + 32;
    return celsius + 273.15;
}

// Initialize
window.onload = () => setCategory('length');