
document.getElementById('formReg').addEventListener('submit', function(evento) {
    console.log("flaco hice click");
    evento.preventDefault()
    const nombre = document.getElementById('FormNameInput').value;
    const apellido = document.getElementById('FormSurnameInput').value;
    const correo = document.getElementById('FormNewEmailInput').value;
    const contraseña = document.getElementById('FormNewPasswordInput').value;
    const telefono = document.getElementById('FormPhoneInput').value;
    const diaNacimiento = document.getElementById('FormDayInput').value;
    const mesNacimiento = document.getElementById('FormMonthInput').value;
    const añoNacimiento = document.getElementById('FormYearInput').value;
    console.log(nombre);
    if(nombre === "" || apellido === "" || correo === "" || contraseña == "" || telefono === "" || diaNacimiento === "" || mesNacimiento === "" || añoNacimiento === ""){
        alert("Todos los campos deben ser completados");
        evento.preventDefault();
    }else{
        const fechaNacimiento = `${añoNacimiento}:${mesNacimiento}:${diaNacimiento}`;
        const datos = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            contraseña: contraseña,
            telefono: telefono,
            fechaNacimiento : fechaNacimiento
        };
        
        fetch('http://localhost:7777', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        }).then(response => response.json());
        window.location.href = 'public/inicio.html';
    }  
});


document.getElementById('inisiarSesion').addEventListener('click', async function (evento){
    const correo = document.getElementById('FormEmailInput').value;
    const contraseña = document.getElementById('FormPasswordInput').value;

    if (correo === "" || contraseña === "") {
        alert("Completa todos los campos ");
        evento.preventDefault();
    }
    else{
        const datos = {
            correo: correo,
            contraseña: contraseña
        }
        const res = await fetch('http://localhost:7777/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });
       window.location.href = 'public/inicio.html';
    }
});





