const users = {
    "usuarios":[
{"id":1007102988,"password":"niko5778","tipo_usuario":2 },
{"id":783, "password":"infante", "tipo_usuario":1 },
{"id":786, "password":"tatiana", "tipo_usuario":2},
{"id":817, "password":"bri", "tipo_usuario":2}]}
var find = true
var documento, contrasena, tipo_usuario, total, residuo

function cargarDinero(){
        inicializarCajero()
        var billete5 = parseFloat(document.getElementById('5').value) + parseInt(localStorage.getItem('billete5'));
        var billete10 = parseFloat(document.getElementById('10').value) + parseInt(localStorage.getItem('billete10'));
        var billete20 = parseFloat(document.getElementById('20').value) + parseInt(localStorage.getItem('billete20'));
        var billete50 = parseFloat(document.getElementById('50').value) + parseInt(localStorage.getItem('billete50'));
        var billete100 = parseFloat(document.getElementById('100').value) + parseInt(localStorage.getItem('billete100'));

        localStorage.setItem('billete5', billete5);
        localStorage.setItem('billete10', billete10);
        localStorage.setItem('billete20', billete20);
        localStorage.setItem('billete50',  billete50);
        localStorage.setItem('billete100',  billete100);
        controller = prompt("a finalizado la carga de dinero? \n 1 si \n 2 no") 
        localStorage.clear();
        if(controller == 1){
        total = (parseFloat(localStorage.getItem('billete5') * 5000)) + (parseFloat(localStorage.getItem('billete10') * 10000)) + (parseFloatlocalStorage.getItem('billete20') * 20000) + (localStorage.getItem('billete50') * 50000) + (localStorage.getItem('billete100') * 100000)
        console.log(localStorage.getItem('billete5'))
        alert("porfavor dale al boton de volver")
}}

function inicializarCajero(){
    if(localStorage.getItem('billete5') == null && localStorage.getItem('billete10') == null && localStorage.getItem('billete20') == null && localStorage.getItem('billete50') == null && localStorage.getItem('billete100') == null)
    localStorage.setItem('billete5', 0);
    localStorage.setItem('billete10', 0);
    localStorage.setItem('billete20', 0);
    localStorage.setItem('billete50', 0);
    localStorage.setItem('billete100', 0);
}
function iniciarSesion(documento,contrasena){
    tamano = users.usuarios.length
    for(let i = 0; i<tamano; i++) {
        for(let j = 0; j< 3; j++) {
            if(documento == users.usuarios[i].id && contrasena == users.usuarios[i].password){
                alert("usuario encontrado")
                find = false;
                tipo_usuario = users.usuarios[i].tipo_usuario
                tipoUsuarios(tipo_usuario)
                break
            }
        }
    }
    if(find ==  true) {
        alert("usuario no encontrado intente nuevamente")
    }
}
function tipoUsuarios(tipo_usuario) {
    if(tipo_usuario == 1)
    document.write('<a href="admin.html"><input type="button" value="cargarDinero"></input></a>')
    else{
        document.write('<a href="retirarDinero.html"><input type="button" value="cargarDinero"></input></a>')
    }
}
function obtenerDatos() {
    documento = document.getElementById('documento').value;
    contrasena = document.getElementById('password').value;
    iniciarSesion(documento, contrasena)
} 

function retirar_dinero() {
        if(total == null){
        alert("cajero en mantenimiento, vuelva pronto");
    }
    let cantidadRetirar = document.getElementById('cantidad');
    if(cantidadRetirar <= total) {
        alert("el dinero que usted puede retirar es " + cantidadRetirar);
        retiroCaso = 1;
    }elseif( cantidadRetirar > total);
    {
        alert("la cantidad a retirar es" + total);
        retiroCaso = 2;
    }
    if(retiroCaso = 1){
        cantidad = cantidadRetirar;
    }else{
        cantidad = total;
    }

    retiro = cantidad;
    j = 0;
    let valoresBilletes = [100000,50000,20000,10000,5000]
    for(i = 0; i<=valoresBilletes.length;i++)
    {
        while(cantidad > valoresBilletes[i]){
            j =+ 1
            retiro = retiro - valoresBilletes[i]
        } 
    console.log("la cantidad de billetes de"+ valoresBilletes[i] +" es "+ j)
    }
}
