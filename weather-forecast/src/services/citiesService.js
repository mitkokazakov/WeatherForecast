
const ninjaApiKey = 'wlDQeU4zUC5r6tCUedAvxA==81Qc1JmW4FirquLq';

const optionsNinja = {
    method: 'GET',
    headers: {
        'X-Api-Key': ninjaApiKey
    }
};


export const fetchData = async (currentText) => {

    const urlNinja = `https://api.api-ninjas.com/v1/city?min_population=1000&name=${currentText}`;


    // return fetch(urlNinja, optionsNinja).then(resp => resp.json());

    // const data = fetch(urlNinja, optionsNinja).then(resp => resp.json());

    const resp = await fetch(urlNinja, optionsNinja);

    const fetchedData = await resp.json();

    const filteredData = [];

    // if(fetchedData.length > 10){
    //     filteredData = fetchData.slice(0,10);

    //     return filteredData;
    // }
    // else{
    //     return fetchedData;
    // }

    return fetchedData;

}