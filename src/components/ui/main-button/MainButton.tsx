export interface IMainButtonProps {
  type: 'primary' | 'secondary'
  ariaLabel: string
  className?: string
  children: React.ReactNode
}

const MainButton = ({
  type,
  ariaLabel,
  className,
  children
}: IMainButtonProps) => {
  return (
    <button
      className={`
      bg-white
      rounded-xl
      border-2
      ${type == 'primary' ? 'border-primary' : 'border-secondary'}
      px-10 py-5
      ${type == 'primary' ? 'text-primary' : 'text-secondary'}
      font-bold
      text-lg
      md:text-2xl
      transition ease-in-out duration-200
      hover:-translate-x-2
      hover:-translate-y-2
      hover:shadow-custom-sm
      ${type == 'primary' ? 'hover:shadow-primary' : 'hover:shadow-secondary'}
      ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default MainButton
