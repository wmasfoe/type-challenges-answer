// K 必须是 T 属性的 子集 ( keyof T 获取 T 类型的所有公共属性用作 key )
type MyPick<T, K extends keyof T> = {
  // P 存在 类型K中
  [P in K]: T[P] // 从 T 中索引访问 P 属性
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

type T = MyPick<Todo, 'title'>