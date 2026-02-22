import { Home, Shield, Sparkles, Bug, Search, ThumbsUp, MapPin } from "lucide-react";

export const siteConfig = {
  company: {
    name: "Absolute Pest Management",
    shortName: "Absolute Pest",
    phone: "(512) 555-0188", // Placeholder
    email: "contact@absolutepestmgmt.com",
    address: "Williamson County, Texas",
    city: "Round Rock",
    yearFounded: "2005",
    logoUrl: "https://www.absolutepestmgmt.com/wp-content/uploads/2025/12/absolute-1.png", // Using text fallback
  },
  theme: {
    // A strong gold and black/dark gray theme
    primary: "45 93% 47%",      // Absolute Gold
    accent: "0 0% 15%",         // Deep Charcoal
    background: "0 0% 100%",
    foreground: "240 10% 4%",
  },
  hero: {
    badge: "Williamson County's Top Choice",
    headline: "Absolute Control Over Your Pest Problems",
    subheadline: "Serving Williamson County with top-tier residential and commercial pest management solutions. We guarantee our work.",
    ctaText: "Schedule an Inspection",
    image: "https://www.absolutepestmgmt.com/wp-content/uploads/2025/11/testimonial-in-austin.jpg",
  },
  services: [
    {
      id: "general-pest",
      title: "General Pest Control",
      description: "Comprehensive treatments designed to keep spiders, ants, roaches, and other common pests out of your home.",
      icon: Bug,
    },
    {
      id: "inspections",
      title: "Thorough Inspections",
      description: "We inspect every corner of your property to identify the root cause of the infestation.",
      icon: Search,
    },
    {
      id: "commercial",
      title: "Commercial Services",
      description: "Customized pest management plans for businesses across Williamson County.",
      icon: Home,
    },
  ],  about: {
    sectionTitle: "About Us",
    headline: "Protecting Homes & Businesses",
    description:
      "We are committed to providing top-tier pest management for families and businesses. Our integrated approach ensures complete eradication while remaining safe for kids, pets, and the environment. We pride ourselves on reliability, transparent pricing, and lasting results.",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745a872e?auto=format&fit=crop&q=80",
  },
  blog: {
    sectionTitle: "Pest Control Tips & News",
    articles: [
      {
        id: "1",
        title: "How to Keep Mosquitoes Away This Summer",
        excerpt:
          "Simple steps you can take around your yard to eliminate standing water and reduce mosquito populations.",
        date: "May 15, 2026",
        image: "https://images.unsplash.com/photo-1518563233816-5636b04f2168?auto=format&fit=crop&q=80",
      },
      {
        id: "2",
        title: "Signs You Might Have a Termite Problem",
        excerpt:
          "Don't let termites destroy your home. Learn the early warning signs to look out for.",
        date: "April 02, 2026",
        image: "https://images.unsplash.com/photo-1615555416049-d045d4a9ef3c?auto=format&fit=crop&q=80",
      },
      {
        id: "3",
        title: "Organic Pest Control vs. Traditional",
        excerpt:
          "Wondering if organic pest control is right for your family? We break down the pros and cons.",
        date: "March 20, 2026",
        image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
      },
    ],
  },
  faqs: [
    {
      q: "Is your pest treatment safe for kids and pets?",
      a: "Absolutely. We use EPA-approved, family-friendly products that are tough on pests but gentle around children, pets, and your garden. Our technicians will walk you through every product we use before treatment begins.",
    },
    {
      q: "How does your 100% money-back guarantee work?",
      a: "If pests return between scheduled treatments, we'll come back and re-treat at no extra charge. If you're still not satisfied, we'll refund your last service payment—no questions asked.",
    },
    {
      q: "How quickly can you get to my home?",
      a: "We offer same-day service for emergencies and typically schedule routine inspections within 24–48 hours. We serve the greater metro area and surrounding suburbs.",
    },
    {
      q: "What pests are most common in this area?",
      a: "Homeowners most frequently deal with fire ants, roaches, scorpions, mosquitoes, termites, and rodents. Our treatment plans are specifically designed for local pest pressure.",
    },
    {
      q: "Do I need to leave my house during treatment?",
      a: "For most treatments, no. Our eco-friendly products allow you to stay home comfortably. For specific services like termite fumigation, we'll let you know in advance if any preparation is needed.",
    },
    {
      q: "How often should I schedule pest control service?",
      a: "We recommend quarterly treatments for year-round protection. However, we'll customize a plan based on your property, pest history, and budget during your free inspection.",
    },
  ],
  reviews: {
    averageRating: 4.8,
    totalReviews: 312,
    testimonials: [
      {
        id: 1,
        author: "William T.",
        rating: 5,
        text: "Absolute Pest Management lives up to their name. They completely resolved our ant issue within days.",
      },
      {
        id: 2,
        author: "Samantha K.",
        rating: 5,
        text: "Very professional technicians. They show up on time and explain exactly what they're treating.",
      },
      {
        id: 3,
        author: "David R.",
        rating: 5,
        text: "I appreciate that they take the time to answer my questions. Great local business.",
      }
    ]
  },
  team: [], // Hidden via fallback
  guarantees: [
    {
      title: "Satisfaction Guaranteed",
      description: "We stand behind our work. If pests return, we do too.",
      icon: ThumbsUp,
    },
    {
      title: "Local Expertise",
      description: "We know the specific pest challenges faced by Williamson County residents.",
      icon: MapPin,
    },
    {
      title: "Safe Treatments",
      description: "We use treatments that are tough on pests but safe for your family and pets.",
      icon: Shield,
    },
  ]
};
