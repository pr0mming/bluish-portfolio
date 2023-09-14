export interface ITooltipProps {
  text: string
  children: React.ReactNode
}

const Tooltip = ({ text, children }: ITooltipProps) => {
  return (
    <div className="group flex justify-center">
      {children}
      <span
        className={`absolute
        inline-block
        top-12
        scale-0
        transition
        ease-in-out
        duration-200
        rounded-lg
        bg-primary
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
