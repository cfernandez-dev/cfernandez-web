// Sistema de traducciones y funcionalidades del portfolio
// Migrado desde el proyecto Dash original

// Función para cargar secciones dinámicamente
async function loadSection(sectionName, containerId) {
    try {
        const response = await fetch(`sections/${sectionName}.html`);
        if (!response.ok) {
            throw new Error(`Error loading ${sectionName}: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading section ${sectionName}:`, error);
        document.getElementById(containerId).innerHTML = `<p>Error cargando la sección ${sectionName}</p>`;
    }
}

// Función para cargar todas las secciones
async function loadAllSections() {
    const sections = [
        { name: 'header', container: 'header-container' },
        { name: 'navigation', container: 'navigation-container' },
        { name: 'about', container: 'about-container' },
        { name: 'experience', container: 'experience-container' },
        { name: 'education', container: 'education-container' },
        { name: 'skills', container: 'skills-container' },
        { name: 'contact', container: 'contact-container' }
    ];

    // Cargar todas las secciones en paralelo
    await Promise.all(sections.map(section => 
        loadSection(section.name, section.container)
    ));
}

// Traducciones completas
const TRANSLATIONS = {
    'es': {
        // Navegación
        'nav_about': 'Sobre Mí',
        'nav_experience': 'Experiencia',
        'nav_education': 'Formación',
        'nav_skills': 'Habilidades',
        'nav_contact': 'Contacto',
        
        // Header
        'header_title': 'Cristhian Fernández Álvarez',
        'header_subtitle': 'Especialista en Inteligencia Artificial | Científico de Datos | Visión Artificial | AWS Cloud',
        'header_location': 'Cali, Colombia',
        'header_email': 'cefernal.dev@gmail.com',
        'header_phone': '(+57) 312 238 2462',
        'btn_cv': 'CV',
        
        // Sobre Mí
        'about_title': 'Sobre Mí',
        'about_text_1': 'Ingeniero electrónico con maestría en automatización y más de 10 años de experiencia profesional, combinando 5 años en ciencia de datos y machine learning con 5 años como desarrollador full-stack. Poseo una sólida capacidad para integrar conocimientos técnicos, visión analítica y experiencia práctica en el diseño, implementación y optimización de soluciones de inteligencia artificial.',
        'about_text_2': 'A lo largo de mi trayectoria, he participado en todas las etapas del ciclo de vida de proyectos de IA: análisis exploratorio y preparación de datos, desarrollo y validación de modelos, así como su despliegue en entornos productivos. He trabajado con técnicas de machine learning y deep learning aplicadas a predicción, clasificación, procesamiento de lenguaje natural y visión artificial.',
        'about_text_3': 'Apasionado por la investigación y la innovación, me mantengo actualizado en los avances más recientes en inteligencia artificial y automatización, buscando siempre aportar soluciones de alto impacto y valor agregado.',
        
        // Experiencia
        'exp_title': 'Experiencia Profesional',
        '1_exp_location': 'Remoto (Bogotá, Colombia)',
        '1_exp_title': 'Especialista en Inteligencia Artificial',
        '1_exp_company': 'Subocol S.A.',
        '1_exp_period': 'Enero 2022 - Presente',
        '1_exp_desc_1': '• Desarrollo y despliegue de modelos de inteligencia artificial aplicados al sector de seguros de automóviles.',
        '1_exp_desc_2': '• Mejora y mantenimiento de servicios y modelos de AI existentes.',
        '1_exp_desc_3': '• Implementación de servicios web, manejo de bases de datos (SQL y NoSQL).',
        '1_exp_desc_4': '• Análisis estadístico, visualización de datos y desarrollo de ETLs.',
        '1_exp_desc_5': '• Investigación y desarrollo de modelos de IA.',
        '1_exp_desc_6': '• Manejo de servicios en AWS y plataformas para MLOps.',
        '2_exp_location': 'Cali, Colombia',
        '2_exp_title': 'Ingeniero de Desarrollo Senior',
        '2_exp_company': 'Ipinnovatech Ltda.',
        '2_exp_period': 'Mayo 2016 - Febrero 2022',
        '2_exp_desc_1': '• Diseño e implementación de aplicaciones web (responsive) con integraciones y servicios de terceros.',
        '2_exp_desc_2': '• Visualización de datos y desarrollo de soluciones RETAIL.',
        '2_exp_desc_3': '• Implementación de servicios web y gestión de servidores.',
        '2_exp_desc_4': '• Investigación en inteligencia artificial utilizando redes convolucionales para la detección de objetos en imágenes.',
        '2_exp_desc_5': '• Implementación de algoritmos en visión artificial.',
        '2_exp_desc_6': '• Manejo de bases de datos (SQL y NoSQL).',
        '2_exp_desc_7': '• Manejo de servicios en AWS.',
        '3_exp_location': 'Cali, Colombia',
        '3_exp_title': 'Monitor Asistente de Investigación',
        '3_exp_company': 'Universidad del Valle',
        '3_exp_period': 'Febrero 2016 - Marzo 2017',
        '3_exp_desc_1': '• Implementación de algoritmos de visión artificial.',
        '3_exp_desc_2': '• Desarrollo de rutinas para los movimientos del robot móvil humanoide NAO, utilizando Python.',
        '3_exp_desc_3': '• Trabajo con cámaras stereo para imitación de movimientos humanos.',
        '3_exp_desc_4': '• Colaboración en proyectos de investigación en robótica y visión artificial.',
        
        // Formación
        'edu_title': 'Formación Académica',
        '1_edu_degree': 'Magister en Ingeniería con énfasis en Automática',
        '1_edu_university': 'Universidad del Valle',
        '1_edu_period': '2018 - 2020',
        '1_edu_desc_1': '• Promedio de calificaciones: 4.6/5.',
        '1_edu_desc_2': '• Trabajo de investigación: "Pronóstico del índice estandarizado de precipitación (SPI) en la región de Nariño utilizando técnicas de inteligencia artificial".',
        '1_edu_desc_3': '• Temas abordados: Optimización de sistemas dinámicos, optimización de sistemas lineales, control inteligente, visión artificial, técnicas modernas para reconocimiento de patrones, técnicas de pronóstico de series de tiempo.',
        '2_edu_degree': 'Ingeniero Electrónico',
        '2_edu_university': 'Universidad del Valle',
        '2_edu_period': '2012 - 2017',
        '2_edu_desc_1': '• Promedio de calificaciones: 4.19/5.',
        '2_edu_desc_2': '• Proyecto de grado: "Desarrollo e implementación de una herramienta para terapias físicas en pacientes con movilidad restringida en miembros superiores".',
        '2_edu_desc_3': '• Temas abordados: Robótica móvil, integración de sistemas para automatización, Controladores Lógicos Programables (PLC), interfaces de usuario, reconocimiento de patrones.',
        
        // Certificaciones
        'certifications': 'Certificaciones',
        '1_cert_title': 'AWS Certified Cloud Practitioner',
        '1_cert_provider': 'Amazon Web Services',
        
        // Cursos
        'courses': 'Cursos',
        '1_course_title': 'Machine Learning con Python',
        '1_course_provider': 'Coursera - Stanford University',
        
        // Habilidades
        'skills_title': 'Competencias Técnicas',
        '1_skill_title': 'Cloud & DevOps',
        '1_skill_item_1': 'Amazon Web Services (AWS)',
        '1_skill_item_2': 'Infrastructure as Code (IaC)',
        '1_skill_item_3': 'Despliegue y orquestación',
        '1_skill_item_4': 'Plataformas de MLOps',
        '2_skill_title': 'Data Science & ML',
        '2_skill_item_1': 'Análisis estadístico y Visualización de Datos',
        '2_skill_item_2': 'Feature engineering',
        '2_skill_item_3': 'Machine Learning avanzado y Deep Learning',
        '2_skill_item_4': 'Modelos de Clasificación y Regresión',
        '3_skill_title': 'Vision Artificial',
        '3_skill_item_1': 'Procesamiento de imágenes y videos (OpenCV)',
        '3_skill_item_2': 'Modelos de detección y segmentación (YOLO, R-CNN, etc.)',
        '3_skill_item_3': 'Reconocimiento facial y OCR',
        '3_skill_item_4': 'Tecnicas de segmentación y clasificación',
        '4_skill_title': 'NLP y Agentes',
        '4_skill_item_1': 'LangChain / LangGraph',
        '4_skill_item_2': 'N8N para aplicaciones con LLMs',
        '4_skill_item_3': 'Procesamiento de lenguaje natural',
        '4_skill_item_4': 'Implementación de Agentes',
        '5_skill_title': 'Desarrollo Full-Stack',
        '5_skill_item_1': 'Diseño e implementación de aplicaciones web',
        '5_skill_item_2': 'Integración de sistemas y APIs',
        '5_skill_item_3': 'Diseño e implementación de arquitectura escalable',
        '5_skill_item_4': 'Metodologías de desarrollo (CI/CD, TDD, Microservicios)',
        '6_skill_title': 'Bases de Datos',
        '6_skill_item_1': 'SQL (PostgreSQL, MySQL, Oracle, PL/SQL)',
        '6_skill_item_2': 'NoSQL (MongoDB, DynamoDB)',
        '6_skill_item_3': 'Optimización y modelado de bases de datos',
        '6_skill_item_4': '',
        
        // Contacto
        'contact_title': '¡Trabajemos Juntos!',
        'contact_text': '¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad. No dudes en contactarme.',
        'contact_info_title': 'Información de Contacto',
        'btn_send_message': 'Enviar Mensaje',
        
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
        'header_email': 'cefernal.dev@gmail.com',
        'header_phone': '(+57) 312 238 2462',
        'btn_cv': 'Resume',
        
        // About Me
        'about_title': 'About Me',
        'about_text_1': 'Electronic engineer with a master\'s degree in automation and over 10 years of professional experience, combining 5 years in data science and machine learning with 5 years as a full-stack developer. I possess a solid ability to integrate technical knowledge, analytical vision and practical experience in designing, implementing and optimizing artificial intelligence solutions.',
        'about_text_2': 'Throughout my career, I have participated in all stages of the AI project lifecycle: exploratory analysis and data preparation, model development and validation, as well as their deployment in production environments. I have worked with machine learning and deep learning techniques applied to prediction, classification, natural language processing and computer vision.',
        'about_text_3': 'Passionate about research and innovation, I stay updated on the most recent advances in artificial intelligence and automation, always seeking to provide high-impact solutions with added value.',

        // Experience
        'exp_title': 'Professional Experience',
        '1_exp_location': 'Remote (Bogotá, Colombia)',
        '1_exp_title': 'Artificial Intelligence Specialist',
        '1_exp_company': 'Subocol S.A.',
        '1_exp_period': 'January 2022 - Present',
        '1_exp_desc_1': '• Development and deployment of artificial intelligence models applied to the automotive insurance sector.',
        '1_exp_desc_2': '• Improvement and maintenance of existing AI services and models.',
        '1_exp_desc_3': '• Implementation of web services, database management (SQL and NoSQL).',
        '1_exp_desc_4': '• Statistical analysis, data visualization and ETL development.',
        '1_exp_desc_5': '• Research and development of AI models.',
        '1_exp_desc_6': '• AWS services management and MLOps platforms.',
        '2_exp_location': 'Cali, Colombia',
        '2_exp_title': 'Senior Development Engineer',
        '2_exp_company': 'Ipinnovatech Ltda.',
        '2_exp_period': 'May 2016 - February 2022',
        '2_exp_desc_1': '• Design and implementation of responsive web applications with integrations and third-party services.',
        '2_exp_desc_2': '• Data visualization and RETAIL solutions development.',
        '2_exp_desc_3': '• Web services implementation and server management.',
        '2_exp_desc_4': '• Research in artificial intelligence using convolutional networks for object detection in images.',
        '2_exp_desc_5': '• Implementation of computer vision algorithms.',
        '2_exp_desc_6': '• Database management (SQL and NoSQL).',
        '2_exp_desc_7': '• AWS services management.',
        '3_exp_location': 'Cali, Colombia',
        '3_exp_title': 'Research Assistant Monitor',
        '3_exp_company': 'University of Valle',
        '3_exp_period': 'February 2016 - March 2017',
        '3_exp_desc_1': '• Implementation of computer vision algorithms.',
        '3_exp_desc_2': '• Development of routines for NAO humanoid mobile robot movements using Python.',
        '3_exp_desc_3': '• Work with stereo cameras for human movement imitation.',
        '3_exp_desc_4': '• Collaboration in robotics and computer vision research projects.',
        
        // Education
        'edu_title': 'Education',
        '1_edu_degree': 'Master\'s in Engineering with emphasis in Automation',
        '1_edu_university': 'University of Valle',
        '1_edu_period': '2018 - 2020',
        '1_edu_desc_1': '• Grade point average: 4.6/5',
        '1_edu_desc_2': '• Research project: "Forecast of the Standardized Precipitation Index (SPI) in the Nariño region using artificial intelligence techniques"',
        '1_edu_desc_3': '• Topics covered: Dynamic systems optimization, linear systems optimization, intelligent control, computer vision, modern techniques for pattern recognition, time series forecasting techniques',
        '2_edu_degree': 'Electronic Engineer',
        '2_edu_university': 'University of Valle',
        '2_edu_period': '2012 - 2017',
        '2_edu_desc_1': '• Grade point average: 4.19/5',
        '2_edu_desc_2': '• Final project: "Development and implementation of a tool for physical therapies in patients with restricted upper limb mobility"',
        '2_edu_desc_3': '• Topics covered: Mobile robotics, integration of systems for automation, Programmable Logic Controllers (PLC), user interfaces, pattern recognition',
        
        // Certifications
        'certifications': 'Certifications',
        '1_cert_title': 'AWS Certified Cloud Practitioner',
        '1_cert_provider': 'Amazon Web Services',
        
        // Courses
        'courses': 'Courses',
        '1_course_title': 'Machine Learning with Python',
        '1_course_provider': 'Coursera - Stanford University',
        
        // Skills
        'skills_title': 'Technical Skills',
        '1_skill_title': 'Cloud & DevOps',
        '1_skill_item_1': 'Amazon Web Services (AWS)',
        '1_skill_item_2': 'Infrastructure as Code (IaC)',
        '1_skill_item_3': 'Deployment and orchestration',
        '1_skill_item_4': 'MLOps platforms',
        '2_skill_title': 'Data Science & ML',
        '2_skill_item_1': 'Statistical analysis and Data Visualization',
        '2_skill_item_2': 'Feature engineering',
        '2_skill_item_3': 'Advanced Machine Learning and Deep Learning',
        '2_skill_item_4': 'Classification and Regression Models',
        '3_skill_title': 'Computer Vision',
        '3_skill_item_1': 'Image and video processing (OpenCV)',
        '3_skill_item_2': 'Detection and segmentation models (YOLO, R-CNN, etc.)',
        '3_skill_item_3': 'Facial recognition and OCR',
        '3_skill_item_4': 'Segmentation and classification techniques',
        '4_skill_title': 'NLP & Agents',
        '4_skill_item_1': 'LangChain / LangGraph',
        '4_skill_item_2': 'N8N for LLM applications',
        '4_skill_item_3': 'Natural language processing',
        '4_skill_item_4': 'Agent implementation',
        '5_skill_title': 'Full-Stack Development',
        '5_skill_item_1': 'Web application design and implementation',
        '5_skill_item_2': 'System and API integration',
        '5_skill_item_3': 'Scalable architecture design and implementation',
        '5_skill_item_4': 'Development methodologies (CI/CD, TDD, Microservices)',
        '6_skill_title': 'Databases',
        '6_skill_item_1': 'SQL (PostgreSQL, MySQL, Oracle, PL/SQL)',
        '6_skill_item_2': 'NoSQL (MongoDB, DynamoDB)',
        '6_skill_item_3': 'Database optimization and modeling',
        '6_skill_item_4': '',
        
        // Contact
        'contact_title': "Let's Work Together!",
        'contact_text': 'Do you have a project in mind? I would love to learn more about your idea and how I can help you make it a reality. Feel free to contact me.',
        'contact_info_title': 'Contact Information',
        'btn_send_message': 'Send Message',
        
        // Language selector
        'language_selector': 'Language',
        'language_es': 'Español',
        'language_en': 'English'
    }
};

// Estado de la aplicación
let currentLanguage = 'es';
let currentSection = 'about';

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
}

// Función para mostrar sección
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
    }
    
    // Actualizar navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
        }
    });
    
    // Actualizar URL sin recargar la página
    const url = new URL(window.location);
    url.hash = sectionId;
    window.history.pushState({}, '', url);
}

// Función para manejar descarga de CV
function downloadCV() {
    const fileName = currentLanguage === 'en'
        ? 'CV - cfernandez ENG 2025.pdf'
        : 'CV - cfernandez ESP 2025.pdf';
    const cvUrl = `pdf/${encodeURIComponent(fileName)}`;
    window.open(cvUrl, '_blank');
}

// Eliminada validación de navegadores problemáticos (Instagram, etc.)
function isProblematicBrowser() {
    return false;
}

// Función para mostrar mensaje de compatibilidad
function showCompatibilityMessage() {
    const container = document.getElementById('main-content');
    if (container) {
        const message = document.createElement('div');
        message.innerHTML = `
            <div style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                padding: 2rem;
                box-sizing: border-box;
            ">
                <div style="
                    background: white;
                    padding: 2rem;
                    border-radius: 8px;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
                    max-width: 500px;
                    text-align: center;
                ">
                    <h2 style="color: #2563eb; margin-bottom: 1rem;">Cristhian Fernandez</h2>
                    <h3 style="color: #64748b; margin-bottom: 1.5rem;">AI / ML Engineer</h3>
                    <p style="color: #64748b; margin-bottom: 1.5rem; line-height: 1.6;">
                        Esta página funciona mejor en un navegador externo. 
                        Toca el botón de abajo para abrir en tu navegador predeterminado.
                    </p>
                    <button onclick="openInExternalBrowser()" style="
                        background-color: #2563eb;
                        color: white;
                        border: none;
                        padding: 0.75rem 1.5rem;
                        border-radius: 8px;
                        font-weight: 500;
                        cursor: pointer;
                        font-size: 1rem;
                    ">
                        Abrir en navegador externo
                    </button>
                </div>
            </div>
        `;
        container.appendChild(message);
    }
}

// Función para abrir en navegador externo
function openInExternalBrowser() {
    const currentUrl = window.location.href;
    
    try {
        window.open(currentUrl, '_blank');
    } catch (e) {
        try {
            window.location.href = currentUrl;
        } catch (e2) {
            alert('Por favor, copia esta URL y ábrela en tu navegador: ' + currentUrl);
        }
    }
}

// Función para manejar el scroll suave
function handleSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });
}

// Función para manejar el hash de la URL
function handleUrlHash() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
}

// Función para inicializar la aplicación
async function initializeApp() {
    // Cargar todas las secciones dinámicamente
    await loadAllSections();
    
    // Ocultar loading indicator
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    }
    
    // Mostrar contenido principal
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        mainContent.style.display = 'block';
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
    
    // Configurar eventos
    setupEventListeners();
    
    // Manejar hash de URL
    handleUrlHash();
    
    // Configurar scroll suave
    handleSmoothScroll();
    
    // Compatibilidad especial deshabilitada
}

// Función para configurar event listeners
function setupEventListeners() {
    // Selector de idioma
    const languageSelector = document.getElementById('language-selector');
    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
    
    // Botón de descarga de CV
    const cvButton = document.getElementById('btn-cv-download');
    if (cvButton) {
        cvButton.addEventListener('click', (e) => {
            e.preventDefault();
            downloadCV();
        });
    }
    
    // Navegación
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    // Manejar cambios en el hash de la URL
    window.addEventListener('hashchange', handleUrlHash);
}

// Eliminada función de compatibilidad específica de Instagram
function enhanceInstagramCompatibility() {}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initializeApp();
    });
} else {
    initializeApp();
}

// También verificar cuando la ventana se carga completamente
// Compatibilidad especial deshabilitada en evento load
window.addEventListener('load', () => {});
