
import React from 'react'
// import styles from './Types.module.css'
import Link from 'next/link';

const FetchTypes = async () =>{
    const FetchAreas = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c');
    const response = await FetchAreas.json();
return response.meals.map((a)=>a.strArea);
}

const page = async () => {
    const area =  await FetchTypes();
  return (
    <div>
      {area && area.map((as,idx)=>{
<Link href={`/types/${as}`} key={idx}>
  {as}
</Link>
      })}
    </div>
  )
}

export default page;