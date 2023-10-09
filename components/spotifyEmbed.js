

export default function SpotifyEmbed({ src, width = '100%', marginLeft = '0px' }) {

    return (
            <iframe style={{borderRadius: '12px', marginTop: '5px', marginBottom: '5px', marginLeft: marginLeft}} 
                src={src} 
                width={width} height="152" frameBorder="0" allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="eager"></iframe>

    )
}