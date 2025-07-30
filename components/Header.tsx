// components/header.tsx
"use client";

import React from "react"; // No longer need useState as mobile menu is removed
import Link from "next/link";
import { motion } from "framer-motion"; // AnimatePresence and useState for mobile menu are no longer needed
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react"; // Menu and X are no longer needed
import Image from "next/image";

// Reduced to just two main navigation links
const navLinks = [
  { name: "Partner", href: "/partner" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      // Existing light green gradient with blur and dark mode adjustments
      className="sticky top-0 z-50 w-full border-b border-green-200/50 from-primary/30 to-secondary bg-gradient-to-b dark:bg-secondary/20 backdrop-blur-md flex flex-col items-center"
    >
      {/* Main header content container */}
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"https://placehold.co/32/green/white?text=HB&font=poppins"}
            alt="logo"
            className="size-8 rounded-full"
            width={32}
            height={32}
          />
          <span className="sr-only">Your Company</span>
          <span className="hidden text-lg font-bold sm:inline-block text-green-800 dark:text-green-100">
            HomeBites
          </span>
        </Link>

        {/* Desktop Navigation Links - Now simple flex items, centered between logo and cart */}
        <nav className="flex items-center space-x-6">
          {" "}
          {/* No longer absolute positioning, just a flex container */}
          <ul className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="relative text-base font-medium text-green-700 transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 hover:text-green-900 hover:after:w-full dark:text-green-200 dark:hover:text-green-50 dark:after:bg-green-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icons (Cart) - Aligned to the right */}
        <div className="flex items-center space-x-3">
          {" "}
          {/* ml-auto not strictly needed here as justify-between handles spacing */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9 text-green-700 hover:bg-green-100/50 dark:text-green-200 dark:hover:bg-green-800/50"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-green-600 text-xs text-white dark:bg-green-400 dark:text-green-900"
              >
                3 {/* Example cart item count */}
              </motion.span>
            </Link>
          </Button>
        </div>
      </div>
      {/* Removed: Mobile Menu (AnimatePresence and its contents) */}
    </motion.header>
  );
}