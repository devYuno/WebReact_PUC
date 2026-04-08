import React from 'react';
import './App.css';

 const credenciais = {
    emailReal: 'pucpr@gmail.com',
    senhaReal: '12345'
  }

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      senha: '',
      message: ''
    }
  }

  setEmail(event) {
    let email = event.target.value
    this.setState({ email: email })
  }

  setSenha(event) {
    let senha = event.target.value
    this.setState({ senha: senha })
  }

  render() {
    return (
      <div className='page'>
        <h2>Login</h2>
        <input id='input_email' name='email' type='text' onChange={(e) => { this.setEmail(e) }}></input>
        <input id='input_senha' name='senha' type='text' onChange={(e) => { this.setSenha(e) }}></input>
        <button>Acessar</button>
        <span>Acesso liberado</span>
      </div>
    )
  }
}

export default App;
