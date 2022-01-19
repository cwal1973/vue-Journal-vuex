import { useStore} from 'vuex'
import { computed } from 'vue'

const useAuth = () => {
  const store = useStore()

  const checkAuthStatus = async() => {
    const resp = await store.dispatch('auth/checkAuthentication')
    return resp
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

    checkAuthStatus


  }

}

export default useAuth
