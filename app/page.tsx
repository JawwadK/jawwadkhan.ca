"use client"
import Content from "@/components/Content"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Technologies from "@/components/Technologies"
import Timeline from "@/components/Timeline"
import "devicon/devicon.min.css";
import Experience from "@/components/Experience"

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <Content />
      <Technologies />
      <Experience />
      <Projects />
    </main>
  );
}
