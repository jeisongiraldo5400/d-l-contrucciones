
import '../styles.css';

export const Nav = () => {
  return (
    <nav
      id="header"
      className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top"
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="./images/logo.jpeg" alt="Logo-dyl" />
          D&L-Construcciones
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#main">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tienes-un-proyecto-en-mente">
                ¿Tienes un proyecto en mente?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dyl" href="#portafolio">
                Conoce nuestro portafolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactanos">
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};