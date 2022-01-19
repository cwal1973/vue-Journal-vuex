// export const myMutation  =  ( state ) =>{

    
// }

export const loginUser  =  ( state, { user, idToken, refreshToken} ) =>{

  if ( idToken){
    localStorage.setItem('idToken',idToken)
    state.idToken = idToken
  }

  if ( refreshToken){
    localStorage.setItem('refreshToken',refreshToken)
    state.refreshToken = refreshToken
  }
  
  state.status = 'autenticado'
  state.user = user

    
}

export const logout  =  ( state ) =>{

  
  state.user = null
  state.idToken = null
  state.refreshToken = null
  localStorage.removeItem('idToken')  
  localStorage.removeItem('refreshToken')
  state.status = 'no-autenticado'    
}