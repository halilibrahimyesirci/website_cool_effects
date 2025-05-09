document.addEventListener('DOMContentLoaded', () => {
    // Theme Switcher
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeToggleBtn.textContent = 'Light Mode'; // Or an icon
    } else {
        themeToggleBtn.textContent = 'Dark Mode'; // Or an icon
    }

    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'light') {
            theme = 'dark';
            themeToggleBtn.textContent = 'Light Mode';
        } else {
            theme = 'light';
            themeToggleBtn.textContent = 'Dark Mode';
        }
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // Language Switcher
    const langButtons = document.querySelectorAll('.language-switcher button');
    const storedLang = localStorage.getItem('language') || 'en';

    const translations = {
        en: {
            home: "Home",
            about: "About",
            toggleTheme: "Toggle Theme",
            footerText: "&copy; 2024 Halil İbrahim Yesirci. All rights reserved.",
            // Index page specific
            welcomeTitle: "Welcome to Cool Effects Showcase!",
            welcomeSubtitle: "Explore a variety of stunning visual effects created with HTML, CSS, and JavaScript.",
            liquidChromeTitle: "Liquid Chrome Effect",
            liquidChromeDesc: "A mesmerizing gooey and metallic effect, often used for text or abstract visuals.",
            glitchTitle: "Glitch Effect",
            glitchDesc: "Simulates digital errors and distortions for a edgy, futuristic look.",
            loadingScreensTitle: "Loading Screen Animations",
            loadingScreensDesc: "Creative animations to keep users engaged during loading times.",
            blurEffectsTitle: "Blur Effects",
            blurEffectsDesc: "Various techniques to create depth and focus using blur.",
            viewEffect: "View Effect",
            // About page specific
            aboutTitle: "About This Project",
            aboutText: "This project is a showcase of various website visual effects, created by Halil İbrahim Yesirci. It's built using Flask for the backend and pure HTML, CSS, and JavaScript for the frontend effects. The goal is to demonstrate creative possibilities and provide inspiration for web designers and developers.",
            techUsed: "Technologies Used:",
            backToHome: "Back to Home"
        },
        tr: {
            home: "Ana Sayfa",
            about: "Hakkında",
            toggleTheme: "Temayı Değiştir",
            footerText: "&copy; 2024 Halil İbrahim Yesirci. Tüm hakları saklıdır.",
            // Index page specific
            welcomeTitle: "Harika Efektler Galerisine Hoş Geldiniz!",
            welcomeSubtitle: "HTML, CSS ve JavaScript ile oluşturulmuş çeşitli çarpıcı görsel efektleri keşfedin.",
            liquidChromeTitle: "Sıvı Krom Efekti",
            liquidChromeDesc: "Genellikle metin veya soyut görseller için kullanılan büyüleyici, yapışkan ve metalik bir efekt.",
            glitchTitle: "Glitch (Bozulma) Efekti",
            glitchDesc: "Keskin ve fütüristik bir görünüm için dijital hataları ve bozulmaları simüle eder.",
            loadingScreensTitle: "Yükleme Ekranı Animasyonları",
            loadingScreensDesc: "Yükleme süreleri boyunca kullanıcıların ilgisini canlı tutmak için yaratıcı animasyonlar.",
            blurEffectsTitle: "Bulanıklaştırma Efektleri",
            blurEffectsDesc: "Bulanıklaştırmayı kullanarak derinlik ve odak oluşturmak için çeşitli teknikler.",
            viewEffect: "Efekti Gör",
            // About page specific
            aboutTitle: "Proje Hakkında",
            aboutText: "Bu proje, Halil İbrahim Yesirci tarafından oluşturulan çeşitli web sitesi görsel efektlerinin bir sergisidir. Arka uç için Flask, ön uç efektleri için ise saf HTML, CSS ve JavaScript kullanılarak oluşturulmuştur. Amaç, yaratıcı olasılıkları göstermek ve web tasarımcıları ile geliştiricilere ilham vermektir.",
            techUsed: "Kullanılan Teknolojiler:",
            backToHome: "Ana Sayfaya Dön"
        }
    };

    function updateTexts(lang) {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang] && translations[lang][key]) {
                element.innerHTML = translations[lang][key]; // Use innerHTML to allow for &copy; etc.
            }
        });
        // Update button text for theme toggle based on current theme and new language
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const themeToggleBtn = document.getElementById('theme-toggle-btn');
        if (lang === 'tr') {
            themeToggleBtn.textContent = currentTheme === 'dark' ? 'Açık Mod' : 'Koyu Mod';
        } else {
            themeToggleBtn.textContent = currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
        document.documentElement.lang = lang; // Update the lang attribute of the html tag
    }
    
    function setActiveLangButton(lang) {
        langButtons.forEach(button => {
            if (button.getAttribute('data-lang') === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    updateTexts(storedLang);
    setActiveLangButton(storedLang);

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            localStorage.setItem('language', lang);
            updateTexts(lang);
            setActiveLangButton(lang);
        });
    });

    // Active Nav Link
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

});