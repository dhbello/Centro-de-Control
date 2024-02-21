if (document.querySelector(".navbarIgacContainer")) {
    const navbarIgacContainer = document.querySelector(".navbarIgacContainer");
    navbarIgacContainer.innerHTML = `
      <nav>
        <div class='navbarigac'>
            <div class='logos'>
                <a href='https://www.igac.gov.co' class='navbar-brand-igac' target='_blank'>
                    <img alt='Logo IGAC' src='/images/nav/logo.png'>
                </a>
                <img src='/images/nav/centrodecontrol.svg' alt='Colombia en Mapas'>
            </div>
            <ul id='link-list'>
                <li>
                  <a class='inicio' href='/index.html' rel='noopener'>Inicio</a>
                </li>
                <li>
                  <a class='redes' href='/redes/red_geodesica.html' rel='noopener'>Redes</a>
                </li>
                <li>
                  <a class='recursos' href='/herramientas/servicios.html' rel='noopener'>Recursos</a>                
                </li>
                <li>
                    
                <!-- sitio para icono de usuario -->
  
                
                  
  
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                      <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                      </div>
                      <div class="offcanvas-body">
                        <div class="container mt-5">
                          <div class="row">
                            <div id="contenidoOffCanvas" class="col">
  
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                              <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#registro" type="button" role="tab" aria-controls="home" aria-selected="true">Registro</button>
                              </li>
                              <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#login" type="button" role="tab" aria-controls="profile" aria-selected="false">Login</button>
                              </li>                           
                            </ul>
                            <div class="tab-content" id="myTabContent">
                              <div class="tab-pane fade show active" id="registro" role="tabpanel" aria-labelledby="home-tab">
                              
                                          <div class="main-block">
                                              <h1>Registro</h1>
                                              <form id="formRegistro" onsubmit="registro(event)">          
                                              
                                                <hr>
                                                
                                                <input type="text" name="usuario" id="usuario" placeholder="usuario" minlength="6" required/>
                    
                                                
                    
                                                <input type="text" name="RegistroCorreo_electronico" minlength="8" id="RegistroCorreo_electronico" placeholder="Correo" required/>                      
                    
                                                <select class="" name="tipo_documento" required>
                                                  <option value="" selected>Seleccione Documento</option>
                                                  <option value="1">Cédula de ciudadanía</option>
                                                  <option value="2">Cédula de extranjería</option>
                                                  <option value="3">NIT</option>
                                                  <option value="4">Pasaporte</option>
                                                </select>
                    
                                                <input type="text" name="numero_documento" id="numero_documento" minlength="6" placeholder="N° Documento" required/>
                    
                                                <input type="text" name="telefono" id="telefono" placeholder="Telefono"/>                 
                                                
                                                <input type="password" name="RegistroContrasenia" id="RegistroContrasenia" placeholder="Contraseña" minlength="8" required/>                         
                    
                    
                    
                                                
                                                <hr>
                                                <div class="btn-block">
                                                  <p>©Copyright 2021 - Todos los derechos reservados Gobierno de Colombia</p>
                                                  <button type="submit" id="btnRegistrar">Enviar</button>
                                                </div>
                                              </form>
                                        </div>
  
  
  
                              
                              </div>
  
                              <div class="tab-pane fade" id="login" role="tabpanel" aria-labelledby="profile-tab">
                                
                                          <div class="main-block">
                                                <h1>Login</h1>
                                                <form id="formLogin" onsubmit="login(event)">          
                                                
                                                  <hr>                                                  
                      
                                                  <input type="text" name="correo_electronico" id="correo_electronico" placeholder="Correo" required/>                                                      
                                                  
                                                  <input type="password" name="contrasenia" id="contrasenia" placeholder="Contraseña" required/>                                        
                                                  
                                                  <hr>
  
                                                  <div class="div-error">
                                                    <span id="errorLogin" class="error"></span>
                                                  </div>
  
  
                                                  <div class="btn-block">
                                                    <button type="submit" id="btnLogin">Enviar</button>
                                                    <p><a class="link-recover" href="/herramientas/auth/email.html" target="_blank">click  aquí para restaurar la contraseña</a></p>
                                                  </div>
                                                </form>
                                          </div>
                              </div>                            
  
                              
                            </div>
  
  
  
  
  
                            
  
                                
  
                            </div>
  
  
                          </div>
                         
                        </div>
                        
                      </div>
                    </div>
                                    
                    
                    
                    
                    
                </li>
            </ul>
            <button class='nav-bar-toggle-igac'>
                <div class='icon-bar'></div>
                <div class='icon-bar'></div>
                <div class='icon-bar'></div>
            </button>
        </div>
        <div class='navbarnavigac'>            
        </div>
      </nav>
      `;
  }




if (document.querySelector(".footer")) {
    const footerIgac = document.querySelector(".footer");
    footerIgac.innerHTML = `
    <div class='containerf'>
      <div class='footer-container'>
          <div class='rowf'>
              <div class='col-md-6f'>
                  <h2 class='footer-titulo'>Instituto Geográfico Agustín Codazzi - IGAC</h2>
              </div>
              <div class='logos-footer col-md-6f'>&nbsp;</div>
          </div>
          <div class='rowf'>
              <div class='col-md-6f'>
                  <h2 class='sub-titulo-sede-gov-co'>Información sede principal</h2>
              
                  <h3>Dirección:</h3> 
                  <p>Bogotá D.C. - Carrera 30 # 48-51</p>
              
                  <h3>Horarios de atención al ciudadano:</h3>
                  <p>Abierto al público de lunes a viernes de 9:00 a.m. a 4:00 p.m. jornada continua Sede Central y territorial Cundinamarca (Horario de atención temporal acatando las medidas y demás regulaciones de bioseguridad)</p>
                  <h3>Teléfono Conmutador:</h3>
                  <p>
                      <a href='tel:6016531888'>+57 601 653 18 88</a>
                  </p>
                  <h3>Correo de contacto:</h3>
                  <p>
                      <a href='mailto:contactenos@igac.gov.co'>contactenos@igac.gov.co</a>
                  </p>
              
                  <h3>Correo de notificaciones judiciales:</h3>
                  <p>
                      <a href='mailto:judiciales@igac.gov.co'>judiciales@igac.gov.co</a>
                  </p>
                  <p>NIT: 8999990049</p>
              
                  <p>©Copyright 2021 - Todos los derechos reservados Gobierno de Colombia</p>
              </div>                
              <div class='col-md-6f'>
                  <h3>Contáctenos en nuestras redes sociales</h3>
              
                  <div class='redes-sociales'>
                      <p>
                          <a href='https://www.facebook.com/IgacColombia' tabindex='-1' target='_blank'>
                              <img alt='Visitar Facebook IGAC' class='icono-redes' src='/images/footer/facebook.svg'>
                              Facebook IGAC 
                          </a>
                      </p>
              
                      <p>
                          <a href='https://twitter.com/igacColombia' tabindex='-1' target='_blank'>
                              <img alt='Visitar Twitter IGAC' class='icono-redes' src='/images/footer/twitter.svg'>
                              Twitter IGAC 
                          </a>
                      </p>
              
                      <p>
                          <a href='https://www.instagram.com/accounts/login/?next=/igacColombia/' tabindex='-1' target='_blank'><img alt='Visitar Instagram IGAC' class='icono-redes' src='/images/footer/instagram.svg'>
                              Instagram IGAC 
                          </a>
                      </p>
                  </div>                    
                  <div class='footer-enlaces'><a class='btn-low'>Políticas</a> 
                      <a class='btn-low'>Mapa del sitio</a> 
                      <a class='btn-low'>Términos y condiciones</a>
                  </div>
              </div>
          </div>
      </div>
    </div>
    <div class='gov-co-footer-pie'>
      <div class='gov-co-footer-auto containerf'>
          <img alt='Logo marca de Colombia' class='gov-co-logo-pie-blanco' src='/images/footer/marca_colombia.png'>
  
          <img alt='Logo de Gov Co' class='gov-co-logo-pie-mesa' src='/images/footer/header_govco.png'>
  
          <a class='text-white text-align-right' href='https://www.gov.co' target='_blank'>
              Conoce GOV.CO aquí
          </a>
      </div>
    </div>
      `;
  }