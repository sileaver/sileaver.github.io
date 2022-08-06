## Normalization layers [[source\]](http://pytorch.org/docs/nn.html#normalization-layers)

### class torch.nn.BatchNorm1d(num_features, eps=1e-05, momentum=0.1, affine=True) [[source\]](http://pytorch.org/docs/nn.html#torch.nn.BatchNorm1d)

对小批量(mini-batch)的2d或3d输入进行批标准化(Batch Normalization)操作

![image-20220806153859588](https://sileaver.oss-cn-hangzhou.aliyuncs.com/img/image-20220806153859588.png)



在每一个小批量（mini-batch）数据中，计算输入各个维度的均值和标准差。gamma与beta是可学习的大小为C的参数向量（C为输入大小）

在训练时，该层计算每次输入的均值与方差，并进行移动平均。移动平均默认的动量值为0.1。

在验证时，训练求得的均值/方差将用于标准化验证数据。

**参数：**

- **num_features：** 来自期望输入的特征数，该期望输入的大小为'batch_size x num_features [x width]'
- **eps：** 为保证数值稳定性（分母不能趋近或取0）,给分母加上的值。默认为1e-5。
- **momentum：** 动态均值和动态方差所使用的动量。默认为0.1。
- **affine：** 一个布尔值，当设为true，给该层添加可学习的仿射变换参数。

**Shape：** - 输入：（N, C）或者(N, C, L) - 输出：（N, C）或者（N，C，L）（输入输出相同）