export interface IContentWrapperProps {
  type: 'primary' | 'secondary'
  children: React.ReactNode
}

const ContentWrapper = ({ type, children }: IContentWrapperProps) => {
  return (
    <section
      className={`
        w-full
        max-w-7xl
        ${type === 'primary' ? 'bg-white' : 'bg-secondary'}
        bg-opacity-95
        rounded-xl
        border-2
        ${type === 'primary' ? 'border-secondary' : 'border-accent'}
        shadow-custom-sm
        ${type === 'primary' ? 'shadow-secondary' : 'shadow-accent'}
        py-14
        px-6
        md:px-10
      `}
    >
      {children}
    </section>
  )
}

export default ContentWrapper
