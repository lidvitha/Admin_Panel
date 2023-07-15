import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="https://bhumi.ngo" target="_blank" rel="noopener noreferrer">
          Bhumi NGO
        </a>
        <span className="ms-1">&copy; 2023 JPMC_CFG</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://www.jpmorganchase.com/" target="_blank" rel="noopener noreferrer">
          JPMorgan Chase & Co
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
