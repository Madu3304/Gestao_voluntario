// url

const url = 'localhost:8080/api';
let resource = '';

let uri = `${URL}+${resource}`;


// qt de eventos
async function getQuantidadeEvento() {
    
    resource = '/estatistica/eventos';
    try {
        const res = await fetch(uri);

        if(!res.ok) {
            throw new Error(`Error: ${res.status}`);
        } 

        const json = await res.json();
        console.log(json);

    }catch(e) {
        console.log(e);
    }
}
