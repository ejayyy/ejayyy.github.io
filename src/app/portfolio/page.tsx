import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { mergeKeywords } from "@/lib/metadata-utils";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "웹 개발 프로젝트 포트폴리오 - PHP, Laravel, Vue.js, Java, Spring을 활용한 다양한 프로젝트 경험",
  keywords: mergeKeywords([
    "portfolio",
    "web development",
    "PHP",
    "Laravel",
    "Vue.js",
    "Java",
    "Spring",
    "프로젝트",
    "포트폴리오",
  ]),
  openGraph: {
    title: "Portfolio",
    description:
      "웹 개발 프로젝트 포트폴리오 - PHP, Laravel, Vue.js, Java, Spring을 활용한 다양한 프로젝트 경험",
    type: "website",
  },
};

export default function Portfolio() {
  return (
    <>
      <h1 className="text-center mb-8">포트폴리오</h1>
      <section className="grid gap-6">
        {projects.map((project, index) => (
          <Link
            href={`/portfolio/${project.slug}`}
            key={index}
            className="group p-6 border border-neutral-300 dark:border-neutral-600 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700"
          >
            <header className="mb-4">
              <h3 className="text-black dark:text-white mt-0 mb-1">
                {project.title}
              </h3>
              {(project.subtitle || (project as any).sub) && (
                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  {project.subtitle || (project as any).sub}
                </p>
              )}
            </header>
            <div className="flex items-center gap-2 flex-wrap">
              {project.technologies.map((tech: string, techIndex: number) => (
                <span
                  key={techIndex}
                  className="text-white text-xs bg-neutral-500 dark:bg-neutral-600 py-1 px-2 rounded-lg leading-none"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
