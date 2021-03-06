import journalApi from '@/api/journalApi'


// export const myAction = async ({ commit })=>{
    
// }

export const loadEntries = async ( { commit })=>{
    const { data } = await journalApi.get('/entries.json')
    if (!data) {
        commit('setEntries',[])
    }
    const entries = []
    for (let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }
    commit ('setEntries',entries)

    
}

export const updateEntries = async ( { commit } , entry  )=>{
    // de esta forma desintegro el entry en partes y le quito la propiedad Id.
    const { date,picture,text } = entry
    const dataToSave = {date , picture, text}
    const resp = await journalApi.put(`/entries/${ entry.id}.json`,dataToSave)
    commit('updateEntries',{...entry})
    
}

export const createEntries = async ( { commit }, entry )=>{
    const { date,picture,text } = entry
    const dataToSave = {date , picture, text}

    const { data }  = await journalApi.post('/entries.json',dataToSave)
   
    dataToSave.id = data.name
    commit('addEntry',dataToSave)  
    
    return data.name    
}

export const deleteEntry = async ( { commit } , id  )=>{
    // de esta forma desintegro el entry en partes y le quito la propiedad Id.   
    const resp = await journalApi.delete(`/entries/${ id }.json`)
    commit('deleteEntry',id)
    return id
}