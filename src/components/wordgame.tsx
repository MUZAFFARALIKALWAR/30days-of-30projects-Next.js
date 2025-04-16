"use client"
import * as React from "react"
import { useState,ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from "./ui/textarea"
import Link from "next/link"


export function WordGame() {

    
const [text,setText] = useState<string>("")

const hanldletext = (e:ChangeEvent<HTMLTextAreaElement>)=>{
  setText(e.target.value)
}

const clear = ()=>{
    setText("")
}
const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

const charCount = text.length;


  return (
  <main className="flex flex-col justify-center items-center h-screen">
  <Link className="p-2 rounded-xl text-center font-bold bg-gray-300 m-5" href={"/"}>Home</Link>

      <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Text Analysis</CardTitle>
        <CardDescription>Enter text and see the word and character count.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
            <Textarea
            id="text-input"
            value={text}
            onChange={hanldletext}
            placeholder="Enter your text here..."
            className="h-32 resize-none"
          />           
           </div>
           
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
      <div className="text-sm text-muted-foreground">
              <span id="word-count">{}</span> {wordCount} words,{" "}
              <span id="char-count">{}</span> characters {charCount}
              
            </div>
        <Button variant="outline" onClick={clear}>Clear</Button>
      </CardFooter>
    </Card>
  </main>
  )
}
