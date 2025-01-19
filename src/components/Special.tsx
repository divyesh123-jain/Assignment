import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Film } from "lucide-react";

interface SpecialEvent {
  id: number;
  title: string;
  type: "storytelling" | "movie";
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

const specials: SpecialEvent[] = [
  {
    id: 1,
    title: "Storytelling Session – The New Year's Wish",
    type: "storytelling",
    description: "Spark your child's imagination with our enchanting Storytelling Session! Magical tales, fun activities, and endless adventures await. Join the fun today!",
    imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=2072&auto=format&fit=crop",
    ctaText: "Join Session",
    ctaLink: "#",
  },
  {
    id: 2,
    title: "Movie Nights – Interstellar",
    type: "movie",
    description: "Come for the movie, stay for the memories—Starflix Nights is your ticket to a magical night under the stars!",
    imageUrl: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?q=80&w=2069&auto=format&fit=crop",
    ctaText: "Book Now!",
    ctaLink: "#",
  },
];

export default function SpecialsSection() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-4 md:mx-[40px] lg:mx-[186px] px-4 md:px-[40px]">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            SPECIALS
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specials.map((special) => (
            <Card key={special.id} className="group overflow-hidden border-2 hover:border-primary transition-colors">
              <CardHeader className="relative h-64 p-0 overflow-hidden">
                <img
                  src={special.imageUrl}
                  alt={special.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  {special.type === "storytelling" ? (
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span className="text-sm font-medium">Storytelling</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Film className="w-4 h-4" />
                      <span className="text-sm font-medium">Movie Night</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-2xl mb-3">{special.title}</CardTitle>
                <CardDescription className="text-base">
                  {special.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="w-full group" size="lg">
                  <span>{special.ctaText}</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}