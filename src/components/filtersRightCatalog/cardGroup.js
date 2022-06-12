
import "../../css/filtersRightCatalog.css"
import imageCardCarro from "../../img/carro-verde01.jpg"
import dashboarIcon from "../../img/icons/svg/dashboard.svg"
import gearboxIcon from "../../img/icons/svg/gearbox.svg"
import petrolIcon from "../../img/icons/svg/petrol.svg"


let cardGroup = `
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
              <img src="${dashboarIcon}" alt="carro verde" />
              <div>247k mi</div>        
            </div>
            <div>
              <img src="${gearboxIcon}" alt="carro verde" />
              <div>247k mi</div>        
            </div>
            <div>
              <img src="${petrolIcon}" alt="carro verde" />
              <div>247k mi</div>        
            </div>
          </div>
        </div>
        </div>

`


export default cardGroup;