"use client";

import { useState } from "react";
import { 
  Mail, 
  MessageSquare, 
  Send 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "submitted">("idle");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("submitted");
      
      // Reset form after delay
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              Have questions about our products? We're here to help you find the perfect audio solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-sm border"
            >
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      For general inquiries:
                    </p>
                    <p className="text-sm font-medium">
                      info@brainbeats.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Customer Support</h4>
                    <p className="text-sm text-muted-foreground mb-1">
                      We're available 24/7:
                    </p>
                    <p className="text-sm font-medium">
                      support@brainbeats.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <h4 className="font-medium mb-4">Connect With Us</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow us on social media for the latest updates, promotions, and behind-the-scenes content.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail size={18} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Mail size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {formStatus === "submitted" ? (
                <div className="bg-card rounded-xl p-8 shadow-sm border h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-primary/10 p-4 rounded-full text-primary mb-6">
                    <Send size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-sm border">
                  <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}