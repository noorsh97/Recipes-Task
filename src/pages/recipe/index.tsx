import { useParams } from 'react-router-dom';

import { useAxios } from 'src/hooks';
import { Recipe } from 'src/types';
import Loader from "src/asstes/loader.svg"

const RecipePage = () => {
  const param = useParams();
  const id = param.id;
  const { data, loading, error } = useAxios<Recipe>({ url: `recipes/${id}/information` });

  return (
    <div className='p-5 lg:p-20 flex flex-col items-center min-h-full bg-cover'>
      {loading
        ? <div className='h-16 w-16'>
          <img src={Loader} className='w-100 h-100' />
        </div>
        : <div className='w-100 flex flex-col  gap-5'>
          <h1
            style={{
              fontFamily: "Georgia"
            }}
            className='text-3xl'>{data?.title}</h1>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='w-100 relative md:h-[450px] '>
              <img src={data?.image} alt={data?.title} className="object-cover h-full w-full rounded-[17px]" />
              <div className="absolute top-0 right-0 flex flex-col rounded-r-t-[17px] overflow-hidden bg-opacity-60 backdrop-blur-5  shadow-lg p-2">
                <p>
                  Ready in {data?.readyInMinutes} minutes, serves {data?.servings}.
                </p>
              </div>
            </div>
            <div className=" flex flex-col rounded-[17px] overflow-hidden backdrop-blur-5 shadow-lg p-2 justify-between ">
              <div dangerouslySetInnerHTML={{ __html: data?.summary ?? '<></>' }} />
              <div>
                <h2
                  style={{
                    fontFamily: "Georgia"
                  }}
                  className='text-xl border-b w-fit'
                >Nutritional Information</h2>
                <p>
                  Calories: {data?.healthScore} per serving | Aggregate Likes:{' '}
                  {data?.aggregateLikes}
                </p>
                <div className='flex gap-1'>
                  <h2>Diets:</h2>
                  <ul className='flex gap-1'>
                    {data?.diets.map((diet, index) => (
                      <li key={`${diet}-${index}`}>{diet}{index !== data?.diets?.length - 1 ? ', ' : ''}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div>
            </div>
          </div>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className=" flex flex-col rounded-[0px] overflow-hidden gap-2 p-1">
              <h2
                style={{
                  fontFamily: "Georgia"
                }}
                className='text-xl border-b pb-2'>Ingredients</h2>
              <ul>
                {data?.extendedIngredients.map((ingredient, index) => (
                  <li key={`${ingredient.id}-${index}`}>
                    {ingredient.amount} {ingredient.unit} {ingredient.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className=" flex flex-col rounded-[17px] overflow-hidden gap-2 p-1">
              <h2
                style={{
                  fontFamily: "Georgia"
                }}
                className='text-xl border-b pb-2'>Instructions</h2>
              <div dangerouslySetInnerHTML={{ __html: data?.instructions ?? '<></>' }} />
            </div>
          </div>
          <div className=" flex flex-col rounded-[17px] overflow-hidde w-fit border-b pb-2">
            <div className='flex gap-3 flex-wrap'>
              <p>
                Credits: {data?.creditsText} | License: {data?.license} | Source:{' '}
                {data?.sourceName}
              </p>
              <p>
                <a href={data?.sourceUrl} target="_blank" rel="noopener noreferrer">
                  View Full Recipe
                </a>
              </p>
            </div>
          </div>
        </div>}
    </div>
  );
};

export default RecipePage;
