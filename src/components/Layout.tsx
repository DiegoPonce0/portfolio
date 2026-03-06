import type { LayoutProps } from "../../types/layout"

import { Header } from "./Header"
import { Footer } from "./Footer"

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <Header/>
        {children}
      <Footer/>
    </div>
  )
}