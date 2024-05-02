import photoMoi from './../../assets/moi.jpg';

const Block_3 = () => {
  return (
    <div className="h-fit py-16 bg-redder text-white">
      <div className="relative flex flex-col md:flex-row items-center justify-center">
        
        <div className="relative flex h-fit right-0 md:w-1/2">
          <img className="h-60 sm:h-72 md:h-60 lg:h-72 md:mx-5" src={ photoMoi } />
        </div>
      </div>
    </div>
  )
}

export default Block_3