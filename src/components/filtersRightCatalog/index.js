import "../../css/filtersRightCatalog.css"
import imageCardCarro from "../../img/carro-verde01.jpg"


let filtersRightCatalog = `
  <section class="wrapper-filter-products">

    <div class="continer-header-catalog">
      <div><span class="opacity">Home ></span> <span>Carros usados</span></div>

      <div class="title"><h3>Carros usados</h3><div>249 offers</div></div>

      <div class="filter-header-catalog">
        <div> <div>= Ordernar por: select | icon comparar</div></div> 
        <div>left</div>
      </div>
    </div>




    <div class="wrapper-catalog"> 
    
      <div class="card-container">
        <div class="card-top">
          <img src="${imageCardCarro}" alt="carro verde" />
          <div class="tag">tag</div>
        </div>

        <div class="card-bottom">
          <div class="ano">
            <span>1995</span>
            <div class="container-checkbox-tipo">
              <input type="checkbox" id="compare" value="compareid" name="compare" />
              <label for="compare" class="checkbox">Sedan</label>
          </div>
        </div>

          <div class="info-primary">
            <p>Ford Truck Lifted<p>
            <span>$24,000<span>
            <div>icon Chicago</div>
        </div>

        <div class="info-secondary"> 
          <div>
            <div>icon</div>
            <div>247k mi</div>        
          </div>

          <div>
            <div>icon</div>
            <div>247k mi</div>        
          </div>

          <div>
            <div>icon</div>
            <div>247k mi</div>        
          </div>
        </div>
      </div>

      </div>





      <div class="card-container">
        <div class="card-top">
          <img src="${imageCardCarro}" alt="carro verde" />
          <div class="tag">tag</div>
        </div>

        <div class="card-bottom">
          <div class="ano">
            <span>1995</span>
            <div class="container-checkbox-tipo">
              <input type="checkbox" id="compare" value="compareid" name="compare" />
              <label for="compare" class="checkbox">Sedan</label>
          </div>
        </div>

          <div class="info-primary">
            <p>Ford Truck Lifted<p>
            <span>$24,000<span>
            <div>icon Chicago</div>
        </div>

        <div class="info-secondary"> 
          <div>
            <div>icon</div>
            <div>247k mi</div>        
          </div>

          <div>
            <div>icon</div>
            <div>247k mi</div>        
          </div>

          <div>
            <div>icon</div>
            <div>247k mi</div>        
          </div>
        </div>
      </div>

    
    
    
    
    
    
      </div>

      
  </section>`;

export default filtersRightCatalog;