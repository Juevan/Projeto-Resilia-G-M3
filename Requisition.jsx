import Products from "./Products"
import '../style/Products.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Requisition(){
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        axios.get('https://projeto-individual-resilia-modulo-3.onrender.com/produtos').then(response => setProdutos(response.data))
    }, [])

    return(
        <div>
            <section>{produtos.map((e) => (<Products id={e.id} Nome={e.Nome} Marca={e.Marca} Qtd={e.Qtd} Imagem={e.Imagem}/>))}</section>
        </div>
    )
}