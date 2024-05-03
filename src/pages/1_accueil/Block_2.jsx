import FullButton from '../../components/fullButton/FullButton';
import photoLambda from './../../assets/img_lambda_1.jpg';

const Block_2 = () => {
  return (
    <div className="h-fit py-16 bg-lightGray">
      <div className="relative flex flex-col mb-5 items-center justify-center text-center">
        <h2 className="mb-8 text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-redder">Un accompagnement<br />personnalisé à vos besoins !</h2>
      </div>
      <div className="relative flex flex-col md:flex-row items-center justify-center mb-10">
        <div className="relative flex h-fit left-0 md:w-1/2 md:mb-0 mb-8 items-center justify-center md:items-end md:justify-end">
          <img className="h-60 sm:h-72 md:h-60 lg:h-72 md:mx-5" src={ photoLambda } />
        </div>
        <div className="relative flex flex-col right-0 md:w-1/2">
          <p className="mb-4 mx-5 max-w-80 lg:max-w-108 font-para">
            Que ce soit pour un site web, une application mobile ou même
            les deux, nous sommes à votre disposition pour accomplir avec
            vous le projet de vos souhaits. Nous vous fournissons un
            service	au plus proche du client, avec une réponse client
            inférieur à	24h !</p>
          <p className="mx-5 max-w-80 lg:max-w-108 font-para">
            Une approche professionnelle pour tous vos projets. Exigez la
            qualité qui vous est promise ! Contactez nous pour discuter de
            vos besoins, et choisir l'approche qui vous correspond.</p>
        </div>
      </div>
      <div className="relative flex items-center justify-center md:pl-96 lg:pr-80 lg:justify-end text-center mx-4">
        <FullButton name="Contact" to="/contact" txt="Contactez-nous" color="redder" />
      </div>
    </div>
  )
}

export default Block_2