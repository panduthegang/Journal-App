import React from "react";
import {
  Book,
  Sparkles,
  Lock,
  Calendar,
  ChevronRight,
  BarChart2,
  FileText,
  Brain,
  Target,
  Palette,
  Users,
  MessageCircle,
  Zap,
  Star,
  Shield,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TestimonialCarousel from "@/components/testimonial-carousel";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { getDailyPrompt } from "@/actions/public";
import faqs from "@/data/faqs";

const features = [
  {
    icon: Book,
    title: "Rich Text Editor",
    description:
      "Express yourself with a powerful editor supporting markdown, formatting, and media embedding.",
  },
  {
    icon: Brain,
    title: "AI Writing Assistant",
    description:
      "Get intelligent writing suggestions and overcome writer's block with our AI companion.",
  },
  {
    icon: Sparkles,
    title: "Daily Inspiration",
    description:
      "Get inspired with personalized prompts and mood-based imagery to spark your creativity.",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description:
      "Set and track your personal development goals with visual progress indicators.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description:
      "Your thoughts are protected with end-to-end encryption and enterprise-grade security.",
  },
  {
    icon: Palette,
    title: "Customizable Themes",
    description:
      "Personalize your journaling experience with beautiful themes and layouts.",
  },
];

const benefits = [
  {
    icon: Star,
    title: "Premium Features",
    description: "Access advanced writing tools, analytics, and unlimited storage.",
  },
  {
    icon: Shield,
    title: "Enhanced Privacy",
    description: "Additional security features and encrypted cloud backup.",
  },
  {
    icon: Gift,
    title: "Early Access",
    description: "Be the first to try new features and improvements.",
  },
];

const stats = [
  { number: "50K+", label: "Active Writers" },
  { number: "1M+", label: "Journal Entries" },
  { number: "4.9", label: "App Rating" },
  { number: "180+", label: "Countries" },
];

export default async function LandingPage() {
  const advice = await getDailyPrompt();

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-amber-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 pt-16 pb-16">
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center space-x-2 animate-bounce">
            <span className="px-4 py-2 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
              ✨ New: AI Writing Assistant
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text mb-6 animate-fade-in">
            Your Space to Reflect. <br /> Your Story to Tell.
          </h1>
          <p className="text-lg md:text-xl text-orange-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your daily thoughts into meaningful insights. Join thousands of mindful individuals
            who use Reflct to capture moments, track growth, and discover themselves.
          </p>

          {/* AI Assistant Preview */}
          <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-orange-100 p-6 mb-12 hover:shadow-2xl transition-all duration-300">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-4 py-1 rounded-full text-sm">
              Powered by AI
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-10 w-10 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center animate-pulse">
                  <Zap className="h-5 w-5 text-white" />
                </div>
              </div>
              <div className="flex-grow space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-orange-900">AI Writing Assistant</span>
                  <span className="px-2 py-1 rounded-full bg-orange-100 text-xs text-orange-800">
                    Writing...
                  </span>
                </div>
                <p className="text-orange-700">{advice || "Let me help you express your thoughts..."}</p>
                <div className="space-y-2">
                  <Skeleton className="h-4 bg-orange-50 rounded w-3/4" />
                  <Skeleton className="h-4 bg-orange-50 rounded w-full" />
                  <Skeleton className="h-4 bg-orange-50 rounded w-2/3" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <Button
                variant="journal"
                className="px-8 py-6 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white group transform hover:scale-105 transition-all duration-300"
              >
                Start Writing Free
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="#features">
              <Button
                variant="outline"
                className="px-8 py-6 rounded-full border-2 border-orange-600 text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
              >
                See How It Works
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl transform hover:scale-[1.02] transition-all duration-300">
          <div className="max-w-4xl mx-auto">
            <dl className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                  <dt className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text mb-2">
                    {stat.number}
                  </dt>
                  <dd className="text-orange-800">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Feature Cards */}
        <section id="features" className="mt-24 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Everything You Need to Journal</h2>
            <p className="text-orange-700 max-w-2xl mx-auto">
              Powerful features designed to make your journaling experience seamless and meaningful.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-orange-100 overflow-hidden"
              >
                <CardContent className="p-6">
                  <div className="h-12 w-12 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-orange-900 mb-2">{feature.title}</h3>
                  <p className="text-orange-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mt-24 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Premium Benefits</h2>
            <p className="text-orange-700 max-w-2xl mx-auto">
              Unlock advanced features and enhance your journaling experience.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-12 w-12 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-xl text-orange-900 mb-2">{benefit.title}</h3>
                <p className="text-orange-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Loved by Writers Worldwide</h2>
            <p className="text-orange-700 max-w-2xl mx-auto">
              Join thousands of satisfied users who have transformed their journaling practice with Reflct.
            </p>
          </div>
          <TestimonialCarousel />
        </section>

        {/* FAQ Section */}
        <section className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-orange-900 mb-4">Common Questions</h2>
            <p className="text-orange-700 max-w-2xl mx-auto">
              Everything you need to know about Reflct and your journaling journey.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-orange-100 rounded-lg mb-4 hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-orange-900 text-lg px-6 hover:no-underline hover:text-orange-600">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-orange-700 px-6 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-24">
          <Card className="bg-gradient-to-r from-orange-100 to-amber-100 overflow-hidden relative border-none transform hover:scale-[1.02] transition-all duration-300">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-orange-200 rounded-full filter blur-3xl opacity-30"></div>
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-amber-200 rounded-full filter blur-3xl opacity-30"></div>
            <CardContent className="p-12 text-center relative">
              <h2 className="text-3xl font-bold text-orange-900 mb-6">
                Begin Your Journey of Self-Discovery
              </h2>
              <p className="text-lg text-orange-700 mb-8 max-w-2xl mx-auto">
                Start journaling today and unlock the power of reflection, growth, and mindfulness.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  size="lg"
                  variant="journal"
                  className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 group transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Free
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 transform hover:scale-105 transition-all duration-300"
                >
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
