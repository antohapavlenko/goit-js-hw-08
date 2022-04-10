import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const FORM_KEY = "feedback-form-state";

// Долдаємо дані з форми в сховище
feedbackForm.addEventListener('input', throttle(() => {
    const formData = new FormData(feedbackForm)
    let getData = {};
    formData.forEach((value, key) =>  getData[key] = value.trim());
    localStorage.setItem(FORM_KEY, JSON.stringify(getData))
    
},500));

// Отдимуємо дані з локального сховища
const useData = JSON.parse(localStorage.getItem(FORM_KEY))
// Перетворюємо обєкт в масив та вставляємо дані в поля форми
if (useData) {
    Object.entries(useData).forEach(([key, value]) => feedbackForm.elements[key].value = value);
}

// відправляємо форму та очищюємо формі і локал сторедж
feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(useData)
    localStorage.clear()
    event.currentTarget.reset()
})

