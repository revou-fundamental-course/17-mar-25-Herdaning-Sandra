document.addEventListener('DOMContentLoaded', function () {
    // ===== ANIMATION FUNCTIONS =====
    function animateResult(element) {
        element.style.animation = 'fadeIn 0.5s ease';
        setTimeout(() => {
            element.style.animation = '';
        }, 500);
    }

    // ===== ERROR HANDLING =====
    function showError(input, message) {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        errorElement.textContent = message;
        errorElement.style.color = 'var(--danger)';
        errorElement.style.fontSize = '0.85rem';
        errorElement.style.marginTop = '5px';
        errorElement.style.animation = 'fadeIn 0.3s ease';

        const parent = input.parentNode;
        const existingError = parent.querySelector('.error-message');
        if (existingError) {
            parent.removeChild(existingError);
        }

        parent.appendChild(errorElement);
        input.style.borderColor = 'var(--danger)';
    }

    function clearError(input) {
        const parent = input.parentNode;
        const errorElement = parent.querySelector('.error-message');
        if (errorElement) {
            parent.removeChild(errorElement);
        }
        input.style.borderColor = '#e9ecef';
    }

    // ===== CALCULATION FUNCTIONS =====

    // SQUARE CALCULATIONS
    function calculateSquareArea() {
        const side = parseFloat(document.getElementById('side')?.value);
        const resultElement = document.getElementById('area-result');

        if (!side || isNaN(side)) {
            showError(document.getElementById('side'), 'Masukkan angka yang valid');
            return;
        }

        if (side <= 0) {
            showError(document.getElementById('side'), 'Panjang sisi harus lebih dari 0');
            return;
        }

        clearError(document.getElementById('side'));

        const area = side * side;

        if (resultElement) {
            resultElement.innerHTML = `
                <h4>Hasil Perhitungan:</h4>
                <p>L = ${side} × ${side}</p>
                <p>L = <strong>${area} cm²</strong></p>
            `;
            animateResult(resultElement);
        }
    }

    function calculateSquarePerimeter() {
        const side = parseFloat(document.getElementById('side-perimeter')?.value);
        const resultElement = document.getElementById('perimeter-result');

        if (!side || isNaN(side)) {
            showError(document.getElementById('side-perimeter'), 'Masukkan angka yang valid');
            return;
        }

        if (side <= 0) {
            showError(document.getElementById('side-perimeter'), 'Panjang sisi harus lebih dari 0');
            return;
        }

        clearError(document.getElementById('side-perimeter'));

        const perimeter = 4 * side;

        if (resultElement) {
            resultElement.innerHTML = `
                <h4>Hasil Perhitungan:</h4>
                <p>K = 4 × ${side}</p>
                <p>K = <strong>${perimeter}</strong></p>
            `;
            animateResult(resultElement);
        }
    }

    // RECTANGLE CALCULATIONS
    function calculateRectangleArea() {
        const length = parseFloat(document.getElementById('length')?.value);
        const width = parseFloat(document.getElementById('width')?.value);
        const resultElement = document.getElementById('area-result');
        let isValid = true;

        if (!length || isNaN(length)) {
            showError(document.getElementById('length'), 'Masukkan panjang yang valid');
            isValid = false;
        } else if (length <= 0) {
            showError(document.getElementById('length'), 'Panjang harus lebih dari 0');
            isValid = false;
        } else {
            clearError(document.getElementById('length'));
        }

        if (!width || isNaN(width)) {
            showError(document.getElementById('width'), 'Masukkan lebar yang valid');
            isValid = false;
        } else if (width <= 0) {
            showError(document.getElementById('width'), 'Lebar harus lebih dari 0');
            isValid = false;
        } else {
            clearError(document.getElementById('width'));
        }

        if (!isValid) return;

        const area = length * width;

        if (resultElement) {
            resultElement.innerHTML = `
                <h4>Hasil Perhitungan:</h4>
                <p>L = ${length} × ${width}</p>
                <p>L = <strong>${area}</strong></p>
            `;
            animateResult(resultElement);
        }
    }

    function calculateRectanglePerimeter() {
        const length = parseFloat(document.getElementById('length-perimeter')?.value);
        const width = parseFloat(document.getElementById('width-perimeter')?.value);
        const resultElement = document.getElementById('perimeter-result');
        let isValid = true;

        if (!length || isNaN(length)) {
            showError(document.getElementById('length-perimeter'), 'Masukkan panjang yang valid');
            isValid = false;
        } else if (length <= 0) {
            showError(document.getElementById('length-perimeter'), 'Panjang harus lebih dari 0');
            isValid = false;
        } else {
            clearError(document.getElementById('length-perimeter'));
        }

        if (!width || isNaN(width)) {
            showError(document.getElementById('width-perimeter'), 'Masukkan lebar yang valid');
            isValid = false;
        } else if (width <= 0) {
            showError(document.getElementById('width-perimeter'), 'Lebar harus lebih dari 0');
            isValid = false;
        } else {
            clearError(document.getElementById('width-perimeter'));
        }

        if (!isValid) return;

        const perimeter = 2 * (length + width);

        if (resultElement) {
            resultElement.innerHTML = `
                <h4>Hasil Perhitungan:</h4>
                <p>K = 2 × (${length} + ${width})</p>
                <p>K = <strong>${perimeter}</strong></p>
            `;
            animateResult(resultElement);
        }
    }

    // Fungsi Hitung Luas Persegi Panjang
    function calculateRectangleArea() {
        const lengthInput = document.getElementById('length');
        const widthInput = document.getElementById('width');
        const length = parseFloat(lengthInput.value);
        const width = parseFloat(widthInput.value);
        const resultElement = document.getElementById('rectangle-area-result');
        let isValid = true;

        // Validasi
        if (isNaN(length)) {
            showError(lengthInput, 'Masukkan angka valid untuk panjang');
            isValid = false;
        } else if (length <= 0) {
            showError(lengthInput, 'Panjang harus > 0');
            isValid = false;
        } else {
            clearError(lengthInput);
        }

        if (isNaN(width)) {
            showError(widthInput, 'Masukkan angka valid untuk lebar');
            isValid = false;
        } else if (width <= 0) {
            showError(widthInput, 'Lebar harus > 0');
            isValid = false;
        } else {
            clearError(widthInput);
        }

        if (!isValid) return;

        // Hitung dan tampilkan
        const area = length * width;
        const formattedArea = Number.isInteger(area) ? area : area.toFixed(2);
        resultElement.innerHTML = `
        <h4>Hasil Luas:</h4>
        <p>L = ${length} × ${width}</p>
        <p>L = <strong>${formattedArea} cm²</strong></p>
    `;
        animateResult(resultElement);
    }

    // Fungsi Hitung Keliling Persegi Panjang
    function calculateRectanglePerimeter() {
        const lengthInput = document.getElementById('length-perimeter');
        const widthInput = document.getElementById('width-perimeter');
        const length = parseFloat(lengthInput.value);
        const width = parseFloat(widthInput.value);
        const resultElement = document.getElementById('rectangle-perimeter-result');
        let isValid = true;

        // Validasi
        if (isNaN(length)) {
            showError(lengthInput, 'Masukkan angka valid untuk panjang');
            isValid = false;
        } else if (length <= 0) {
            showError(lengthInput, 'Panjang harus > 0');
            isValid = false;
        } else {
            clearError(lengthInput);
        }

        if (isNaN(width)) {
            showError(widthInput, 'Masukkan angka valid untuk lebar');
            isValid = false;
        } else if (width <= 0) {
            showError(widthInput, 'Lebar harus > 0');
            isValid = false;
        } else {
            clearError(widthInput);
        }

        if (!isValid) return;

        // Hitung dan tampilkan
        const perimeter = 2 * (length + width);
        const formattedPerimeter = Number.isInteger(perimeter) ? perimeter : perimeter.toFixed(2);
        resultElement.innerHTML = `
        <h4>Hasil Keliling:</h4>
        <p>K = 2 × (${length} + ${width})</p>
        <p>K = <strong>${formattedPerimeter} cm</strong></p>
    `;
        animateResult(resultElement);
    }

    // Event Listeners
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('calculate-rectangle-area')?.addEventListener('click', calculateRectangleArea);
        document.getElementById('calculate-rectangle-perimeter')?.addEventListener('click', calculateRectanglePerimeter);

        // ... (kode reset dan lainnya tetap sama)
    });

    // ===== EVENT LISTENERS =====

    // Square calculator
    document.getElementById('calculate-area')?.addEventListener('click', calculateSquareArea);
    document.getElementById('calculate-perimeter')?.addEventListener('click', calculateSquarePerimeter);

    // Rectangle calculator
    document.getElementById('calculate-rectangle-area')?.addEventListener('click', calculateRectangleArea);
    document.getElementById('calculate-rectangle-perimeter')?.addEventListener('click', calculateRectanglePerimeter);

    // Reset buttons
    document.querySelectorAll('.reset-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const section = this.closest('.calculation-section');
            const inputs = section.querySelectorAll('input');
            const resultArea = section.querySelector('.result-area');

            inputs.forEach(input => {
                input.value = '';
                clearError(input);
            });

            if (resultArea) {
                resultArea.innerHTML = '';
            }
        });
    });

    // Input validation
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('keypress', function (e) {
            if (e.key === 'e' || e.key === 'E' || e.key === '-' || e.key === '+') {
                e.preventDefault();
            }
        });

        input.addEventListener('input', function () {
            if (this.value.trim() !== '') {
                clearError(this);
            }
        });
    });
});