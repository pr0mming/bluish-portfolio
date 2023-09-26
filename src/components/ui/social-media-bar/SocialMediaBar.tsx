// Next
import Image from 'next/image'
import Link from 'next/link'

import getAllSocialMedia from '@src/modules/features/ui/social-media-bar/application/getAllSocialMedia'

export interface ISocialMediaBarProps {
  type: 'default' | 'footer'
}

const SocialMediaBar = ({ type }: ISocialMediaBarProps) => {
  const socialMedia = getAllSocialMedia()

  const isDefault = type === 'default'
  const iconSize = isDefault ? 50 : 30

  return (
    <section
      className={`flex flex-nowrap ${
        isDefault ? 'justify-center md:justify-start' : 'justify-center'
      } gap-5`}
    >
      {socialMedia.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          target="_blank"
          className={`${
            !isDefault
              ? 'transition ease-in-out delay-0 duration-150 hover:text-white-600 hover:scale-125'
              : `
              bg-secondary
              rounded-full
              border-2
              transition ease-in-out duration-200
              hover:-translate-x-2
              hover:-translate-y-2
              hover:shadow-custom-xs hover:shadow-secondary border-secondary text-secondary p-1`
          }`}
        >
          <Image
            src={item.imgPath}
            alt="Social Media Item"
            width={iconSize}
            height={iconSize}
            className={`${isDefault ? 'rounded-full' : ''}`}
          />
        </Link>
      ))}
    </section>
  )
}

export default SocialMediaBar
