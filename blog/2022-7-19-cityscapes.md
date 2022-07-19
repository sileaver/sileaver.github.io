# cityscapes

简单介绍一下这个数据集的坑吧

首先gtfine为标签，leftimg8bit为图片

gtfine里有五种文件

color彩图，instanceid用于实例分割，labelid用于语义分割，labeltrainid可用于训练，json文件，但是之后会很麻烦，因为cityscapes提供的eval脚本只能用于labelid。

然后还有五个list文件

![image-20220719150405379](https://sileaver.oss-cn-hangzhou.aliyuncs.com/img/image-20220719150405379.png)

如果你够强，自己生成这5个list也行，当然也有别人搞好的list文件

同时我觉得最好看一下list里是个啥，有的拿labelid训练，有的拿trainid训练。只能说别用trainid训练，会变得不幸。

然后再给用paddleb的bml的提个醒：

第一，完整路径是没法作为绝对路径使用的，如果要看的话最好是用shell pwd一下，然后你大概就知道把完整路径中的哪部分删掉就能用了。

第二，如果你非常不幸的遇到了需要一一对应的情况，然后发现总有莫名其妙有多个对应的时候，bml有时会有checkpoint文件，而且是不可见的，这个时候建议查一下文件夹里有啥，然后精准对应一下。

第三，有的时候静态图转化需要指定输入大小，不然没法导出，具体原因不知道，如果有知道的可以告诉我一下为什么这么设计。