"use client"
import { Box, Button, Snackbar, IconButton, Stack, TextField, Alert, AlertColor } from "@mui/material";
import style from "@/app/se_demo/_components/_css/cssdemo.module.css"
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

export default function Login() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const defaultEamil = "test@email.com"
  const defaultPassword = "1111"
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginMessage, setLoginMessage] = useState("ログインしました！")
  const [severity, setSeverity] = useState<AlertColor | undefined>("success")
  const login = () => {
    // バックエンドにリクエストする処理

    // バックエンドからレスポンス
    if(email === defaultEamil && password === defaultPassword) {
      setSeverity("success")
      setLoginMessage("ログインしました！")
      setOpen(true)
    } else {
      setSeverity("error")
      setLoginMessage("メールアドレスもしくはパスワードが違います！")
      setOpen(true)
    }
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  return (
    <>
      <div className={style.jsMb}>
        <h4 className={style.jsMT0}>ログイン</h4>
        <Box maxWidth="300px" sx={{ pt: 5 }}>
          <Stack spacing={3}>
            <TextField onChange={(e) => setEmail(e.target.value)} required label="メールアドレス" type="email" />
            <TextField onChange={(e) => setPassword(e.target.value)} required label="パスワード" type="password" />
          </Stack>
        </Box>
        <br />
        <Button variant="contained" onClick={() => login()}>
          ログイン
        </Button>
        <p className={style.jsMT0}>メールアドレス: {defaultEamil}</p>
        <p className={style.jsMT0}>パスワード:{defaultPassword}</p>
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={2000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {loginMessage}
          </Alert>
        </Snackbar>
      </div>
    </>
  )
}