
const ninjaApiKey = 'wlDQeU4zUC5r6tCUedAvxA==81Qc1JmW4FirquLq';

const optionsNinja = {
    method: 'GET',
    headers: {
        'X-Api-Key': ninjaApiKey
    }
};


export const fetchData = (currentText) => {

    const urlNinja = `https://api.api-ninjas.com/v1/city?limit=10&min_population=1000&name=${currentText}`;


    return fetch(urlNinja, optionsNinja).then(resp => resp.json());

}