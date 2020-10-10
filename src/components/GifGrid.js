import React from 'react'
import { useFetchGif } from '../hooks/useFetchHook';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data:images, loading} = useFetchGif(category);

    return (
        <>
    <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p>Loading</p>}
        <div className="card-grid">
            
                {
                images.map((el)=>
                    <GifGridItem key={el.id} {...el}/>
                    )
                }
        </div>
        </>
    )
}
