"use client";

import Navbar from "@/components/navbar/Navbar";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import ProjectCard from "./ui/ProjectCard";

export default function Home() {
  const [projects, setprojects] = useState([]);
  const getRepos = async () => {
    const response = await axios.get(
      "https://api.github.com/search/repositories?q=topic:project+user:Vishesh-Pandey"
    );
    console.log(response);
    setprojects(response.data.items);
  };
  useEffect(() => {
    getRepos();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {projects.map((project: any, index) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </main>
    </>
  );
}
