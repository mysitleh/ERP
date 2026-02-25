// Main Interactivity
document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Optional: animate only once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-up, .animate-fade').forEach(el => {
        observer.observe(el);
    });

    // 2. Sticky Navbar Effect
    const nav = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('glass-active');
        } else {
            nav.classList.remove('glass-active');
        }
    });

    // 3. Smooth Scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Attendance Logic (Specific to absensi.html)
    const attendanceForm = document.getElementById('attendanceForm');
    if (attendanceForm) {
        initAttendance();
    }
});

/**
 * Attendance Integration with Google Sheets
 * Based on README_AGENT.md and ARSITEKTUR.md
 */
async function initAttendance() {
    const form = document.getElementById('attendanceForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    const statusMsg = document.getElementById('statusMessage');

    // Replace this with your actual Google Apps Script URL when ready
    // For now, it stays as a placeholder or looks for a global config
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwC4Y8KZj_haorAY5Dqw6V2aVS8ewISjPSXQvaOllZMpxRSTx1X1cR_Q5l19NKX8zx7SQ/exec';

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // UI Feedback
        submitBtn.disabled = true;
        submitBtn.innerText = 'Mengirim...';
        statusMsg.innerText = 'Sedang memproses absensi...';
        statusMsg.className = 'status-msg info';

        const formData = new FormData(form);
        const data = new URLSearchParams();

        // Map form fields to Apps Script parameters
        // Nama field di HTML name="" HARUS sama dengan Header di Sheets
        for (const [key, value] of formData.entries()) {
            data.append(key, value);
        }

        try {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // CRITICAL: bypass CORS browser
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: data.toString()
            });

            // If we reach here with no-cors, we assume success
            statusMsg.innerText = '✅ Absensi Berhasil Terkirim!';
            statusMsg.className = 'status-msg success';
            form.reset();
        } catch (error) {
            console.error('Submission error:', error);
            statusMsg.innerText = '❌ Gagal mengirim. Coba lagi nanti.';
            statusMsg.className = 'status-msg error';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Kirim Absensi';
        }
    });
}
