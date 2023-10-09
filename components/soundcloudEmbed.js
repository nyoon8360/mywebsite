
export default function SoundcloudEmbed({ src, marginLeftRight = '0px' }) {
    return (
        <div style={{marginTop: '8px', marginBottom: '8px', marginLeft: marginLeftRight, marginRight: marginLeftRight}}>
            <iframe width='100%' height="152" scrolling="no" frameborder="no" allow="autoplay" 
                src={src} loading="eager">
            </iframe>
        </div>
    )
}