function openPage()
{
    window.open(`${linksDict['button']}`, '_self');
}

function goToTopPage() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}