const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const calcBtn = document.querySelector('.calc');
const result = document.querySelector('#result');





calcBtn.addEventListener('click', () => {
    const bmiheight = parseFloat(height.value) / 100;
    const bmiweight = parseFloat(weight.value);
    const bmi = (bmiweight / (bmiheight * bmiheight)).toFixed(2);
    console.log(bmi);
    result.innerText = `BMI Index is: ${bmi}`;
    result.style.visibility = "visible";
});
