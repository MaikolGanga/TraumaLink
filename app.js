// Configuración de Firebase (aquí debería ir tu propia configuración de Firebase)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Función para verificar si el usuario ya está logueado
function checkUserLogin() {
  const user = auth.currentUser;
  if (user) {
    // Si el usuario está logueado, redirige a la página de bienvenida
    window.location.href = "bienvenida.html";
  } else {
    // Si no está logueado, lo redirige al login
    window.location.href = "login.html";
  }
}

// Función de Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      // Redirigir a la página de bienvenida
      window.location.href = "bienvenida.html";
    })
    .catch(error => {
      alert("Usuario o contraseña incorrectos");
    });
});

// Función de Registro
document.getElementById('registerBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      alert("Usuario registrado correctamente");
      hideRegister(); // Volver al formulario de login
    })
    .catch(error => {
      alert(error.message);
    });
});

// Función para cerrar sesión
function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html"; // Redirigir a login
  });
}
