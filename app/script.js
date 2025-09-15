// JavaScript simplificado para página plana
// Funcionalidades: scroll suave, navegación activa y traducciones simples

// Traducciones
const TRANSLATIONS = {
    'es': {
        // Navegación
        'nav_about': 'Sobre Mí',
        'nav_experience': 'Experiencia',
        'nav_education': 'Educación',
        'nav_skills': 'Habilidades',
        'nav_contact': 'Contacto',
        
        // Header
        'header_title': 'Cristhian Fernández Álvarez',
        'header_subtitle': 'Especialista en Inteligencia Artificial | Científico de Datos | Visión Artificial | AWS Cloud',
        'header_location': 'Cali, Colombia',
        'btn_cv': 'CV',
        
        // Sobre Mí
        'about_title': 'Sobre Mí',
        'about_text_1': 'Ingeniero electrónico con maestría en automatización y más de 10 años de experiencia profesional, combinando 5 años en ciencia de datos y machine learning con 5 años como desarrollador full-stack. Poseo una sólida capacidad para integrar conocimientos técnicos, visión analítica y experiencia práctica en el diseño, implementación y optimización de soluciones de inteligencia artificial.',
        'about_text_2': 'A lo largo de mi trayectoria, he participado en todas las etapas del ciclo de vida de proyectos de IA: análisis exploratorio y preparación de datos, desarrollo y validación de modelos, así como su despliegue en entornos productivos. He trabajado con técnicas de machine learning y deep learning aplicadas a predicción, clasificación, procesamiento de lenguaje natural y visión artificial.',
        'about_text_3': 'Apasionado por la investigación y la innovación, me mantengo actualizado en los avances más recientes en inteligencia artificial y automatización, buscando siempre aportar soluciones de alto impacto y valor agregado.',
        
        // Experiencia
        'exp_title': 'Experiencia Profesional',
        '1_exp_title': 'Especialista en Inteligencia Artificial',
        '1_exp_period': 'Enero 2022 - Presente',
        '1_exp_location': 'Remoto (Bogotá, Colombia)',
        '1_exp_desc_1': '• Desarrollo y despliegue de modelos de inteligencia artificial aplicados al sector de seguros de automóviles.',
        '1_exp_desc_2': '• Mejora y mantenimiento de servicios y modelos de AI existentes.',
        '1_exp_desc_3': '• Implementación de servicios web, manejo de bases de datos (SQL y NoSQL).',
        '1_exp_desc_4': '• Análisis estadístico, visualización de datos y desarrollo de ETLs.',
        '1_exp_desc_5': '• Investigación y desarrollo de modelos de IA.',
        '1_exp_desc_6': '• Manejo de servicios en AWS y plataformas para MLOps.',
        '2_exp_title': 'Ingeniero de Desarrollo Senior',
        '2_exp_period': 'Mayo 2016 - Febrero 2022',
        '2_exp_location': 'Cali, Colombia',
        '2_exp_desc_1': '• Diseño e implementación de aplicaciones web (responsive) con integraciones y servicios de terceros.',
        '2_exp_desc_2': '• Visualización de datos y desarrollo de soluciones RETAIL.',
        '2_exp_desc_3': '• Implementación de servicios web y gestión de servidores.',
        '2_exp_desc_4': '• Investigación en inteligencia artificial utilizando redes convolucionales para la detección de objetos en imágenes.',
        '2_exp_desc_5': '• Implementación de algoritmos en visión artificial.',
        '2_exp_desc_6': '• Manejo de bases de datos (SQL y NoSQL).',
        '2_exp_desc_7': '• Manejo de servicios en AWS.',
        '3_exp_title': 'Monitor Asistente de Investigación',
        '3_exp_period': 'Febrero 2016 - Marzo 2017',
        '3_exp_location': 'Cali, Colombia',
        '3_exp_desc_1': '• Implementación de algoritmos de visión artificial.',
        '3_exp_desc_2': '• Desarrollo de rutinas para los movimientos del robot móvil humanoide NAO, utilizando Python.',
        '3_exp_desc_3': '• Trabajo con cámaras stereo para imitación de movimientos humanos.',
        '3_exp_desc_4': '• Colaboración en proyectos de investigación en robótica y visión artificial.',
        
        // Educación
        'edu_title': 'Formación Académica',
        '1_edu_degree': 'Magister en Ingeniería con énfasis en Automática',
        '1_edu_period': '2018 - 2020',
        '1_edu_desc_1': '• Promedio de calificaciones: 4.6/5.',
        '1_edu_desc_2': '• Trabajo de investigación: "Pronóstico del índice estandarizado de precipitación (SPI) en la región de Nariño utilizando técnicas de inteligencia artificial".',
        '1_edu_desc_3': '• Temas abordados: Optimización de sistemas dinámicos, optimización de sistemas lineales, control inteligente, visión artificial, técnicas modernas para reconocimiento de patrones, técnicas de pronóstico de series de tiempo.',
        '2_edu_degree': 'Ingeniero Electrónico',
        '2_edu_period': '2012 - 2017',
        '2_edu_desc_1': '• Promedio de calificaciones: 4.19/5.',
        '2_edu_desc_2': '• Proyecto de grado: "Desarrollo e implementación de una herramienta para terapias físicas en pacientes con movilidad restringida en miembros superiores".',
        '2_edu_desc_3': '• Temas abordados: Robótica móvil, integración de sistemas para automatización, Controladores Lógicos Programables (PLC), interfaces de usuario, reconocimiento de patrones.',
        'certifications': 'Certificaciones',
        '1_cert_title': 'AWS Certified Cloud Practitioner',
        '1_cert_provider': 'Amazon Web Services',
        'courses': 'Cursos',
        '1_course_title': 'Machine Learning con Python',
        '1_course_provider': 'Coursera - Stanford University',
        
        // Habilidades
        'skills_title': 'Competencias Técnicas',
        
        // Contacto
        'contact_title': '¡Trabajemos Juntos!',
        'contact_text': '¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad. No dudes en contactarme.',
        'contact_info_title': 'Información de Contacto',
        'btn_send_message': 'Enviar Mensaje',
        'btn_download_cv': 'Descargar CV',
        
        // Selector de idioma
        'language_selector': 'Idioma',
        'language_es': 'Español',
        'language_en': 'English'
    },
    
    'en': {
        // Navigation
        'nav_about': 'About Me',
        'nav_experience': 'Experience',
        'nav_education': 'Education',
        'nav_skills': 'Skills',
        'nav_contact': 'Contact',
        
        // Header
        'header_title': 'Cristhian Fernández Álvarez',
        'header_subtitle': 'Artificial Intelligence Specialist | Data Scientist | Computer Vision | AWS Cloud',
        'header_location': 'Cali, Colombia',
        'btn_cv': 'Resume',
        
        // About Me
        'about_title': 'About Me',
        'about_text_1': 'Electronic engineer with a master\'s degree in automation and over 10 years of professional experience, combining 5 years in data science and machine learning with 5 years as a full-stack developer. I possess a solid ability to integrate technical knowledge, analytical vision and practical experience in designing, implementing and optimizing artificial intelligence solutions.',
        'about_text_2': 'Throughout my career, I have participated in all stages of the AI project lifecycle: exploratory analysis and data preparation, model development and validation, as well as their deployment in production environments. I have worked with machine learning and deep learning techniques applied to prediction, classification, natural language processing and computer vision.',
        'about_text_3': 'Passionate about research and innovation, I stay updated on the most recent advances in artificial intelligence and automation, always seeking to provide high-impact solutions with added value.',
        
        // Experience
        'exp_title': 'Professional Experience',
        '1_exp_title': 'Artificial Intelligence Specialist',
        '1_exp_period': 'January 2022 - Present',
        '1_exp_location': 'Remote (Bogotá, Colombia)',
        '1_exp_desc_1': '• Development and deployment of artificial intelligence models applied to the automotive insurance sector.',
        '1_exp_desc_2': '• Improvement and maintenance of existing AI services and models.',
        '1_exp_desc_3': '• Implementation of web services, database management (SQL and NoSQL).',
        '1_exp_desc_4': '• Statistical analysis, data visualization and ETL development.',
        '1_exp_desc_5': '• Research and development of AI models.',
        '1_exp_desc_6': '• AWS services management and MLOps platforms.',
        '2_exp_title': 'Senior Development Engineer',
        '2_exp_period': 'May 2016 - February 2022',
        '2_exp_location': 'Cali, Colombia',
        '2_exp_desc_1': '• Design and implementation of responsive web applications with integrations and third-party services.',
        '2_exp_desc_2': '• Data visualization and RETAIL solutions development.',
        '2_exp_desc_3': '• Web services implementation and server management.',
        '2_exp_desc_4': '• Research in artificial intelligence using convolutional networks for object detection in images.',
        '2_exp_desc_5': '• Implementation of computer vision algorithms.',
        '2_exp_desc_6': '• Database management (SQL and NoSQL).',
        '2_exp_desc_7': '• AWS services management.',
        '3_exp_title': 'Research Assistant Monitor',
        '3_exp_period': 'February 2016 - March 2017',
        '3_exp_location': 'Cali, Colombia',
        '3_exp_desc_1': '• Implementation of computer vision algorithms.',
        '3_exp_desc_2': '• Development of routines for NAO humanoid mobile robot movements using Python.',
        '3_exp_desc_3': '• Work with stereo cameras for human movement imitation.',
        '3_exp_desc_4': '• Collaboration in robotics and computer vision research projects.',
        
        // Education
        'edu_title': 'Education',
        '1_edu_degree': 'Master\'s in Engineering with emphasis in Automation',
        '1_edu_period': '2018 - 2020',
        '1_edu_desc_1': '• Grade point average: 4.6/5',
        '1_edu_desc_2': '• Research project: "Forecast of the Standardized Precipitation Index (SPI) in the Nariño region using artificial intelligence techniques"',
        '1_edu_desc_3': '• Topics covered: Dynamic systems optimization, linear systems optimization, intelligent control, computer vision, modern techniques for pattern recognition, time series forecasting techniques',
        '2_edu_degree': 'Electronic Engineer',
        '2_edu_period': '2012 - 2017',
        '2_edu_desc_1': '• Grade point average: 4.19/5',
        '2_edu_desc_2': '• Final project: "Development and implementation of a tool for physical therapies in patients with restricted upper limb mobility"',
        '2_edu_desc_3': '• Topics covered: Mobile robotics, integration of systems for automation, Programmable Logic Controllers (PLC), user interfaces, pattern recognition',
        'certifications': 'Certifications',
        '1_cert_title': 'AWS Certified Cloud Practitioner',
        '1_cert_provider': 'Amazon Web Services',
        'courses': 'Courses',
        '1_course_title': 'Machine Learning with Python',
        '1_course_provider': 'Coursera - Stanford University',
        
        // Skills
        'skills_title': 'Technical Skills',
        
        // Contact
        'contact_title': "Let's Work Together!",
        'contact_text': 'Do you have a project in mind? I would love to learn more about your idea and how I can help you make it a reality. Feel free to contact me.',
        'contact_info_title': 'Contact Information',
        'btn_send_message': 'Send Message',
        'btn_download_cv': 'Download CV',
        
        // Language selector
        'language_selector': 'Language',
        'language_es': 'Español',
        'language_en': 'English'
    }
};

// Estado de la aplicación
let currentLanguage = 'es';

// Función para obtener traducción
function getTranslation(key, language = currentLanguage) {
    return TRANSLATIONS[language]?.[key] || key;
}

// Función para actualizar todas las traducciones
function updateTranslations(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key, language);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.textContent = translation;
        }
    });
}

// Función para cambiar idioma
function changeLanguage(language) {
    currentLanguage = language;
    updateTranslations(language);
    localStorage.setItem('portfolio-language', language);
    
    // Cambiar el CV según el idioma
    const cvLink = document.querySelector('a[href*="CV"]');
    if (cvLink) {
        const cvUrls = {
            'es': 'pdf/CV - cfernandez ESP 2025.pdf',
            'en': 'pdf/CV - cfernandez ENG 2025.pdf'
        };
        cvLink.href = cvUrls[language] || cvUrls['es'];
    }
}

// Función para detectar si se está accediendo desde Instagram
function isInstagramBrowser() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes('instagram') || 
           userAgent.includes('fbav') || 
           userAgent.includes('fban') ||
           window.location.href.includes('l.instagram.com') ||
           window.location.href.includes('instagram.com');
}

// Función para redirigir a la versión optimizada para Instagram
function redirectToInstagramVersion() {
    if (isInstagramBrowser()) {
        const currentUrl = window.location.href;
        const baseUrl = currentUrl.split('?')[0].replace(/\/$/, '');
        const instagramUrl = baseUrl + '/instagram.html';
        
        // Agregar parámetros de la URL original si existen
        const urlParams = window.location.search;
        if (urlParams) {
            window.location.href = instagramUrl + urlParams;
        } else {
            window.location.href = instagramUrl;
        }
        return true;
    }
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    // Verificar si es Instagram y redirigir
    if (redirectToInstagramVersion()) {
        return;
    }
    
    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage && TRANSLATIONS[savedLanguage]) {
        currentLanguage = savedLanguage;
        const languageSelector = document.getElementById('language-selector');
        if (languageSelector) {
            languageSelector.value = savedLanguage;
        }
    }
    
    // Actualizar traducciones
    updateTranslations(currentLanguage);
    
    // Configurar selector de idioma
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }

    // Smooth scrolling para enlaces de navegación
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Resaltar enlace de navegación activo basado en scroll
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + 100; // Offset para activar antes
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // Actualizar enlaces de navegación
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Ejecutar al cargar y al hacer scroll
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Ejecutar al cargar la página
});
