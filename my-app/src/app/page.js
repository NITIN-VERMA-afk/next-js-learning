'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import {useRouter} from "next/navigation"



export default function Home() {
  const router = useRouter();
  const navigate=(name)=>{
    router.push(name)
  }
  const [name,setName]=useState("NITIN")
  // let data="sam";
  const apple=()=>{
    setName("nitin verma")
    // data=("basker")
   
  }
  const InnerComp=()=>{
    return(<div>inner component</div>)
  }
  return (
    <main className={styles.main}>
      <h1>event,function and state{name}</h1>
      <button onClick={()=>apple()}>click me</button>
      <InnerComp/>
      <Link href="/login">go to login page</Link>
      <Link href="/about">go to about page</Link>
      <button onClick={()=>navigate("/login")}>go to login page</button>
      <button onClick={()=>navigate("/about")}>go to about page</button>
      
      
  
      
    </main>
  );
}

