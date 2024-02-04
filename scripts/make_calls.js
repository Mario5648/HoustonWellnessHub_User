function getResourceCategoriesCall(callBack = null)
{
    let params = {"translateLanguage":localStorage.getItem('RLS_LANG')};

    document.getElementById('main-container').innerHTML = LOADING_SPINNER_HTML;
    document.getElementById('translatingText').innerHTML = getTranslatingLoadingText();

    endpointCall("getResourceCategories", params, function(data)
                {
                    if(data["status"] == "success")
                    {
                        RCID = data['resourceCategoriesData'][0]
                        resourceCategoriesPageTextDict['title'] = data['resourceCategoriesData'][1]
                        resourceCategoriesPageTextDict['description'] = data['resourceCategoriesData'][2]
                        buttonOptions = JSON.parse(data['resourceCategoriesData'][3])
                        buttonOptionsEngName = JSON.parse(data['resourceCategoriesData'][data['resourceCategoriesData'].length - 1])

                        return callBack(data);
                    }else if(data["status"] == "failed")
                    {
                        alert(`Failed! ${data["message"]}`);
                        return callBack(null); 
                    }
                });
}

function getResourceCategoryOptionsCall(callBack = null)
{
    let params = { "parentResource": SELECTED_RESOURCE, "translateLanguage":localStorage.getItem('RLS_LANG') };

    document.getElementById('main-container').innerHTML = LOADING_SPINNER_HTML;

    endpointCall("getResourceCategoryOptions", params, function(data)
                {
                    if(data["status"] == "success")
                    {
                        resourceCategoriesOptionsPageTextDict['title'] = data['resourceCategoryOptionsData'][0]
                        resourceCategoriesOptionsPageTextDict['description'] = data['resourceCategoryOptionsData'][1]
                        buttonOptions = JSON.parse(data['resourceCategoryOptionsData'][2])
                        buttonOptionsEngName = JSON.parse(data['resourceCategoryOptionsData'][data['resourceCategoryOptionsData'].length - 1])

                        return callBack(data);
                    }else if(data["status"] == "failed")
                    {
                        alert(`Failed! ${data["message"]}`);
                        return callBack(null); 
                    }
                });
}

function getResourceInformationCall(callBack = null)
{
    let params = { "resource": SELECTED_RESOURCE_INFORMATION, "translateLanguage":localStorage.getItem('RLS_LANG') };

    document.getElementById('main-container').innerHTML = LOADING_SPINNER_HTML;

    endpointCall("getResourceInformation", params, function(data)
                {
                    if(data["status"] == "success")
                    {
                        resourceInformationPageTextDict['title'] = data['resourceInformationData'][0];
                        resourceInformationPageTextDict['description'] = data['resourceInformationData'][1];
                        linksDict['button'] = data['resourceInformationData'][2];
                        stepsDict['steps'] = data['resourceInformationData'][3];
                        linksDict['video'] = data['resourceInformationData'][4];
                        return callBack(data);
                    }else if(data["status"] == "failed")
                    {
                        alert(`Failed! ${data["message"]}`);
                        return callBack(null); 
                    }
                });
}

function getTranslatingLoadingText()
{
    switch(localStorage.getItem('RLS_LANG'))
    {
        case "english":
            return "Translating";
        case "spanish":
            return "Traduciendo";
        case "vietnamese":
            return "Phiên dịch";
        case "hindi":
            return "अनुवाद कर रहा हूँ";
        case "chinese (traditional)":
            return "翻译";
        default:
            return "Translating";
    }
}