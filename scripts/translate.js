function languageSelectTranslate()
{
    let selectedLanguage = document.getElementById('selectedLanguage').value;
    localStorage.setItem('RLS_LANG',selectedLanguage)

    renderHomescreen();   
}

