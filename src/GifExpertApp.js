import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () =>{

    const [categorias, setCategorias] = useState(['Series']);

    return <>
            <h2>Hola mundo</h2>
            <CategoryAdd 
            setCategories={ setCategorias } 
            />
            <hr/>
            <ol>
            {categorias.map(category => 
                    <GifGrid 
                    category={category}
                    key={category}
                    />
                    )
            }
            </ol>
        </>;
};

export default GifExpertApp;