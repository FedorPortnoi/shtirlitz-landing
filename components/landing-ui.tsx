'use client'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
type ClassValue = string | false | null | undefined
type ChildProps = { children: ReactNode; className?: string }

export const cn = (...classes: ClassValue[]) => classes.filter(Boolean).join(' ')

export function LandingSection({
  id,
  children,
  className,
  innerClassName = 'max-w-6xl mx-auto',
  padding = 'py-28 md:py-36',
  bordered = true,
}: ChildProps & { id?: string; innerClassName?: string; padding?: string; bordered?: boolean }) {
  return <section id={id} className={cn('bg-[#0A0A0A] px-6 md:px-16', padding, bordered && 'border-t border-[#E8E0D4]/[.06]', className)}><div className={innerClassName}>{children}</div></section>
}

export function SectionLabel({ children, className }: ChildProps) {
  return <div className={cn('font-[family-name:var(--font-mono)] text-[10px] tracking-[.25em] uppercase text-[#C4955A]/60 mb-16', className)}>{children}</div>
}

export function SectionTitle({ children, className, large = false }: ChildProps & { large?: boolean }) {
  return <h2 className={cn('font-[family-name:var(--font-bebas)] leading-[1] tracking-[.02em] text-[#E8E0D4]', large ? 'text-[clamp(36px,6vw,72px)]' : 'text-[clamp(32px,5vw,64px)]', className)}>{children}</h2>
}

export function CtaLink({ children, className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  return <a {...props} className={cn('font-[family-name:var(--font-mono)] font-medium uppercase no-underline transition-all duration-300', className)}>{children}</a>
}
