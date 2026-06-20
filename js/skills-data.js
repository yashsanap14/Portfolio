/**
 * Reusable skill data for the Skills marquee section.
 * Icons use Font Awesome classes (fab/fas) or image URLs from the original portfolio.
 */
const SKILL_CATEGORIES = [
    {
        id: 'programming',
        title: 'Programming Languages',
        icon: 'fas fa-code',
        direction: 'left',
        speed: 38,
        skills: [
            { name: 'Python', icon: { type: 'fab', class: 'fa-python' } },
            { name: 'Java', icon: { type: 'fab', class: 'fa-java' } },
            { name: 'JavaScript', icon: { type: 'fab', class: 'fa-js' } },
            { name: 'TypeScript', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', alt: 'TypeScript' } },
            { name: 'SQL', icon: { type: 'fas', class: 'fa-database' } },
            { name: 'HTML5', icon: { type: 'fab', class: 'fa-html5' } },
            { name: 'CSS3', icon: { type: 'fab', class: 'fa-css3-alt' } },
            { name: 'Go', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg', alt: 'Go' } },
            { name: 'Bash', icon: { type: 'fas', class: 'fa-terminal' } }
        ]
    },
    {
        id: 'frontend',
        title: 'Frontend & Web Frameworks',
        icon: 'fas fa-layer-group',
        direction: 'right',
        speed: 42,
        skills: [
            { name: 'React.js', icon: { type: 'fab', class: 'fa-react' } },
            { name: 'Redux', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', alt: 'Redux' } },
            { name: 'Node.js', icon: { type: 'fab', class: 'fa-node-js' } },
            { name: 'Django', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', alt: 'Django' } },
            { name: 'FastAPI', icon: { type: 'img', src: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png', alt: 'FastAPI' } },
            { name: 'Tailwind CSS', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg', alt: 'Tailwind CSS' } },
            { name: 'Bootstrap', icon: { type: 'fab', class: 'fa-bootstrap' } },
            { name: 'REST APIs', icon: { type: 'fas', class: 'fa-plug' } },
            { name: 'GraphQL', icon: { type: 'img', src: 'https://graphql.org/img/logo.svg', alt: 'GraphQL' } }
        ]
    },
    {
        id: 'backend',
        title: 'Backend, Cloud & Databases',
        icon: 'fas fa-cloud',
        direction: 'left',
        speed: 40,
        skills: [
            { name: 'AWS', icon: { type: 'fab', class: 'fa-aws' } },
            { name: 'PostgreSQL', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', alt: 'PostgreSQL' } },
            { name: 'NoSQL', icon: { type: 'fas', class: 'fa-database' } },
            { name: 'Docker', icon: { type: 'fab', class: 'fa-docker' } },
            { name: 'Kubernetes', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', alt: 'Kubernetes' } },
            { name: 'Terraform', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', alt: 'Terraform' } },
            { name: 'Ansible', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', alt: 'Ansible' } },
            { name: 'Kafka', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg', alt: 'Apache Kafka' } },
            { name: 'Linux/Unix', icon: { type: 'fab', class: 'fa-linux' } }
        ]
    },
    {
        id: 'ml-ai',
        title: 'Machine Learning & AI',
        icon: 'fas fa-brain',
        direction: 'right',
        speed: 36,
        skills: [
            { name: 'TensorFlow', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', alt: 'TensorFlow' } },
            { name: 'PyTorch', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg', alt: 'PyTorch' } },
            { name: 'Scikit-learn', icon: { type: 'img', src: 'https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png', alt: 'Scikit-learn' } },
            { name: 'XGBoost', icon: { type: 'img', src: 'https://xgboost.readthedocs.io/en/stable/_static/xgboost_logo.png', alt: 'XGBoost' } },
            { name: 'Transformers', icon: { type: 'fas', class: 'fa-robot' } },
            { name: 'LLMs', icon: { type: 'fas', class: 'fa-brain' } },
            { name: 'RAG', icon: { type: 'fas', class: 'fa-search' } },
            { name: 'Computer Vision', icon: { type: 'fas', class: 'fa-eye' } }
        ]
    },
    {
        id: 'tools',
        title: 'Developer Tools & Visualization',
        icon: 'fas fa-tools',
        direction: 'left',
        speed: 44,
        skills: [
            { name: 'Git', icon: { type: 'fab', class: 'fa-git-alt' } },
            { name: 'GitHub Actions', icon: { type: 'fab', class: 'fa-github' } },
            { name: 'CI/CD', icon: { type: 'fas', class: 'fa-sync-alt' } },
            { name: 'Postman', icon: { type: 'img', src: 'https://www.postman.com/_ar-assets/images/favicon-1-48.png', alt: 'Postman' } },
            { name: 'Tableau', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg', alt: 'Tableau' } },
            { name: 'Power BI', icon: { type: 'fab', class: 'fa-microsoft', color: '#F2C811' } },
            { name: 'Pandas', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg', alt: 'Pandas' } },
            { name: 'GeoPandas', icon: { type: 'img', src: 'https://geopandas.org/en/stable/_static/geopandas_logo.png', alt: 'GeoPandas' } },
            { name: 'Apache Spark', icon: { type: 'img', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg', alt: 'Apache Spark' } }
        ]
    }
];
