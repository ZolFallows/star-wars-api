
export default function fetchData(resource, name, callback){
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }

    fetch(`https://swapi.co/api/${resource}/?search=${name}`, options)
    .then(res => {
    if(res.ok) return res.json();
    else throw new Error(res.status)
    })
    .then(data => callback(data))
    .catch(e => console.log(e))
}
