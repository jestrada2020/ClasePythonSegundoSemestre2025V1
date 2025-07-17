// utils.js - Utility functions (theme toggling, progress export, code formatting)

// Code formatting
function formatCode() {
    const editor = document.getElementById('mainCodeEditor');
    let code = editor.textContent;
    
    // Simple formatting
    code = code.replace(/;\s*\n/g, '\n');
    code = code.replace(/\{\s*\n/g, '{\n    ');
    code = code.replace(/\n\s*\}/g, '\n}');
    
    editor.textContent = code;
}

// Clear code
function clearCode() {
    document.getElementById('mainCodeEditor').textContent = '# Escribe tu código aquí\n';
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}