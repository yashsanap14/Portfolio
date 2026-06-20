export interface CertificationItem {
  title: string;
  issuer: string;
  skills: string[];
  url?: string | null;
  date?: string;
  logo?: string;
  logoType?: "image" | "icon";
  iconName?: "linkedin" | "docker" | "microsoft" | "fallback";
  fallbackText?: string;
}

export interface CertificationCategory {
  title: string;
  icon: "database" | "python" | "brain";
  items: CertificationItem[];
}

export interface CertificationProvider {
  name: string;
  logo?: string;
  icon?: "award";
  categories?: CertificationCategory[];
  items?: CertificationItem[];
}

export const CERTIFICATIONS: CertificationProvider[] = [
  {
    name: "DataCamp",
    logo: "https://www.datacamp.com/favicon.ico",
    categories: [
      {
        title: "Data Analytics & SQL",
        icon: "database",
        items: [
          {
            title: "Data Analyst Associate Certification",
            issuer: "DataCamp",
            skills: ["Python", "SQL", "Data Visualization", "Data Wrangling", "Exploratory Data Analysis"],
            url: null,
          },
          {
            title: "Data Manipulation in SQL",
            issuer: "DataCamp",
            skills: ["CASE Statements", "Subqueries", "CTEs", "Window Functions", "SQL"],
            url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/7a9ef647f5dd471cb07fb5a538c8249f2758e123",
          },
          {
            title: "Introduction to SQL",
            issuer: "DataCamp",
            skills: ["SELECT Queries", "Filtering & Sorting", "Aggregation", "GROUP BY", "SQL"],
            url: "https://www.datacamp.com/courses/introduction-to-sql",
          },
          {
            title: "Joining Data in SQL",
            issuer: "DataCamp",
            skills: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "UNION", "SQL Joins"],
            url: "https://www.datacamp.com/courses/joining-data-in-sql",
          },
          {
            title: "Intermediate SQL",
            issuer: "DataCamp",
            skills: ["Subqueries", "CASE WHEN", "Views", "Set Operations", "SQL"],
            url: "https://www.datacamp.com/courses/intermediate-sql",
          },
        ],
      },
      {
        title: "Python & NLP",
        icon: "python",
        items: [
          {
            title: "Intermediate Python",
            issuer: "DataCamp",
            skills: ["Matplotlib", "Pandas", "Dictionaries", "DataFrames", "Loops & Control Flow"],
            url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/64b84c5ca4ee13b5e8deabf745763a4cc7e1295f",
          },
          {
            title: "Natural Language Processing (NLP) in Python",
            issuer: "DataCamp",
            skills: ["Tokenization", "TF-IDF", "Word Embeddings", "Hugging Face", "Sentiment Analysis", "Named Entity Recognition"],
            url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/671d83784dae7038ccab443d8672424fe00617aa",
          },
        ],
      },
      {
        title: "AI / Deep Learning",
        icon: "brain",
        items: [
          {
            title: "Introduction to LLMs in Python",
            issuer: "DataCamp",
            skills: ["Transformers", "Hugging Face", "Fine-tuning", "LLMs", "BLEU & ROUGE"],
            url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/11a97cf40e6f97e09d8e5e3368efc25649c41c50",
          },
          {
            title: "Working with Llama 3",
            issuer: "DataCamp",
            skills: ["Llama 3", "Prompt Engineering", "llama-cpp-python", "JSON Output", "LLMs"],
            url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/279fb8d9b1a0dcca178249967f4531af95ae7b29",
          },
          {
            title: "Introduction to Deep Learning with PyTorch",
            issuer: "DataCamp",
            skills: ["PyTorch", "Neural Networks", "Deep Learning", "Training Loops", "TorchMetrics"],
            url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/7b695cdcf2f844d4753cca91256f3e3db0af62af",
          },
          {
            title: "AI Fundamentals",
            issuer: "DataCamp",
            skills: ["Generative AI", "GANs", "Transformers", "Machine Learning", "Supervised Learning", "Unsupervised Learning"],
            url: null,
          },
        ],
      },
    ],
  },
  {
    name: "Other Certifications",
    icon: "award",
    items: [
      {
        title: "AI Agents Fundamentals",
        issuer: "Hugging Face",
        logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        logoType: "image",
        date: "Issued Jan 2026",
        skills: ["Transformers", "Large Language Models (LLM)"],
      },
      {
        title: "Software Engineering Job Simulation",
        issuer: "JPMorganChase",
        logo: "https://www.jpmorganchase.com/content/dam/jpmc/jpmorgan-chase-and-co/logo/jpmc-logo.png",
        logoType: "image",
        date: "Issued Dec 2025",
        skills: ["Java", "MySQL", "REST APIs"],
      },
      {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        logoType: "image",
        date: "Issued Oct 2025",
        skills: ["Artificial Intelligence (AI)", "Machine Learning", "Supervised Learning", "Unsupervised Learning", "OCI AI Services"],
      },
      {
        title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
        issuer: "Oracle",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
        logoType: "image",
        date: "Issued Oct 2025 · Expires Oct 2027",
        skills: ["Data Science", "Data Preparation", "Machine learning lifecycle management"],
      },
      {
        title: "Build an AI Application with React and AWS SageMaker",
        issuer: "LinkedIn",
        iconName: "linkedin",
        logoType: "icon",
        date: "Issued Jun 2025",
        skills: ["AWS SageMaker", "React.js", "Artificial Intelligence (AI)"],
      },
      {
        title: "Learning Power BI Desktop",
        issuer: "LinkedIn",
        iconName: "linkedin",
        logoType: "icon",
        date: "Issued Jun 2025",
        skills: ["Data Analytics", "Data Visualization", "Microsoft Power BI"],
      },
      {
        title: "Generative AI: The Evolution of Thoughtful Online Search",
        issuer: "LinkedIn",
        iconName: "linkedin",
        logoType: "icon",
        date: "Issued Mar 2025",
        skills: ["Search Engine Technology", "Artificial Intelligence for Business", "Generative AI"],
      },
      {
        title: "Docker Foundations Professional Certificate",
        issuer: "Docker, Inc",
        iconName: "docker",
        logoType: "icon",
        date: "Issued Feb 2025",
        skills: ["Containerization", "DevOps", "Docker"],
      },
      {
        title: "Microsoft Certified: Azure Fundamentals",
        issuer: "Microsoft",
        iconName: "microsoft",
        logoType: "icon",
        date: "Issued May 2023",
        skills: ["Azure", "Cloud Computing", "Microsoft Azure"],
      },
      {
        title: "Intro to Android Development Course",
        issuer: "CodePath",
        iconName: "fallback",
        fallbackText: "CP",
        logoType: "icon",
        date: "Completed",
        skills: ["Kotlin", "Java", "Application Programming Interfaces (API)", "Version Control"],
      },
    ],
  },
];
