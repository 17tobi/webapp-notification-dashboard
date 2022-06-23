import Vue, { FunctionalComponentOptions, VueConstructor } from 'vue'
// @ts-ignore
import { FontAwesomeIcon, FontAwesomeIconProps, IconDefinition } from '@fortawesome/vue-fontawesome'
// @ts-ignore
import { IconProp, library } from '@fortawesome/fontawesome-svg-core'
import { PropsDefinition } from 'vue/types/options'

import {
  faEllipsis, faGears,
} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";

export interface ktIcons {
  menu: {'prefix': string, 'iconName': string};
  settings: {'prefix': string, 'iconName': string};
}

const iconMap: { [name: string]: IconDefinition } = {
  menu: faEllipsis,
  settings: faGears,
}

export interface BulmaIconConfig {
  component: FunctionalComponentOptions<FontAwesomeIconProps, PropsDefinition<FontAwesomeIconProps>> & VueConstructor;
  props: { icon: IconProp };
}

Vue.component('font-awesome-icon', FontAwesomeIcon)
const Icon: ktIcons | { [name: string]: string } = {}
const IconConfig: { [name: string]: BulmaIconConfig } = {}
Object.keys(iconMap).forEach((k: string) => {
  const def = iconMap[k] as IconDefinition
  //@ts-ignore
  Icon[k] = def
  library.add(def)

  IconConfig[k] = {
    component: FontAwesomeIcon,
    props: {
      icon: [def.prefix, def.iconName]
    }
  } as BulmaIconConfig

})
export default Icon
export { IconConfig }
