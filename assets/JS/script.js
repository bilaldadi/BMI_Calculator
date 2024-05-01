document.addEventListener("DOMContentLoaded", function() {
   
    
    function calculateBMI(height, weight) {
        
        var bmi = (weight / (height * height)).toFixed(1);
        return bmi;
    }

    
    function updateBMIResult() {
        
        var unit = document.querySelector('input[name="unit"]:checked').value;
        var height, weight;

        
        if (unit === 'metric') {
            height = parseFloat(document.getElementById('cm').value) / 100; 
            weight = parseFloat(document.getElementById('kg').value);
        } else if (unit === 'imperial') {
            var feet = parseFloat(document.getElementById('ft').value);
            var inches = parseFloat(document.getElementById('in').value);
            height = (feet * 12 + inches) * 0.0254; 
            weight = parseFloat(document.getElementById('st').value) * 6.35029 + parseFloat(document.getElementById('lbs').value) * 0.453592; // convert stones and pounds to kg
        }

        
        if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
            var bmi = calculateBMI(height, weight);
            document.querySelector('.calculator_form_result_info p').textContent = 'Your BMI...';
            document.querySelector('.calculator_form_result_info span').textContent = bmi;
            document.querySelector('.calculator_form_result_description p').textContent = (bmi >= 18.5 && bmi <= 24.9) ? 'Your BMI suggests you’re a healthy weight.' : 'Your BMI suggests you’re NOT healthy weight.';
        } 
    }

    
    var unitInputs = document.querySelectorAll('input[name="unit"]');
    unitInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            var unit = this.value;
            if (unit === 'metric') {
                document.querySelector('.Metric').style.display = 'block';
                document.querySelector('.Imperial').style.display = 'none';
            } else if (unit === 'imperial') {
                document.querySelector('.Metric').style.display = 'none';
                document.querySelector('.Imperial').style.display = 'block';
            }
            updateBMIResult();
        });
    });

    var inputs = document.querySelectorAll('.calculator_form_values_input input');
    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            updateBMIResult();
        });
    });
});
