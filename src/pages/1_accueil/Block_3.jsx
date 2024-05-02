import photoMoi from './../../assets/moi.jpg';

const Block_3 = () => {
  return (
    <div className="h-fit py-16 bg-redder text-white">
      <div className="relative flex flex-col md:flex-row items-center justify-center">
        <div className="relative flex flex-col left-0 md:w-1/2 md:mb-0 mb-8 items-center justify-center md:items-end md:justify-end">
          <h2 className="mx-5 max-w-80 lg:max-w-108 font-para mb-8 text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white text-center md:text-left">
            A propos de moi</h2>
          <p className="mx-5 max-w-80 lg:max-w-108 font-para">
            Suzac Simon, développeur passionné avec une
            solide formation académique en Audiovisuel,	Médias
            Interactifs Numériques, Jeux (AMINJ). Titulaire d'un
            diplôme dans ce domaine, j'ai acquis une expertise
            approfondie en programmation. Ayant créé ma
            propre entreprise, mon objectif est de contribuer au
            développement de projets innovants tout en
            garantissant la	satisfaction du client.</p>

        </div>
        <div className="relative flex h-fit right-0 md:w-1/2">
          <img className="h-60 sm:h-72 md:h-60 lg:h-72 md:mx-5" src={ photoMoi } />
        </div>
      </div>
    </div>
  )
}

export default Block_3