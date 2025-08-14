"use client";

import React, { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { ProjectImage } from "@/lib/projects";

interface ImageModalProps {
  image: ProjectImage;
  isOpen: boolean;
  onClose: () => void;
  images?: readonly ProjectImage[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
}

export default function ImageModal({ 
  image, 
  isOpen, 
  onClose, 
  images = [], 
  currentIndex = 0, 
  onNavigate 
}: ImageModalProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  
  const hasMultipleImages = images.length > 1;
  const canNavigatePrev = hasMultipleImages && currentIndex > 0;
  const canNavigateNext = hasMultipleImages && currentIndex < images.length - 1;

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (event.key) {
      case "Escape":
        onClose();
        break;
      case "ArrowLeft":
        if (canNavigatePrev && onNavigate) {
          onNavigate(currentIndex - 1);
        }
        break;
      case "ArrowRight":
        if (canNavigateNext && onNavigate) {
          onNavigate(currentIndex + 1);
        }
        break;
    }
  }, [isOpen, onClose, canNavigatePrev, canNavigateNext, currentIndex, onNavigate]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  useEffect(() => {
    if (isOpen) {
      setIsImageLoading(true);
      setImageError(false);
    }
  }, [image.src, isOpen]);

  const handleImageLoad = useCallback(() => {
    setIsImageLoading(false);
  }, []);

  const handleImageError = useCallback(() => {
    setIsImageLoading(false);
    setImageError(true);
  }, []);

  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  const handlePrevious = useCallback(() => {
    if (canNavigatePrev && onNavigate) {
      onNavigate(currentIndex - 1);
    }
  }, [canNavigatePrev, currentIndex, onNavigate]);

  const handleNext = useCallback(() => {
    if (canNavigateNext && onNavigate) {
      onNavigate(currentIndex + 1);
    }
  }, [canNavigateNext, currentIndex, onNavigate]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="image-modal-title"
    >
      <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex flex-col">
        <div className="flex justify-between items-center p-4 text-white">
          <div className="flex-1">
            <h2 id="image-modal-title" className="text-lg font-medium my-0">
              {image.alt}
            </h2>
            {image.caption && (
              <p className="text-sm text-gray-300 mt-1">{image.caption}</p>
            )}
            {hasMultipleImages && (
              <p className="text-sm text-gray-400 mt-1">
                {currentIndex + 1} / {images.length}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white hover:bg-white/20 rounded-full transition-colors"
            aria-label="모달 닫기"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 relative flex items-center justify-center px-4 pb-4">
          {isImageLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          )}
          
          {imageError ? (
            <div className="flex flex-col items-center justify-center text-white">
              <svg className="w-16 h-16 mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <p className="text-lg">이미지를 불러올 수 없습니다</p>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="95vw"
                priority
                onLoad={handleImageLoad}
                onError={handleImageError}
              />
            </div>
          )}

          {hasMultipleImages && !isImageLoading && !imageError && (
            <>
              {canNavigatePrev && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="이전 이미지"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )}
              
              {canNavigateNext && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                  aria-label="다음 이미지"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
