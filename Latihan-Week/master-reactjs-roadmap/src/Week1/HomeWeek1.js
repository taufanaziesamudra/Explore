import React from 'react'
// import ClassComponent from './ClassComponent/ClassComponent'
// import FunctionalComponent from './JSX/FunctionalComponent'
// import State1 from './State and Props/Example1/State1'
// import State2 from './State and Props/Example1/State2'
import YouTube from './State and Props/Example2/YouTube'

const HomeWeek1 = () => {
    return (
        <div>
            {/* <ClassComponent /> */}
            {/* <FunctionalComponent /> */}
            {/* <State1 /> */}
            {/* <State2
                namaDepan="Taufan"
                namaBelakang="A Samudra" /> */}
            <YouTube
                time='00:15'
                title='Belajar Ngoding'
                desc='Malas belajar' />
            <YouTube
                time='00:30'
                title='Belajar JavScriot'
                desc='Malas belajar' />
            <YouTube
                time='00:15'
                title='Belajar ReactJS'
                desc='Malas belajar' />
            <YouTube
                time='00:15'
                title='Belajar Ngoding'
                desc='Malas belajar' />
            <YouTube />
        </div>
    )
}

export default HomeWeek1