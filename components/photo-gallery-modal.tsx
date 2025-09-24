"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Photo {
  src: string
  alt: string
  description?: string
}

interface PhotoGalleryModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  photos: Photo[]
}

export function PhotoGalleryModal({ isOpen, onClose, title, photos }: PhotoGalleryModalProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const currentPhoto = photos[currentPhotoIndex]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full h-[80vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-foreground">{title}</DialogTitle>
        </DialogHeader>

        <div className="flex-1 flex flex-col p-6 pt-0">
          {/* Main Photo Display */}
          <div className="relative flex-1 bg-muted/30 rounded-lg overflow-hidden mb-4">
            <img
              src={currentPhoto?.src || "/placeholder.svg"}
              alt={currentPhoto?.alt || ""}
              className="w-full h-full object-cover"
            />

            {/* Navigation Buttons */}
            {photos.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={prevPhoto}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
                  onClick={nextPhoto}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {/* Photo Counter */}
            {photos.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-3 py-1 rounded-full text-sm">
                {currentPhotoIndex + 1} de {photos.length}
              </div>
            )}
          </div>

          {/* Photo Description */}
          {currentPhoto?.description && (
            <p className="text-muted-foreground text-center text-sm mb-4">{currentPhoto.description}</p>
          )}

          {/* Thumbnail Navigation */}
          {photos.length > 1 && (
            <div className="flex gap-2 justify-center overflow-x-auto pb-2">
              {photos.map((photo, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentPhotoIndex
                      ? "border-primary"
                      : "border-transparent hover:border-muted-foreground/50"
                  }`}
                >
                  <img src={photo.src || "/placeholder.svg"} alt={photo.alt} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
