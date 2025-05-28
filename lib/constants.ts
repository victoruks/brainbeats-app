export const siteConfig = {
  name: "Brain Beats",
  description: "Premium audio experiences for the modern listener.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Products", href: "#products" },
    { label: "Features", href: "#features" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ],
  featuredProducts: [
    {
      id: 1,
      name: "BrainWave Pro",
      description: "Our flagship over-ear headphones with active noise cancellation and 40-hour battery life.",
      price: 349.99,
      imageUrl: "https://images.pexels.com/photos/577769/pexels-photo-577769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Active Noise Cancellation", "40-hour Battery Life", "Premium Sound Quality", "Comfortable Fit"]
    },
    {
      id: 2,
      name: "NeuroBeat X",
      description: "Wireless earbuds with spatial audio and seamless device switching.",
      price: 249.99,
      imageUrl: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Spatial Audio", "10-hour Battery Life", "Water Resistant", "Touch Controls"]
    },
    {
      id: 3,
      name: "MindSync Studio",
      description: "Professional studio headphones for creators and audiophiles.",
      price: 499.99,
      imageUrl: "https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Studio-Quality Sound", "Premium Materials", "Wired Connection", "Included Carrying Case"]
    }
  ],
  features: [
    {
      title: "Adaptive Sound",
      description: "Automatically adjusts to your environment for the perfect listening experience.",
      icon: "ear"
    },
    {
      title: "Neural Sync",
      description: "Our proprietary technology that syncs with your brain waves for enhanced focus.",
      icon: "brain"
    },
    {
      title: "Endless Battery",
      description: "Up to 40 hours of continuous playback on a single charge.",
      icon: "battery"
    },
    {
      title: "Premium Comfort",
      description: "Ergonomically designed for hours of comfortable wear.",
      icon: "feather"
    }
  ],
  testimonials: [
    {
      name: "Alex Thompson",
      role: "Music Producer",
      content: "Brain Beats has revolutionized my studio workflow. The clarity and precision are unmatched.",
      avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Sarah Chen",
      role: "Professional DJ",
      content: "I've tried dozens of headphones, but nothing compares to the sound quality of Brain Beats.",
      avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Marcus Johnson",
      role: "Tech Reviewer",
      content: "The Neural Sync feature is a game-changer. I've never experienced such immersive audio.",
      avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ]
};