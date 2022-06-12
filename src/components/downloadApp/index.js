import "../../css/downloadApp.css"
import imageDownloadApp from '../../img/downloadApp.svg'
import iconAppStore from "../../img/icons/svg/iconAppStore.svg"
import googleStoreIcon from "../../img/icons/svg/iconGoogleStore.svg"

let downloadApp = `
  <section id="download-app">
    <div>


      <div class="download-app">
        <div>

            <div>
              <h3>Baixe o nosso appp</h3>
              <p>
              Baixe o Finder App e junte-se à comunidade de entusiastas de carros. 
              Não pare sua busca de carro quando sair do computador com nosso aplicativo para Android e iOS!
              </p>
            </div>

            <div class="wrapper-btn-download">
              <div class="btn-donwload">
                 <img src="${iconAppStore}" alt="icon de ordenacao" /> 
                <div class="wrapper-btn-download-descricao">
                  <span class="btn-title-top">Available on the</span>
                  <span class="btn-title-bottom">App Store</span>
                </div>
              </div>

              <div class="btn-donwload">
                 <img src="${googleStoreIcon}" alt="icon de ordenacao" /> 
                <div class="wrapper-btn-download-descricao">
                  <span class="btn-title-top">GET IT ON</span>
                  <span class="btn-title-bottom">App Store</span>
                </div>
              </div>
          
            </div>

          </div>

        <img src="${imageDownloadApp}" alt="icon de ordenacao" /> 

      </div>


    </div>
  </section>

`

export default downloadApp