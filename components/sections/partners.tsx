"use client";

import { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const partners = [
  {
    id: 1,
    name: "Théâtre de la Ville",
    type: "Partenaire principal",
    description: "Soutien artistique et technique pour nos créations",
    logo: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=200",
    website: "https://theatredelaville.com"
  },
  {
    id: 2,
    name: "Région Île-de-France",
    type: "Soutien public",
    description: "Subvention pour le développement culturel",
    logo: "https://images.pexels.com/photos/3184421/pexels-photo-3184421.jpeg?auto=compress&cs=tinysrgb&w=200",
    website: "https://iledefrance.fr"
  },
  {
    id: 3,
    name: "Fondation Crédit Agricole",
    type: "Mécénat",
    description: "Soutien financier pour nos projets éducatifs",
    logo: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=200",
    website: "https://fondation.credit-agricole.com"
  },
  {
    id: 4,
    name: "SACD",
    type: "Partenaire professionnel",
    description: "Société des Auteurs et Compositeurs Dramatiques",
    logo: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=200",
    website: "https://sacd.fr"
  },
  {
    id: 5,
    name: "Festival d'Avignon",
    type: "Partenaire artistique",
    description: "Collaboration pour la programmation OFF",
    logo: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=200",
    website: "https://festival-avignon.com"
  },
  {
    id: 6,
    name: "Conservatoire National",
    type: "Partenaire éducatif",
    description: "Formation et échanges pédagogiques",
    logo: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=200",
    website: "https://conservatoiredeparis.fr"
  }
];

export function Partners() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 bg-muted animate-pulse rounded mb-4 max-w-md mx-auto" />
            <div className="h-6 bg-muted animate-pulse rounded max-w-2xl mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border">
                <div className="h-16 bg-muted animate-pulse rounded mb-4" />
                <div className="h-4 bg-muted animate-pulse rounded mb-2" />
                <div className="h-3 bg-muted animate-pulse rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Nos Partenaires</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ils nous accompagnent et soutiennent notre démarche artistique
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {partners.map((partner, index) => (
            <Card 
              key={partner.id} 
              className="card-hover animate-fade-in-up group cursor-pointer transition-all duration-300 hover:shadow-xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                <div>
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <div
                      className="h-16 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundImage: `url(${partner.logo})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-xs text-primary font-medium mb-2">
                    {partner.type}
                  </p>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {partner.description}
                  </p>
                </div>
                
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="h-4 w-4 mx-auto text-primary" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Message de remerciement */}
        <div className="text-center">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Un Grand Merci
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Grâce au soutien de nos partenaires, nous pouvons continuer à créer, 
              innover et partager notre passion pour les arts de la scène. 
              Leur confiance nous permet de développer des projets ambitieux 
              et de toucher un public toujours plus large.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}