
const english_text = document.getElementById('english_text');
const translated_text = document.getElementById('translated_text');
const language_option = document.getElementById('language-option');
const select_div = document.getElementById('select_div');


for (const country_code in countries) {
    language_option.innerHTML += `<option value="${country_code}" class="cursor-pointer">${countries[country_code]}</option>`;
}

const fetch_text = async () => {
    const from = 'en';
    const to = language_option.value;
    const apiUrl = `https://api.mymemory.translated.net/get?q=${english_text.value}&langpair=${from}|${to}`;
    const res = await fetch(apiUrl);
    let data = await res.json();
    data = data.responseData.translatedText;
    translated_text.value = data
};
