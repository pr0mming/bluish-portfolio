export interface ITooltipProps {
  text: string
  className?: string
  children: React.ReactNode
}

const Tooltip = ({ text, className, children }: ITooltipProps) => {
  return (
    <div className={`relative flex flex-col items-center group ${className}`}>
      <span className="flex justify-center">{children}</span>
      <div
        className={`
        absolute
        bottom-full
        flex
        flex-col
        items-center
        transition
        ease-in-out
        duration-200
        scale-0
        group-hover:scale-100
        z-10
        `}
        style={{ width: 250 }}
      >
        <span
          className="
          relative
          bg-secondary
          font-medium
          text-xs
          text-white-600
          shadow-lg
          border-accent
          border-2
          rounded-md
          p-2
        "
        >
          {text}
        </span>
        <div
          className="w-3 h-3 rotate-45 bg-secondary border-r-accent border-r-2 border-b-accent border-b-2"
          style={{ marginTop: '-7px' }}
        />
      </div>
    </div>
  )
}

export default Tooltip
