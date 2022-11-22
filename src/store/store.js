import toyService from '../services/toy.service.js'
import Vuex from 'vuex'

export const store = new Vuex.Store({
    strict: true,
    state: {
        toys: null,
    },
    getters: {
        toysForDisplay(state) {
            return state.toys
        },
    },
    mutations: {
        setToys(state, toys) {
            console.log('set Toys', toys)
            state.toys = toys
        },
        addToy({ toys }, { toy }) {
            console.log('Adding!!')
            toys.push(toy)
        },
        updateToy({ toys }, { toy }) {
            const idx = toys.findIndex((_toy) => _toy._id === toy._id)
            if (idx === -1) {
                console.log("Can't update toy " + toy._id)
                return
            }
            toys.splice(idx, 1, toy)
        },
        removeToy({ toys }, { toyId }) {
            const idx = toys.findIndex((toy) => toy._id === toyId)
            if (idx === -1) {
                console.log("Can't remove toy " + toyId)
                return
            }
            toys.splice(idx, 1)
        },
    },
    actions: {
        loadToys({ commit }) {
            toyService.query().then(toys => {
                commit('setToys', toys)
                console.log('load!', toys)
            })
        },
        getToyById(context, { toyId }) {
            console.log(context)
            return toyService.getById(toyId)
        },
        saveToy({ commit }, { toy }) {
            console.log('Saving')
            const isEdit = toy._id
            return toyService.save(toy).then(toy => {
                const type = isEdit ? 'updateToy' : 'addToy'
                commit({ type, toy })
            })
        },
        removeToy({ commit }, { toyId }) {
            console.log('Store remove toyId', toyId)
            return toyService.remove(toyId).then(removedToy => {
                commit({ type: 'removeToy', toyId })
            })
        },
    },
})
