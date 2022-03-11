export const state = () => ({
    containers: [],
    networks: [],
    volumes: []
})

export const mutations = {
    addContainer(state, container) {
        if (state.containers.filter(c => c.id === container.id).length == 0)
            state.containers.push(container)
    },
    removeContainer(state, id) {
        state.containers = state.containers.filter(c => c.id !== id)
    },
    clearContainers(state) {
        state.containers = []
    },
    addNetwork(state, network) {
        state.networks.push(network)
    },
    removeNetwork(state, { network }) {
        state.networks.splice(state.networks.indexOf(network), 1)
    },
    addVolume(state, volume) {
        state.volumes.push(volume)
    },
    removeVolume(state, { volume }) {
        state.volumes.splice(state.volumes.indexOf(volume), 1)
    }
}

export const actions = {
    addContainer({ commit }, container) {
        commit('addContainer', container)
    },
    deleteContainer({ commit }, id) {
        commit('removeContainer', id)
    },
    clearContainers({ commit }) {
        commit('clearContainers')
    }
}