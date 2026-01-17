"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Home, ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-br from-primary via-accent to-accent-cta bg-clip-text text-transparent">
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Page not found
          </h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button asChild className="btn-gradient rounded-full px-6 gap-2">
            <Link href="/">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" asChild className="rounded-full px-6 gap-2">
            <Link href="/use-cases">
              <Search className="w-4 h-4" />
              Explore Use Cases
            </Link>
          </Button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-cta/5 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  )
}
