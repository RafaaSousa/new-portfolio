"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "../cv.pdf";
  link.download = "cv.pdf";
  link.click();
};

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desenvolvedor Full Stack</span>
            <h1 className="h1 mb-6">
              Olá, sou <br /> <span className="text-accent">Rafael Sousa</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-justify">
              Desenvolvedor apaixonado por transformar ideias em soluções
              completas, com especialização em React.js e Next.js e foco em me
              tornar Full Stack. Crio interfaces inovadoras e sistemas backend
              robustos, entregando experiências digitais que encantam e geram
              valor.
            </p>
            {/* btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                  onClick={handleDownloadCV}
                >
                  <span>Baixar CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
