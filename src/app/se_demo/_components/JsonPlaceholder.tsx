import styles from "@/app/se_demo/_components/_css/cssdemo.module.css"
import { Button } from "@mui/material"
import { useState } from "react"

async function getData() {
 const res = await fetch('https://jsonplaceholder.typicode.com/users')
 if (!res.ok) {
   throw new Error('Failed to fetch data')
 }
 return res.json()
}

export default function JsonPlaceholder() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData() {
    setIsLoading(false)
    setData([])
    const result = await getData();
    setTimeout(function() {
      if(result.length) {
        setIsLoading(true)
      }
      setData(result);
    }, 2000);
  }

 return (
   <>
     <div className={styles.jsMb}>
       <h4 className={styles.jsMT0}>バックエンドからユーザー情報を取得</h4>
       <Button variant="contained" onClick={() => fetchData()}>ユーザー情報を取得</Button>
       <div>
        {isLoading || <div>読み込み中...</div>}
         {data.map((d: any) => 
           <div className={styles.jsonContainer} key={d.id}>
            <p className={styles.jsonText}>ユーザーID:{d.id}</p>
            <p className={styles.jsonText}>ユーザー名:{d.name}</p>
            <p className={styles.jsonText}>メールアドレス:{d.email}</p>
           </div>
         )}
       </div>
     </div>
   </>
 )
}