import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@root/tailwind.config'

const getTailwindConfig = () => {
  return resolveConfig(tailwindConfig)
}

export default getTailwindConfig
