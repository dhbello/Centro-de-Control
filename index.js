var url_backend="https://redgeodesica-cg.igac.gov.co";

if (document.querySelector(".navbarigac")) {
    const navbarigac = document.querySelector(".navbarigac");
    navbarigac.innerHTML = `
    <div class="logos">
        <div class="navbar-brand-igac">
            <a href='https://www.igac.gov.co' target='_blank'><img alt='Logo IGAC' src='../../images/logo-igac.png'/></a>
        </div>
        <div class="logoigac">
            <a href="/index.html"><img src="../../images/logo.svg" alt="Logo Origen Nacional"></a>
        </div>
    </div>
    <button class='nav-bar-toggle-igac'>
        <div class='icon-bar'></div>
        <div class='icon-bar'></div>
        <div class='icon-bar'></div>
    </button>
    <div class='navbarnavigac'>
        <li>
            <a class='inicio' href='/index.html'>Inicio</a>
        </li>
        <li>
            <a class='redes' href='/redes/red_geodesica.html'>Redes</a>
        </li>
        <li>
            <a class='recursos' href='/herramientas/servicios.html'>Recursos</a>
        </li>
        <li>
            <a class='dropdownToggle' href='#'>Acerca de</a>
            <ul class='dropDown'>
                <li><a href='/preguntas_frecuentes/index.html'>&iquest;Por qu&eacute; tener un &uacute;nico origen?</a></li>
                <li><a href='/preguntas_frecuentes/cual-es-la-proyeccion.html'>&iquest;Cu&aacute;l es la proyecci&oacute;n?</a></li>
                <li><a href='/preguntas_frecuentes/cuales-son-sus-beneficios.html'>&iquest;Cu&aacute;les son sus beneficios?</a></li>
                <li><a href='/preguntas_frecuentes/quienes-deben-adoptarlo.html'>&iquest;Qui&eacute;nes deben adoptarlo?</a></li>
                <li><a href='/preguntas_frecuentes/otras-preguntas-frecuentes.html'>Otras preguntas frecuentes</a></li>
            </ul>
        </li>
    </div>
    `
};

if (document.querySelector(".nav-underline")) {
    const navUnderline = document.querySelector(".nav-underline");
    navUnderline.innerHTML = `
    <a class='nav-link geodesica' href='/redes/red_geodesica.html'>Red Geod&eacute;sica GNSS</a>
    <a class='nav-link gavimetrica' href='/redes/red_gavimetrica.html'>Red Gravim&eacute;trica</a>
    <a class='nav-link geomagnetica' href='/redes/red_geomagnetica.html'>Red Geomagn&eacute;tica</a>
    <a class='nav-link d-none' href='/redes/red_gnss.html'>Red GNSS Magna Sirgas</a>
    <a class='nav-link d-none' href='/redes/red_vertices_nivelacion.html'>Red de V&eacute;rtices y Redes de Nivelaci&oacute;n</a>
    <a class='nav-link tablero' href='/redes/tablero_control.html'>Tablero de control</a>
    `
};

if (document.querySelector(".nav-underline.navHerramientas")) {
    const navUnderline = document.querySelector(".nav-underline");
    navUnderline.innerHTML = `
    <a class='servicios nav-link' href='servicios.html'>Servicios</a>
    <a class='aplicaciones nav-link' href='aplicaciones_herramientas.html'>Aplicaciones y Herramientas</a>
    <a class='modelos nav-link' href='modelos.html'>Modelos</a>
    <a class='datos nav-link' href='datos.html'>Datos</a>
    <a class='norma nav-link' href='normatividad.html'>Normatividad</a>
    <a class='guias nav-link' href='guias_manuales.html'>Gu&iacute;as y manuales</a>
    `
};

if (document.querySelector(".footer")) {
    const footerIgac = document.querySelector(".footer");
    footerIgac.innerHTML = `
    <div class='footer-container container'>
        <div class='row-footer'>
            <div class='bird-image'>
                <img src='../../images/pajaro_igac.svg' alt=''>
            </div>
            <div class='content-footer'>
                <div class='title'>
                    INSTITUTO GEOGRÁFICO AGUSTÍN CODAZZI
                </div>
                <div class='sub-title'>
                    Oficinas y horarios
                </div>
                <ul>
                    <li>
                        <a class='underline-none' href='tel:+6013773214'>Conmutador (1) 3773214</a>
                    </li>
                    <li>
                        E-mail: <a class='link' href='mailto:contactenos@igac.gov.co' target='_blank'>contactenos@igac.gov.co</a>
                    </li>
                    <li>
                        <a class='link' href='https://www.igac.gov.co/es/contenido/notificaciones-judiciales' target='_blank'>Notificaciones judiciales</a>
                    </li>
                    <li>
                        Carrera 30 Nº 48-51, Bogotá
                    </li>
                </ul>
                <div class='sub-title'>
                    Contáctenos
                </div>
                <ul>
                    <li>Abierto de lunes a viernes de 7:30 a.m. a 3:45 p.m. Jornada continua.</li>
                    <li>Sede Central y territorial Cundinamarca</li>
                    <li>NIT: 8999990049</li>
                    <li><a class="link" href='https://forms.office.com/Pages/ResponsePage.aspx?id=mv5J7epu5ke_Uu6ey12oBxIGmwVNvQBMvgfd4pJEsvJUOUVXTzVQOE1ESlZZRVNZQ1RMVjYzWk8yOS4u' target='_blank'>Encuesta de satisfacción y percepción portal web</a></li>
                </ul>
            </div>
            <div class='content-footer cla-a'>
                <div class='contents'>
                    <div class='sub-title'>
                        Nuestras plataformas
                    </div>
                    <a href='https://www.colombiaot.gov.co/'>Colombia OT</a>
                    <a href='https://www.colombiaenmapas.gov.co/'>Colombia en Mapas</a>
                    <a href='https://diccionario.igac.gov.co/'>Diccionario Geogr&aacute;fico</a>                
                </div>
                <div class='botonAccesoContainer'>
                    <div class='botonAcceso'>Acceso Admin</div>
                </div>
            </div>
            <div class='content-footer cla-a cla-b'>
                <div class='conatin'>
                    <div class='sub-title'>
                        Síguenos
                    </div>
                    <a href='https://co.linkedin.com/company/igac'><i class='fab fa-linkedin-in'></i><span>LinkedIn</span></a>
                    <a href='https://es-la.facebook.com/IgacColombia/'><i class='fab fa-facebook-f'></i><span>Facebook</span></a>
                    <a href='https://twitter.com/igacColombia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><i class='fab fa-twitter'></i><span>Twitter</span></a>
                    <a href='https://www.instagram.com/igaccolombia/'><i class='fab fa-instagram'></i><span>Instagram</span></a>
                </div>

            </div>
        </div>        
    </div>
    `
};

if (document.querySelector(".nav-bar-toggle-igac")) {
    const dropDownButon = document.querySelector(".nav-bar-toggle-igac");
    const dropDownMenu = document.querySelector(".navbarnavigac");
    const dropDowntoggle = document.querySelector(".dropdownToggle");
    const dropDown = document.querySelector(".dropDown");
    dropDownButon.addEventListener('click', function handleClick(event) {
        dropDownMenu.classList.toggle('expandMenu');
    });
    dropDowntoggle.addEventListener('click', function handleClick(event) {
        dropDown.classList.toggle('expandMenuDrop');
    });
}

if (document.querySelector(".main.inicio")) {
    $('a.inicio').addClass('active')
}

if (document.querySelector(".main.redes")) {
    $('a.redes').addClass('active')
}
if (document.querySelector(".main.recursos")) {
    $('a.recursos').addClass('active')
}
if (document.querySelector(".geodesicaMaestra")) {
    $('a.geodesica').addClass('active')
}
if (document.querySelector(".gavimetricaMaestra")) {
    $('a.gavimetrica').addClass('active')
}
if (document.querySelector(".geomagneticaMaestra")) {
    $('a.geomagnetica').addClass('active')
}
if (document.querySelector(".tableroMaestra")) {
    $('a.tablero').addClass('active')
}
if (document.querySelector(".serviciosMaestra")) {
    $('a.servicios').addClass('active')
}
if (document.querySelector(".normaMaestra")) {
    $('a.norma').addClass('active')
}
if (document.querySelector(".modelosMaestra")) {
    $('a.modelos').addClass('active')
}
if (document.querySelector(".datosMaestra")) {
    $('a.datos').addClass('active')
}
if (document.querySelector(".aplicacionesMaestra")) {
    $('a.aplicaciones').addClass('active')
}
if (document.querySelector(".guiasMaestra")) {
    $('a.guias').addClass('active')
}

/*reporta novedades popUp*/
if (document.querySelector(".modalButtonReportar")) {
    var modalButton = (document.querySelector(".modalButtonReportar"));
    var modalContent = innerHTML = ` 
        <div class='modal maestraModalRedes fade' id='reportarModal' tabindex='-1' role='dialog' aria-labelledby='reportarModalLabel' aria-hidden='true'>
            <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>                
                            <span aria-hidden='true'><img src='/../../images/iconos/closeIcon.svg' alt='cerrar'></span>
                        </button>
                    </div>
                    <div class='modal-body pt-4 reportaNovedades1'>
                        <div class='sumary modalSection noBorder'>
                            <div class='content'>
                                <div class="form-title mainTitle">
                                    <h2>Reporte de novedad sobre un vértice</h2>
                                </div>
                                <div class='row form-row'>
                                    <div class='text modalSection'>
                                        <p class='mb-0'>Los v&eacute;rtices (mojones, monumentos, pilastras, obeliscos o incrustaciones) que hacen parte de la red geod&eacute;sica nacional proveen datos para la ejecuci&oacute;n de proyectos en beneficio la comunidad que adelanten tanto instituciones gubernamentales como entes privados. Su preservaci&oacute;n garantiza la disponibilidad de datos en beneficio de la ciudadan&iacute;a.</p>
                                    </div>




                                <form class="container" id="needs-validation1" novalidate>


                                <div class="row">
                                <div class="col-md-6">
                                
                                <label for="inputDepartamento1">Departamento</label>
                                <select id="depto" >
                              </select>


                              </div>
                              <div class="col-md-6">
                                
                              <label for="inputMunicipio1">Municipio</label>
                                <select id="muni" >
                              </select>


                              </div>
                              </div>

 



                                <div class="row">

                                <div class="col-md-6">
                                    <label for="inputAdicional">Información adicional</label>
                                    <label class='type2' id='inputAdicionalLabel' for='inputCoordinateLatitud'>Ingrese informaci&oacute;n adicional de ubicaci&oacute;n (Vereda, construcciones cercanas, direcci&oacute;n, etc)</label>
                                    <input type="text" class="form-control" id="inputAdicional" placeholder="Información adicional" required >
                                    
                                </div>

                                <div class="col-md-6">
                                    <label for="inputVertice">Identificación del vértice o nomenclatura</label>
                                    <label class='type2' id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Ingrese identificaci&oacute;n del v&eacute;rtice o nomenclatura (siempre y cuando sea legible)&rdquo;: Campo de texto en el que se ingresa el n&uacute;mero o identificaci&oacute;n (Nomenclatura) de la placa, siempre que sea legible.</label>
                                    <input type="text" class="form-control" id="inputVertice" placeholder="Identificación del vertice" required>
                                </div>

                                </div>




                                <div class="row">

                                <div class='form-component col-md-6'>
                                <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Tipo de Novedad</label>
                                <div class='checkList'>
                                    <div class='check'>
                                        <input type='checkbox' name="Destrucción de vértice"/>
                                        <div class='label'>Destrucción de vértice</div>
                                    </div>
                                    <div class='check'>
                                        <input type='checkbox' name="Vértice sin placa"/><div class='label'>Vértice sin placa</div>
                                    </div>
                                    <div class='check'>
                                        <input type='checkbox' name="Modificación Horizonte"/><div class='label'>Modificación Horizonte</div>
                                    </div>
                                    <div class='check'>
                                        <input type='checkbox' name="Vértice inclinado"/><div class='label'>Vértice inclinado</div>
                                    </div>
                                </div>
                            </div>

                            <div class='form-component col-md-6 otraNovedadFoto'>
                            <div class='form-component'>
                                <label id='otraNovedadLabel' for='inputOtraNovedad'>Otra novedad</label>
                                <textarea style='width: 100%;' id="inputOtraNovedad"></textarea>
                                </div>
                            <div class='form-component'>
                                
                            <label for="avatar">Seleccionar una foto del vértice</label>

                            <input type="file"
                                   name="streamfile"
                                   accept="image/png, image/jpeg" class="form-control" required>

                            </div>
                        </div>

                                </div>






                                <h3>Datos personales</h3>
                                <div class="row">

                                <div class="col-md-6">
                                    <label for="inputNombre">Nombre</label>
                                    <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" required>
                                    <div class="invalid-feedback">
                                        Ingrese un nombre
                                    </div>
                                </div>

                                    <div class="col-md-6">
                                        <label for="inputCorreo">Correo electrónico</label>
                                        <input type="email" class="form-control" id="inputCorreo" placeholder="Correo electrónico" required>
                                        <div class="invalid-feedback">
                                            Ingrese un correo electrónico válido
                                        </div>
                                    </div>

                                </div>

                                <div class="row">

                                <div class="col-md-6">
                                    <label for="inputTelefono">Télefono de contacto</label>
                                    <input type="number" class="form-control" id="inputTelefono" placeholder="Teléfono de contacto" required>
                                    <div class="invalid-feedback">
                                        Ingrese un número de teléfono
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <label for="inputEmpresa">Empresa</label>
                                    <input type="text" class="form-control" id="inputEmpresa" placeholder="Empresa" required>
                                    <div class="invalid-feedback">
                                        Ingrese un nombre de empresa
                                    </div>
                                </div>

                                </div>

                                <div class="row">

                                <div class="col-md-6">
                                    <label for="inputDireccion">Dirección</label>
                                    <input type="text" class="form-control" id="inputDireccion" placeholder="Dirección" required>
                                    <div class="invalid-feedback">
                                        Ingrese una dirección
                                    </div>
                                </div>

                                <div class="col-md-6">
                                

                              <label >Departamento</label>
                              <select id="depto1" >
                          </select>

                              </div>

                                </div>

                                <div class="row">
                                <div class="col-md-6">
                                
                                <label >Departamento</label>
                                <select id="muni1" >
                              </select>


                                </div>

                                </div>



                             
                                <div class="row">
                                    <div class="col-md-6">
                                        <button class="btn btn-primary" type="submit">Enviar</button>
                                    </div>
                                </div>

                                </form>

                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    `
    $('body').append(modalContent)
}

$(document).ready(function () {
    

    var data = [{id:'05',text:'ANTIOQUIA'},
    {id:'08',text:'ATLÁNTICO'},
    {id:'11',text:'BOGOTÁ, D.C.'},
    {id:'13',text:'BOLÍVAR'},
    {id:'15',text:'BOYACÁ'},
    {id:'17',text:'CALDAS'},
    {id:'18',text:'CAQUETÁ'},
    {id:'19',text:'CAUCA'},
    {id:'20',text:'CESAR'},
    {id:'23',text:'CÓRDOBA'},
    {id:'25',text:'CUNDINAMARCA'},
    {id:'27',text:'CHOCÓ'},
    {id:'41',text:'HUILA'},
    {id:'44',text:'LA GUAJIRA'},
    {id:'47',text:'MAGDALENA'},
    {id:'50',text:'META'},
    {id:'52',text:'NARIÑO'},
    {id:'54',text:'NORTE DE SANTANDER'},
    {id:'63',text:'QUINDÍO'},
    {id:'66',text:'RISARALDA'},
    {id:'68',text:'SANTANDER'},
    {id:'70',text:'SUCRE'},
    {id:'73',text:'TOLIMA'},
    {id:'76',text:'VALLE DEL CAUCA'},
    {id:'81',text:'ARAUCA'},
    {id:'85',text:'CASANARE'},
    {id:'86',text:'PUTUMAYO'},
    {id:'88',text:'ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA'},
    {id:'91',text:'AMAZONAS'},
    {id:'94',text:'GUAINÍA'},
    {id:'95',text:'GUAVIARE'},
    {id:'97',text:'VAUPÉS'},
    {id:'99',text:'VICHADA'}    
    ];
    
    var datamuni=[{id:'05001',text:'MEDELLÍN'},
    {id:'05002',text:'ABEJORRAL'},
    {id:'05004',text:'ABRIAQUÍ'},
    {id:'05021',text:'ALEJANDRÍA'},
    {id:'05030',text:'AMAGÁ'},
    {id:'05031',text:'AMALFI'},
    {id:'05034',text:'ANDES'},
    {id:'05036',text:'ANGELÓPOLIS'},
    {id:'05038',text:'ANGOSTURA'},
    {id:'05040',text:'ANORÍ'},
    {id:'05042',text:'SANTA FÉ DE ANTIOQUIA'},
    {id:'05044',text:'ANZÁ'},
    {id:'05045',text:'APARTADÓ'},
    {id:'05051',text:'ARBOLETES'},
    {id:'05055',text:'ARGELIA'},
    {id:'05059',text:'ARMENIA'},
    {id:'05079',text:'BARBOSA'},
    {id:'05086',text:'BELMIRA'},
    {id:'05088',text:'BELLO'},
    {id:'05091',text:'BETANIA'},
    {id:'05093',text:'BETULIA'},
    {id:'05101',text:'CIUDAD BOLÍVAR'},
    {id:'05107',text:'BRICEÑO'},
    {id:'05113',text:'BURITICÁ'},
    {id:'05120',text:'CÁCERES'},
    {id:'05125',text:'CAICEDO'},
    {id:'05129',text:'CALDAS'},
    {id:'05134',text:'CAMPAMENTO'},
    {id:'05138',text:'CAÑASGORDAS'},
    {id:'05142',text:'CARACOLÍ'},
    {id:'05145',text:'CARAMANTA'},
    {id:'05147',text:'CAREPA'},
    {id:'05148',text:'EL CARMEN DE VIBORAL'},
    {id:'05150',text:'CAROLINA'},
    {id:'05154',text:'CAUCASIA'},
    {id:'05172',text:'CHIGORODÓ'},
    {id:'05190',text:'CISNEROS'},
    {id:'05197',text:'COCORNÁ'},
    {id:'05206',text:'CONCEPCIÓN'},
    {id:'05209',text:'CONCORDIA'},
    {id:'05212',text:'COPACABANA'},
    {id:'05234',text:'DABEIBA'},
    {id:'05237',text:'DONMATÍAS'},
    {id:'05240',text:'EBÉJICO'},
    {id:'05250',text:'EL BAGRE'},
    {id:'05264',text:'ENTRERRÍOS'},
    {id:'05266',text:'ENVIGADO'},
    {id:'05282',text:'FREDONIA'},
    {id:'05284',text:'FRONTINO'},
    {id:'05306',text:'GIRALDO'},
    {id:'05308',text:'GIRARDOTA'},
    {id:'05310',text:'GÓMEZ PLATA'},
    {id:'05313',text:'GRANADA'},
    {id:'05315',text:'GUADALUPE'},
    {id:'05318',text:'GUARNE'},
    {id:'05321',text:'GUATAPÉ'},
    {id:'05347',text:'HELICONIA'},
    {id:'05353',text:'HISPANIA'},
    {id:'05360',text:'ITAGÜÍ'},
    {id:'05361',text:'ITUANGO'},
    {id:'05364',text:'JARDÍN'},
    {id:'05368',text:'JERICÓ'},
    {id:'05376',text:'LA CEJA'},
    {id:'05380',text:'LA ESTRELLA'},
    {id:'05390',text:'LA PINTADA'},
    {id:'05400',text:'LA UNIÓN'},
    {id:'05411',text:'LIBORINA'},
    {id:'05425',text:'MACEO'},
    {id:'05440',text:'MARINILLA'},
    {id:'05467',text:'MONTEBELLO'},
    {id:'05475',text:'MURINDÓ'},
    {id:'05480',text:'MUTATÁ'},
    {id:'05483',text:'NARIÑO'},
    {id:'05490',text:'NECOCLÍ'},
    {id:'05495',text:'NECHÍ'},
    {id:'05501',text:'OLAYA'},
    {id:'05541',text:'PEÑOL'},
    {id:'05543',text:'PEQUE'},
    {id:'05576',text:'PUEBLORRICO'},
    {id:'05579',text:'PUERTO BERRÍO'},
    {id:'05585',text:'PUERTO NARE'},
    {id:'05591',text:'PUERTO TRIUNFO'},
    {id:'05604',text:'REMEDIOS'},
    {id:'05607',text:'RETIRO'},
    {id:'05615',text:'RIONEGRO'},
    {id:'05628',text:'SABANALARGA'},
    {id:'05631',text:'SABANETA'},
    {id:'05642',text:'SALGAR'},
    {id:'05647',text:'SAN ANDRÉS DE CUERQUÍA'},
    {id:'05649',text:'SAN CARLOS'},
    {id:'05652',text:'SAN FRANCISCO'},
    {id:'05656',text:'SAN JERÓNIMO'},
    {id:'05658',text:'SAN JOSÉ DE LA MONTAÑA'},
    {id:'05659',text:'SAN JUAN DE URABÁ'},
    {id:'05660',text:'SAN LUIS'},
    {id:'05664',text:'SAN PEDRO DE LOS MILAGROS'},
    {id:'05665',text:'SAN PEDRO DE URABÁ'},
    {id:'05667',text:'SAN RAFAEL'},
    {id:'05670',text:'SAN ROQUE'},
    {id:'05674',text:'SAN VICENTE FERRER'},
    {id:'05679',text:'SANTA BÁRBARA'},
    {id:'05686',text:'SANTA ROSA DE OSOS'},
    {id:'05690',text:'SANTO DOMINGO'},
    {id:'05697',text:'EL SANTUARIO'},
    {id:'05736',text:'SEGOVIA'},
    {id:'05756',text:'SONSÓN'},
    {id:'05761',text:'SOPETRÁN'},
    {id:'05789',text:'TÁMESIS'},
    {id:'05790',text:'TARAZÁ'},
    {id:'05792',text:'TARSO'},
    {id:'05809',text:'TITIRIBÍ'},
    {id:'05819',text:'TOLEDO'},
    {id:'05837',text:'TURBO'},
    {id:'05842',text:'URAMITA'},
    {id:'05847',text:'URRAO'},
    {id:'05854',text:'VALDIVIA'},
    {id:'05856',text:'VALPARAÍSO'},
    {id:'05858',text:'VEGACHÍ'},
    {id:'05861',text:'VENECIA'},
    {id:'05873',text:'VIGÍA DEL FUERTE'},
    {id:'05885',text:'YALÍ'},
    {id:'05887',text:'YARUMAL'},
    {id:'05890',text:'YOLOMBÓ'},
    {id:'05893',text:'YONDÓ'},
    {id:'05895',text:'ZARAGOZA'},
    {id:'08001',text:'BARRANQUILLA'},
    {id:'08078',text:'BARANOA'},
    {id:'08137',text:'CAMPO DE LA CRUZ'},
    {id:'08141',text:'CANDELARIA'},
    {id:'08296',text:'GALAPA'},
    {id:'08372',text:'JUAN DE ACOSTA'},
    {id:'08421',text:'LURUACO'},
    {id:'08433',text:'MALAMBO'},
    {id:'08436',text:'MANATÍ'},
    {id:'08520',text:'PALMAR DE VARELA'},
    {id:'08549',text:'PIOJÓ'},
    {id:'08558',text:'POLONUEVO'},
    {id:'08560',text:'PONEDERA'},
    {id:'08573',text:'PUERTO COLOMBIA'},
    {id:'08606',text:'REPELÓN'},
    {id:'08634',text:'SABANAGRANDE'},
    {id:'08638',text:'SABANALARGA'},
    {id:'08675',text:'SANTA LUCÍA'},
    {id:'08685',text:'SANTO TOMÁS'},
    {id:'08758',text:'SOLEDAD'},
    {id:'08770',text:'SUAN'},
    {id:'08832',text:'TUBARÁ'},
    {id:'08849',text:'USIACURÍ'},
    {id:'11001',text:'BOGOTÁ, D.C.'},
    {id:'13001',text:'CARTAGENA DE INDIAS'},
    {id:'13006',text:'ACHÍ'},
    {id:'13030',text:'ALTOS DEL ROSARIO'},
    {id:'13042',text:'ARENAL'},
    {id:'13052',text:'ARJONA'},
    {id:'13062',text:'ARROYOHONDO'},
    {id:'13074',text:'BARRANCO DE LOBA'},
    {id:'13140',text:'CALAMAR'},
    {id:'13160',text:'CANTAGALLO'},
    {id:'13188',text:'CICUCO'},
    {id:'13212',text:'CÓRDOBA'},
    {id:'13222',text:'CLEMENCIA'},
    {id:'13244',text:'EL CARMEN DE BOLÍVAR'},
    {id:'13248',text:'EL GUAMO'},
    {id:'13268',text:'EL PEÑÓN'},
    {id:'13300',text:'HATILLO DE LOBA'},
    {id:'13430',text:'MAGANGUÉ'},
    {id:'13433',text:'MAHATES'},
    {id:'13440',text:'MARGARITA'},
    {id:'13442',text:'MARÍA LA BAJA'},
    {id:'13458',text:'MONTECRISTO'},
    {id:'13468',text:'SANTA CRUZ DE MOMPOX'},
    {id:'13473',text:'MORALES'},
    {id:'13490',text:'NOROSÍ'},
    {id:'13549',text:'PINILLOS'},
    {id:'13580',text:'REGIDOR'},
    {id:'13600',text:'RÍO VIEJO'},
    {id:'13620',text:'SAN CRISTÓBAL'},
    {id:'13647',text:'SAN ESTANISLAO'},
    {id:'13650',text:'SAN FERNANDO'},
    {id:'13654',text:'SAN JACINTO'},
    {id:'13655',text:'SAN JACINTO DEL CAUCA'},
    {id:'13657',text:'SAN JUAN NEPOMUCENO'},
    {id:'13667',text:'SAN MARTÍN DE LOBA'},
    {id:'13670',text:'SAN PABLO'},
    {id:'13673',text:'SANTA CATALINA'},
    {id:'13683',text:'SANTA ROSA'},
    {id:'13688',text:'SANTA ROSA DEL SUR'},
    {id:'13744',text:'SIMITÍ'},
    {id:'13760',text:'SOPLAVIENTO'},
    {id:'13780',text:'TALAIGUA NUEVO'},
    {id:'13810',text:'TIQUISIO'},
    {id:'13836',text:'TURBACO'},
    {id:'13838',text:'TURBANÁ'},
    {id:'13873',text:'VILLANUEVA'},
    {id:'13894',text:'ZAMBRANO'},
    {id:'15001',text:'TUNJA'},
    {id:'15022',text:'ALMEIDA'},
    {id:'15047',text:'AQUITANIA'},
    {id:'15051',text:'ARCABUCO'},
    {id:'15087',text:'BELÉN'},
    {id:'15090',text:'BERBEO'},
    {id:'15092',text:'BETÉITIVA'},
    {id:'15097',text:'BOAVITA'},
    {id:'15104',text:'BOYACÁ'},
    {id:'15106',text:'BRICEÑO'},
    {id:'15109',text:'BUENAVISTA'},
    {id:'15114',text:'BUSBANZÁ'},
    {id:'15131',text:'CALDAS'},
    {id:'15135',text:'CAMPOHERMOSO'},
    {id:'15162',text:'CERINZA'},
    {id:'15172',text:'CHINAVITA'},
    {id:'15176',text:'CHIQUINQUIRÁ'},
    {id:'15180',text:'CHISCAS'},
    {id:'15183',text:'CHITA'},
    {id:'15185',text:'CHITARAQUE'},
    {id:'15187',text:'CHIVATÁ'},
    {id:'15189',text:'CIÉNEGA'},
    {id:'15204',text:'CÓMBITA'},
    {id:'15212',text:'COPER'},
    {id:'15215',text:'CORRALES'},
    {id:'15218',text:'COVARACHÍA'},
    {id:'15223',text:'CUBARÁ'},
    {id:'15224',text:'CUCAITA'},
    {id:'15226',text:'CUÍTIVA'},
    {id:'15232',text:'CHÍQUIZA'},
    {id:'15236',text:'CHIVOR'},
    {id:'15238',text:'DUITAMA'},
    {id:'15244',text:'EL COCUY'},
    {id:'15248',text:'EL ESPINO'},
    {id:'15272',text:'FIRAVITOBA'},
    {id:'15276',text:'FLORESTA'},
    {id:'15293',text:'GACHANTIVÁ'},
    {id:'15296',text:'GÁMEZA'},
    {id:'15299',text:'GARAGOA'},
    {id:'15317',text:'GUACAMAYAS'},
    {id:'15322',text:'GUATEQUE'},
    {id:'15325',text:'GUAYATÁ'},
    {id:'15332',text:'GÜICÁN DE LA SIERRA'},
    {id:'15362',text:'IZA'},
    {id:'15367',text:'JENESANO'},
    {id:'15368',text:'JERICÓ'},
    {id:'15377',text:'LABRANZAGRANDE'},
    {id:'15380',text:'LA CAPILLA'},
    {id:'15401',text:'LA VICTORIA'},
    {id:'15403',text:'LA UVITA'},
    {id:'15407',text:'VILLA DE LEYVA'},
    {id:'15425',text:'MACANAL'},
    {id:'15442',text:'MARIPÍ'},
    {id:'15455',text:'MIRAFLORES'},
    {id:'15464',text:'MONGUA'},
    {id:'15466',text:'MONGUÍ'},
    {id:'15469',text:'MONIQUIRÁ'},
    {id:'15476',text:'MOTAVITA'},
    {id:'15480',text:'MUZO'},
    {id:'15491',text:'NOBSA'},
    {id:'15494',text:'NUEVO COLÓN'},
    {id:'15500',text:'OICATÁ'},
    {id:'15507',text:'OTANCHE'},
    {id:'15511',text:'PACHAVITA'},
    {id:'15514',text:'PÁEZ'},
    {id:'15516',text:'PAIPA'},
    {id:'15518',text:'PAJARITO'},
    {id:'15522',text:'PANQUEBA'},
    {id:'15531',text:'PAUNA'},
    {id:'15533',text:'PAYA'},
    {id:'15537',text:'PAZ DE RÍO'},
    {id:'15542',text:'PESCA'},
    {id:'15550',text:'PISBA'},
    {id:'15572',text:'PUERTO BOYACÁ'},
    {id:'15580',text:'QUÍPAMA'},
    {id:'15599',text:'RAMIRIQUÍ'},
    {id:'15600',text:'RÁQUIRA'},
    {id:'15621',text:'RONDÓN'},
    {id:'15632',text:'SABOYÁ'},
    {id:'15638',text:'SÁCHICA'},
    {id:'15646',text:'SAMACÁ'},
    {id:'15660',text:'SAN EDUARDO'},
    {id:'15664',text:'SAN JOSÉ DE PARE'},
    {id:'15667',text:'SAN LUIS DE GACENO'},
    {id:'15673',text:'SAN MATEO'},
    {id:'15676',text:'SAN MIGUEL DE SEMA'},
    {id:'15681',text:'SAN PABLO DE BORBUR'},
    {id:'15686',text:'SANTANA'},
    {id:'15690',text:'SANTA MARÍA'},
    {id:'15693',text:'SANTA ROSA DE VITERBO'},
    {id:'15696',text:'SANTA SOFÍA'},
    {id:'15720',text:'SATIVANORTE'},
    {id:'15723',text:'SATIVASUR'},
    {id:'15740',text:'SIACHOQUE'},
    {id:'15753',text:'SOATÁ'},
    {id:'15755',text:'SOCOTÁ'},
    {id:'15757',text:'SOCHA'},
    {id:'15759',text:'SOGAMOSO'},
    {id:'15761',text:'SOMONDOCO'},
    {id:'15762',text:'SORA'},
    {id:'15763',text:'SOTAQUIRÁ'},
    {id:'15764',text:'SORACÁ'},
    {id:'15774',text:'SUSACÓN'},
    {id:'15776',text:'SUTAMARCHÁN'},
    {id:'15778',text:'SUTATENZA'},
    {id:'15790',text:'TASCO'},
    {id:'15798',text:'TENZA'},
    {id:'15804',text:'TIBANÁ'},
    {id:'15806',text:'TIBASOSA'},
    {id:'15808',text:'TINJACÁ'},
    {id:'15810',text:'TIPACOQUE'},
    {id:'15814',text:'TOCA'},
    {id:'15816',text:'TOGÜÍ'},
    {id:'15820',text:'TÓPAGA'},
    {id:'15822',text:'TOTA'},
    {id:'15832',text:'TUNUNGUÁ'},
    {id:'15835',text:'TURMEQUÉ'},
    {id:'15837',text:'TUTA'},
    {id:'15839',text:'TUTAZÁ'},
    {id:'15842',text:'ÚMBITA'},
    {id:'15861',text:'VENTAQUEMADA'},
    {id:'15879',text:'VIRACACHÁ'},
    {id:'15897',text:'ZETAQUIRA'},
    {id:'17001',text:'MANIZALES'},
    {id:'17013',text:'AGUADAS'},
    {id:'17042',text:'ANSERMA'},
    {id:'17050',text:'ARANZAZU'},
    {id:'17088',text:'BELALCÁZAR'},
    {id:'17174',text:'CHINCHINÁ'},
    {id:'17272',text:'FILADELFIA'},
    {id:'17380',text:'LA DORADA'},
    {id:'17388',text:'LA MERCED'},
    {id:'17433',text:'MANZANARES'},
    {id:'17442',text:'MARMATO'},
    {id:'17444',text:'MARQUETALIA'},
    {id:'17446',text:'MARULANDA'},
    {id:'17486',text:'NEIRA'},
    {id:'17495',text:'NORCASIA'},
    {id:'17513',text:'PÁCORA'},
    {id:'17524',text:'PALESTINA'},
    {id:'17541',text:'PENSILVANIA'},
    {id:'17614',text:'RIOSUCIO'},
    {id:'17616',text:'RISARALDA'},
    {id:'17653',text:'SALAMINA'},
    {id:'17662',text:'SAMANÁ'},
    {id:'17665',text:'SAN JOSÉ'},
    {id:'17777',text:'SUPÍA'},
    {id:'17867',text:'VICTORIA'},
    {id:'17873',text:'VILLAMARÍA'},
    {id:'17877',text:'VITERBO'},
    {id:'18001',text:'FLORENCIA'},
    {id:'18029',text:'ALBANIA'},
    {id:'18094',text:'BELÉN DE LOS ANDAQUÍES'},
    {id:'18150',text:'CARTAGENA DEL CHAIRÁ'},
    {id:'18205',text:'CURILLO'},
    {id:'18247',text:'EL DONCELLO'},
    {id:'18256',text:'EL PAUJÍL'},
    {id:'18410',text:'LA MONTAÑITA'},
    {id:'18460',text:'MILÁN'},
    {id:'18479',text:'MORELIA'},
    {id:'18592',text:'PUERTO RICO'},
    {id:'18610',text:'SAN JOSÉ DEL FRAGUA'},
    {id:'18753',text:'SAN VICENTE DEL CAGUÁN'},
    {id:'18756',text:'SOLANO'},
    {id:'18785',text:'SOLITA'},
    {id:'18860',text:'VALPARAÍSO'},
    {id:'19001',text:'POPAYÁN'},
    {id:'19022',text:'ALMAGUER'},
    {id:'19050',text:'ARGELIA'},
    {id:'19075',text:'BALBOA'},
    {id:'19100',text:'BOLÍVAR'},
    {id:'19110',text:'BUENOS AIRES'},
    {id:'19130',text:'CAJIBÍO'},
    {id:'19137',text:'CALDONO'},
    {id:'19142',text:'CALOTO'},
    {id:'19212',text:'CORINTO'},
    {id:'19256',text:'EL TAMBO'},
    {id:'19290',text:'FLORENCIA'},
    {id:'19300',text:'GUACHENÉ'},
    {id:'19318',text:'GUAPI'},
    {id:'19355',text:'INZÁ'},
    {id:'19364',text:'JAMBALÓ'},
    {id:'19392',text:'LA SIERRA'},
    {id:'19397',text:'LA VEGA'},
    {id:'19418',text:'LÓPEZ DE MICAY'},
    {id:'19450',text:'MERCADERES'},
    {id:'19455',text:'MIRANDA'},
    {id:'19473',text:'MORALES'},
    {id:'19513',text:'PADILLA'},
    {id:'19517',text:'PÁEZ'},
    {id:'19532',text:'PATÍA'},
    {id:'19533',text:'PIAMONTE'},
    {id:'19548',text:'PIENDAMÓ - TUNÍA'},
    {id:'19573',text:'PUERTO TEJADA'},
    {id:'19585',text:'PURACÉ'},
    {id:'19622',text:'ROSAS'},
    {id:'19693',text:'SAN SEBASTIÁN'},
    {id:'19698',text:'SANTANDER DE QUILICHAO'},
    {id:'19701',text:'SANTA ROSA'},
    {id:'19743',text:'SILVIA'},
    {id:'19760',text:'SOTARÁ PAISPAMBA'},
    {id:'19780',text:'SUÁREZ'},
    {id:'19785',text:'SUCRE'},
    {id:'19807',text:'TIMBÍO'},
    {id:'19809',text:'TIMBIQUÍ'},
    {id:'19821',text:'TORIBÍO'},
    {id:'19824',text:'TOTORÓ'},
    {id:'19845',text:'VILLA RICA'},
    {id:'20001',text:'VALLEDUPAR'},
    {id:'20011',text:'AGUACHICA'},
    {id:'20013',text:'AGUSTÍN CODAZZI'},
    {id:'20032',text:'ASTREA'},
    {id:'20045',text:'BECERRIL'},
    {id:'20060',text:'BOSCONIA'},
    {id:'20175',text:'CHIMICHAGUA'},
    {id:'20178',text:'CHIRIGUANÁ'},
    {id:'20228',text:'CURUMANÍ'},
    {id:'20238',text:'EL COPEY'},
    {id:'20250',text:'EL PASO'},
    {id:'20295',text:'GAMARRA'},
    {id:'20310',text:'GONZÁLEZ'},
    {id:'20383',text:'LA GLORIA'},
    {id:'20400',text:'LA JAGUA DE IBIRICO'},
    {id:'20443',text:'MANAURE BALCÓN DEL CESAR'},
    {id:'20517',text:'PAILITAS'},
    {id:'20550',text:'PELAYA'},
    {id:'20570',text:'PUEBLO BELLO'},
    {id:'20614',text:'RÍO DE ORO'},
    {id:'20621',text:'LA PAZ'},
    {id:'20710',text:'SAN ALBERTO'},
    {id:'20750',text:'SAN DIEGO'},
    {id:'20770',text:'SAN MARTÍN'},
    {id:'20787',text:'TAMALAMEQUE'},
    {id:'23001',text:'MONTERÍA'},
    {id:'23068',text:'AYAPEL'},
    {id:'23079',text:'BUENAVISTA'},
    {id:'23090',text:'CANALETE'},
    {id:'23162',text:'CERETÉ'},
    {id:'23168',text:'CHIMÁ'},
    {id:'23182',text:'CHINÚ'},
    {id:'23189',text:'CIÉNAGA DE ORO'},
    {id:'23300',text:'COTORRA'},
    {id:'23350',text:'LA APARTADA'},
    {id:'23417',text:'LORICA'},
    {id:'23419',text:'LOS CÓRDOBAS'},
    {id:'23464',text:'MOMIL'},
    {id:'23466',text:'MONTELÍBANO'},
    {id:'23500',text:'MOÑITOS'},
    {id:'23555',text:'PLANETA RICA'},
    {id:'23570',text:'PUEBLO NUEVO'},
    {id:'23574',text:'PUERTO ESCONDIDO'},
    {id:'23580',text:'PUERTO LIBERTADOR'},
    {id:'23586',text:'PURÍSIMA DE LA CONCEPCIÓN'},
    {id:'23660',text:'SAHAGÚN'},
    {id:'23670',text:'SAN ANDRÉS DE SOTAVENTO'},
    {id:'23672',text:'SAN ANTERO'},
    {id:'23675',text:'SAN BERNARDO DEL VIENTO'},
    {id:'23678',text:'SAN CARLOS'},
    {id:'23682',text:'SAN JOSÉ DE URÉ'},
    {id:'23686',text:'SAN PELAYO'},
    {id:'23807',text:'TIERRALTA'},
    {id:'23815',text:'TUCHÍN'},
    {id:'23855',text:'VALENCIA'},
    {id:'25001',text:'AGUA DE DIOS'},
    {id:'25019',text:'ALBÁN'},
    {id:'25035',text:'ANAPOIMA'},
    {id:'25040',text:'ANOLAIMA'},
    {id:'25053',text:'ARBELÁEZ'},
    {id:'25086',text:'BELTRÁN'},
    {id:'25095',text:'BITUIMA'},
    {id:'25099',text:'BOJACÁ'},
    {id:'25120',text:'CABRERA'},
    {id:'25123',text:'CACHIPAY'},
    {id:'25126',text:'CAJICÁ'},
    {id:'25148',text:'CAPARRAPÍ'},
    {id:'25151',text:'CÁQUEZA'},
    {id:'25154',text:'CARMEN DE CARUPA'},
    {id:'25168',text:'CHAGUANÍ'},
    {id:'25175',text:'CHÍA'},
    {id:'25178',text:'CHIPAQUE'},
    {id:'25181',text:'CHOACHÍ'},
    {id:'25183',text:'CHOCONTÁ'},
    {id:'25200',text:'COGUA'},
    {id:'25214',text:'COTA'},
    {id:'25224',text:'CUCUNUBÁ'},
    {id:'25245',text:'EL COLEGIO'},
    {id:'25258',text:'EL PEÑÓN'},
    {id:'25260',text:'EL ROSAL'},
    {id:'25269',text:'FACATATIVÁ'},
    {id:'25279',text:'FÓMEQUE'},
    {id:'25281',text:'FOSCA'},
    {id:'25286',text:'FUNZA'},
    {id:'25288',text:'FÚQUENE'},
    {id:'25290',text:'FUSAGASUGÁ'},
    {id:'25293',text:'GACHALÁ'},
    {id:'25295',text:'GACHANCIPÁ'},
    {id:'25297',text:'GACHETÁ'},
    {id:'25299',text:'GAMA'},
    {id:'25307',text:'GIRARDOT'},
    {id:'25312',text:'GRANADA'},
    {id:'25317',text:'GUACHETÁ'},
    {id:'25320',text:'GUADUAS'},
    {id:'25322',text:'GUASCA'},
    {id:'25324',text:'GUATAQUÍ'},
    {id:'25326',text:'GUATAVITA'},
    {id:'25328',text:'GUAYABAL DE SÍQUIMA'},
    {id:'25335',text:'GUAYABETAL'},
    {id:'25339',text:'GUTIÉRREZ'},
    {id:'25368',text:'JERUSALÉN'},
    {id:'25372',text:'JUNÍN'},
    {id:'25377',text:'LA CALERA'},
    {id:'25386',text:'LA MESA'},
    {id:'25394',text:'LA PALMA'},
    {id:'25398',text:'LA PEÑA'},
    {id:'25402',text:'LA VEGA'},
    {id:'25407',text:'LENGUAZAQUE'},
    {id:'25426',text:'MACHETÁ'},
    {id:'25430',text:'MADRID'},
    {id:'25436',text:'MANTA'},
    {id:'25438',text:'MEDINA'},
    {id:'25473',text:'MOSQUERA'},
    {id:'25483',text:'NARIÑO'},
    {id:'25486',text:'NEMOCÓN'},
    {id:'25488',text:'NILO'},
    {id:'25489',text:'NIMAIMA'},
    {id:'25491',text:'NOCAIMA'},
    {id:'25506',text:'VENECIA'},
    {id:'25513',text:'PACHO'},
    {id:'25518',text:'PAIME'},
    {id:'25524',text:'PANDI'},
    {id:'25530',text:'PARATEBUENO'},
    {id:'25535',text:'PASCA'},
    {id:'25572',text:'PUERTO SALGAR'},
    {id:'25580',text:'PULÍ'},
    {id:'25592',text:'QUEBRADANEGRA'},
    {id:'25594',text:'QUETAME'},
    {id:'25596',text:'QUIPILE'},
    {id:'25599',text:'APULO'},
    {id:'25612',text:'RICAURTE'},
    {id:'25645',text:'SAN ANTONIO DEL TEQUENDAMA'},
    {id:'25649',text:'SAN BERNARDO'},
    {id:'25653',text:'SAN CAYETANO'},
    {id:'25658',text:'SAN FRANCISCO'},
    {id:'25662',text:'SAN JUAN DE RIOSECO'},
    {id:'25718',text:'SASAIMA'},
    {id:'25736',text:'SESQUILÉ'},
    {id:'25740',text:'SIBATÉ'},
    {id:'25743',text:'SILVANIA'},
    {id:'25745',text:'SIMIJACA'},
    {id:'25754',text:'SOACHA'},
    {id:'25758',text:'SOPÓ'},
    {id:'25769',text:'SUBACHOQUE'},
    {id:'25772',text:'SUESCA'},
    {id:'25777',text:'SUPATÁ'},
    {id:'25779',text:'SUSA'},
    {id:'25781',text:'SUTATAUSA'},
    {id:'25785',text:'TABIO'},
    {id:'25793',text:'TAUSA'},
    {id:'25797',text:'TENA'},
    {id:'25799',text:'TENJO'},
    {id:'25805',text:'TIBACUY'},
    {id:'25807',text:'TIBIRITA'},
    {id:'25815',text:'TOCAIMA'},
    {id:'25817',text:'TOCANCIPÁ'},
    {id:'25823',text:'TOPAIPÍ'},
    {id:'25839',text:'UBALÁ'},
    {id:'25841',text:'UBAQUE'},
    {id:'25843',text:'VILLA DE SAN DIEGO DE UBATÉ'},
    {id:'25845',text:'UNE'},
    {id:'25851',text:'ÚTICA'},
    {id:'25862',text:'VERGARA'},
    {id:'25867',text:'VIANÍ'},
    {id:'25871',text:'VILLAGÓMEZ'},
    {id:'25873',text:'VILLAPINZÓN'},
    {id:'25875',text:'VILLETA'},
    {id:'25878',text:'VIOTÁ'},
    {id:'25885',text:'YACOPÍ'},
    {id:'25898',text:'ZIPACÓN'},
    {id:'25899',text:'ZIPAQUIRÁ'},
    {id:'27001',text:'QUIBDÓ'},
    {id:'27006',text:'ACANDÍ'},
    {id:'27025',text:'ALTO BAUDÓ'},
    {id:'27050',text:'ATRATO'},
    {id:'27073',text:'BAGADÓ'},
    {id:'27075',text:'BAHÍA SOLANO'},
    {id:'27077',text:'BAJO BAUDÓ'},
    {id:'27099',text:'BOJAYÁ'},
    {id:'27135',text:'EL CANTÓN DEL SAN PABLO'},
    {id:'27150',text:'CARMEN DEL DARIÉN'},
    {id:'27160',text:'CÉRTEGUI'},
    {id:'27205',text:'CONDOTO'},
    {id:'27245',text:'EL CARMEN DE ATRATO'},
    {id:'27250',text:'EL LITORAL DEL SAN JUAN'},
    {id:'27361',text:'ISTMINA'},
    {id:'27372',text:'JURADÓ'},
    {id:'27413',text:'LLORÓ'},
    {id:'27425',text:'MEDIO ATRATO'},
    {id:'27430',text:'MEDIO BAUDÓ'},
    {id:'27450',text:'MEDIO SAN JUAN'},
    {id:'27491',text:'NÓVITA'},
    {id:'27495',text:'NUQUÍ'},
    {id:'27580',text:'RÍO IRÓ'},
    {id:'27600',text:'RÍO QUITO'},
    {id:'27615',text:'RIOSUCIO'},
    {id:'27660',text:'SAN JOSÉ DEL PALMAR'},
    {id:'27745',text:'SIPÍ'},
    {id:'27787',text:'TADÓ'},
    {id:'27800',text:'UNGUÍA'},
    {id:'27810',text:'UNIÓN PANAMERICANA'},
    {id:'41001',text:'NEIVA'},
    {id:'41006',text:'ACEVEDO'},
    {id:'41013',text:'AGRADO'},
    {id:'41016',text:'AIPE'},
    {id:'41020',text:'ALGECIRAS'},
    {id:'41026',text:'ALTAMIRA'},
    {id:'41078',text:'BARAYA'},
    {id:'41132',text:'CAMPOALEGRE'},
    {id:'41206',text:'COLOMBIA'},
    {id:'41244',text:'ELÍAS'},
    {id:'41298',text:'GARZÓN'},
    {id:'41306',text:'GIGANTE'},
    {id:'41319',text:'GUADALUPE'},
    {id:'41349',text:'HOBO'},
    {id:'41357',text:'ÍQUIRA'},
    {id:'41359',text:'ISNOS'},
    {id:'41378',text:'LA ARGENTINA'},
    {id:'41396',text:'LA PLATA'},
    {id:'41483',text:'NÁTAGA'},
    {id:'41503',text:'OPORAPA'},
    {id:'41518',text:'PAICOL'},
    {id:'41524',text:'PALERMO'},
    {id:'41530',text:'PALESTINA'},
    {id:'41548',text:'PITAL'},
    {id:'41551',text:'PITALITO'},
    {id:'41615',text:'RIVERA'},
    {id:'41660',text:'SALADOBLANCO'},
    {id:'41668',text:'SAN AGUSTÍN'},
    {id:'41676',text:'SANTA MARÍA'},
    {id:'41770',text:'SUAZA'},
    {id:'41791',text:'TARQUI'},
    {id:'41797',text:'TESALIA'},
    {id:'41799',text:'TELLO'},
    {id:'41801',text:'TERUEL'},
    {id:'41807',text:'TIMANÁ'},
    {id:'41872',text:'VILLAVIEJA'},
    {id:'41885',text:'YAGUARÁ'},
    {id:'44001',text:'RIOHACHA'},
    {id:'44035',text:'ALBANIA'},
    {id:'44078',text:'BARRANCAS'},
    {id:'44090',text:'DIBULLA'},
    {id:'44098',text:'DISTRACCIÓN'},
    {id:'44110',text:'EL MOLINO'},
    {id:'44279',text:'FONSECA'},
    {id:'44378',text:'HATONUEVO'},
    {id:'44420',text:'LA JAGUA DEL PILAR'},
    {id:'44430',text:'MAICAO'},
    {id:'44560',text:'MANAURE'},
    {id:'44650',text:'SAN JUAN DEL CESAR'},
    {id:'44847',text:'URIBIA'},
    {id:'44855',text:'URUMITA'},
    {id:'44874',text:'VILLANUEVA'},
    {id:'47001',text:'SANTA MARTA'},
    {id:'47030',text:'ALGARROBO'},
    {id:'47053',text:'ARACATACA'},
    {id:'47058',text:'ARIGUANÍ'},
    {id:'47161',text:'CERRO DE SAN ANTONIO'},
    {id:'47170',text:'CHIVOLO'},
    {id:'47189',text:'CIÉNAGA'},
    {id:'47205',text:'CONCORDIA'},
    {id:'47245',text:'EL BANCO'},
    {id:'47258',text:'EL PIÑÓN'},
    {id:'47268',text:'EL RETÉN'},
    {id:'47288',text:'FUNDACIÓN'},
    {id:'47318',text:'GUAMAL'},
    {id:'47460',text:'NUEVA GRANADA'},
    {id:'47541',text:'PEDRAZA'},
    {id:'47545',text:'PIJIÑO DEL CARMEN'},
    {id:'47551',text:'PIVIJAY'},
    {id:'47555',text:'PLATO'},
    {id:'47570',text:'PUEBLOVIEJO'},
    {id:'47605',text:'REMOLINO'},
    {id:'47660',text:'SABANAS DE SAN ÁNGEL'},
    {id:'47675',text:'SALAMINA'},
    {id:'47692',text:'SAN SEBASTIÁN DE BUENAVISTA'},
    {id:'47703',text:'SAN ZENÓN'},
    {id:'47707',text:'SANTA ANA'},
    {id:'47720',text:'SANTA BÁRBARA DE PINTO'},
    {id:'47745',text:'SITIONUEVO'},
    {id:'47798',text:'TENERIFE'},
    {id:'47960',text:'ZAPAYÁN'},
    {id:'47980',text:'ZONA BANANERA'},
    {id:'50001',text:'VILLAVICENCIO'},
    {id:'50006',text:'ACACÍAS'},
    {id:'50110',text:'BARRANCA DE UPÍA'},
    {id:'50124',text:'CABUYARO'},
    {id:'50150',text:'CASTILLA LA NUEVA'},
    {id:'50223',text:'CUBARRAL'},
    {id:'50226',text:'CUMARAL'},
    {id:'50245',text:'EL CALVARIO'},
    {id:'50251',text:'EL CASTILLO'},
    {id:'50270',text:'EL DORADO'},
    {id:'50287',text:'FUENTE DE ORO'},
    {id:'50313',text:'GRANADA'},
    {id:'50318',text:'GUAMAL'},
    {id:'50325',text:'MAPIRIPÁN'},
    {id:'50330',text:'MESETAS'},
    {id:'50350',text:'LA MACARENA'},
    {id:'50370',text:'URIBE'},
    {id:'50400',text:'LEJANÍAS'},
    {id:'50450',text:'PUERTO CONCORDIA'},
    {id:'50568',text:'PUERTO GAITÁN'},
    {id:'50573',text:'PUERTO LÓPEZ'},
    {id:'50577',text:'PUERTO LLERAS'},
    {id:'50590',text:'PUERTO RICO'},
    {id:'50606',text:'RESTREPO'},
    {id:'50680',text:'SAN CARLOS DE GUAROA'},
    {id:'50683',text:'SAN JUAN DE ARAMA'},
    {id:'50686',text:'SAN JUANITO'},
    {id:'50689',text:'SAN MARTÍN'},
    {id:'50711',text:'VISTAHERMOSA'},
    {id:'52001',text:'PASTO'},
    {id:'52019',text:'ALBÁN'},
    {id:'52022',text:'ALDANA'},
    {id:'52036',text:'ANCUYA'},
    {id:'52051',text:'ARBOLEDA'},
    {id:'52079',text:'BARBACOAS'},
    {id:'52083',text:'BELÉN'},
    {id:'52110',text:'BUESACO'},
    {id:'52203',text:'COLÓN'},
    {id:'52207',text:'CONSACÁ'},
    {id:'52210',text:'CONTADERO'},
    {id:'52215',text:'CÓRDOBA'},
    {id:'52224',text:'CUASPUD CARLOSAMA'},
    {id:'52227',text:'CUMBAL'},
    {id:'52233',text:'CUMBITARA'},
    {id:'52240',text:'CHACHAGÜÍ'},
    {id:'52250',text:'EL CHARCO'},
    {id:'52254',text:'EL PEÑOL'},
    {id:'52256',text:'EL ROSARIO'},
    {id:'52258',text:'EL TABLÓN DE GÓMEZ'},
    {id:'52260',text:'EL TAMBO'},
    {id:'52287',text:'FUNES'},
    {id:'52317',text:'GUACHUCAL'},
    {id:'52320',text:'GUAITARILLA'},
    {id:'52323',text:'GUALMATÁN'},
    {id:'52352',text:'ILES'},
    {id:'52354',text:'IMUÉS'},
    {id:'52356',text:'IPIALES'},
    {id:'52378',text:'LA CRUZ'},
    {id:'52381',text:'LA FLORIDA'},
    {id:'52385',text:'LA LLANADA'},
    {id:'52390',text:'LA TOLA'},
    {id:'52399',text:'LA UNIÓN'},
    {id:'52405',text:'LEIVA'},
    {id:'52411',text:'LINARES'},
    {id:'52418',text:'LOS ANDES'},
    {id:'52427',text:'MAGÜÍ'},
    {id:'52435',text:'MALLAMA'},
    {id:'52473',text:'MOSQUERA'},
    {id:'52480',text:'NARIÑO'},
    {id:'52490',text:'OLAYA HERRERA'},
    {id:'52506',text:'OSPINA'},
    {id:'52520',text:'FRANCISCO PIZARRO'},
    {id:'52540',text:'POLICARPA'},
    {id:'52560',text:'POTOSÍ'},
    {id:'52565',text:'PROVIDENCIA'},
    {id:'52573',text:'PUERRES'},
    {id:'52585',text:'PUPIALES'},
    {id:'52612',text:'RICAURTE'},
    {id:'52621',text:'ROBERTO PAYÁN'},
    {id:'52678',text:'SAMANIEGO'},
    {id:'52683',text:'SANDONÁ'},
    {id:'52685',text:'SAN BERNARDO'},
    {id:'52687',text:'SAN LORENZO'},
    {id:'52693',text:'SAN PABLO'},
    {id:'52694',text:'SAN PEDRO DE CARTAGO'},
    {id:'52696',text:'SANTA BÁRBARA'},
    {id:'52699',text:'SANTACRUZ'},
    {id:'52720',text:'SAPUYES'},
    {id:'52786',text:'TAMINANGO'},
    {id:'52788',text:'TANGUA'},
    {id:'52835',text:'SAN ANDRÉS DE TUMACO'},
    {id:'52838',text:'TÚQUERRES'},
    {id:'52885',text:'YACUANQUER'},
    {id:'54001',text:'SAN JOSÉ DE CÚCUTA'},
    {id:'54003',text:'ÁBREGO'},
    {id:'54051',text:'ARBOLEDAS'},
    {id:'54099',text:'BOCHALEMA'},
    {id:'54109',text:'BUCARASICA'},
    {id:'54125',text:'CÁCOTA'},
    {id:'54128',text:'CÁCHIRA'},
    {id:'54172',text:'CHINÁCOTA'},
    {id:'54174',text:'CHITAGÁ'},
    {id:'54206',text:'CONVENCIÓN'},
    {id:'54223',text:'CUCUTILLA'},
    {id:'54239',text:'DURANIA'},
    {id:'54245',text:'EL CARMEN'},
    {id:'54250',text:'EL TARRA'},
    {id:'54261',text:'EL ZULIA'},
    {id:'54313',text:'GRAMALOTE'},
    {id:'54344',text:'HACARÍ'},
    {id:'54347',text:'HERRÁN'},
    {id:'54377',text:'LABATECA'},
    {id:'54385',text:'LA ESPERANZA'},
    {id:'54398',text:'LA PLAYA'},
    {id:'54405',text:'LOS PATIOS'},
    {id:'54418',text:'LOURDES'},
    {id:'54480',text:'MUTISCUA'},
    {id:'54498',text:'OCAÑA'},
    {id:'54518',text:'PAMPLONA'},
    {id:'54520',text:'PAMPLONITA'},
    {id:'54553',text:'PUERTO SANTANDER'},
    {id:'54599',text:'RAGONVALIA'},
    {id:'54660',text:'SALAZAR'},
    {id:'54670',text:'SAN CALIXTO'},
    {id:'54673',text:'SAN CAYETANO'},
    {id:'54680',text:'SANTIAGO'},
    {id:'54720',text:'SARDINATA'},
    {id:'54743',text:'SILOS'},
    {id:'54800',text:'TEORAMA'},
    {id:'54810',text:'TIBÚ'},
    {id:'54820',text:'TOLEDO'},
    {id:'54871',text:'VILLA CARO'},
    {id:'54874',text:'VILLA DEL ROSARIO'},
    {id:'63001',text:'ARMENIA'},
    {id:'63111',text:'BUENAVISTA'},
    {id:'63130',text:'CALARCÁ'},
    {id:'63190',text:'CIRCASIA'},
    {id:'63212',text:'CÓRDOBA'},
    {id:'63272',text:'FILANDIA'},
    {id:'63302',text:'GÉNOVA'},
    {id:'63401',text:'LA TEBAIDA'},
    {id:'63470',text:'MONTENEGRO'},
    {id:'63548',text:'PIJAO'},
    {id:'63594',text:'QUIMBAYA'},
    {id:'63690',text:'SALENTO'},
    {id:'66001',text:'PEREIRA'},
    {id:'66045',text:'APÍA'},
    {id:'66075',text:'BALBOA'},
    {id:'66088',text:'BELÉN DE UMBRÍA'},
    {id:'66170',text:'DOSQUEBRADAS'},
    {id:'66318',text:'GUÁTICA'},
    {id:'66383',text:'LA CELIA'},
    {id:'66400',text:'LA VIRGINIA'},
    {id:'66440',text:'MARSELLA'},
    {id:'66456',text:'MISTRATÓ'},
    {id:'66572',text:'PUEBLO RICO'},
    {id:'66594',text:'QUINCHÍA'},
    {id:'66682',text:'SANTA ROSA DE CABAL'},
    {id:'66687',text:'SANTUARIO'},
    {id:'68001',text:'BUCARAMANGA'},
    {id:'68013',text:'AGUADA'},
    {id:'68020',text:'ALBANIA'},
    {id:'68051',text:'ARATOCA'},
    {id:'68077',text:'BARBOSA'},
    {id:'68079',text:'BARICHARA'},
    {id:'68081',text:'BARRANCABERMEJA'},
    {id:'68092',text:'BETULIA'},
    {id:'68101',text:'BOLÍVAR'},
    {id:'68121',text:'CABRERA'},
    {id:'68132',text:'CALIFORNIA'},
    {id:'68147',text:'CAPITANEJO'},
    {id:'68152',text:'CARCASÍ'},
    {id:'68160',text:'CEPITÁ'},
    {id:'68162',text:'CERRITO'},
    {id:'68167',text:'CHARALÁ'},
    {id:'68169',text:'CHARTA'},
    {id:'68176',text:'CHIMA'},
    {id:'68179',text:'CHIPATÁ'},
    {id:'68190',text:'CIMITARRA'},
    {id:'68207',text:'CONCEPCIÓN'},
    {id:'68209',text:'CONFINES'},
    {id:'68211',text:'CONTRATACIÓN'},
    {id:'68217',text:'COROMORO'},
    {id:'68229',text:'CURITÍ'},
    {id:'68235',text:'EL CARMEN DE CHUCURÍ'},
    {id:'68245',text:'EL GUACAMAYO'},
    {id:'68250',text:'EL PEÑÓN'},
    {id:'68255',text:'EL PLAYÓN'},
    {id:'68264',text:'ENCINO'},
    {id:'68266',text:'ENCISO'},
    {id:'68271',text:'FLORIÁN'},
    {id:'68276',text:'FLORIDABLANCA'},
    {id:'68296',text:'GALÁN'},
    {id:'68298',text:'GÁMBITA'},
    {id:'68307',text:'GIRÓN'},
    {id:'68318',text:'GUACA'},
    {id:'68320',text:'GUADALUPE'},
    {id:'68322',text:'GUAPOTÁ'},
    {id:'68324',text:'GUAVATÁ'},
    {id:'68327',text:'GÜEPSA'},
    {id:'68344',text:'HATO'},
    {id:'68368',text:'JESÚS MARÍA'},
    {id:'68370',text:'JORDÁN'},
    {id:'68377',text:'LA BELLEZA'},
    {id:'68385',text:'LANDÁZURI'},
    {id:'68397',text:'LA PAZ'},
    {id:'68406',text:'LEBRIJA'},
    {id:'68418',text:'LOS SANTOS'},
    {id:'68425',text:'MACARAVITA'},
    {id:'68432',text:'MÁLAGA'},
    {id:'68444',text:'MATANZA'},
    {id:'68464',text:'MOGOTES'},
    {id:'68468',text:'MOLAGAVITA'},
    {id:'68498',text:'OCAMONTE'},
    {id:'68500',text:'OIBA'},
    {id:'68502',text:'ONZAGA'},
    {id:'68522',text:'PALMAR'},
    {id:'68524',text:'PALMAS DEL SOCORRO'},
    {id:'68533',text:'PÁRAMO'},
    {id:'68547',text:'PIEDECUESTA'},
    {id:'68549',text:'PINCHOTE'},
    {id:'68572',text:'PUENTE NACIONAL'},
    {id:'68573',text:'PUERTO PARRA'},
    {id:'68575',text:'PUERTO WILCHES'},
    {id:'68615',text:'RIONEGRO'},
    {id:'68655',text:'SABANA DE TORRES'},
    {id:'68669',text:'SAN ANDRÉS'},
    {id:'68673',text:'SAN BENITO'},
    {id:'68679',text:'SAN GIL'},
    {id:'68682',text:'SAN JOAQUÍN'},
    {id:'68684',text:'SAN JOSÉ DE MIRANDA'},
    {id:'68686',text:'SAN MIGUEL'},
    {id:'68689',text:'SAN VICENTE DE CHUCURÍ'},
    {id:'68705',text:'SANTA BÁRBARA'},
    {id:'68720',text:'SANTA HELENA DEL OPÓN'},
    {id:'68745',text:'SIMACOTA'},
    {id:'68755',text:'SOCORRO'},
    {id:'68770',text:'SUAITA'},
    {id:'68773',text:'SUCRE'},
    {id:'68780',text:'SURATÁ'},
    {id:'68820',text:'TONA'},
    {id:'68855',text:'VALLE DE SAN JOSÉ'},
    {id:'68861',text:'VÉLEZ'},
    {id:'68867',text:'VETAS'},
    {id:'68872',text:'VILLANUEVA'},
    {id:'68895',text:'ZAPATOCA'},
    {id:'70001',text:'SINCELEJO'},
    {id:'70110',text:'BUENAVISTA'},
    {id:'70124',text:'CAIMITO'},
    {id:'70204',text:'COLOSÓ'},
    {id:'70215',text:'COROZAL'},
    {id:'70221',text:'COVEÑAS'},
    {id:'70230',text:'CHALÁN'},
    {id:'70233',text:'EL ROBLE'},
    {id:'70235',text:'GALERAS'},
    {id:'70265',text:'GUARANDA'},
    {id:'70400',text:'LA UNIÓN'},
    {id:'70418',text:'LOS PALMITOS'},
    {id:'70429',text:'MAJAGUAL'},
    {id:'70473',text:'MORROA'},
    {id:'70508',text:'OVEJAS'},
    {id:'70523',text:'PALMITO'},
    {id:'70670',text:'SAMPUÉS'},
    {id:'70678',text:'SAN BENITO ABAD'},
    {id:'70702',text:'SAN JUAN DE BETULIA'},
    {id:'70708',text:'SAN MARCOS'},
    {id:'70713',text:'SAN ONOFRE'},
    {id:'70717',text:'SAN PEDRO'},
    {id:'70742',text:'SAN LUIS DE SINCÉ'},
    {id:'70771',text:'SUCRE'},
    {id:'70820',text:'SANTIAGO DE TOLÚ'},
    {id:'70823',text:'SAN JOSÉ DE TOLUVIEJO'},
    {id:'73001',text:'IBAGUÉ'},
    {id:'73024',text:'ALPUJARRA'},
    {id:'73026',text:'ALVARADO'},
    {id:'73030',text:'AMBALEMA'},
    {id:'73043',text:'ANZOÁTEGUI'},
    {id:'73055',text:'ARMERO'},
    {id:'73067',text:'ATACO'},
    {id:'73124',text:'CAJAMARCA'},
    {id:'73148',text:'CARMEN DE APICALÁ'},
    {id:'73152',text:'CASABIANCA'},
    {id:'73168',text:'CHAPARRAL'},
    {id:'73200',text:'COELLO'},
    {id:'73217',text:'COYAIMA'},
    {id:'73226',text:'CUNDAY'},
    {id:'73236',text:'DOLORES'},
    {id:'73268',text:'ESPINAL'},
    {id:'73270',text:'FALAN'},
    {id:'73275',text:'FLANDES'},
    {id:'73283',text:'FRESNO'},
    {id:'73319',text:'GUAMO'},
    {id:'73347',text:'HERVEO'},
    {id:'73349',text:'HONDA'},
    {id:'73352',text:'ICONONZO'},
    {id:'73408',text:'LÉRIDA'},
    {id:'73411',text:'LÍBANO'},
    {id:'73443',text:'SAN SEBASTIÁN DE MARIQUITA'},
    {id:'73449',text:'MELGAR'},
    {id:'73461',text:'MURILLO'},
    {id:'73483',text:'NATAGAIMA'},
    {id:'73504',text:'ORTEGA'},
    {id:'73520',text:'PALOCABILDO'},
    {id:'73547',text:'PIEDRAS'},
    {id:'73555',text:'PLANADAS'},
    {id:'73563',text:'PRADO'},
    {id:'73585',text:'PURIFICACIÓN'},
    {id:'73616',text:'RIOBLANCO'},
    {id:'73622',text:'RONCESVALLES'},
    {id:'73624',text:'ROVIRA'},
    {id:'73671',text:'SALDAÑA'},
    {id:'73675',text:'SAN ANTONIO'},
    {id:'73678',text:'SAN LUIS'},
    {id:'73686',text:'SANTA ISABEL'},
    {id:'73770',text:'SUÁREZ'},
    {id:'73854',text:'VALLE DE SAN JUAN'},
    {id:'73861',text:'VENADILLO'},
    {id:'73870',text:'VILLAHERMOSA'},
    {id:'73873',text:'VILLARRICA'},
    {id:'76001',text:'CALI'},
    {id:'76020',text:'ALCALÁ'},
    {id:'76036',text:'ANDALUCÍA'},
    {id:'76041',text:'ANSERMANUEVO'},
    {id:'76054',text:'ARGELIA'},
    {id:'76100',text:'BOLÍVAR'},
    {id:'76109',text:'BUENAVENTURA'},
    {id:'76111',text:'GUADALAJARA DE BUGA'},
    {id:'76113',text:'BUGALAGRANDE'},
    {id:'76122',text:'CAICEDONIA'},
    {id:'76126',text:'CALIMA'},
    {id:'76130',text:'CANDELARIA'},
    {id:'76147',text:'CARTAGO'},
    {id:'76233',text:'DAGUA'},
    {id:'76243',text:'EL ÁGUILA'},
    {id:'76246',text:'EL CAIRO'},
    {id:'76248',text:'EL CERRITO'},
    {id:'76250',text:'EL DOVIO'},
    {id:'76275',text:'FLORIDA'},
    {id:'76306',text:'GINEBRA'},
    {id:'76318',text:'GUACARÍ'},
    {id:'76364',text:'JAMUNDÍ'},
    {id:'76377',text:'LA CUMBRE'},
    {id:'76400',text:'LA UNIÓN'},
    {id:'76403',text:'LA VICTORIA'},
    {id:'76497',text:'OBANDO'},
    {id:'76520',text:'PALMIRA'},
    {id:'76563',text:'PRADERA'},
    {id:'76606',text:'RESTREPO'},
    {id:'76616',text:'RIOFRÍO'},
    {id:'76622',text:'ROLDANILLO'},
    {id:'76670',text:'SAN PEDRO'},
    {id:'76736',text:'SEVILLA'},
    {id:'76823',text:'TORO'},
    {id:'76828',text:'TRUJILLO'},
    {id:'76834',text:'TULUÁ'},
    {id:'76845',text:'ULLOA'},
    {id:'76863',text:'VERSALLES'},
    {id:'76869',text:'VIJES'},
    {id:'76890',text:'YOTOCO'},
    {id:'76892',text:'YUMBO'},
    {id:'76895',text:'ZARZAL'},
    {id:'81001',text:'ARAUCA'},
    {id:'81065',text:'ARAUQUITA'},
    {id:'81220',text:'CRAVO NORTE'},
    {id:'81300',text:'FORTUL'},
    {id:'81591',text:'PUERTO RONDÓN'},
    {id:'81736',text:'SARAVENA'},
    {id:'81794',text:'TAME'},
    {id:'85001',text:'YOPAL'},
    {id:'85010',text:'AGUAZUL'},
    {id:'85015',text:'CHÁMEZA'},
    {id:'85125',text:'HATO COROZAL'},
    {id:'85136',text:'LA SALINA'},
    {id:'85139',text:'MANÍ'},
    {id:'85162',text:'MONTERREY'},
    {id:'85225',text:'NUNCHÍA'},
    {id:'85230',text:'OROCUÉ'},
    {id:'85250',text:'PAZ DE ARIPORO'},
    {id:'85263',text:'PORE'},
    {id:'85279',text:'RECETOR'},
    {id:'85300',text:'SABANALARGA'},
    {id:'85315',text:'SÁCAMA'},
    {id:'85325',text:'SAN LUIS DE PALENQUE'},
    {id:'85400',text:'TÁMARA'},
    {id:'85410',text:'TAURAMENA'},
    {id:'85430',text:'TRINIDAD'},
    {id:'85440',text:'VILLANUEVA'},
    {id:'86001',text:'MOCOA'},
    {id:'86219',text:'COLÓN'},
    {id:'86320',text:'ORITO'},
    {id:'86568',text:'PUERTO ASÍS'},
    {id:'86569',text:'PUERTO CAICEDO'},
    {id:'86571',text:'PUERTO GUZMÁN'},
    {id:'86573',text:'PUERTO LEGUÍZAMO'},
    {id:'86749',text:'SIBUNDOY'},
    {id:'86755',text:'SAN FRANCISCO'},
    {id:'86757',text:'SAN MIGUEL'},
    {id:'86760',text:'SANTIAGO'},
    {id:'86865',text:'VALLE DEL GUAMUEZ'},
    {id:'86885',text:'VILLAGARZÓN'},
    {id:'88001',text:'SAN ANDRÉS'},
    {id:'88564',text:'PROVIDENCIA'},
    {id:'91001',text:'LETICIA'},
    {id:'91263',text:'EL ENCANTO'},
    {id:'91405',text:'LA CHORRERA'},
    {id:'91407',text:'LA PEDRERA'},
    {id:'91430',text:'LA VICTORIA'},
    {id:'91460',text:'MIRITÍ - PARANÁ'},
    {id:'91530',text:'PUERTO ALEGRÍA'},
    {id:'91536',text:'PUERTO ARICA'},
    {id:'91540',text:'PUERTO NARIÑO'},
    {id:'91669',text:'PUERTO SANTANDER'},
    {id:'91798',text:'TARAPACÁ'},
    {id:'94001',text:'INÍRIDA'},
    {id:'94343',text:'BARRANCOMINAS'},
    {id:'94883',text:'SAN FELIPE'},
    {id:'94884',text:'PUERTO COLOMBIA'},
    {id:'94885',text:'LA GUADALUPE'},
    {id:'94886',text:'CACAHUAL'},
    {id:'94887',text:'PANA PANA'},
    {id:'94888',text:'MORICHAL'},
    {id:'95001',text:'SAN JOSÉ DEL GUAVIARE'},
    {id:'95015',text:'CALAMAR'},
    {id:'95025',text:'EL RETORNO'},
    {id:'95200',text:'MIRAFLORES'},
    {id:'97001',text:'MITÚ'},
    {id:'97161',text:'CARURÚ'},
    {id:'97511',text:'PACOA'},
    {id:'97666',text:'TARAIRA'},
    {id:'97777',text:'PAPUNAHUA'},
    {id:'97889',text:'YAVARATÉ'},
    {id:'99001',text:'PUERTO CARREÑO'},
    {id:'99524',text:'LA PRIMAVERA'},
    {id:'99624',text:'SANTA ROSALÍA'},
    {id:'99773',text:'CUMARIBO'}]

    $('#depto,#depto1').select2({
        data: data,
        dropdownParent: $('#reportarModal')
    })
    
    $('#depto').on('select2:selecting', function(e) {
         var muni=[]
        datamuni.map(function (i) {
            if (i.id.substring(0, 2) == e.params.args.data.id) {
                muni.push(i)
            }
        })
        $('#muni').empty();
        $('#muni').select2({
            data: muni,
            dropdownParent: $('#reportarModal')
        })

    });
    $('#depto1').on('select2:selecting', function(e) {
        var muni=[]
       datamuni.map(function (i) {
           if (i.id.substring(0, 2) == e.params.args.data.id) {
               muni.push(i)
           }
       })
       $('#muni1').empty();
       $('#muni1').select2({
           data: muni,
           dropdownParent: $('#reportarModal')
       })

   });


    var muni=[]
    datamuni.map(function (i) {
        if (i.id.substring(0, 2) == '05') {
            muni.push(i)
        }
    })

    $('#muni,#muni1').select2({
        data: muni,
        dropdownParent: $('#reportarModal')
    });


    function formObj2Json(formArray) { //serialize data function
        var returnArray = {};
        for (var i = 0, len = formArray.length; i < len; i++)
          returnArray[formArray[i].name] = formArray[i].value;
        return returnArray;
      }
      
      
          $("#needs-validation1").submit(function (event) {
      

      
              if (this.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
              } else {
                  
               
                  var depto = $('#depto').select2('data')[0]
                  var muni = $('#muni').select2('data')[0]

                  var depto1 = $('#depto1').select2('data')[0]
                  var muni1 = $('#muni1').select2('data')[0]
                  

                  var inputAdicional = document.getElementById("inputAdicional");
                  var inputOtraNovedad = document.getElementById("inputOtraNovedad");

                  var inputVertice = document.getElementById("inputVertice");
                  
                  var inputNombre = document.getElementById("inputNombre");
                  var inputCorreo = document.getElementById("inputCorreo");
                  var inputTelefono = document.getElementById("inputTelefono");
                  var inputEmpresa = document.getElementById("inputEmpresa");
                  var inputDireccion = document.getElementById("inputDireccion");
     

                    var selected = [];
                    $('.checkList input:checked').each(function() {
                        selected.push($(this).attr('name'));
                    });
                  console.log(selected)

      
                  var json = {
                      "depto": depto1.text,
                      "muni": muni1.text,
                      "inputAdicional": inputAdicional.value,
                      "inputVertice": inputVertice.value,
                      "inputOtraNovedad":inputOtraNovedad.value,
                      "inputNombre": inputNombre.value,
                      "inputCorreo": inputCorreo.value,
                      "inputTelefono": inputTelefono.value,
                      "inputEmpresa": inputEmpresa.value,
                      "inputDireccion": inputDireccion.value,
                      "inputMunicipio": muni1.text,
                      "inputDepartamento": depto1.text,
                      "TipoNovedad":selected
                  }
      
                  console.log(json)
                  event.preventDefault();
                  event.stopPropagation();
      

                  var logoImg = $('input[name=streamfile]').get(0).files[0];
                  var formData = new FormData();
                  formData.append('streamfile', logoImg);

                  formData.append( "json", JSON.stringify(json))

      
                  $.ajax({
                      url: url_backend+"/correo1",
                      type: 'POST',
                      contentType: false,
                      processData: false,
                      data: formData,
                      dataType: "json",
                      success: function(res) {
                          console.log(res);
                          if (res.resultado) {
                              alert("Solicitud enviada con exito");
                          } else {
                              alert("Fallo al enviar la solicitud");
                              
                          }
                         
                      }
                  });
      
      
      
      
      
              }
              this.classList.add('was-validated');
          });
      
          // Email validation.
          $("#inputCorreo").change(function () {
              var email = $(this);
              if (email.is(':invalid')) {
                  email.removeClass('is-valid').addClass('is-invalid');
                  email.siblings(".invalid-feedback").text(email.prop("validationMessage"))
              } else {
                  email.removeClass('is-invalid').addClass('is-valid');
              }
          });







});



/*reporta novedades popUp*/
if (document.querySelector(".modalIntEstaciones")) {
    var modalButton = (document.querySelector(".modalIntEstaciones"));
    var modalContent = innerHTML = ` 
        <div class='modal maestraModalRedes fade' id='modalIntEstaciones' tabindex='-1' role='dialog' aria-labelledby='modalIntEstaciones' aria-hidden='true'>
            <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>                
                            <span aria-hidden='true'><img src='/../../images/iconos/closeIcon.svg' alt='cerrar'></span>
                        </button>
                    </div>
                    <div class='modal-body'>
                        <div class='navTabs'>
                            <button class="redActivaButton active">Red Activa</button>
                            <button class="redPasivaButton">Red Pasiva y de Nivelaci&oacute;n</button>
                        </div>
                        <div class='bodyTarget1'>                
                            <div class='sumary modalSection'>
                                <div class='content'>
                                    <div class='form-title mainTitle'>
                                        <h2>Red Activa</h2>
                                    </div>
                                    <div class='row form-row'>
                                        <div class='form-title col-12'>
                                            <h2>Datos personales</h2>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Nombre</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Nombre'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Correo electr&oacute;nico</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Correo electr&oacute;nico'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Tel&eacute;fono de contacto</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Tel&eacute;fono de contacto'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Empresa</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Empresa'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Direcci&oacute;n</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Direcci&oacute;n'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Municipio</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Municipio'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Departamento</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Departamento'>
                                        </div>
                                        <div class='text modalSection noBorder d-block mt-2'>
                                            <p class='mb-0'>Con el diligenciamiento del presente formulario, usted manifiesta el inter&eacute;s de integrar las estaciones de referencia continua CORS que relaciona a continuaci&oacute;n y entiende que el IGAC exige est&aacute;ndares de calidad definidos en la resoluci&oacute;n XXX, raz&oacute;n por la cual tiene la potestad de aprobar o no la integraci&oacute;n de estaciones de la red Geodesica Nacional y se exonera de [&#8230;] y que la informaci&oacute;n que relaciona en el presente formulario &ldquo;es real&rdquo; y autoriza su uso para fines de verificaci&oacute;n del estado de la estaci&oacute;n (Carta de intenci&oacute;n de vinculaci&oacute;n de estaciones CORS a la red Geod&eacute;sica Nacional)&#8230;</p>
                                            <div class='checkList mt-2'>
                                                <div class='check'>
                                                    <input type='checkbox'><div class='label'>Acepto t&eacute;rminos</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class='sumary modalSection noBorder'>
                                <div class='content popUpTable'>
                                    <table style='width: 100%;' id='example' style='width: 100%;' class='display mt-2  mb-0'>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nombre o identificador de la estación</th>
                                                <th>Fecha de monumentacion de la estacion</th>
                                                <th>Edad en años</th>
                                                <th>Entidad que materializó</th>
                                                <th>Departamento</th>
                                                <th>Municipio</th>
                                                <th>Latitud</th>
                                                <th>Longitud</th>
                                                <th>Sitio donde se ubica (edificio, predio o lugar)</th>
                                                <th>Tipo de monumentación</th>
                                                <th>Altura instrumental</th>
                                                <th>Tipo de antena</th>
                                                <th>Serial de antena</th>
                                                <th>Tipo de receptor</th>
                                                <th>Serial de receptor</th>
                                                <th>Estado actual de la estación</th>
                                                <th>Sistema de telecomuicación</th>
                                                <th>IP</th>
                                                <th>Sistema electrico</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><input style="width: 100%;" type="text" value="Nombre o identificador de la estación"></td>
                                                <td><input style="width: 100%;" type="text" value="Fecha de monumentacion de la estacion"></td>
                                                <td><input style="width: 100%;" type="text" value="Edad en años"></td>
                                                <td><input style="width: 100%;" type="text" value="Entidad que materializó"></td>
                                                <td><input style="width: 100%;" type="text" value="Departamento"></td>
                                                <td><input style="width: 100%;" type="text" value="Municipio"></td>
                                                <td><input style="width: 100%;" type="text" value="Latitud"></td>
                                                <td><input style="width: 100%;" type="text" value="Longitud"></td>
                                                <td><input style="width: 100%;" type="text" value="Sitio donde se ubica (edificio, predio o lugar)"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de monumentación"></td>
                                                <td><input style="width: 100%;" type="text" value="Altura instrumental"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de antena"></td>
                                                <td><input style="width: 100%;" type="text" value="Serial de antena"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de receptor"></td>
                                                <td><input style="width: 100%;" type="text" value="Serial de receptor"></td>
                                                <td><input style="width: 100%;" type="text" value="Estado actual de la estación"></td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación">
                                                        <option value="value1">Celular</option>
                                                        <option value="value2">Satelital</option>
                                                        <option value="value3">Radio enlace</option>
                                                        <option value="value3">Otro</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="IP">
                                                        <option value="value1">Direccion estatica</option>
                                                        <option value="value2">Puerto TCP/IP</option>
                                                        <option value="value3">Puerto HTTP</option>
                                                        <option value="value3">Puerto FTP</option>
                                                        <option value="value3">Puerto NTRIP</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="Sistema electrico">
                                                        <option value="value1">Fotovoltaico</option>
                                                        <option value="value2">Corriente electrica</option>
                                                        <option value="value2">Hibrido</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td><input style="width: 100%;" type="text" value="Nombre o identificador de la estación"></td>
                                                <td><input style="width: 100%;" type="text" value="Fecha de monumentacion de la estacion"></td>
                                                <td><input style="width: 100%;" type="text" value="Edad en años"></td>
                                                <td><input style="width: 100%;" type="text" value="Entidad que materializó"></td>
                                                <td><input style="width: 100%;" type="text" value="Departamento"></td>
                                                <td><input style="width: 100%;" type="text" value="Municipio"></td>
                                                <td><input style="width: 100%;" type="text" value="Latitud"></td>
                                                <td><input style="width: 100%;" type="text" value="Longitud"></td>
                                                <td><input style="width: 100%;" type="text" value="Sitio donde se ubica (edificio, predio o lugar)"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de monumentación"></td>
                                                <td><input style="width: 100%;" type="text" value="Altura instrumental"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de antena"></td>
                                                <td><input style="width: 100%;" type="text" value="Serial de antena"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de receptor"></td>
                                                <td><input style="width: 100%;" type="text" value="Serial de receptor"></td>
                                                <td><input style="width: 100%;" type="text" value="Estado actual de la estación"></td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación">
                                                        <option value="value1">Celular</option>
                                                        <option value="value2">Satelital</option>
                                                        <option value="value3">Radio enlace</option>
                                                        <option value="value3">Otro</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="IP">
                                                        <option value="value1">Direccion estatica</option>
                                                        <option value="value2">Puerto TCP/IP</option>
                                                        <option value="value3">Puerto HTTP</option>
                                                        <option value="value3">Puerto FTP</option>
                                                        <option value="value3">Puerto NTRIP</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="Sistema electrico">
                                                        <option value="value1">Fotovoltaico</option>
                                                        <option value="value2">Corriente electrica</option>
                                                        <option value="value2">Hibrido</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class='d-flex w-100 mt-4'>
                                        <div class='button ml-2'>Enviar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='bodyTarget2'>                
                            <div class='sumary modalSection'>
                                <div class='content'>
                                    <div class='form-title mainTitle'>
                                        <h2>Red Pasiva y de Nivelaci&oacute;n</h2>
                                    </div>
                                    <div class='row form-row'>
                                        <div class='form-title col-12'>
                                            <h2>Datos personales</h2>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Nombre</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Nombre'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Correo electr&oacute;nico</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Correo electr&oacute;nico'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Tel&eacute;fono de contacto</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Tel&eacute;fono de contacto'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Empresa</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Empresa'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Direcci&oacute;n</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Direcci&oacute;n'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Municipio</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Municipio'>
                                        </div>
                                        <div class='form-component col-md-6'>
                                            <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Departamento</label>
                                            <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Departamento'>
                                        </div>
                                        <div class='text modalSection noBorder d-block mt-2'>
                                            <p class='mb-0'>Con el diligenciamiento del presente formulario, usted manifiesta el inter&eacute;s de integrar las estaciones de referencia continua CORS que relaciona a continuaci&oacute;n y entiende que el IGAC exige est&aacute;ndares de calidad definidos en la resoluci&oacute;n XXX, raz&oacute;n por la cual tiene la potestad de aprobar o no la integraci&oacute;n de estaciones de la red Geodesica Nacional y se exonera de [&#8230;] y que la informaci&oacute;n que relaciona en el presente formulario &ldquo;es real&rdquo; y autoriza su uso para fines de verificaci&oacute;n del estado de la estaci&oacute;n (Carta de intenci&oacute;n de vinculaci&oacute;n de estaciones CORS a la red Geod&eacute;sica Nacional)&#8230;
                                            </p>
                                            <div class='checkList mt-2'>
                                                <div class='check'>
                                                    <input type='checkbox'><div class='label'>Acepto t&eacute;rminos</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class='sumary modalSection noBorder'>
                                <div class='content popUpTable'>
                                    <table style='width: 100%;' id='example2' style='width: 100%;' class='display mt-2  mb-0'>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nombre o identificador de la estación</th>
                                                <th>Fecha de monumentacion de la estacion</th>
                                                <th>Edad en años</th>
                                                <th>Entidad que materializó</th>
                                                <th>Departamento</th>
                                                <th>Municipio</th>
                                                <th>Latitud</th>
                                                <th>Longitud</th>
                                                <th>Sitio donde se ubica (edificio, predio o lugar)</th>
                                                <th>Tipo de monumentación</th>
                                                <th>Altura instrumental</th>
                                                <th>Tipo de antena</th>
                                                <th>Serial de antena</th>
                                                <th>Tipo de receptor</th>
                                                <th>Serial de receptor</th>
                                                <th>Estado actual de la estación</th>
                                                <th>Sistema de telecomuicación</th>
                                                <th>IP</th>
                                                <th>Sistema electrico</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td><input style="width: 100%;" type="text" value="Nombre o identificador de la estación"></td>
                                                <td><input style="width: 100%;" type="text" value="Fecha de monumentacion de la estacion"></td>
                                                <td><input style="width: 100%;" type="text" value="Edad en años"></td>
                                                <td><input style="width: 100%;" type="text" value="Entidad que materializó"></td>
                                                <td><input style="width: 100%;" type="text" value="Departamento"></td>
                                                <td><input style="width: 100%;" type="text" value="Municipio"></td>
                                                <td><input style="width: 100%;" type="text" value="Latitud"></td>
                                                <td><input style="width: 100%;" type="text" value="Longitud"></td>
                                                <td><input style="width: 100%;" type="text" value="Sitio donde se ubica (edificio, predio o lugar)"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de monumentación"></td>
                                                <td><input style="width: 100%;" type="text" value="Altura instrumental"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de antena"></td>
                                                <td><input style="width: 100%;" type="text" value="Serial de antena"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de receptor"></td>
                                                <td><input style="width: 100%;" type="text" value="Serial de receptor"></td>
                                                <td><input style="width: 100%;" type="text" value="Estado actual de la estación"></td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación">
                                                        <option value="value1">Celular</option>
                                                        <option value="value2">Satelital</option>
                                                        <option value="value3">Radio enlace</option>
                                                        <option value="value3">Otro</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="IP">
                                                        <option value="value1">Direccion estatica</option>
                                                        <option value="value2">Puerto TCP/IP</option>
                                                        <option value="value3">Puerto HTTP</option>
                                                        <option value="value3">Puerto FTP</option>
                                                        <option value="value3">Puerto NTRIP</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="Sistema electrico">
                                                        <option value="value1">Fotovoltaico</option>
                                                        <option value="value2">Corriente electrica</option>
                                                        <option value="value2">Hibrido</option>
                                                    </select>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td><input style="width: 100%;" type="text" value="Nombre o identificador de la estación"></td>
                                                <td><input style="width: 100%;" type="text" value="Fecha de monumentacion de la estacion"></td>
                                                <td><input style="width: 100%;" type="text" value="Edad en años"></td>
                                                <td><input style="width: 100%;" type="text" value="Entidad que materializó"></td>
                                                <td><input style="width: 100%;" type="text" value="Departamento"></td>
                                                <td><input style="width: 100%;" type="text" value="Municipio"></td>
                                                <td><input style="width: 100%;" type="text" value="Latitud"></td>
                                                <td><input style="width: 100%;" type="text" value="Longitud"></td>
                                                <td><input style="width: 100%;" type="text" value="Sitio donde se ubica (edificio, predio o lugar)"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de monumentación"></td>
                                                <td><input style="width: 100%;" type="text" value="Altura instrumental"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de antena"></td>
                                                <td><input style="width: 100%;" type="text" value="Serial de antena"></td>
                                                <td><input style="width: 100%;" type="text" value="Tipo de receptor"></td>
                                                <td><input style="width: 100%;" type="text" value="Serial de receptor"></td>
                                                <td><input style="width: 100%;" type="text" value="Estado actual de la estación"></td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación">
                                                        <option value="value1">Celular</option>
                                                        <option value="value2">Satelital</option>
                                                        <option value="value3">Radio enlace</option>
                                                        <option value="value3">Otro</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="IP">
                                                        <option value="value1">Direccion estatica</option>
                                                        <option value="value2">Puerto TCP/IP</option>
                                                        <option value="value3">Puerto HTTP</option>
                                                        <option value="value3">Puerto FTP</option>
                                                        <option value="value3">Puerto NTRIP</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <select style="width: 100%; height: 25px;" name="Sistema electrico">
                                                        <option value="value1">Fotovoltaico</option>
                                                        <option value="value2">Corriente electrica</option>
                                                        <option value="value2">Hibrido</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div class='d-flex w-100 mt-4'>
                                        <div class='button ml-2'>Enviar</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    $('body').append(modalContent);
}

/*reporta novedades red activa popUp*/
if (document.querySelector(".modalIntEstacionesActiva")) {
    var modalButton = (document.querySelector(".modalIntEstacionesActiva"));
    var modalContent = innerHTML = ` 
        <div class='modal maestraModalRedes fade' id='modalIntEstacionesActiva' tabindex='-1' role='dialog' aria-labelledby='modalIntEstacionesActiva' aria-hidden='true'>
            <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>                
                            <span aria-hidden='true'><img src='/../../images/iconos/closeIcon.svg' alt='cerrar'></span>
                        </button>
                    </div>
                    <div class='modal-body'>              
                        <div class='sumary modalSection'>
                            <div class='content'>
                                <div class='form-title mainTitle'>
                                    <h2>Red Activa</h2>
                                </div>
                                <div class='row form-row'>
                                    <div class='form-title col-12'>
                                        <h2>Datos personales</h2>
                                    </div>
                                    <div class='form-component col-md-6'>
                                        <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Nombre</label>
                                        <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Nombre'>
                                    </div>
                                    <div class='form-component col-md-6'>
                                        <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Correo electr&oacute;nico</label>
                                        <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Correo electr&oacute;nico'>
                                    </div>
                                    <div class='form-component col-md-6'>
                                        <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Tel&eacute;fono de contacto</label>
                                        <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Tel&eacute;fono de contacto'>
                                    </div>
                                    <div class='form-component col-md-6'>
                                        <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Empresa</label>
                                        <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Empresa'>
                                    </div>
                                    <div class='form-component col-md-6'>
                                        <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Direcci&oacute;n</label>
                                        <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Direcci&oacute;n'>
                                    </div>
                                    <div class='form-component col-md-6'>
                                        <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Municipio</label>
                                        <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Municipio'>
                                    </div>
                                    <div class='form-component col-md-6'>
                                        <label id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Departamento</label>
                                        <input id='inputCoordinateLatitud' type='text' class='form-control' placeholder='Departamento'>
                                    </div>
                                    <div class='text modalSection noBorder d-block mt-2'>
                                        <p class='mb-0'>Con el diligenciamiento del presente formulario, usted manifiesta el inter&eacute;s de integrar las estaciones de referencia continua CORS que relaciona a continuaci&oacute;n y entiende que el IGAC exige est&aacute;ndares de calidad definidos en la resoluci&oacute;n XXX, raz&oacute;n por la cual tiene la potestad de aprobar o no la integraci&oacute;n de estaciones de la red Geodesica Nacional y se exonera de [&#8230;] y que la informaci&oacute;n que relaciona en el presente formulario &ldquo;es real&rdquo; y autoriza su uso para fines de verificaci&oacute;n del estado de la estaci&oacute;n (Carta de intenci&oacute;n de vinculaci&oacute;n de estaciones CORS a la red Geod&eacute;sica Nacional)&#8230;</p>
                                        <div class='checkList mt-2'>
                                            <div class='check'>
                                                <input type='checkbox'><div class='label'>Acepto t&eacute;rminos</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class='sumary modalSection noBorder'>
                            <div class='content popUpTable'>
                                <table style='width: 100%;' id='example' style='width: 100%;' class='display mt-2  mb-0'>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nombre o identificador de la estación</th>
                                            <th>Fecha de monumentacion de la estacion</th>
                                            <th>Edad en años</th>
                                            <th>Entidad que materializó</th>
                                            <th>Departamento</th>
                                            <th>Municipio</th>
                                            <th>Latitud</th>
                                            <th>Longitud</th>
                                            <th>Sitio donde se ubica (edificio, predio o lugar)</th>
                                            <th>Tipo de monumentación</th>
                                            <th>Altura instrumental</th>
                                            <th>Tipo de antena</th>
                                            <th>Serial de antena</th>
                                            <th>Tipo de receptor</th>
                                            <th>Serial de receptor</th>
                                            <th>Estado actual de la estación</th>
                                            <th>Sistema de telecomuicación</th>
                                            <th>IP</th>
                                            <th>Sistema electrico</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><input style="width: 100%;" type="text" value="Nombre o identificador de la estación"></td>
                                            <td><input style="width: 100%;" type="text" value="Fecha de monumentacion de la estacion"></td>
                                            <td><input style="width: 100%;" type="text" value="Edad en años"></td>
                                            <td><input style="width: 100%;" type="text" value="Entidad que materializó"></td>
                                            <td><input style="width: 100%;" type="text" value="Departamento"></td>
                                            <td><input style="width: 100%;" type="text" value="Municipio"></td>
                                            <td><input style="width: 100%;" type="text" value="Latitud"></td>
                                            <td><input style="width: 100%;" type="text" value="Longitud"></td>
                                            <td><input style="width: 100%;" type="text" value="Sitio donde se ubica (edificio, predio o lugar)"></td>
                                            <td><input style="width: 100%;" type="text" value="Tipo de monumentación"></td>
                                            <td><input style="width: 100%;" type="text" value="Altura instrumental"></td>
                                            <td><input style="width: 100%;" type="text" value="Tipo de antena"></td>
                                            <td><input style="width: 100%;" type="text" value="Serial de antena"></td>
                                            <td><input style="width: 100%;" type="text" value="Tipo de receptor"></td>
                                            <td><input style="width: 100%;" type="text" value="Serial de receptor"></td>
                                            <td><input style="width: 100%;" type="text" value="Estado actual de la estación"></td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación">
                                                    <option value="value1">Celular</option>
                                                    <option value="value2">Satelital</option>
                                                    <option value="value3">Radio enlace</option>
                                                    <option value="value3">Otro</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="IP">
                                                    <option value="value1">Direccion estatica</option>
                                                    <option value="value2">Puerto TCP/IP</option>
                                                    <option value="value3">Puerto HTTP</option>
                                                    <option value="value3">Puerto FTP</option>
                                                    <option value="value3">Puerto NTRIP</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema electrico">
                                                    <option value="value1">Fotovoltaico</option>
                                                    <option value="value2">Corriente electrica</option>
                                                    <option value="value2">Hibrido</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input style="width: 100%;" type="text" value="Nombre o identificador de la estación"></td>
                                            <td><input style="width: 100%;" type="text" value="Fecha de monumentacion de la estacion"></td>
                                            <td><input style="width: 100%;" type="text" value="Edad en años"></td>
                                            <td><input style="width: 100%;" type="text" value="Entidad que materializó"></td>
                                            <td><input style="width: 100%;" type="text" value="Departamento"></td>
                                            <td><input style="width: 100%;" type="text" value="Municipio"></td>
                                            <td><input style="width: 100%;" type="text" value="Latitud"></td>
                                            <td><input style="width: 100%;" type="text" value="Longitud"></td>
                                            <td><input style="width: 100%;" type="text" value="Sitio donde se ubica (edificio, predio o lugar)"></td>
                                            <td><input style="width: 100%;" type="text" value="Tipo de monumentación"></td>
                                            <td><input style="width: 100%;" type="text" value="Altura instrumental"></td>
                                            <td><input style="width: 100%;" type="text" value="Tipo de antena"></td>
                                            <td><input style="width: 100%;" type="text" value="Serial de antena"></td>
                                            <td><input style="width: 100%;" type="text" value="Tipo de receptor"></td>
                                            <td><input style="width: 100%;" type="text" value="Serial de receptor"></td>
                                            <td><input style="width: 100%;" type="text" value="Estado actual de la estación"></td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación">
                                                    <option value="value1">Celular</option>
                                                    <option value="value2">Satelital</option>
                                                    <option value="value3">Radio enlace</option>
                                                    <option value="value3">Otro</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="IP">
                                                    <option value="value1">Direccion estatica</option>
                                                    <option value="value2">Puerto TCP/IP</option>
                                                    <option value="value3">Puerto HTTP</option>
                                                    <option value="value3">Puerto FTP</option>
                                                    <option value="value3">Puerto NTRIP</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema electrico">
                                                    <option value="value1">Fotovoltaico</option>
                                                    <option value="value2">Corriente electrica</option>
                                                    <option value="value2">Hibrido</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class='d-flex w-100 mt-4'>
                                    <div class='button ml-2' >Enviar</div>
                                </div>
                            </div>
                        </div>             
                    </div>
                </div>
            </div>
        </div>
    `
    $('body').append(modalContent);
}






/*reporta novedades red activa popUp*/
if (document.querySelector(".modalEstaciones")) {
    var modalButton = (document.querySelector(".modalEstaciones"));
    var modalContent = innerHTML = ` 
        <div class='modal maestraModalRedes fade' id='modalEstaciones' tabindex='-1' role='dialog' aria-labelledby='modalEstaciones' aria-hidden='true'>
            <div class='modal-dialog' role='document'>
                <div class='modal-content'>
                    <div class='modal-header'>
                        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>                
                            <span aria-hidden='true'><img src='/../../images/iconos/closeIcon.svg' alt='cerrar'></span>
                        </button>
                    </div>
                    <div class='modal-body'>              
                        <div class='sumary modalSection'>
                            <div class='content'>
                                <div class='form-title mainTitle'>
                                    <h2>Registrar una nueva estación</h2>
                                </div>
                                <div class='row form-row'>
                                    <div class='form-title col-12'>
                                        <h2>Datos personales</h2>
                                    </div>



                                    <form class="container" id="needs-validation" novalidate>
                                    <div class="row">

                                    <div class="col-md-6">
                                        <label for="inputNombre">Nombre</label>
                                        <input type="text" class="form-control" id="inputNombre" placeholder="Nombre" required>
                                        <div class="invalid-feedback">
                                            Ingrese un nombre
                                        </div>
                                    </div>

                                        <div class="col-md-6">
                                            <label for="inputCorreo">Correo electrónico</label>
                                            <input type="email" class="form-control" id="inputCorreo" placeholder="Correo electrónico" required>
                                            <div class="invalid-feedback">
                                                Ingrese un correo electrónico válido
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                    <div class="col-md-6">
                                        <label for="inputTelefono">Télefono de contacto</label>
                                        <input type="number" class="form-control" id="inputTelefono" placeholder="Teléfono de contacto" required>
                                        <div class="invalid-feedback">
                                            Ingrese un número de teléfono
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="inputEmpresa">Empresa</label>
                                        <input type="text" class="form-control" id="inputEmpresa" placeholder="Empresa" required>
                                        <div class="invalid-feedback">
                                            Ingrese un nombre de empresa
                                        </div>
                                    </div>

                                    </div>

                                    <div class="row">

                                    <div class="col-md-6">
                                        <label for="inputDireccion">Dirección</label>
                                        <input type="text" class="form-control" id="inputDireccion" placeholder="Dirección" required>
                                        <div class="invalid-feedback">
                                            Ingrese una dirección
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="inputMunicipio">Municipio</label>
                                        <input type="text" class="form-control" id="inputMunicipio" placeholder="Municipio" required>
                                        <div class="invalid-feedback">
                                            Ingrese un municipio
                                        </div>
                                    </div>

                                    </div>

                                    <div class="row">

                                    <div class="col-md-6">
                                        <label for="inputDepartamento">Departamento</label>
                                        <input type="text" class="form-control" id="inputDepartamento" placeholder="Departamento" required>
                                        <div class="invalid-feedback">
                                            Ingrese un Departamento
                                        </div>
                                    </div>

                                    </div>


                                    <div class='text modalSection noBorder d-block mt-2'>
                                        <p class='mb-0'>Con el diligenciamiento del presente formulario, usted manifiesta el inter&eacute;s de integrar las estaciones de referencia continua CORS que relaciona a continuaci&oacute;n y entiende que el IGAC exige est&aacute;ndares de calidad definidos en la resoluci&oacute;n XXX, raz&oacute;n por la cual tiene la potestad de aprobar o no la integraci&oacute;n de estaciones de la red Geodesica Nacional y se exonera de [&#8230;] y que la informaci&oacute;n que relaciona en el presente formulario &ldquo;es real&rdquo; y autoriza su uso para fines de verificaci&oacute;n del estado de la estaci&oacute;n (Carta de intenci&oacute;n de vinculaci&oacute;n de estaciones CORS a la red Geod&eacute;sica Nacional)&#8230;</p>

                                       
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                            <label class="form-check-label" for="invalidCheck">Acepto términos</label>
                                            <div class="invalid-feedback">Debe aceptar las condiciones.</div>
                                        </div>
                                    </div>
                                 
                                    <table style='width: 100%;' id='example' style='width: 100%;' class='display mt-2  mb-0'>
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nombre o identificador de la estación</th>
                                            <th>Fecha de monumentacion de la estacion</th>
                                            <th>Edad en años</th>
                                            <th>Entidad que materializó</th>
                                            <th>Departamento</th>
                                            <th>Municipio</th>
                                            <th>Latitud</th>
                                            <th>Longitud</th>
                                            <th>Sitio donde se ubica (edificio, predio o lugar)</th>
                                            <th>Tipo de monumentación</th>
                                            <th>Altura instrumental</th>
                                            <th>Tipo de antena</th>
                                            <th>Serial de antena</th>
                                            <th>Tipo de receptor</th>
                                            <th>Serial de receptor</th>
                                            <th>Estado actual de la estación</th>
                                            <th>Sistema de telecomuicación</th>
                                            <th>IP</th>
                                            <th>Sistema electrico</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td><input style="width: 100%;" type="text" placeholder="Nombre o identificador de la estación" class="form-control" name="Nombre o identificador de la estación" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Fecha de monumentacion de la estacion" name="Fecha de monumentacion de la estacion" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Edad en años" name="Edad en años" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Entidad que materializó" name="Entidad que materializó" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Departamento" name="Departamento" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Municipio" name="Municipio" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Latitud" name="Latitud" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Longitud" name="Longitud" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Sitio donde se ubica (edificio, predio o lugar)" name="Sitio donde se ubica (edificio, predio o lugar)" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Tipo de monumentación" name="Tipo de monumentación" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Altura instrumental" name="Altura instrumental" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Tipo de antena" name="Tipo de antena" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Serial de antena" name="Serial de antena" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Tipo de receptor" name="Tipo de receptor" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Serial de receptor" name="Serial de receptor" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Estado actual de la estación" name="Estado actual de la estación" class="form-control" required></td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación" class="form-control" required>
                                                    <option value="value1">Celular</option>
                                                    <option value="value2">Satelital</option>
                                                    <option value="value3">Radio enlace</option>
                                                    <option value="value4">Otro</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="IP" class="form-control" required>
                                                    <option value="value1">Direccion estatica</option>
                                                    <option value="value2">Puerto TCP/IP</option>
                                                    <option value="value3">Puerto HTTP</option>
                                                    <option value="value4">Puerto FTP</option>
                                                    <option value="value5">Puerto NTRIP</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema electrico" class="form-control" required>
                                                    <option value="value1">Fotovoltaico</option>
                                                    <option value="value2">Corriente electrica</option>
                                                    <option value="value3">Hibrido</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><input style="width: 100%;" type="text" placeholder="Nombre o identificador de la estación" name="Nombre o identificador de la estación" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Fecha de monumentacion de la estacion" name="Fecha de monumentacion de la estacion" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Edad en años" name="Edad en años" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Entidad que materializó" name="Entidad que materializó" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Departamento" name="Departamento" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Municipio" name="Municipio" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Latitud" name="Latitud" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Longitud" name="Longitud" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Sitio donde se ubica (edificio, predio o lugar)" name="Sitio donde se ubica (edificio, predio o lugar)" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Tipo de monumentación" name="Tipo de monumentación" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Altura instrumental" name="Altura instrumental" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Tipo de antena" name="Tipo de antena" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Serial de antena" name="Serial de antena" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Tipo de receptor" name="Tipo de receptor" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Serial de receptor" name="Serial de receptor" class="form-control" required></td>
                                            <td><input style="width: 100%;" type="text" placeholder="Estado actual de la estación" name="Estado actual de la estación" class="form-control" required></td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación" class="form-control" required>
                                                    <option value="value1">Celular</option>
                                                    <option value="value2">Satelital</option>
                                                    <option value="value3">Radio enlace</option>
                                                    <option value="value4">Otro</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="IP" class="form-control" required>
                                                    <option value="value1">Direccion estatica</option>
                                                    <option value="value2">Puerto TCP/IP</option>
                                                    <option value="value3">Puerto HTTP</option>
                                                    <option value="value4">Puerto FTP</option>
                                                    <option value="value5">Puerto NTRIP</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema electrico" class="form-control" required>
                                                    <option value="value1">Fotovoltaico</option>
                                                    <option value="value2">Corriente electrica</option>
                                                    <option value="value3">Hibrido</option>
                                                </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <button class="btn btn-primary" type="submit">Enviar</button>
                                        </div>
                                    </div>

                                    </form>

                                </div>
                            </div>
                        </div>
         
                    </div>
                </div>
            </div>
        </div>
    `
    $('body').append(modalContent);
}


window.onload = function () {

function formObj2Json(formArray) { //serialize data function
  var returnArray = {};
  for (var i = 0, len = formArray.length; i < len; i++)
    returnArray[formArray[i].name] = formArray[i].value;
  return returnArray;
}


    $("#needs-validation").submit(function (event) {

       
         function getAllValues() {
    
            let result = [];
             
             $("#example tbody tr").each(function() {
                 var allValues = {}; 
                 $(this).find("input").each(function( index ) {
                      
                     const fieldName = $(this).attr("name");
                     allValues[fieldName] = $(this).val();
                     
                 });
                 $(this).find("select option:selected").each(function( index ) {
                      
                     const fieldName = $(this).parent().attr("name");
                   
                     allValues[fieldName] = $(this).text();
                     
                    
                });
                 result.push(allValues);
             })
             return result;
             
         }
         
        var result = getAllValues();
       
        

        if (this.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            
            var inputNombre = document.getElementById("inputNombre");
            var inputCorreo = document.getElementById("inputCorreo");
            var inputTelefono = document.getElementById("inputTelefono");
            var inputEmpresa = document.getElementById("inputEmpresa");
            var inputDireccion = document.getElementById("inputDireccion");
            var inputMunicipio = document.getElementById("inputMunicipio");
            var inputDepartamento = document.getElementById("inputDepartamento");


            var json = {
                "inputNombre": inputNombre.value,
                "inputCorreo": inputCorreo.value,
                "inputTelefono": inputTelefono.value,
                "inputEmpresa": inputEmpresa.value,
                "inputDireccion": inputDireccion.value,
                "inputMunicipio": inputMunicipio.value,
                "inputDepartamento": inputDepartamento.value,
                "tabla":result
            }

            console.log(json)
            event.preventDefault();
            event.stopPropagation();


            $.ajax({
                url: url_backend+"/correo",
                type: 'GET',
                data:json,
                dataType: 'json', // added data type
                success: function(res) {
                    console.log(res);
                    if (res.resultado) {
                        alert("Solicitud enviada con exito");
                    } else {
                        alert("Fallo al enviar la solicitud");
                        
                    }
                   
                }
            });





        }
        this.classList.add('was-validated');
    });

    // Email validation.
    $("#inputCorreo").change(function () {
        var email = $(this);
        if (email.is(':invalid')) {
            email.removeClass('is-valid').addClass('is-invalid');
            email.siblings(".invalid-feedback").text(email.prop("validationMessage"))
        } else {
            email.removeClass('is-invalid').addClass('is-valid');
        }
    });





};

/*data tables*/
if (document.querySelector("#redTable2")) {
    $(document).ready(function () {
        // Setup - add a text input to each footer cell
        $('#redTable2 thead tr')
            .clone(true)
            .addClass('filters')
            .insertAfter('.filterContainer');
            
     
        var table = $('#redTable2').DataTable({
            'colums': [
                {'data': 'id'},
                {'data': 'Municipio, departamento'},
                {'data': 'Estado'},
                {'data': 'Nombre de la red'},
                {'data': 'Entidad'},
            ],
            orderCellsTop: true,
            fixedHeader: true,
            scrollX: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Busca una estación",
                paginate: {
                    next: '<i class="fa fa-angle-right"></i>',
                    previous: '<i class="fa fa-angle-left"></i>'
                }
            },
            "columnDefs": [
                { className: "estados", "targets": [ 2 ] },
                { className: "estados", "targets": [ 3 ] },
                { className: "redes", "targets": [ 4 ] }
            ],
            "bInfo": false,
            "bLengthChange": false,
            initComplete: function () {
                var api = this.api();
     
                // For each column
                api
                    .columns()
                    .eq(0)
                    .each(function (colIdx) {
                        // Set the header cell to contain the input element
                        var cell = $('.filters th').eq(
                            $(api.column(colIdx).header()).index()
                        );
                        var title = $(cell).text();
                        $(cell).html('<input type="text" placeholder="' + title + '" />');
     
                        // On every keypress in this input
                        $(
                            'input',
                            $('.filters th').eq($(api.column(colIdx).header()).index())
                        )
                            .off('keyup change')
                            .on('change', function (e) {
                                // Get the search value
                                $(this).attr('title', $(this).val());
                                var regexr = '({search})'; //$(this).parents('th').find('select').val();

                                var cursorPosition = this.selectionStart;
                                // Search the column for that value
                                api
                                    .column(colIdx)
                                    .search(
                                        this.value != ''
                                            ? regexr.replace('{search}', '(((' + this.value + ')))')
                                            : '',
                                        this.value != '',
                                        this.value == ''
                                    )
                                    .draw();
                            })
                            .on('keyup', function (e) {
                                e.stopPropagation();

                                $(this).trigger('change');
                                $(this)
                                    .focus()[0]
                            });
                    });
            },
            
        });
    });

}

/*data tables*/
if (document.querySelector("#redTable")) {
    $(document).ready(function () {
        // Setup - add a text input to each footer cell
        $('#redTable thead tr')
            .clone(true)
            .addClass('filters')
            .insertAfter('.filterContainer');


        var table = $('#redTable').DataTable({
            'colums': [
                { 'data': 'id' },
                { 'data': 'Municipio, departamento' },
                { 'data': 'Estado' },
                { 'data': 'Nombre de la red' },
                { 'data': 'Entidad' },
            ],
            orderCellsTop: true,
            fixedHeader: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Busca una estación",
                paginate: {
                    next: '<i class="fa fa-angle-right"></i>',
                    previous: '<i class="fa fa-angle-left"></i>'
                }
            },
            "columnDefs": [
                { className: "estados", "targets": [2] },
                { className: "redes", "targets": [4] }
            ],
            "bInfo": false,
            "bLengthChange": false,
            initComplete: function () {
                var api = this.api();

                // For each column
                api
                    .columns()
                    .eq(0)
                    .each(function (colIdx) {
                        // Set the header cell to contain the input element
                        var cell = $('.filters th').eq(
                            $(api.column(colIdx).header()).index()
                        );
                        var title = $(cell).text();
                        $(cell).html('<input type="text" placeholder="' + title + '" />');

                        // On every keypress in this input
                        $(
                            'input',
                            $('.filters th').eq($(api.column(colIdx).header()).index())
                        )
                            .off('keyup change')
                            .on('change', function (e) {
                                // Get the search value
                                $(this).attr('title', $(this).val());
                                var regexr = '({search})'; //$(this).parents('th').find('select').val();

                                var cursorPosition = this.selectionStart;
                                // Search the column for that value
                                api
                                    .column(colIdx)
                                    .search(
                                        this.value != ''
                                            ? regexr.replace('{search}', '(((' + this.value + ')))')
                                            : '',
                                        this.value != '',
                                        this.value == ''
                                    )
                                    .draw();
                            })
                            .on('keyup', function (e) {
                                e.stopPropagation();

                                $(this).trigger('change');
                                $(this)
                                    .focus()[0]
                            });
                    });
            },

        });
    });

}

/*selector de estados de redes*/
$(function () {
    $('td.redes:contains(Activa)').addClass('activa')
});

$(function () {
    $('td.redes:contains(Pasiva)').addClass('pasiva')
});

/*selector de estados de redes*/
$(function () {
    $('td.estados:contains(Inactivo)').html('<span class="inactivo">Inactivo</span>')
});

$(function () {
    $('td.estados:contains(Removida)').html('<span class="removido">Removida</span>')
});

$(function () {
    $('td.estados:contains(Activo)').html('<span class="activo">Activo</span>')
});

/*tabulador*/
if (document.querySelector(".tab-content")) {
    var button = document.getElementsByClassName('but'),
        tabContent = document.getElementsByClassName('tab-content');
    tabContent[0].style.display = 'block';


    function city(e, city) {
        var i;
        for (i = 0; i < button.length; i++) {
            tabContent[i].style.display = 'none';
            button[i].classList.remove('active');
        }
        document.getElementById(city).style.display = 'block';
        e.currentTarget.classList.add('active');
    }
};

$(document).ready(function () {

    $("#example").DataTable({
        scrollX: true,
        searching: false,
        paging: false,
        info: false
    });

    $("#example2").DataTable({
        scrollX: true,
        searching: false,
        paging: false,
        info: false
    });

    $(".modalIntEstaciones").one("click", function () {
        setTimeout(() => {
            $('#example_wrapper .sorting').last().trigger("click");
        }, 500);
    });

    $("#table_id").DataTable({
        scrollX: true,
        searching: false,
        paging: false,
        info: false
    });

    $(".maestraModalRedes").one("click", function () {
        setTimeout(() => {
            $('#table_id_wrapper .sorting').last().trigger("click");
        }, 500);
    });

    /*tabs*/

    $('.bodyTarget2').hide();
    $('.redActivaButton').on("click", function () {
        $(this).addClass('active');
        $('.redPasivaButton').removeClass('active');
        $('.bodyTarget1').show();
        $('.bodyTarget2').hide();
    });
    $('.redPasivaButton').on("click", function () {
        $(this).addClass('active');
        $('.redActivaButton').removeClass('active');
        $('.bodyTarget2').show();
        $('.bodyTarget1').hide();
    });

    /*ver mapa*/
    $(".iframeMaps").hide();
    $(".mapView").on("click", function () {
        $(this).toggleClass('active');
        if ($('.mapView').hasClass('active')) {
            $(".iframeMaps").show();
            $('.otraNovedadFoto').css('margin-top', '-150px')
        } else {
            $(".iframeMaps").hide();
            $('.otraNovedadFoto').css('margin-top', '0')
        }
    });



});

/*carousel*/
$('.carousel').carousel({
    interval: false,
}); 
