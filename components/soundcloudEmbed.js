
export default function SoundcloudEmbed({ src }) {
    return (
        <div>
            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" 
                src={src}>
            </iframe>
            <div style={{fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', 
                fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100}}></div>
        </div>
    )
}