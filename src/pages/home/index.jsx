import './style.css'
import Trash from '../../assets/trash.png'

function Home() {

  const users = [
    {
      id: 'jsafsnkfsa',
      name: 'joao',
      age: 33,
      email: 'joaovictorgoncalvesoliveira450@gmail.com',
    },
    {
      id: 'fsagdga',
      name: 'Aline',
      age: 28,
      email: 'aline@gmail.com',
    },
  ]

  return (

    <div className='container'>
      <form>
        <h1>Cadastro de Usuários</h1>
        <input name='nome' type='text' />
        <input name='idade' type='number' />
        <input name='email' type='email' />
        <button type='button'>Cadastrar</button>
      </form>

      { users.map ( user => (
         <div key={user.id}>
         <div>
           <p>Nome: {user.name}</p>
           <p>Idade: {user.age}</p>
           <p>Email: {user.email}</p>
         </div>
         <button>
           <img src={Trash} alt="Ícone de lixeira" />
         </button>
       </div>

      ))}
     


    </div>
  )
}

export default Home
