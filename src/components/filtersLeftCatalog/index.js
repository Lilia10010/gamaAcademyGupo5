import "../../css/filtersLeftCatalog.css";
let filtersLeftCatalog = `
  <section class="wrapper-filter-products">
   
      <div class="container-left">

      <div class="container-novo-usado">      
        <label>
          <input type="checkbox" name="new-or-used" value="0" />
          <span>Novo</span>       
        </label>        
        <label>
          <input type="checkbox" name="new-or-used" value="1" />
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
              <option >Escolha o local</option>
              <option value="0">São Paulo</option>
              <option value="1">Rio de Janeiro</option>
              <option value="2">Minas Gerais</option>
              <option value="3">Rio Grande do Sul</option>
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

          <input class="tipo-marca" type="checkbox" id="hatback-tipo" value="Hatback" name="tipo-marca" />
          <label for="hatback-tipo" class="checkbox">Hatback</label>

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
          <select id="select-marca">
              <option value="all">Marca</option>
              <option value="0">Renault</option>
              <option value="1">Honda</option>
              <option value="2">Infiniti</option>
              <option value="3">Mercedez Benz</option>
              <option value="4">Lexus</option>
              <option value="5">Mitsubishi</option>
              <option value="6">Mazda</option>
              <option value="7">Hyundai</option>
              <option value="8">Audi</option>
          </select>

           <select id="select-modelo">
              <option value="0">Modelo</option>
              <option value="Fiat Uno">Fiat Uno</option>
              <option value="Honda Civic">Honda Civic</option>
              <option>modelo 03</option>
          </select>
        </div>
      </div>

      <div class="title-filtro">
        <span>Ano</span>
        <div class="custom-column-two custom-dropdown">
          <select id="select-ano">
              <option value="all">Todos</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>

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
            <input type="checkbox" id="preto-cor" value="Preto" name="cor" />
            <label for="preto-cor" class="checkbox">Preto</label>

            <input type="checkbox" id="1other-cor" value="Branco" name="cor" />
            <label for="1other-cor" class="checkbox">Branco</label>

            <input type="checkbox" id="azul-cor" value="Azul" name="cor" />
            <label for="azul-cor" class="checkbox">Azul</label>

            <input type="checkbox" id="Marrom-cor" value="Marrom" name="cor" />
            <label for="Marrom-cor" class="checkbox">Marrom</label>

            <input type="checkbox" id="dourado-cor" value="Dourado" name="cor" />
            <label for="dourado-cor" class="checkbox">Dourado</label>

            <input type="checkbox" id="prata-cor" value="Prata" name="cor" />
            <label for="prata-cor" class="checkbox">Prata</label>

            <input type="checkbox" id="amarelo-cor" value="Amarelo" name="cor" />
            <label for="amarelo-cor" class="checkbox">Amarelo</label>

            <input type="checkbox" id="2other-cor" value="2other-cor" name="cor" />
            <label for="2other-cor" class="checkbox">2 - other</label>

            <input type="checkbox" id="3other-cor" value="3other-cor" name="cor" />
            <label for="3other-cor" class="checkbox">3 - other</label>
          </div>
        </div>
              
      </div>
   
  </section>`;

export default filtersLeftCatalog;
