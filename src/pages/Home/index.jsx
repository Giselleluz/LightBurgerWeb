import './style.css'
import api from '../../services/api'
import { useEffect, useState, useRef } from 'react'
//ele sempre vai executar assim que a pagina abrir

function Home() {
    //a const users virou um estado que vai mudar as infos da tela, o setUsers é responsavel em colocar os dados ali dentro
    const [users, setUsers] = useState([])

    const inputName = useRef()
    const inputEmail = useRef()
    const inputPassword = useRef()

    //pegar usuarios
      async function getUsers (){
      const usersFromApi = await api.get('/usuarios')

      setUsers(usersFromApi.data) //puxar as infos de data 
  }
  //criar usuarios
  async function createUsers (){

    try{
      await api.post('/usuarios', {
        name: inputName.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value
      })
      alert("Usuário cadastrado com sucesso!")
    } catch(err){
      alert("Erro ao cadastrar o usuário!")
    }

    getUsers()
}

  useEffect(() => {
    getUsers()
  }, [])

  return (

    <div className='container'>
      <div className='ladoEsquerdo'>
      <form>
        <h1>Crie sua conta</h1>
        <p>Crie sua conta e experimente o melhor do Light Burger</p>
        
        <label htmlFor="name">Nome:</label>
        <input id="name" name="name" type='text' ref={inputName} />

        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type='email' ref={inputEmail}/>

        <label htmlFor="senha">Senha:</label>
        <input id="senha" name="senha" type='password' ref={inputPassword}/>

        <button type='button' onClick={createUsers}>Criar sua conta</button>
      </form>

      </div>

      <div className='ladoDireito'>
        
      </div>
      
      
    </div>
  )
}

export default Home
