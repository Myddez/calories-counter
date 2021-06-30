const genderMale = document.getElementById('gender-male');
const genderFemale = document.getElementById('gender-female');
const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const activityMinimal = document.getElementById('activity-minimal');
const activityLow = document.getElementById('activity-low');
const activityMedium = document.getElementById('activity-medium');
const activityHigh = document.getElementById('activity-high');
const activityMaximal = document.getElementById('activity-maximal');
const resetButton = document.querySelector('.form__reset-button');
const submitButton = document.querySelector('.form__submit-button');
const result = document.querySelector('section');
const caloriesNormal = document.getElementById('calories-norm');
const caloriesMinimal = document.getElementById('calories-minimal');
const caloriesMaximal = document.getElementById('calories-maximal');


// Добавляем условия для активации кнопок

const checkResetButton = () => {
    if (age.value != 0 || height.value != 0 || weight.value != 0) {
        resetButton.disabled = false;
    } else {
        resetButton.disabled = true;
    }
}

const checkSubmitButton = () => {
    if (age.value != 0 &&  height.value != 0 && weight.value != 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
}

// Добавляем проверку на активацию кнопок при вводе

age.addEventListener('input', checkResetButton);
height.addEventListener('input', checkResetButton);
weight.addEventListener('input', checkResetButton);

age.addEventListener('input', checkSubmitButton);
height.addEventListener('input', checkSubmitButton);
weight.addEventListener('input', checkSubmitButton);

// Определяем коэффициент пола и добавляем проверку при нажатии

let genderRatio = 5;

const checkGenderRatio = () => {
    if (genderMale.checked) {
        genderRatio = 5;
    } else if (genderFemale.checked) {
        genderRatio = - 161;
    } else {
        alert('Gender ratio check error!');
    }
}

genderMale.addEventListener('click', checkGenderRatio);
genderFemale.addEventListener('click', checkGenderRatio);

// Определяем коэффициет активности

let activityRatio = 1.2;

const checkActivityRatio = () => {
    if (activityMinimal.checked) {
        activityRatio = 1.2;
    } else if (activityLow.checked) {
        activityRatio = 1.375;
    } else if (activityMedium.checked) {
        activityRatio = 1.55;
    } else if (activityHigh.checked) {
        activityRatio = 1.725;
    } else if (activityMaximal.checked) {
        activityRatio = 1.9;
    } else {
        alert('Activity ratio check error!');
    }
}

activityMinimal.addEventListener('click', checkActivityRatio);
activityLow.addEventListener('click', checkActivityRatio);
activityMedium.addEventListener('click', checkActivityRatio);
activityHigh.addEventListener('click', checkActivityRatio);
activityMaximal.addEventListener('click', checkActivityRatio);

// Производим расчет

const calculateResult = () => {
    caloriesNormal.innerHTML = Math.round(((10 * weight.value) + (6.25 * height.value) - (5 * age.value) + genderRatio) * activityRatio);
    caloriesMinimal.innerHTML = Math.round(caloriesNormal.innerHTML * 0.85);
    caloriesMaximal.innerHTML = Math.round(caloriesNormal.innerHTML * 1.15);
}

// Добавляем логику кнопки "рассчитать"

submitButton.onclick = function (e) {
    e.preventDefault();
    calculateResult();
    result.classList.remove('counter__result--hidden');
}

// Добавляем логику кнопки "очистить"

const clickResetButton = () => {
    age.value = '';
    height.value = '';
    weight.value = '';
    genderRatio = 5;
    activityRatio = 1.2;
    genderMale.checked = true;
    resetButton.disabled = true;
    submitButton.disabled = true;
    result.classList.add('counter__result--hidden');
}

resetButton.addEventListener('click', clickResetButton);