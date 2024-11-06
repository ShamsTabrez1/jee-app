// Features data
const features = [
    {
        icon: 'book-open',
        title: 'Customized Tests',
        description: 'Create personalized tests from previous years\' JEE Mains papers'
    },
    {
        icon: 'clock',
        title: 'Real Exam Environment',
        description: 'Practice with our exam simulator that mimics the actual JEE Mains interface'
    },
    {
        icon: 'pie-chart',
        title: 'Detailed Analytics',
        description: 'Get comprehensive performance reports and track your progress'
    },
    {
        icon: 'trophy',
        title: 'Success Guaranteed',
        description: 'Join thousands of successful JEE aspirants who prepared with us'
    }
];

// Populate features grid
document.addEventListener('DOMContentLoaded', () => {
    const featuresGrid = document.querySelector('.features-grid');
    if (featuresGrid) {
        features.forEach(feature => {
            const featureElement = document.createElement('div');
            featureElement.className = 'bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow';
            featureElement.innerHTML = `
                <div class="mb-4">
                    <i data-feather="${feature.icon}" class="h-8 w-8 text-indigo-600"></i>
                </div>
                <h3 class="text-xl font-semibold mb-2">${feature.title}</h3>
                <p class="text-gray-600">${feature.description}</p>
            `;
            featuresGrid.appendChild(featureElement);
        });
    }
});

// Exam timer functionality
function startExamTimer(duration, displayElement) {
    let timer = duration;
    const interval = setInterval(() => {
        const hours = Math.floor(timer / 3600);
        const minutes = Math.floor((timer % 3600) / 60);
        const seconds = timer % 60;

        displayElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (--timer < 0) {
            clearInterval(interval);
            document.getElementById('exam-form').submit();
        }
    }, 1000);
}

// Initialize exam timer if on exam page
const timerDisplay = document.getElementById('exam-timer');
if (timerDisplay) {
    const duration = parseInt(timerDisplay.dataset.duration, 10);
    startExamTimer(duration, timerDisplay);
}