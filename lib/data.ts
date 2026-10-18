export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'AI & Data' | 'Cloud & Engineering' | 'FinTech Solutions';
  metrics: string;
  features: string[];
  gradient: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'Enterprise Cloud' | 'AI Automation' | 'Custom SaaS' | 'FinTech & Security';
  metrics: { label: string; value: string }[];
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tags: string[];
  imageBg: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend & Cloud' | 'AI & Data' | 'DevOps & Cyber';
  icon: string;
  proficiency: number;
  popularFor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  results: string;
}

export interface CoreValue {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  accent: string;
}

export const SERVICES: Service[] = [
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automation',
    shortDesc: 'Harness LLMs, autonomous agents, and predictive machine learning models tailored for enterprise scale.',
    fullDesc: 'We architect enterprise-grade AI solutions that automate complex operational workflows, power intelligent customer agents, and deliver real-time predictive insights with strict security guardrails.',
    iconName: 'Cpu',
    category: 'AI & Data',
    metrics: '10x Faster Process Execution',
    features: [
      'Custom LLM Fine-Tuning & RAG Pipelines',
      'Autonomous Workflow & Task Agents',
      'Predictive Analytics & Forecasting Models',
      'Computer Vision & Automated Document Parsing',
      'Enterprise Guardrails & Ethical AI Safety'
    ],
    gradient: 'from-cyan-500 via-blue-600 to-lime-500'
  },
  {
    id: 'cloud-transformation',
    title: 'Cloud Architecture & DevOps',
    shortDesc: 'Scale seamlessly with multi-cloud infrastructure, microservices, and automated Zero-Downtime CI/CD.',
    fullDesc: 'Our cloud architects design resilient, auto-scaling environments across AWS, GCP, and Azure. We optimize cloud spend, eliminate infrastructure bottlenecks, and enforce continuous delivery.',
    iconName: 'CloudLightning',
    category: 'Cloud & Engineering',
    metrics: '99.99% Guaranteed Availability',
    features: [
      'Kubernetes & Serverless Microservices',
      'Infrastructure as Code (Terraform / Pulumi)',
      'Multi-Cloud Disaster Recovery Systems',
      'Cost Optimization & FinOps Management',
      '24/7 SRE Monitoring & Automated Remediation'
    ],
    gradient: 'from-blue-600 via-cyan-500 to-lime-400'
  },
  {
    id: 'custom-software',
    title: 'Full-Stack Enterprise Software',
    shortDesc: 'Custom Web & Mobile applications engineered for high performance, intuitive UX, and rapid scalability.',
    fullDesc: 'From high-throughput FinTech platforms to internal operations suites, we build robust, pixel-perfect digital products leveraging Next.js, Node.js, Python, and scalable databases.',
    iconName: 'Code2',
    category: 'Cloud & Engineering',
    metrics: '3x Speed-to-Market Delivery',
    features: [
      'Next.js & React High-Performance Web Apps',
      'Cross-Platform Mobile Apps (iOS & Android)',
      'High-Throughput API Gateway Architectures',
      'Real-Time WebSocket & Event-Driven Systems',
      'Legacy Code Modernization & Migration'
    ],
    gradient: 'from-cyan-400 via-lime-500 to-blue-600'
  },
  {
    id: 'fintech-management-systems',
    title: 'FinTech Portfolio & Wealth Management',
    shortDesc: 'Enterprise platforms for real-time portfolio tracking, asset management, and financial reconciliation.',
    fullDesc: 'We build secure FinTech management systems that provide high-fidelity tracking of digital assets, algorithmic portfolio rebalancing, and automated ledger reconciliation for asset managers.',
    iconName: 'Landmark',
    category: 'FinTech Solutions',
    metrics: 'Real-Time Asset Tracking',
    features: [
      'Real-Time Portfolio & Asset Tracking',
      'Algorithmic Wealth Rebalancing',
      'Automated Ledger Reconciliation',
      'Secure Digital Wallets & Custody',
      'Compliance-Ready Reporting Dashboards'
    ],
    gradient: 'from-blue-600 via-indigo-500 to-purple-600'
  },
  {
    id: 'fintech-data-ai',
    title: 'Financial AI & Predictive Analytics',
    shortDesc: 'Unlock institutional wealth insights with predictive ML, risk scoring, and algorithmic models.',
    fullDesc: 'Empower financial institutions with advanced AI workflows for dynamic risk assessment, credit scoring, algorithmic trading, and personalized wealth management assistants.',
    iconName: 'Wallet',
    category: 'FinTech Solutions',
    metrics: 'Sub-Second Risk Scoring',
    features: [
      'Algorithmic Trading & Quants ML',
      'Dynamic Credit Risk Models',
      'AI-Powered Wealth Management',
      'KYC/AML Automation Pipelines',
      'Real-Time Market Data Streaming'
    ],
    gradient: 'from-teal-500 via-emerald-500 to-lime-500'
  },
  {
    id: 'digital-product-ux',
    title: 'UI/UX & Product Design System',
    shortDesc: 'Deliver immersive, accessible, and conversion-optimized digital experiences tailored to human needs.',
    fullDesc: 'Our design strategists craft comprehensive design systems, interactive prototypes, and frictionless user flows that maximize engagement and delight users.',
    iconName: 'Layout',
    category: 'Cloud & Engineering',
    metrics: '45% Conversion Lift',
    features: [
      'Design System Creation & UI Kit Libraries',
      'Figma Interactive Prototyping & Wireframing',
      'User Journey Mapping & Usability Audits',
      'WCAG 2.1 AA Accessibility Compliance',
      'Micro-Interactions & Animation Design'
    ],
    gradient: 'from-lime-400 via-blue-600 to-cyan-500'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'fintech-core',
    title: 'FinTech Real-Time Payment Gateway & Core Banking Transformation',
    client: 'Apex FinTech Solutions',
    industry: 'Financial Technology',
    category: 'FinTech & Security',
    metrics: [
      { label: 'Transaction Latency', value: '< 45ms' },
      { label: 'Daily Volume', value: 'Rs. 4.2 Cr+' },
      { label: 'System Uptime', value: '99.999%' }
    ],
    description: 'Re-engineered a legacy transaction core into a high-throughput microservices architecture with sub-second fraud detection.',
    challenge: 'Legacy monolithic architecture faced database locks during peak load, causing transaction latency spikes up to 4.2 seconds.',
    solution: 'Ascoryn Tech implemented an event-driven Architecture with Apache Kafka, Redis Cluster, Next.js dashboard, and AI fraud scoring.',
    impact: 'Reduced transaction processing times by 90% while achieving 99.999% uptime during high-volume trading surges.',
    tags: ['Next.js', 'Kafka', 'Redis', 'AWS', 'Bank-Grade Security'],
    imageBg: 'from-blue-900 via-slate-900 to-cyan-950'
  },
  {
    id: 'health-ai-copilot',
    title: 'AI Clinical Diagnostics & Patient Records Automation',
    client: 'BioHealth Dynamics',
    industry: 'Healthcare & Life Sciences',
    category: 'AI Automation',
    metrics: [
      { label: 'Doc Analysis Speed', value: '18x Faster' },
      { label: 'Accuracy Score', value: '99.4%' },
      { label: 'HIPAA Compliance', value: '100% Certified' }
    ],
    description: 'Deployed an HIPAA-compliant AI assistant for clinical documentation, automatically summarizing lab results and patient histories.',
    challenge: 'Physicians were spending over 3 hours daily on manual clinical charting and unstructured electronic health record (EHR) entry.',
    solution: 'Built a fine-tuned RAG medical model with automated HIPAA data masking, instant summaries, and doctor voice transcription.',
    impact: 'Saved doctors 2.5 hours per shift and accelerated diagnosis report generation by 18x.',
    tags: ['Python', 'LLM RAG', 'HIPAA Shield', 'React', 'FastAPI'],
    imageBg: 'from-teal-900 via-slate-900 to-emerald-950'
  },
  {
    id: 'logistics-cloud',
    title: 'Autonomous Supply Chain Fleet Optimization Engine',
    client: 'TransLogistics Express',
    industry: 'Supply Chain & Logistics',
    category: 'Enterprise Cloud',
    metrics: [
      { label: 'Fuel Cost Savings', value: '28%' },
      { label: 'On-Time Deliveries', value: '98.7%' },
      { label: 'Fleet Managed', value: '12,000+ Vehicles' }
    ],
    description: 'Designed a real-time IoT fleet tracking and predictive routing platform handling millions of location updates per minute.',
    challenge: 'Unpredictable delays and sub-optimal route planning led to excessive fuel burn and missed delivery windows.',
    solution: 'Engineered a Kubernetes-backed cloud platform with predictive traffic ML models and dynamic driver dispatching.',
    impact: 'Saved Rs. 6.4 Cr in annual operational expenses and improved customer satisfaction scores to all-time highs.',
    tags: ['Kubernetes', 'Go', 'IoT Gateway', 'PostgreSQL', 'Grafana'],
    imageBg: 'from-lime-950 via-slate-900 to-blue-950'
  },
  {
    id: 'saas-analytics-hub',
    title: 'Enterprise Multi-Tenant Customer Intelligence SaaS',
    client: 'OmniMetric Technologies',
    industry: 'Enterprise Software',
    category: 'Custom SaaS',
    metrics: [
      { label: 'Data Ingestion Rate', value: '100k events/sec' },
      { label: 'User Retention', value: '+62%' },
      { label: 'Page Load Speed', value: '0.4s' }
    ],
    description: 'Built a sleek Next.js analytics platform giving enterprise clients instant visibility into customer product usage metrics.',
    challenge: 'Existing analytics tool was sluggish on complex queries, lagging behind by hours and failing on big data export requests.',
    solution: 'Developed a ClickHouse data warehouse backend paired with a high-performance Next.js 15 front-end and dynamic SVG charting.',
    impact: 'Reduced dashboard query times from 12 seconds to 350ms and supported scaling to 250,000 active monthly users.',
    tags: ['Next.js 15', 'Tailwind CSS', 'ClickHouse', 'TypeScript', 'Node.js'],
    imageBg: 'from-cyan-950 via-slate-900 to-blue-900'
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'Next.js 15', category: 'Frontend', icon: 'Globe', proficiency: 98, popularFor: 'Server Components & SEO Performance' },
  { name: 'React 19', category: 'Frontend', icon: 'Atom', proficiency: 96, popularFor: 'Component Architecture' },
  { name: 'TypeScript', category: 'Frontend', icon: 'Code', proficiency: 99, popularFor: 'Type-Safe Clean Code' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: 'Palette', proficiency: 98, popularFor: 'Modern Dynamic Styling' },
  { name: 'Node.js & Express', category: 'Backend & Cloud', icon: 'Server', proficiency: 95, popularFor: 'Scalable Microservices' },
  { name: 'Python & FastAPI', category: 'Backend & Cloud', icon: 'Terminal', proficiency: 96, popularFor: 'AI/ML & High-Speed APIs' },
  { name: 'Go (Golang)', category: 'Backend & Cloud', icon: 'Cpu', proficiency: 92, popularFor: 'Ultra-Low Latency Systems' },
  { name: 'AWS & GCP Cloud', category: 'Backend & Cloud', icon: 'Cloud', proficiency: 97, popularFor: 'Enterprise Infrastructure' },
  { name: 'PyTorch & OpenAI API', category: 'AI & Data', icon: 'Brain', proficiency: 94, popularFor: 'LLM Fine-Tuning & Agents' },
  { name: 'PostgreSQL & Redis', category: 'AI & Data', icon: 'Database', proficiency: 97, popularFor: 'Relational & In-Memory Storage' },
  { name: 'Pinecone / Vector DB', category: 'AI & Data', icon: 'Layers', proficiency: 93, popularFor: 'Semantic RAG Search' },
  { name: 'Docker & Kubernetes', category: 'DevOps & Cyber', icon: 'Box', proficiency: 95, popularFor: 'Container Orchestration' },
  { name: 'Terraform & CI/CD', category: 'DevOps & Cyber', icon: 'GitBranch', proficiency: 96, popularFor: 'Automated Deployment' },
  { name: 'GitHub Actions', category: 'DevOps & Cyber', icon: 'GitBranch', proficiency: 97, popularFor: 'Automated Workflows' },
  { name: 'Apache Kafka', category: 'Backend & Cloud', icon: 'Layers', proficiency: 94, popularFor: 'Event-Driven Streaming' },
  { name: 'AWS Lambda (Serverless)', category: 'Backend & Cloud', icon: 'Cloud', proficiency: 96, popularFor: 'Auto-Scaling Functions' },
  { name: 'MongoDB & NoSQL', category: 'AI & Data', icon: 'Database', proficiency: 95, popularFor: 'Flexible Document Storage' },
  { name: 'GraphQL & Apollo', category: 'Frontend', icon: 'Atom', proficiency: 93, popularFor: 'Dynamic API Queries' },
  { name: 'FinTech Compliance Guard', category: 'DevOps & Cyber', icon: 'Shield', proficiency: 98, popularFor: 'Bank-Grade Compliance' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aayush Shrestha',
    role: '',
    company: 'Kathmandu',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    content: 'Ascoryn Tech delivered beyond our highest expectations. Their team re-architected our transaction core without a single minute of downtime. The speed, security, and precision they bring is world-class.',
    rating: 5,
    results: '99.999% Uptime & 90% Latency Cut'
  },
  {
    id: '2',
    name: 'Dr. Prerana Adhikari',
    role: '',
    company: 'Lalitpur',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    content: 'The custom AI diagnostics copilot created by Ascoryn Tech has transformed how our clinicians interact with patient records. Their deep understanding of both AI security and healthcare regulations set them apart.',
    rating: 5,
    results: '18x Faster Diagnostics'
  },
  {
    id: '3',
    name: 'Bikash Pokharel',
    role: '',
    company: 'Bhaktapur',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    content: 'Working with Ascoryn Tech felt like having a powerhouse team of veteran architects in-house. They modernized our cloud fleet systems flawlessly and saved us millions in annual operational overhead.',
    rating: 5,
    results: 'Rs. 6.4 Cr+ Annual Savings'
  }
];

export const CORE_VALUES: CoreValue[] = [
  {
    title: 'Future-Driven Innovation',
    subtitle: 'Always ahead of the curve',
    description: 'We integrate cutting-edge AI, cloud, and modern web frameworks to give our clients an unbeatable competitive advantage.',
    icon: 'Sparkles',
    accent: 'from-cyan-400 to-blue-600'
  },
  {
    title: 'Precision & Velocity',
    subtitle: 'High-speed, zero-bug delivery',
    description: 'Engineering excellence is non-negotiable. We build scalable, type-safe software with continuous integration and clean architecture.',
    icon: 'Zap',
    accent: 'from-blue-600 to-lime-400'
  },
  {
    title: 'Uncompromising Trust',
    subtitle: 'Security & compliance first',
    description: 'Your enterprise assets, IP, and customer data are safeguarded with bank-grade security architecture and encryption.',
    icon: 'Shield',
    accent: 'from-lime-400 to-emerald-600'
  },
  {
    title: 'Client Growth Acceleration',
    subtitle: 'Measurable impact',
    description: 'We don’t just write code; we drive ROI, boost throughput, and ensure long-term tech sustainability.',
    icon: 'TrendingUp',
    accent: 'from-emerald-500 to-cyan-400'
  }
];

export const COMPANY_STATS = [
  { label: 'Successful Projects', value: '25+' },
  { label: 'Client Satisfaction', value: '98%' },
  { label: 'Enterprise Clients', value: '15+' },
  { label: 'In-House Tech Experts', value: '12+' }
];


export const FAQS = [
  {
    question: 'How quickly can Ascoryn Tech start our project?',
    answer: 'We can assemble a dedicated team of specialist architects, software engineers, and designers within 3 to 5 business days following initial consultation and scope alignment.'
  },
  {
    question: 'Does Ascoryn Tech provide post-launch support and SRE monitoring?',
    answer: 'Yes! We offer 24/7 SRE monitoring, automated incident resolution, security patching, and ongoing feature development SLAs to keep your systems running flawlessly.'
  },
  {
    question: 'How does Ascoryn Tech ensure data security and compliance?',
    answer: 'We implement bank-grade security principles, end-to-end encryption in transit and at rest, automated security scanning, and assist with SOC2, ISO27001, and HIPAA compliance verification.'
  },
  {
    question: 'Can you work with our existing in-house development team?',
    answer: 'Absolutely. We regularly operate in hybrid augmented team models, co-engineering alongside your lead developers or taking ownership of key sub-systems.'
  }
];
