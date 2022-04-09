const QuienesSomos = () => {
    return (
        <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 ">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <span className="textoAU">Quienes Somos</span>

              <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                Somos una empresa que busca acompañarte en todo tu emprendimiento y ofrecerte las mejores soluciones tecnológicas a tu medida.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
              <div className="icono">
              <i class="fas fa-times"></i>
              </div>
              <h6 className="text-xl mt-5 font-semibold text-white">
                Desarrollo Web
              </h6>
              <p className="mt-2 mb-4 text-blueGray-400">
                Desarrolla tu página web de manera personalizada
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="icono">
              <i class="fas fa-times"></i>
              </div>
              <i className="fa-regular fa-x"></i>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Automatización
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
            <div className="icono">
              <i class="fas fa-times"></i>
              </div>
              <h5 className="text-xl mt-5 font-semibold text-white">
                Data Science
              </h5>
              <p className="mt-2 mb-4 text-blueGray-400">
              Alinear la estrategia de datos con los objetivos comerciales de tu emprendimiento, adaptar los sistemas de toda la empresa para respaldar la toma de decisiones.
              </p>
            </div>
            </div>
        </div>
    )
  }
  
  export default QuienesSomos
