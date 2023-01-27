import "../style/Forms.css";
import { useState } from "react";
import axios from "axios";

function FormsPro() {
  const [nomeProd, setNomeProd] = useState();
  const [qtdProd, setQtdProd] = useState();
  const [marca, setMarca] = useState();
  const [imagem, setImagem] = useState();

  const postApi = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://projeto-individual-resilia-modulo-3.onrender.com/produtos",
      {
        Nome: nomeProd,
        QTD: qtdProd,
        Marca: marca,
        imagem: imagem,
      });
      setTimeout(() => (window.location.href = "/Produtos"), 450);
  };

  return (
    <div class="contaner2">
      <form class="row g-3 w-75" onSubmit={postApi}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Nome
          </span>
          <input
            onChange={(e) => setNomeProd(e.target.value)}
            required
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Quantidade
          </span>
          <input
            onChange={(e) => setQtdProd(e.target.value)}
            required
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Marca
          </span>
          <input
            onChange={(e) => setMarca(e.target.value)}
            required
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Link da Imagem
          </span>
          <input
            onChange={(e) => setImagem(e.target.value)}
            required
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
export default FormsPro;
