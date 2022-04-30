import React, { Component } from 'react'
import Moment from 'moment';
class Header extends Component {
  render() {
    //TODO Membuat variabel dengan idLocale untuk memanggil moment dari jam
    let idLocal = require('moment/locale/id');
    Moment.updateLocale('id', idLocal);
    return (
      <div>
        <img src="https://img2.apk.tools/150/2/f/a/com.koller.lukas.todolist.png" alt="avatar" />
        <h2>Aplikasi Aktivitas Harian</h2>
        {/* TODO Memanggil moment dengan form hari */}
        <p>{Moment().format('dddd')} {Moment().format('LLL')}</p>
      </div>
    )
  }
}

export default Header