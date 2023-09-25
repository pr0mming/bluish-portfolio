// Next
import Link from 'next/link'

export interface IMainButtonProps {
  type: 'primary' | 'secondary'
  href: string
  target?: string
  className?: string
  children: React.ReactNode
}

const MainButton = ({
  type,
  href,
  target,
  className,
  children
}: IMainButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      className={`
      bg-white
      rounded-xl
      border-2
      ${type == 'primary' ? 'border-primary' : 'border-secondary'}
      ${type == 'primary' ? 'text-primary' : 'text-secondary'}
      transition ease-in-out duration-200
      hover:-translate-x-2
      hover:-translate-y-2
      hover:shadow-custom-xs
      ${type == 'primary' ? 'hover:shadow-primary' : 'hover:shadow-secondary'}
      ${className}`}
    >
      {children}
    </Link>
  )
}

export default MainButton
