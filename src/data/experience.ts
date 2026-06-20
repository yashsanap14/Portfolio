export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  date: string;
  logo: { src: string; alt: string; fallback: string };
  bullets: string[];
  tags: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Machine Learning AI Technology Intern",
    company: "Virginia Institute of Marine Science (VIMS)",
    location: "Gloucester Point, VA",
    date: "Jan 2026 – Present",
    logo: { src: "/Assets/vims-logo.png", alt: "VIMS", fallback: "VIMS" },
    bullets: [
      "Engineered end-to-end ML pipelines in Python for near real-time stage prediction across 10 USGS HIVIS cameras, increasing data processing throughput by 25% through automated image and sensor ingestion",
      "Leveraged LLMs (GPT-4o/Claude) to automate the extraction of metadata from unstructured sensor logs, reducing manual data entry for researchers by 60% and improving documentation accuracy",
      "Optimized station-specific regression models using RMSE metrics on 6+ months of historical data, achieving a 12% reduction in prediction error compared to legacy baseline models",
    ],
    tags: ["Python", "LLMs", "GPT-4o", "Computer Vision", "ML Pipelines", "Regression"],
  },
  {
    title: "Data Science Intern",
    company: "City Of Virginia Beach IT",
    location: "Virginia Beach, VA",
    date: "Jun 2025 – Dec 2025",
    logo: { src: "/Assets/VB-Bug-Fullcolor.png", alt: "City of Virginia Beach", fallback: "VB" },
    bullets: [
      "Architected a geospatial ETL pipeline using Python and Sentinel Hub API to generate cloud-free NO2 mosaics, persisting results in PostgreSQL and NoSQL (MongoDB) for high-velocity spatio-temporal queries",
      "Reduced manual data validation time by 40% by writing optimized SQL and NoSQL aggregation scripts to validate data quality across disparate environmental datasets",
      "Scalability-tuned hydrologic analysis workflows on AWS SageMaker and Dask (Coiled), cutting runtime for large-scale NOAA forecast processing by 50% while managing cost-efficient compute clusters",
    ],
    tags: ["Python", "PostgreSQL", "MongoDB", "AWS SageMaker", "Dask", "GeoPandas"],
  },
  {
    title: "Senior Data Analyst",
    company: "Capgemini Technology Services",
    location: "Mumbai, India",
    date: "Aug 2022 – Jul 2024",
    logo: { src: "/Assets/capgemini.png", alt: "Capgemini", fallback: "C" },
    bullets: [
      "Developed and deployed Transformer-based (LLM) and XGBoost models for customer churn, driving a $20k/month revenue uplift by identifying high-risk segments for targeted retention campaigns",
      "Built serverless ML inference APIs on AWS (Lambda, SageMaker) to handle 10k+ daily requests, reducing cloud infrastructure overhead costs by 30% through efficient resource allocation",
      "Implemented a real-time model monitoring dashboard in Power BI and Python to track data drift and performance, resulting in a 10% improvement in user retention over 12 months",
    ],
    tags: ["Python", "XGBoost", "LLM", "AWS Lambda", "AWS SageMaker", "Power BI"],
  },
];
