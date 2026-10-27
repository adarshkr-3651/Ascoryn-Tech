export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  category: 'Full Stack' | 'AI & Automations' | 'Fintech' | 'Cloud DevOps';
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
  category: 'Full Stack' | 'AI & Automations' | 'Fintech' | 'Cloud DevOps';
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
  // 1. Full Stack Pillar
  {
    id: 'custom-software',
    title: 'Full-Stack Enterprise Software',
    shortDesc: 'Custom Web & Mobile applications engineered for high performance, intuitive UX, and rapid scalability.',
    fullDesc: 'From high-throughput SaaS suites to enterprise customer portals, we engineer pixel-perfect, scalable digital products leveraging Next.js, Node.js, Python, Go, and resilient database architectures.',
    iconName: 'Code2',
    category: 'Full Stack',
    metrics: '3x Speed-to-Market Delivery',
    features: [
      'Next.js 15 & React 19 Server Components',
      'Cross-Platform Mobile Apps (iOS & Android)',
      'High-Throughput GraphQL & REST API Gateways',
      'Real-Time WebSocket & Event-Driven Systems',
      'Legacy Modernization & Cloud Migrations'
    ],
    gradient: 'from-cyan-400 via-lime-500 to-blue-600'
  },
  {
    id: 'digital-product-ux',
    title: 'UI/UX & Design Systems',
    shortDesc: 'Deliver immersive, accessible, and conversion-optimized digital experiences tailored to human needs.',
    fullDesc: 'Our product designers create comprehensive tokenized design systems, interactive prototypes, and frictionless user journeys that maximize product adoption and conversion.',
    iconName: 'Layout',
    category: 'Full Stack',
    metrics: '45% Conversion Lift',
    features: [
      'Design System Creation & Tokenized UI Libraries',
      'Interactive Prototyping & Usability Audits',
      'WCAG 2.1 AA Accessibility Standards',
      'Conversion-Optimized Customer Flows',
      'Micro-Interactions & Fluid Animations'
    ],
    gradient: 'from-lime-400 via-blue-600 to-cyan-500'
  },

  // 2. AI & Automations Pillar
  {
    id: 'ai-automation',
    title: 'AI & Intelligent Automations',
    shortDesc: 'Deploy autonomous agents, multi-model LLM pipelines, and end-to-end intelligent workflow automations.',
    fullDesc: 'We architect enterprise-grade AI solutions that automate complex multi-department workflows, power autonomous reasoning agents, and deliver real-time predictive insights with enterprise guardrails.',
    iconName: 'Cpu',
    category: 'AI & Automations',
    metrics: '10x Faster Process Execution',
    features: [
      'Custom LLM Fine-Tuning & Multi-Agent Systems',
      'Autonomous Workflow & Robotic Task Agents',
      'Predictive Analytics & Forecasting Models',
      'Computer Vision & Automated Document Parsing',
      'Enterprise Safety Guardrails & Ethical AI'
    ],
    gradient: 'from-cyan-500 via-blue-600 to-lime-500'
  },
  {
    id: 'enterprise-rag-pipelines',
    title: 'Enterprise RAG & Knowledge Systems',
    shortDesc: 'Turn unstructured internal data into instant, verified cognitive intelligence for your entire workforce.',
    fullDesc: 'Build high-speed semantic retrieval-augmented generation (RAG) engines integrated with vector databases, ensuring zero hallucination and strict multi-tenant access control.',
    iconName: 'Brain',
    category: 'AI & Automations',
    metrics: '99.2% Retrieval Precision',
    features: [
      'Hybrid Dense/Sparse Vector Search Pipelines',
      'Automated OCR & Data Ingestion Workflows',
      'Role-Based Context Permissions & Audit Logs',
      'Local & Air-Gapped Private LLM Deployments',
      'Continuous RAG Evaluation & Latency Tuning'
    ],
    gradient: 'from-teal-500 via-cyan-500 to-blue-600'
  },

  // 3. Fintech Pillar
  {
    id: 'fintech-management-systems',
    title: 'FinTech Core & Asset Management',
    shortDesc: 'Enterprise platforms for real-time portfolio tracking, multi-asset ledgers, and financial reconciliation.',
    fullDesc: 'We build secure FinTech management architectures that provide high-fidelity tracking of digital assets, algorithmic rebalancing, automated double-entry ledger reconciliation, and regulatory compliance.',
    iconName: 'Landmark',
    category: 'Fintech',
    metrics: 'Sub-Second Asset Settlement',
    features: [
      'Real-Time Portfolio & Asset Valuation Engine',
      'Algorithmic Wealth Rebalancing Systems',
      'Double-Entry Automated Ledger Reconciliation',
      'Encrypted Digital Wallets & Custody Integration',
      'Central Bank & Regulatory Audit Reporting'
    ],
    gradient: 'from-blue-600 via-indigo-500 to-purple-600'
  },
  {
    id: 'fintech-data-ai',
    title: 'Financial AI, Fraud & Risk Scoring',
    shortDesc: 'Mitigate risk with sub-second ML fraud detection, dynamic credit scoring, and algorithmic models.',
    fullDesc: 'Empower financial institutions with advanced AI workflows for dynamic credit evaluation, real-time transaction fraud filtering, automated KYC/AML checks, and predictive market intelligence.',
    iconName: 'Wallet',
    category: 'Fintech',
    metrics: '< 45ms Fraud Interception',
    features: [
      'Sub-Second Transaction Fraud Detection',
      'Dynamic Credit Risk & Underwriting Models',
      'Automated KYC / AML Compliance Pipelines',
      'Algorithmic Quants & Backtesting Engines',
      'Real-Time Market Data Ingestion & Streaming'
    ],
    gradient: 'from-teal-500 via-emerald-500 to-lime-500'
  },

  // 4. Cloud DevOps Pillar
  {
    id: 'cloud-transformation',
    title: 'Multi-Cloud Architecture (AWS, GCP, Azure)',
    shortDesc: 'Scale seamlessly with multi-cloud infrastructure, Kubernetes orchestration, and automated CI/CD.',
    fullDesc: 'Our certified cloud architects design resilient, auto-scaling environments across AWS, GCP, and Azure. We optimize cloud spend, eliminate infrastructure bottlenecks, and enforce continuous delivery.',
    iconName: 'CloudLightning',
    category: 'Cloud DevOps',
    metrics: '99.99% Guaranteed Availability',
    features: [
      'Kubernetes & Serverless Container Orchestration',
      'Infrastructure as Code (Terraform / Pulumi)',
      'Multi-Region Disaster Recovery & Geo-Routing',
      'FinOps Cloud Cost Optimization (30-50% Savings)',
      'Automated Zero-Downtime Deployment Pipelines'
    ],
    gradient: 'from-blue-600 via-cyan-500 to-lime-400'
  },
  {
    id: 'sre-devops-automation',
    title: 'Cloud DevOps & 24/7 SRE Monitoring',
    shortDesc: 'Enterprise-grade reliability engineering, automated incident response, and continuous compliance.',
    fullDesc: 'We implement automated CI/CD pipelines, container security, distributed tracing, and 24/7 site reliability engineering (SRE) to ensure your mission-critical systems never fail.',
    iconName: 'Shield',
    category: 'Cloud DevOps',
    metrics: '< 15min Mean Time to Detect',
    features: [
      '24/7 SRE Monitoring & Automated Self-Healing',
      'GitHub Actions & GitLab CI/CD Workflows',
      'Distributed Tracing (OpenTelemetry & Datadog)',
      'Automated Vulnerability & Container Scanning',
      'SOC2, ISO 27001 & PCI-DSS Cloud Hardening'
    ],
    gradient: 'from-indigo-600 via-blue-500 to-cyan-400'
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
  // Full Stack
  { name: 'Next.js 15', category: 'Full Stack', icon: 'Globe', proficiency: 98, popularFor: 'Server Components & High-Speed SEO' },
  { name: 'React 19', category: 'Full Stack', icon: 'Atom', proficiency: 96, popularFor: 'Modern Responsive Component Architecture' },
  { name: 'TypeScript', category: 'Full Stack', icon: 'Code', proficiency: 99, popularFor: 'Type-Safe Robust Enterprise Code' },
  { name: 'Tailwind CSS', category: 'Full Stack', icon: 'Palette', proficiency: 98, popularFor: 'High-Performance Modern Styling' },
  { name: 'Node.js & Express', category: 'Full Stack', icon: 'Server', proficiency: 95, popularFor: 'High-Concurrency Microservices' },
  { name: 'Python & FastAPI', category: 'Full Stack', icon: 'Terminal', proficiency: 96, popularFor: 'Asynchronous High-Speed Backend APIs' },

  // AI & Automations
  { name: 'PyTorch & OpenAI API', category: 'AI & Automations', icon: 'Brain', proficiency: 95, popularFor: 'LLM Fine-Tuning & Multi-Agent Workflows' },
  { name: 'LangChain & Agentic AI', category: 'AI & Automations', icon: 'Cpu', proficiency: 94, popularFor: 'Autonomous Task Automation Pipelines' },
  { name: 'Pinecone & Vector DBs', category: 'AI & Automations', icon: 'Layers', proficiency: 93, popularFor: 'Semantic RAG Knowledge Retrieval' },
  { name: 'Automated OCR & Vision', category: 'AI & Automations', icon: 'Brain', proficiency: 92, popularFor: 'Intelligent Document & Media Processing' },

  // Fintech
  { name: 'FinTech Core Ledger API', category: 'Fintech', icon: 'Landmark', proficiency: 98, popularFor: 'Double-Entry Real-Time Settlement' },
  { name: 'Apache Kafka Event Streams', category: 'Fintech', icon: 'Layers', proficiency: 95, popularFor: 'Low-Latency High-Volume Financial Queues' },
  { name: 'Real-Time Fraud Guard', category: 'Fintech', icon: 'Shield', proficiency: 97, popularFor: 'Sub-Second Anomaly & Transaction Scoring' },
  { name: 'Bank-Grade AES-256 HSM', category: 'Fintech', icon: 'Shield', proficiency: 99, popularFor: 'Encrypted Vault & Custody Infrastructure' },

  // Cloud DevOps
  { name: 'AWS, GCP & Azure Cloud', category: 'Cloud DevOps', icon: 'Cloud', proficiency: 97, popularFor: 'Multi-Region High-Availability Infrastructure' },
  { name: 'Docker & Kubernetes (K8s)', category: 'Cloud DevOps', icon: 'Box', proficiency: 96, popularFor: 'Auto-Scaling Container Orchestration' },
  { name: 'Terraform & Pulumi IaC', category: 'Cloud DevOps', icon: 'GitBranch', proficiency: 96, popularFor: 'Declarative Reproducible Cloud Architecture' },
  { name: 'GitHub Actions CI/CD', category: 'Cloud DevOps', icon: 'GitBranch', proficiency: 97, popularFor: 'Zero-Downtime Automated Deployments' },
  { name: 'PostgreSQL & Redis Cluster', category: 'Cloud DevOps', icon: 'Database', proficiency: 98, popularFor: 'In-Memory Caching & Relational Sharding' },
  { name: '24/7 SRE & OpenTelemetry', category: 'Cloud DevOps', icon: 'Shield', proficiency: 95, popularFor: 'Distributed Tracing & Automated Self-Healing' }
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
    title: 'Full-Stack Velocity',
    subtitle: 'Modern Engineering',
    description: 'We build scalable, pixel-perfect, type-safe full-stack software with Next.js, reactive microservices, and continuous delivery.',
    icon: 'Sparkles',
    accent: 'from-cyan-400 to-blue-600'
  },
  {
    title: 'Autonomous AI Innovation',
    subtitle: 'Intelligent Automations',
    description: 'We deploy cutting-edge AI agents, fine-tuned LLMs, and automated workflow pipelines that give enterprises an unfair advantage.',
    icon: 'Zap',
    accent: 'from-blue-600 to-lime-400'
  },
  {
    title: 'Institutional FinTech Security',
    subtitle: 'Bank-Grade Trust',
    description: 'Your assets, transactions, and user data are protected with bank-grade encryption, double-entry ledgers, and zero-trust policies.',
    icon: 'Shield',
    accent: 'from-lime-400 to-emerald-600'
  },
  {
    title: 'Cloud DevOps & SRE Resilience',
    subtitle: '99.99% Availability',
    description: 'Multi-cloud Kubernetes infrastructure, automated Terraform CI/CD, and 24/7 reliability engineering that scale on demand.',
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
    question: 'What are Ascoryn Tech’s core enterprise capabilities?',
    answer: 'Ascoryn Tech specializes in four foundational pillars: Full-Stack Enterprise Software (Next.js, React, Node, Python), Autonomous AI & Workflow Automations (LLM fine-tuning, multi-agent systems, RAG), FinTech Core Systems (real-time payment settlement, wealth asset management, sub-second fraud detection), and Multi-Cloud DevOps (AWS, GCP, Kubernetes, Terraform IaC, and 24/7 SRE monitoring).'
  },
  {
    question: 'How quickly can Ascoryn Tech launch our project?',
    answer: 'We can deploy a dedicated squad of senior software architects, AI engineers, and DevOps specialists within 3 to 5 business days following scope alignment and technical audit.'
  },
  {
    question: 'How does Ascoryn Tech safeguard financial data and AI compliance?',
    answer: 'We adhere to institutional bank-grade security standards: AES-256 encryption at rest, TLS 1.3 in transit, automated SOC2/ISO 27001 audit preparation, strict role-based access control (RBAC), and private/air-gapped LLM deployments to eliminate data leakage.'
  },
  {
    question: 'Do you provide continuous Cloud DevOps and 24/7 SRE monitoring?',
    answer: 'Yes! We offer 24/7 Site Reliability Engineering (SRE) SLAs, automated incident self-healing, real-time distributed tracing, security patch automation, and proactive FinOps cloud cost optimization.'
  },
  {
    question: 'Can you work with our in-house engineering team?',
    answer: 'Absolutely. We operate in flexible engagement models: full turnkey product engineering, specialized sub-system delivery (e.g., adding an AI automation engine or FinTech ledger), or senior augmented co-engineering alongside your lead developers.'
  }
];
