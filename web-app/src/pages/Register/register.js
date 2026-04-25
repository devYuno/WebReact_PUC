import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

function withNavigation(Component) {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
}

class Register extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: '',
      sobrenome: '',
      dataNascimento: '',
      email: '',
      senha: '',
      confirmSenha: '',
      message: ''
    }
  }

  setNome(event) {
    let nome = event.target.value
    this.setState({ nome: nome })
  }

  setSobrenome(event) {
    let sobrenome = event.target.value
    this.setState({ sobrenome: sobrenome })
  }

  setDataNascimento(event) {
    let dataNascimento = event.target.value
    this.setState({ dataNascimento: dataNascimento })
  }

  setEmail(event) {
    let email = event.target.value
    this.setState({ email: email })
  }

  setSenha(event) {
    let senha = event.target.value
    this.setState({ senha: senha })
  }

  setConfirmSenha(event) {
    let confirmSenha = event.target.value
    this.setState({ confirmSenha: confirmSenha })
  }

  validateRegister() {
    if(
      !this.state.nome || 
      !this.state.sobrenome ||
      !this.state.dataNascimento ||
      !this.state.email ||
      !this.state.senha ||
      !this.state.confirmSenha 
    ) {
      this.setState({ message: "Todos os campos devem ser preenchidos!" })
      return false
    }
    else {
      if (this.state.senha === this.state.confirmSenha) {
        this.setState({ message: '' })
        return true
      }
      else {
        this.setState({ message: 'As senhas devem ser iguais.' })
        return false
      }
    }
    
  }

  registrar() {
    if(!this.validateRegister()) return
    const newUser = {
      nome : this.state.nome,
      sobrenome : this.state.sobrenome,
      dataNascimento : this.state.dataNascimento,
      email : this.state.email,
      senha : this.state.senha
    }

    if (newUser){
      console.log(newUser);
      localStorage.setItem('user', JSON.stringify(newUser))
      this.props.navigate("/");
    }
    
  }

  render() {
    return (
      <div className='page'>
        <h2>Register</h2>
        <input id='input_nome' name='nome' type='text' placeholder='Nome' onChange={(e) => { this.setNome(e) }}></input>
        <input id='input_sobrenome' name='sobrenome' type='text' placeholder='Sobrenome' onChange={(e) => { this.setSobrenome(e) }}></input>
        <input id='input_dataNascimento' name='dataNascimento' type='text' placeholder='Data de Nascimento' onChange={(e) => { this.setDataNascimento(e) }}></input>
        <input id='input_email' name='email' type='text' placeholder='Email' onChange={(e) => { this.setEmail(e) }}></input>
        <input id='input_senha' name='senha' type='text' placeholder='Senha' onChange={(e) => { this.setSenha(e) }}></input>
        <input id='input_confirmSenha' name='confirmSenha' type='text' placeholder='Confirmar Senha' onChange={(e) => { this.setConfirmSenha(e) }}></input>
        <button id='btn_acessar' onClick={(e) => { this.registrar(e) }}>Cadastrar</button>
        <span>{this.state.message}</span>
      </div>
    )
  }
}

export default withNavigation(Register);
