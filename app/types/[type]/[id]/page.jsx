import React from 'react'
import Image from 'next/image';
import styles from "@/components/recipieDetails/recipieDetails.module.css"

const getRecipieById = async (id) =>{
   const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
   return res.json();
}

const page = async ({params}) => {
   const recipeDetails = await getRecipieById(params.id);
   const details =  recipeDetails && recipeDetails.meals ? recipeDetails.meals[0] : {};
 return(
    <>
      <div className={styles.Detail_container}>
        <div className={styles.img}>
        <Image
          alt="Recipe"
          width={500}
          height={500}
          src={details.strMealThumb}
          className="w-full"
        />
        </div>
        <div className={styles.details}>
           <h1>Recipie : {details.strMeal}</h1>
           <h2>Recipie's Country : {details.strArea}</h2>
           <h4>Category :{details.strCategory}</h4>
           <h3 className={styles.para}>Steps to make : <br/>{details.strInstructions}</h3>
        </div>
      </div>
    </>
 )
}

export default page