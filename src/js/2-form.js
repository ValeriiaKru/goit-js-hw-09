const formData = {
  email: '',
  message: '',
};
const form = document.querySelector('.feedback-form');
function saveToLS(key, value) {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
}

function loadFromLS(key) {
    const json = localStorage.getItem(key);

    try {
        const data = JSON.parse(json);
        return data;
    } catch (error) {
        return json;
    }
}
form.addEventListener('input', onFormInput);

function onFormInput(){
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    saveToLS('feedback-form-state', formData);
}
window.addEventListener('DOMContentLoaded', () => {
    const formData = loadFromLS('feedback-form-state');
    
    form.elements.email.value = formData?.email || '';
    form.elements.message.value = formData?.message || '';
})

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
        return;
    } else console.log(formData);

    form.reset();
    formData.email = '';
    formData.message = '';
    localStorage.removeItem('feedback-form-state');
}
