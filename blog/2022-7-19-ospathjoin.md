os.path.join()函数：连接两个或更多的路径名组件

- 如果各组件名首字母不包含’/’，则函数会自动加上
- 如果有一个组件是一个绝对路径，则在它之前的所有组件均会被舍弃
- 如果最后一个组件为空，则生成的路径以一个’/’分隔符结尾
- 会从第一个以”/”开头的参数开始拼接，之前的参数全部丢弃。
- 以上一种情况为先。在上一种情况确保情况下，若出现”./”开头的参数，会从”./”开头的参数的上一个参数开始拼接。

### Demo

`import os`

`Path1 = 'home'`
`Path2 = 'develop'`
`Path3 = 'code'`

`Path10 = Path1 + Path2 + Path3`
`Path20 = os.path.join(Path1,Path2,Path3)`
`print ('Path10 = ',Path10)`
`print ('Path20 = ',Path20)`

`**输出**`

`Path10 = homedevelopcode`
`Path20 = home\develop\code`