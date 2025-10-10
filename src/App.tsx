import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Brain, Database, Globe, Sparkles, Award, Download, MessageCircle, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/zaidlaiq99@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Contact from ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923218712730', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>

      <header className="fixed top-0 left-0 right-0 glass-effect z-50 border-b border-white/10">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif gradient-text font-bold">Zaid Ahmed</h1>
          <div className="flex gap-8">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110">About</a>
            <a href="#experience" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110">Experience</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110">Projects</a>
            <a href="#skills" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110">Skills</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110">Contact</a>
          </div>
        </nav>
      </header>

      <main className="pt-20 relative z-10">
        <section className="min-h-[85vh] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent"></div>
          <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
            <div className="animate-float mb-8">
              <Sparkles className="w-16 h-16 text-cyan-400 mx-auto mb-6 animate-glow" />
            </div>
            <h2 className="text-7xl font-serif gradient-text mb-6 font-bold">Zaid Ahmed</h2>
            <p className="text-3xl text-cyan-400 mb-8 font-light tracking-wide">AI/ML Engineer & Full-Stack Developer</p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              Passionate about solving real-world problems through innovative AI/ML solutions and full-stack development.
              Currently pursuing BS in Artificial Intelligence with hands-on experience in machine learning, natural language processing, and web technologies.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/Zaid_Ahmed_CV.pdf" download className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                <Download size={20} className="group-hover:animate-bounce" />
                Download CV
              </a>
              <a href="https://github.com/zaid783" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 glass-effect text-cyan-400 rounded-lg border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/zaid-ahmed-b56a33218/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-8 py-4 glass-effect text-cyan-400 rounded-lg border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 relative">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-5xl font-serif gradient-text mb-16 text-center font-bold">About Me</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] group">
                <h4 className="text-3xl font-serif text-cyan-400 mb-6 group-hover:scale-105 transition-transform duration-300">Education</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-cyan-500/50 pl-6 hover:border-cyan-400 transition-colors duration-300">
                    <h5 className="text-xl font-semibold text-white">BS Artificial Intelligence</h5>
                    <p className="text-slate-300">Karachi Institute of Economics and Technology</p>
                    <p className="text-slate-400 text-sm">Feb 2022 - Present</p>
                  </div>
                  <div className="border-l-2 border-cyan-500/50 pl-6 hover:border-cyan-400 transition-colors duration-300">
                    <h5 className="text-xl font-semibold text-white">Pre-Engineering</h5>
                    <p className="text-slate-300">St Patrick's College</p>
                    <p className="text-slate-400 text-sm">2019 - 2021</p>
                  </div>
                </div>
              </div>
              <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] group">
                <h4 className="text-3xl font-serif text-cyan-400 mb-6 group-hover:scale-105 transition-transform duration-300">Contact</h4>
                <p className="text-slate-300 leading-relaxed mb-6">
                  AI/ML enthusiast skilled in Python, Data Science, and Web Technologies, aiming to solve real-world problems through full-stack innovation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                    <MapPin size={18} className="text-cyan-400" />
                    <span>Karachi, Sindh, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                    <Mail size={18} className="text-cyan-400" />
                    <span>zaidlaiq99@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors duration-300">
                    <Phone size={18} className="text-cyan-400" />
                    <span>+92 3162324937</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 relative">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-5xl font-serif gradient-text mb-16 text-center font-bold">Experience</h3>
            <div className="space-y-8">
              <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-2">Software Engineer Faculty Member</h4>
                    <p className="text-cyan-400">Aptech Learning North Nazimabad</p>
                  </div>
                  <span className="text-slate-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full">Dec 2024 - Sep 2025</span>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Delivered lectures and hands-on training on frontend web technologies including HTML5, CSS, and JavaScript</li>
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Mentored students on industry trends and project execution techniques</li>
                </ul>
              </div>

              <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-2">Software Developer Internship</h4>
                    <p className="text-cyan-400">Elektro Control Industries (PVT)</p>
                  </div>
                  <span className="text-slate-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full">Aug 2024 - Oct 2024</span>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Assisted in development and debugging of industrial software applications</li>
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Collaborated with senior developers to integrate backend logic with user interfaces</li>
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Strengthened understanding of software lifecycle, version control, and team collaboration</li>
                </ul>
              </div>

              <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-2">Machine Learning Internship</h4>
                    <p className="text-cyan-400">TechnoHacks EduTech Official</p>
                  </div>
                  <span className="text-slate-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full">Sep 2023 - Oct 2023</span>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Developed scalable and accurate predictive models using Python and TensorFlow</li>
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Tuned and optimized ML models for high performance, improving accuracy and reliability</li>
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Gained hands-on experience with supervised learning and data preprocessing pipelines</li>
                </ul>
              </div>

 <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
<div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-2">Angular JS & NEST JS Developer</h4>
                    <p className="text-cyan-400">ERP WALLET</p>
                  </div>
                  <span className="text-slate-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full">Sep 2025 - Present</span>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Developed modular Angular components and integrated NestJS APIs with secure JWT authentication for real-time data management.</li>
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Implemented server-side search, filtering, and pagination to optimize performance and scalability.</li>
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Enhanced UI/UX with responsive layouts, reusable designs, and interactive data views for smooth user experience.</li>
                </ul>
              </div>
            </div>
<br></br>
              <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-2xl font-semibold text-white mb-2">Research Department Internship</h4>
                    <p className="text-cyan-400">WeAlif & Tajob</p>
                  </div>
                  <span className="text-slate-400 text-sm bg-slate-800/50 px-4 py-2 rounded-full">Aug 2023 - Oct 2023</span>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex gap-3 hover:text-cyan-300 transition-colors duration-300"><span className="text-cyan-400 font-bold">•</span> Conducted extensive data research and analysis from multiple sources</li>
                </ul>
              </div>
            </div>
        </section>

        <section id="projects" className="py-20 relative">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-5xl font-serif gradient-text mb-16 text-center font-bold">Featured Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="glass-effect rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] group">
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h4 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">Machine Translation Using NLP</h4>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Built a seq2seq translation pipeline with custom tokenization and embedding layers using Python NLP.
                  Designed preprocessing and evaluation modules to ensure performance and reliability.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Python</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">NLP</span>
                </div>
                <a href="https://github.com/zaid783/Machine_Translation-Using-NLP." className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group-hover:gap-4">
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] group">
                <div className="flex items-center gap-4 mb-6">
                  <Code className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h4 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">TSP Problem Using ACO & Cuckoo Search</h4>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Developed a hybrid ACO and Cuckoo Search solver for the TSP problem.
                  Integrated adaptive pheromone updates and levy flight to enhance optimization and scalability.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Python</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Swarm Intelligence</span>
                </div>
                <a href="https://github.com/zaid783/TSP_Problem_Using_ACO-Cuckoo-Search" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group-hover:gap-4">
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] group">
                <div className="flex items-center gap-4 mb-6">
                  <Database className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h4 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">Machine Learning Models</h4>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Implemented various ML models using Scikit-learn and evaluated them across multiple datasets.
                  Built automated pipelines for model selection and performance comparison.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Python</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Scikit-learn</span>
                </div>
                <a href="https://github.com/zaid783/MACHINE-LEARNING-MODELS" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group-hover:gap-4">
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>

              <div className="glass-effect rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] group">
                <div className="flex items-center gap-4 mb-6">
                  <Brain className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h4 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">Artificial Neural Networks</h4>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Built a customizable ANN framework using TensorFlow/Keras for classification tasks.
                  Used TensorBoard for real-time visualization of training metrics and model performance.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Python</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">TensorFlow</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Keras</span>
                </div>
                <a href="https://github.com/zaid783/Artificial-Neural-Networks" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group-hover:gap-4">
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>


<div className="glass-effect rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] group">
                <div className="flex items-center gap-4 mb-6">
                  <Database className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h4 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">AI Robot Path Planner using Deep Q-Network (DQN)</h4>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Smart grid-based robot path planning using Deep Q-Learning. Learns optimal routes with rewards, interactive Streamlit UI, and live simulations.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Python</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">TensorFlow / Keras</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Streamlit</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Matplotlib </span>
                </div>
               <a href="https://github.com/zaid783/AI-Robot-Path-Planner-DQN-" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group-hover:gap-4">
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>

<div className="glass-effect rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] group">
                <div className="flex items-center gap-4 mb-6">
                  <Database className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h4 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">No Code ML Trainer WebApp</h4>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  A web-based no-code machine learning trainer that allows users to upload datasets, automatically build, and evaluate ML models through an interactive interface. It automates data preprocessing, model selection, and performance visualization — making machine learning accessible without coding.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Python</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">scikit-learn/ seaborn/ Pandas</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Streamlit</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Matplotlib </span>
                </div>
                 <a href="https://github.com/zaid783/AutoML-Web-Trainer" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group-hover:gap-4">
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>



              <div className="glass-effect rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] group">
                <div className="flex items-center gap-4 mb-6">
                  <Database className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" size={32} />
                  <h4 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">NestJS Angular User CRUD</h4>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                 A complete full-stack application built with NestJS backend and Angular frontend. This project features a comprehensive user management system with file upload functionality.
                </p>
                <div className="flex gap-2 flex-wrap mb-6">
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">NestJS - Progressive Node.js framework for building APIs</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">MikroORM - TypeScript ORM for database operations</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">PostgreSQL - Powerful open-source relational database</span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Multer - File upload handling </span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Swagger - API documentation and testing </span>
                  <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">TypeScript - Type-safe JavaScript </span>
                   <span className="px-4 py-2 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30">Angular - Web application framework </span>
                </div>
                 <a href="https://github.com/zaid783/nestjs-angular-user-crud" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 group-hover:gap-4">
                  <ExternalLink size={18} />
                  View Project
                </a>
              </div>

              
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 relative">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-5xl font-serif gradient-text mb-16 text-center font-bold">Skills & Expertise</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-effect p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] group">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 group-hover:text-cyan-300 transition-colors duration-300">
                  <Code size={24} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  Programming
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Python</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">JavaScript</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">NEST JS</li>
                </ul>
              </div>
              <div className="glass-effect p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] group">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 group-hover:text-cyan-300 transition-colors duration-300">
                  <Globe size={24} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  Web Technologies
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">HTML & CSS</li>
                 
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Flask & Django</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Tkinter</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Angular Js</li>
                </ul>
              </div>
              <div className="glass-effect p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] group">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 group-hover:text-cyan-300 transition-colors duration-300">
                  <Brain size={24} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  AI/ML
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">TensorFlow</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Scikit-learn</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">NLP</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Computer Vision</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Swarm Intelligence</li>
                </ul>
              </div>
              <div className="glass-effect p-6 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] group">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 group-hover:text-cyan-300 transition-colors duration-300">
                  <Database size={24} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
                  Tools & Others
                </h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Git & GitHub</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Data Science</li>
                  <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">Machine Learning</li>
                   <li className="hover:text-cyan-400 transition-colors duration-300 cursor-default">SQL</li>
                </ul>
              </div>
            </div>

            <div className="mt-20">
              <h4 className="text-3xl font-serif text-cyan-400 mb-8 text-center flex items-center justify-center gap-3">
                <Award className="animate-float" size={32} />
                Certifications
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="glass-effect p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transform hover:scale-105">
                  <p className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Introduction to Python - DATACAMP</p>
                </div>
                <div className="glass-effect p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transform hover:scale-105">
                  <p className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Intermediate Python - DATACAMP</p>
                </div>
                <div className="glass-effect p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transform hover:scale-105">
                  <p className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Introduction to Generative AI - Google Cloud</p>
                </div>
                <div className="glass-effect p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transform hover:scale-105">
                  <p className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Understanding Artificial Intelligence - DATACAMP</p>
                </div>
                <div className="glass-effect p-5 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transform hover:scale-105">
                  <p className="text-slate-300 hover:text-cyan-300 transition-colors duration-300">Intro to Machine Learning - KAGGLE</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 relative">
          <div className="max-w-4xl mx-auto px-6">
            <h3 className="text-5xl font-serif gradient-text mb-8 text-center font-bold">Get In Touch</h3>
            <p className="text-lg text-slate-300 mb-12 text-center leading-relaxed">
              Interested in collaborating or have a project in mind? Feel free to reach out.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-16">
              <a href="mailto:zaidlaiq99@gmail.com" className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] justify-center">
                <Mail size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Email Me
              </a>
              <button onClick={handleWhatsAppClick} className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] justify-center">
                <MessageCircle size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                WhatsApp
              </button>
              <a href="https://www.linkedin.com/in/zaid-ahmed-b56a33218/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 glass-effect text-cyan-400 rounded-lg border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 justify-center">
                <Linkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                LinkedIn
              </a>
              <a href="https://github.com/zaid783" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-8 py-4 glass-effect text-cyan-400 rounded-lg border-2 border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105 justify-center">
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </a>
            </div>

            <div className="glass-effect p-8 rounded-2xl border border-cyan-500/20">
              <h4 className="text-2xl font-serif text-cyan-400 mb-6 text-center">Send Me a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-slate-300 mb-2">Your Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send size={20} className={isSubmitting ? 'animate-pulse' : ''} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">Message sent successfully! I'll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center">Failed to send message. Please try again or email me directly.</p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 bg-slate-900/50 backdrop-blur-sm border-t border-cyan-500/20 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-slate-400">© 2025 Zaid Ahmed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
