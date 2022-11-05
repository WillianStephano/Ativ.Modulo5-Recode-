import React from "react";
import "./style.css";


export default function Home() {
   return (

      <div>
         <div className="secao_intro">
            <div className="container">
               <div className="border-0 d-flex flex-column justify-content-center align-items-center p-4 py-5 img_intro">
                  <div className="row">

                     <div className="col-md-10 col-xl-8 text-center d-flex d-sm-flex d-md-flex justify-content-center align-items-center mx-auto justify-content-md-start align-items-md-center justify-content-xl-center w-100">
                        <div>

                           <h1 className="text-uppercase fw-bold mb-3 titulo_intro">
                              <span>Os melhores hotéis,</span><br />
                              <span>pacotes e experiências</span><br />
                           </h1>

                           <p className="fw-normal mb-4 txt_intro">
                              Viaje conosco !
                           </p>

                           <a href="#servicos">
                              <button className="btn btn-primary fs-5 me-2 py-2 px-4" type="button">
                                 Veja mais
                              </button>
                           </a>
                        </div>
                     </div>

                  </div>
               </div>
            </div>
         </div>

         <div className="container py-4 py-xl-5" id="servicos">
            <div className="row mb-5">
               <div className="col-md-8 col-xl-6 text-center mx-auto">
                  <h2>Serviços</h2>
                  <p className="w-lg-50">Selecione o pacote turístico a sua medida. Escolha como será sua viagem.
                  </p>
               </div>
            </div>

            <div
               className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3 d-md-flex d-lg-flex align-items-center flex-wrap justify-content-md-center justify-content-lg-center align-items-lg-center">

               <div className="col">

                  <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                     <div
                        className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                           viewBox="0 0 16 16" className="bi bi-house">
                           <path fillRule="evenodd"
                              d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z">
                           </path>
                           <path fillRule="evenodd"
                              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z">
                           </path>
                        </svg>
                     </div>
                     <div className="px-3">
                        <h4>Hospedagem</h4>
                        <p>
                           <span>Encontre a hospedagem perfeita com os melhores preços</span><br />
                        </p>
                     </div>
                  </div>
               </div>

               <div className="col">

                  <div className="text-center d-flex flex-column flex-shrink-1 align-items-center align-items-xl-center">
                     <div
                        className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                           viewBox="0 0 16 16" className="bi bi-ticket-perferated">
                           <path fillRule="evenodd"
                              d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3h-13ZM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9V4.5Zm3 .35v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Zm-7 1.8v.9h1v-.9H4Zm7 0v.9h1v-.9h-1Z">
                           </path>
                        </svg>
                     </div>
                     <div className="px-3">
                        <h4>Passagens</h4>
                        <p>
                           <span>Ofertas de passagens com preços&nbsp;incríveis</span><br />
                        </p>
                     </div>
                  </div>
               </div>

               <div className="col">

                  <div className="text-center d-flex flex-column align-items-center align-items-xl-center">
                     <div
                        className="bs-icon-lg bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-3 bs-icon lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2"
                           stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
                           className="icon icon-tabler icon-tabler-sailboat">
                           <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                           <path
                              d="M2 20a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1">
                           </path>
                           <path d="M4 18l-1 -3h18l-1 3"></path>
                           <path d="M11 12h7l-7 -9v9"></path>
                           <line x1="8" y1="7" x2="6" y2="12"></line>
                        </svg>
                     </div>
                     <div className="px-3">
                        <h4>Destinos Incríveis</h4>
                        <p>
                           <span>Reserve o lugar dos sonhos, explore e descubra novos horizontes</span>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </div>
   )
}