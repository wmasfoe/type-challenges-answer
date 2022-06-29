import type { Equal, Expect } from '@type-challenges/utils'

type MyReadonly<T> = {
  /**
   * keyof 取 T 的所有属性
   * 遍历取出的属性
   * 加 readonly 前缀
   */
  readonly [P in keyof T]: T[P] // `P in keyof T` 保证取出的 P 存在 T 中
}

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

