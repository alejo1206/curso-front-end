var xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);

var htmlTabla = "<table class=\"table table-sm table-striped table-bordered table-hover\"><thead><tr><th>ID</th><th>Nombre y Apellido</th><th>Usuario</th><th>Email</th><th>Dirección</th><th>Compañía</th></tr></thead><tbody>"

xhr.onload = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let personas = JSON.parse(xhr.responseText);
            for(var key in personas){
                htmlTabla += "<tr><td>" + personas[key].id + "</td>";
                htmlTabla += "<td>" + personas[key].name + "</td>";
                htmlTabla += "<td>" + personas[key].username + "</td>";
                htmlTabla += "<td>" + personas[key].email + "</td>";
                htmlTabla += "<td>" + personas[key].address.street + " " + personas[key].address.suite + ", " + personas[key].address.city + ", " + personas[key].address.zipcode + "</td>";
                htmlTabla += "<td>" + personas[key].company.name + ", \"" + personas[key].company.catchPhrase + "\", " + personas[key].company.bs + "</td>";
            }
            htmlTabla += "</tr></tbody></table>"
            document.getElementById("contenedorTabla").innerHTML = htmlTabla;
        } 
        else {
            console.error(xhr.statusText);
        }
    }
};

xhr.onerror = function (e) {
    console.error(xhr.statusText);
};

xhr.send(null);
