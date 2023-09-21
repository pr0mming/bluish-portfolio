// Next
import Image from 'next/image'

export interface IExperienceCurvedArrowProps {
  isFlipped: boolean
}

const ExperienceCurvedArrow = ({ isFlipped }: IExperienceCurvedArrowProps) => {
  return (
    <>
      <div className="relative hidden lg:block -bottom-16 pe-2">
        <Image
          src="/misc/curved-arrow.svg"
          alt="Curved Arrow"
          width={290}
          height={266}
          style={{
            transform: isFlipped ? 'scaleX(-1)' : 'none'
          }}
        />
      </div>
      <div className="block lg:hidden">
        <Image
          src="/misc/twisted-arrow.svg"
          alt="Twisted Arrow"
          width={93}
          height={80}
        />
      </div>
    </>
  )
}

export default ExperienceCurvedArrow
