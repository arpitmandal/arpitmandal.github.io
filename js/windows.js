/* ═══════════════════════════════════════════════
   windows.js — XP Window Management System
   Handles creation, drag, z-index, minimize, maximize, close
═══════════════════════════════════════════════ */

let _zCounter = 200;
const _windows = {}; // id → { el, minimized, maximized, savedStyle }

/* ── Create a Window ──────────────────────────────── */
function createWindow(id, title, iconSvg, contentHtml, opts = {}) {
    // If window already exists, just focus and restore it
    if (_windows[id]) {
        restoreWindow(id);
        focusWindow(id);
        return;
    }

    const w = opts.width  || 660;
    const h = opts.height || 460;

    // Cascade new windows so they don't all stack perfectly
    const offset = Object.keys(_windows).length * 28;
    const left = Math.max(80, Math.min(window.innerWidth  - w - 20, 120 + offset));
    const top  = Math.max(30, Math.min(window.innerHeight - h - 50, 60  + offset));

    const win = document.createElement('div');
    win.className = 'xp-window';
    win.id = `win-${id}`;
    win.style.cssText = `width:${w}px; height:${h}px; left:${left}px; top:${top}px; z-index:${++_zCounter};`;

    win.innerHTML = `
        <div class="title-bar" data-winid="${id}">
            <div class="title-bar-left">
                <span class="title-bar-icon">${iconSvg}</span>
                <span class="title-bar-text">${title}</span>
            </div>
            <div class="title-controls">
                <button class="btn-minimize" title="Minimize" onclick="minimizeWindow('${id}')">&#8211;</button>
                <button class="btn-maximize" title="Maximize" onclick="toggleMaximize('${id}')">&#9633;</button>
                <button class="btn-close"    title="Close"    onclick="closeWindow('${id}')">&#10005;</button>
            </div>
        </div>
        <div class="window-body">
            <div class="window-content${opts.contentClass ? ' ' + opts.contentClass : ''}">${contentHtml}</div>
        </div>`;

    document.getElementById('window-container').appendChild(win);
    _windows[id] = { el: win, minimized: false, maximized: false, savedStyle: null };

    // Drag on title bar
    win.querySelector('.title-bar').addEventListener('mousedown', _onTitleMouseDown);

    // Focus on any click inside window
    win.addEventListener('mousedown', () => focusWindow(id));

    // Taskbar button
    _addTaskbarBtn(id, title, iconSvg);

    focusWindow(id);
}

/* ── Focus (bring to front) ───────────────────────── */
function focusWindow(id) {
    const s = _windows[id];
    if (!s) return;
    s.el.style.zIndex = ++_zCounter;
    // Highlight taskbar button
    document.querySelectorAll('.taskbar-btn').forEach(b => b.classList.remove('focused'));
    const btn = document.getElementById(`tbtn-${id}`);
    if (btn) btn.classList.add('focused');
}

/* ── Close ────────────────────────────────────────── */
function closeWindow(id) {
    const s = _windows[id];
    if (!s) return;
    s.el.remove();
    delete _windows[id];
    _removeTaskbarBtn(id);
}

/* ── Minimize ─────────────────────────────────────── */
function minimizeWindow(id) {
    const s = _windows[id];
    if (!s || s.minimized) return;
    s.el.style.display = 'none';
    s.minimized = true;
    const btn = document.getElementById(`tbtn-${id}`);
    if (btn) btn.classList.remove('focused');
}

/* ── Restore from minimize ────────────────────────── */
function restoreWindow(id) {
    const s = _windows[id];
    if (!s) return;
    s.el.style.display = 'flex';
    s.minimized = false;
}

/* ── Toggle Maximize ──────────────────────────────── */
function toggleMaximize(id) {
    const s = _windows[id];
    if (!s) return;
    const el = s.el;

    if (s.maximized) {
        // Restore saved style
        Object.assign(el.style, s.savedStyle);
        s.maximized = false;
    } else {
        // Save current geometry
        s.savedStyle = {
            width:  el.style.width,
            height: el.style.height,
            left:   el.style.left,
            top:    el.style.top,
            borderRadius: el.style.borderRadius
        };
        // Expand to fill desktop area
        el.style.left   = '0px';
        el.style.top    = '0px';
        el.style.width  = '100vw';
        el.style.height = 'calc(100vh - 30px)';
        el.style.borderRadius = '0';
        s.maximized = true;
    }
}

/* ── Dragging ─────────────────────────────────────── */
let _drag = null; // { id, offsetX, offsetY }

function _onTitleMouseDown(e) {
    if (e.target.tagName === 'BUTTON') return;
    const id = e.currentTarget.dataset.winid;
    const s  = _windows[id];
    if (!s || s.maximized) return;
    const rect = s.el.getBoundingClientRect();
    _drag = { id, offsetX: e.clientX - rect.left, offsetY: e.clientY - rect.top };
    e.preventDefault();
}

document.addEventListener('mousemove', e => {
    if (!_drag) return;
    const s = _windows[_drag.id];
    if (!s) { _drag = null; return; }
    const newLeft = e.clientX - _drag.offsetX;
    const newTop  = e.clientY - _drag.offsetY;
    s.el.style.left = Math.max(-200, newLeft) + 'px';
    s.el.style.top  = Math.max(0,    newTop)  + 'px';
});

document.addEventListener('mouseup', () => { _drag = null; });

/* ── Taskbar helpers ──────────────────────────────── */
function _addTaskbarBtn(id, title, iconSvg) {
    const strip = document.getElementById('taskbar-windows');
    if (!strip) return;
    const btn = document.createElement('button');
    btn.className = 'taskbar-btn';
    btn.id = `tbtn-${id}`;
    btn.innerHTML = `<span class="taskbar-btn-icon">${iconSvg}</span><span class="taskbar-btn-label">${title}</span>`;
    btn.addEventListener('click', () => {
        const s = _windows[id];
        if (!s) return;
        if (s.minimized) {
            restoreWindow(id);
            focusWindow(id);
        } else if (parseInt(s.el.style.zIndex) === _zCounter) {
            minimizeWindow(id);
        } else {
            focusWindow(id);
        }
    });
    strip.appendChild(btn);
}

function _removeTaskbarBtn(id) {
    const btn = document.getElementById(`tbtn-${id}`);
    if (btn) btn.remove();
}
