import React, { Component } from 'react';
import Tarjeta from './Tarjeta';

class App extends Component {
  render() {
    let data=this.props.pokemons;
    return (
      <div className="App">
        <h1>Mi lista de Pokemons</h1>
          
        {data.map(function(data) {
          console.log(data.name);
            return 
              (<Tarjeta 
                  name={data.name} 
                  img={data.url}
                />)
          })
        }
       
        
      </div>
    );
  }
}

export default App;
