const url = ''

const getFacts = async()=>{
    console.log("getting data");
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(response.status);
}