import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Result } from 'src/types'

const Card = ({ image, title, id, isGuestFavorite }: Result) => {
  const [imageSrc, setImageSrc] = useState(image);
  const navigate = useNavigate();

  const handleImageError = () => {
    setImageSrc('https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=');
  };
  return (
    <div 
    onClick={() => navigate(`recipe/${id}`)}
    className="transition ease-in-out duration-150 cursor-pointer relative flex flex-col rounded-[17px] overflow-hidden  bg-white border-opacity-30">
      {isGuestFavorite && (<div className="absolute top-0 left-0 p-4">
        <div
          style={{
            fontFamily: "sans-serif"
          }}
          className="bg-[rgba(23,32,48,0.4)] rounded-lg py-1 px-2 text-sm flex gap-1 font-semibold text-gray-100">
          <svg style={{ width: '17px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
           Featured
        </div>
      </div>)}
      <div className=" h-full rounded flex flex-col justify-end ">
        <div className="h-full filter brightness-90 contrast-110 saturate-150">
          <img
            className="object-cover h-[250px] w-full rounded-[5px]"
            src={imageSrc} onError={handleImageError} />
        </div>

        <div 
        style={{
          fontFamily:"Georgia"
        }}
        className='h-full py-5'>
          {title}
        </div>
      </div>
    </div>
  )
}

export default Card
