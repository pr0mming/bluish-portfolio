// Next
import Image from 'next/image'

// Components
import Tooltip from '@src/components/ui/tooltip/Tooltip'
import SocialMediaBar from '@src/components/ui/social-media-bar/SocialMediaBar'

// Modules
import getAllFavTech from '@src/modules/features/ui/footer/application/getAllFavTech'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const favTechs = getAllFavTech()

  return (
    <footer
      className="flex flex-col items-center gap-5 bg-primary border-t-accent border-opacity-70 text-white text-opacity-70 p-8"
      style={{ borderTopWidth: 1 }}
    >
      <div className="flex items-center flex-wrap">
        <p className="me-2">Made with love using</p>

        <div className="flex gap-1 flex-wrap">
          {favTechs.map((tech) => (
            <div
              key={tech.name}
              className="relative"
              style={{ width: 30, height: 30 }}
            >
              <Tooltip text={tech.name}>
                <Image
                  src={tech.iconPath}
                  alt={tech.name}
                  sizes="30px"
                  fill
                  style={{
                    objectFit: 'contain'
                  }}
                  priority
                />
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
      <span>© Julián Bernal {currentYear}</span>

      <SocialMediaBar type="footer" />
    </footer>
  )
}

export default Footer
