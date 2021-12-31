// export const myMutation  =  ( state ) =>{

    
// }

export const setEntries  =  (state ,entries ) =>{
    // lo siguiente es mantener el arreglo y agregar las nuevas entradas
    state.entries = [...state.entries,...entries]
    state.isLoading = false
}

export const updateEntries  =  ( state , entry ) =>{
    const idx = state.entries.map( e => e.id).indexOf(entry.id)    
    state.entries[idx] = entry 
   
}

export const addEntry  =  ( state ,entry ) =>{
    state.entries = [entry,...state.entries]
    state.isLoading = false
}

export const deleteEntry  =  ( state , id ) =>{
    const idx = state.entries.map( e => e.id).indexOf(id)    
    state.entries = state.entries.filter( e => e.id !== id)
   
}

