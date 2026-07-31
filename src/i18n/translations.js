export const translations = {
    es: {
        slogan: 'engineered with purpose.',
        perfil: {
            title: 'Perfil Profesional',
            perfilLabel: 'Perfil',
            perfilText:
                'Ingeniera de Software con experiencia previa en operaciones y soporte técnico ' +
                'en entornos corporativos exigentes. Hoy enfocada en desarrollo web con React, ' +
                'Java y C#, con interés en el ecosistema Salesforce.',
            sobremiLabel: 'Sobre Mí',
            sobremiText:
                'Costarricense, con un camino que viene del comercio internacional y las ' +
                'operaciones antes de llegar a software. Esa mezcla me enseñó a entender un ' +
                'negocio por dentro antes de construir tecnología.',
        },
        habilidades: {
            title: 'Habilidades',
            tecnicas: 'Habilidades técnicas',
            blandas: 'Habilidades blandas',
            hard: ['React', 'Java', 'C#', 'PL/SQL', 'Salesforce', 'Git / GitHub'],
            soft: ['Soporte técnico', 'UX/UI', 'Gestión de equipos', 'Atención al cliente', 'Adaptabilidad'],
        },
        mvv: {
            title: 'Misión, Visión y Valores',
            misionLabel: 'Misión',
            misionText:
                'Aportar valor a organizaciones mediante el desarrollo de soluciones de ' +
                'software que combinen visión de negocio y competencia técnica, contribuyendo ' +
                'a equipos que buscan tecnología con impacto real.',
            visionLabel: 'Visión',
            visionText:
                'Ser una profesional especializada en el ecosistema Salesforce, aprovechando ' +
                'la visión de negocio y la formación técnica para desempeñarse en roles que ' +
                'conecten la tecnología con las necesidades reales de las organizaciones.',
            valoresLabel: 'Valores',
            valores: [
                { nombre: 'Autenticidad', texto: 'Construyo mi trayectoria desde lo que genuinamente soy.' },
                { nombre: 'Colaboración', texto: 'Los mejores resultados se logran sumando perspectivas distintas.' },
                { nombre: 'Autorreflexión', texto: 'Evalúo mi proceso y ajusto el camino cuando hace falta.' },
            ],
        },
        proyectos: {
            title: 'Proyectos',
            verEnGithub: 'Ver en GitHub →',
            anterior: 'Proyecto anterior',
            siguiente: 'Proyecto siguiente',
            items: [
                {
                    titulo: 'Gestión de Inventario',
                    descripcion: 'Sistema de control de inventario con PL/SQL, usando procedimientos almacenados para el manejo de stock y movimientos.',
                    tecnologias: ['PL/SQL', 'Oracle'],
                    link: 'https://github.com/isayanamc/Gestion-Inventario',
                    imagen: `${import.meta.env.BASE_URL}gestion-inventario-er-es.svg`,
                },
                {
                    titulo: 'Gestión de Escuela',
                    descripcion: 'Sistema de gestión académica en Java, con arquitectura en capas (Models, Services, MenuHandler) aplicando principios de POO.',
                    tecnologias: ['Java', 'POO'],
                    link: 'https://github.com/isayanamc/proyecto-escuela',
                    imagen: `${import.meta.env.BASE_URL}proyecto-escuela-diagrama-es.svg`,
                },
                {
                    titulo: 'Bakery Shop',
                    descripcion: 'Sitio de panadería en JavaScript, con catálogo de productos y una interfaz pensada para la experiencia de compra.',
                    tecnologias: ['JavaScript', 'HTML', 'CSS'],
                    link: 'https://github.com/isayanamc/BakeryShop',
                    imagen: `${import.meta.env.BASE_URL}bakery-shop-sitemap-es.svg`,
                },
            ],
        },
        contacto: {
            title: 'Contacto',
        },
    },
    en: {
        slogan: 'engineered with purpose.',
        perfil: {
            title: 'Professional Profile',
            perfilLabel: 'Profile',
            perfilText:
                'Software Engineer with prior experience in operations and technical support ' +
                'in demanding corporate environments. Currently focused on web development ' +
                'with React, Java, and C#, with an interest in the Salesforce ecosystem.',
            sobremiLabel: 'About Me',
            sobremiText:
                'From Costa Rica, with a path that started in international trade and ' +
                'operations before moving into software. That mix taught me to understand a ' +
                'business from the inside before building technology for it.',
        },
        habilidades: {
            title: 'Skills',
            tecnicas: 'Technical Skills',
            blandas: 'Soft Skills',
            hard: ['React', 'Java', 'C#', 'PL/SQL', 'Salesforce', 'Git / GitHub'],
            soft: ['Technical support', 'UX/UI', 'Team management', 'Customer service', 'Adaptability'],
        },
        mvv: {
            title: 'Mission, Vision and Values',
            misionLabel: 'Mission',
            misionText:
                'To bring value to organizations by developing software solutions that ' +
                'combine business vision and technical skill, contributing to teams seeking ' +
                'technology with real impact.',
            visionLabel: 'Vision',
            visionText:
                "To become a professional specialized in the Salesforce ecosystem, leveraging " +
                "business vision and technical training to work in roles that connect " +
                "technology with organizations' real needs.",
            valoresLabel: 'Values',
            valores: [
                { nombre: 'Authenticity', texto: 'I build my path from who I genuinely am.' },
                { nombre: 'Collaboration', texto: 'The best results come from combining different perspectives.' },
                { nombre: 'Self-reflection', texto: 'I evaluate my process and adjust course when needed.' },
            ],
        },
        proyectos: {
            title: 'Projects',
            verEnGithub: 'View on GitHub →',
            anterior: 'Previous project',
            siguiente: 'Next project',
            items: [
                {
                    titulo: 'Inventory Management',
                    descripcion: 'Inventory control system built with PL/SQL, using stored procedures to manage stock and movements.',
                    tecnologias: ['PL/SQL', 'Oracle'],
                    link: 'https://github.com/isayanamc/Gestion-Inventario',
                    imagen: `${import.meta.env.BASE_URL}gestion-inventario-er-en.svg`,
                },
                {
                    titulo: 'School Management System',
                    descripcion: 'Academic management system in Java, with layered architecture (Models, Services, MenuHandler) applying OOP principles.',
                    tecnologias: ['Java', 'OOP'],
                    link: 'https://github.com/isayanamc/proyecto-escuela',
                    imagen: `${import.meta.env.BASE_URL}proyecto-escuela-diagrama-en.svg`,
                },
                {
                    titulo: 'Bakery Shop',
                    descripcion: 'Bakery website in JavaScript, with a product catalog and an interface designed for the shopping experience.',
                    tecnologias: ['JavaScript', 'HTML', 'CSS'],
                    link: 'https://github.com/isayanamc/BakeryShop',
                    imagen: `${import.meta.env.BASE_URL}bakery-shop-sitemap-en.svg`,
                },
            ],
        },
        contacto: {
            title: 'Contact',
        },
    },
}