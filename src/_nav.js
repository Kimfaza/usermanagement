import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'User',
  },
  {
    component: CNavItem,
    name: 'Admin',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Ordinary user',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },

  {
    component: CNavTitle,
    name: 'Managements',
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Shirt',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Dress',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pants',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Shoes',
        to: '/base/tabs',
      },
      {
        component: CNavItem,
        name: 'Accessories',
        to: '/base/tooltips',
      },
    ],
  },

  {
    component: CNavGroup,
    name: 'Analytics',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'User Management',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'Account Management',
        to: '/icons/flags',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'General Settings',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: 'Advanced Settings',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Help',
    href: 'https://coreui.io/react/docs/templates/installation/',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  },
]

export default _nav
