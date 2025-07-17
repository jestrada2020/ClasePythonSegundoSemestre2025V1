// app.js - Core application logic (initialization, module loading, navigation, global state)

// Global variables
let currentModule = 0;
let currentStep = 1;
let moduleProgress = Array(17).fill(0);
let userStats = {
    completedModules: 0,
    totalExercises: 0,
    studyTime: 0,
    skillLevel: 'Principiante'
};

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadModule(0);
    if (typeof initializeCharts === 'function') {
        initializeCharts();
    }
    if (typeof updateProgressDisplay === 'function') {
        updateProgressDisplay();
    }
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Module navigation
    const moduleItems = document.querySelectorAll('.module-item');
    
    moduleItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const moduleId = parseInt(this.dataset.module);
            loadModule(moduleId);
        });
    });

    // Filter functionality
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const filter = this.dataset.filter;
            filterModules(filter);
        });
    });

    // Search functionality
    document.getElementById('moduleSearch').addEventListener('input', function() {
        searchModules(this.value);
    });

    // Console input
    document.getElementById('consoleInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleConsoleInput(e);
        }
    });
}

// Load module content
function loadModule(moduleId) {
    currentModule = moduleId;
    
    // Hide all modules
    document.querySelectorAll('.module-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Show selected module
    const targetModule = document.getElementById(`module-${moduleId}`);
    if (targetModule) {
        targetModule.classList.add('active');
    }
    
    // Update navigation
    document.querySelectorAll('.module-item').forEach(item => {
        item.classList.remove('active');
    });
    const navItem = document.querySelector(`[data-module="${moduleId}"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
    
    // Reset Feynman steps
    if (typeof resetFeynmanSteps === 'function') {
        resetFeynmanSteps();
    }
    
    // Update progress
    updateModuleProgress(moduleId);
}

// Update module progress
function updateModuleProgress(moduleId) {
    const progressElement = document.getElementById(`module${moduleId}Progress`);
    if (progressElement) {
        progressElement.style.width = `${moduleProgress[moduleId]}%`;
    }
}

// Simulate study time tracking
setInterval(() => {
    userStats.studyTime += 0.1;
    updateProgressDisplay();
}, 60000); // Update every minute