import clsx from 'clsx'

interface Props {
  className?: string
  children: React.ReactNode
}

export const Prose: React.FC<Props> = ({ children, className }) =>
  <div className={clsx(className, 'prose dark:prose-invert')}>{children}</div>

