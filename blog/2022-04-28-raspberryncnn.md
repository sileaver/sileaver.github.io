**傻瓜式树莓派配置ncnn教程**

## clone

```
git clone https://github.com/Tencent/ncnn.git
cd ncnn
git submodule update --init
```

## build

```
cd ncnn
mkdir -p build
cd build

sudo apt install build-essential git cmake libprotobuf-dev protobuf-compiler libvulkan-dev vulkan-utils libopencv-dev
cmake -DCMAKE_EXE_LINKER_FLAGS=-ldl ..

make -j4
```

报错

```
CMake Warning at CMakeLists.txt:163 (message):
GLSLANG_TARGET_DIR must be defined! NCNN_SYSTEM_GLSLANG will be turned off.


CMake Error at CMakeLists.txt:188 (message):
The submodules were not downloaded! Please update submodules with "git
submodule update --init" and try again.


-- Configuring incomplete, errors occurred!
See also "/home/pi/ncnn/ncnn_master/ncnn/build/CMakeFiles/CMakeOutput.log".

```

当你看见这个，请不要惊慌，这是因为部分依赖包不存在，再次运行`git submodule update --init`即可

如果依然不行，建议手动下载.deb文件直接安装依赖包，当时我是手动clone了glslang，不知道到你那个时候还用不用。



## test

### Test1

```
build $ cd ../examples/
examples $ ../build/examples/squeezenet ../images/256-ncnn.png
1
2
Result

vkCreateInstance failed -9
vkCreateInstance failed -9
532 = 0.165951
920 = 0.094098
716 = 0.062193

```

### Test2
```
examples $ cd ../benchmark/
benchmark $ ../build/benchmark/benchncnn 10 $(nproc) 0 -1

Result

loop_count = 10
num_threads = 4
powersave = 0
gpu_device = -1
cooling_down = 1
          squeezenet  min =   59.54  max =   78.24  avg =   61.93
     squeezenet_int8  min =   68.22  max =  136.60  avg =   75.22
           mobilenet  min =   82.28  max =  103.96  avg =   86.50
      mobilenet_int8  min =  102.12  max =  127.61  avg =  105.56
        mobilenet_v2  min =   72.07  max =   78.58  avg =   73.41
        mobilenet_v3  min =   58.79  max =   62.76  avg =   59.56
          shufflenet  min =   39.38  max =   39.76  avg =   39.56
       shufflenet_v2  min =   30.91  max =   62.75  avg =   34.47
             mnasnet  min =   62.02  max =   63.65  avg =   63.10
     proxylessnasnet  min =   63.72  max =   78.89  avg =   65.54
     efficientnet_b0  min =   97.13  max =  134.88  avg =  101.45
        regnety_400m  min =   78.38  max =  112.27  avg =   82.46
           blazeface  min =   11.84  max =   12.11  avg =   11.98
           googlenet  min =  175.91  max =  226.33  avg =  187.03
      googlenet_int8  min =  160.86  max =  174.87  avg =  163.83
            resnet18  min =  226.30  max =  256.77  avg =  231.41
       resnet18_int8  min =  137.44  max =  172.20  avg =  144.58
             alexnet  min =  175.46  max =  187.97  avg =  178.70
               vgg16  min =  966.03  max = 1200.06  avg = 1021.94
          vgg16_int8  min = 1198.49  max = 1241.05  avg = 1216.26
            resnet50  min =  466.87  max =  511.23  avg =  483.53
       resnet50_int8  min =  332.21  max =  380.04  avg =  344.77
      squeezenet_ssd  min =  178.27  max =  232.75  avg =  187.56
 squeezenet_ssd_int8  min =  195.93  max =  227.62  avg =  202.93
       mobilenet_ssd  min =  175.19  max =  197.45  avg =  182.97
  mobilenet_ssd_int8  min =  172.96  max =  207.40  avg =  181.28
      mobilenet_yolo  min =  426.78  max =  526.93  avg =  463.47
  mobilenetv2_yolov3  min =  248.95  max =  274.25  avg =  255.45
         yolov4-tiny  min =  329.52  max =  369.67  avg =  342.12


```

那么问题来了，如何判断编译成功，当你看见build/example下有一大堆shared library文件，图标是绿色棱形时，恭喜你配完了。

是不是看起来很简单，其实可以配死人。

顺便一提，shared library为动态分享库，可以直接运行。

你以为这就完了，笑死，你的ncnn和opencv怎么用都还是个问题，等我学完cmake在连载。