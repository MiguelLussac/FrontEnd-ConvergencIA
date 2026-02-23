function toggleMeta(btn) {
    btn.classList.toggle('aberto');
    const card = btn.closest('.meta-card');
    const detalhes = card.querySelector('.meta-detalhes');
    if (detalhes) detalhes.classList.toggle('aberto');
}