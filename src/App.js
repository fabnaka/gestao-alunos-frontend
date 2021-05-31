import { Component } from 'react';
import api from './api';


class App extends Component{


  state={
    alunos: [],
  }


  async componentDidMount(){
    const response = await api.get('/users');

    //Testar se imprime a variavel response.data retornada da API 
    //console.log(response.data);

    this.setState({alunos: response.data})

    const myForm = document.getElementById('myForm');

    myForm.addEventListener('submit', function(e){
      e.preventDefault();


      alert('Clicou no botão cadastrar');

      

    });
  }

  render(){

    const {alunos} = this.state;
    //console.log(alunos);

    return(
      <div class="container">
        
        <h1> Consumindo API Gestão de Alunos </h1>

        <form id="myForm">

          <label>INSIRA O EMAIL DO ALUNO</label> <br></br>
          <input type="text" id="email"></input> <br></br> <br></br>

          <label>INSIRA O RGA DO ALUNO</label> <br></br>
          <input type="text" id="rga"></input> <br></br> <br></br> 
          
          <label>INSIRA O NOME DO ALUNO</label> <br></br>
          <input type="text" id="nome"></input> <br></br> <br></br>
          
          <label>INSIRA O CURSO DO ALUNO</label> <br></br>
          <input type="text" id="curso"></input> <br></br> <br></br>
          
          <label>INSIRA A SITUAÇÃO DO ALUNO</label> <br></br>

          <input type="text" id="situacao"></input> <br></br> <br></br>

          <label>INSIRA A DATA DE REGISTRO</label> <br></br>
          <input type="date" id="data_registro"></input> <br></br> <br></br>

          <input type="submit" value="Cadastrar"></input>
        </form>

        <br></br>
        <br></br>

        <h1>Listagem de Alunos</h1>

        <table border='1'>
          <thead>
            <tr>
              <th> RGA </th>
              <th> Nome </th>
              <th> Curso </th>
              <th> Situação </th>
              <th> Registrado em </th>
            </tr>
          </thead>
          
          <tbody>
            {alunos.map(aluno =>(
              <tr>
                <td> {aluno.rga} </td>
                <td> {aluno.username} </td>
                <td> {aluno.curso} </td>
                <td> {aluno.situacao} </td>
                <td> {aluno.registrado_em} </td>
              </tr>
              ))}

          </tbody>
          
        </table>

      </div>

    );

  }
}

export default App;
