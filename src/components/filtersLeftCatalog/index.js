import "../../css/filtersLeftCatalog.css";
let filtersLeftCatalog = `
  <section class="wrapper-filter-products">
   
      <div class="container-left">

      <div class="container-novo-usado">      
        <label>
          <input type="checkbox">
          <span>Novo</span>       
        </label>        
        <label>
          <input type="checkbox">
          <span>Usado</span>       
        </label>
      </div>

      <div class="title-filtro" id="title-filtros">
        <span>Filtros</span>
      </div>

      <div class="title-filtro select-localizacao">
        <span>Localização</span>
        <div class="custom-dropdown">
          <select>
              <option>Escolha o local</option>
              <option>local 01</option>
              <option>local 02</option>
              <option>local 03</option>
          </select>
        </div>
      </div>

      <div class="title-filtro checkbox-tipo">
        <span>Tipo</span>
        <div class="container-checkbox-tipo">
          <input class="tipo-marca" type="checkbox" id="coupe-tipo" value="Coupe" name="tipo-marca" />
          <label for="coupe-tipo" class="checkbox">Coupe</label>

          <input class="tipo-marca" type="checkbox" id="suv-tipo" value="suv" name="tipo-marca" />
          <label for="suv-tipo" class="checkbox">SUV</label>

          <input class="tipo-marca" type="checkbox" id="wagon-tipo" value="wagon" name="tipo-marca" />
          <label for="wagon-tipo" class="checkbox">Wagon</label>

          <input class="tipo-marca" type="checkbox" id="crossover-tipo" value="crossover" name="tipo-marca" />
          <label for="crossover-tipo" class="checkbox">Crossover</label>

          <input class="tipo-marca" type="checkbox" id="coupe-tipo" value="coupe" name="tipo-marca" />
          <label for="coupe-tipo" class="checkbox">Coupe</label>

          <input class="tipo-marca" type="checkbox" id="pickup-tipo" value="pickup" name="tipo-marca" />
          <label for="pickup-tipo" class="checkbox">Pickup</label>

          <input class="tipo-marca" type="checkbox" id="1other-tipo" value="1other" name="tipo-marca" />
          <label for="1other-tipo" class="checkbox">1 - other</label>

          <input class="tipo-marca" type="checkbox" id="2other-tipo" value="2other" name="tipo-marca" />
          <label for="2other-tipo" class="checkbox">2 - other</label>

          <input class="tipo-marca" type="checkbox" id="3other-tipo" value="3other" name="tipo-marca" />
          <label for="3other-tipo" class="checkbox">3 - other</label>
        </div>
      </div>

       <div class="title-filtro select-marca-modelo">
        <span>Marca e modelo</span>
        <div class="custom-dropdown">
          <select>
              <option>Marca</option>
              <option>marca 01</option>
              <option>marca 02</option>
              <option>marca 03</option>
          </select>

           <select>
              <option>Modelo</option>
              <option>modelo 01</option>
              <option>modelo 02</option>
              <option>modelo 03</option>
          </select>
        </div>
      </div>

      <div class="title-filtro">
        <span>Ano</span>
        <div class="custom-column-two custom-dropdown">
          <select>
              <option>Todos</option>
              <option>mês 01</option>
              <option>mês 02</option>
              <option>mês 03</option>
          </select>
          <div class="divisor"> <div></div></div>
          <select>
            <option>Todos</option>
            <option>ano 01</option>
            <option>ano 02</option>
            <option>ano 03</option>
          </select>
        </div>
      </div>

      <div class="title-filtro">
        <span>Preço</span>
        <div class="custom-column-two custom-dropdown">
          <input type="text" id="preco-min" name="preco-min" placeholder="10,000">   
          <div class="divisor"> <div></div></div>
          <input type="tex" id="preco-max" name="preco-max" placeholder="50,000">  
        </div>
      </div>


      <div class="title-filtro checkbox-tipo">
        <span>Tipo de carro</span>
        <div class="container-checkbox-tipo">
          <input type="checkbox" id="awd/4wd-tipo-do-carro" value="awd/4wd" name="tipo-do-carro" />
          <label for="awd/4wd-tipo-do-carro" class="checkbox">AWD/4WD</label>

          <input type="checkbox" id="frontWheelDrive-tipo-do-carro" value="frontWheelDrive" name="tipo-do-carro" />
          <label for="frontWheelDrive-tipo-do-carro" class="checkbox">Front Whell Drive</label>

          <input type="checkbox" id="rearWheelDrive-tipo-do-carro" value="rearWheelDrive" name="tipo-do-carro" />
          <label for="rearWheelDrive-tipo-do-carro" class="checkbox">Rear Whell Drive</label>
        </div>
      </div>



      <div class="title-filtro checkbox-tipo">
        <span>Transmissão</span>
        <div class="container-checkbox-tipo">
          <input type="checkbox" id="automatic-transmissao" value="automatic-transmissao" name="tipo-transmissao" />
          <label for="automatic-transmissao" class="checkbox">Automatic</label>

          <input type="checkbox" id="manual-5-speed-transmissao" value="manual-5-speed" name="tipo-transmissao" />
          <label for="manual-5-speed-transmissao" class="checkbox">Manual 5 Speed</label>

          <input type="checkbox" id="manual-6-speed-transmissao" value="manual-6-speed" name="tipo-transmissao" />
          <label for="manual-6-speed-transmissao" class="checkbox">Manual 6 Speed</label>

           <input type="checkbox" id="manual-7-speed-transmissao" value="manual-7-speed" name="tipo-transmissao" />
          <label for="manual-7-speed-transmissao" class="checkbox">Manual 7 Speed</label>
        </div>
      </div>



        <div class="title-filtro select-localizacao">
        <span>Kilometragem</span>
        <div class="custom-dropdown">
          <select>
              <option>any</option>
              <option>- 5.0000,00</option>
              <option>5.0000 a 10.000</option>
              <option>10.000 a 15.000</option>
              <option>15.000 a 20.000</option>
              <option>20.000 a 30.000</option>
              <option>30.000 a 40.000</option>
          </select>
        </div>
      </div>

       <div class="title-filtro checkbox-tipo">
          <span>Cor</span>
          <div class="container-checkbox-tipo">
            <input type="checkbox" id="preto-cor" value="preto" name="cor" />
            <label for="preto-cor" class="checkbox">Preto</label>

            <input type="checkbox" id="azul-cor" value="azul" name="cor" />
            <label for="azul-cor" class="checkbox">Azul</label>

            <input type="checkbox" id="Marrom-cor" value="marrom" name="cor" />
            <label for="Marrom-cor" class="checkbox">Marrom</label>

            <input type="checkbox" id="dourado-cor" value="dourado" name="cor" />
            <label for="dourado-cor" class="checkbox">Dourado</label>

            <input type="checkbox" id="prata-cor" value="prata" name="cor" />
            <label for="prata-cor" class="checkbox">Prata</label>

            <input type="checkbox" id="amarelo-cor" value="amarelo" name="cor" />
            <label for="amarelo-cor" class="checkbox">Amarelo</label>

            <input type="checkbox" id="1other-cor" value="1other-cor" name="cor" />
            <label for="1other-cor" class="checkbox">1 - other</label>

            <input type="checkbox" id="2other-cor" value="2other-cor" name="cor" />
            <label for="2other-cor" class="checkbox">2 - other</label>

            <input type="checkbox" id="3other-cor" value="3other-cor" name="cor" />
            <label for="3other-cor" class="checkbox">3 - other</label>
          </div>
        </div>
              
      </div>
   
  </section>`;

export default filtersLeftCatalog;
