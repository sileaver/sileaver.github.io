# transformer

[TOC]

这东西老实说是一个大坑，坑在哪呢，学的东西要写很久。姑且先鸽一会。

## VIT

第一次将transformer引入cv中，因为transformer在NLP中的表现很好。

![image](http://tva3.sinaimg.cn/large/008snjoggy1h22il1ij2kj30hg0ljq6x.jpg)

### Transformer的优势
1.并行计算

![image](http://tva1.sinaimg.cn/large/008snjoggy1h22ilzwwb6j30oo0h9wm3.jpg)2.全局视野
3.灵活的堆叠能力

### VIT结构

![image](http://tvax2.sinaimg.cn/large/008snjoggy1h22iojnunaj30w10hnn3w.jpg)

只使用了transformer的encoder

但是transformer有全局视野

#### self attention

对相似度的计算

![image](http://tvax2.sinaimg.cn/large/008snjoggy1h22is7c3bpj30bg02e74h.jpg)

![image](http://tva2.sinaimg.cn/large/008snjoggy1h22it5kkp9j30f40boq4y.jpg)

Query:查询,询问

Key:键值,关键词

Value:价值,数值



q1，k1向量点积计算相似度，从点积求投影就可以看成，越相似，投影越长。

![image](http://tvax2.sinaimg.cn/large/008snjoggy1h22iycgkwnj30fg0btwha.jpg)

norm只是为了让值小一点，multiply我理解为重要程度，而sum就是上下文。

矩阵计算本身就是并行

MultiHead Attention
有多个Wq,Wk,Wv,上述操作重复多次结果concat一起

可以给注意力提供多种可能性，比如稀疏，密集之类

#### transformer encoder

![image](http://tvax1.sinaimg.cn/large/008snjoggy1h22j7pdolwj307p0dzgn1.jpg)

#### 输入端适配

因为transformer本身并非用于cv的，而是NLP，所以需要做出一些调整，将图片进行切分然后按编号输入网络。用来模拟句子，当然输入线性层直接打平。

![image](http://tvax3.sinaimg.cn/large/008snjoggy1h22jcck0zfj30gd091jtr.jpg)

##### Patch 0的作用
需要一个整合信息的向量
如果只有原始输出的9个向量
用哪个向量来分类都不好全用计算量又很大
所以加一个可学习的vector也就是patch 0来整合信息。

同时图像切片损失了位置信息，而且transformer本身也不关注这个。所以需要补位置信息。ViT使用了一个可学习的vector来编码
vector和patch vector直接相加组成输入。（相加是concat的特例）

## PVT

挺拉的，就别浪费时间管他了，主要就想控制显存，transformer真不是一般人能用的，控制k，v的数量，但是它怎么控制的我真不想评价，只能说给我干沉默了。

## Swin transformer 

`很好的baseline！`它和之前的PVT其实关注的都是一个问题，transformer占显存，通过控制token大小与数量来实现。

### VIT的缺点

- 显存占用- Token数量
- 表示方法-Token应该多大?
- 难以用在下游任务

  - Token指的是模型运行中最小的处理单元。
  - NLP中的Token一般指的是一个单词，Token的数量就是一段文字中单词的数量，一般不会特别多。
  - ViT中的Token指的是一个Patch，Token的数量就是Patch的数量，这一点和图像分辨率以及Patch大小有关


### dilemma

**Patch小-> Token数量多->MHA复杂度高->资源不足**

**Patch大->Token数量少->Feature Map分辨率低**

### structure

![image](http://tva1.sinaimg.cn/large/008snjoggy1h25w5xap5tj30u50awwkl.jpg)

### W-MSA

Swin Transformer使用window multiscale self attention，将attention的计算限制在同一个窗口内，使得复杂度降到了o(n)

#### 缺点

显然这样硬性的限制会丢失全局信息，限制模型能力，因此需要一个跨Window的操作，增强window间的交互，所以还要一个SW-MSA

### SW-MSA

![image](http://tva3.sinaimg.cn/large/008snjoggy1h25wca6yc8j30nw09p0xj.jpg)

#### 缺点

移动切分后，window的数量变多了，而且window的尺寸不一样了。

所以他们设计了一种更高效的办法`cyclic shift`

![image](http://tvax3.sinaimg.cn/large/008snjoggy1h25wftyyesj30ta0640ue.jpg)

![image](http://tvax4.sinaimg.cn/large/008snjoggy1h25whi7rc9j30uy078go6.jpg)

### 相对位置编码

这里的相对位置编码是对每个window内的patch写死的，是不可学习的，是人为设计好的

### inductive bias

比较有趣的一个东西，它就是我们所说的归纳偏置
归纳->总结，也就是从现存的例子中找到一些比较通用的规则偏置->选择偏好。
整理在一起可以理解为:在面对一些特定问题的时候，我们认为模型应该会有哪些特点会比较容易work，因此而做出的一系列对模型的人为限制。
比如图像处理中，每个位置的信息与周围的信息相关，因此设计出conv

#### conv中的两个归纳偏置

- 局部相关性：邻近的像素是相关的。会导致feature map十分平滑，在一定程度上影响目标检测的效果。
- 权重共享：图像的不同部分应该以相同的方式处理，无论它们的绝对位置如何。

比如NLP中，认为输出的结果与单词的先后顺序相关，因此设计出RNN。

### 为什么卷积核是奇数的

因为奇数的卷积核拥有中心，可以很好确定位置

### 为什么深层feature map让人san值狂掉

因为浅层特征还关注的是颜色边缘，深层以后其实已经是多个特征组成的语义了。能理解就怪了（）

## DETR

### structure

![image](http://tva3.sinaimg.cn/large/008snjoggy1h25x0q2v5yj30te0a0ag0.jpg)

![image](http://tva4.sinaimg.cn/large/008snjoggy1h25x1dx7o7j30q20d6aj5.jpg)

### nms缺点

1. 如果两个框离的很近，那么两个框很有可能属于同一instance(两个instance本来就很近)
2. 在属于同一instance的框中，分类得分越高的，定位质量越高（并不一定)

### Dense prediction

1. 利用Anchor进行预定位
2. 判断Anchor是前景还是背景给出proposal
3. 之后预测给出的proposal的类别
4. 最后NMS输出结果

### Set prediction

将预测集与GT集进行匹配。

#### match loss

![image](http://tvax3.sinaimg.cn/large/008snjoggy1h25x49ci3aj30tn08qgqg.jpg)

![image](http://tvax4.sinaimg.cn/large/008snjoggy1h25x558qygj30tn0extds.jpg)

匈牙利算法之前deepsort说过，这里就不说了，就是找最大匹配。

#### 位置编码（position embedding）

这里的位置编码是写死的，不可学习的
具体写法是根据左边公式，其中pos代表token在序列中的位置，而d代表一个token用多少维来表示。由于图像是2d的，因此DETR将这种方法推广到了2d，见右边公式。

![image](http://tvax2.sinaimg.cn/large/008snjoggy1h25xaka0o5j30dx03oq3a.jpg)![image](http://tva3.sinaimg.cn/large/008snjoggy1h25xc98c0qj30gr066wfg.jpg)

这里的位置编码会应用到每一个encoder上，而不只是开头的第一个而且只会加到QK上，不影响V
原因: Patch间的信息交互才需要位置信息，也就是需要加到Q@KT这一步上。而下一次生成QK，是根据V生成的，所以每一个encoder都要重新加一遍这个信息。

#### encoder&decoder

![image](http://tva2.sinaimg.cn/large/008snjoggy1h25xee0cb7j30e00e50vf.jpg)

左侧为编码器，右侧为解码器
多出来的MSA，K和V来自于encoder而Q是来自于Obj queries
这种来QK来自于不同地方的attention也叫cross attention

##### Object quiries

这个东西的作用和cls token类似，也是在整合信息。
Object queries是一个可学习的向量(num, b, dim)

- Num是人为给的值，远大于图片内物体数量，默认100b是batch size
- dim是attention运行过程中用的维度数

最终学出来的东西类似于Anchor