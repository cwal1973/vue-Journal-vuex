import { useStore} from 'vuex'
import { computed } from 'vue'

const useAuth = () => {
  const store = useStore()

  const checkAuthStatus = async() => {
    const resp = await store.dispatch('auth/checkAuthentication')
    return resp
  }

  const logout =() => {
    store.commit('auth/logout')
    store.commit('journal/clearEntries')
  }

  return {

    createUser: async( user )=>{
      const resp = await store.dispatch('auth/createUser', user )

      return resp
    },

    loginUser: async( user )=>{
      const resp = await store.dispatch('auth/signInUser', user )

      return resp
    },

    authStatus: computed( () => store.getters['auth/currentState'] ),
    userName: computed( () => store.getters['auth/userName'] ),

    checkAuthStatus,
    logout


  }

}

export default useAuth
