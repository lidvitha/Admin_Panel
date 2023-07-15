import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilDrop, cilPencil, cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'User Analytics',
  },
  {
    component: CNavItem,
    name: 'Conversion Rate',
    to: '/theme/conversionRate',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sessions',
    to: '/theme/sessions',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Traffic',
    to: '/traffic',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Month',
        to: '/base/month',
      },
      {
        component: CNavItem,
        name: 'Year',
        to: '/base/year',
      },
    ],
  },
]

export default _nav
