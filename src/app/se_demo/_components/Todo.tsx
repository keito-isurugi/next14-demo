"use client"
import { Button, TextField, List, ListItem } from "@mui/material";
import styles from "@/app/se_demo/_components/_css/cssdemo.module.css"
import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState<any>([]);
  const [input, setInput] = useState('');
  const [isInputting, setIsInputting] = useState(false)

  const addTodo = () => {
    if(input !== '') {
      setTodos([...todos, input]);
      setInput('');
    } else {
      alert("入力してください！！！")
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_:any, i:any) => i !== index));
  };

  return (
    <>
      <div className={styles.todoAppContainer}>
        <h4 className={styles.jsMT0}>やることリスト</h4>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onCompositionStart={() => setIsInputting(true)}
          onCompositionEnd={() => setIsInputting(false)}
          onKeyDown={e => {
            if(isInputting) return;
            if (e.key === 'Enter') {
              addTodo()
            }
          }}
          placeholder="やることを入力"
        />
        <Button variant="contained" onClick={addTodo}>追加</Button>
        <List>
          {todos.length === 0 ? "現在やることはありません" : "やること一覧"}
          {todos.map((todo: any, index: any) => (
            <>
              <div className={styles.jsFlex}>
                <ListItem className={styles.todoContainer} key={index}>
                  <p className={styles.jsMT0}>やること{index + 1}：</p>
                  <p className={styles.todoItem}>{todo}</p>
                  <Button variant="contained" color="error" onClick={() => removeTodo(index)}>削除</Button>
                </ListItem>
              </div>
            </>
          ))}
        </List>
      </div>
    </>
  )
}