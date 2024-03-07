import Navbar from "@/components/Navbar";
import axios from "axios";
import ProjectCard from "../components/ProjectCard";
import { RecoilRoot } from "recoil";

const getRepos = async () => {
  const response = await axios.get(
    "https://api.github.com/search/repositories?q=topic:v-app+user:Vishesh-Pandey"
  );
  return response.data.items;
};

export default async function Home() {
  const projects = await getRepos();

  return (
    <>
      <main className="">
        <Navbar />
        {projects.map((project: any) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </main>
    </>
  );
}
