"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Check, 
  Plus, 
  ShoppingCart
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Products() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <section id="products" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our premium collection of audio devices engineered for exceptional sound quality and comfort.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.featuredProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative h-[300px] overflow-hidden bg-muted">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredProduct === product.id ? "scale(1.05)" : "scale(1)"
                    }}
                  />
                  <Badge className="absolute top-4 left-4 bg-black/70 hover:bg-black/70">
                    New
                  </Badge>
                </div>
                
                <CardContent className="pt-6 pb-0 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <Check size={16} className="text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="flex justify-between items-center pt-6">
                  <div className="font-bold text-lg">${product.price}</div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <Plus size={16} />
                    </Button>
                    <Button size="sm" className="gap-1">
                      <ShoppingCart size={16} />
                      Add to Cart
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}