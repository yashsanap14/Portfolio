export interface ProjectLinks {
  github?: string | null;
  demo?: string | null;
  live?: string | null;
}

export interface Project {
  title: string;
  badge?: string;
  description: string;
  tech: string[];
  thumbnail?: string | null;
  thumbnailType?: "placeholder";
  placeholderIcon?: "water" | "rag";
  links: ProjectLinks;
}

export interface Dashboard {
  title: string;
  description: string;
  tech: string[];
  thumbnail: string;
  modalCaption: string;
}

export const PROJECTS: Project[] = [
  {
    title: "MedCost Insight 🏥💡",
    badge: "🏆 HackFAX × PatriotHack 2026",
    description:
      "Healthcare pricing intelligence platform that decodes ER bills by benchmarking every charge against federal CMS Medicare rates. Upload your bill, get an instant negotiation score, identify overcharges, simulate insurance scenarios, and auto-generate a ready-to-send dispute letter — powered by Google Gemini AI.",
    tech: ["Python Flask", "Google Gemini AI", "JavaScript", "CMS Medicare Data", "Glassmorphism UI", "REST APIs"],
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/5518e752bc33422d948dbef3952f66b0-63f8276eab03e72a-full-play.gif",
    links: {
      github: "https://github.com/yashsanap14/MedCost-Insight",
      demo: "https://www.loom.com/share/5518e752bc33422d948dbef3952f66b0",
    },
  },
  {
    title: "RAG PDF Assistant 📄🤖",
    description:
      "Local-first Retrieval-Augmented Generation app to chat with your PDFs. Upload a document, chunk and embed it with sentence-transformers, store vectors in Qdrant, and ask natural-language questions answered by an LLM via OpenRouter — with cited sources, durable Inngest workflows, retries, and rate limiting. Built with FastAPI, Streamlit, and llama-index.",
    tech: [
      "FastAPI",
      "Inngest",
      "Qdrant",
      "LlamaIndex",
      "sentence-transformers",
      "OpenRouter",
      "Streamlit",
      "RAG",
    ],
    thumbnailType: "placeholder",
    placeholderIcon: "rag",
    links: {
      github: "https://github.com/yashsanap14/RAG-PDF-Assistant",
    },
  },
  {
    title: "NYC 311 Service Requests Analytics 📊",
    description:
      "End-to-end operational analytics project analyzing NYC's 311 service request data. Collects real data via NYC Open Data API, handles large-scale datasets with proper data engineering practices, and produces decision-oriented insights. Features geospatial analysis, temporal trend identification, and an interactive Streamlit dashboard for stakeholder communication.",
    tech: ["Python", "pandas", "Streamlit", "Plotly", "GeoPandas", "REST APIs", "Data Engineering"],
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/5007bc4b902d4bce87493a716caf2d6f-1e7e1d6b9c8637c0-full-play.gif",
    links: {
      github: "https://github.com/yashsanap14/NYC-311-service-requests",
      demo: "https://www.loom.com/share/5007bc4b902d4bce87493a716caf2d6f",
      live: "https://yashsanap14-nyc-311-service-requests-appdashboard-oubvtw.streamlit.app/",
    },
  },
  {
    title: "SearchMind 🔎🧠",
    description:
      "AI-powered web search and summarization with citations. Type or dictate your query, SearchMind fetches results, summarizes with Gemini AI, and stores history in Cloudflare D1. Features voice input, text-to-speech, and numbered citations.",
    tech: ["React 19", "TypeScript", "Cloudflare Workers", "Gemini AI", "TailwindCSS", "Cloudflare D1"],
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/e54b47b45c7949f09aa93fb2efd340f2-18d75d43e4805736-full-play.gif",
    links: {
      github: "https://github.com/yashsanap14/SearchMind.git",
      demo: "https://www.loom.com/share/e54b47b45c7949f09aa93fb2efd340f2",
    },
  },
  {
    title: "UI Code Assistant",
    description:
      "An AI-like system that helps UI developers generate, analyze, and improve UI code. Features component generation, design analysis, code optimization, and accessibility checking. Supports multiple styling frameworks including Bootstrap and Tailwind CSS.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/00c744d6c9244b6bba52770cedf5d362-9a0a66018fd53bbc-full-play.gif",
    links: {
      github: "https://github.com/yashsanap14/UICoding_assistant.git",
      demo: "https://www.loom.com/share/00c744d6c9244b6bba52770cedf5d362",
      live: "https://mason.gmu.edu/~ppatil8",
    },
  },
  {
    title: "Academic Advisor",
    description:
      "Web-based application designed to assist students in managing their academic journey. Features include semester scheduler, major selection tools, financial aid resources, and personalized study plans. Helps students plan courses, track progress, and make informed academic decisions.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/2888badf39c644d6b25b11497d9ec3de-6f02e745915cb661-full-play.gif",
    links: {
      github: "https://github.com/yashsanap14/Academic-Advisor.git",
      demo: "https://www.loom.com/share/2888badf39c644d6b25b11497d9ec3de",
      live: "https://academic-advisor-yashsanap14s-projects.vercel.app/",
    },
  },
  {
    title: "FutureTech Summit 2025 🌟",
    description:
      "Modern, interactive website for the FutureTech Summit 2025 conference featuring dark/light mode toggle, dynamic RSVP form, and responsive design. Built with vanilla HTML, CSS, and JavaScript showcasing DOM manipulation and modern web development skills.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/3d70d1f388f04488a3652a91d2f98074-f122b3fe92ede634-full-play.gif",
    links: {
      github: "https://github.com/yashsanap14/futuretech-summit-2025.git",
      demo: "https://www.loom.com/share/3d70d1f388f04488a3652a91d2f98074",
      live: "https://yashsanap14.github.io/futuretech-summit-2025/",
    },
  },
  {
    title: "Pokemon Viewer 🐛⚡🎨",
    description:
      "Android app that displays a scrollable list of Pokemon from the PokeAPI with custom styling and theming. Features RecyclerView with 30+ Pokemon, large centered images, custom color schemes, and smooth image loading with Glide library. Includes downloadable fonts and custom themes.",
    tech: ["Android", "Java", "RecyclerView", "Glide", "PokeAPI"],
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/b4edc3e7ca1145ceab12d5f999c56b83-1853418045bfe870-full-play.gif",
    links: {
      github: "https://github.com/yashsanap14/Pokemon-Viewer-.git",
      demo: "https://www.loom.com/share/b4edc3e7ca1145ceab12d5f999c56b83",
    },
  },
  {
    title: "Water Gauge Segmentation with YOLO11",
    description:
      "Semantic segmentation project for water level gauges using YOLO11-seg and SAM2 models with Ultralytics. Processes 7,196 images to automatically identify and segment water gauge regions in field imagery. Features automated annotation creation, model training, and comparison with Roboflow annotations for environmental data extraction.",
    tech: ["Python", "YOLO11", "SAM2", "Ultralytics", "Computer Vision", "Jupyter Notebook"],
    thumbnailType: "placeholder",
    placeholderIcon: "water",
    links: {
      github: "https://github.com/yashsanap14/Water-Gauge-Segmentation-using-YOLO11-Ultralytics.git",
    },
  },
  {
    title: "Instant Market - GMU Student Marketplace",
    description:
      "Web-based marketplace platform designed for GMU students to buy and sell items within the university community. Features user authentication with student/seller roles, product listings, shopping cart, order history, AI-powered recommendations, search and filter functionality, secure payment processing, and seller dashboard with sales analytics.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "AI Recommendations"],
    thumbnail: "https://cdn.loom.com/sessions/thumbnails/0f0df8a201904048a33c756519423ba6-5e72f5d0895d3566-full-play.gif",
    links: {
      github: "https://github.com/yashsanap14/instant_Market.git",
      demo: "https://www.loom.com/share/0f0df8a201904048a33c756519423ba6",
      live: "https://instant-market.vercel.app/login.html",
    },
  },
];

export const DASHBOARDS: Dashboard[] = [
  {
    title: "NYC Airbnb Analytics Dashboard 🏠📊",
    description:
      "Comprehensive Tableau dashboard analyzing 37,457 Airbnb listings across NYC's five boroughs. Features geospatial pricing maps, booking trends by neighbourhood group and room type, host performance rankings, seasonal demand patterns, and cross-borough comparative analysis.",
    tech: ["Tableau", "Data Visualization", "Geospatial Analysis", "NYC Open Data", "Business Intelligence"],
    thumbnail: "/Assets/airbnb-dashboard.png",
    modalCaption: "NYC Airbnb Analytics Dashboard",
  },
];
