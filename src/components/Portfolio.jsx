import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, ArrowLeft } from 'lucide-react';
import profileImg from '../assets/profile.webp';
import chattyImg from '../assets/chatty.webp';
import gitChattyImg from '../assets/gitChatty.webp';
import chattyImg2 from '../assets/chattyImg.webp';
import clickerGit from '../assets/clickerGit.webp';
import clickerImg from '../assets/clicker.webp';
import clickerImg2 from '../assets/clickerMenu.webp';
import lifeMain from '../assets/lifeMain.webp';
import lifeForm from '../assets/lifeForm.webp';
import lifeImg from '../assets/life.webp';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const projects = [
    {
      id: 1,
      title: "Chatty - Plateforme de Discussion",
      description: "Chatty est une plateforme de messagerie instantanée, offrant des channels publics et des salons privés personnalisables. Réalisée avec mon binome d'étude.",
      longDescription: "Chatty est une application web de messagerie instantanée moderne qui révolutionne la façon dont nous communiquons en ligne. Développée avec React et Vite pour des performances optimales, cette plateforme offre une expérience utilisateur fluide et intuitive.\n\nL'application se distingue par sa double approche de la communication : des channels publics ouverts à tous pour favoriser les discussions communautaires, et des salons privés entièrement personnalisables pour les échanges intimes entre amis. Cette flexibilité permet aux utilisateurs de naviguer facilement entre conversations publiques et privées selon leurs besoins.\n\nL'interface utilisateur, soigneusement crafted avec SCSS, offre un design moderne et responsive qui s'adapte parfaitement à tous les appareils. Les fonctionnalités temps réel permettent des échanges instantanés, créant une véritable sensation de présence et d'interaction naturelle.",
      tech: ["React", "Firebase", "SCSS", "JavaScript", "Vite"],
      features: [
        "Messagerie temps réel",
        "Channels publics et privés",
        "Interface responsive",
        "Gestion des utilisateurs",
        "Design moderne avec SCSS"
      ],
      image: chattyImg,
      gallery: [
        gitChattyImg,
        chattyImg2,
        chattyImg
      ],
      demoLink: "https://chatty-test.netlify.app/lobby", 
      status: "Terminé",
      githubLink: "https://chatty-test.netlify.app/lobby"
    },

        {
      id: 2,
      title: "Lifeguard - Mission pour une EHPAD",
      description: "Lifeguard est un prototype web de suivi médical connecté. Il permet au personnel soignant de consulter en temps réel les données de santé des résidents d’un EHPAD grâce à un bracelet connecté.",
      longDescription: "Lifeguard est un prototype web innovant dédié à la gestion d’un bracelet connecté pensé pour améliorer le suivi de santé des résidents en EHPAD. Développé dans le cadre de notre BTS SNIR, ce projet combine objets connectés, interface web moderne et transmission de données à faible consommation via LoRaWan, pour proposer une solution fiable et intuitive à destination du personnel soignant.\n\n L’application repose sur une architecture robuste mêlant PHP et MySQL pour la gestion des données médicales centralisées, tandis que le frontend en HTML, SCSS et JavaScript assure une interface fluide, responsive et facile à utiliser. Chaque composant a été pensé pour répondre aux besoins concrets du terrain : consultation rapide des indicateurs de santé, suivi d’activité, alertes en temps réel, et historique consultable.\n\n Le bracelet, programmé en C++, envoie les données des résidents à une base distante via LoRaWan, garantissant une autonomie énergétique maximale, essentielle en environnement médical.\n\n Ce prototype illustre les fondations d’un système de santé connecté, alliant technologie embarquée, gestion de données sécurisée et accessibilité web, et constitue une base prometteuse pour des déploiements futurs dans le domaine médico-social.",
      tech: ["Javascript", "LoRaWan", "SCSS", "SQL", "PHP", "MySQL", "C++", "HTML"],
      features: [
        "Création de compte",
        "Base de données sécurisée",
        "Gestion des capteurs LoRaWan",
        "Notifications en temps réel",
        "Gestion des utilisateurs",
        "Interface responsive",
        "Gestion des alertes",
        "Formulaire de contact",
      ],
      image: lifeMain,
      gallery: [
        lifeMain,
        lifeForm,
        lifeImg
      ],
      demoLink: "https://docs.google.com/presentation/d/1sxmyi9EkvHy_a6a0vmTG9LLWwdOh1-IQrteCOuRbnaM/edit?usp=sharing", 
      status: "Terminé",
      githubLink: "https://github.com/JamelRabla/ProjetBTS_EHPAD",
    },

        {
      id: 3,
      title: "Clicker Game - Ichiraku Clicker",
      description: "Ichiraku Clicker est un jeu de clics incrémental développé en BTS sur l'univers de Naruto, avec système de bonus & multiplicateurs pour devenir le plus puissant shinobi du village.",
      longDescription: "Naruto Clicker Game est un jeu de type idle clicker développé durant ma formation BTS, inspiré de l'univers emblématique du manga Naruto.\n\n Ce projet combine ma passion pour les mangas avec mes compétences en développement web pour créer une expérience ludique et addictive.lics répétitifs permettant au joueur d'accumuler des points d'expérience ninja. Chaque clic représente un entraînement du personnage, fidèle à l'esprit de persévérance et de dépassement de soi cher à l'univers de Naruto.\n\n L'objectif est de progresser continuellement en augmentant son score et en débloquant de nouvelles fonctionnalités. Le jeu intègre un système de bonus dynamiques qui s'activent aléatoirement, offrant des récompenses temporaires pour booster l'accumulation de points. Ces bonus créent des moments d'excitation et incitent le joueur à maintenir son engagement. Le système de multiplicateurs permet d'augmenter exponentiellement les gains, créant une progression satisfaisante et une sensation de montée en puissance caractéristique des jeux de type clicker.\n\n L'interface utilisateur reprend les codes visuels de l'univers Naruto avec une esthétique fidèle au manga, créant une immersion totale pour les fans de la série. La simplicité du gameplay, centrée sur ces trois mécaniques essentielles clics, bonus, multiplicateurs, démontre une compréhension des fondamentaux du game design et de l'expérience utilisateur. Ce projet illustre ma capacité à concevoir et développer une application interactive complète, en utilisant les technologies web apprises en BTS tout en créant une expérience utilisateur engageante et divertissante.",
      tech: ["Javascript", "HTML", "CSS"],
      features: [
        "Accumulation de points",
        "Système de bonus",
        "Interface responsive",
        "Multiplicateurs de gains",
        "Design inspiré de Naruto"
      ],
      image: clickerImg,
      gallery: [
        clickerGit,
        clickerImg,
        clickerImg2
      ],
      demoLink: "https://github.com/JamelRabla/Ichiraku-Clicker-Game?tab=readme-ov-file", 
      status: "Terminé",
      githubLink: "https://github.com/JamelRabla/Ichiraku-Clicker-Game?tab=readme-ov-file"
    },
  ];

  const openProject = (project) => {
    setSelectedProject(project);
    setCurrentView('project');
    window.scrollTo({ top: 0});
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentView('home');
    window.location.reload ();
  };

  const ProjectDetail = ({ project }) => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex items-center mb-8">
          <button 
            onClick={closeProject}
            className="flex items-center text-purple-400 hover:text-purple-300 transition-colors mr-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux projets
          </button>
          <span className={`px-3 py-1 rounded-full text-sm ${
            project.status === 'Terminé' 
              ? 'bg-green-600/20 text-green-400' 
              : 'bg-yellow-600/20 text-yellow-400'
          }`}>
            {project.status}
          </span>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-white/80 mb-8 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tech.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-purple-600/20 rounded-full text-purple-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <a 
              href={project.demoLink}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Voir la démo
            </a>
            <a 
              href={project.githubLink}
              className="flex items-center px-6 py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300" 
            >
              <Github className="w-5 h-5 mr-2" />
              Code source
            </a>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Aperçu</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300">
                <img 
                  src={image} 
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Description détaillée</h2>
            <div className="text-white/80 leading-relaxed space-y-4">
              {project.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Fonctionnalités</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const skills = [
    { name: "Frontend", icon: Code, items: ["React", "SCSS", "Blazor", "Tailwind CSS", "Typescript"] },
    { name: "Backend", icon: Zap, items: ["Node.js", "ASP.NET", "C#", "SQL", "Python", "PHP"] },
    { name: "DevOps & Cloud", icon: Palette, items: ["Docker", "Azure", "CI/CD", "Git"] }
  ];

  if (currentView === 'project' && selectedProject) {
    return <ProjectDetail project={selectedProject} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'projects', 'contact', 'CV'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-purple-400 ${
                    activeSection === section ? 'text-purple-400' : 'text-white/80'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>


      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="text-center z-10 px-6">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1 mb-6 animate-bounce">
              <img 
                src={profileImg}
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Alternant
            </h1>
            <h2 className="text-3xl md:text-4xl mb-6 text-white/90">
              Futur Ingénieur & Développeur 
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Étudiant développeur passionné par .NET et React, je recherche une alternance pour contribuer à vos projets innovants
            </p>
          </div>
                <div className="flex justify-center space-x-6 mb-12">
                    <a href="https://github.com/JamelRabla" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110" target="_blank">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/jamel-rabla/" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110" target="_blank">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:jamelrablapro@gmail.com" className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110" target="_blank" >
                        <Mail className="w-6 h-6" />
                    </a>
                </div>
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              À Propos
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-white/80 leading-relaxed">
                  Futur Ingénieur ISEN passionné par l'innovation tech ! 
                  Je recherche une alternance pour transformer mes compétences en .NET, React et Azure en solutions business concrètes au sein d'une équipe Agile.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Passionné par les technologies Microsoft et le développement moderne, 
                  j'ai acquis une expertise en React, .NET et Azure. Autonome et rigoureux, 
                  je suis motivé à contribuer à des projets innovants.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["API Rest", "Entity Framework", "Bash", "Windows Server", "C++"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-purple-600/20 rounded-full text-purple-300 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <skill.icon className="w-8 h-8 text-purple-400 mr-3" />
                      <h3 className="text-xl font-semibold">{skill.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span key={item} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Projets
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="group bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openProject(project)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 bg-white/20 rounded-full">
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm text-purple-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="CV" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.CV ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Mon CV
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Découvrez mon parcours et mes compétences en détail.
            </p>
            <a 
              href="" 
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
              target="_blank"
            >
              Télécharger le CV
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contactez-moi !
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Étudiant développeur passionné par .NET et React, je recherche une alternance pour contribuer à vos projets innovants
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:contact@exemple.com"
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Envoyer un email
              </a>
              <a 
                href="https://linkedin.com"
                className="flex items-center justify-center px-8 py-4 bg-white/10 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-105"
               target="_blank">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 bg-black/30 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-white/60">
          <p>&copy; 2025 Portfolio. Créé avec passion et React.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
