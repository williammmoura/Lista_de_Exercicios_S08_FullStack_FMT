import React, { useState } from "react";

function ListItem(props){
    
    //Estado inicial do componente, que indicará se a tarefa foi finalizado ou não.
    const [finalizado, setFinalizado] = useState(props.finalizado);

    //Atualizando o estado para "true" quando a tarefa for finalizada
    const handleFinalizado = () => {
        setFinalizado(true);
    };

    //Conteúdo que será renderizado na tela
    return(
        <div>
            
            {/* Nome da tarefa */}
            <h3>{props.tarefa}</h3>

            {/* Mensagem para indicar se a tarefa foi finalizada ou não. */}
            <p>{finalizado ? "Finalizado" : "Não finalizado"}</p>

            {/* Botão para finalizar a tarefa */}
            <button onClick={handleFinalizado}>Finalizar Tarefa</button>
        </div>
    )
}

export default ListItem;