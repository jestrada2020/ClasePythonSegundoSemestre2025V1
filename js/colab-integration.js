// colab-integration.js - Google Colab integration (notebook opening, downloading, code saving)

// Google Colab integration
function openInColab(notebookType) {
    const colabUrl = `https://colab.research.google.com/github/python-masterclass/notebooks/blob/main/${notebookType}.ipynb`;
    window.open(colabUrl, '_blank');
}

// Download notebook
function downloadNotebook(notebookType) {
    // Create a simple notebook structure
    const notebook = {
        cells: [
            {
                cell_type: 'markdown',
                source: [`# ${notebookType.charAt(0).toUpperCase() + notebookType.slice(1)} - Python Masterclass`]
            },
            {
                cell_type: 'code',
                source: ['# Escribe tu código aquí\nprint("¡Hola desde Google Colab!")']
            }
        ],
        metadata: {
            kernelspec: {
                display_name: 'Python 3',
                language: 'python',
                name: 'python3'
            }
        },
        nbformat: 4,
        nbformat_minor: 2
    };
    
    const dataStr = JSON.stringify(notebook, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `${notebookType}.ipynb`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Save code
function saveCode() {
    const code = document.getElementById('mainCodeEditor').textContent;
    localStorage.setItem('pythonMasterclassCode', code);
    alert('Código guardado localmente');
}