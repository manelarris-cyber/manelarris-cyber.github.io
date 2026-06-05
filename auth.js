const USERS = [
  { id: 1, nom: "Amine",    prenom: "Karim",   email: "admin@agenceimmo.dz",    motDePasse: "Admin@123",   role: "admin",  tel: "0550 123 456" },
  { id: 2, nom: "Benali",   prenom: "Samira",  email: "samira@email.com",       motDePasse: "Samira@2024", role: "client", tel: "0661 234 567" },
  { id: 3, nom: "Cherif",   prenom: "Youcef",  email: "youcef@email.com",       motDePasse: "Youcef@123",  role: "client", tel: "0770 345 678" },
  { id: 4, nom: "Djebbar",  prenom: "Fatima",  email: "fatima@email.com",       motDePasse: "Fatima@456",  role: "client", tel: "0555 456 789" },
  { id: 5, nom: "Essaïd",   prenom: "Rachid",  email: "rachid@agenceimmo.dz",   motDePasse: "Rachid@789",  role: "agent",  tel: "0660 567 890" }
];
const SESSION_KEY = 'immo_session';

function getSession() {
  try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch { return null; }
}

function setSession(user) {
  const session = { ...user, motDePasse: undefined, loginAt: new Date().toISOString() };
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function isLoggedIn() { return getSession() !== null; }
const REGEX = {
  email:  /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\-_#])[A-Za-z\d@$!%*?&\-_#]{8,}$/,
  phone:    /^0[5-7]\d{8}$/,
  nom:      /^[a-zA-ZÀ-ÿ\s'\-]{2,50}$/
};

function validateField(field, value) {
  const v = value.trim();
  switch (field) {
    case 'email':    return REGEX.email.test(v)    ? '' : 'Email invalide (ex: user@example.com)';
    case 'password': return REGEX.password.test(v) ? '' : 'Min. 8 caractères, 1 majuscule, 1 chiffre, 1 caractère spécial';
    case 'phone':    return v === '' || REGEX.phone.test(v) ? '' : 'Numéro invalide (ex: 0661234567)';
    case 'nom':      return REGEX.nom.test(v)      ? '' : 'Nom invalide (2 à 50 caractères, lettres uniquement)';
    case 'prenom':   return REGEX.nom.test(v)      ? '' : 'Prénom invalide';
    case 'confirm':  return ''; 
    default:         return '';
  }
}
function showError(fieldId, msg) {
  const group = document.getElementById(fieldId)?.closest('.form-group');
  if (!group) return;
  group.classList.add('has-error');
  const errEl = group.querySelector('.error-msg');
  if (errEl) errEl.textContent = msg;
  const input = group.querySelector('input');
  if (input) input.classList.add('error');
}

function clearError(fieldId) {
  const group = document.getElementById(fieldId)?.closest('.form-group');
  if (!group) return;
  group.classList.remove('has-error');
  const input = group.querySelector('input');
  if (input) input.classList.remove('error');
}

function showAlert(id, msg, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = `alert alert-${type} show`;
  el.innerHTML = `${type === 'success' ? '✅' : '❌'} ${msg}`;
}

function hideAlert(id) {
  const el = document.getElementById(id);
  if (el) el.className = 'alert';
}
function handleLogin(e) {
  e.preventDefault();
  hideAlert('login-alert');

  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-password').value;
  let valid = true;
  const emailErr = validateField('email', email);
  if (emailErr) { showError('login-email', emailErr); valid = false; } else clearError('login-email');

  if (!pass) { showError('login-password', 'Mot de passe requis'); valid = false; } else clearError('login-password');

  if (!valid) return;

  const btn = document.getElementById('login-btn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Connexion...';

  setTimeout(() => {
    const user = USERS.find(u => u.email === email && u.motDePasse === pass);

    if (user) {
      setSession(user);
      showAlert('login-alert', `Bienvenue, ${user.prenom} ! Redirection...`, 'success');
      setTimeout(() => { window.location.href = 'index.html'; }, 1500);
    } else {
      showAlert('login-alert', 'Email ou mot de passe incorrect.', 'error');
      btn.disabled = false;
      btn.textContent = 'Se connecter';
    }
  }, 800);
}

function handleRegister(e) {
  e.preventDefault();
  hideAlert('register-alert');

  const prenom  = document.getElementById('reg-prenom').value;
  const nom     = document.getElementById('reg-nom').value;
  const email   = document.getElementById('reg-email').value;
  const tel     = document.getElementById('reg-tel').value;
  const pass    = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;

  let valid = true;

  const prenomErr = validateField('prenom', prenom);
  if (prenomErr) { showError('reg-prenom', prenomErr); valid = false; } else clearError('reg-prenom');

  const nomErr = validateField('nom', nom);
  if (nomErr) { showError('reg-nom', nomErr); valid = false; } else clearError('reg-nom');

  const emailErr = validateField('email', email.trim());
  if (emailErr) { showError('reg-email', emailErr); valid = false; } else clearError('reg-email');

  const telErr = validateField('phone', tel);
  if (telErr) { showError('reg-tel', telErr); valid = false; } else clearError('reg-tel');

  const passErr = validateField('password', pass);
  if (passErr) { showError('reg-password', passErr); valid = false; } else clearError('reg-password');

  if (pass !== confirm) {
    showError('reg-confirm', 'Les mots de passe ne correspondent pas');
    valid = false;
  } else clearError('reg-confirm');

  if (!valid) return;
  if (USERS.find(u => u.email === email.trim())) {
    showAlert('register-alert', 'Cet email est déjà utilisé.', 'error');
    return;
  }

  const btn = document.getElementById('register-btn');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Inscription...';

  setTimeout(() => {
    const newUser = {
      id: USERS.length + 1,
      nom: nom.trim(),
      prenom: prenom.trim(),
      email: email.trim(),
      motDePasse: pass,
      role: 'client',
      tel: tel.trim()
    };
    USERS.push(newUser);
    setSession(newUser);
    showAlert('register-alert', 'Compte créé avec succès ! Redirection...', 'success');
    setTimeout(() => { window.location.href = 'index.html'; }, 1800);
  }, 1000);
}

function logout() {
  clearSession();
  window.location.href = window.location.pathname.includes('') ? 'index.html' : 'index.html';
}

function updateNavAuth() {
  const session = getSession();
  const navAuth = document.getElementById('nav-auth');
  if (!navAuth) return;

  if (session) {
    navAuth.innerHTML = `
      <div class="user-menu">
        <button class="user-btn" onclick="toggleUserMenu()">
          👤 ${session.prenom}
          <span style="font-size:0.7rem">▼</span>
        </button>
        <div class="user-dropdown" id="user-dropdown">
          <a href="#">👤 Mon profil</a>
          <a href="${window.location.pathname.includes('') ? '' : ''}produits.html">❤️ Mes favoris</a>
          <button class="logout-btn" onclick="logout()">🚪 Se déconnecter</button>
        </div>
      </div>
    `;
  } else {
    const prefix = window.location.pathname.includes('') ? '' : '';
    navAuth.innerHTML = `
      <a href="${prefix}connexion.html" class="nav-cta">Se connecter</a>
    `;
  }
}

function toggleUserMenu() {
  document.getElementById('user-dropdown')?.classList.toggle('open');
}

document.addEventListener('click', (e) => {
  if (!e.target.closest('.user-menu')) {
    document.getElementById('user-dropdown')?.classList.remove('open');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  updateNavAuth();
  const ham = document.getElementById('hamburger');
  if (ham) ham.addEventListener('click', () => {
    document.getElementById('nav-links')?.classList.toggle('open');
  });

  document.querySelectorAll('input[data-validate]').forEach(input => {
    input.addEventListener('blur', () => {
      const rule = input.dataset.validate;
      const err = validateField(rule, input.value);
      if (err) showError(input.id, err);
      else clearError(input.id);
    });
  });
});
