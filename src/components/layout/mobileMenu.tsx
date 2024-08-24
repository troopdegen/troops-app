'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SheetTrigger, SheetContent, Sheet } from '@/components/ui/sheet'
import { MenuIcon } from 'lucide-react'
import { type MenuItemType } from './navbar'
import AuthButton from '../buttons/authButton'

type MobileMenuProps = {
  // authenticated: boolean
  // login: () => void
  // logout: () => void
  menuItems?: MenuItemType[]
  pathname: string
}

export default function MobileMenu({ menuItems, pathname }: MobileMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger asChild>
        <button className="bg-transparent p-1.5 text-white lg:hidden">
          <MenuIcon className="text-primary h-8 w-8" />
          <span className="sr-only">Toggle navigation menu</span>
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-purple-background">
        <div className="grid gap-2 py-6">
          {menuItems?.map((menuItem, index) => (
            <Link
              key={`${menuItem.displayText}-menuItem-${index}`}
              className={`text-secondary-foreground hover:text-primary focus:text-primary inline-flex items-center justify-center px-4 py-2 text-lg font-medium transition-colors focus:outline-none ${
                pathname === menuItem.href &&
                'decoration-primary hover:!text-secondary-foreground pointer-events-none underline decoration-[1.5px] underline-offset-[6px]'
              }`}
              href={menuItem.href}
            >
              {menuItem.displayText}
            </Link>
          ))}
          <div className="flex justify-center py-2">
            <AuthButton />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
