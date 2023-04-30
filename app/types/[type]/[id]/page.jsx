import React from 'react'
import Image from 'next/image';

const getRecipieById = async (id) =>{
   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
   return res.json();
}

const page = async ({params}) => {
   const recipeDetails = await getRecipieById(params.id);
   const details = recipeDetails.meals
 return(
    <>
      <div>
        <Image
          alt="Recipe"
          width={500}
          height={500}
          src={details.strMealThumb}
          className="w-full"
        />
      </div>
    </>
 )
}

export default page