// charts.js - Chart initialization and management (Chart.js setup, progress charts)

// Initialize charts
function initializeCharts() {
    // Progress Chart
    const progressCtx = document.getElementById('progressChart').getContext('2d');
    new Chart(progressCtx, {
        type: 'line',
        data: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'],
            datasets: [{
                label: 'Progreso (%)',
                data: [10, 25, 40, 55, 70, 85],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Progreso de Aprendizaje'
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

    // Skills Chart
    const skillCtx = document.getElementById('skillChart').getContext('2d');
    new Chart(skillCtx, {
        type: 'radar',
        data: {
            labels: ['Variables', 'Funciones', 'Clases', 'Librerías', 'Debugging', 'Proyectos'],
            datasets: [{
                label: 'Nivel Actual',
                data: [80, 60, 40, 70, 50, 30],
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#10b981',
                pointHoverBackgroundColor: '#10b981',
                pointHoverBorderColor: '#10b981'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Habilidades de Python'
                }
            },
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        stepSize: 20
                    }
                }
            }
        }
    });
}