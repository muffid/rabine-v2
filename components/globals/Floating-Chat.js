import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button"
import { useEffect, useState } from "react"

export default function FloatingChat(props){
    const [loading,setLoading] = useState(false)

    //hanya di load ketika halaman sudah selesai di render
    useEffect(()=>{
       setLoading(true)
    },[])
    return(
        <>
            {loading && (
                <FloatingWhatsApp
                    phoneNumber={props.phoneNumber}
                    accountName={props.accountName}
                    avatar={props.avatar}
                    initialMessageByServer={props.initialMessageByServer}
                    statusMessage={props.statusMessage}
                    placeholder={props.placeholder}
                    allowEsc={props.allowEsc}
                    notificationDelay={props.notificationDelay}
                    notification={props.notification}
                />
            )}
        </>
       
    )
}