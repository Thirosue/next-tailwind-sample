import clsx from 'clsx'

interface Props {
  className?: string
  children: React.ReactNode
}

export const Prose = ({ children, className }: Props) =>
  <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>

