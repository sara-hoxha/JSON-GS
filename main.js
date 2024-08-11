// doGet
function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbyLulAPhfHyD3QJqX0hRYcTG4zY5BIzFVFXTzux2MO5vYfNYn7WgIrFhpA4B8t0Z-RcNA/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent =  d[0].status;
        });

}


document.getElementById("btn").addEventListener("click", testGS);

// doPost
function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbyLulAPhfHyD3QJqX0hRYcTG4zY5BIzFVFXTzux2MO5vYfNYn7WgIrFhpA4B8t0Z-RcNA/exec"

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({name: "John"})
    });


}


document.getElementById("btn2").addEventListener("click", addGS);

document.getElementById("btn").addEventListener("click", addGS);
