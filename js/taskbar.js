/* ═══════════════════════════════════════════════
   taskbar.js — Taskbar, Clock, Start Menu
═══════════════════════════════════════════════ */

/* ── Clock ────────────────────────────────────────── */
function _updateClock() {
    const el = document.getElementById('taskbar-clock');
    if (!el) return;
    const now = new Date();
    let h = now.getHours();
    const m = String(now.getMinutes()).padStart(2, '0');
    const ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    el.textContent = `${h}:${m} ${ampm}`;
}

_updateClock();
setInterval(_updateClock, 1000);

/* ── Start Menu Toggle ────────────────────────────── */
function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    menu.classList.toggle('hidden');
}

// Close start menu when clicking outside of it or the start button
document.addEventListener('click', e => {
    const menu = document.getElementById('start-menu');
    const startBtn = document.getElementById('start-button');
    if (!menu || menu.classList.contains('hidden')) return;
    if (!menu.contains(e.target) && e.target !== startBtn && !startBtn.contains(e.target)) {
        menu.classList.add('hidden');
    }
});

// Also close start menu if a window is opened via start menu item
function _closeStartMenu() {
    const menu = document.getElementById('start-menu');
    if (menu) menu.classList.add('hidden');
}

/* ── Shut Down ────────────────────────────────────── */
function doShutDown() {
    _closeStartMenu();
    const sd = document.getElementById('shutdown-screen');
    if (sd) {
        sd.classList.remove('hidden');
        sd.style.display = 'flex';
    }
}
