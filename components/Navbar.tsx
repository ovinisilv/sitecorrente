"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/config/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Como funciona", href: "#como-funciona" },
    { name: "O que está incluso", href: "#solucao" },
    { name: "Exemplos", href: "#exemplos" },
    { name: "Planos", href: "#planos" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          <span className="bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
          >
            <MessageCircle className="w-4 h-4" />
            Quero meu site
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-semibold"
          >
            <MessageCircle className="w-5 h-5" />
            Quero meu site
          </a>
        </div>
      )}
    </header>
  );
}