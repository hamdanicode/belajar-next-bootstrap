"use client"

import { useRouter } from "next/navigation"

const { Button } = require("react-bootstrap")

const ButtonBack=()=>{

    const router= useRouter()
    return (
        <Button onClick={()=>router.back()}>Kembali</Button>
    )
}

export default ButtonBack