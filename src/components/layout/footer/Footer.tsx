// Next
import Tooltip from '@src/components/ui/tooltip/Tooltip'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section
      className="flex flex-col items-center gap-5 bg-primary border-t-accent border-opacity-70 text-white text-opacity-70 p-8"
      style={{ borderTopWidth: 1 }}
    >
      <div className="flex items-center flex-wrap">
        <p className="me-2">Made with love using</p>

        <div className="flex gap-1 flex-wrap">
          <div className="relative" style={{ width: 30, height: 30 }}>
            <Tooltip text="Figma">
              <Image
                src="/icons/figma-icon.svg"
                alt="Figma"
                width={30}
                height={30}
                priority
              />
            </Tooltip>
          </div>

          <div className="relative" style={{ width: 30, height: 30 }}>
            <Tooltip text="Next">
              <Image
                src="/icons/nextjs-icon.svg"
                alt="Next"
                width={30}
                height={30}
                priority
              />
            </Tooltip>
          </div>

          <div className="relative" style={{ width: 30, height: 30 }}>
            <Tooltip text="Framer">
              <Image
                src="/icons/framer-icon.svg"
                alt="Framer"
                sizes="30px"
                fill
                style={{
                  objectFit: 'contain'
                }}
              />
            </Tooltip>
          </div>
        </div>
      </div>
      <span>© Julián Bernal {currentYear}</span>
    </section>
  )
}

export default Footer
