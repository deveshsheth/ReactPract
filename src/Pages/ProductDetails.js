import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {
    const params = useParams()
    return (

        <div className="text-center">
            <br />
            <h4> ProductDetails page ..!!</h4>
            {/* <h5>{params.productId}</h5>
            <h5>{params.productName}</h5> */}
        </div>
    )
}
