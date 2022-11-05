import React from "react";
import "./style.css";

import imgSp from "../../assets/img/saoPaulo.jpg";
import imgMaceio from "../../assets/img/maceio.jpg";
import imgFoz from "../../assets/img/fozIguaçu.jpg";

export default function Promocoes() {
   return (
      <section className="secao-promo">
         <h1 className="titulo_promo">Descontos</h1>
         <div className="container">
            <div className="row gap-3">

               <div className="row-cols-md-2 col-sm-12 card">
                  <img className="img-teste" src={imgMaceio} alt="" />
                  <div className="conteudo-promo">
                     <h2 className="titulo-promo">Maceio</h2>
                     <p>Velit commodo eu labore amet velit sit. Laborum laborum consectetur mollit nulla ut laborum labore
                        amet. Et aliquip aliquip adipisicing quis duis officia est anim quis non qui.</p>
                     <div className="valor">
                        <p className="txt-valor desconto">1.552</p>
                        <p className="txt-valor">1.116</p>
                        <a href="" className="btn btn-outline-success w-100" data-bs-toggle="modal"
                           data-bs-target="#exampleModal">Compre agora</a>
                     </div>
                  </div>
                  <div className="tag-preço">Preço imbativel</div>
               </div>

               <div className="row-cols-md-2 col-sm-12 card">
                  <img className="img-teste" src={imgSp} alt="" />
                  <div className="conteudo-promo">
                     <h2 className="titulo-promo">São Paulo</h2>
                     <p>Velit commodo eu labore amet velit sit. Laborum laborum consectetur mollit nulla ut laborum labore
                        amet. Et aliquip aliquip adipisicing quis duis officia est anim quis non qui.</p>
                     <div className="valor">
                        <p className="txt-valor desconto">1.237</p>
                        <p className="txt-valor">860</p>
                        <a href="" className="btn btn-outline-success w-100" data-bs-toggle="modal"
                           data-bs-target="#exampleModal">Compre agora</a>
                     </div>
                  </div>
                  <div className="tag-preço">Preço imbativel</div>
               </div>

               <div className="row-cols-md-2 col-sm-12 card">
                  <img className="img-teste" src={imgFoz} alt="" />
                  <div className="conteudo-promo">
                     <h2 className="titulo-promo">Foz do Iguaçu</h2>
                     <p>Velit commodo eu labore amet velit sit. Laborum laborum consectetur mollit nulla ut laborum labore
                        amet. Et aliquip aliquip adipisicing quis duis officia est anim quis non qui.</p>
                     <div className="valor">
                        <p className="txt-valor desconto">980</p>
                        <p className="txt-valor">791</p>
                        <a href="" className="btn btn-outline-success w-100" data-bs-toggle="modal"
                           data-bs-target="#exampleModal">Compre agora</a>
                     </div>
                  </div>
                  <div className="tag-preço">Preço imbativel</div>
               </div>


            </div>
         </div>
      </section>
   )
}