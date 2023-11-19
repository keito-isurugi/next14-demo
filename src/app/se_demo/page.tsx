"use client"
import HtmlDemo from '@/app/se_demo/_components/HtmlDemo'
import CssDemo from '@/app/se_demo/_components/CssDemo'
import JsDemo from '@/app/se_demo/_components/JsDemo'
import style from "@/app/se_demo/_components/_css/cssdemo.module.css"
import { Button } from '@mui/material'
import { useState } from 'react'

export default function Page() {
  const [page, setPage] = useState("html")

  return (
    <>
      <div className={style.headerFlex}>
        <Button onClick={() => setPage("html")}>HTML</Button>
        <Button onClick={() => setPage("css")}>CSS</Button>
        <Button onClick={() => setPage("js")}>JavaScript</Button>
        <Button onClick={() => setPage("all")}>全部</Button>
      </div>

      {page === "html" && <HtmlDemo />}
      {page === "css" && <CssDemo />}
      {page === "js" && <JsDemo />}
      {
        page === "all" && 
        <>
          <HtmlDemo /><hr />
          <CssDemo /><hr />
          <JsDemo />
        </>
      }
    </>
  )
}