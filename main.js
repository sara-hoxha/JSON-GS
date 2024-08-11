function testGS(){
    const url = "https://script.google.com/macros/s/AKfycbz4taw8Mnam6zFCVwLA_kR1HGccvRv6zggfDZpRtTpmEH6evX4IwEvMbPUBVce-PBhTtg/exec"

    fetch(url)
        .then(d => d.json())
        .then(d => {
            document.getElementById("app").textContent =  d[0].status;
        });

}


document.getElementById("btn").addEventListener("click", testGS);