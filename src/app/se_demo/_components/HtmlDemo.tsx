import Image from "next/image"

export default function HtmlDemo() {
  return (
    <>
      <h1>HTMLのデモ</h1>
      <h2>見出し2</h2>
      <h3>見出し3</h3>
      <h4>見出し4</h4>
      <h5>見出し5</h5>
      <div>
        <p>本文です。本文です。本文です。本文です。ここで改行。<br />改行しました。</p>
      </div>
      <ul>
        <li>このように</li>
        <li>リスト形式の</li>
        <li>文章構造も</li>
        <li>作成できる</li>
      </ul>
      <ol>
        <li>番号付きの</li>
        <li>リストも</li>
        <li>作成できます</li>
      </ol>

      <h2>画像</h2>
      <Image src="/images/test3.jpg" width={540} height={340} alt="pc_img" />

      <h2>入力フォーム</h2>
      <form action="">
        <label htmlFor="">名前</label><input type="text" />
        <br />
        <label htmlFor="">メールアドレス</label><input type="email" />
        <br />
        <label htmlFor="">年齢</label><input type="number" />
        <label htmlFor="">パスワード</label><input type="password" />
        <br />
        <label htmlFor="">都道府県</label>
        <select name="" id="">
          <option value="">東京</option>
          <option value="">大阪</option>
          <option value="">福岡</option>
        </select>
        <div>
          <label htmlFor="">国語</label>
          <input type="checkbox" name="checkbox" id="" />
          <label htmlFor="">数学</label>
          <input type="checkbox" name="checkbox" id="" />
          <label htmlFor="">英語</label>
          <input type="checkbox" name="checkbox" id="" />
        </div>
        <div>
          <label htmlFor="">りんご</label>
          <input type="radio" name="radio" id="" checked/>
          <label htmlFor="">みかん</label>
          <input type="radio" name="radio" id="" />
          <label htmlFor="">すいか</label>
          <input type="radio" name="radio" id="" />
        </div>
        <textarea name="" id="" cols={30} rows={10}></textarea>
        <br />
        <input type="button" value="送信" />
      </form>
    </>
  )
}