'use client'
import React from 'react'
import {useRouter} from "next/navigation"

const Page = () => {
  const router = useRouter();
  return (
    <div>
    <h1>about us</h1>
    <button onClick={()=>router.push("/")}>go to home page</button>
    </div>
  )
}

export default Page

