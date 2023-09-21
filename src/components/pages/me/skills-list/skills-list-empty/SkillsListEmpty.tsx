// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faFaceFlushed } from '@fortawesome/free-solid-svg-icons'

library.add(faFaceFlushed)

const SkillsListEmpty = () => {
  return (
    <section className="flex gap-2 justify-center text-center text-secondary font-medium text-xl">
      <p>There is nothing</p>
      <FontAwesomeIcon icon={'face-flushed'} className="text-3xl" />
    </section>
  )
}

export default SkillsListEmpty
