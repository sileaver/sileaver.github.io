如何同时遍历两个字典

1.以key同时遍历两个字典（两个字典长度一样，否则以最短的次数输出）

```
dict_map = {1:'hello', 2:'world'}
dict_map1 = {3: 'hi', 4: 'test'}
for key1, key2 in zip(dict_map.keys(), dict_map1.keys()):
    print(key1, dict_map[key1], key2, dict_map1[key2])
```

2.以key、value同时遍历两个字典（两个字典长度一样，否则以最短的次数输出）

```
dict_map = {1:'hello', 2:'world'}
dict_map1 = {3: 'hi', 4: 'test'}
for (key, value) in zip(dict_map.items(), dict_map1.items()):
    print(key, value)
```

3.逐项同时遍历两个字典（两个字典长度一样，否则以最短的次数输出）

```
dict_map = {1:'hello', 2:'world'}
dict_map1 = {3: 'hi', 4: 'test'}
for kv in zip(dict_map.items(), dict_map1.items()):
    print(kv)
```

