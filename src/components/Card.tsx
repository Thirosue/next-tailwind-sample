import Link from 'next/link'
import clsx from 'clsx'

const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

interface CardProps {
  as?: 'div' | 'span' | 'p' | 'li'
  className?: string
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ as: Component = 'div', className, children }) => {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  )
}

interface CardLinkProps {
  children: React.ReactNode
  href: string
}

const CardLink: React.FC<CardLinkProps> = ({ children, ...props }) => {
  return (
    <>
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  )
}

// @ts-ignore
Card.Link = CardLink

interface CardTitleProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  href?: string
  children: React.ReactNode
}

const CardTitle: React.FC<CardTitleProps> = ({ as: Component = 'h2', href, children }) => {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {/* @ts-ignore */}
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  )
}

// @ts-ignore
Card.Title = CardTitle

interface CardDescriptionProps {
  children: React.ReactNode
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  )
}

// @ts-ignore
Card.Description = CardDescription

interface CardCtaProps {
  children: React.ReactNode
}

const CardCta: React.FC<CardCtaProps> = ({ children }) => {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};

// @ts-ignore
Card.Cta = CardCta

interface CardEyebrowProps {
  as?: 'div' | 'span' | 'p'
  decorate?: boolean
  className?: string
  children: React.ReactNode
}

const CardEyebrow: React.FC<CardEyebrowProps> = ({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}) => {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  )
}

// @ts-ignore
Card.Eyebrow = CardEyebrow

export { Card } 