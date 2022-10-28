var url_backend = "https://redgeodesica-cg.igac.gov.co";

var popup;
$.getJSON("/json/popup.json", function (datos) {
  popup = datos.popup;
});

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
    `;
}

if (document.querySelector(".nav-underline")) {
  const navUnderline = document.querySelector(".nav-underline");
  navUnderline.innerHTML = `
    <a class='nav-link geodesica' href='/redes/red_geodesica.html'>Red Geod&eacute;sica GNSS</a>
    <a class='nav-link gavimetrica' href='/redes/red_gavimetrica.html'>Red Gravim&eacute;trica</a>
    <a class='nav-link geomagnetica' href='/redes/red_geomagnetica.html'>Red Geomagn&eacute;tica</a>
    <a class='nav-link d-none' href='/redes/red_gnss.html'>Red GNSS Magna Sirgas</a>
    <a class='nav-link d-none' href='/redes/red_vertices_nivelacion.html'>Red de V&eacute;rtices y Redes de Nivelaci&oacute;n</a>
    <a class='nav-link tablero' href='/redes/tablero_control.html'>Tablero de control</a>
    `;
}

if (document.querySelector(".nav-underline.navHerramientas")) {
  const navUnderline = document.querySelector(".nav-underline");
  navUnderline.innerHTML = `
    <a class='servicios nav-link' href='servicios.html'>Servicios</a>
    <a class='aplicaciones nav-link' href='aplicaciones_herramientas.html'>Aplicaciones y Herramientas</a>
    <a class='modelos nav-link' href='modelos.html'>Modelos</a>
    <a class='datos nav-link' href='datos.html'>Datos</a>
    <a class='norma nav-link' href='normatividad.html'>Normatividad</a>
    <a class='guias nav-link' href='guias_manuales.html'>Gu&iacute;as y manuales</a>
    `;
}

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
    `;
}

if (document.querySelector(".nav-bar-toggle-igac")) {
  const dropDownButon = document.querySelector(".nav-bar-toggle-igac");
  const dropDownMenu = document.querySelector(".navbarnavigac");
  const dropDowntoggle = document.querySelector(".dropdownToggle");
  const dropDown = document.querySelector(".dropDown");
  dropDownButon.addEventListener("click", function handleClick(event) {
    dropDownMenu.classList.toggle("expandMenu");
  });
  dropDowntoggle.addEventListener("click", function handleClick(event) {
    dropDown.classList.toggle("expandMenuDrop");
  });
}

if (document.querySelector(".main.inicio")) {
  $("a.inicio").addClass("active");
}

if (document.querySelector(".main.redes")) {
  $("a.redes").addClass("active");
}
if (document.querySelector(".main.recursos")) {
  $("a.recursos").addClass("active");
}
if (document.querySelector(".geodesicaMaestra")) {
  $("a.geodesica").addClass("active");
}
if (document.querySelector(".gavimetricaMaestra")) {
  $("a.gavimetrica").addClass("active");
}
if (document.querySelector(".geomagneticaMaestra")) {
  $("a.geomagnetica").addClass("active");
}
if (document.querySelector(".tableroMaestra")) {
  $("a.tablero").addClass("active");
}
if (document.querySelector(".serviciosMaestra")) {
  $("a.servicios").addClass("active");
}
if (document.querySelector(".normaMaestra")) {
  $("a.norma").addClass("active");
}
if (document.querySelector(".modelosMaestra")) {
  $("a.modelos").addClass("active");
}
if (document.querySelector(".datosMaestra")) {
  $("a.datos").addClass("active");
}
if (document.querySelector(".aplicacionesMaestra")) {
  $("a.aplicaciones").addClass("active");
}
if (document.querySelector(".guiasMaestra")) {
  $("a.guias").addClass("active");
}

/*reporta novedades popUp*/
if (document.querySelector(".modalButtonReportar")) {
  var modalButton = document.querySelector(".modalButtonReportar");
  var modalContent = (innerHTML = ` 
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

                                <select id="depto2" >
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
                                    <label class='type2' id='inputCoordinateLatitudLabel' for='inputCoordinateLatitud'>Ingrese identificaci&oacute;n del v&eacute;rtice o nomenclatura (siempre y cuando sea legible)&rdquo; </label>
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
    `);
  $("body").append(modalContent);
}

$(document).ready(function () {
  $.getJSON("/json/deptos.json", function (datos) {
    var data = datos.departamentos;
    var datamuni = datos.municipios;

    $("#depto2,#depto1").select2({
      data: data,
      dropdownParent: $("#reportarModal"),
    });

    $("#depto2").on("select2:selecting", function (e) {
      var muni = [];
      datamuni.map(function (i) {
        if (i.id.substring(0, 2) == e.params.args.data.id) {
          muni.push(i);
        }
      });
      $("#muni").empty();
      $("#muni").select2({
        data: muni,
        dropdownParent: $("#reportarModal"),
      });
    });

    $("#depto1").on("select2:selecting", function (e) {
      var muni = [];
      datamuni.map(function (i) {
        if (i.id.substring(0, 2) == e.params.args.data.id) {
          muni.push(i);
        }
      });
      $("#muni1").empty();
      $("#muni1").select2({
        data: muni,
        dropdownParent: $("#reportarModal"),
      });
    });

    var muni = [];
    datamuni.map(function (i) {
      if (i.id.substring(0, 2) == "99") {
        muni.push(i);
      }
    });

    $("#muni,#muni1").select2({
      data: muni,
      dropdownParent: $("#reportarModal"),
    });
  });

  function formObj2Json(formArray) {
    //serialize data function
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
      var depto = $("#depto2").select2("data")[0];
      var muni = $("#muni").select2("data")[0];

      var depto1 = $("#depto1").select2("data")[0];
      var muni1 = $("#muni1").select2("data")[0];

      var inputAdicional = document.getElementById("inputAdicional");
      var inputOtraNovedad = document.getElementById("inputOtraNovedad");

      var inputVertice = document.getElementById("inputVertice");

      var inputNombre = document.getElementById("inputNombre");
      var inputCorreo = document.getElementById("inputCorreo");
      var inputTelefono = document.getElementById("inputTelefono");
      var inputEmpresa = document.getElementById("inputEmpresa");
      var inputDireccion = document.getElementById("inputDireccion");

      var selected = [];
      $(".checkList input:checked").each(function () {
        selected.push($(this).attr("name"));
      });
      console.log(selected);

      var json = {
        depto: depto1.text,
        muni: muni1.text,
        inputAdicional: inputAdicional.value,
        inputVertice: inputVertice.value,
        inputOtraNovedad: inputOtraNovedad.value,
        inputNombre: inputNombre.value,
        inputCorreo: inputCorreo.value,
        inputTelefono: inputTelefono.value,
        inputEmpresa: inputEmpresa.value,
        inputDireccion: inputDireccion.value,
        inputMunicipio: muni1.text,
        inputDepartamento: depto1.text,
        TipoNovedad: selected,
      };

      console.log(json);

      event.preventDefault();
      event.stopPropagation();

      var logoImg = $("input[name=streamfile]").get(0).files[0];
      var formData = new FormData();
      formData.append("streamfile", logoImg);

      formData.append("json", JSON.stringify(json));

      $.ajax({
        url: url_backend + "/correo1",
        type: "POST",
        contentType: false,
        processData: false,
        data: formData,
        dataType: "json",
        success: function (res) {
          console.log(res);
          if (res.resultado) {
            alert("Solicitud enviada con exito");
          } else {
            alert("Fallo al enviar la solicitud");
          }
        },
      });
    }
    this.classList.add("was-validated");
  });

  // Email validation.
  $("#inputCorreo").change(function () {
    var email = $(this);
    if (email.is(":invalid")) {
      email.removeClass("is-valid").addClass("is-invalid");
      email.siblings(".invalid-feedback").text(email.prop("validationMessage"));
    } else {
      email.removeClass("is-invalid").addClass("is-valid");
    }
  });
});

/*reporta novedades popUp*/
if (document.querySelector(".modalIntEstaciones")) {
  var modalButton = document.querySelector(".modalIntEstaciones");
  var modalContent = (innerHTML = ` 
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
    `);
  $("body").append(modalContent);
}

/*reporta novedades red activa popUp*/
if (document.querySelector(".modalIntEstacionesActiva")) {
  var modalButton = document.querySelector(".modalIntEstacionesActiva");
  var modalContent = (innerHTML = ` 
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
    `);
  $("body").append(modalContent);
}

/*reporta novedades red activa popUp*/
if (document.querySelector(".modalEstaciones")) {
  var modalButton = document.querySelector(".modalEstaciones");
  var modalContent = (innerHTML = ` 
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
                                        <label for="iNombre">Nombre</label>
                                        <input type="text" class="form-control" id="iNombre" placeholder="Nombre" required>
                                        <div class="invalid-feedback">
                                            Ingrese un nombre
                                        </div>
                                    </div>

                                        <div class="col-md-6">
                                            <label for="iCorreo">Correo electrónico</label>
                                            <input type="email" class="form-control" id="iCorreo" placeholder="Correo electrónico" required>
                                            <div class="invalid-feedback">
                                                Ingrese un correo electrónico válido
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">

                                    <div class="col-md-6">
                                        <label for="iTelefono">Télefono de contacto</label>
                                        <input type="number" class="form-control" id="iTelefono" placeholder="Teléfono de contacto" required>
                                        <div class="invalid-feedback">
                                            Ingrese un número de teléfono
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="iEmpresa">Empresa</label>
                                        <input type="text" class="form-control" id="iEmpresa" placeholder="Empresa" required>
                                        <div class="invalid-feedback">
                                            Ingrese un nombre de empresa
                                        </div>
                                    </div>

                                    </div>

                                    <div class="row">

                                    <div class="col-md-6">
                                        <label for="iDireccion">Dirección</label>
                                        <input type="text" class="form-control" id="iDireccion" placeholder="Dirección" required>
                                        <div class="invalid-feedback">
                                            Ingrese una dirección
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="iMunicipio">Municipio</label>
                                        <select id="muni3"></select>
                                        <div class="invalid-feedback">
                                            Ingrese un municipio
                                        </div>
                                    </div>

                                    </div>

                                    <div class="row">

                                    <div class="col-md-6">
                                        <label for="iDepartamento">Departamento</label>
                                        <select id="depto3"></select>
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
                                 

                                    

                                    <div class='form-title mt-3'>
                                        <h2>Información de la estación</h2>
                                    </div>

                                    

                                    <div class='form-title mt-2'>
                                        <h2>Seleccione un punto en el mapa</h2>
                                    </div>

                                    <div id="viewDiv1"></div>


                                    <table style='width: 100%;' id='example' style='width: 100%;' class='display mt-2  mb-0 form-new-est'>
                                   
                        
                                    <tr>
                                        <th>No</th>
                                        <th>1</th>
                                        <th>2</th>
                                    </tr>

                                    <tr>
                                        <td>Nombre o identificador de la estación</td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba un nombre" class="form-control" name="Nombre o identificador de la estación" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba un nombre" name="Nombre o identificador de la estación" class="form-control" required></td>
                                    </tr> 

                                    <tr>
                                        <td>Fecha de monumentacion de la estacion</td>
                                        <td><input style="width: 100%;" type="date" placeholder="Escriba una fecha" name="Fecha de monumentacion de la estacion" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="date" placeholder="Escriba una fecha" name="Fecha de monumentacion de la estacion" class="form-control" required></td>
                                    </tr>

                                    <tr>
                                        <td>Edad en años</td>
                                        <td><input style="width: 100%;" type="number" placeholder="Escriba una edad" name="Edad en años" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="number" placeholder="Escriba una edad" name="Edad en años" class="form-control" required></td>
                                    </tr>                                     
                                    <tr>
                                        <td>Entidad que materializó</td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba el nombre de la entidad" name="Entidad que materializó" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba el nombre de la entidad" name="Entidad que materializó" class="form-control" required></td>
                                    </tr> 
                                    <tr>
                                        <td>Departamento</td>
                                        <td><select id="dp1"></select></td>
                                        <td><select id="dp2"></select></td>
                                    </tr>     
                                        
                                    <tr>
                                        <td>Municipio</td>
                                        <td><select id="mu1"></select></td>
                                        <td><select id="mu2"></select></td>
                                    </tr>

                                    <tr>
                                        <td>Latitud</td>
                                        <td><input id="lat1" style="width: 100%;" type="number" step="0.00000001" placeholder="Ingrese un número" name="Latitud" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="number" step="0.00000001" placeholder="Ingrese un número" name="Latitud" class="form-control" required></td>
                                    </tr> 

                                    <tr>
                                        <td>Longitud</td>
                                        <td><input id="lon1" style="width: 100%;" type="text" placeholder="ingrese un número" name="Longitud" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="Ingrese un número" name="Longitud" class="form-control" required></td>
                                    </tr> 

                                    <tr>
                                        <td>Sitio donde se ubica (edificio, predio o lugar)</td>
                                        <td><input style="width: 100%;" type="text" placeholder="edificio, predio o lugar" name="Sitio donde se ubica (edificio, predio o lugar)" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="edificio, predio o lugar" name="Sitio donde se ubica (edificio, predio o lugar)" class="form-control" required></td>
                                    </tr> 
                                        


                                    <tr>
                                        <td>Tipo de monumentación</td>
                                        <td><input style="width: 100%;" type="text" placeholder="Tipo de monumentación" name="Tipo de monumentación" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="Tipo de monumentación" name="Tipo de monumentación" class="form-control" required></td>
                                    </tr> 

                                    <tr>
                                        <td>Altura instrumental</td>
                                        <td><input style="width: 100%;" type="number" step="0.0005" placeholder="Ingrese un número" name="Altura instrumental" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="number" step="0.0005" placeholder="Ingrese un número" name="Altura instrumental" class="form-control" required></td>
                                    </tr> 

                                    <tr>
                                        <td>Tipo de antena</td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba un tipo de antena" name="Tipo de antena" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba un tipo de antena" name="Tipo de antena" class="form-control" required></td>
                                    </tr> 
                                        
                                    <tr>
                                        <td>Serial de antena</td>
                                        <td><input style="width: 100%;" type="text" placeholder="Ingrese un número" name="Serial de antena" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="Ingrese un número" name="Serial de antena" class="form-control" required></td>
                                    </tr> 
                                        
                                    <tr>
                                        <td>Tipo de receptor</td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba un receptor" name="Tipo de receptor" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba un receptor" name="Tipo de receptor" class="form-control" required></td>
                                    </tr> 

                                    <tr>
                                        <td>Serial de receptor</td>
                                        <td><input style="width: 100%;" type="text" placeholder="Ingrese un número" name="Serial de receptor" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="Ingrese un número" name="Serial de receptor" class="form-control" required></td>
                                    </tr> 

                                    <tr>
                                        <td>Estado actual de la estación</td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba un estado" name="Estado actual de la estación" class="form-control" required></td>
                                        <td><input style="width: 100%;" type="text" placeholder="Escriba un estado" name="Estado actual de la estación" class="form-control" required></td>
                                    </tr> 

                                    <tr>
                                        <td>Sistema de telecomunicación</td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación" class="form-control" required>
                                                    <option value="">Seleccione una opción</option>
                                                    <option value="Celular">Celular</option>
                                                    <option value="Satelital">Satelital</option>
                                                    <option value="Radio enlace">Radio enlace</option>
                                                    <option value="Otro">Otro</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema de telecomuicación" class="form-control" required>
                                                <option value="">Seleccione una opción</option>
                                                <option value="Celular">Celular</option>
                                                <option value="Satelital">Satelital</option>
                                                <option value="Radio enlace">Radio enlace</option>
                                                <option value="Otro">Otro</option>
                                                </select>
                                            </td>
                                    </tr> 

                                    <tr>
                                        <td>IP</td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="IP" class="form-control" required>
                                                    <option value="">Seleccione una opción</option>    
                                                    <option value="Direccion estatica">Direccion estatica</option>
                                                    <option value="Puerto TCP/IP">Puerto TCP/IP</option>
                                                    <option value="Puerto HTTP">Puerto HTTP</option>
                                                    <option value="Puerto FTP<">Puerto FTP</option>
                                                    <option value="Puerto NTRIP">Puerto NTRIP</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="IP" class="form-control" required>
                                                    <option value="">Seleccione una opción</option>    
                                                    <option value="Direccion estatica">Direccion estatica</option>
                                                    <option value="Puerto TCP/IP">Puerto TCP/IP</option>
                                                    <option value="Puerto HTTP">Puerto HTTP</option>
                                                    <option value="Puerto FTP<">Puerto FTP</option>
                                                    <option value="Puerto NTRIP">Puerto NTRIP</option>
                                                </select>
                                            </td>
                                    </tr>    
                                        
                                    <tr>
                                        <td>Sistema eléctrico</td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema electrico" class="form-control" required>
                                                    <option value="">Seleccione una opción</option>        
                                                    <option value="Fotovoltaico">Fotovoltaico</option>
                                                    <option value="Corriente electrica">Corriente electrica</option>
                                                    <option value="Hibrido">Hibrido</option>
                                                </select>
                                            </td>
                                            <td>
                                                <select style="width: 100%; height: 25px;" name="Sistema electrico" class="form-control" required>
                                                    <option value="">Seleccione una opción</option>        
                                                    <option value="Fotovoltaico">Fotovoltaico</option>
                                                    <option value="Corriente electrica">Corriente electrica</option>
                                                    <option value="Hibrido">Hibrido</option>
                                                </select>
                                            </td>
                                    </tr>                                        
                                        
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
    `);
  $("body").append(modalContent);
}

window.onload = function () {
  require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/widgets/ScaleBar",
    "esri/widgets/LayerList",
    "esri/widgets/Legend",
    "esri/widgets/Expand",
    "esri/widgets/Compass",
    "esri/geometry/Extent",
    "esri/layers/MapImageLayer",
    "esri/layers/GraphicsLayer",
    "esri/widgets/Sketch",
    "esri/layers/VectorTileLayer",
  ], (
    esriConfig,
    Map,
    MapView,
    Home,
    ScaleBar,
    LayerList,
    Legend,
    Expand,
    Compass,
    Extent,
    MapImageLayer,
    GraphicsLayer,
    Sketch,
    VectorTileLayer
  ) => {
    esriConfig.apiKey =
      "AAPK2a2e861a0c794bfdb29a1b4ce47b1583OBbY7CvHSkUPhQ20FG1hZEbAl5GmTTZcs-cyoy2tw5to5j_pJiiTW6J_KRbBx-qS";

    const vtlLayer = new VectorTileLayer({
      url: "https://tiles.arcgis.com/tiles/RVvWzU3lgJISqdke/arcgis/rest/services/Mapa_base_topografico/VectorTileServer",
    });
    const layer = new MapImageLayer({
      url: "https://mapas.igac.gov.co/server/rest/services/centrocontrol/EstacionesGeodesicas/MapServer",
    });
    var graphicsLayer = new GraphicsLayer();
    const map = new Map({
      layers: [vtlLayer, graphicsLayer],
    });
    const view = new MapView({
      container: "viewDiv1",
      map: map,
      center: [-74, 4], // longitude, latitude
      zoom: 4.8,
    });
    // Sketch widget
    var sketch = new Sketch({
      view: view,
      layer: graphicsLayer,
      availableCreateTools: ["point"],
      creationMode: "update",
    });

    sketch.visibleElements = {
      selectionTools: {
        "lasso-selection": false,
      },
      settingsMenu: false,
    };

    // Add widget to the view
    view.ui.add(sketch, "top-right");

    const homeBtn = new Home({
      view: view,
    });
    const scaleBar = new ScaleBar({
      view: view,
      unit: "dual",
    });
    const layerList = new LayerList({
      view: view,
    });
    const legend = new Legend({
      view: view,
    });
    const layerListExpand = new Expand({
      view: view,
      content: layerList,
      expanded: false,
      expandTooltip: "Expand LayerList",
    });
    const legendExpand = new Expand({
      view: view,
      content: legend,
      expandTooltip: "Expand Legend",
      expanded: false,
    });
    const compass = new Compass({
      view: view,
      visible: false,
    });

    view.ui.add(homeBtn, "top-left");
    view.ui.add(scaleBar, "bottom-right");
    view.ui.add(layerListExpand, "top-right");
    view.ui.add(legendExpand, "bottom-left");
    view.ui.add(compass, "top-left");

    // load the Compass only when the view is rotated
    view.watch("rotation", function (rotation) {
      if (rotation && !compass.visible) {
        compass.visible = true;
      }
    });

    sketch.on("create", function (event) {
      if (event.state === "complete") {
        document.getElementById("lat1").value =
          event.graphic.geometry.latitude.toFixed(5);
        document.getElementById("lon1").value =
          event.graphic.geometry.longitude.toFixed(5);
      } else if (event.state === "start") {
        graphicsLayer.removeAll();
      }
    });
    sketch.on("update", function (event) {
      if (event.state === "complete") {
        document.getElementById("lat1").value =
          event.graphics[0].geometry.latitude.toFixed(5);
        document.getElementById("lon1").value =
          event.graphics[0].geometry.longitude.toFixed(5);
      }
    });
  });

  function formObj2Json(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0, len = formArray.length; i < len; i++)
      returnArray[formArray[i].name] = formArray[i].value;
    return returnArray;
  }
  $.getJSON("/json/deptos.json", function (datos) {
    var data = datos.departamentos;
    var datamuni = datos.municipios;

    $("#depto3,#dp1,#dp2").select2({
      data: data,
      dropdownParent: $("#modalEstaciones"),
    });

    $("#depto3").on("select2:selecting", function (e) {
      var muni = [];
      datamuni.map(function (i) {
        if (i.id.substring(0, 2) == e.params.args.data.id) {
          muni.push(i);
        }
      });
      $("#muni3").empty();
      $("#muni3").select2({
        data: muni,
        dropdownParent: $("#modalEstaciones"),
      });
    });

    $("#dp1").on("select2:selecting", function (e) {
      var muni = [];
      datamuni.map(function (i) {
        if (i.id.substring(0, 2) == e.params.args.data.id) {
          muni.push(i);
        }
      });
      $("#mu1").empty();
      $("#mu1").select2({
        data: muni,
        dropdownParent: $("#modalEstaciones"),
      });
    });

    $("#dp2").on("select2:selecting", function (e) {
      var muni = [];
      datamuni.map(function (i) {
        if (i.id.substring(0, 2) == e.params.args.data.id) {
          muni.push(i);
        }
      });
      $("#mu2").empty();
      $("#mu2").select2({
        data: muni,
        dropdownParent: $("#modalEstaciones"),
      });
    });

    var muni = [];
    datamuni.map(function (i) {
      if (i.id.substring(0, 2) == "99") {
        muni.push(i);
      }
    });

    $("#muni3,#mu1,#mu2").select2({
      data: muni,
      dropdownParent: $("#reportarModal"),
    });
  });

  $("#needs-validation").submit(function (event) {
    function getAllValues() {
      let result = [];

      $("#example tr").each(function () {
        var name = "";
        var elementos = {};

        $(this)
          .find("td:first-child")
          .each(function () {
            name = $(this).text();
          });

        elementos["val"] = name;

        $(this)
          .find("input")
          .each(function (index) {
            elementos[index] = $(this).val();
          });
        $(this)
          .find("select option:selected")
          .each(function (index) {
            elementos[index] = $(this).text();
          });

        result.push(elementos);
      });

      return result;
    }

    var result = getAllValues();
    console.log(result);

    if (this.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      event.stopPropagation();

      var inputNombre = document.getElementById("iNombre");
      var inputCorreo = document.getElementById("iCorreo");
      var inputTelefono = document.getElementById("iTelefono");
      var inputEmpresa = document.getElementById("iEmpresa");
      var inputDireccion = document.getElementById("iDireccion");
      var inputDepartamento = $("#depto3").select2("data")[0];
      var inputMunicipio = $("#muni3").select2("data")[0];

      var json = {
        inputNombre: inputNombre.value,
        inputCorreo: inputCorreo.value,
        inputTelefono: inputTelefono.value,
        inputEmpresa: inputEmpresa.value,
        inputDireccion: inputDireccion.value,
        inputMunicipio: inputMunicipio.text,
        inputDepartamento: inputDepartamento.text,
        tabla: result,
      };

      console.log(json);

      $.ajax({
        url: url_backend + "/correo",
        type: "GET",
        data: json,
        dataType: "json", // added data type
        success: function (res) {
          console.log(res);
          if (res.resultado) {
            alert("Solicitud enviada con exito");
          } else {
            alert("Fallo al enviar la solicitud");
          }
        },
      });
    }
    this.classList.add("was-validated");
  });

  // Email validation.
  $("#inputCorreo").change(function () {
    var email = $(this);
    if (email.is(":invalid")) {
      email.removeClass("is-valid").addClass("is-invalid");
      email.siblings(".invalid-feedback").text(email.prop("validationMessage"));
    } else {
      email.removeClass("is-invalid").addClass("is-valid");
    }
  });
};

/*data tables*/
if (document.querySelector("#redTable2")) {
  $(document).ready(function () {
    // Setup - add a text input to each footer cell
    $("#redTable2 thead tr")
      .clone(true)
      .addClass("filters")
      .insertAfter(".filterContainer");

    var table = $("#redTable2").DataTable({
      colums: [
        { data: "id" },
        { data: "Municipio, departamento" },
        { data: "Estado" },
        { data: "Nombre de la red" },
        { data: "Entidad" },
      ],
      orderCellsTop: true,
      fixedHeader: true,
      scrollX: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Busca una estación",
        paginate: {
          next: '<i class="fa fa-angle-right"></i>',
          previous: '<i class="fa fa-angle-left"></i>',
        },
      },
      columnDefs: [
        { className: "estados", targets: [2] },
        { className: "estados", targets: [3] },
        { className: "redes", targets: [4] },
      ],
      bInfo: false,
      bLengthChange: false,
      initComplete: function () {
        var api = this.api();

        // For each column
        api
          .columns()
          .eq(0)
          .each(function (colIdx) {
            // Set the header cell to contain the input element
            var cell = $(".filters th").eq(
              $(api.column(colIdx).header()).index()
            );
            var title = $(cell).text();
            $(cell).html('<input type="text" placeholder="' + title + '" />');

            // On every keypress in this input
            $(
              "input",
              $(".filters th").eq($(api.column(colIdx).header()).index())
            )
              .off("keyup change")
              .on("change", function (e) {
                // Get the search value
                $(this).attr("title", $(this).val());
                var regexr = "({search})"; //$(this).parents('th').find('select').val();

                var cursorPosition = this.selectionStart;
                // Search the column for that value
                api
                  .column(colIdx)
                  .search(
                    this.value != ""
                      ? regexr.replace("{search}", "(((" + this.value + ")))")
                      : "",
                    this.value != "",
                    this.value == ""
                  )
                  .draw();
              })
              .on("keyup", function (e) {
                e.stopPropagation();

                $(this).trigger("change");
                $(this).focus()[0];
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
    $("#redTable thead tr")
      .clone(true)
      .addClass("filters")
      .insertAfter(".filterContainer");

    var table = $("#redTable").DataTable({
      colums: [
        { data: "id" },
        { data: "Municipio, departamento" },
        { data: "Estado" },
        { data: "Nombre de la red" },
        { data: "Entidad" },
      ],
      orderCellsTop: true,
      fixedHeader: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Busca una estación",
        paginate: {
          next: '<i class="fa fa-angle-right"></i>',
          previous: '<i class="fa fa-angle-left"></i>',
        },
      },
      columnDefs: [
        { className: "estados", targets: [2] },
        { className: "redes", targets: [4] },
      ],
      bInfo: false,
      bLengthChange: false,
      initComplete: function () {
        var api = this.api();

        // For each column
        api
          .columns()
          .eq(0)
          .each(function (colIdx) {
            // Set the header cell to contain the input element
            var cell = $(".filters th").eq(
              $(api.column(colIdx).header()).index()
            );
            var title = $(cell).text();
            $(cell).html('<input type="text" placeholder="' + title + '" />');

            // On every keypress in this input
            $(
              "input",
              $(".filters th").eq($(api.column(colIdx).header()).index())
            )
              .off("keyup change")
              .on("change", function (e) {
                // Get the search value
                $(this).attr("title", $(this).val());
                var regexr = "({search})"; //$(this).parents('th').find('select').val();

                var cursorPosition = this.selectionStart;
                // Search the column for that value
                api
                  .column(colIdx)
                  .search(
                    this.value != ""
                      ? regexr.replace("{search}", "(((" + this.value + ")))")
                      : "",
                    this.value != "",
                    this.value == ""
                  )
                  .draw();
              })
              .on("keyup", function (e) {
                e.stopPropagation();

                $(this).trigger("change");
                $(this).focus()[0];
              });
          });
      },
    });
  });
}

/*selector de estados de redes*/
$(function () {
  $("td.redes:contains(Activa)").addClass("activa");
});

$(function () {
  $("td.redes:contains(Pasiva)").addClass("pasiva");
});

/*selector de estados de redes*/
$(function () {
  $("td.estados:contains(Inactivo)").html(
    '<span class="inactivo">Inactivo</span>'
  );
});

$(function () {
  $("td.estados:contains(Removida)").html(
    '<span class="removido">Removida</span>'
  );
});

$(function () {
  $("td.estados:contains(Activo)").html('<span class="activo">Activo</span>');
});

/*tabulador*/
if (document.querySelector(".tab-content")) {
  var button = document.getElementsByClassName("but"),
    tabContent = document.getElementsByClassName("tab-content");
  tabContent[0].style.display = "block";

  function city(e, city) {
    var i;
    for (i = 0; i < button.length; i++) {
      tabContent[i].style.display = "none";
      button[i].classList.remove("active");
    }
    document.getElementById(city).style.display = "block";
    e.currentTarget.classList.add("active");
  }
}

$(document).ready(function () {
  $("#example").DataTable({
    scrollX: true,
    searching: false,
    paging: false,
    info: false,
  });

  $("#example2").DataTable({
    scrollX: true,
    searching: false,
    paging: false,
    info: false,
  });

  $(".modalIntEstaciones").one("click", function () {
    setTimeout(() => {
      $("#example_wrapper .sorting").last().trigger("click");
    }, 500);
  });

  $("#table_id").DataTable({
    scrollX: true,
    searching: false,
    paging: false,
    info: false,
  });

  $(".maestraModalRedes").one("click", function () {
    setTimeout(() => {
      $("#table_id_wrapper .sorting").last().trigger("click");
    }, 500);
  });

  /*tabs*/

  $(".bodyTarget2").hide();
  $(".redActivaButton").on("click", function () {
    $(this).addClass("active");
    $(".redPasivaButton").removeClass("active");
    $(".bodyTarget1").show();
    $(".bodyTarget2").hide();
  });
  $(".redPasivaButton").on("click", function () {
    $(this).addClass("active");
    $(".redActivaButton").removeClass("active");
    $(".bodyTarget2").show();
    $(".bodyTarget1").hide();
  });

  /*ver mapa*/
  $(".iframeMaps").hide();
  $(".mapView").on("click", function () {
    $(this).toggleClass("active");
    if ($(".mapView").hasClass("active")) {
      $(".iframeMaps").show();
      $(".otraNovedadFoto").css("margin-top", "-150px");
    } else {
      $(".iframeMaps").hide();
      $(".otraNovedadFoto").css("margin-top", "0");
    }
  });
});

/*carousel*/
$(".carousel").carousel({
  interval: false,
});

