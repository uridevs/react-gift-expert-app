import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([  ]);
    
    const onAddCategory = ( newCategory ) => {
        
        if (categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories])
        
    }


  return (
    <>
        {/* titulo */}
        <h1>GiftExpert APP</h1>

        {/*  Input */}
        <AddCategory 
            onNewCategory ={ onAddCategory }
        />
        

        {/*  Listado de Gifs */}

        { categories.map( (category) =>  (
            <GifGrid 
                key={ category } 
                category={ category }/>
            )) 
        }

    </>
  )
}


