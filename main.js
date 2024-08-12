// doGet
function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbzttiXyuagTRdrZN7MJQdZBBoiExRHQMwNJZDXFUvFfh18Xb-H5VD3PsZmDW_WvS45y/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent =  d[0].status;
        });

}


document.getElementById("btn").addEventListener("click", testGS);

// doPost
function addGS(){
    const url = "https://script.google.com/macros/s/AKfycbzttiXyuagTRdrZN7MJQdZBBoiExRHQMwNJZDXFUvFfh18Xb-H5VD3PsZmDW_WvS45y/exec"

    fetch(url, {
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        body: JSON.stringify({"first name":"Linda",telephone:"+8-053-151-888","last name":"Smith"})
    });


}


document.getElementById("btn2").addEventListener("click", addGS);

document.getElementById("btn").addEventListener("click", addGS);
