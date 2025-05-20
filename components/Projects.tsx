import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BsBoxArrowUpRight } from "react-icons/bs";
import SlideUp from "./SlideUp";

const projects = [
  {
    name: "PokeTeamPlanner",
    description:
      "Pokemon Team Optimization using Comparitive Analysis",
    image: "/Poke-Team-Analysis.png",
    github: "https://github.com/JawwadK/pokemon-team-analysis",
    link: "https://pokemon-team-analysis.vercel.app/",
    technologies: ["NextJS", "TypeScript", "React", "PokeAPI"],
    featured: true,
  },
  {
    name: "Braum.GG",
    description: "League of Legends Analytics Tool",
    image: "/Braum.GG.png",
    github: "https://github.com/JawwadK/braum.gg",
    link: "https://braum-gg.vercel.app/",
    technologies: ["NextJS", "TypeScript", "React", "League of Legends API"],
    featured: true,
  },
  {
    name: "Jawwad-bot",
    description: "Multi-functioning Discord Bot made with Discord.py ",
    image: "/Jawwad-bot.png",
    github: "https://github.com/JawwadK/jawwad-bot",
    link: "https://discord.com/oauth2/authorize?client_id=1298008645354782773",
    technologies: ["Python", "Discord.py", "Google Cloud Platform"],
    featured: true,
  },
  {
    name: "Twxt",
    description: "PoC app made for Cooperathon Innovation Challenge",
    image: "/twxt.png",
    github: "https://github.com/JawwadK/twxt",
    link: "https://twxt.vercel.app/",
    technologies: ["NextJS", "TypeScript", "React"],
    featured: false,
  },
  {
    name: "FitIn",
    description:
      "A fitness-focused social media platform enabling users to share workout progress, track routines, and post progress pictures.",
    image: "/FitInLogin.png",
    github: "https://github.com/JawwadK/cps714-fitin",
    link: "https://fitin.web.app/",
    technologies: ["React", "Firebase", "Node.js", "Express"],
    featured: true,
  },
  {
    name: "Covid-19 Death Analysis",
    description:
      "Analysis of Covid-19 mortality rates comparing vaccination status across age groups, with interactive visualizations.",
    image: "/Covid-19-Death-Analysis.png",
    github: "https://github.com/JawwadK/pokedexProto",
    link: "https://jawwadk.github.io/pokedexProto/",
    technologies: ["Python", "Pandas", "Matplotlib", "Data Analysis"],
    featured: true,
  },
  {
    name: "Movie Finder",
    description:
      "Movie recommendation system using content-based & collaborative filtering for personalized suggestions.",
    image: "/Movie-Finder.png",
    github: "https://github.com/JawwadK/movie-finder",
    link: "https://cps842-movie-ratings.web.app/",
    technologies: ["React", "Firebase", "Machine Learning"],
    featured: true,
  },
  {
    name: "Inventory Tracker",
    description:
      "Inventory management system with real-time tracking and admin controls for product management.",
    image: "/Inventory-Tracker.png",
    github: "https://github.com/JawwadK/inventory-tracker",
    link: "https://inventory-track.web.app/login",
    technologies: ["React", "Firebase", "TypeScript"],
    featured: false,
  },
  {
    name: "PhotoDisplayer",
    description:
      "Large-scale image hosting platform with advanced filtering capabilities.",
    image: "/PhotoRenderer.png",
    github: "https://github.com/JawwadK/photo-repo",
    link: "https://coolphotodisplayer.netlify.app/",
    technologies: ["React", "JavaScript", "CSS"],
    featured: false,
  },
  {
    name: "PokedexProto",
    description:
      "Interactive Pokedex application displaying detailed Pokemon information and stats.",
    image: "/PokedexProto.png",
    github: "https://github.com/JawwadK/pokedexProto",
    link: "https://jawwadk.github.io/pokedexProto/",
    technologies: ["JavaScript", "HTML", "CSS"],
    featured: false,
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = activeFilter === "featured" 
    ? projects.filter(p => p.featured)
    : projects;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center font-bold text-4xl mb-8">
          Projects
          <hr className="w-6 h-1 mx-auto my-4 bg-cyan-900 border-0 rounded-full" />
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-cyan-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveFilter("featured")}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === "featured"
                ? "bg-cyan-900 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Featured
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <SlideUp key={idx} offset="-300px 0px -300px 0px">
              <div
                className="group relative bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Hover Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link 
                      href={project.github}
                      target="_blank"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      <FaGithub className="text-white text-2xl" />
                    </Link>
                    <Link 
                      href={project.link}
                      target="_blank"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300"
                    >
                      <BsBoxArrowUpRight className="text-white text-2xl" />
                    </Link>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;