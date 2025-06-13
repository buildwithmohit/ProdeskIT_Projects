// Simple theme toggle for demo (not persistent)
const toggle = document.getElementById('toggle-theme');
const mainBg = document.querySelector('.main-bg');
toggle.addEventListener('change', function () {
    if (toggle.checked) {
        mainBg.style.background = '#f4f7fa';
        document.querySelector('.quiz-container').style.background = '#fff';
        document.querySelectorAll('.category').forEach(btn => {
            btn.style.background = '#f6f7fa';
            btn.style.color = '#283046';
        });
        document.querySelector('.quiz-header h1').style.color = '#1e2738';
        document.querySelector('.quiz-header .subtitle').style.color = '#5f6c7b';
    } else {
        mainBg.style.background = '#273245';
        document.querySelector('.quiz-container').style.background = 'rgba(33, 42, 59, 0.98)';
        document.querySelectorAll('.category').forEach(btn => {
            btn.style.background = '#364156';
            btn.style.color = '#eaf0fa';
        });
        document.querySelector('.quiz-header h1').style.color = '#fff';
        document.querySelector('.quiz-header .subtitle').style.color = '#ccd6f6';
    }
});
