import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { httpService } from './http.service.js'

const TOY_URL = 'toy'

function query() {
    // return axios.get(TOY_URL).then(res => res.data)
    console.log('toy service!')
    return httpService.get(TOY_URL).then(res => res)
}

function save(toy) {
    return toy._id ? _update(toy) : _add(toy)
}

function _add(addedToy) {
    // return axios.post(TOY_URL, addedToy).then(res => res.data)
    return httpService.post(TOY_URL, addedToy).then(res => res.data)
}

function _update(updatedToy) {
    // return axios.put(TOY_URL + updatedToy._id, updatedToy).then(res => res.data)
    return httpService.put(TOY_URL + updatedToy._id, updatedToy, updatedToy).then(res => res.data)
}

function remove(toyId) {
    // return axios.delete(TOY_URL + toyId).then(res => res.data)
    return httpService.delete(TOY_URL + toyId).then(res => res.data)
}

function getById(toyId) {
    // return axios.get(TOY_URL + toyId).then(res => res.data)
    return httpService.get(TOY_URL + toyId).then(res => res.data)
}

export default {
    query,
    getById,
    save,
    remove,
}

function _createToys() {
    return [
        _createToy('Talking Doll', 123, ['Doll', 'Battery Powered', 'Baby']),
    ]
}

function _createToy(name, price, labels) {
    return {
        _id: utilService.makeId(),
        name,
        price,
        labels,
        inStock: true,
        createdAt: Date.now(),
    }
}