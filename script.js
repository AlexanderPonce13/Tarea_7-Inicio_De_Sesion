document.addEventListener("DOMContentLoaded", function() {
    // Se ejecuta cuando el DOM ha sido completamente cargado
    
    document.getElementById("loginButton").addEventListener("click", function() {
        // Agrega un evento de clic al botón de inicio de sesión
        
        // Obtén los valores del nombre de usuario y la contraseña
        var username = document.getElementById("uname").value;
        var password = document.getElementById("psw").value;

        // Verifica si el nombre de usuario o la contraseña están en blanco
        if (username.trim() === "" || password.trim() === "") {
            // Muestra una alerta si el nombre de usuario o la contraseña están en blanco
            alert("Por favor, ingresa tu nombre de usuario y contraseña.");
            return; // Sale de la función si el nombre de usuario o la contraseña están en blanco
        }

        // Imprime el nombre de usuario y la contraseña en la consola
        console.log("Nombre de usuario: " + username);
        console.log("Contraseña: " + password);
    });
});
