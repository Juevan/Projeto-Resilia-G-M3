import '../style/Products.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Products({Nome, Qtd, Marca, Imagem, id}) {

    const deleteApi = async() => {
       await axios.delete(`https://projeto-individual-resilia-modulo-3.onrender.com/produtos/${id}`);
        setTimeout(() => window.location.reload(1), 450);
    }
    return (
        <div>
            <section>
                <div>
                    <ul className='card'>
                        <img src={Imagem}/>
                        <li>{Nome}</li>
                        <li>Marca: {Marca}</li>
                        <li>Estoque: {Qtd}</li>
                        <li>
                        <button type="button" class="btn btn-success gap">Add</button>
                        <button type="button" class="btn btn-warning gap">Edt</button>
                        <button type="button" class="btn btn-danger gap" onClick={deleteApi}>Dlt</button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
export default Products;