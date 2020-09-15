//classe que fará consulta e mostrará os dados
import React, { Component } from 'react';
import firebase from '../firebaseConfig';
import { className, COMBINATOR, id } from 'postcss-selector-parser';

class ComponentToPrint extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comerciante: [],
      pedidos: [],
      vetoraux:[],
      value:"",
      numcomex:0
    };
    this.handleChange = this.handleChange.bind(this); 
  };

  render() {
    return (
      <div className="App">   
        <header className="App-header">
          <h1>Repasse aos comerciantes da plataforma EasyMeal-web</h1>
          </header>
          <h1>Data em avaliação</h1>
                      <div>
                       <table align="center">
                         <tr>
                         <th>COMERCIANTES</th>
                         <th>TOTAL</th>
                        </tr>
                        <td> 
                        <select  name ="cbcomerciante" value={this.state.value} onChange={this.handleChange}>
                        <option value="default">Selecione um comerciante</option>  
                         {this.state.comerciante.map((ped) => (
                           <option value= {ped.key}>{ped.email}</option>
                         ))}
                        </select>
                        </td>
                        <table align="center">
                         <td>
                        <select name ="cbpedidos">
                         {this.state.pedidos.map((ped) => (
  <option value="nome"> Total vendido: R${ped.vendido}, descontado: R${ped.descontado} a receber: R${ped.receber}</option>
                         ))}
                        </select> 
                        <td><button id="botao" name="botao" onClick={(e) => this.Repasse(e)}>Repasse</button></td>
                        </td>
                       </table>                       
                      </table>
                     </div>    
      </div>

    );
  }
}
 
export default ComponentToPrint;