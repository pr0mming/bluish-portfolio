export interface ITooltipProps {
  text: string
  className?: string
  children: React.ReactNode
}

const Tooltip = ({ text, className, children }: ITooltipProps) => {
  return (
    <div className={`group justify-center ${className}`}>
      {children}
      <span
        className={`
        absolute
        inline-block
        top-5
        scale-0
        transition
        ease-in-out
        duration-200
        rounded-lg
        bg-secondary
        border-accent
        border-2
        font-medium
        text-xs
        text-white-600
        group-hover:scale-100
        p-2 z-10`}
      >
        {text}
      </span>
    </div>
  )
}

export default Tooltip
