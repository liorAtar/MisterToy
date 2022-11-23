import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const TOY_URL = 'toy/'

function query() {
    return httpService.get(TOY_URL).then(res => res)
}

function save(toy) {
    return toy._id ? _update(toy) : _add(toy)
}

function _add(addedToy) {
    return httpService.post(TOY_URL, addedToy).then(res => res)
}

function _update(updatedToy) {
    return httpService.put(TOY_URL + updatedToy._id, updatedToy, updatedToy).then(res => res)
}

function remove(toyId) {
    return httpService.delete(TOY_URL + toyId).then(res => res)
}

function getById(toyId) {
    return httpService.get(TOY_URL + toyId).then(res => res)
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