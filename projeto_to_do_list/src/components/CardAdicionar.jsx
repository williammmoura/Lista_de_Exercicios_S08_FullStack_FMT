import {useState} from React

function CardAdicionar({adicionarTarefa}){
    //Guardando o valor do texto da tarefa
    const [tarefa, setTarefa] = useState("");
    const AddEvento = (evento) => {
        evento.preventDefault()

        //Condição para verificar o "input" está vazio (estado inicial)
        if(tarefa != ""){
            adicionarTarefa(tarefa)
            //Limpa o "input'
            setTarefa("")
        }
    } 
    return(
        <div>
            
            {/* Texto de tarefas */}
            <input type="text" placeholder="Adicione uma tarefa" value={tarefa} onChange={(e) => setTarefa(e.target.value)} />
            
            {/* Botão */}
            <button onClick={AddEvento}>Adicionar Tarefa</button>
        </div>
    )
}

export default CardAdicionar;