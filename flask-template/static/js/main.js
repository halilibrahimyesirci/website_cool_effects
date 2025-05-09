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
            glitchEffectDescription: "Simulates a digital error, creating distortions in text and images.",
            loadingScreensTitle: "Loading Screen Animations",
            loadingScreensDesc: "Creative animations to keep users engaged during loading times.",
            loadingScreensDescription: "Various animations to indicate loading processes.",
            loadingScreen1Title: "Spinning Circle",
            loadingScreen2Title: "Progress Bar",
            loadingScreen3Title: "Bouncing Dots",
            loadingScreen4Title: "Morphing Shape",
            loadingScreen5Title: "Text-based Loader",
            blurEffectsTitle: "Blur Effects",
            blurEffectsDesc: "Various techniques to create depth and focus using blur.",
            blurEffectsDescription: "Different ways to use blur for visual emphasis or effects.",
            blurEffect1Title: "Background Blur",
            blurEffect2Title: "Image Hover Blur",
            blurEffect3Title: "Spoiler Blur",
            blurEffect4Title: "Glassmorphism",
            blurEffect5Title: "Lazy Load Image Blur",
            
            // Parallax Effect Translations
            parallaxEffectTitle: "Parallax Scrolling Effect",
            parallaxEffectDescription: "Creates a 3D effect as you scroll, with background images moving at a different speed than foreground content.",
            parallaxSection1Title: "Section One",
            parallaxSection1Text: "Scroll down to see the parallax effect in action. The background image will move at a different speed than the foreground content.",
            parallaxSection2Title: "Section Two",
            parallaxSection2Text: "This is another section with a different background. Notice the layered effect as you scroll.",
            parallaxSection3Title: "Content Section",
            parallaxSection3Text: "This section demonstrates how normal content flows between parallax sections. The effect is most noticeable when there's a contrast between scrolling speeds.",
            parallaxSection4Title: "Section Three (Parallax)",
            parallaxSection4Text: "More parallax goodness! The key is to have distinct layers moving at different rates.",
            parallaxExplanation: "The parallax effect is achieved by making background layers move at different speeds relative to the foreground. This page demonstrates two main types: JavaScript-controlled transform on background elements, and CSS 3D perspective. Adjust the `data-js-parallax-factor` (lower means more parallax) or CSS perspective values to see changes.",

            // Cursor Trail/Spotlight Effect Translations
            cursorTrailEffectTitle: "Cursor Trail/Spotlight Effect",
            cursorTrailEffectDescription: "Creates a visual trail or a spotlight that follows the mouse cursor, adding an interactive element to the page.",
            cursorTrailInstructions: "Move your mouse around this area to see the effect. We'll start with a simple dot trail.",
            cursorTrailExplanation: "This effect uses JavaScript to track mouse movements and dynamically create or update elements that follow the cursor, creating a visual trail or a spotlight.",
            spotlightExampleTitle: "Spotlight Content",
            spotlightExampleText: "If this were a spotlight effect, only the area around your cursor would be clearly visible.",

            // Text Animation Effect Translations
            textAnimationEffectTitle: "Text Animation Effects",
            textAnimationEffectDescription: "Engaging animations like typing effects, text reveals, and sliding text to make content more dynamic.",
            textAnimationIntro: "Various animations to bring text to life, such as typing effects, reveals, and more.",
            typingEffectTitle: "Typing Effect",
            revealEffectTitle: "Text Reveal (Fade & Slide In)",
            slideUpEffectTitle: "Text Line Slide Up",
            slideUpLine1: "Each line slides up.",
            slideUpLine2: "Creating a dynamic entrance.",
            slideUpLine3: "Pure CSS and JS!",
            textAnimationExplanation: "These effects use a combination of JavaScript to manipulate text content or classes, and CSS for the actual animation styling (transitions, keyframes).",
            restartAnimation: "Restart",

            // Scroll-triggered Animations Translations
            scrollTriggeredEffectTitle: "Scroll-triggered Animations",
            scrollTriggeredEffectDescription: "Elements animate into view (fade, slide, zoom) as the user scrolls down the page, powered by the Intersection Observer API.",
            scrollTriggeredIntro: "Elements animate into view as you scroll down the page. This uses the Intersection Observer API for efficiency.",
            scrollSection1Title: "Scroll Down to See Magic",
            scrollSection1Text: "Keep scrolling to reveal more content with cool animations.",
            fadeInText: "This element fades in when it enters the viewport.",
            slideInLeftTitle: "Slide In From Left",
            slideInLeftText: "This content block slides in from the left.",
            slideInRightTitle: "Slide In From Right",
            slideInRightText: "And this one slides in from the right, with a slight delay!",
            zoomInText: "This box zooms in!",
            slideUpRevealTitle: "Content Reveals with Slide Up",
            slideUpRevealText1: "Line one appears.",
            slideUpRevealText2: "Then line two.",
            slideUpRevealText3: "And finally, line three.",
            counterUpTitle: "Number Counter",
            scrollEndText: "You've reached the end of the scroll-triggered animations demo!",

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
            glitchEffectDescription: "Dijital bir hata simüle eder, metin ve görüntülerde bozulmalar oluşturur.",
            loadingScreensTitle: "Yükleme Ekranı Animasyonları",
            loadingScreensDesc: "Yükleme süreleri boyunca kullanıcıların ilgisini canlı tutmak için yaratıcı animasyonlar.",
            loadingScreensDescription: "Yükleme işlemlerini göstermek için çeşitli animasyonlar.",
            loadingScreen1Title: "Dönen Çember",
            loadingScreen2Title: "İlerleme Çubuğu",
            loadingScreen3Title: "Zıplayan Noktalar",
            loadingScreen4Title: "Şekil Değiştirme",
            loadingScreen5Title: "Metin Tabanlı Yükleyici",
            blurEffectsTitle: "Bulanıklaştırma Efektleri",
            blurEffectsDesc: "Bulanıklaştırmayı kullanarak derinlik ve odak oluşturmak için çeşitli teknikler.",
            blurEffectsDescription: "Görsel vurgu veya efektler için bulanıklaştırmayı kullanmanın farklı yolları.",
            blurEffect1Title: "Arka Plan Bulanıklaştırma",
            blurEffect2Title: "Resim Üzerine Gelince Bulanıklaştırma",
            blurEffect3Title: "Spoiler Bulanıklaştırma",
            blurEffect4Title: "Cam Morfizmi",
            blurEffect5Title: "Yavaş Yüklenen Resim Bulanıklaştırma",
            
            // Parallax Effect Translations
            parallaxEffectTitle: "Parallax Kaydırma Efekti",
            parallaxEffectDescription: "Kaydırma sırasında 3D bir efekt oluşturur, arka plan görüntüleri ön plan içeriğinden farklı bir hızda hareket eder.",
            parallaxSection1Title: "Birinci Bölüm",
            parallaxSection1Text: "Parallax efektini çalışırken görmek için aşağı kaydırın. Arka plan görüntüsü ön plan içeriğinden farklı bir hızda hareket edecek.",
            parallaxSection2Title: "İkinci Bölüm",
            parallaxSection2Text: "Farklı bir arka plana sahip başka bir bölüm. Kaydırırken katmanlı etkiyi fark edin.",
            parallaxSection3Title: "İçerik Bölümü",
            parallaxSection3Text: "Bu bölüm, parallax bölümleri arasında normal içeriğin nasıl aktığını gösterir. Etki, kaydırma hızları arasında bir kontrast olduğunda en belirgin hale gelir.",
            parallaxSection4Title: "Üçüncü Bölüm (Parallax)",
            parallaxSection4Text: "Daha fazla parallax güzelliği! Anahtar, farklı hızlarda hareket eden belirgin katmanlara sahip olmaktır.",
            parallaxExplanation: "Parallax efekti, arka plan ve ön plan katmanları için farklı kaydırma hızları ayarlanarak elde edilir. Bu, CSS (perspektif ve dönüştürme özellikleri) kullanılarak veya kaydırma olayları üzerinde daha karmaşık kontrol için JavaScript ile yapılabilir. Bu örnekte, temel parallax için öncelikle CSS kullanacağız ve daha fazla katman veya daha düzgün efektler için JS ile geliştirebiliriz.",

            // Cursor Trail/Spotlight Effect Translations
            cursorTrailEffectTitle: "İmleç İz/Spotlight Efekti",
            cursorTrailEffectDescription: "Fare imlecini takip eden görsel bir iz veya bir spot ışığı oluşturur, sayfaya etkileşimli bir öğe ekler.",
            cursorTrailInstructions: "Efekti görmek için bu alanın etrafında farenizi hareket ettirin. Basit bir nokta izi ile başlayacağız.",
            cursorTrailExplanation: "Bu efekt, fare hareketlerini izlemek ve imleci takip eden görsel bir iz veya bir spot ışığı oluşturmak için dinamik olarak öğeler oluşturmak veya güncellemek için JavaScript kullanır.",
            spotlightExampleTitle: "Spotlight İçerik",
            spotlightExampleText: "Bu bir spotlight efekti olsaydı, yalnızca imlecinizin etrafındaki alan net bir şekilde görünür olurdu.",

            // Text Animation Effect Translations
            textAnimationEffectTitle: "Metin Animasyon Efektleri",
            textAnimationEffectDescription: "İçeriği daha dinamik hale getirmek için yazma efektleri, metin açıklamaları ve kayan metin gibi etkileyici animasyonlar.",
            textAnimationIntro: "Metni canlandırmak için çeşitli animasyonlar, yazma efektleri, açıklamalar ve daha fazlası.",
            typingEffectTitle: "Yazma Efekti",
            revealEffectTitle: "Metin Açıklama (Solma ve Kayarak İçeri Girme)",
            slideUpEffectTitle: "Metin Satırı Yukarı Kaydırma",
            slideUpLine1: "Her satır yukarı kayar.",
            slideUpLine2: "Dinamik bir giriş oluşturur.",
            slideUpLine3: "Saf CSS ve JS!",
            textAnimationExplanation: "Bu efektler, metin içeriğini veya sınıfları manipüle etmek için JavaScript ve gerçek animasyon stilleri (geçişler, anahtar kareler) için CSS kombinasyonunu kullanır.",
            restartAnimation: "Yeniden Başlat",

            // Scroll-triggered Animations Translations
            scrollTriggeredEffectTitle: "Kaydırma Tetiklemeli Animasyonlar",
            scrollTriggeredEffectDescription: "Kullanıcı sayfayı aşağı kaydırdıkça öğeler görünür hale gelir (solma, kayma, yakınlaştırma), Intersection Observer API tarafından desteklenir.",
            scrollTriggeredIntro: "Sayfayı aşağı kaydırdıkça öğeler görünür hale gelir. Bu, verimlilik için Intersection Observer API kullanır.",
            scrollSection1Title: "Sihri Görmek İçin Aşağı Kaydırın",
            scrollSection1Text: "Daha fazla içeriği harika animasyonlarla ortaya çıkarmak için kaydırmaya devam edin.",
            fadeInText: "Bu öğe, görünüm alanına girdiğinde solmaya başlar.",
            slideInLeftTitle: "Soldan Kayarak İçeri Gir",
            slideInLeftText: "Bu içerik bloğu soldan kayarak içeri girer.",
            slideInRightTitle: "Sağdan Kayarak İçeri Gir",
            slideInRightText: "Ve bu, biraz gecikmeyle sağdan kayarak içeri girer!",
            zoomInText: "Bu kutu yakınlaştırılır!",
            slideUpRevealTitle: "Yukarı Kaydırma ile İçerik Açıklamaları",
            slideUpRevealText1: "Birinci satır görünür.",
            slideUpRevealText2: "Sonra ikinci satır.",
            slideUpRevealText3: "Ve sonunda üçüncü satır.",
            counterUpTitle: "Sayı Sayacı",
            scrollEndText: "Kaydırma tetiklemeli animasyonlar demosunun sonuna ulaştınız!",

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