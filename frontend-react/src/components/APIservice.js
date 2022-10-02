
export default class APIservice {
    static UpdatePhonenum(id,fullname) {
        return fetch(`http://localhost:5000/update/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify(fullname)
    })
    .then(resp => resp.json())
    }

    static InsertPhonenum(fullname) {
        return fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify(fullname)
    })
    .then(resp => resp.json())
    }

    static DeletePhonenum(id) {
        return fetch(`http://localhost:5000/erase/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'},
    })
    }

}