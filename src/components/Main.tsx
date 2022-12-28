
import '../styles.css';

export const Main = () => {
  return (
  <main id="main">
    <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/construccion_2.jpg" className="d-block w-100" alt="Planos de construcción" />
        </div>
        <div className="carousel-item">
          <img src="./images/construccion_3.jpeg" className="d-block w-100" alt="Construcción" />
        </div>
        <div className="carousel-item">
          <img src="./images/construccion_1.jpeg" className="d-block w-100" alt="Obras" />
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
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}

