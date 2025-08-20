import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold">Meet Maheshwari</p>
            <p className="text-sm opacity-80">Full-Stack Developer & Problem Solver</p>
          </div>
          
          <div className="flex items-center space-x-1 text-sm">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-background/20 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} Meet Maheshwari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer