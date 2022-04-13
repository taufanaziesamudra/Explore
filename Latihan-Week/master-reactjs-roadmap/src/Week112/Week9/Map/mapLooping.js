const frontEndFrameWorks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
]
const MapLooping = () => {
    const renderFrameWorks = frontEndFrameWorks.map((item =>
        <li key={item}>{item}</li>))
    return (
        <div>
            <h1>FrameWorks yang terpopuler</h1>
            <ul>
                {renderFrameWorks}
            </ul>
        </div>
    )
}

export default MapLooping