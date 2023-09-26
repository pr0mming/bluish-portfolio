// Next
import Image from 'next/image'
import Link from 'next/link'

import getAllSocialMedia from '@src/modules/features/ui/social-media-bar/application/getAllSocialMedia'

export interface ISocialMediaBarProps {
  type: 'default' | 'footer'
}

const SocialMediaBar = ({ type }: ISocialMediaBarProps) => {
  const socialMedia = getAllSocialMedia()

  const iconSize = type === 'default' ? 50 : 30

  return (
    <section
      className={`flex flex-nowrap ${
        type === 'default'
          ? 'justify-center md:justify-start'
          : 'justify-center'
      } gap-5`}
    >
      {socialMedia.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          target="_blank"
          className="transition ease-in-out delay-0 duration-150 hover:text-white-600 hover:scale-125"
        >
          <Image
            src={item.imgPath}
            alt="Social Media Item"
            width={iconSize}
            height={iconSize}
          />
        </Link>
      ))}
    </section>
  )
}

export default SocialMediaBar
