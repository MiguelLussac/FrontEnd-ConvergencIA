function selecionarHumor(btn) {
    document.querySelectorAll('.humor-btn').forEach(b => b.classList.remove('ativo'));
    btn.classList.add('ativo');
}