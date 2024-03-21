"use client"

import { useState } from "react"
import Dialog from "./_components/Dialog"
import { Button } from "@mui/material"

export default function DialogDemo() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  
  const dialogClose1 = () => setIsOpen1(false)
  const dialogClose2 = () => setIsOpen2(false)
  const dialogClose3 = () => setIsOpen3(false)

  const handleExecBtn1 = () => {
    alert("ダイアログ1")
    setIsOpen1(false)
  }
  const handleExecBtn2 = () => {
    alert("ダイアログ2")
    setIsOpen2(false)
  }
  const handleExecBtn3 = () => {
    alert("ダイアログ3")
    setIsOpen3(false)
  }

  return (
    <>
      <h1>モーダルデモ(通常バージョン)</h1>
      <p>state、close/open関数がモーダルの数だけ必要になる</p>
      <Button onClick={() => setIsOpen1(true)}>ダイアログ1を開く</Button><br />
      <Button onClick={() => setIsOpen2(true)}>ダイアログ2を開く</Button><br />
      <Button onClick={() => setIsOpen3(true)}>ダイアログ3を開く</Button><br />
      <Dialog 
        title="ダイアログのデモ1です"
        execBtnText="実行1"
        isOpen={isOpen1}
        closeDialog={dialogClose1}
        handleExecBtn={handleExecBtn1}
      >
        ダイアログのデモ1です
        ダイアログのデモ1です
      </Dialog>
      <Dialog 
        title="ダイアログのデモ2です"
        execBtnText="実行2"
        isOpen={isOpen2}
        closeDialog={dialogClose2}
        handleExecBtn={handleExecBtn2}
      >
        ダイアログのデモ2です
        ダイアログのデモ2です
      </Dialog>
      <Dialog 
        title="ダイアログのデモ3です"
        execBtnText="実行3"
        isOpen={isOpen3}
        closeDialog={dialogClose3}
        handleExecBtn={handleExecBtn3}
      >
        ダイアログのデモ3です
        ダイアログのデモ3です
      </Dialog>
    </>
  )
}