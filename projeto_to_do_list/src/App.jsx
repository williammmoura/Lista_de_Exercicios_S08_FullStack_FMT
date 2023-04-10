import { useState } from 'react'
import './App.css'
import ListItem from './components/ListItem'

function App() {
  
  // Estado inicial
  const [listaDeTarefas, setListaDeTarefas] = useState([
    {id:1, texto:"Tarefa 1", finalizado:false}
  ])

  // Função que adiciona uma nova tarefa à lista de tarefas.
  function adicionarTarefa(tarefa){
    const novaTarefa = {id:listaDeTarefas.length + 1, texto: tarefa, finalizado: false}

    setListaDeTarefas([...listaDeTarefas, novaTarefa])
  }

  // Função que remove uma tarefa da lista de tarefas.
  function removerTarefa(tarefa){
    //Filtrar (filter) a tarefa selecionada e assim remover a tarefa
    const novaLista = listaDeTarefas.filter(item => item.id != tarefa.id)
    setListaDeTarefas(novaLista)
  }

  return(
    <div className='App'>
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      {
        listaDeTarefas.map(tarefa => (
          <ListItem tarefa={tarefa} removerTarefa={removerTarefa}/>
        ))
      }
    </div>
  )
}

export default App;