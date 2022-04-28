- [***一份学习报告***](#一份学习报告)
  - [*变量，字符串，数字*。](#变量字符串数字)
  - [*列表*](#列表)
  - [*元组*](#元组)
  - [元组可以迭代](#元组可以迭代)
  - [*循环*（末尾打冒号）](#循环末尾打冒号)
    - [*for循环*](#for循环)
    - [*if语句*（同上）](#if语句同上)
      - [and](#and)
      - [or](#or)
      - [if else语句](#if-else语句)
      - [if -elif-else](#if--elif-else)
  - [*字典*](#字典)
    - [items](#items)
    - [key（）](#key)
    - [value（）](#value)
  - [*input（）*](#input)
  - [*while循环*](#while循环)
  - [*函数*](#函数)
  - [*模块*](#模块)
    - [as取别名](#as取别名)
    - [类](#类)
      - [继承](#继承)
      - [Python标准库](#python标准库)
  - [*文件和异常*](#文件和异常)
    - [try-except](#try-except)
      - [避免崩溃，处理异常](#避免崩溃处理异常)
  - [pycharm](#pycharm)
- [softmax](#softmax)
- [bn](#bn)
    - [yolo](#yolo)
- [deepsort](#deepsort)
  - [卡尔曼滤波](#卡尔曼滤波)
  - [匈牙利算法](#匈牙利算法)
    - [马氏距离](#马氏距离)
    - [余弦距离](#余弦距离)
  - [ReID](#reid)
- [关于点线距离的计算方法](#关于点线距离的计算方法)
- [代码](#代码)
- [cv2](#cv2)
  - [高斯滤波](#高斯滤波)
- [canny边缘检测](#canny边缘检测)
- [图像切片](#图像切片)
- [图像处理](#图像处理)
- [format方法](#format方法)
- [!成功通过 SSH 登入](#)
- [1.根据文件名查找文件所在目录、](#1根据文件名查找文件所在目录)
- [2.查找包含某段内容的文件](#2查找包含某段内容的文件)
- [报错](#报错)
    - [](#-1)
- [](#-2)
    - [](#-3)
- [部分图片炸了，之后会处理](#部分图片炸了之后会处理)
    - [LaTex](#latex)

# ***一份学习报告***

## *变量，字符串，数字*。

没什么感觉，可能就是注意一下数字需要用str（）才能和字符串一起输出。

## *列表*

挺方便的，啥都能往里丢，相当于加强版的c语言数组

使用sort()对列表进行永久性排序，默认正序，想逆序sort（reverse=True）

使用sorted（）对列表进行临时性排序，接下来同上

使用reverse（）使列表倒着，想恢复再来一回reverse（），毕竟负负得正（笑）

len（）确定长度

索引依旧从零开始

利用range创建数字列表，range（1,5）不打印5，有min，max，sum这种解放双手的函数

切片就是创造一个列表的副本，想咋整咋整

## *元组*

我的理解是这玩意是个常数数组

 ## 元组可以迭代

## *循环*（末尾打冒号）

注意缩进（o(╥﹏╥)o）

### *for循环*

区别不大，不过好像没有可以花式整活的（；；）有点怀念

### *if语句*（同上）

Python对大小写敏感

#### and

#### or

**检查特点值是否不包含在列表中，使用关键字not in**

示例：if user not in users：

#### if else语句

#### if -elif-else

同c的else if

## *字典*

啥都能丢，键值对是它最大的特点

### items

### key（）

### value（）

## *input（）*

## *while循环*

break之流不多赘述

## *函数*

## *模块*

### as取别名

### 类

这个算是Python的特点了，但是我现在还没悟出来有啥用

#### 继承

#### Python标准库

## *文件和异常*

文件就丢个名字上去，异常为了处理traceback使其更加安全

### try-except

#### 避免崩溃，处理异常

**对神经网络有简单了解并能搭建一个简单的bp，虽然是改的。**

## pycharm

ctrl+shift+alt+点击鼠标左键.可以在任意位置增加光标.

# softmax



输入向量{\displaystyle [1,2,3,4,1,2,3]}![{\displaystyle [1,2,3,4,1,2,3]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d068344b5d5265343f7fdf213e30f73afe408278)对应的Softmax函数的值为{\displaystyle [0.024,0.064,0.175,0.475,0.024,0.064,0.175]}![{\displaystyle [0.024,0.064,0.175,0.475,0.024,0.064,0.175]}](https://wikimedia.org/api/rest_v1/media/math/render/svg/c9679f3b44ebb0dbf20990e3d86b29b33e57c564)。输出向量中拥有最大权重的项对应着输入向量中的最大值“4”。这也显示了这个函数通常的意义：对向量进行归一化，凸显其中最大的值并抑制远低于最大值的其他分量。



# bn

（2）批规范化BN，标准化Standardization，正则化Regularization
批规范化（Batch Normalization，BN）：在minibatch维度上在每次训练iteration时对隐藏层进行归一化
标准化（Standardization）：对输入数据进行归一化处理
正则化（Regularization）：通常是指对参数在量级和尺度上做约束，缓和过拟合情况，L1 L2正则化

如果把 ![[公式]](https://www.zhihu.com/equation?tex=x+%5Cin+%5Cmathbb%7BR%7D%5E%7BN+%5Ctimes+C+%5Ctimes+H+%5Ctimes+W%7D) 类比为一摞书，这摞书总共有 N 本，每本有 C 页，每页有 H 行，每行 W 个字符。BN 求均值时，相当于把这些书按页码一一对应地加起来（例如第1本书第36页，第2本书第36页......），再除以每个页码下的字符总数：N×H×W，因此可以把 BN 看成求“平均书”的操作（注意这个“平均书”每页只有一个字)，求标准差时也是同理。

目的是为了得到所有图片在同一个通道的均值和方差，进而归一化

从公式看它们都差不多：无非是减去均值，除以标准差，再施以线性映射。

![image-20220109194840057](http://tva2.sinaimg.cn/large/008snjoggy1h1jqormjmjj31hc0u0k7b.jpg)

### yolo

锚点，全局，中心框偏移

# deepsort

## 卡尔曼滤波

借助模型和测量推断

[(7 封私信 / 80 条消息) 如何通俗并尽可能详细地解释卡尔曼滤波？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/23971601/answer/194464093)

## 匈牙利算法

[简单理解增广路与匈牙利算法 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/208596378)最大匹配

### 马氏距离

[马氏距离(Mahalanobis Distance) - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/46626607)

### 余弦距离

[余弦距离介绍 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/108508605)

## ReID

[小白入门系列——ReID(一)：什么是ReID？如何做ReID？ReID数据集？ReID评测指标？ - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/83411679)

# 关于点线距离的计算方法

之前一直以为计算点线距离需要写很复杂的表达式，利用点线距离公式去计算，直到我看到了一种精妙的方法。将点线距离转化为求以中心点，起点，终点所构成的三角形的高度，基于numpy库进行数学运算，得到点线距离。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200722135043131.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3NpbmF0XzI5OTU3NDU1,size_16,color_FFFFFF,t_70)

![image-20220409184643417](http://tvax3.sinaimg.cn/large/008snjoggy1h1jqq1lc85j307z02374a.jpg)

利用三角形面积相等原则，可以转换为

![image-20220409184723418](http://tva4.sinaimg.cn/large/008snjoggy1h1jqqi3rgvj309c022glr.jpg)

# 代码

`

```
import numpy as np`

`def point_distance_line(point,line_point1,line_point2):`
	`#计算向量`
    `vec1 = line_point1 - point`
    `vec2 = line_point2 - point`
    `distance = np.abs(np.cross(vec1,vec2)) / np.linalg.norm(line_point1-line_point2)`
    `return distance`

`point = np.array([5,2])`
`line_point1 = np.array([2,2])`
`line_point2 = np.array([3,3])`
`print(get_distance_from_point_to_line(point,line_point1,line_point2))`
`print(point_distance_line(point,line_point1,line_point2))
```

`

# cv2

## 高斯滤波

```
cv2.GaussianBlur
```

高斯滤波器的目的是减少图像中的噪声。

- 语法：GaussianBlur（src，ksize，sigmaX [，dst [，sigmaY [，borderType]]]）-> dst
  ——src输入图像；图像可以具有任意数量的通道，这些通道可以独立处理，但深度应为CV_8U，CV_16U，CV_16S，CV_32F或CV_64F。

- 这个函数使用一个称为高斯核的核函数，用于对图像进行归一化。

  ——dst输出图像的大小和类型与src相同。
  ——ksize高斯内核大小。 ksize.width和ksize.height可以不同，但它们都必须为正数和奇数，也可以为零，然后根据sigma计算得出。
  ——sigmaX X方向上的高斯核标准偏差。
  ——sigmaY Y方向上的高斯核标准差；如果sigmaY为零，则将其设置为等于sigmaX；如果两个sigmas为零，则分别从ksize.width和ksize.height计算得出；为了完全控制结果，而不管将来可能对所有这些语义进行的修改，建议指定所有ksize，sigmaX和sigmaY

# canny边缘检测

这是我们检测图像边缘的地方，它所做的是计算像素强度的变化(亮度的变化)在一个图像的特定部分。幸运的是，OpenCV使它变得非常简单。

cv2.Canny函数有3个参数，(img, threshold-1, threshold-2)。

- img参数定义了我们要检测边缘的图像。
- threshold-1参数过滤所有低于这个数字的梯度(它们不被认为是边缘)。
- threshold-2参数决定了边缘的有效值。
- 如果两个阈值之间的任何梯度连接到另一个高于阈值2的梯度，则将考虑该梯度。

```
lines = cv2.HoughLinesP(isolated, rho=2, theta=np.pi/180, threshold=100, np.array([]), minLineLength=40, maxLineGap=5)
```

这一行代码是整个算法的核心，它被称为霍夫变换(Hough Transform)，将孤立区域的白色像素簇转换为实际的线条。



- 参数1:孤立梯度

- 参数5:占位符数组

- 参数6:最小行长

- 参数7:最大行间距

- 霍夫线变换会返回一个lines，分别为拟合出直线的起点和终点。配合上cv2.line

- cv2.line(img, pt1, pt2, color[, thickness[, lineType[, shift]]]) → img

  img，背景图
  pt1，直线起点坐标
  pt2，直线终点坐标
  color，当前绘画的颜色。如在BGR模式下，传递(255,0,0)表示蓝色画笔。灰度图下，只需要传递亮度值即可。
  thickness，画笔的粗细，线宽。若是-1表示画封闭图像，如填充的圆。默认值是1.
  lineType，线条的类型，
  可以将拟合出来的直线可视化，这就是车道线检测。

```
gray=cv2.cvtColor(frame,cv2.COLOR_RGB2GRAY)
```

cvtcolor-颜色空间转换函数

这里是为了配合canny边缘检测对原图进行灰度化。

由于边缘检测的概念挺复杂，在此不过多赘述。

```
mask=np.zeros_like(frame)
cv2.fillPoly(mask,polygons,(255,255,255))
masked_image=cv2.bitwise_and(frame,mask)
```

这三行代码可以用于提取掩码范围内的图片，bitwise_and，位与运算，取较小的那个值，因为白色全为255，所以位运算后必然全取原值，白色区域范围外的黑色范围始终为黑色。（0,0,0）在此不多解释，fillpoly（填充多边形）第三个参数color请务必用元组，不用元组你会后悔的。

mask：掩码

polygons：多边形坐标

```
cap = cv2.VideoCapture(r'D:\Vehicle-Detection-And-Speed-Tracking\Car_Opencv\闯红灯.mp4')
```

视频流获取

```
ret, frame = cap.read()
```

读取视频流，并返回结果。

```
frame=cv2.addWeighted(lane_image,0.8,line_image,1,1)
```

图像加权融合。

# 图像切片

```
import cv2

img = cv2.imread("./data/cut/thor.jpg")
print(img.shape)
cropped = img[0:128, 0:512]  # 裁剪坐标为[y0:y1, x0:x1]
cv2.imwrite("./data/cut/cv_cut_thor.jpg", cropped)
```

cv2读取出的图像是ndarray，先y再x。

# 图像处理

```
 cv2.rectangle(image, start_point, end_point, color, thickness)
```

参数：

image:它是要在其上绘制矩形的图像。

start_point：它是矩形的起始坐标。坐标表示为两个值的[元组](https://so.csdn.net/so/search?q=元组&spm=1001.2101.3001.7020)，即(X坐标值，Y坐标值)。

end_point：它是矩形的结束坐标。坐标表示为两个值的元组，即(X坐标值ÿ坐标值)。

color:它是要绘制的矩形的边界线的颜色。对于BGR，我们通过一个元组。例如：(255，0，0)为蓝色。

thickness:它是矩形边框线的粗细像素。厚度-1像素将以指定的颜色填充矩形形状。

```
cv2.putText(image, '{} ID-{}-{}km/hr-{}-{}'.format(cls_id, pos_id,speed,deng,sudu), (c1[0], c1[1] - 2), 0, tl / 3,
            [225, 255, 255], thickness=tf, lineType=cv2.LINE_AA)
```

你想写入的文本数据
你想要放置的位置坐标（例如 数据开始于左下角）
Font类型（参见**cv2.putText()**文档获取支持的Font ）
字体规模（特指字体大小）
常规内容，像颜色，粗细度，线类型等等。为了更好的视觉，推荐线条类型为 cv.LINE_AA 。

```
font = cv.FONT_HERSHEY_SIMPLEX
cv.putText(img,"OpenCV",(10,500),font,4,(255,255,255),2,cv_LINE_AA)
```



实例

```
cv2.putText(图片img,“文本内容”,(左下角坐标),字体,字体大小,(颜色)，线条粗细，线条类型)

cv2.putText(img,"paradise",(200,100),self.font,3,(100,255,0),1,cv2.LINE_AA)

```

![flip](http://tvax2.sinaimg.cn/large/008snjoggy1h1jqlvc4fcj30r00entf3.jpg)

# format方法

它的基本使用格式如下：
template.format(p0, p1, ..., k0=v0, k1=v1, ...)
template是一个字符串，其中包括需要格式化输出的部分，这些部分各用大括号括起来{}。format后面的参数p表示第几个位置的需要格式化输出的变量。
举个例子：

>"First argument: {0}, second one: {1}".format(47,11) 
>'First argument: 47, second one: 11'
>"Second argument: {1}, first one: {0}".format(47,11) 
>'Second argument: 11, first one: 47'

树莓派拥有用户名，密码，和su

密码一般用来干各种事确认身份

su用于获得root权限

sudo也是，只不过是单次

1.查看当前文件夹下的文件
dir

2.返回上一/两个目录
cd …
cd …/…

3.Tab
直接按Tab,可以查看当前文件下的所有东西

4.移动文件
mv 文件名 移动目的地文件名

5.重命名文件
mv 文件名 修改后的文件名

6.传文件

本地传树莓派

scp -r C:\Users\a\Desktop\shumeipai pi@192.168.3.172:/home/pi

-r是文件夹

树莓派传本地地址反一下就行

当然，要输密码

而且scp命令不需要链接ssh，直接在本地进行。

有的时候github库会有问题，如ncnn的glslang无法进行get submodule --init，我的解决方法是去glslang手动clone一个，同时遇到了vulkan-tools不在源内的情况。树莓派是arm64架构，可下载arm64版本的deb安装包，类似于安卓的apk。

树莓派运行c++

7.装vim编译器

sudo apt-get install vim

8.运行文件

gcc 文件名 -o 日志

9.编译

vim 文件名

10.电脑可以通过ssh远程操控树莓派

电脑应与树莓派连接在同一个网络下

首先通过ifconfig命令，在wlan得到树莓派的ip，类似192.138.264.339这种

然后在电脑cmd上利用ssh pi@192.138.264.339便可连接

![img](https://img.linux.net.cn/data/attachment/album/201905/23/100659yig3tz5h77z734gg.png)

第一次你会看到一个警告，输入 `yes` 并按下回车。

请一定关闭电脑防火墙，不然你会发现一直超时连不上！

# ![成功通过 SSH 登入](https://img.linux.net.cn/data/attachment/album/201905/23/100701shhf6o4qd4b3okfq.png)

然后输入树莓派的密码并按回车

成功登入你将会看到树莓派的终端。现在你可以通过这个终端无需物理上访问你的树莓派就可以远程（在当前网络内）在它上面运行指令。



![在这里插入图片描述](https://img-blog.csdnimg.cn/20200814200424643.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM5MzQ2NTM0,size_16,color_FFFFFF,t_70#pic_center)

类似这样。这样的好处是什么呢，直接把树莓派当电脑用巨难受。所以为啥不用电脑

`-mfloat-abi=hard -mfpu=neon"`

当你看见类似这种玩意报错，无法识别这种命令时，请使用以下技巧

# 1.根据文件名查找文件所在目录、

​            `目录      参数         文件名`

`find /home -name arch_select.ccarch_select.cc`

此外，find还可以用来查找过去x时间内被修改/读取过的文件：

find . -ctime -20  #将目前目录及其子目录下所有最近 20 天内更新过的文件列出

#-amin n : 在过去 n 分钟内被读取过
#-atime n : 在过去n天内被读取过的文件
#-cmin n : 在过去 n 分钟内被修改过
#-ctime n : 在过去n天内被修改过的文件
#-anewer file : 比文件 file 更晚被读取过的文件
#-cnewer file :比文件 file 更新的文件



# 2.查找包含某段内容的文件

`                       参数     内容          目录或文件`

`grep -r -l "cortex" /home/Downloads/srsLTE/`

-r：表示在当前文件夹及其子目录中查找；
-l：只输出对应文件的包含路径的文件名，不加此参数还会输出包含该内容的整段信息。
还有一些常用参数：
-n：显示搜索文本在文件中的行数；
-i：忽略大小写问题；
-w ：只显示全字符合的列；

**然后就去把识别不出来的命令删了吧，也许有用。**

# 报错

出现`grep: invalid max count`错误，原因是某些字符需要添加转义字符`\`才能被正常识别。
![img](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pY29uLnFpYW50dWNkbi5jb20vMjAyMDA3MjAvOTAyMzY0ZTQ0ODE1MmVmZTJlYjlmMGMyYjVhYmIyN2Yy?x-oss-process=image/format,png)

### 



# 

### 

# 部分图片炸了，之后会处理

###  LaTex

[(67条消息) Latex各种命令、符号、公式、数学符号、排版等_CopperDong的博客-CSDN博客_latex中数学公式](https://blog.csdn.net/QFire/article/details/81382048?ops_request_misc=%7B%22request%5Fid%22%3A%22165003628516780274141869%22%2C%22scm%22%3A%2220140713.130102334.pc%5Fall.%22%7D&request_id=165003628516780274141869&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-3-81382048.142^v9^pc_search_result_cache,157^v4^control&utm_term=latex数学公式&spm=1018.2226.3001.4187)



