
import '../styles.css';

export const Main = () => {
  return (
  <main id="main">
    <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://www.publicdomainpictures.net/pictures/220000/nahled/constructions-and-buildings.jpg" className="d-block w-100" alt="hawaii-1" />
        </div>
        <div className="carousel-item">
          <img src="https://www.publicdomainpictures.net/pictures/220000/nahled/constructions-and-buildings.jpg" className="d-block w-100" alt="hawaii-2." />
        </div>
        <div className="carousel-item">
          <img src="https://www.publicdomainpictures.net/pictures/220000/nahled/constructions-and-buildings.jpg" className="d-block w-100" alt="hawaii-3" />
        </div>
        <div className="overlay">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 offset-md-6 text-md-end text-center">
                <h1>D & L - Construcciones</h1>
                <div className="d-none d-sm-block">
                Nuestra empresa D&L Construcciones SAS, fue creada para atender las necesidades de construcción, mantenimiento, remodelación, consultoría en diseño y actividades relacionadas con arquitectura e ingeniería. 
                <br />
                La confianza que nuestros clientes han depositado en nuestro personal con más de 30 años de experiencia, nos han permitido transformar las ideas en obrar de calidad, responsabilidad, compromiso y cumplimiento.
                </div>
                  <a href="https://wa.me/573115075840?text=Hola,%20bienvenido,%20%C2%BFen%20qu%C3%A9%20te%20podemos%20ayudar?%20" className="btn btn-outline-light m-3 d-none d-sm-block">
                    <img src="./images/whatsApp.png" alt="WhatsApp" className='img-whatsapp'/>
                    <span className="ms-2">Escríbenos</span>
                  </a>
                  
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

