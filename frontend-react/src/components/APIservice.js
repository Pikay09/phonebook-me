export default class APIservice {
    static UpdatePhonenum(fullname,id) {
        return fetch(`http://127.0.0.1:5000/update/${id}`, {
      'method': 'PUT',
      headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify(fullname)
    })
    .then(res => res.json())
    }
}