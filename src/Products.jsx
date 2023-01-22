import '../style/Products.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Products() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get('https://projeto-individual-resilia-modulo-3.onrender.com/produtos').then(response => setProdutos(response.data))

    }, [])

    return (
        <div>
            <section>{produtos.map((e) => (
                <div>
                    <ul className='card'>
                        <img src={e.Imagem}/>
                        <li>{e.Nome}</li>
                        <li>Marca: {e.Marca}</li>
                        <li>Estoque: {e.QTD}</li>
                    </ul>
                </div>
            ))}</section>
        </div>
    )
}
export default Products;