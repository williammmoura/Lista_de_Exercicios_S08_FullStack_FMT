import React, { useState } from "react";

function ListItem({tarefa, removerTarefa}){
    
    //Estado inicial do componente, que indicará se a tarefa foi finalizado ou não.
    const [finalizado, setFinalizado] = useState(tarefa.finalizado);

    // Finalizando a tarefa
    function finalizarTarefa(evento){
        evento.preventDefault()
        setFinalizado(!finalizado)
    }

    // Chamando a função para remover a tarefa
    function handleRemoverTarefa(evento){
        evento.preventDefault()
        removerTarefa(tarefa)
    }

    //Conteúdo que será renderizado na tela
    return(
        <div>
            
            {
                // renderização condicional
                finalizado ? (
                    // <li> com marcação de finalizado
                    <li key={tarefa.id} className={'list-item finalizado'}>
                        {tarefa.texto}
                        <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
                        <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
                    </li>
                ) : (
                    // <li> sem marcação de finalizado
                    <li key={tarefa.id} className={'list-item'}>
                        {tarefa.texto}
                        <button className="list-item-button" onClick={finalizarTarefa}>finalizar</button>
                        <button className="list-item-button" onClick={handleRemoverTarefa}>remover</button>
                    </li>
                )
            }

        </div>
    )
}

export default ListItem;