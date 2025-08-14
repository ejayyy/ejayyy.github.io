"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageModal from "@/components/ImageModal";
import { Project, ProjectImage } from "@/lib/projects";

interface ProjectDetailContentProps {
  project: Project;
}

interface SectionProps {
  title: string;
  items: readonly string[];
}

function ProjectSection({ title, items }: SectionProps) {
  if (!items.length) return null;

  return (
    <section>
      <h2 className="text-2xl my-0">{title}</h2>
      <ul className="list-inside space-y-2">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function ImageGallery({
  images,
  onImageClick,
}: {
  images: readonly ProjectImage[];
  onImageClick: (index: number) => void;
}) {
  if (!images.length) return null;

  return (
    <section className="mb-8">
      <div
        className={`grid gap-4 ${
          images.length === 1
            ? "grid-cols-1 max-w-xs mx-auto"
            : images.length === 2
            ? "grid-cols-1 md:grid-cols-2"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {images.map((image, index) => (
          <div key={index} className="group relative">
            <div
              className={`relative cursor-pointer overflow-hidden rounded-lg ${
                images.length === 1 ? "aspect-[4/3]" : "aspect-video"
              }`}
              onClick={() => onImageClick(index)}
            >
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                  </div>
                }
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </Suspense>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 dark:bg-gray-800/90 p-3 rounded-full flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {image.caption && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                {image.caption}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const navigateImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const subtitle = project.subtitle || (project as any).sub;

  return (
    <div className="flex flex-col gap-6">
      <nav>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-1 text-sm"
        >
          ← Back
        </Link>
      </nav>

      <header className="mb-4">
        <h1 className="font-bold mt-0">{project.title}</h1>
        {subtitle && (
          <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
        )}
        <div className="mt-4 flex items-center gap-2 flex-wrap">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="text-white text-sm bg-neutral-500 dark:bg-neutral-600 p-2 rounded-lg leading-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </header>
      <ImageGallery images={project.images || []} onImageClick={openModal} />
      <ProjectSection
        title="개요"
        items={project.description}
      />
      <ProjectSection title="과제" items={project.challenges || []} />
      <ProjectSection title="해결" items={project.solutions || []} />
      <ProjectSection title="결과" items={project.results || []} />
      {selectedImageIndex !== null &&
        project.images &&
        project.images[selectedImageIndex] && (
          <ImageModal
            image={project.images[selectedImageIndex]!}
            isOpen={true}
            onClose={closeModal}
            images={project.images || []}
            currentIndex={selectedImageIndex}
            onNavigate={navigateImage}
          />
        )}
    </div>
  );
}
