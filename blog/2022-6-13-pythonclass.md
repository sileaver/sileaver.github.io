什么是面向对象编程
1、面向对象编程(oop)是一种程序设计思想。oop把对象作为程序的基本单元，一个对象包含数据和操作数据的函数

2、在python中，所有数据类型都被视为对象，也可以自定义对象。自定义对象数据类型就是面向对象中类的概念

面向对象术语简介
1、类(Class): 用来描述具有相同的属性和方法的对象的集合。它定义了该集合中每个对象所共有的属性和方法。对象是类的实例

2、方法：类中定义的函数

3、类变量(属性)：类变量在整个实例化的对象中是公用的。类变量定义在类中且在函数体(方法)之外。类变量通常不作为实例变量使用，类变量也称作属性

4、数据成员：类变量或者实例变量用于处理类及其实例对象的相关的数据

5、方法重写：如果从父类继承的方法不能满足子类的需求，可以对其进行改写，这个过程叫方法的覆盖（override），也称为方法的重写

6、实例变量：定义在__init__方法中的变量，只作用于当前实例的类

7、继承：即一个派生类(derived class)继承基类(base class)的字段和方法。继承也允许把一个派生类的对象作为一个基类对象对待,以普通的类为基础建立专门的类对象

8、实例化：创建一个类的实例，类的具体对象。一个类可以实例化出无数个对象

9、对象：通过类定义的数据结构实例。对象包括两个数据成员(类变量和实例变量)和方法

10、多态：对不同类的对象使用同样的操作

11、封装：对外部世界隐藏对象的工作细节

Python类
1、类提供了一种组合数据和功能的方法。创建一个新类意味着创建一个新的对象类型，从而允许创建一个该类型的新实例

2、每个类的实例可以拥有保存自己状态的属性。一个类的实例也可以有改变自己状态的（定义在类中的）方法

3、Python的类提供了面向对象编程的所有标准特性：
    ⑴类继承机制允许多个基类，派生类可以覆盖它基类的任何方法，一个方法可以调用基类中相同名称的的方法
    ⑵对象可以包含任意数量和类型的数据
    ⑶和模块一样，类也拥有Python天然的动态特性：它们在运行时创建，可以在创建后修改

Python类的定义
1、python中定义类使用class关键字，class后面紧接类名，类名通常是大写开头的单词(无类继承时类名后可以加括号也可以不加括号)

2、python中类的定义语法如下：

	class ClassName:
		语句1
		...
		语句n
注：
1、类定义与函数定义(def语句)一样：只有在被执行才会起作用
    ⑴在定义阶段只是语法检查

2、类是属性和方法的组合，所以语句1可能是内部变量(数据、属性)的定义和赋值语句，也可能是内部方法(函数)的定义语句
    ⑴一个对象的特征称为"属性"
    ⑵一个对象的行为称为"方法"
    ⑶属性在代码层面上来看就是变量，方法实际就是函数，通过调用这些函数来完成某些工作

3、进入类定义时，就会创建一个新的命名空间，并把它用作局部作用域
    ⑴因此，所有对局部变量的赋值都是在这个新命名空间内进行的。特别的，函数定义会绑定到这个局部作用域里的新函数名称

4、正常离开(从结尾出)类定义时，就会创建一个类对象
    ⑴它基本上是一个包围在类定义所创建的命名空间内容周围的包装器
    ⑵元素的(在进入类定义之前起作用的)局部作用域将重新生效，类对象将在这里被绑定到类定义头给出的类名称(在上面的例子中就是ClassName)

```

class MyClass:
    """定义一个MyClass类"""
    i = 12345
 
    def func(self):
        return 'hello world'
```

注：
1、类包含属性和方法
    ⑴属性：分为类属性和实例属性
        ①"i = 12345"：表示定义了一个类属性i其值为12345(实例属性后面介绍)
    ⑵方法：即定义在类中的函数(与普通的函数类似)
        ②func：表示定义了一个名为func的实例方法，实际上就是一个稍微特殊点的函数(方法的第一个参数必须为self)

2、在类中定义方法的形式和函数差不多，但其不称为函数，而是叫方法。方法的调用需要绑定到特定的对象上(通过self.或实例对象名)，而函数不需要
    ⑴类内部的函数定义通常具有一种特别形式的参数列表，这个特别形式就是第一个参数必须是self(self参数后面介绍)
    ⑵方法是所有实例都共用的：类外所有实例都可以调用类中的方法，类中方法之间也可以相互调用

3、上面例子中创建了一个MyClass抽象类，定义好类后会在当前作用域定义名字MyClass，指向类对象MyClass

4、类也是一种对象类型，跟前面学习过的数值、字符串、列表等等是一样的
    ⑴比如这里构建的类名字叫做MyClass，那么就是我们要试图建立一种对象类型，这种类型被称之为MyClass，就如同有一种对象类型是list一样

5、Python中一切皆对象。不管是我们自己定义的类、6种基本数据类型还是内置的类(第三方类)等都称作为对象
    ⑴一个对象，就会拥有自己的属性和方法。我们可以通过一定的方式来调用一个对象的属性和方法。这一点自定义类与其他Python类型是一样的

6、Python类中的方法分为：实例方法、类方法、静态方法。这里主要介绍实例方法(方法中第一个参数必须为self)，感觉其他两种方法用的比较少

类对象
1、类是抽象的概念，它是一种数据结构：就好比一个模型，该模型是生活中具有相同属性(特征)和方法(动作)的同一类事务，可以用它来生产真实的物体(实例)
    ⑴在python中，把具有相同属性和方法的对象归为一个类(class)

2、比如，我们可以将类看做是一个"饼干模具"，这个模具上有一些饼干的特征(属性)和行为(方法)
    ⑴有了这个模具之后我们就可以通过这个模块来制作很多具有相同属性和行为的不同饼干了(制作出来的肯定不是同一块饼干)

3、定义一个类后，就相当于有了一个类对象了：Python中"一切皆对象"。类也称为"类对象"
    ⑴比如前面例1中定义了类MyClass，其也可以成为类对象

4、类对象支持两种操作：属性引用和实例化
    ⑴实例化：使用instance_name = class_name()的方式实例化，实例化操作创建该类的实例(格式：实例对象名 = 类名()，实例对象名是我们自己定义的)
    ⑵属性引用：使用class_name.attr_name的方式引用类属性(类名.属性名)

​	大概前半段就能对类有一个比较清楚的理解，具体用法还是看原帖吧，感觉没必要进行重述了。

转载自[(86条消息) python：类基础_不怕猫的耗子A的博客-CSDN博客_python 类](https://blog.csdn.net/qq_39314932/article/details/80716295?ops_request_misc=%7B%22request%5Fid%22%3A%22165511271816781667863704%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=165511271816781667863704&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-2-80716295-null-null.142^v14^pc_search_result_control_group,157^v14^new_3&utm_term=python+类&spm=1018.2226.3001.4187)
