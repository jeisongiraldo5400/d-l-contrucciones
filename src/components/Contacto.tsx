
export const Contacto = () => {
  return (
    <section id="contactanos" className="pt-4 pb-4">
      <div className="container">
        <div className="row">
          <div className="col text-uppercase text-center">
            <small>
              Puedes encontrarnos en
            </small>
            <h1>Contáctanos</h1>
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-12 col-md-4 mt-2">
            <a href="#" className="contacto card p-4">
            <p>Correo</p>
            <p><strong>dylconstrucciones@outlook.com</strong></p>
          </a>
          </div>
          <div className="col-12 col-md-4 mt-2">
            <a href="#" className="contacto card p-4">
              <p>Número de contácto</p>
              <p>(+57) <strong>3115075840</strong></p>
              <p>(+57) <strong>3143319279</strong></p>
            </a>
          </div>
          <div className="col-12 col-md-4 mt-2">
            <a href="#" className="contacto card p-4">
              <p>Dirección</p>
              <p><strong>Calle 2#7-64 Mosquera cundinamarca</strong></p>
            </a>
          </div>
        </div>

      </div>
    </section>

  )
}
