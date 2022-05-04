import { Component } from 'react';
import './App.css';
import Titulo from './Titulo';
import Imagen from './Imagen';
import Boton from './Boton';



export default class App extends Component {
  //constructor(props) with state
  constructor(){
    super();
    this.state = {
      contador:0,
      cosas:[]
    };
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        <input value={this.state.cosas} onChange={(e)=>this.setState({cosas:[...this.state.cosas,e.target.value]})} />  
        <Imagen />
        <Titulo  mensaje={"holas"} />
        
        <Boton handleClick={ ()=> this.setState({
      contador: this.state.contador + 1
    })} />

      <div>
        {JSON.stringify(this.state.cosas)}
      </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          APRENDE MAS DE REACT
        </a>
        <h2>{this.state.contador}</h2>
      </header>
    </div>
    )
  } 
}

