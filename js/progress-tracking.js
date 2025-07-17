// progress-tracking.js - Progress and statistics (progress calculation, stats management)

// Update progress display
function updateProgressDisplay() {
    const overallProgress = moduleProgress.reduce((a, b) => a + b, 0) / moduleProgress.length;
    document.getElementById('overallProgress').style.width = `${overallProgress}%`;
    document.getElementById('progressText').textContent = `${Math.round(overallProgress)}% completado`;
    
    // Update stats
    document.getElementById('completedModules').textContent = moduleProgress.filter(p => p >= 100).length;
    document.getElementById('totalExercises').textContent = userStats.totalExercises;
    document.getElementById('studyTime').textContent = `${userStats.studyTime}h`;
    document.getElementById('skillLevel').textContent = userStats.skillLevel;
}

// Export progress
function exportProgress() {
    const progress = {
        moduleProgress: moduleProgress,
        userStats: userStats,
        currentModule: currentModule,
        timestamp: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(progress, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', 'python_masterclass_progress.json');
    linkElement.click();
}