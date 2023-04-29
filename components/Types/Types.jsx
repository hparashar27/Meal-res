import Link from "next/link";
import React from "react";
import styles from "./Types.module.css"

const fetchRecipeAreas = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
  );
  const response = await res.json();
  return response.meals.map((area) => area.strArea);
};

const Types= async () => {
  const areas = await fetchRecipeAreas();
  return (
    <div className={styles.area_container}>
      {areas.map((area, idx) => (
        <Link
          className={styles.area}
          key={idx}
          href={`/types/${area}`}
        >
          {area}
        </Link>
      ))}
    </div>
  );
};

export default Types;