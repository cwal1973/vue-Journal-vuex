// export const myMutation  =  ( state ) =>{

    
// }

export const setEntries  =  (state ,entries ) =>{
    // lo siguiente es mantener el arreglo y agregar las nuevas entradas
    state.entries = [...state.entries,...entries]
    state.isLoading = false
}

export const updateEntries  =  (/* state */) =>{
    
}

export const addEntry  =  (/* state */) =>{
    
}

