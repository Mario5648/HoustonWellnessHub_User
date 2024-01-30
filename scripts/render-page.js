var buttonOptions = [];
var buttonOptionsEngName = [];
var resourceCategoriesPageTextDict = {"title": null, "description": null, "options": null};
var resourceCategoriesOptionsPageTextDict = {"title": null, "description": null, "options": null};
var resourceInformationPageTextDict = {"title": null, "description": null}

var linksDict = {"button":"", "video":""}
var stepsDict = {"steps":""}
var RCID = "" 
var SELECTED_RESOURCE = "";
var SELECTED_RESOURCE_INFORMATION = "";
var resourcePage = 1;

var LOADING_SPINNER_HTML = `
                                <div class="spinner-container">
                                    <div class="spinner"></div>
                                    <p id="translatingText"></p>
                                </div>
                            `;



function displayOptionButtons(openFunction)
{
    let buttonsHtml = ``;

    let numOfButtons = buttonOptions.length;

    for(let buttonIndex = 0; buttonIndex < numOfButtons; buttonIndex+=1)
    {
        buttonsHtml += `<br><br><div class="option-button" onclick="${openFunction}('${buttonOptionsEngName[buttonIndex]}')"><p class="normal-text">${buttonOptions[buttonIndex]}</p></div>`;
    }

    document.getElementById("options-section").innerHTML = buttonsHtml;
}

function renderHomescreen()
{
    resourcePage = 1;
    getResourceCategoriesCall(function(){

        /* Render the home page button with all resource categories as options */
        let homeScreenHtml = `
                                <div class="menu-section">
                                    <p>Language</p>
                                    <select id="selectedLanguage" onchange="languageSelectTranslate()">
                                        <option value="english" ${localStorage.getItem('RLS_LANG') == "english" ? "SELECTED": ""}>English 🇺🇸</option>
                                        <option value="spanish" ${localStorage.getItem('RLS_LANG') == "spanish" ? "SELECTED": ""}>Español 🇲🇽</option>
                                        <option value="vietnamese" ${localStorage.getItem('RLS_LANG') == "vietnamese" ? "SELECTED": ""}>tiếng Việt 🇻🇳</option>
                                        <option value="hindi" ${localStorage.getItem('RLS_LANG') == "hindi" ? "SELECTED": ""}>हिन्दी 🇮🇳</option>
                                        <option value="chinese (traditional)" ${localStorage.getItem('RLS_LANG') == "chinese (traditional)" ? "SELECTED": ""}>官话 🇨🇳</option>

                                    </select>
                                </div>
                                <div class="description-section">
                                    <p class="header-text">${resourceCategoriesPageTextDict['title']}</p>
                                    <p class="page-description-text">${resourceCategoriesPageTextDict['description']}</p>
                                </div>
                                <br>
                                <br>
                                <div id="options-section" class="options-section"></div>
                            `;

        document.getElementById('main-container').innerHTML = homeScreenHtml;
        displayOptionButtons("renderResourceCategoryOptions");

    })



}

function renderResourceCategoryOptions(selectedResource)
{
    /* Render the page that shows all the resources based on the selected category */
    resourcePage = 2;
    SELECTED_RESOURCE = selectedResource;

    getResourceCategoryOptionsCall(function(){

        /* Render the page that shows all the resources based on the selected category */

        let resourceCategoryOptionsHtml = `
                                            <div class="menu-section">
                                                <a onclick="renderHomescreen()"><i class="fa fa-arrow-circle-o-left" style="font-size:30px"></i></a>
                                            </div>

                                            <div class="description-section">
                                                <p class="header-text">${resourceCategoriesOptionsPageTextDict['title']}</p>
                                                <p class="page-description-text">${resourceCategoriesOptionsPageTextDict['description']}</p>
                                            </div>
                                            <br>
                                            <br>
                                            <div id="options-section" class="options-section"></div>

                                        `;
        goToTopPage();
        document.getElementById('main-container').innerHTML = resourceCategoryOptionsHtml;
        displayOptionButtons("renderResourceInfoPage");
    })



}

function renderResourceInfoPage(selectedResource)
{
    resourcePage = 3;
    /* Render the page that shows all the resources based on the selected category */
    SELECTED_RESOURCE_INFORMATION = selectedResource;

    getResourceInformationCall(function(){
        /* Render the page that shows all the resources based on the selected category */

        let renderResourceInfoPageHtml = `
                                            <div class="menu-section">
                                                <a onclick="renderResourceCategoryOptions('${SELECTED_RESOURCE}')"><i class="fa fa-arrow-circle-o-left" style="font-size:30px"></i></a>
                                            </div>

                                            <div class="description-section">
                                                <p class="header-text">${resourceInformationPageTextDict['title']}</p>
                                                <p class="page-description-text">${resourceInformationPageTextDict['description']}</p>
                                                <button id="resourceInfoButton" class="go-to-resource" onclick="openPage()"> ${getResourceButtonText()} </button>
                                            </div>
                                            <br>
                                            <br>
                                            <div class="information-section">
                                                <div class="steps-section">
                                                    <br>
                                                    <p>Steps :</p><br>
                                                    <p>${stepsDict['steps'].replace(/(\r\n|\r|\n)/g, '<br>')}</p>
                                                </div>
                                                <br><br> 
                                                <div class="video-section">
                                                    <p>Video :</p><br>
                                                    <iframe height="150" src=${linksDict['video']} frameborder="0" allowfullscreen></iframe>
                                                </div>
                                            </div>

                                        `;
        goToTopPage();
        document.getElementById('main-container').innerHTML = renderResourceInfoPageHtml;
    })

}


function getResourceButtonText()
{
    switch(localStorage.getItem('RLS_LANG'))
    {
        case "english":
            return "Click Here to Sign-Up";
        case "spanish":
            return "Haz clic aquí para registrarte";
        case "vietnamese":
            return "Nhấn vào đây để đăng ký";
        case "hindi":
            return "यहाँ क्लिक करें और साइन अप करें";
        case "chinese (traditional)":
            return "点击这里注册";
        default:
            return "Click Here to Sign-Up";
        
    }
}