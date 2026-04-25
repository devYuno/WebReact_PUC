import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

function withNavigation(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

let user = {
    email: '',
    senha: ''
}

class Login extends React.Component {

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

  componentDidMount() {
    const stored = localStorage.getItem('user');

    if (stored) {
      let userStored = JSON.parse(stored);
      user = userStored
    }
  }

  acessar() {
    if (this.state.email === user.email && this.state.senha === user.senha) {
      this.props.navigate("/home");
      alert("Acesso liberado!")
    }
    else {
      this.setState({ message: "Acesso negado" })
    }
  }

  render() {
    return (
      <div className='page'>
        <h2>Login</h2>
        <input id='input_email' name='email' placeholder='Email' type='text' onChange={(e) => { this.setEmail(e) }}></input>
        <input id='input_senha' name='senha' placeholder='Senha' type='text' onChange={(e) => { this.setSenha(e) }}></input>
        <a href='WebReact_PUC/register'>Não tenho login</a>
        <button id='btn_acessar' onClick={(e) => { this.acessar(e) }}>Acessar</button>
        <span>{this.state.message}</span>       
      </div>
    )
  }
}

export default withNavigation(Login);
