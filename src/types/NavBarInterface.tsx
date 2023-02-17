import { StaticImageData } from 'next/image'

export interface NavItem {
  name: string
  link: string
  icon: StaticImageData
}

export interface LaunchItem {
  name: string
  link: string
}

export interface projectName {
  name: string
  link: string
}

export interface NavbarInterface {
  logo: StaticImageData
  projectName: projectName
  items: NavItem[]
  launch: LaunchItem
}
