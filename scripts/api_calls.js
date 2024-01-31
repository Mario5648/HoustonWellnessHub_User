/*
var getResourceCategoriesEndPoint = "http://127.0.0.1:5000/getResourceCategories";
var getResourceCategoryOptionsEndPoint = "http://127.0.0.1:5000/getResourceCategoryOptions";
var getResourceInformationEndPoint = "http://127.0.0.1:5000/getResourceInformation";
*/
var ERROR_FLAG = "ERROR";

var getResourceCategoriesEndPoint = "https://api-hwh.com/getResourceCategories";
var getResourceCategoryOptionsEndPoint = "https://api-hwh.com/getResourceCategoryOptions";
var getResourceInformationEndPoint = "https://api-hwh.com/getResourceInformation";


function endpointCall(endpoint=null, params={}, callBack=null)
{
    let endpointLink = identifyEndPoint(endpoint);
    const Http = new XMLHttpRequest();
    var params = JSON.stringify(params);
    Http.open( "POST", endpointLink );
    Http.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    Http.send(params);
    Http.onreadystatechange = ( e ) => 
    {
        //If the request was successful then populate everything
        if (Http.readyState == 4 && Http.status == 200) 
        {
            //parse the response from power automate to make it readable for the functions
            callBack(JSON.parse( Http.responseText ));
            
        }else
        {
            callBack(ERROR_FLAG);
        }
    }
}

function identifyEndPoint(endpoint=null)
{
    switch(endpoint)
    {
        case "getResourceCategories":
            return getResourceCategoriesEndPoint;
        case "getResourceCategoryOptions":
            return getResourceCategoryOptionsEndPoint;
        case "getResourceInformation":
            return getResourceInformationEndPoint;
    }
}