// Library
import React, { Component, Fragment } from 'react'

// Component Pages
import YouTubeComp from "../../../component/YouTubeComp/YouTubeComp"
import { RootContext } from '../../Home/Home'

export class YouTubeCompPages extends Component {
    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <Fragment>
                                <p>YouTube Component</p>
                                <hr />
                                {/* Membuat props dengan nama time, title dan desc
            dimana props tersebut akan dikirimkan ke YouTubeComp */}
                                <YouTubeComp
                                    time="00:01"
                                    title="Aku belajar"
                                    desc="Belajar Ngoding" />
                                <YouTubeComp
                                    time="00:02"
                                    title="Aku sedang belajar"
                                    desc="Belajar JavaScript" />
                                <YouTubeComp
                                    time="00:03"
                                    title="Kadang aku males"
                                    desc="Belajar React JS" />
                                <YouTubeComp
                                    time="00:04"
                                    title="aku sedang belajar lagi"
                                    desc="Bealajr fullstack" />
                                <YouTubeComp />
                                <hr />
                                <p>Total Order: {value.state.totalOrder}</p>
                            </Fragment>
                        )
                    }
                }

            </RootContext.Consumer>
        )
    }
}


export default YouTubeCompPages
