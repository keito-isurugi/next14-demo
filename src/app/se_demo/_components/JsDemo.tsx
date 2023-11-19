"use client"
import style from "@/app/se_demo/_components/_css/cssdemo.module.css"
import Sidebar from '@/app/se_demo/_layout/Sidebar'
import Login from '@/app/se_demo/_components/Login'
import Todo from '@/app/se_demo/_components/Todo'
import JsonPlaceholder from '@/app/se_demo/_components/JsonPlaceholder'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function JsDemo() {
  const minNum = 1
  const maxNum = 10
  const numbers = Array.from({length: maxNum}, (_, i) => i + minNum);

  return (
    <>
      <h1>JavaScriptのデモ</h1>
      <div className={style.jsMb}>
        <h4 className={style.jsMT0}>{minNum}から{maxNum}の内、偶数のみを表示</h4>
        <div className={style.jsFlex}>
          {numbers.map((num, index) => (
            num % 2 === 0 &&
            <>
              <p className={style.jsMr} key={index}>{num}</p>
            </>
          ))}
        </div>
      </div>
      
      <div className={style.jsMb}>
        <h4 className={style.jsMT0}>{minNum}から{maxNum}の内、奇数のみを赤文字</h4>
        <div className={style.jsFlex}>
          {numbers.map((num, index) => (
            <>
              <p className={num % 2 !== 0 ? `${style.jsColor}` : `${style.jsMr}`} key={index}>{num}</p>
            </>
          ))}
        </div>
      </div>
      
      <div className={style.jsMb}>
        <h4 className={style.jsMT0}>メニュー</h4>      
        <Sidebar />
      </div>
      
      <Login />
      <Todo />
      <JsonPlaceholder />
      {/* <Dialog onClose={handleClose} open={open}>
          <DialogContent>
            {loginMessage}
          </DialogContent>
        </Dialog> */}
    </>
  )
}

