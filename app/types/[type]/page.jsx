import React from "react"

const getRecepies = async (type="indian") =>{
    const res = await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`)
    const response = await res.json();
    return response
}

export default async function RecepiesListContainer({params}){
    const recepies = await getRecepies(params.type)
    return <RecepiesListContainer recepies={recepies.meals} params={params.type|| ""}/>
}



