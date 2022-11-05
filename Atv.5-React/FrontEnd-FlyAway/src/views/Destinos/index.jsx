import React from "react";
import "../Destinos/style.css";

import  AddDestino  from "../AddDestino";

import imgRio from "../../assets/img/rioDeJaneiro.jpg";
import imgSalvador from "../../assets/img/salvador.jpg";
import imgIlheus from "../../assets/img/ilheus.jpg";
import imgPortoSeguro from "../../assets/img/portoSeguro.jpg";
import imgGramado from "../../assets/img/gramado.jpg";
import imgRecife from "../../assets/img/recife.jpg";

export default function Destinos() {
   return (
      <section className="secao_destinos" id="destinos">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2 className="text-center">Principais destinos</h2>
               </div>
            </div>


            <div className="container">
               <div className="row">
                  <div className="col-lg-4 mb-4">
                     <div className="card round">
                        <img src={imgSalvador} alt="" className="card-img" />
                        <div className="card-body">
                           <h5 className="card-title">Salvador</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique
                              repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in
                              pariatur. Incidunt repellendus praesentium quae!
                           </p>
                           <a href="" className="btn btn-outline-success btn-sm">1.275</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                     <div className="card round">
                        <img src={imgIlheus} alt="" className="card-img" />
                        <div className="card-body">
                           <h5 className="card-title">Ilheus</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique
                              repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in
                              pariatur. Incidunt repellendus praesentium quae!
                           </p>
                           <a href="" className="btn btn-outline-success btn-sm">1.051</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                     <div className="card round">
                        <img src={imgRio} alt="" className="card-img" />

                        <div className="card-body">
                           <h5 className="card-title">Rio de Janeiro</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique
                              repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in
                              pariatur. Incidunt repellendus praesentium quae!
                           </p>
                           <a href="" className="btn btn-outline-success btn-sm">962</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                     <div className="card round">
                        <img src={imgRecife} alt="" className="card-img" />
                        <div className="card-body">
                           <h5 className="card-title">Recife</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique
                              repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in
                              pariatur. Incidunt repellendus praesentium quae!
                           </p>
                           <a href="" className="btn btn-outline-success btn-sm">1.418</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                     <div className="card round">
                        <img src={imgGramado} alt="" className="card-img" />
                        <div className="card-body">
                           <h5 className="card-title">Gramado</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique
                              repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in
                              pariatur. Incidunt repellendus praesentium quae!
                           </p>
                           <a href="" className="btn btn-outline-success btn-sm">1.075</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 mb-4">
                     <div className="card round">
                        <img src={imgPortoSeguro} alt="" className="card-img" />
                        <div className="card-body">
                           <h5 className="card-title">Porto Seguro</h5>
                           <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique
                              repellat a laborum, rerum voluptates ipsam eos quo tempore iusto dolore modi dolorum in
                              pariatur. Incidunt repellendus praesentium quae!
                           </p>
                           <a href="" className="btn btn-outline-success btn-sm">1.378</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <AddDestino/>
      </section>
   )
}