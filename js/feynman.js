// feynman.js - Feynman methodology functionality (step progression, learning tracking)

// Reset Feynman methodology steps
function resetFeynmanSteps() {
    currentStep = 1;
    document.querySelectorAll('.step-dot').forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index === 0) dot.classList.add('active');
    });
    document.querySelectorAll('.step-line').forEach(line => {
        line.classList.remove('completed');
    });
}

// Progress to next Feynman step
function nextFeynmanStep() {
    if (currentStep < 4) {
        // Mark current step as completed
        document.getElementById(`step${currentStep}`).classList.remove('active');
        document.getElementById(`step${currentStep}`).classList.add('completed');
        document.getElementById(`line${currentStep}`).classList.add('completed');
        
        currentStep++;
        
        // Activate next step
        document.getElementById(`step${currentStep}`).classList.add('active');
        
        // Update module progress
        moduleProgress[currentModule] = (currentStep - 1) * 25;
        updateProgressDisplay();
    }
}

// Check explanation
function checkExplanation(textareaId) {
    const textarea = document.getElementById(textareaId);
    const feedback = document.getElementById(textareaId.replace('explanation', 'explanationFeedback'));
    
    if (textarea.value.length > 50) {
        feedback.classList.remove('hidden');
        userStats.totalExercises++;
        updateProgressDisplay();
    }
}