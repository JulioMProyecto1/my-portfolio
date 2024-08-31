import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Brain, Cog, Cpu, Mail, Zap } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen container mx-auto">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Bot className="h-6 w-6 mr-2" />
          <span className="font-bold">AI Automation Consulting</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI & Automation Solutions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Empowering businesses with cutting-edge AI and automation
                  consulting services. Transform your operations and stay ahead
                  of the competition.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#contact"
                >
                  Get Started
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-gray-400 bg-transparent px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#services"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Brain className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">
                  AI Strategy Consulting
                </h3>
                <p className="text-gray-600">
                  Develop a comprehensive AI strategy tailored to your business
                  needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Cog className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Process Automation</h3>
                <p className="text-gray-600">
                  Streamline your operations with intelligent automation
                  solutions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Cpu className="h-12 w-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">
                  Machine Learning Integration
                </h3>
                <p className="text-gray-600">
                  Implement cutting-edge ML models to enhance decision-making
                  processes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Us
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are a team of experienced AI and automation consultants
                  dedicated to helping businesses leverage the power of
                  artificial intelligence and automation technologies. With our
                  expertise, we empower organizations to optimize their
                  processes, increase efficiency, and drive innovation.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-4">
                    <Zap className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">
                      Cutting-edge AI solutions
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Cog className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">
                      Tailored automation strategies
                    </span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Brain className="h-6 w-6 text-blue-500" />
                    <span className="font-medium">
                      Expert consulting services
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to transform your business with AI and automation?
                  Contact us today for a consultation.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-4">
                  <Input placeholder="Your Name" type="text" />
                  <Input placeholder="Your Email" type="email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 AI Automation Consulting. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
