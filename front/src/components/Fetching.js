
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function FetchingData() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/admin/products')
            .then(products => setProducts(products.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h1>Fetching Data From Database.</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    products.map(product => {
                        return <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    );
}

