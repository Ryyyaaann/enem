import '../CSS/Home.css'; 

function Home() {               

  return (
    <div className="container">
      

      <main>
        <h2 style={{ padding: '15px', margin: 0 }}>Publicações</h2>
       
          <div  className="foodCard">
            <img src={require('../asst/composicao-de-comida-brasileira-deliciosa-de-alto-angulo_23-2148739223.avif')} alt="nome"/>
            <div className="cardInfo">
              <div className="cardHeader">
                <h3 style={{ margin: 0 }}>Comida boa</h3>
              </div>
              <div className="engagement">
                <span>Farol da barra</span>
                <span>👍 2</span>
                <span>↗️ 5</span>
                <span>Menções: 18</span>
              </div>
            </div>
          </div>
          <div  className="foodCard">
            <img src={require('../asst/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.avif')} alt="nome"/>
            <div className="cardInfo">
              <div className="cardHeader">
                <h3 style={{ margin: 0 }}>Comida boa</h3>
              </div>
              <div className="engagement">
                <span>Farol da barra</span>
                <span>👍 2</span>
                <span>↗️ 5</span>
                <span>Menções: 18</span>
              </div>
            </div>
          </div>
          <div  className="foodCard">
            <img src={require('../asst/food-styling-7-dicas-de-fotos-de-comida-para-vocecirc-turbinar-suas-vendas_o1elh4rc4belh1iit55abhl106re.jpg')} alt="nome"/>
            <div className="cardInfo">
              <div className="cardHeader">
                <h3 style={{ margin: 0 }}>Comida boa</h3>
              </div>
              <div className="engagement">
                <span>Farol da barra</span>
                <span>👍 2</span>
                <span>↗️ 5</span>
                <span>Menções: 18</span>
              </div>
            </div>
          </div>
      </main>
      </div>

      
  );
}

export default Home;