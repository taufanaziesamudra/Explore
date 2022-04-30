import Moment from 'moment'
import React from 'react'

const Header = () => {
  const idLocal = require('moment/locale/id')
  Moment.updateLocale('id', idLocal)
  return (
    <div>
      <h1>Alikasi Aktifitas Harian</h1>
      <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
    </div>
  )
}

export default Header