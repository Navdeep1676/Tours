import { useState } from "react"

const Tour=({id,image,info,price,name,rem})=>{
const [readMore,setReadMore]=useState(false)
    return(
    <article className='bg-light border rounded-3 m-3'>
        <img src={image} style={{width:'100%',height:"300px"}} className='img-fluid' alt={name} />
        <div className='p-2'>
            <div className='clearfix my-1'>
            <h4 className='d-inline-block float-md-start'>{name}</h4>
            <h4 className='d-inline-block badge m-1 bg-success float-md-end'>$ {price}</h4>
            </div>
            <p >{readMore? info:`${info.substring(0,200)}...`}
            <span className='btn text-primary mb-1' onClick={()=>{setReadMore(!readMore)}} >{readMore?'Show Less':'Read More'}</span>
            </p>
            <button className='btn btn-danger my-2 mx-auto d-block fw-bold' onClick={()=>{rem(id)}}>Not Interested</button>
        </div>
    </article>
)
}

export default Tour