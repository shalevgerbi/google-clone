import Image from "next/image"

function Avatar({url,className}) {
    return (
        <Image className={`rounded-full h-10 w-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`} 
        loading="lazy"
        src={url}
        alt="profile picture"
        height={40}
        width={40}
        />
            
        
    )
}

export default Avatar
