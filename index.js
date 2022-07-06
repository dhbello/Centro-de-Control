if (document.querySelector(".navbarigac")) {
    const navbarigac = document.querySelector(".navbarigac");
    navbarigac.innerHTML = `
    <div class="logos">
        <div class="navbar-brand-igac">
            <a href='https://www.igac.gov.co' target='_blank'><img alt='Logo IGAC' src='../../images/logo-igac.svg'/></a>
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
            <a href='/index.html'>Inicio</a>
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
        <li>
            <a id='loginBtn' onclick='gotoLogin();'>
                <img id='userPhoto' src='/images/user.png' onerror='defaultUserPhoto();' alt='Iniciar sesion'>
                <span id='userName' style='display: none;'>Iniciar sesion</span>
            </a>
        </li>
    </div>
    `
};

if (document.querySelector(".nav-underline")) {
    const navUnderline = document.querySelector(".nav-underline");
    navUnderline.innerHTML = `
    <a class='nav-link geodesica' href='/redes/red_geodesica.html'>Red Geod&eacute;sica</a>
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
                <div class='sub-title'>
                    Nuestras plataformas
                </div>
                <a href='https://www.colombiaot.gov.co/'>Colombia OT</a>
                <a href='https://www.colombiaenmapas.gov.co/'>Colombia en Mapas</a>
                <a href='https://diccionario.igac.gov.co/'>Diccionario Geogr&aacute;fico</a>
            </div>
            <div class='content-footer cla-a cla-b'>
                <div class='sub-title'>
                    Síguenos
                </div>
                <a href='https://co.linkedin.com/company/igac'><i class='fab fa-linkedin-in'></i><span>LinkedIn</span></a>
                <a href='https://es-la.facebook.com/IgacColombia/'><i class='fab fa-facebook-f'></i><span>Facebook</span></a>
                <a href='https://twitter.com/igacColombia?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'><i class='fab fa-twitter'></i><span>Twitter</span></a>
                <a href='https://www.instagram.com/igaccolombia/"><i class="fab fa-instagram'></i><span>Instagram</span></a>
            </div>
        </div>
    </div>
    `
};

$(function(){
    var current = location.pathname;
    $('.navbarnavigac li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) !== -1){
            $this.addClass('active');
        }
    })
})

if (document.querySelector (".nav-bar-toggle-igac")) {
    const dropDownButon = document.querySelector (".nav-bar-toggle-igac");
    const dropDownMenu = document.querySelector (".navbarnavigac");
    const dropDowntoggle = document.querySelector (".dropdownToggle");
    const dropDown = document.querySelector (".dropDown");
    dropDownButon.addEventListener('click', function handleClick(event) {
        dropDownMenu.classList.toggle('expandMenu');
    });
    dropDowntoggle.addEventListener('click', function handleClick(event) {
        dropDown.classList.toggle('expandMenuDrop');
    });
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

/*maestra popUp*/
if (document.querySelector(".modalButton")) {
    var modalButton = (document.querySelector(".modalButton"));
    var modalContent = innerHTML = `
    <div class='modal maestraModalRedes fade' id='exampleModal' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>
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
                        <div class='title'>ID :  AA CR00CRI</div>
                        <p class='locationField'>Location: <span>Bogota, Cundinamarca</span></p>
                        <p class='status'>Estado: <span>Activa</span></p>
                        <p class='entiti'>Eatidad: <span>EABB</span></p>
                        <p class='nameOfRed'>Nombre de la red: <span>Magna Eco</span></p>
                        <p class='red'>Red: <span>Activa</span></p>
                    </div>
                    <div class='button'>Editar</div>
                </div>
                <div class='sumary modalSection'>
                    <div class='content'>
                        <p class='dateInstalation'>Fecha de instalación: <span>DD/MM/AAAA</span></p>
                        <p class='dateActivation'>Fecha e activación en la red: <span>DD/MM/AAAA</span></p>
                        <p class='lastModify'>Última modificación: <span>DD/MM/AAAA</span></p>
                        <div class='d-flex'>
                            <div class='button typeB'>Descargar archivo de registro</div>
                            <div class='button typeB'>Mapa de la Red</div>
                        </div>
                    </div>
                </div>
                <div class='sumary modalSection noBorder'>
                    <div class='content'>
                        <p class='sub-title'>Coordenadas y velocidades</p>
                        <div class='d-flex'>
                            <p class='solution'>Solution:</p>
                            <p class='value'>value</p>
                        </div>
                        <div class='d-flex'>
                            <p class='reference'>Reference Epoch:</p>
                            <p class='value'>2015.0</p>
                        </div>
                        <div class='d-flex mt-4' style='align-items: flex-end; width: 100%; justify-content: space-around;'>
                            <div class='tables w-50' style='padding-right: 10px;'>
                                <div class='item'>
                                    <span class='title'>X:</span>
                                    <span class='value'>644009 0097 + 0.00366 m</span>
                                </div>
                                <div class='item'>
                                    <span class='title'>Y:</span>
                                    <span class='value'>644009 0097 + 0.00366 m</span>
                                </div>
                                <div class='item'>
                                    <span class='title'>Z:</span>
                                    <span class='value'>644009 0097 + 0.00366 m</span>
                                </div>
                            </div>
                            <div class='tables w-50' style='padding-left: 10px;'>
                                <div class='item'>
                                    <span class='title'>Vx:</span>
                                    <span class='value'>644009 0097 + 0.00366 m/a</span>
                                </div>
                                <div class='item'>
                                    <span class='title'>Vy:</span>
                                    <span class='value'>644009 0097 + 0.00366 m/a</span>
                                </div>
                                <div class='item'>
                                    <span class='title'>Vz:</span>
                                    <span class='value'>644009 0097 + 0.00366 m/a</span>
                                </div>
                            </div>                        
                        </div>
                        <div class='d-flex' style='align-items: flex-end; width: 100%; justify-content: space-around;'>
                            <div class='tables w-50' style='padding-right: 10px;'>
                                <div class='item'>
                                    <span class='title'>X:</span>
                                    <span class='value'>644009 0097 + 0.00366 m</span>
                                </div>
                                <div class='item'>
                                    <span class='title'>Y:</span>
                                    <span class='value'>644009 0097 + 0.00366 m</span>
                                </div>
                                <div class='item'>
                                    <span class='title'>Z:</span>
                                    <span class='value'>644009 0097 + 0.00366 m</span>
                                </div>
                            </div>
                            <div class='tables w-50' style='padding-left: 10px;'>
                                <div class='item'>
                                    <span class='title'>V-north:</span>
                                    <span class='value'>644009 0097 + 0.00366 m/a</span>
                                </div>
                                <div class='item'>
                                    <span class='title'>V-east:</span>
                                    <span class='value'>644009 0097 + 0.00366 m/a</span>
                                </div>
                                <div class='item'>
                                    <span class='title'>V-up:</span>
                                    <span class='value'>644009 0097 + 0.00366 m/a</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='suamry cta'>Consulta las <a>coordenadas semanales</a></div> 
                <div class='datos'>
                    <p>Datos de la estación</p>
                    <div class='chards'>
                        <img src="/images/images-redes/chardExample.svg" alt="">
                    </div>
                </div>                
            </div>
        </div>
        </div>
    </div>
    `
    $(modalButton).append(modalContent)
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
                {'data': 'id'},
                {'data': 'Municipio, departamento'},
                {'data': 'Estado'},
                {'data': 'Nombre de la red'},
                {'data': 'Entidad'},
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
                { className: "estados", "targets": [ 2 ] },
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
