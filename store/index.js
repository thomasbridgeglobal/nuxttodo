import { v4 as uuidv4 } from 'uuid'
import _ from 'underscore';

// mutation_types.js
export const ADD_ITEM = 'ADD_ITEM'
export const CHANGE_STATUS = 'CHANGE_STATUS'

export const state = () => ({
    list: []
})


export const actions = {
    addItemToList(store, text) {        
        store.commit(ADD_ITEM, text)
    },

    changeStatus(store, id) {        
        store.commit(CHANGE_STATUS, id)
    }
}


// getters.js
export const getters =  {
    getItems(state) {
       return state.list
    }    
}


export const mutations =  {
    [ADD_ITEM](state, text) {
      const data = {
            id: uuidv4(),
            text,
            checked: false
        }
      state.list.push(data);
    },

    [CHANGE_STATUS](state, id) {        
        _.findWhere(state.list, { id }).checked = true        
    }  
}