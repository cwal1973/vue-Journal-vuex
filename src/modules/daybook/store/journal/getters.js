// export const myGetter =  ( state ) =>{
//    return state.algo
    
// }

export const getEntryByTerm =  ( state ) => ( term='') =>  {
    if (term.length === 0) return state.entries   
    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase()))
    
}

export const getEntryById =  ( state ) => ( id = '') =>{
    if (id.length==0) return null
    return state.entries.filter(entry => entry.id === id)

    
}