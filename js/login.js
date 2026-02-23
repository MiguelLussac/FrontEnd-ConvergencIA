// ─── navigation ───────────────────────────────────────────────
function showApp(view) {
    document.getElementById("splash").classList.add("hidden");
    const app = document.getElementById("app");
    app.classList.add("visible");
    switchView(view);
}

function goBack() {
    document.getElementById("splash").classList.remove("hidden");
    document.getElementById("app").classList.remove("visible");
}

function switchView(name) {
    document
        .querySelectorAll(".view")
        .forEach((v) => v.classList.remove("active"));
    document.getElementById("view-" + name).classList.add("active");
}

function showForgot() {
    toast("📧 Link de recuperação enviado para seu e-mail!", "#2a7ab8");
}

// ─── password toggle ──────────────────────────────────────────
function togglePw(id, btn) {
    const inp = document.getElementById(id);
    if (inp.type === "password") {
        inp.type = "text";
        btn.textContent = "🙈";
    } else {
        inp.type = "password";
        btn.textContent = "👁";
    }
}

// ─── masks ────────────────────────────────────────────────────
document.getElementById("reg-cpf").addEventListener("input", function () {
    let v = this.value.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    this.value = v;
});

document.getElementById("reg-tel").addEventListener("input", function () {
    let v = this.value.replace(/\D/g, "");
    if (v.length <= 10)
        v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    else v = v.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    this.value = v.trim().replace(/-$/, "");
});

// ─── validation helpers ───────────────────────────────────────
function setErr(id, errId, show) {
    const inp = document.getElementById(id);
    const msg = document.getElementById(errId);
    inp.classList.toggle("error", show);
    msg.style.display = show ? "block" : "none";
    return show;
}

function validEmail(e) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}
function validCPF(c) {
    return c.replace(/\D/g, "").length === 11;
}
function validTel(t) {
    return t.replace(/\D/g, "").length >= 10;
}

// ─── login ────────────────────────────────────────────────────
function handleLogin() {
    const email = document.getElementById("login-email").value.trim();
    const pw = document.getElementById("login-pw").value;
    let hasErr = false;
    hasErr |= setErr("login-email", "login-email-err", !validEmail(email));
    hasErr |= setErr("login-pw", "login-pw-err", pw.length === 0);
    if (hasErr) return;
    const btn = document.querySelector("#view-login .btn-main");
    btn.disabled = true;
    btn.textContent = "Entrando…";
    setTimeout(() => {
        window.location.href = "/pages/home.html";
    }, 1200);
}

// ─── register ─────────────────────────────────────────────────
function handleRegister() {
    const nome = document.getElementById("reg-nome").value.trim();
    const sobre = document.getElementById("reg-sobrenome").value.trim();
    const cpf = document.getElementById("reg-cpf").value;
    const tel = document.getElementById("reg-tel").value;
    const email = document.getElementById("reg-email").value.trim();
    const pw = document.getElementById("reg-pw").value;
    let hasErr = false;
    hasErr |= setErr("reg-nome", "reg-nome-err", nome.length === 0);
    hasErr |= setErr(
        "reg-sobrenome",
        "reg-sobrenome-err",
        sobre.length === 0,
    );
    hasErr |= setErr("reg-cpf", "reg-cpf-err", !validCPF(cpf));
    hasErr |= setErr("reg-tel", "reg-tel-err", !validTel(tel));
    hasErr |= setErr("reg-email", "reg-email-err", !validEmail(email));
    hasErr |= setErr("reg-pw", "reg-pw-err", pw.length < 6);
    if (hasErr) return;
    const btn = document.querySelector("#view-register .btn-main");
    btn.disabled = true;
    btn.textContent = "Cadastrando…";
    setTimeout(() => {
        window.location.href = "/pages/home.html";
    }, 1400);
}

// ─── toast ────────────────────────────────────────────────────
function toast(msg, bg) {
    const el = document.getElementById("toast");
    el.textContent = msg;
    el.style.background = bg || "#1e7a4e";
    el.classList.add("show");
    setTimeout(() => el.classList.remove("show"), 3200);
}

// ─── clear error on input ─────────────────────────────────────
document.querySelectorAll("input").forEach((inp) => {
    inp.addEventListener("input", () => {
        inp.classList.remove("error");
        const next =
            inp.parentElement.nextElementSibling || inp.nextElementSibling;
        if (next && next.classList.contains("err-msg"))
            next.style.display = "none";
    });
});