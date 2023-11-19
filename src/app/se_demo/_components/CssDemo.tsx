import style from "@/app/se_demo/_components/_css/cssdemo.module.css"
import { Button, Checkbox, Container, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, TextareaAutosize } from '@mui/material'

export default function CssDemo() {
  return (
    <>
      <h1>CSSのデモ</h1>
      <p className={style.fontRed}>文字の色</p>
      <p className={style.fontSize}>文字の太さ</p>
      <p className={style.fontWeight}>文字の大きさ</p>
      <p className={style.textAlignLeft}>左寄せ＆背景色</p>
      <p className={style.textAlignCenter}>中央＆背景色</p>
      <p className={style.textAlignRight}>右寄せ＆背景色</p>
      <p className={style.marginTop}>上に余白＆背景色＆幅と高さ</p>
      <div className={style.flex}>
        <div className={style.flex1}>
          <p>横並びに</p>
          <p>して</p>
          <p>みました</p>
        </div>
        <div className={style.flex2}>
          <p>横並びに</p>
          <p>して</p>
          <p>みました</p>
        </div>
      </div>
      <div>
        <p className={style.border}>枠線もつけたり</p>
        <p className={style.borderRedius}>枠線を丸くしたりもできる</p>
      </div>
      <h2 className={style.textAlignCenter}>入力フォーム</h2>
      <Container maxWidth="sm" sx={{ pt: 5 }}>
        <Stack spacing={3}>
          <TextField required label="名前" />
          <TextField required label="メールアドレス" type="email" />
          <TextField required label="年齢" type="number" />
          <TextField required label="パスワード" type="password" />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={0}
            label="都道府県"
            // onChange={handleChange}
          >
            <MenuItem value={0}>都道府県</MenuItem>
            <MenuItem value={10}>東京</MenuItem>
            <MenuItem value={20}>大阪</MenuItem>
            <MenuItem value={30}>福岡</MenuItem>
          </Select>

          <FormLabel component="legend">教科</FormLabel>
          <div className={style.formFlex}>
            <FormControlLabel control={<Checkbox defaultChecked />} label="国語" />
            <FormControlLabel required control={<Checkbox />} label="数学" />
            <FormControlLabel required control={<Checkbox />} label="英語" />
          </div>

          <FormLabel component="legend">フルーツ</FormLabel>
          <RadioGroup
            row
            aria-label="フルーツ" 
            name="gender1"
            // value={value} 
            // onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="りんご" />
            <FormControlLabel value="male" control={<Radio />} label="みかん" />
            <FormControlLabel value="other" control={<Radio />} label="すいか" />
          </RadioGroup>

          <TextareaAutosize
            minRows={4}
            aria-label="maximum height"
            placeholder="備考"
          />

          <Button color="primary" variant="contained" size="large">
            作成
          </Button>
        </Stack>
      </Container>
    </>
  )
}