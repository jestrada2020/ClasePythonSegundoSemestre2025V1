// interactive.js - Interactive features (quiz functionality, search, filtering, debug panels)

// Quiz functionality
function selectQuizOption(option, isCorrect) {
    // Remove previous selections
    option.parentElement.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('correct', 'incorrect');
    });
    
    // Add appropriate class
    if (isCorrect) {
        option.classList.add('correct');
        userStats.totalExercises++;
        updateProgressDisplay();
    } else {
        option.classList.add('incorrect');
    }
}

// Filter modules
function filterModules(filter) {
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    document.querySelectorAll('.module-item').forEach(item => {
        if (filter === 'all' || item.dataset.level === filter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Search modules
function searchModules(query) {
    document.querySelectorAll('.module-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}