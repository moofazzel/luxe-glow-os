'use client';

import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Subtle glow effect at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-3xl font-bold bg-gradient-to-r from-emerald-500 via-teal-400 to-amber-400 bg-clip-text text-transparent relative"
              >
                LuxeGlow
                <motion.div
                  className="absolute -inset-2 bg-emerald-500/20 blur-xl rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Premium med spa treatments for your beauty and wellness journey.
              Experience luxury care tailored to you.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative group"
                    aria-label={social.label}
                  >
                    <div className="relative w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-amber-500 transition-colors">
                      <Icon className="h-5 w-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-amber-500/20 opacity-0 group-hover:opacity-100 blur-md -z-10"
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-slate-400 hover:text-amber-500 transition-colors inline-block"
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 group-hover:w-full transition-all duration-300"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group text-sm text-slate-400 hover:text-amber-500 transition-colors inline-block"
                  >
                    <span className="relative">
                      {link.label}
                      <motion.span
                        className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400 group-hover:w-full transition-all duration-300"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-400">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-emerald-500" />
                <span className="leading-relaxed">123 Luxury Ave<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400 hover:text-amber-500 transition-colors cursor-pointer">
                <Phone className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-400 hover:text-amber-500 transition-colors cursor-pointer">
                <Mail className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                <span>hello@luxeglow.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Gold gradient divider */}
        <div className="relative h-px mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0"
            animate={{
              opacity: [0, 0.5, 0],
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </div>

        <div className="text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} LuxeGlow. All rights reserved. Crafted with luxury in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}

