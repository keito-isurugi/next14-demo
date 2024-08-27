'use client'

import { Counter, countAtom } from './Counter'
import { useRecoilState } from "recoil";

export default function Home() {
  const [count, setCount] = useRecoilState(countAtom);

  return (
    <div>
      <p>カウンター</p>
      <button onClick={() => setCount(count => count + 1)}>
        カウント
      </button>
      <p>{count}</p>
      <Counter />
    </div>
  );
}
