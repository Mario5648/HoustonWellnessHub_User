function renderHomescreenSpanish()
{
    /* Render the home page button with all resource categories as options */
    let homeScreenHtml = `
                            <div class="menu-section">
                                <p>Language</p>
                                <select id="selectedLanguage" onchange="languageSelectTranslate()">
                                    <option value="english" ${localStorage.getItem('RLS_LANG') == "english" ? "SELECTED": ""}>English</option>
                                    <option value="spanish" ${localStorage.getItem('RLS_LANG') == "spanish" ? "SELECTED": ""}>Spanish</option>
                                </select>
                            </div>
                            <div class="description-section">
                                <p class="header-text">Recursos para Usted</p>
                                <p class="page-description-text">Bienvenido a nuestro Centro de recursos médicos, donde nos dedicamos a brindar información de atención médica accesible para todos. Ya sea que esté buscando clínicas gratuitas, asistencia con medicamentos u orientación general de salud, nuestra plataforma fácil de usar está diseñada para ayudarlo en su viaje de bienestar. Desde artículos sobre afecciones específicas hasta un directorio de servicios médicos gratuitos, nuestro objetivo es ser su fuente de recursos de atención médica confiables y gratuitos. Deje que nuestro centro sea su guía para tomar decisiones informadas en el camino hacia una vida más saludable.</p>
                            </div>
                            <br>
                            <br>
                            <div class="options-section">
                                <div class="option-button" onclick="renderResourceCategoryOptionsSpanish()"><p class="normal-text">Recursos Médicos</p></div>
                                <br>
                                <br>
                                <div class="option-button" onclick="renderResourceCategoryOptionsSpanish()"><p class="normal-text">Recursos de Transporte</p></div>
                            </div>
                         `;

    document.getElementById('main-container').innerHTML = homeScreenHtml;

}


function renderResourceCategoryOptionsSpanish()
{
    /* Render the page that shows all the resources based on the selected category */

    let resourceCategoryOptionsHtml = `
    
                                        <div class="menu-section">
                                            <a onclick="renderHomescreenSpanish()"><i class="fa fa-arrow-circle-o-left" style="font-size:30px"></i></a>
                                        </div>

                                        <div class="description-section">
                                            <p class="header-text">Recurso Seleccionado</p>
                                            <p class="page-description-text">¡Su puerta de entrada al soporte comunitario! En nuestra plataforma, estamos comprometidos a conectarlo con una variedad de recursos esenciales disponibles en el área de Houston sin ningún costo. Ya sea que esté buscando ayuda con comida, vivienda, educación u otros servicios comunitarios, nuestro directorio completo está aquí para hacer que su búsqueda sea fácil y accesible. Explore la gran cantidad de recursos gratuitos que nuestra vibrante comunidad tiene para ofrecer y deje que nuestro centro sea su guía para una vida más apoyada y empoderada en Houston.</p>
                                        </div>
                                        <br>
                                        <br>
                                        <div class="options-section">
                                            <div onclick="renderResourceInfoPageSpanish()" class="option-button"><p class="normal-text">Tarjeta Dorada (Atención Sanitaria Gratuita)</p></div>
                                            <br>
                                            <br>
                                            <div onclick="renderResourceInfoPageSpanish()" class="option-button"><p class="normal-text">Transporte Gratuito</p></div>
                                        </div>
    
                                      `;
    goToTopPage();
    document.getElementById('main-container').innerHTML = resourceCategoryOptionsHtml;

}

function renderResourceInfoPageSpanish()
{
    /* Render the page that shows all the resources based on the selected category */

    let renderResourceInfoPageHtml = `
    
                                        <div class="menu-section">
                                            <a onclick="renderResourceCategoryOptions()"><i class="fa fa-arrow-circle-o-left" style="font-size:30px"></i></a>
                                        </div>

                                        <div class="description-section">
                                            <p class="header-text">Tarjeta Dorada (Atención Sanitaria Gratuita)</p>
                                            <p class="page-description-text">El Programa de Asistencia Financiera de Harris Health (Tarjeta Dorada) es un beneficio de salud pública de Texas proporcionado por Harris Health System que brinda asistencia financiera para la atención médica a los residentes del Condado de Harris.</p>
                                            <button class="go-to-resource" onclick="openPage()"> Haga clic aquí para registrarte </button>
                                        </div>
                                        <br>
                                        <br>
                                        <div class="information-section">
                                            <div class="steps-section">
                                                <br>
                                                <p>Pasos :</p><br>
                                                <p>1. Haga clic en el botón de arriba<br><br> 2. Ingresa tus datos en el formulario</p>
                                            </div>
                                            <br><br> 
                                            <div class="video-section">
                                                <p>Video :</p><br>
                                                <iframe height="150" src="https://www.youtube.com/embed/q4slc2mKafM?si=uC0HGvwMp86UpzcU" frameborder="0" allowfullscreen></iframe>
                                            </div>
                                        </div>
    
                                      `;
    goToTopPage();
    document.getElementById('main-container').innerHTML = renderResourceInfoPageHtml;

}