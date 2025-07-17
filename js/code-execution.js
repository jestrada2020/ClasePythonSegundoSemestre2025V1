// code-execution.js - Code execution and simulation (runCode, simulatePythonExecution, performance metrics)

// Run code function
function runCode(editorId, outputId) {
    const editor = document.getElementById(editorId);
    const output = document.getElementById(outputId);
    const code = editor.textContent || editor.innerText;
    
    // Simulate code execution
    output.innerHTML = '>>> Ejecutando código...\n';
    
    setTimeout(() => {
        try {
            // Simple Python-like execution simulation
            const result = simulatePythonExecution(code);
            output.innerHTML = `>>> Código ejecutado exitosamente:\n${result}`;
            
            // Update performance metrics
            updatePerformanceMetrics(code);
            
            // Progress to next step if appropriate
            if (currentStep < 4) {
                setTimeout(() => {
                    nextFeynmanStep();
                }, 1000);
            }
            
        } catch (error) {
            output.innerHTML = `>>> Error: ${error.message}`;
            updateDebugPanel(error.message);
        }
    }, 1000);
}

// Simulate Python execution
function simulatePythonExecution(code) {
    let output = '';
    const lines = code.split('\n');
    
    lines.forEach(line => {
        line = line.trim();
        if (line.startsWith('print(')) {
            const content = line.match(/print\((.*)\)/);
            if (content) {
                let toPrint = content[1];
                // Handle f-strings
                if (toPrint.includes('f"') || toPrint.includes("f'")) {
                    toPrint = toPrint.replace(/f["']/g, '').replace(/["']/g, '');
                    toPrint = toPrint.replace(/\{[^}]*\}/g, '[valor]');
                }
                output += toPrint.replace(/['"]/g, '') + '\n';
            }
        } else if (line.includes('=') && !line.startsWith('#')) {
            const varName = line.split('=')[0].trim();
            updateVariableInspector(varName, 'definida');
        }
    });
    
    return output || 'Código ejecutado (sin salida visible)';
}

// Update performance metrics
function updatePerformanceMetrics(code) {
    const lines = code.split('\n').filter(line => line.trim()).length;
    const executionTime = Math.random() * 100 + 50; // Simulate execution time
    const memoryUsage = Math.min(lines * 2, 100); // Simulate memory usage
    
    document.getElementById('linesOfCode').textContent = lines;
    document.getElementById('executionTime').textContent = `${executionTime.toFixed(2)}ms`;
    document.getElementById('memoryUsage').textContent = `${memoryUsage}MB`;
    document.getElementById('memoryBar').style.width = `${memoryUsage}%`;
}

// Update debug panel
function updateDebugPanel(error) {
    const debugPanel = document.getElementById('debugOutput');
    debugPanel.innerHTML = `<span style="color: #ef4444;">Error: ${error}</span>`;
}

// Update variable inspector
function updateVariableInspector(varName, value) {
    const inspector = document.getElementById('variableInspector');
    inspector.innerHTML += `<div>${varName}: ${value}</div>`;
}

// Handle console input
function handleConsoleInput(event) {
    if (event.key === 'Enter') {
        const input = event.target;
        const command = input.value;
        const output = document.getElementById('mainConsoleOutput');
        
        output.innerHTML += `\n>>> ${command}`;
        
        try {
            const result = simulatePythonExecution(command);
            output.innerHTML += `\n${result}`;
        } catch (error) {
            output.innerHTML += `\nError: ${error.message}`;
        }
        
        input.value = '';
        output.scrollTop = output.scrollHeight;
    }
}