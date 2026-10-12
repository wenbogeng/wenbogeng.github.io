// 通用题目与备考资料；trackProgress: false 的资料不计入核心复习。
export const questions = [
  {
    "id": "cpp-smart-pointer",
    "category": "C++ 基础",
    "topic": "现代 C++",
    "tags": [
      "智能指针",
      "高频"
    ],
    "company": "示例量化公司 A",
    "type": "面试",
    "round": "技术一面",
    "date": "2026-08-28",
    "time": "14:30",
    "title": "shared_ptr 的引用计数如何实现？有哪些线程安全边界？",
    "summary": "需要区分控制块本身的线程安全与所管理对象的线程安全。",
    "sections": [
      {
        "title": "核心原理",
        "paragraphs": [
          "shared_ptr 通常通过独立控制块保存强引用计数、弱引用计数、删除器和分配器等信息。对象最后一个强引用释放时被销毁；控制块会在弱引用也归零后释放。",
          "不同 shared_ptr 实例并发增加或减少同一控制块的引用计数通常是安全的，但并不意味着被管理对象可以被无锁地并发读写。"
        ],
        "highlight": "引用计数线程安全，不等于对象访问线程安全；同时读写同一个 shared_ptr 实例也需要同步。"
      },
      {
        "title": "面试表达",
        "bullets": [
          "先说明对象与控制块通常分开存储，make_shared 可进行一次合并分配。",
          "解释强引用、弱引用以及 weak_ptr 如何解决循环引用。",
          "指出原子引用计数的成本，以及热点共享所有权可能带来的缓存竞争。",
          "在低延迟路径中优先明确所有权，避免无必要的 shared_ptr 拷贝。"
        ]
      },
      {
        "title": "常见追问",
        "bullets": [
          "make_shared 有哪些优缺点？",
          "enable_shared_from_this 的原理是什么？",
          "为什么循环引用会造成泄漏？"
        ]
      }
    ]
  },
  {
    "id": "cpp-move-forwarding",
    "category": "C++ 基础",
    "topic": "对象模型",
    "tags": [
      "移动语义",
      "模板"
    ],
    "company": "示例量化公司 B",
    "type": "笔试",
    "round": "C++ 在线笔试",
    "date": "2026-08-24",
    "time": "19:00",
    "title": "移动语义、完美转发和引用折叠分别解决什么问题？",
    "summary": "从值类别、资源转移与模板参数推导三个层次组织答案。",
    "sections": [
      {
        "title": "核心原理",
        "paragraphs": [
          "移动语义允许从将亡值中转移资源；完美转发让包装函数保留实参的值类别；引用折叠则定义模板推导后多重引用如何归一化。"
        ],
        "highlight": "std::move 是类型转换，不执行移动；std::forward 根据模板参数有条件地保留值类别。"
      },
      {
        "title": "面试表达",
        "bullets": [
          "区分左值、纯右值和将亡值。",
          "说明移动构造函数的异常保证对容器扩容的影响。",
          "给出转发引用 T&& 与普通右值引用的区别。"
        ]
      },
      {
        "title": "常见追问",
        "bullets": [
          "什么时候编译器不会生成移动构造？",
          "为什么移动后对象仍必须处于有效状态？"
        ]
      }
    ]
  },
  {
    "id": "lock-free-queue",
    "category": "高频低延迟",
    "topic": "无锁编程",
    "tags": [
      "原子操作",
      "内存序"
    ],
    "company": "示例量化公司 C",
    "type": "面试",
    "round": "技术二面",
    "date": "2026-08-20",
    "time": "10:00",
    "title": "如何设计一个单生产者单消费者的无锁环形队列？",
    "summary": "数据布局、读写索引、内存序与缓存行隔离是回答主线。",
    "sections": [
      {
        "title": "核心原理",
        "paragraphs": [
          "使用固定容量环形缓冲区和独立的读写索引。生产者只写 write index，消费者只写 read index；双方读取对方索引判断满或空。"
        ],
        "highlight": "发布数据使用 release，读取数据使用 acquire；读写索引应避免落在同一缓存行产生伪共享。"
      },
      {
        "title": "面试表达",
        "bullets": [
          "明确容量约定以及满、空状态如何区分。",
          "解释 acquire/release 建立的 happens-before 关系。",
          "说明对象构造、析构以及异常处理策略。",
          "给出吞吐、尾延迟和背压的测量方式。"
        ]
      },
      {
        "title": "常见追问",
        "bullets": [
          "扩展到 MPMC 会增加哪些复杂度？",
          "什么是 ABA 问题？",
          "如何安全回收无锁结构中的节点？"
        ]
      }
    ]
  },
  {
    "id": "cpu-cache-latency",
    "category": "高频低延迟",
    "topic": "低延迟优化",
    "tags": [
      "CPU Cache",
      "Profiling"
    ],
    "company": "示例量化公司 A",
    "type": "面试",
    "round": "系统性能面",
    "date": "2026-08-16",
    "time": "15:30",
    "title": "如何定位并优化交易系统中的长尾延迟？",
    "summary": "先测量分位数，再从调度、内存、缓存和 I/O 分层定位。",
    "sections": [
      {
        "title": "分析框架",
        "paragraphs": [
          "先定义端到端打点和稳定的压测流量，观察 p50、p99、p99.9，而不是只看平均值；随后用 profiling、硬件计数器和调度追踪定位尾部样本。"
        ],
        "highlight": "优化之前先建立可重复的基线，并把每个阶段的排队时间与处理时间分开。"
      },
      {
        "title": "面试表达",
        "bullets": [
          "检查线程迁移、上下文切换、中断和 CPU 频率变化。",
          "检查缺页、分配器抖动、NUMA 远端访问和缓存未命中。",
          "检查锁竞争、队列积压、日志与系统调用。",
          "每次只改变一个变量并回归吞吐与尾延迟。"
        ]
      },
      {
        "title": "常见追问",
        "bullets": [
          "为什么平均延迟会掩盖问题？",
          "CPU pinning 有什么副作用？",
          "如何设计低开销打点？"
        ]
      }
    ]
  },
  {
    "id": "tcp-market-data",
    "category": "系统与网络",
    "topic": "Linux 网络",
    "tags": [
      "TCP",
      "行情接入"
    ],
    "company": "示例量化公司 D",
    "type": "笔试",
    "round": "系统编程笔试",
    "date": "2026-08-11",
    "time": "19:30",
    "title": "TCP 粘包是什么？行情消息接收端应该如何正确拆包？",
    "summary": "TCP 提供字节流，不保留应用层消息边界。",
    "sections": [
      {
        "title": "核心原理",
        "paragraphs": [
          "一次 send 与一次 recv 并不存在一一对应关系。接收端必须维护缓冲区，并根据固定长度、分隔符或长度字段解析完整消息，同时保留未完成部分。"
        ],
        "highlight": "所谓粘包不是 TCP 异常，而是应用层没有建立可靠的消息边界。"
      },
      {
        "title": "面试表达",
        "bullets": [
          "处理半包、多包和非法长度。",
          "限制最大消息尺寸，避免内存攻击或协议错误。",
          "说明非阻塞 I/O 下的读循环与背压。",
          "行情场景还要处理序号跳变、重放和快照恢复。"
        ]
      },
      {
        "title": "常见追问",
        "bullets": [
          "UDP 行情如何检测丢包？",
          "epoll 的 LT 和 ET 有何区别？",
          "何时考虑内核旁路？"
        ]
      }
    ]
  },
  {
    "id": "order-book",
    "category": "量化策略",
    "trackProgress": false,
    "topic": "市场微观结构",
    "tags": [
      "Order Book",
      "撮合"
    ],
    "company": "示例量化公司 C",
    "type": "面试",
    "round": "业务技术面",
    "date": "2026-08-06",
    "time": "11:00",
    "title": "如何设计一个支持增量行情更新的本地订单簿？",
    "summary": "先明确数据粒度，再权衡更新速度、查询模式和恢复机制。",
    "sections": [
      {
        "title": "设计思路",
        "paragraphs": [
          "根据行情协议决定维护逐笔订单还是价位聚合。核心路径需要支持按序号应用增量、快速更新价位、读取最优买卖价，并在发现缺口时暂停增量并请求快照恢复。"
        ],
        "highlight": "订单簿正确性优先于低延迟：任何序号缺口或快照边界不清都可能产生静默错误。"
      },
      {
        "title": "面试表达",
        "bullets": [
          "说明价格到价位节点的数据结构选择。",
          "定义增量序号、快照和重放的状态机。",
          "区分单写多读与多线程更新方案。",
          "列出交叉盘、负数量和越序消息等校验。"
        ]
      },
      {
        "title": "常见追问",
        "bullets": [
          "数组、哈希表和树结构如何选择？",
          "如何对订单簿做确定性回放测试？",
          "如何向策略线程发布一致快照？"
        ]
      }
    ]
  },
  {
    "id": "order-gateway-risk",
    "category": "量化策略",
    "trackProgress": false,
    "topic": "订单网关",
    "tags": [
      "Pre-trade Risk",
      "低延迟"
    ],
    "company": "示例量化公司 B",
    "type": "面试",
    "round": "交易系统终面",
    "date": "2026-08-01",
    "time": "16:00",
    "title": "如何设计低延迟订单网关中的交易前风控？",
    "summary": "在不显著增加尾延迟的前提下完成价格、数量、仓位和频率检查。",
    "sections": [
      {
        "title": "核心原理",
        "paragraphs": [
          "订单进入交易所会话前，在本地热路径依次检查账户状态、价格偏离、单笔数量、累计仓位、下单频率和信用额度。规则读取应尽量无锁，更新路径与撮合回报保持一致。"
        ],
        "highlight": "风控不能为了低延迟而失去确定性：每一笔订单都必须基于可解释、可重放的状态作出决定。"
      },
      {
        "title": "面试表达",
        "bullets": [
          "把静态规则预编译并放入 CPU cache 友好的连续内存。",
          "单写多读场景可用版本化快照或原子发布，避免热路径加锁。",
          "区分硬拒绝、软限流、kill switch 和交易所级限额。",
          "对每次拒单记录紧凑 reason code，并支持离线确定性重放。"
        ]
      },
      {
        "title": "常见追问",
        "bullets": [
          "成交回报乱序时如何更新仓位？",
          "kill switch 如何保证全局生效？",
          "怎样测试风控规则不会绕过？"
        ]
      }
    ]
  },
  {
    "id": "median-stream",
    "category": "算法与数据结构",
    "topic": "在线算法",
    "tags": [
      "Heap",
      "高频"
    ],
    "company": "示例量化公司 D",
    "type": "笔试",
    "round": "算法笔试",
    "date": "2026-07-27",
    "time": "20:00",
    "title": "如何实时维护数据流的中位数？",
    "summary": "用大根堆与小根堆把数据流分成大小两半。",
    "sections": [
      {
        "title": "核心思路",
        "paragraphs": [
          "大根堆保存较小的一半，小根堆保存较大的一半；每次插入后重新平衡，使两个堆大小之差不超过一。"
        ],
        "highlight": "插入复杂度为 O(log n)，查询中位数为 O(1)，空间复杂度为 O(n)。"
      },
      {
        "title": "答题要点",
        "bullets": [
          "明确奇数和偶数个元素时的返回规则。",
          "注意整数求平均时的溢出与精度。",
          "写出保持两个堆有序边界的不变量。"
        ]
      },
      {
        "title": "常见追问",
        "bullets": [
          "如果只需要近似分位数怎么办？",
          "带滑动窗口时如何删除过期元素？"
        ]
      }
    ]
  },
  {
    "id": "zhongwang-cpp-study-source",
    "category": "C++ 基础",
    "topic": "备考资料",
    "company": "通用参考资料",
    "type": "参考资料",
    "round": "资料汇编",
    "date": "未记录日期",
    "time": "",
    "title": "中望 C++ 备考笔记与算法代码",
    "summary": "完整保留来源资料；仅用于阅读，不计入核心复习进度。",
    "tags": [
      "C++",
      "备考笔记"
    ],
    "trackProgress": false,
    "sourceFiles": [
      "中望龙腾C++/中望 C++ 面试八股.md",
      "中望龙腾C++/birdsFields.cpp",
      "中望龙腾C++/getTreeNames.cpp",
      "中望龙腾C++/maxSubArray.cpp"
    ],
    "sections": [
      {
        "title": "1. **c++11，lambda表达式，智能指针，4种cast**",
        "transcript": "1. **c++11，lambda表达式，智能指针，4种cast**\n\n   C++11是 C++语言的一个重要版本，它引入了许多新特性和改进，以下是其中一些主要的新特性：\n\n   1. 自动类型推断（Auto）：可以使用auto关键字让编译器推断变量的类型，简化代码书写。\n\n   2. 右值引用和移动语义：引入了&&运算符，使得可以对右值进行引用，并允许对临时对象进行高效的移动而不是拷贝。\n\n   3. lambda表达式：可以在函数内部定义匿名函数，方便简洁地编写小型功能块。\n\n   4. 初始化列表（Initializer Lists）：允许使用初始化列表来初始化数组、容器和类的成员变量。\n\n   5. 空指针常量（nullptr）：引入了nullptr关键字来表示空指针，取代了传统的NULL宏。\n\n   6. 声明和定义分离：可以在声明时为变量赋初值，而不需要在定义时再次赋值。\n\n   7. foreach循环（Range-based for loop）：简化了遍历容器元素的代码。\n\n   8. 并发支持：引入了std::thread等类，使得编写多线程代码更容易。\n\n   9. 标准库的增强：增加了一些新的标准库组件，如std::tuple、std::regex等。\n\n   10. 智能指针（Smart Pointers）：引入了std::unique_ptr和std::shared_ptr等智能指针来管理动态内存，避免内存泄漏。\n\n   这些只是C++11中的一部分新特性，它们使得C++编程更加便捷、高效和安全。\n\n   让我分别为您解释一下C++中的lambda函数、智能指针和4种类型转换（cast）。\n\n   1. Lambda函数：\n\n      匿名: 不像普通方法那样有个明确的名称：写得少而想得多\n      函数: 因为它不像方法那样属于某个特定的类\n      可传递: 它可以作为参数传递给方法或存储在变量中 => 简洁，无须像匿名类那样写很多模板代码\n\n      Lambda函数是C++11引入的一个特性，它允许在函数内部定义匿名函数，通常用于编写简短的功能块。它的语法如下：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 1",
            "code": "   [捕获列表](参数列表) -> 返回类型 {\n       // 函数体\n   }"
          }
        ]
      },
      {
        "title": "其中，捕获列表可以为空或包含一个或多个变量，用于在Lambda函数中捕获外部作用域的变量。参数列表和返回类型与普通函数类似。Lambda函数可以使用自动类型推断（auto）来推断返",
        "transcript": "其中，捕获列表可以为空或包含一个或多个变量，用于在Lambda函数中捕获外部作用域的变量。参数列表和返回类型与普通函数类似。Lambda函数可以使用自动类型推断（auto）来推断返回类型。例如：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 2",
            "code": "   #include <iostream>\n   \n   int main() {\n       int x = 10;\n   \n       // Lambda函数示例，捕获x并输出x的值\n       auto printX = [&]() {\n           std::cout << \"x: \" << x << std::endl;\n       };\n   \n       printX(); // 输出：x: 10\n       return 0;\n   }"
          }
        ]
      },
      {
        "title": "2. 智能指针：",
        "transcript": "2. 智能指针：\n      智能指针是C++中用于管理动态内存的智能对象。它们会自动管理内存的释放，从而避免常见的内存泄漏问题。C++提供了三种常见的智能指针：\n\n   - `std::unique_ptr<T>`：独占所有权的智能指针，只能由一个指针拥有，并在其生命周期结束时自动释放内存。\n   - `std::shared_ptr<T>`：共享所有权的智能指针，多个指针可以共享同一块内存，引用计数的方式来管理内存的释放。\n   - `std::weak_ptr<T>`：弱引用指针，用于解决 shared_ptr 的循环引用问题，不增加引用计数，不拥有内存。\n\n   使用智能指针可以避免手动释放内存，提高代码的安全性和可维护性。\n\n   3. 4种类型转换（cast）：\n      在C++中，有四种类型转换的方法：\n\n   - `static_cast<目标类型>(表达式)`：用于基本类型之间的转换，类似于C风格的强制类型转换，但提供了类型检查。\n\n   - `dynamic_cast<目标类型>(指针或引用)`：用于类层次结构中的向下转换（即派生类向基类转换），会检查转换是否合法。\n\n   - `reinterpret_cast<目标类型>(表达式)`：用于低级别的强制类型转换，将指针或整数类型转换为其他类型，不进行类型检查。\n\n   - `const_cast<目标类型>(表达式)`：用于去除const限定符，可以将const指针或引用转换为非const。\n\n   需要谨慎使用类型转换，特别是reinterpret_cast，因为它可能引发未定义行为或错误结果。\n\n2. **private、protected、public关键字**\n\n   当在C++中定义类（class）时，可以使用`private`、`protected`和`public`这三个访问控制关键字来控制类成员的访问权限。这些关键字用于限定类的成员在类外部的可见性和访问权限。\n\n   1. `private`：\n   `private`关键字用于声明类的私有成员。私有成员只能在类的成员函数内部访问，不能在类的外部访问，包括其它类的成员函数。这使得私有成员对于类外部是隐藏的，外部无法直接访问或修改它们。这种封装性保护了类的实现细节，使得类的内部状态对外部是不可见的。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 3",
            "code": "   class MyClass {\n   private:\n       int privateVar; // 私有成员变量\n       void privateFunction(); // 私有成员函数\n   \n   public:\n       // 公有成员函数可以访问私有成员\n       void publicFunction() {\n           privateVar = 10; // 可以访问私有成员变量\n           privateFunction(); // 可以调用私有成员函数\n       }\n   };\n   \n   int main() {\n       MyClass obj;\n       // obj.privateVar = 20; // 错误，无法直接访问私有成员变量\n       // obj.privateFunction(); // 错误，无法调用私有成员函数\n       obj.publicFunction(); // 正确，通过公有成员函数访问私有成员\n       return 0;\n   }"
          }
        ]
      },
      {
        "title": "2. `protected`：",
        "transcript": "2. `protected`：\n   `protected`关键字用于声明类的保护成员。保护成员在类的成员函数内部和派生类（子类）的成员函数内部可见，但不能在类的外部直接访问。这使得保护成员对于类的外部是隐藏的，但派生类可以访问和使用它们。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 4",
            "code": "   class BaseClass {\n   protected:\n       int protectedVar; // 保护成员变量\n       void protectedFunction(); // 保护成员函数\n   };\n   \n   class DerivedClass : public BaseClass {\n   public:\n       void accessProtected() {\n           protectedVar = 20; // 可以访问基类的保护成员变量\n           protectedFunction(); // 可以调用基类的保护成员函数\n       }\n   };\n   \n   int main() {\n       DerivedClass obj;\n       // obj.protectedVar = 30; // 错误，无法直接访问保护成员变量\n       // obj.protectedFunction(); // 错误，无法调用保护成员函数\n       obj.accessProtected(); // 正确，通过派生类的成员函数访问保护成员\n       return 0;\n   }"
          }
        ]
      },
      {
        "title": "3. `public`：",
        "transcript": "3. `public`：\n   `public`关键字用于声明类的公有成员。公有成员可以在类的成员函数内部、类的外部以及派生类的成员函数内部访问。公有成员是类的接口，可以直接通过对象来访问和调用。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 5",
            "code": "   class MyClass {\n   public:\n       int publicVar; // 公有成员变量\n       void publicFunction(); // 公有成员函数\n   };\n   \n   int main() {\n       MyClass obj;\n       obj.publicVar = 10; // 可以直接访问公有成员变量\n       obj.publicFunction(); // 可以直接调用公有成员函数\n       return 0;\n   }"
          }
        ]
      },
      {
        "title": "通过合理地使用`private`、`protected`和`public`关键字，可以实现类的封装性、继承性和多态性，从而提高代码的安全性和可维护性。",
        "transcript": "通过合理地使用`private`、`protected`和`public`关键字，可以实现类的封装性、继承性和多态性，从而提高代码的安全性和可维护性。\n\n3. **虚函数**\n\n   当在C++中定义一个类并希望使用继承，可以使用虚函数（Virtual Function）。虚函数是一种特殊的成员函数，它通过使用关键字`virtual`来声明，在基类中定义。虚函数允许派生类（子类）重写（覆盖）基类中的函数实现，实现运行时的多态性。\n\n   以下是虚函数的基本用法：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 6",
            "code": "   class Shape {\n   public:\n       virtual void draw() {\n           // 基类中的虚函数实现\n           std::cout << \"Drawing a shape.\" << std::endl;\n       }\n   };\n   \n   class Circle : public Shape {\n   public:\n       void draw() override {\n           // 派生类中重写的虚函数实现\n           std::cout << \"Drawing a circle.\" << std::endl;\n       }\n   };\n   \n   int main() {\n       Shape* shapePtr;\n       Circle circleObj;\n   \n       shapePtr = &circleObj; // 基类指针指向派生类对象\n   \n       // 调用虚函数，根据对象的实际类型决定调用哪个版本\n       shapePtr->draw(); // 输出：Drawing a circle.\n   \n       return 0;\n   }"
          }
        ]
      },
      {
        "title": "在上面的例子中，我们定义了一个基类`Shape`和一个派生类`Circle`。在`Shape`类中，我们声明了一个虚函数`draw()`，并在`Circle`类中重写了它。在`ma",
        "transcript": "在上面的例子中，我们定义了一个基类`Shape`和一个派生类`Circle`。在`Shape`类中，我们声明了一个虚函数`draw()`，并在`Circle`类中重写了它。在`main()`函数中，我们使用基类指针`shapePtr`指向派生类对象`circleObj`。当我们调用`shapePtr->draw()`时，实际调用的是`Circle`类中的`draw()`函数，而不是`Shape`类中的实现。这就是虚函数的多态性体现。\n\n   使用虚函数可以实现基类指针或引用在运行时动态绑定到正确的函数版本，这种特性使得面向对象编程中的多态性成为可能。\n\n4. **const关键字了解多少，const函数内如果要改变某一变量需要用什么关键字 [mutable]**\n\n   在C++中，`const`关键字用于表示一个常量，它可以用于不同的地方，如常量变量、常量指针、常量引用以及成员函数。\n\n   1. 常量变量：\n   使用`const`关键字修饰变量，表示该变量的值在初始化后不能再被修改。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 7",
            "code": "   const int constantValue = 10; // 常量变量，值不能修改"
          }
        ]
      },
      {
        "title": "2. 常量指针：",
        "transcript": "2. 常量指针：\n   使用`const`关键字修饰指针，表示指针所指向的内容为常量，不能通过该指针修改所指向的值。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 8",
            "code": "   int value = 20;\n   const int* constPtr = &value; // 常量指针，不能通过constPtr修改value的值"
          }
        ]
      },
      {
        "title": "3. 常量引用：",
        "transcript": "3. 常量引用：\n   使用`const`关键字修饰引用，表示引用的内容为常量，不能通过该引用修改所引用的值。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 9",
            "code": "   int number = 30;\n   const int& constRef = number; // 常量引用，不能通过constRef修改number的值"
          }
        ]
      },
      {
        "title": "4. 成员函数中的const：",
        "transcript": "4. 成员函数中的const：\n   在类中的成员函数后添加`const`关键字，表示该成员函数是一个常量成员函数。常量成员函数承诺不会修改类的成员变量（非`mutable`修饰的），因此可以在常量对象上调用它。\n\n   如果在常量成员函数中需要修改某一变量（非`mutable`修饰的），此时需要使用`mutable`关键字。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 10",
            "code": "   class MyClass {\n   public:\n       int nonConstVar = 42;\n       mutable int mutableVar = 100;\n   \n       void regularFunction() {\n           nonConstVar = 50; // 可以修改非常量成员变量\n           // mutableVar 可以在常量成员函数中修改，因为它是 mutable 的\n           mutableVar = 200;\n       }\n   \n       void constFunction() const {\n           // nonConstVar = 60; // 错误，常量成员函数不能修改非常量成员变量\n           mutableVar = 300; // 可以修改 mutable 成员变量\n       }\n   };"
          }
        ]
      },
      {
        "title": "使用`const`和`mutable`关键字能够使得代码更安全，同时在常量对象上也能执行一些只读的操作。",
        "transcript": "使用`const`和`mutable`关键字能够使得代码更安全，同时在常量对象上也能执行一些只读的操作。\n\n5. **内联函数** \n\n   当在C++中定义函数时，可以使用`inline`关键字来声明内联函数。内联函数是一种编译器优化的手段，它通常用于定义简单的、频繁调用的函数。编译器会在每个调用该函数的地方直接将函数的代码插入，而不是通过函数调用的方式进行执行。\n\n   内联函数的优点在于它可以减少函数调用的开销，因为不需要在运行时维护函数调用的堆栈和寄存器的保存恢复。这样，内联函数在执行时相当于直接展开了函数体，提高了代码的执行效率。\n\n   以下是内联函数的示例：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 11",
            "code": "   // 内联函数的定义\n   inline int add(int a, int b) {\n       return a + b;\n   }\n   \n   int main() {\n       int result = add(10, 20); // 内联函数在这里展开，而不是实际的函数调用\n       return 0;\n   }"
          }
        ]
      },
      {
        "title": "请注意，虽然使用`inline`关键字可以建议编译器将函数内联展开，但编译器是否真正内联函数仍然取决于编译器的决策。有时，编译器可能会选择不内联函数，特别是函数体较大或被递归调用的",
        "transcript": "请注意，虽然使用`inline`关键字可以建议编译器将函数内联展开，但编译器是否真正内联函数仍然取决于编译器的决策。有时，编译器可能会选择不内联函数，特别是函数体较大或被递归调用的情况下。\n\n   通常情况下，只有当函数非常简单且调用频率较高时，使用内联函数才能获得性能上的优势。在大多数情况下，编译器会自动做出优化，将较小的函数进行内联，无需显式使用`inline`关键字。\n\n6. **知道什么设计模式 ?**\n\n   当谈到 C++ 中的常用设计模式时，以下是几种常见的设计模式：\n\n   1. 单例模式（Singleton Pattern）：\n   单例模式确保一个类只有一个实例，并提供全局访问点。它通常用于管理全局资源或共享资源，以确保只有一个实例存在。\n\n   2. 工厂模式（Factory Pattern）：\n   工厂模式用于创建对象而无需指定具体的类。它通过一个工厂类来创建对象，隐藏对象的创建细节，提供更灵活的对象创建方式。\n\n   3. 观察者模式（Observer Pattern）：\n   观察者模式用于对象之间的一对多依赖关系。当一个对象状态发生改变时，所有依赖它的对象会自动收到通知并进行相应的更新。\n\n   4. 策略模式（Strategy Pattern）：\n   策略模式定义了一系列算法，并将每个算法封装成独立的类。客户端可以选择使用不同的算法，使得算法的变化不影响客户端的使用。\n\n   5. 适配器模式（Adapter Pattern）：\n   适配器模式用于将一个类的接口转换成客户端所期望的另一个接口。它允许原本不兼容的接口能够协同工作。\n\n   6. 装饰器模式（Decorator Pattern）：\n   装饰器模式允许动态地给一个对象添加新的功能，而不需要修改其原始类。它通过一系列的装饰器类来包装原始对象，每个装饰器类提供不同的功能。\n\n   7. 模板方法模式（Template Method Pattern）：\n   模板方法模式定义了一个算法的骨架，将一些步骤的实现延迟到子类中。子类可以按需重写这些步骤，但算法的结构保持不变。\n\n   8. 命令模式（Command Pattern）：\n   命令模式将请求或操作封装成一个对象，从而使得客户端可以参数化不同的请求，进行请求排队或记录请求日志，以及支持可撤销操作。\n\n7. **stl容器，哪些用的多，底层实现**\n\n   当谈论STL（标准模板库）容器时，STL提供了一组通用的容器类，用于存储和管理数据。STL容器提供了不同类型的数据结构，包括序列容器、关联容器和无序关联容器。\n\n   1. 序列容器：\n   - `std::vector`：动态数组，支持随机访问和尾部插入/删除。\n   - `std::list`：双向链表，支持高效的插入/删除操作。\n   - `std::deque`：双端队列，支持高效的头尾插入/删除。\n   - `std::forward_list`：单向链表，仅支持单向迭代。\n\n   2. 关联容器：\n   - `std::set`：有序集合，不允许重复元素。\n   - `std::multiset`：有序多重集合，允许重复元素。\n   - `std::map`：有序映射，存储键值对，按键排序，不允许重复键。\n   - `std::multimap`：有序多重映射，存储键值对，按键排序，允许重复键。\n\n   3. 无序关联容器（C++11引入）：\n   - `std::unordered_set`：无序集合，不允许重复元素，使用哈希表实现。\n   - `std::unordered_multiset`：无序多重集合，允许重复元素，使用哈希表实现。\n   - `std::unordered_map`：无序映射，存储键值对，不允许重复键，使用哈希表实现。\n   - `std::unordered_multimap`：无序多重映射，存储键值对，允许重复键，使用哈希表实现。\n\n   STL容器的底层实现使用了模板和迭代器等C++特性。对于序列容器如`std::vector`和`std::list`，底层实现通常使用动态数组和链表。关联容器如`std::set`和`std::map`通常使用平衡二叉树（如红黑树）来实现有序存储，以保持元素的排序。无序关联容器如`std::unordered_set`和`std::unordered_map`则使用哈希表来实现，以提供快速的查找和插入操作。\n\n   STL容器的使用方便且具有高效性，它们提供了丰富的成员函数和算法，同时与其他STL组件（如算法和迭代器）无缝集成。因此，STL容器是C++中的重要工具，为开发人员提供了强大的数据结构和数据管理功能。\n\n8. **进程线程区别** \n\n   当谈论 C++ 中的进程和线程时，它们都是并发编程的概念，但有着一些重要的区别：\n\n   1. 进程：\n   - 进程是操作系统中的一个独立执行单位，具有独立的内存空间和资源。\n   - 每个进程都拥有自己的地址空间，它们之间不能直接共享内存数据，需要使用特殊的机制（如IPC，Inter-Process Communication）来进行进程间通信。\n   - 进程的切换需要保存和恢复整个进程的上下文，这是比较昂贵的操作。\n\n   2. 线程：\n   - 线程是在进程内执行的一个单独执行流，共享相同的地址空间和资源。\n   - 线程可以直接访问进程内的共享数据，因为它们共享相同的地址空间，这样的共享使得线程之间的通信更加高效。\n   - 线程的切换比进程的切换更轻量级，因为它只需要保存和恢复线程的上下文，而无需涉及整个进程的上下文。\n\n   总结区别：\n   - 进程是资源分配的最小单位，线程是CPU调度的最小单位。\n   - 进程拥有独立的内存空间，线程共享相同的内存空间。\n   - 进程间通信需要使用特殊的机制，线程可以直接共享数据。\n   - 进程的创建和销毁比线程慢，切换代价较高。\n\n   在编程中，进程和线程都可以用于实现并发执行和并行计算。选择使用哪种方式取决于具体的需求和场景。在某些情况下，使用多进程可以提高系统的稳定性，因为进程间相互隔离。而在某些情况下，使用多线程可以实现更高效的资源共享和通信，因为线程共享相同的内存空间。\n\n   当谈论进程和线程的区别时，我们可以使用浏览器作为一个具体的例子来解释。\n\n   1. 进程的例子：\n   当您打开一个浏览器时，操作系统会为该浏览器分配一个独立的进程。假设您同时打开了两个浏览器窗口，每个窗口都是一个单独的进程。这两个进程在操作系统中是相互独立的，它们有各自的内存空间和资源。如果其中一个浏览器进程崩溃，不会影响另一个浏览器进程，因为它们是隔离的。\n\n   2. 线程的例子：\n   现在，让我们来看看一个浏览器窗口内部。在一个浏览器窗口中，可能有多个标签页在同时加载网页内容。每个标签页可以看作是一个单独的线程。这些线程共享同一个浏览器进程的内存空间。这意味着，这些线程可以直接访问和操作浏览器进程内的资源和数据。\n\n   举例来说，如果您在一个标签页中打开了一个视频，同时在另一个标签页中打开了一个音乐播放器，这两个标签页运行在同一个浏览器进程内的不同线程中。由于它们共享相同的内存空间，所以音乐播放器可以直接访问视频标签页中的音频数据，实现了在浏览器中同时播放音乐和视频的功能。\n\n   总结：\n   进程是浏览器打开的独立窗口，每个窗口是一个独立的进程，它们相互隔离。线程是浏览器窗口内部的执行流，每个标签页是一个单独的线程，它们共享相同的进程内存空间，可以直接访问和共享资源。\n\n   当谈论进程和线程的区别时，我们可以使用C++的代码来模拟进程和线程的概念。在C++中，可以使用`std::thread`来创建线程，使用`std::this_thread::get_id()`来获取线程ID。同时，我们可以使用`std::chrono`库来模拟一些耗时的操作。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 12",
            "code": "   #include <iostream>\n   #include <thread>\n   #include <chrono>\n   \n   // 函数模拟一个耗时的操作\n   void timeConsumingTask(int threadId) {\n       std::cout << \"Thread \" << threadId << \" started.\" << std::endl;\n       for (int i = 0; i < 5; ++i) {\n           std::cout << \"Thread \" << threadId << \" is working.\" << std::endl;\n           std::this_thread::sleep_for(std::chrono::seconds(1));\n       }\n       std::cout << \"Thread \" << threadId << \" finished.\" << std::endl;\n   }\n   \n   int main() {\n       // 创建两个线程\n       std::thread thread1(timeConsumingTask, 1);\n       std::thread thread2(timeConsumingTask, 2);\n   \n       // 主线程等待两个线程完成\n       thread1.join();\n       thread2.join();\n   \n       std::cout << \"Main thread finished.\" << std::endl;\n   \n       return 0;\n   }"
          }
        ]
      },
      {
        "title": "在这个例子中，我们创建了两个线程`thread1`和`thread2`，每个线程执行`timeConsumingTask`函数，模拟一个耗时的操作，然后在主线程中等待两个线程完成，",
        "transcript": "在这个例子中，我们创建了两个线程`thread1`和`thread2`，每个线程执行`timeConsumingTask`函数，模拟一个耗时的操作，然后在主线程中等待两个线程完成，最后输出\"Main thread finished.\"。\n\n   当您运行这个程序时，您会看到输出类似于以下内容：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 13",
            "code": "   Thread 1 started.\n   Thread 1 is working.\n   Thread 2 started.\n   Thread 2 is working.\n   Thread 1 is working.\n   Thread 2 is working.\n   Thread 1 is working.\n   Thread 2 is working.\n   Thread 1 is working.\n   Thread 2 is working.\n   Thread 1 is working.\n   Thread 2 is working.\n   Thread 1 finished.\n   Thread 2 finished.\n   Main thread finished."
          }
        ]
      },
      {
        "title": "这里我们可以看到两个线程同时运行（可能在某些系统上输出的顺序稍有不同），而主线程等待两个线程完成后才会继续执行，体现了线程的并发性。相比之下，如果我们使用多个进程来模拟，那么它们将",
        "transcript": "这里我们可以看到两个线程同时运行（可能在某些系统上输出的顺序稍有不同），而主线程等待两个线程完成后才会继续执行，体现了线程的并发性。相比之下，如果我们使用多个进程来模拟，那么它们将相互独立运行，不会像线程那样共享相同的内存空间和资源。\n\n9. **常量指针与指针常量**\n\n   当谈论常量指针和指针常量时，它们是C++中指针的两种不同类型。\n\n   1. 常量指针（Constant Pointer）：\n   常量指针是指针本身是一个不可修改的指针，即指针的值不能改变，但指针所指向的内容可以被修改。使用`const`关键字在指针类型前声明常量指针。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 14",
            "code": "   const int* ptr; // 常量指针，ptr 的值不能改变，但所指向的内容可以改变"
          }
        ]
      },
      {
        "title": "2. 指针常量（Pointer Constant）：",
        "transcript": "2. 指针常量（Pointer Constant）：\n   指针常量是指针指向的内容是一个常量，即指针所指向的内容不能被修改，但指针本身可以修改。使用`const`关键字在指针变量名前声明指针常量。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 15",
            "code": "   int* const ptr; // 指针常量，ptr 的值可以改变，但所指向的内容不能改变"
          }
        ]
      },
      {
        "title": "以下是更具体的解释：",
        "transcript": "以下是更具体的解释：\n\n   - 常量指针（Constant Pointer）：指针本身的值（即所指向的地址）是常量，不能修改，但指针可以指向其他地址，并且可以通过该指针间接修改所指向的内容。例如：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 16",
            "code": "   const int* ptr; // 常量指针，不能通过 ptr 修改所指向的内容\n   int x = 10;\n   ptr = &x; // 正确，ptr 指向了变量 x 的地址\n   // *ptr = 20; // 错误，不能通过 ptr 修改 x 的值"
          }
        ]
      },
      {
        "title": "- 指针常量（Pointer Constant）：指针本身的值是变量，可以修改，但指针所指向的内容是常量，不能通过该指针修改所指向的内容。例如：",
        "transcript": "- 指针常量（Pointer Constant）：指针本身的值是变量，可以修改，但指针所指向的内容是常量，不能通过该指针修改所指向的内容。例如：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 17",
            "code": "   int y = 30;\n   int* const ptr = &y; // 指针常量，ptr 的值不能改变，即不能指向其他地址\n   *ptr = 40; // 正确，可以通过 ptr 修改 y 的值\n   // ptr = &z; // 错误，不能修改 ptr 的值，即不能让 ptr 指向其他地址"
          }
        ]
      },
      {
        "title": "这两种类型的指针在使用时需要根据需求选择，常量指针适用于需要指向不同对象的情况，而指针常量适用于需要保持指针指向的不变的情况。",
        "transcript": "这两种类型的指针在使用时需要根据需求选择，常量指针适用于需要指向不同对象的情况，而指针常量适用于需要保持指针指向的不变的情况。\n\n10. **构造函数是否可以是虚函数吗**\n\n    在C++中，构造函数（Constructor）不能是虚函数（Virtual Function）。虚函数是用于实现运行时多态性的特殊成员函数，它们在继承层次结构中允许派生类重写（覆盖）基类中的函数实现。\n\n    构造函数负责对象的初始化工作，在创建对象时自动调用，它们在对象创建时执行，并且没有返回类型。由于构造函数的调用发生在对象创建的过程中，此时对象的类型已经确定，因此构造函数不需要支持动态绑定和多态性。\n\n    虚函数的关键特征是运行时多态性，它允许在运行时根据对象的实际类型来调用相应的函数实现。而构造函数的调用发生在对象创建的过程中，编译器根据对象的静态类型（声明类型）来决定调用哪个构造函数，而不是根据对象的实际类型。\n\n    在C++中，构造函数不可以声明为虚函数，声明构造函数为虚函数会导致编译错误。例如，以下代码是错误的：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 18",
            "code": "    class Base {\n    public:\n        virtual Base() {} // 错误，构造函数不能是虚函数\n    };\n    \n    class Derived : public Base {\n    public:\n        Derived() {}\n    };"
          }
        ]
      },
      {
        "title": "总结：构造函数是在对象创建时自动调用的特殊成员函数，用于对象的初始化，不需要支持运行时多态性。虚函数是用于实现运行时多态性的成员函数，在继承层次结构中允许派生类重写基类中的函数实现",
        "transcript": "总结：构造函数是在对象创建时自动调用的特殊成员函数，用于对象的初始化，不需要支持运行时多态性。虚函数是用于实现运行时多态性的成员函数，在继承层次结构中允许派生类重写基类中的函数实现。因此，在C++中构造函数不能声明为虚函数。\n\n11. **判断点p是否在三角形内**\n\n    当判断一个点是否在给定的三角形内时，可以使用叉积法（Cross Product Method）。该方法基于向量的叉积来进行判断。\n\n    假设三角形的三个顶点分别为A、B、C，要判断的点为P。\n\n    算法步骤：\n    1. 计算向量AB和AP的叉积，记为V1。\n    2. 计算向量BC和BP的叉积，记为V2。\n    3. 计算向量CA和CP的叉积，记为V3。\n    4. 如果V1、V2和V3的方向都相同（即它们都在三角形的同一侧），则点P在三角形内部。\n\n    代码示例：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 19",
            "code": "    #include <iostream>\n    using namespace std;\n    \n    struct Point {\n        double x, y;\n    };\n    \n    // 计算向量的叉积\n    double crossProduct(const Point& a, const Point& b, const Point& c) {\n        return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x);\n    }\n    \n    // 判断点是否在三角形内\n    bool isInsideTriangle(const Point& a, const Point& b, const Point& c, const Point& p) {\n        double v1 = crossProduct(a, b, p);\n        double v2 = crossProduct(b, c, p);\n        double v3 = crossProduct(c, a, p);\n    \n        return (v1 >= 0 && v2 >= 0 && v3 >= 0) || (v1 <= 0 && v2 <= 0 && v3 <= 0);\n    }\n    \n    int main() {\n        Point a = {0, 0};\n        Point b = {4, 0};\n        Point c = {2, 4};\n        Point p = {2, 2};\n    \n        if (isInsideTriangle(a, b, c, p)) {\n            cout << \"Point P is inside the triangle.\" << endl;\n        } else {\n            cout << \"Point P is outside the triangle.\" << endl;\n        }\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在上述代码中，我们定义了一个`Point`结构体表示点的坐标，然后实现了计算向量叉积的函数`crossProduct`和判断点是否在三角形内的函数`isInsideTriangle",
        "transcript": "在上述代码中，我们定义了一个`Point`结构体表示点的坐标，然后实现了计算向量叉积的函数`crossProduct`和判断点是否在三角形内的函数`isInsideTriangle`。根据函数的返回值判断点P是否在三角形ABC内。\n\n12. **判断x是否是2的n次方 [n&(n-1)位运算]**\n\n    当判断一个整数x是否是2的n次方时，可以使用位运算来实现。一个整数x是2的n次方，当且仅当x的二进制表示只有一个1，并且这个1出现在最高位（最右边的位）。可以通过以下的位运算方式进行判断：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 20",
            "code": "    #include <iostream>\n    using namespace std;\n    \n    bool isPowerOfTwo(int x) {\n        return (x > 0) && ((x & (x - 1)) == 0);\n    }\n    \n    int main() {\n        int x = 16;\n    \n        if (isPowerOfTwo(x)) {\n            cout << x << \" is a power of 2.\" << endl;\n        } else {\n            cout << x << \" is not a power of 2.\" << endl;\n        }\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在上述代码中，我们定义了一个函数`isPowerOfTwo`，它使用位运算来判断一个整数x是否是2的n次方。首先，函数检查x是否大于0，确保是正整数。然后，通过`(x & (x -",
        "transcript": "在上述代码中，我们定义了一个函数`isPowerOfTwo`，它使用位运算来判断一个整数x是否是2的n次方。首先，函数检查x是否大于0，确保是正整数。然后，通过`(x & (x - 1)) == 0`来判断x的二进制表示是否只有一个1，这个1出现在最高位。\n\n    举例来说，对于x = 16，它的二进制表示是10000，只有一个1出现在最高位，因此它是2的n次方，输出为 \"16 is a power of 2.\"。而对于x = 17，它的二进制表示是10001，有两个1，不是2的n次方，输出为 \"17 is not a power of 2.\"。\n\n    这样的位运算方式非常高效，可以在O(1)的时间复杂度内完成判断。\n\n13. **linux用过哪些命令**\n\n    当谈论Linux的常用指令时，以下是一些常见的Linux命令：\n\n    1. 文件和目录操作：\n    - `ls`: 列出当前目录内容。\n    - `cd`: 切换目录。\n    - `pwd`: 显示当前工作目录。\n    - `mkdir`: 创建目录。\n    - `rm`: 删除文件或目录。\n    - `cp`: 复制文件或目录。\n    - `mv`: 移动或重命名文件或目录。\n    - `touch`: 创建空文件或更新文件时间戳。\n\n    2. 文件查看和编辑：\n    - `cat`: 查看文件内容。\n    - `more`: 分页查看文件内容。\n    - `less`: 交互式分页查看文件内容。\n    - `head`: 查看文件开头部分。\n    - `tail`: 查看文件末尾部分。\n    - `vi`/`vim`: 文本编辑器。\n\n    3. 权限和用户管理：\n    - `chmod`: 修改文件或目录的权限。\n    - `chown`: 修改文件或目录的所有者。\n    - `chgrp`: 修改文件或目录的所属组。\n    - `sudo`: 以超级用户权限执行命令。\n    - `useradd`: 添加用户。\n    - `passwd`: 修改用户密码。\n\n    4. 系统信息：\n    - `uname`: 显示系统信息。\n    - `who`: 显示当前登录用户。\n    - `ps`: 显示进程状态。\n    - `top`: 实时查看系统进程信息。\n    - `df`: 显示磁盘空间使用情况。\n    - `du`: 显示文件或目录的磁盘使用情况。\n\n    5. 网络和通信：\n    - `ping`: 测试网络连通性。\n    - `ifconfig`/`ip`: 查看和配置网络接口信息。\n    - `netstat`: 显示网络连接和路由表。\n    - `ssh`: 远程登录和执行命令。\n    - `scp`: 远程复制文件。\n    - `wget`: 下载文件。\n\n    6. 压缩和解压缩：\n    - `tar`: 打包和解压缩文件。\n    - `gzip`: 压缩和解压缩文件。\n    - `zip`: 压缩和解压缩文件。\n    - `unzip`: 解压缩zip文件。\n\n    这些是Linux中的一些常用命令，对于日常的系统管理、文件操作、网络通信、进程监控等任务非常有用。通过掌握这些基本指令，您可以更好地管理和操作Linux系统。\n\n14. **C++内存管理，静态、全局、堆、栈**\n\n    当谈论C++中的内存管理时，有四种主要的内存管理方式：静态存储、全局存储、堆存储和栈存储。以下是对每种方式的总结：\n\n    1. 静态存储（Static Storage）：\n    - 静态变量在程序运行期间一直存在，它们的生命周期从程序启动到程序结束。\n    - 在函数内部使用`static`关键字声明的局部变量是静态变量，也称为静态局部变量。\n    - 静态变量存储在全局数据区，它们在程序运行前就已经分配了内存，并在程序运行期间一直存在。\n\n    2. 全局存储（Global Storage）：\n    - 全局变量是在函数外部定义的变量，它们可以在程序的任何地方访问。\n    - 全局变量的生命周期与程序的生命周期相同，从程序启动到程序结束。\n    - 全局变量存储在全局数据区，它们在程序运行前就已经分配了内存，并在程序运行期间一直存在。\n\n    3. 堆存储（Heap Storage）：\n    - 堆是一片动态分配的内存区域，用于存放程序运行时动态分配的数据。\n    - 通过`new`运算符在堆上分配内存，并通过`delete`运算符释放内存。\n    - 堆上分配的内存需要手动管理，否则可能导致内存泄漏。\n\n    4. 栈存储（Stack Storage）：\n    - 栈是一种后进先出（LIFO）的数据结构，用于管理程序运行时的函数调用和局部变量。\n    - 函数的参数和局部变量都存储在栈上，当函数执行完毕，栈上的数据会自动销毁。\n    - 栈的管理由编译器自动进行，不需要手动释放内存。\n\n    总结：\n    - 静态存储和全局存储用于存放全局变量和静态变量，它们的生命周期从程序启动到程序结束，存储在全局数据区。\n    - 堆存储用于动态分配内存，需要手动管理内存的分配和释放。\n    - 栈存储用于管理函数调用和局部变量，由编译器自动管理内存的分配和释放。\n\n15. **基类析构函数为什么要声明为虚函数，谈谈多态**\n\n    基类的析构函数声明为虚函数是为了实现多态性（Polymorphism）和正确释放资源。\n\n    多态性是面向对象编程中一个重要的特性，它允许在运行时根据对象的实际类型来调用相应的函数实现。当派生类对象通过基类指针或引用进行访问时，如果基类的析构函数不声明为虚函数，那么在删除指向派生类对象的基类指针时，只会调用基类的析构函数而不会调用派生类的析构函数，从而可能导致资源泄漏或未正确释放。\n\n    通过将基类的析构函数声明为虚函数，可以实现动态绑定（Dynamic Binding）和正确调用派生类的析构函数。当使用基类指针或引用删除派生类对象时，会根据对象的实际类型调用正确的析构函数，从而确保释放派生类对象所占用的资源。\n\n    例如，考虑以下代码：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 21",
            "code": "    class Base {\n    public:\n        virtual ~Base() {\n            // 基类析构函数声明为虚函数\n            // 可以确保正确调用派生类的析构函数\n            // 在释放派生类对象时，会先调用派生类的析构函数，再调用基类的析构函数\n        }\n    };\n    \n    class Derived : public Base {\n    public:\n        ~Derived() {\n            // 派生类析构函数\n        }\n    };\n    \n    int main() {\n        Base* ptr = new Derived();\n        // ...\n        delete ptr; // 正确释放资源，会调用Derived的析构函数，再调用Base的析构函数\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "通过将基类的析构函数声明为虚函数，当我们在`main`函数中使用基类指针`ptr`删除派生类对象时，会先调用`Derived`类的析构函数，再调用`Base`类的析构函数，确保正确",
        "transcript": "通过将基类的析构函数声明为虚函数，当我们在`main`函数中使用基类指针`ptr`删除派生类对象时，会先调用`Derived`类的析构函数，再调用`Base`类的析构函数，确保正确释放派生类对象所占用的资源。\n\n    总结：\n    基类的析构函数应该声明为虚函数，以实现多态性和正确释放资源。通过虚析构函数，可以确保在删除派生类对象时，先调用派生类的析构函数，再调用基类的析构函数，从而正确释放派生类对象的资源。\n\n16. **extern \"C\"{}有什么用**\n\n    在C++中，`extern \"C\"`是一个关键字组合，用于告诉C++编译器以C语言的方式处理特定的代码块或函数声明。\n\n    C++和C语言在函数调用、函数命名规则以及编译器的名称修饰方面有一些差异。当C++代码需要调用C语言编写的函数时，或者C语言代码需要调用C++编写的函数时，由于命名规则和编译器名称修饰的不同，可能导致函数调用失败。\n\n    为了在C++代码中正确调用C语言编写的函数，或者在C语言代码中正确调用C++编写的函数，可以使用`extern \"C\"`来解决这个问题。\n\n    在C++中使用`extern \"C\"`时，会禁用C++对函数名的名称修饰（name mangling），使函数名按照C语言的规则进行编译和链接，从而可以正确地进行跨语言的函数调用。\n\n    例子：\n    C++代码调用C语言编写的函数：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 22",
            "code": "    // C++ code\n    extern \"C\" {\n        void c_function(); // 声明 C 语言编写的函数\n    }\n    \n    int main() {\n        c_function(); // 调用 C 语言编写的函数\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "C语言代码调用C++编写的函数：",
        "transcript": "C语言代码调用C++编写的函数：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 23",
            "code": "    // C++ code\n    extern \"C\" {\n        void cpp_function(); // 声明 C++ 编写的函数\n    }\n    \n    // C 语言的代码\n    int main() {\n        cpp_function(); // 调用 C++ 编写的函数\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "总结：",
        "transcript": "总结：\n    `extern \"C\"`关键字用于在C++代码中调用C语言编写的函数，或者在C语言代码中调用C++编写的函数，以解决由于函数名称修饰导致的函数调用问题。\n\n17. **C++寻址时栈在前还是堆**\n\n    在C++中，栈（Stack）和堆（Heap）是内存中两个不同的区域，它们用于存储不同类型的数据。\n\n    栈是一种后进先出（LIFO）的数据结构，用于管理函数调用和局部变量。当函数被调用时，它的局部变量和函数参数会被分配到栈上，并在函数执行完毕后自动释放。因此，栈中的数据是具有局部性的，它们的生命周期与函数的生命周期相对应。\n\n    堆是一片动态分配的内存区域，用于存储程序运行时动态分配的数据。堆上的数据的生命周期由程序员手动管理，需要在合适的时机使用`new`运算符来分配内存，并使用`delete`运算符来释放内存。\n\n    对于寻找地址的顺序，通常情况下，栈的地址是较低的地址，而堆的地址是较高的地址。在内存中，栈区位于靠近程序的底部，而堆区位于靠近程序的顶部，它们的增长方向是相反的。\n\n    注意：虽然通常情况下栈的地址较低，堆的地址较高，但这并不是C++标准的规定，具体的地址分布由操作系统和编译器决定。实际情况可能因系统和编译器的不同而有所差异。在编写C++代码时，应该遵循C++标准，使用动态分配的内存时要正确管理内存的释放，避免内存泄漏和悬挂指针等问题。\n\n18. **final和override关键字**\n\n    在C++中，`final`和`override`是两个关键字，用于类和类成员函数的声明，用于增强编译器对类继承和虚函数覆盖的检查。\n\n    1. `final`关键字：\n    `final`用于在类层次结构中指示一个类或虚函数是最终的，不能再被继承或覆盖。当我们在类声明或虚函数声明后面加上`final`关键字时，编译器将禁止其他类继续派生该类，或者禁止其他派生类覆盖该虚函数。\n\n    例子：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 24",
            "code": "    class Base final {\n        // Base类声明为final，不能被其他类继承\n    };\n    \n    class Derived : public Base {\n        // 编译错误，Base类被声明为final，不能被继承\n    };\n    \n    class Parent {\n    public:\n        virtual void foo() final {\n            // foo函数被声明为final，不能被派生类覆盖\n        }\n    };\n    \n    class Child : public Parent {\n    public:\n        // 编译错误，foo函数被声明为final，不能被覆盖\n    };"
          }
        ]
      },
      {
        "title": "2. `override`关键字：",
        "transcript": "2. `override`关键字：\n    `override`用于在派生类中显式地标记虚函数的覆盖。当我们在派生类的虚函数声明后面加上`override`关键字时，编译器会检查该函数是否正确地覆盖了基类中的虚函数。如果基类中不存在与之匹配的虚函数，或者覆盖方式不匹配，编译器将产生错误。\n\n    例子：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 25",
            "code": "    class Base {\n    public:\n        virtual void foo() {\n            // 基类的虚函数foo\n        }\n    };\n    \n    class Derived : public Base {\n    public:\n        void foo() override {\n            // 覆盖基类的虚函数foo\n        }\n    };\n    \n    class Child : public Base {\n    public:\n        // 编译错误，Child没有正确覆盖基类的虚函数foo\n        // 应该在函数声明后面加上override关键字\n        void foo() {\n            // 与基类的虚函数foo不匹配\n        }\n    };"
          }
        ]
      },
      {
        "title": "`final`和`override`关键字可以帮助开发人员在继承和虚函数覆盖中避免潜在的错误，并增加代码的清晰性和安全性。",
        "transcript": "`final`和`override`关键字可以帮助开发人员在继承和虚函数覆盖中避免潜在的错误，并增加代码的清晰性和安全性。\n\n19. **虚函数、纯虚函数**\n\n    在C++中，虚函数和纯虚函数都是用于实现运行时多态性（Runtime Polymorphism）的特殊类型的成员函数。\n    虚函数和纯虚函数都是 C++ 中多态性的一种形式。虚函数允许子类覆盖基类中的函数，纯虚函数则要求子类必须覆盖基类中的函数。虚函数和纯虚函数的区别在于，虚函数可以没有实现，而纯虚函数必须有实现。如果虚函数没有实现，那么它将在基类中被声明为纯虚函数。\n\n    纯虚函数用于实现抽象基类。抽象基类是不能实例化的基类。如果一个类包含纯虚函数，那么这个类也必须是抽象基类。\n\n    虚函数和纯虚函数在 C++ 中很有用，因为它们可以提高代码的灵活性和可扩展性。使用虚函数和纯虚函数，可以实现多态性，这意味着可以通过基类的指针或引用来调用子类的函数。这使得代码更加通用，可以更容易地扩展。\n\n    1. 虚函数（Virtual Function）：\n    - 虚函数是在基类中声明为`virtual`的成员函数。\n    - 虚函数允许在继承层次结构中进行函数的重写（覆盖）。\n    - 当通过基类指针或引用调用虚函数时，会根据实际对象的类型来调用对应的派生类函数实现。\n    - 使用虚函数可以实现运行时多态性，让程序在运行时根据对象的实际类型来动态绑定（Dynamic Binding）相应的函数。\n\n    例子：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 26",
            "code": "    class Shape {\n    public:\n        virtual void draw() {\n            // 基类的虚函数draw\n        }\n    };\n    \n    class Circle : public Shape {\n    public:\n        void draw() override {\n            // 派生类的覆盖函数draw\n        }\n    };\n    \n    Shape* shapePtr = new Circle();\n    shapePtr->draw(); // 调用派生类的draw函数"
          }
        ]
      },
      {
        "title": "2. 纯虚函数（Pure Virtual Function）：",
        "transcript": "2. 纯虚函数（Pure Virtual Function）：\n    - 纯虚函数是在基类中声明为纯虚函数的成员函数，声明形式为`virtual ReturnType functionName() = 0;`。\n    - 纯虚函数没有函数体，必须在派生类中实现（覆盖）。\n    - 如果一个类中含有至少一个纯虚函数，这个类就被称为抽象类（Abstract Class）。抽象类不能被实例化，只能用作派生类的基类。\n    - 派生类必须实现基类的所有纯虚函数，否则派生类也会变成抽象类。\n\n    例子：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 27",
            "code": "    class Shape {\n    public:\n        virtual void draw() = 0; // 纯虚函数\n    };\n    \n    class Circle : public Shape {\n    public:\n        void draw() override {\n            // 派生类实现基类的纯虚函数draw\n        }\n    };\n    \n    Shape* shapePtr = new Circle();\n    shapePtr->draw(); // 调用派生类的draw函数"
          }
        ]
      },
      {
        "title": "总结：",
        "transcript": "总结：\n    虚函数允许在继承层次结构中进行函数的重写，并实现运行时多态性；而纯虚函数是没有函数体的虚函数，必须在派生类中实现，用于定义接口，使得基类成为抽象类。通过虚函数和纯虚函数，可以实现多态性，使得程序在运行时根据对象的实际类型来调用相应的函数实现。\n\n20. **指针和引用**\n\n    当谈论指针和引用时，它们都是C++中用于处理内存中变量的方式，但它们在使用和行为上有一些不同。\n\n    1. 指针（Pointer）：\n    - 指针是一个变量，用于存储内存地址。\n    - 可以通过指针来访问指向的内存地址处的值。\n    - 通过使用`&`操作符可以获取变量的地址，而使用`*`操作符可以获取指针指向的值。\n    - 指针可以被重新赋值，可以指向不同的内存地址。\n    - 指针可以为空指针（`nullptr`），表示不指向任何内存地址。\n    - 指针可以进行算术运算，如指针加减整数。\n\n    例子：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 28",
            "code": "    int x = 5;\n    int* ptr = &x; // 定义指针ptr并指向x的地址\n    cout << *ptr; // 输出指针ptr指向的值，即x的值"
          }
        ]
      },
      {
        "title": "2. 引用（Reference）：",
        "transcript": "2. 引用（Reference）：\n    - 引用是一个已存在的变量的别名，它和原变量共享同一块内存地址。\n    - 一旦引用被初始化，它始终指向同一个变量，无法重新赋值指向其他变量。\n    - 引用在使用时无需使用`*`操作符，直接使用引用即可访问原变量的值。\n    - 引用不能为null，必须在声明时初始化，而且一旦初始化后不能再修改。\n\n    例子：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 29",
            "code": "    int x = 5;\n    int& ref = x; // 定义引用ref，它是变量x的别名\n    cout << ref; // 输出引用ref，即x的值"
          }
        ]
      },
      {
        "title": "总结：",
        "transcript": "总结：\n    指针是一个变量，用于存储内存地址，并可以在运行时指向不同的内存地址，而引用是一个变量的别名，始终指向同一个变量，并且在初始化后不能重新赋值。指针允许进行空指针、算术运算等操作，而引用不允许。使用指针和引用时需要注意对内存的操作，确保不会出现悬挂指针或引用失效的问题。在使用上，优先使用引用，因为它提供了更方便的语法和更安全的行为。\n\n21. **unordered_set 和 unordered_map 底层数据结构**\n\n    在C++标准库中，`std::unordered_set`和`std::unordered_map`是无序容器，它们使用哈希表（Hash Table）作为底层数据结构。\n\n    1. `std::unordered_set`：\n    - `std::unordered_set`是一个无序集合容器，存储唯一的元素。\n    - 它使用哈希表来实现数据的存储和快速查找。\n    - 哈希表是一种以键值对形式存储数据的数据结构，其中每个键（key）都是唯一的，且通过哈希函数将键映射到相应的存储位置。\n    - 哈希表使得查找、插入和删除元素的平均时间复杂度都是常数时间O(1)，因此`std::unordered_set`在大多数情况下具有高效的性能。\n\n    2. `std::unordered_map`：\n    - `std::unordered_map`是一个无序键值对容器，其中的每个元素由一个键和一个关联值组成。\n    - 类似于`std::unordered_set`，`std::unordered_map`也使用哈希表作为底层数据结构。\n    - 对于每个键值对，哈希表根据键来计算哈希值，并将键值对存储在相应的位置。\n    - `std::unordered_map`允许根据键快速查找对应的关联值，具有高效的查找性能。\n\n    无序集合和无序键值对容器在插入、查找和删除元素的操作上性能优秀，但它们的迭代顺序是不确定的，与元素插入的顺序无关。如果需要有序容器，可以使用`std::set`和`std::map`等有序容器。\n\n    需要注意的是，在使用无序容器时，元素类型需要支持哈希函数，或者提供自定义的哈希函数。如果使用自定义类型作为键或元素，需要重载该类型的`std::hash`函数以支持哈希操作。\n\n22. **哈希表时间复杂度 红黑树**\n\n    哈希表（Hash Table）和红黑树（Red-Black Tree）是常见的数据结构，它们在不同操作的时间复杂度上有所差异。\n\n    哈希表的时间复杂度：\n    - 平均情况下，哈希表的查找、插入和删除操作的时间复杂度都是O(1)。\n    - 在哈希函数均匀分布的情况下，哈希表能够提供很高的性能，使得这些操作具有常数时间复杂度。\n    - 但在最坏情况下，如果哈希冲突较多，哈希表的查找、插入和删除操作的时间复杂度可能会退化到O(n)。\n\n    红黑树的时间复杂度：\n    - 红黑树是一种自平衡二叉搜索树，它保持了良好的平衡性，因此它的查找、插入和删除操作的时间复杂度都是O(log n)。\n    - 红黑树通过维护红黑性质，确保了树的高度在log n的范围内，保持了较好的性能。\n    - 由于红黑树是一种有序数据结构，它在有序遍历方面也具有优势。\n\n    总结：\n    - 哈希表在平均情况下具有O(1)的查找、插入和删除操作，但最坏情况下可能为O(n)。\n    - 红黑树具有O(log n)的查找、插入和删除操作，同时保持了有序性，但相比哈希表，它可能有稍高的常数时间开销，并且需要更多的内存空间。选择使用哈希表还是红黑树取决于具体的需求和数据规模。\n\n23. **static关键字 **\n\n    在C++中，`static`关键字有多种用途，它可以应用于不同的上下文，具体作用如下：\n\n    1. 静态变量（Static Variables）：\n    - 在函数内部使用`static`关键字声明的局部变量成为静态局部变量，其生命周期与程序的整个运行周期相同，而不是仅限于函数的执行期间。\n    - 静态局部变量在函数第一次被调用时初始化，且只初始化一次，之后每次函数调用都会保持上次的值。\n    - 静态局部变量存储在静态存储区，不会随着函数的退出而被销毁，直到程序结束时才会被释放。\n\n    2. 静态成员变量（Static Member Variables）：\n    - 在类内部使用`static`关键字声明的成员变量成为静态成员变量，它被该类的所有对象所共享。\n    - 静态成员变量在类的所有对象中只有一份拷贝，而不是每个对象都有一份独立的拷贝。\n    - 静态成员变量必须在类的外部进行初始化，并且在初始化时需要指定其类型。\n\n    3. 静态成员函数（Static Member Functions）：\n    - 在类内部使用`static`关键字声明的成员函数成为静态成员函数，它不依赖于任何对象而被调用。\n    - 静态成员函数不能访问非静态的成员变量，只能访问静态成员变量。\n    - 静态成员函数可以通过类名来调用，不需要创建对象。\n\n    4. 静态断言（Static Assertion）：\n    - `static_assert`是一个编译时断言，用于在编译时检查表达式是否为真。\n    - 如果表达式为真，编译继续进行；如果表达式为假，编译将失败并显示相应的错误信息。\n\n    例子：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 30",
            "code": "    class MyClass {\n    public:\n        static int staticVariable; // 静态成员变量声明\n        static void staticFunction() {\n            // 静态成员函数\n        }\n    };\n    \n    int MyClass::staticVariable = 0; // 静态成员变量初始化\n    \n    int main() {\n        static int staticLocalVariable = 5; // 静态局部变量\n        MyClass::staticFunction(); // 调用静态成员函数\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "总结：",
        "transcript": "总结：\n    在C++中，`static`关键字可以用于声明静态局部变量、静态成员变量、静态成员函数和静态断言，其用法和作用取决于具体的上下文。静态变量和静态成员变量在整个程序运行期间保持存在，而静态成员函数可以直接通过类名调用而不需要对象。静态断言用于在编译时对表达式进行检查。\n\n24. **虚拟内存** \n\n    虚拟内存是计算机操作系统中的一种技术，它为每个进程提供了一个看似连续且私有的地址空间，使得每个进程感觉自己拥有整个系统的全部内存。在C++中，虚拟内存是通过操作系统提供的机制实现的，程序员在编写代码时无需直接操作虚拟内存，而是通过使用指针和内存管理函数来进行内存分配和访问。\n\n    虚拟内存的主要特点包括：\n\n    1. 虚拟地址空间：\n       - 虚拟内存为每个进程提供了一个独立的虚拟地址空间，它是一个看似连续的地址范围，通常是从0到一个非常大的数值。\n       - 每个进程都有自己的虚拟地址空间，进程之间的地址空间是隔离的，一个进程无法直接访问另一个进程的虚拟地址空间。\n\n    2. 分页和分段：\n       - 虚拟内存使用分页（Paging）和分段（Segmentation）技术来实现地址映射。\n       - 分页将虚拟地址空间划分为固定大小的页，而分段将虚拟地址空间划分为不同大小的段。\n       - 操作系统将虚拟地址映射到实际的物理地址，允许进程访问对应的内存。\n\n    3. 虚拟内存和物理内存的映射：\n       - 虚拟内存中的页或段并不一定全部在物理内存中，部分内容可能存储在硬盘的交换空间中。\n       - 当程序访问虚拟内存中的某个页或段时，操作系统会负责将所需的内容从硬盘加载到物理内存中。\n       - 这种机制使得系统可以支持比物理内存更大的地址空间，允许运行更大规模的程序。\n\n    4. 内存保护：\n       - 虚拟内存允许操作系统在进程间进行内存保护，确保一个进程无法访问其他进程的虚拟地址空间。\n       - 当进程尝试访问不存在或未授权的内存区域时，操作系统会产生异常，并终止该进程的执行。\n\n    总结：\n    虚拟内存是一种计算机操作系统的技术，为每个进程提供了看似连续且私有的地址空间，允许进程访问比实际物理内存更大的地址范围。虚拟内存通过分页和分段技术实现地址映射，并允许操作系统将虚拟内存中的部分内容存储在硬盘的交换空间中，从而提供更大规模的内存访问和保护机制。程序员在编写C++代码时无需直接操作虚拟内存，而是通过指针和内存管理函数来进行内存分配和访问。\n\n25. **智能指针介绍，注意事项，可否在STL容器中使用?**\n\n    在C++中，智能指针（Smart Pointers）是一种用于管理动态分配的内存的指针对象，它可以自动管理内存的生命周期，避免常见的内存泄漏和悬挂指针问题。\n\n    C++中有三种常用的智能指针：\n\n    1. `std::unique_ptr`：\n       - `std::unique_ptr`是一种独占式智能指针，它拥有对动态分配的对象的唯一拥有权。\n       - 当`std::unique_ptr`被销毁或重置时，它会自动释放它所拥有的对象的内存。\n       - `std::unique_ptr`不能进行复制，只能通过移动语义转移拥有权。\n\n    2. `std::shared_ptr`：\n       - `std::shared_ptr`是一种共享式智能指针，可以被多个`std::shared_ptr`共享拥有。\n       - 当最后一个`std::shared_ptr`拥有者被销毁或重置时，它会自动释放对象的内存。\n       - `std::shared_ptr`使用引用计数来跟踪共享的拥有权，需要谨慎避免循环引用导致内存泄漏。\n\n    3. `std::weak_ptr`：\n       - `std::weak_ptr`也是一种共享式智能指针，但它不会增加引用计数。\n       - `std::weak_ptr`用于解决`std::shared_ptr`可能出现的循环引用问题，可以使用`lock()`函数来获取一个有效的`std::shared_ptr`对象。\n\n    注意事项：\n    - 智能指针是C++11引入的特性，需要确保编译器支持C++11及以上版本。\n    - 避免使用裸指针和`delete`来管理内存，尽量使用智能指针来管理动态分配的对象，从而避免内存泄漏和悬挂指针问题。\n    - 对于循环引用，使用`std::weak_ptr`来解决。\n    - 当使用智能指针时，要注意避免形成重复拥有的指针，特别是在函数返回时，避免返回局部对象的指针或引用。\n\n    可以在STL容器中使用智能指针：\n    - 可以将智能指针放入STL容器中，例如`std::vector<std::shared_ptr<T>>`或`std::map<KeyType, std::unique_ptr<ValueType>>`等。\n    - 使用智能指针可以确保容器中的动态分配对象在不再需要时会被正确释放，从而避免内存泄漏问题。\n\n    对于循环引用问题，使用`std::weak_ptr`主要是为了解决ownership（拥有权）问题，而引用计数只是`std::shared_ptr`实现共享拥有权的一种机制。\n\n    循环引用指的是两个或多个对象之间互相持有`std::shared_ptr`，形成了一个环状结构，导致引用计数始终不为0，对象无法被正确释放，从而造成内存泄漏。\n\n    使用`std::weak_ptr`的主要目的是打破循环引用，避免造成内存泄漏。`std::weak_ptr`是一种弱引用，它可以指向`std::shared_ptr`所拥有的对象，但不会增加引用计数，也不拥有对象的所有权。当所有的`std::shared_ptr`都释放了对对象的拥有权时，对象将会被销毁，而`std::weak_ptr`则会自动失效，不再指向任何对象。\n\n    通过使用`std::weak_ptr`，我们可以在必要时通过`lock()`函数来获取有效的`std::shared_ptr`对象，从而在不影响拥有权的情况下使用对象。一旦最后一个`std::shared_ptr`释放了对对象的拥有权，`std::weak_ptr`就会自动失效，避免了循环引用造成的内存泄漏。\n\n    总结：\n    使用`std::weak_ptr`来解决循环引用问题主要是为了解决ownership（拥有权）问题，通过弱引用避免了循环引用造成的内存泄漏。引用计数是`std::shared_ptr`实现共享拥有权的一种机制，但对于循环引用问题，仅依赖引用计数是无法解决的，需要使用`std::weak_ptr`来破坏循环引用，确保对象正确释放。\n\n26. **进程和线程，通信方式，最快的进程通信方式，第二快呢?**\n\n    进程和线程之间可以通过不同的通信方式进行数据交换和同步。以下是常见的进程和线程通信方式：\n\n    1. 进程通信方式：\n       - 管道（Pipe）：一种半双工通信方式，适用于具有亲缘关系的进程之间进行通信。\n       - 命名管道（Named Pipe）：类似于管道，但可以用于不具有亲缘关系的进程之间通信。\n       - 信号量（Semaphore）：用于进程之间的同步和互斥，可以通过信号量来控制共享资源的访问。\n       - 消息队列（Message Queue）：用于进程之间传递消息，可以实现异步通信。\n       - 共享内存（Shared Memory）：允许多个进程共享同一块内存区域，效率高，但需要进行同步和互斥操作。\n\n    2. 线程通信方式：\n       - 互斥量（Mutex）：用于线程之间对共享资源的访问进行互斥，避免竞争条件。\n       - 条件变量（Condition Variable）：用于线程之间的同步，允许一个线程等待某个条件满足后再继续执行。\n       - 信号量（Semaphore）：与进程通信方式的信号量类似，用于线程之间的同步和互斥。\n\n    最快的通信方式是线程内部的通信，即线程内部的变量共享和函数调用。由于线程共享同一进程的地址空间，线程之间的数据交换和函数调用是最快速的，不需要额外的通信机制和开销。\n\n    第二快的通信方式取决于具体情况。在进程通信中，共享内存通信方式通常是较快的，因为它避免了数据的复制和传输，多个进程可以直接读写同一块内存。在线程通信中，互斥量的开销较小，因为它只涉及单个进程内的线程之间的同步。然而，最快的通信方式仍然是线程内部的通信，因为它避免了进程间或线程间的上下文切换和同步操作。\n\n27. **STL容器中是否了解线程相关的函数？**\n\n    在C++的标准模板库（STL）中，并没有直接提供线程相关的函数。STL主要关注于数据结构和算法的实现，而线程是C++11引入的多线程特性，属于语言本身的一部分，而不是STL的范畴。\n\n    C++11引入了对多线程编程的支持，其中包含了`<thread>`头文件，提供了创建线程、线程同步、互斥量、条件变量等相关的功能。使用`std::thread`可以创建新线程，使用`std::mutex`和`std::lock_guard`可以实现互斥量，使用`std::condition_variable`可以实现条件变量等等。\n\n    例如，以下是一个简单的使用C++11多线程的例子：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 31",
            "code": "    #include <iostream>\n    #include <thread>\n    #include <mutex>\n    \n    std::mutex mtx; // 定义互斥量\n    \n    void printHello() {\n        std::lock_guard<std::mutex> lock(mtx); // 互斥锁，确保输出不会交叉\n        std::cout << \"Hello from thread!\" << std::endl;\n    }\n    \n    int main() {\n        std::thread t(printHello); // 创建新线程\n        t.join(); // 等待新线程执行完毕\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "需要注意的是，多线程编程涉及到共享资源的访问和同步问题，需要谨慎设计和处理线程间的数据竞争和同步问题。使用多线程时需要了解相关的线程安全编程和同步机制，以确保程序的正确性和稳定性。",
        "transcript": "需要注意的是，多线程编程涉及到共享资源的访问和同步问题，需要谨慎设计和处理线程间的数据竞争和同步问题。使用多线程时需要了解相关的线程安全编程和同步机制，以确保程序的正确性和稳定性。\n\n28. **野指针，什么会造成野指针？**\n\n    野指针（Dangling Pointer）是指指向已经释放或无效的内存地址的指针，访问野指针会导致未定义行为，可能会引发程序崩溃或产生不可预期的结果。野指针的产生通常由以下几种情况造成：\n\n    1. 指针没有初始化：\n       - 当一个指针没有被初始化或被赋予一个无效的地址时，它成为野指针。\n\n    2. 释放后未置空：\n       - 当一个指针指向的内存区域被释放（比如使用`delete`释放动态分配的内存），但指针本身未置空，这个指针就成为野指针。\n       - 通常在释放指针所指向的内存后，应该将指针置为`nullptr`，以避免产生野指针。\n\n    3. 函数返回局部变量的指针：\n       - 如果一个函数返回了一个指向局部变量的指针，并在调用函数后访问了该指针，就会产生野指针。\n       - 因为局部变量在函数返回时会被销毁，指针将指向无效的内存。\n\n    4. 指针悬挂：\n       - 当一个指针指向的对象被提前销毁，但指针本身未置空，就会产生悬挂指针，也可以看作是一种野指针。\n\n    避免野指针的出现是程序正确性和安全性的重要保证。正确的做法是在指针释放后将其置为空指针（nullptr），并在使用指针前进行初始化或者赋予有效地址。使用智能指针可以帮助避免一些野指针问题，因为智能指针会自动管理内存的释放，不需要手动释放指针所指向的内存。\n\n29. **右值引用**\n\n    在C++中，左值（Lvalue）和右值（Rvalue）是用于描述表达式的属性或类型的概念。\n\n    左值（Lvalue）：\n    - 左值是指表达式结束后依然存在的持久对象。\n    - 左值可以是变量、函数返回的左值引用、数组元素等。\n    - 左值可以出现在赋值语句的左边（可修改）或右边（取值）。\n    - 例如：变量、数组元素、引用、对象成员、返回左值引用的函数等。\n\n    右值（Rvalue）：\n    - 右值是指表达式结束后即将被销毁的临时对象。\n    - 右值可以是字面量、临时对象、返回右值引用的函数等。\n    - 右值只能出现在赋值语句的右边（取值），不能在赋值语句的左边（不可修改）。\n    - 例如：字面量（如整数、浮点数、字符等）、临时对象、返回右值引用的函数等。\n\n    简单来说，左值是可以取地址的，有明确的内存存储位置，而右值是临时的、没有明确内存地址的值。\n\n    C++11引入了右值引用（Rvalue Reference），用于标识右值的引用类型。右值引用允许将资源从一个对象转移到另一个对象，实现了移动语义（Move Semantics），避免了不必要的深拷贝，提高了性能。\n\n    例如：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 32",
            "code": "    int a = 10; // a 是左值\n    int& ref_a = a; // ref_a 是左值引用\n    \n    int b = 5; // 5 是右值\n    int&& rref_b = 5; // rref_b 是右值引用\n    \n    int c = a + b; // a + b 是右值，结果存储在 c 中，c 是左值"
          }
        ]
      },
      {
        "title": "在C++中，左值和右值的区分对于理解语言的语义和进行模板元编程等都是很重要的。引入右值引用使得C++可以更好地管理资源和实现高效的移动操作。",
        "transcript": "在C++中，左值和右值的区分对于理解语言的语义和进行模板元编程等都是很重要的。引入右值引用使得C++可以更好地管理资源和实现高效的移动操作。\n\n    左值引用（Lvalue Reference）和右值引用（Rvalue Reference）是C++11引入的新特性，它们用于标识对象的引用类型，并且有不同的使用场景和语义。\n\n    左值引用（Lvalue Reference）：\n    - 左值引用用于绑定到左值（左值是指表达式结束后依然存在的持久对象，例如变量、函数返回的左值等）。\n    - 声明一个左值引用时，需要在类型前加上`&`符号。\n    - 左值引用主要用于提供函数重载，以支持对对象进行修改或获取其值。\n    - 左值引用不允许绑定到临时对象（右值），因此不能延长临时对象的生命周期。\n\n    右值引用（Rvalue Reference）：\n    - 右值引用用于绑定到右值（右值是指表达式结束后即将被销毁的临时对象，例如字面量、临时对象、返回右值引用的函数等）。\n    - 声明一个右值引用时，需要在类型前加上`&&`符号。\n    - 右值引用主要用于支持移动语义（Move Semantics），允许将资源从一个对象转移至另一个对象，避免不必要的深拷贝。\n    - 右值引用还用于标识接受临时对象的构造函数，例如移动构造函数和移动赋值运算符。\n\n    区别：\n    1. 绑定对象类型：左值引用用于绑定到左值，右值引用用于绑定到右值。\n    2. 生命周期：左值引用不能延长临时对象的生命周期，右值引用可以延长临时对象的生命周期，使其可以被移动。\n    3. 支持移动语义：右值引用支持移动语义，允许转移资源的所有权，提高性能。\n\n    例如：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 33",
            "code": "    int a = 10; // a 是左值\n    int& ref_a = a; // ref_a 是左值引用\n    int&& rref_a = 10; // rref_a 是右值引用，绑定到临时对象\n    \n    int&& foo() { return 5; } // 函数返回右值引用，返回临时对象\n    \n    std::vector<int> v1 = {1, 2, 3};\n    std::vector<int> v2 = std::move(v1); // 使用 std::move 调用移动构造函数"
          }
        ]
      },
      {
        "title": "总结：",
        "transcript": "总结：\n    左值引用和右值引用是C++11引入的新特性，左值引用用于绑定到左值，右值引用用于绑定到右值，它们主要用于支持函数重载和移动语义，带来更高效的内存管理和对象转移。\n\n30. **引用折叠**\n\n    引用折叠（Reference collapsing）是C++11中引入的一种规则，用于在某些情况下简化模板类型推导时的引用类型处理。引用折叠规则有助于保持类型的一致性，并且在模板编程中起到重要的作用。\n\n    引用折叠规则如下：\n\n    1. 当左值引用（Lvalue Reference）与左值引用相结合时，结果仍为左值引用。\n    2. 当左值引用与右值引用（Rvalue Reference）相结合时，结果为右值引用。\n    3. 当右值引用与右值引用相结合时，结果仍为右值引用。\n\n    引用折叠的主要应用场景是在模板类型推导中。在模板中如果参数是引用类型，那么当实参为左值引用时，模板类型推导的结果也是左值引用；当实参为右值引用时，模板类型推导的结果也是右值引用。这使得模板函数可以正确处理左值和右值的引用类型，避免了重复编写函数的代码。\n\n    例如，考虑以下模板函数的情况：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 34",
            "code": "    template<typename T>\n    void process(T&& val) {\n        // 根据引用折叠规则，这里的 T&& 在模板类型推导时将根据实参的引用类型决定\n    }"
          }
        ]
      },
      {
        "title": "在使用`process`函数时，根据实参的引用类型，模板类型推导会决定函数中`T&&`是左值引用还是右值引用。这样可以实现对左值和右值的引用类型的正确处理，例如：",
        "transcript": "在使用`process`函数时，根据实参的引用类型，模板类型推导会决定函数中`T&&`是左值引用还是右值引用。这样可以实现对左值和右值的引用类型的正确处理，例如：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 35",
            "code": "    int a = 10;\n    process(a); // 推导为 int&，val 是 int& 类型\n    \n    process(5); // 推导为 int&&，val 是 int&& 类型"
          }
        ]
      },
      {
        "title": "总结：",
        "transcript": "总结：\n    引用折叠是C++11中用于简化模板类型推导的规则。根据引用折叠规则，当左值引用与左值引用相结合时，结果仍为左值引用；当左值引用与右值引用相结合时，结果为右值引用；当右值引用与右值引用相结合时，结果仍为右值引用。这使得模板函数能够正确处理左值和右值的引用类型，避免了重复编写函数的代码。\n\n31. **webserver** \n\n    在C++中，Web服务器是一种应用程序，用于接收来自客户端的HTTP请求并相应地处理这些请求。Web服务器可以处理静态资源（如HTML、CSS、JS文件）的请求，也可以处理动态资源（如数据库查询、用户认证）的请求。Web服务器是Web应用程序的基础，它负责接收和处理网络请求，返回相应的HTTP响应。\n\n    一般情况下，C++中的Web服务器是基于网络编程库实现的，例如Boost.Asio、libuv、cpp-netlib等。这些库提供了用于构建网络服务器的底层API，可以方便地处理网络连接、请求和响应等操作。\n\n    通常，一个C++中的Web服务器的工作流程如下：\n\n    1. 监听端口：Web服务器在指定的端口上监听传入的HTTP请求。\n\n    2. 接收请求：当有客户端发起HTTP请求时，服务器接收连接并读取HTTP请求数据。\n\n    3. 解析请求：服务器解析HTTP请求，获取请求的方法（GET、POST等）、请求的资源路径、请求头和请求体等信息。\n\n    4. 处理请求：根据解析得到的请求信息，服务器根据路由规则，选择合适的处理函数或处理器来处理请求。\n\n    5. 生成响应：服务器根据请求处理的结果生成HTTP响应，包括状态码、响应头和响应体。\n\n    6. 发送响应：服务器将生成的HTTP响应发送给客户端。\n\n    7. 关闭连接：完成响应后，服务器关闭与客户端的连接，等待下一个请求。\n\n    在构建一个C++中的Web服务器时，需要考虑以下方面：\n\n    - 网络编程库的选择：选择适合自己需求的网络编程库，例如Boost.Asio用于异步I/O操作，libuv用于事件驱动I/O等。\n\n    - 路由规则和请求处理：根据不同的URL路径和HTTP方法，配置对应的请求处理函数或处理器，来实现具体的业务逻辑。\n\n    - 多线程支持：为了提高并发处理能力，可以考虑使用多线程或线程池来处理并发请求。\n\n    - 安全性：在处理请求时，需要确保输入数据的安全性，避免因恶意输入导致的安全问题。\n\n    - 性能优化：可以通过优化网络传输、数据库查询等方面来提高服务器的性能。\n\n    总体而言，C++中的Web服务器是通过网络编程库实现的网络服务程序，用于接收和处理来自客户端的HTTP请求，并相应地返回HTTP响应。\n\n    下面是一个简单的C++ Web服务器的示例，使用Boost.Asio库进行网络编程：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 36",
            "code": "    #include <iostream>\n    #include <boost/asio.hpp>\n    #include <string>\n    \n    using namespace boost::asio;\n    using ip::tcp;\n    \n    void handle_request(tcp::socket& socket) {\n        boost::system::error_code error;\n    \n        // 读取客户端的HTTP请求\n        char data[1024];\n        size_t bytes_read = socket.read_some(buffer(data), error);\n    \n        if (!error) {\n            std::string request(data, bytes_read);\n            std::cout << \"Received request:\\n\" << request << std::endl;\n    \n            // 构造HTTP响应\n            std::string response = \"HTTP/1.1 200 OK\\r\\nContent-Length: 13\\r\\n\\r\\nHello, World!\";\n            boost::system::error_code ignored_error;\n    \n            // 发送HTTP响应给客户端\n            write(socket, buffer(response), ignored_error);\n        }\n        else {\n            std::cerr << \"Error while reading request: \" << error.message() << std::endl;\n        }\n    }\n    \n    int main() {\n        io_service io_service;\n    \n        // 创建一个TCP端口\n        tcp::acceptor acceptor(io_service, tcp::endpoint(tcp::v4(), 8080));\n    \n        while (true) {\n            // 等待客户端连接\n            tcp::socket socket(io_service);\n            acceptor.accept(socket);\n    \n            // 处理客户端请求\n            handle_request(socket);\n        }\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "该示例使用Boost.Asio库创建一个简单的单线程Web服务器，监听8080端口。当有客户端连接时，服务器会读取客户端的HTTP请求，并返回一个固定的HTTP响应\"Hello, ",
        "transcript": "该示例使用Boost.Asio库创建一个简单的单线程Web服务器，监听8080端口。当有客户端连接时，服务器会读取客户端的HTTP请求，并返回一个固定的HTTP响应\"Hello, World!\"。请注意，这是一个非常简单的示例，实际生产环境中需要更多的功能和安全性考虑。\n\n32. **线程池的实现原理、线程数量的确定**\n\n    线程池是一种多线程编程技术，用于管理和复用线程，以提高并发性能和资源利用率。线程池的实现原理如下：\n\n    1. 初始化：在创建线程池时，首先会初始化一定数量的线程，这些线程都处于空闲状态，等待任务的到来。\n\n    2. 任务队列：线程池会维护一个任务队列，用于存储待执行的任务。当有新任务到来时，线程池将任务添加到队列中。\n\n    3. 任务调度：空闲的线程会从任务队列中取出任务，执行任务的函数。线程池中的线程不断循环地从任务队列中获取任务并执行。\n\n    4. 线程复用：当线程完成一个任务后，并不立即销毁线程，而是将线程设置为空闲状态，等待新的任务。这样做的好处是避免频繁创建和销毁线程的开销，提高性能。\n\n    线程数量的确定通常需要根据实际情况和需求进行调优。以下几个因素需要考虑：\n\n    1. 任务类型：如果任务是CPU密集型任务，可能需要多个线程来充分利用多核CPU的计算能力；如果任务是I/O密集型任务，可能需要较少的线程，因为大部分时间都在等待I/O操作完成。\n\n    2. 系统资源：线程池的线程数量不应该超过系统的物理核心数或逻辑核心数，避免过多的线程切换带来的性能损失。\n\n    3. 内存消耗：每个线程都会占用一定的内存，线程数量过多可能导致内存消耗过大。\n\n    4. 负载均衡：线程数量的合理确定可以帮助实现任务的负载均衡，保证任务能够尽可能均匀地分配给线程执行。\n\n    线程池的线程数量一般需要根据具体的应用场景和系统特点进行调整和优化，使得线程池在不同负载下都能保持高效的运行。\n\n    当确定线程数量时，需要根据具体的应用场景和系统特点进行考虑。以下是一个简单的例子，假设我们有一个CPU密集型任务，需要计算斐波那契数列的第n项，我们可以使用线程池来执行这个任务。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 37",
            "code": "    #include <iostream>\n    #include <vector>\n    #include <thread>\n    #include <mutex>\n    \n    std::mutex mtx;\n    std::vector<long long> results;\n    \n    long long fibonacci(int n) {\n        if (n <= 0)\n            return 0;\n        else if (n == 1)\n            return 1;\n        else\n            return fibonacci(n - 1) + fibonacci(n - 2);\n    }\n    \n    void task(int start, int end) {\n        for (int i = start; i <= end; ++i) {\n            long long result = fibonacci(i);\n            std::lock_guard<std::mutex> lock(mtx);\n            results.push_back(result);\n        }\n    }\n    \n    int main() {\n        const int num_threads = std::thread::hardware_concurrency();\n        const int n = 10; // 计算斐波那契数列的前n项\n    \n        std::vector<std::thread> threads;\n        int chunk_size = n / num_threads;\n        int start = 0;\n    \n        for (int i = 0; i < num_threads; ++i) {\n            int end = (i == num_threads - 1) ? n : start + chunk_size - 1;\n            threads.emplace_back(task, start, end);\n            start += chunk_size;\n        }\n    \n        for (auto& thread : threads) {\n            thread.join();\n        }\n    \n        std::cout << \"Fibonacci sequence of \" << n << \" terms:\\n\";\n        for (int i = 0; i < n; ++i) {\n            std::cout << results[i] << \" \";\n        }\n        std::cout << std::endl;\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在这个例子中，我们首先通过`std::thread::hardware_concurrency()`获取系统的物理核心数或逻辑核心数，作为线程池的线程数量。然后，将任务分成若干个子",
        "transcript": "在这个例子中，我们首先通过`std::thread::hardware_concurrency()`获取系统的物理核心数或逻辑核心数，作为线程池的线程数量。然后，将任务分成若干个子任务，每个子任务分配给一个线程执行。最后，等待所有线程完成任务，并输出结果。\n\n    请注意，线程数量的合理确定可能需要根据具体系统的硬件配置、任务的特点以及性能需求进行调优。在实际应用中，我们可能需要根据实际运行情况进行测试和优化，以获得最佳的性能表现。\n\n33. **unique_ptr是什么？**\n\n    `std::unique_ptr`是C++11中的智能指针（Smart Pointer）之一，用于管理动态分配的对象，并在对象不再需要时自动释放内存。`unique_ptr`提供了独占所有权（Exclusive Ownership）的语义，同一时间只能有一个`unique_ptr`拥有指向某个对象的所有权。\n\n    `std::unique_ptr`的特点和用法如下：\n\n    1. 独占所有权：一个`unique_ptr`对象可以拥有对一个动态分配的对象的唯一所有权。当`unique_ptr`被销毁或者通过`std::move`转移所有权时，它会自动释放其所拥有的对象。\n\n    2. 防止内存泄漏：由于`unique_ptr`的独占所有权，它确保了动态分配的对象在不再需要时会被正确地释放，避免了内存泄漏问题。\n\n    3. 不允许复制：`unique_ptr`是不可复制的，只能通过移动语义来转移所有权。这意味着一个`unique_ptr`对象不能被复制构造或赋值给另一个`unique_ptr`对象。\n\n    4. 支持自定义删除器：可以通过指定自定义删除器函数来控制`unique_ptr`在释放资源时的行为，例如，使用`std::unique_ptr`管理动态数组时，可以使用自定义删除器`std::default_delete<T[]>`。\n\n    使用`std::unique_ptr`可以避免手动释放资源的繁琐过程，使得动态内存管理更加安全和高效。在C++中，建议尽量使用智能指针来管理动态内存，而不是手动使用`new`和`delete`。\n\n    以下是使用`std::unique_ptr`的简单示例：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 38",
            "code": "    #include <iostream>\n    #include <memory>\n    \n    int main() {\n        // 创建一个std::unique_ptr来管理动态分配的整数\n        std::unique_ptr<int> ptr = std::make_unique<int>(10);\n    \n        std::cout << \"Value: \" << *ptr << std::endl; // 输出: Value: 10\n    \n        // 可以通过std::move转移所有权\n        std::unique_ptr<int> ptr2 = std::move(ptr);\n    \n        // 注意此时ptr为nullptr\n        if (!ptr) {\n            std::cout << \"ptr is nullptr\" << std::endl; // 输出: ptr is nullptr\n        }\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在这个例子中，我们使用`std::unique_ptr`来管理一个动态分配的整数，并通过`std::move`将所有权转移给了另一个`std::unique_ptr`对象。当`pt",
        "transcript": "在这个例子中，我们使用`std::unique_ptr`来管理一个动态分配的整数，并通过`std::move`将所有权转移给了另一个`std::unique_ptr`对象。当`ptr`被转移后，它变成了一个空指针（`nullptr`），不再拥有原来的整数对象的所有权。\n\n34. make_unique是什么，它与 new 有什么区别？\n\n    `std::make_unique`是C++14中引入的一个函数模板，用于创建`std::unique_ptr`对象，并动态分配一个对象。它是在C++11中引入的`std::make_shared`函数的`unique_ptr`版本。\n\n    `std::make_unique`的语法如下：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 39",
            "code": "    template< class T, class... Args >\n    std::unique_ptr<T> make_unique( Args&&... args );"
          }
        ]
      },
      {
        "title": "与直接使用`new`来创建对象相比，`std::make_unique`有以下优势：",
        "transcript": "与直接使用`new`来创建对象相比，`std::make_unique`有以下优势：\n\n    1. 更安全：`std::make_unique`创建的对象是通过`std::unique_ptr`管理的，这样可以确保在函数执行过程中出现异常时，不会发生内存泄漏，因为`std::unique_ptr`会在对象不再需要时自动释放内存。\n\n    2. 更简洁：`std::make_unique`减少了手动书写`delete`的需求，代码更简洁。\n\n    3. 更高效：使用`std::make_unique`可以减少内存分配的次数，从而提高性能。因为`std::make_unique`是通过单次内存分配实现的。\n\n    然而，需要注意的是，C++11标准库并没有提供`std::make_unique`，所以在C++11中无法直接使用该函数模板。但是可以自行实现一个类似的`make_unique`函数，例如：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 40",
            "code": "    #include <memory>\n    \n    template <class T, class... Args>\n    std::unique_ptr<T> make_unique(Args&&... args) {\n        return std::unique_ptr<T>(new T(std::forward<Args>(args)...));\n    }"
          }
        ]
      },
      {
        "title": "使用自定义的`make_unique`函数模板可以在C++11中模拟C++14的`std::make_unique`的功能。",
        "transcript": "使用自定义的`make_unique`函数模板可以在C++11中模拟C++14的`std::make_unique`的功能。\n\n    总结：\n    `std::make_unique`是C++14中引入的函数模板，用于创建`std::unique_ptr`对象并动态分配一个对象。它比直接使用`new`更安全、简洁和高效。如果你的项目支持C++14，优先使用`std::make_unique`，如果只能使用C++11，则可以自行实现类似的`make_unique`函数。\n\n35. unique_ptr怎么防止拷贝？\n\n    `std::unique_ptr`的设计目的之一就是防止拷贝，它采用了禁止拷贝语义的方式来实现独占所有权。\n\n    在C++中，`std::unique_ptr`采用了删除拷贝构造函数和拷贝赋值运算符的方式来防止拷贝。这意味着不能直接复制一个`std::unique_ptr`对象，只能通过移动语义来转移所有权。\n\n    以下是`std::unique_ptr`防止拷贝的原因：\n\n    1. 删除拷贝构造函数：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 41",
            "code": "    unique_ptr(const unique_ptr&) = delete;"
          }
        ]
      },
      {
        "title": "2. 删除拷贝赋值运算符：",
        "transcript": "2. 删除拷贝赋值运算符：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 42",
            "code": "    unique_ptr& operator=(const unique_ptr&) = delete;"
          }
        ]
      },
      {
        "title": "因此，以下操作是不允许的：",
        "transcript": "因此，以下操作是不允许的：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 43",
            "code": "    std::unique_ptr<int> ptr1 = std::make_unique<int>(10);\n    std::unique_ptr<int> ptr2 = ptr1; // 编译错误，禁止拷贝构造\n    std::unique_ptr<int> ptr3;\n    ptr3 = ptr1; // 编译错误，禁止拷贝赋值"
          }
        ]
      },
      {
        "title": "要转移`std::unique_ptr`的所有权，可以使用`std::move`来进行移动语义的操作：",
        "transcript": "要转移`std::unique_ptr`的所有权，可以使用`std::move`来进行移动语义的操作：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 44",
            "code": "    std::unique_ptr<int> ptr1 = std::make_unique<int>(10);\n    std::unique_ptr<int> ptr2 = std::move(ptr1); // 合法，ptr1 失去所有权，ptr2 获得所有权"
          }
        ]
      },
      {
        "title": "使用移动语义，我们可以在需要转移所有权时，将对象的所有权从一个`std::unique_ptr`转移到另一个`std::unique_ptr`，而不是复制它。这样，`std::un",
        "transcript": "使用移动语义，我们可以在需要转移所有权时，将对象的所有权从一个`std::unique_ptr`转移到另一个`std::unique_ptr`，而不是复制它。这样，`std::unique_ptr`确保了动态分配的对象只能由一个`std::unique_ptr`拥有，从而避免了多个指针同时管理同一个资源的情况。\n\n36. 归并排序的思想、时间复杂度、空间复杂度\n\n    归并排序（Merge Sort）是一种分治算法，它的基本思想是将待排序的序列划分为较小的子序列，然后逐步将这些子序列合并为较大的有序序列，直到整个序列有序为止。归并排序的主要步骤包括分解、排序和合并。\n\n    归并排序的思想如下：\n\n    1. 分解：将待排序序列分解为两个子序列，分别对这两个子序列进行排序。\n\n    2. 排序：递归地对每个子序列进行排序，直到子序列的长度为1（长度为1的序列已经是有序的）。\n\n    3. 合并：将排序好的子序列合并为一个有序序列。\n\n    合并操作是归并排序的核心，它需要借助额外的临时数组来存储合并结果。具体合并过程如下：\n\n    - 首先将两个有序的子序列分别比较，将较小的元素放入临时数组中。\n    - 当其中一个子序列的元素全部放入临时数组后，将另一个子序列的剩余元素依次放入临时数组。\n    - 最后，将临时数组中的有序序列复制回原序列中。\n\n    归并排序的时间复杂度为O(nlogn)，其中n是待排序序列的长度。这是因为归并排序是通过不断地将序列二分并进行合并的，需要logn轮的递归操作。在每轮递归操作中，需要线性时间（O(n)）来合并两个有序子序列。因此，总的时间复杂度是O(nlogn)。\n\n    归并排序的空间复杂度为O(n)，这是因为归并排序需要一个与待排序序列相同大小的临时数组来进行合并操作。在合并过程中，临时数组的空间需求随着递归的深入而增加，最多需要存储n个元素，因此空间复杂度为O(n)。\n\n    归并排序是一种稳定的排序算法，适用于各种数据规模，具有较好的稳定性和预测性能。然而，归并排序需要额外的空间来存储临时数组，可能会在处理大规模数据时带来一定的空间开销。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 45",
            "code": "    \n    #include <iostream>\n    #include <vector>\n    \n    // 合并两个有序子数组为一个有序数组\n    void merge(std::vector<int>& arr, int left, int mid, int right) {\n        int n1 = mid - left + 1;\n        int n2 = right - mid;\n    \t\t// 创建临时数组来存储左右子数组\n    \t\tstd::vector<int> leftArr(n1);\n    \t\tstd::vector<int> rightArr(n2);\n    \n    \t\t// 将左右子数组拷贝到临时数组中\n    \t\tfor (int i = 0; i < n1; ++i) {\n        \tleftArr[i] = arr[left + i];\n    \t\t}\n    \t\tfor (int j = 0; j < n2; ++j) {\n        \trightArr[j] = arr[mid + 1 + j];\n    \t\t}\n    \n    \t\t// 合并两个有序子数组到原始数组中\n    \t\tint i = 0, j = 0, k = left;\n    \t\twhile (i < n1 && j < n2) {\n        \tif (leftArr[i] <= rightArr[j]) {\n            arr[k] = leftArr[i];\n            ++i;\n        \t} else {\n            arr[k] = rightArr[j];\n            ++j;\n        \t}\n        \t\t++k;\n    \t\t}\n    \n    \t\t// 将左右子数组中剩余的元素拷贝到原始数组中\n    \t\twhile (i < n1) {\n        \tarr[k] = leftArr[i];\n        \t++i;\n        \t++k;\n    \t\t}\n    \t\twhile (j < n2) {\n        \tarr[k] = rightArr[j];\n        \t++j;\n        \t++k;\n    \t\t}\n    \t}\n    \n    // 归并排序\n    void mergeSort(std::vector<int>& arr, int left, int right) {\n        if (left >= right) {\n            return;\n        }\n        int mid = left + (right - left) / 2;\n    \t\t// 递归排序左右子数组\n    \t\tmergeSort(arr, left, mid);\n    \t\tmergeSort(arr, mid + 1, right);\n    \t\t// 合并两个有序子数组\n    \t\tmerge(arr, left, mid, right);\n    \t}\n    \n    int main() {\n        std::vector<int> arr = {38, 27, 43, 3, 9, 82, 10};\n        int n = arr.size();\n        std::cout << \"Original array: \";\n    \t\tfor (int num : arr) {\n        \tstd::cout << num << \" \";\n    \t\t}\n    \t\tstd::cout << std::endl;\n    \n    \t\tmergeSort(arr, 0, n - 1);\n    \n    \t\tstd::cout << \"Sorted array: \";\n    \t\tfor (int num : arr) {\n        \tstd::cout << num << \" \";\n    \t\t}\n    \t\tstd::cout << std::endl;\n    \n    \t\treturn 0;\n    }"
          }
        ]
      },
      {
        "title": "37. 除了虚函数，还能怎么实现多态（重载，继续追问了一下）",
        "transcript": "37. 除了虚函数，还能怎么实现多态（重载，继续追问了一下）\n\n    除了虚函数实现多态外，C++还有另外两种实现多态的方式：函数指针和模板。\n\n    1. 函数指针：\n    可以通过函数指针来实现多态。通过将基类的函数指针指向派生类的成员函数，就可以在运行时动态地调用不同的函数实现。虽然函数指针可以实现多态，但使用起来较为繁琐，并且容易出现错误。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 46",
            "code": "    #include <iostream>\n    \n    class Base {\n    public:\n        virtual void show() {\n            std::cout << \"Base class\" << std::endl;\n        }\n    };\n    \n    class Derived : public Base {\n    public:\n        void show() override {\n            std::cout << \"Derived class\" << std::endl;\n        }\n    };\n    \n    int main() {\n        Base baseObj;\n        Derived derivedObj;\n    \n        // 定义函数指针并指向不同的对象\n        void (Base::*funcPtr)() = &Base::show;\n        (baseObj.*funcPtr)(); // Base class\n    \n        funcPtr = &Derived::show;\n        (derivedObj.*funcPtr)(); // Derived class\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "2. 模板：",
        "transcript": "2. 模板：\n    使用C++的模板特性，可以实现编译时的多态。通过模板的参数化，可以在编译阶段生成不同类型的代码，从而实现多态。模板的多态在编译时展开，不需要虚函数表，因此执行效率相对较高。但模板的代码会在编译时生成多个不同的类型，可能会增加编译时间和代码大小。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 47",
            "code": "    #include <iostream>\n    \n    template<typename T>\n    class PolymorphicClass {\n    public:\n        void show() {\n            static_cast<T*>(this)->show();\n        }\n    };\n    \n    class Base : public PolymorphicClass<Base> {\n    public:\n        void show() {\n            std::cout << \"Base class\" << std::endl;\n        }\n    };\n    \n    class Derived : public PolymorphicClass<Derived> {\n    public:\n        void show() {\n            std::cout << \"Derived class\" << std::endl;\n        }\n    };\n    \n    int main() {\n        Base baseObj;\n        Derived derivedObj;\n    \n        baseObj.show(); // Base class\n        derivedObj.show(); // Derived class\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "虽然函数指针和模板都可以实现多态，但虚函数是C++中最常用的多态实现方式，因为它提供了更灵活和易于理解的方式来实现运行时的多态。",
        "transcript": "虽然函数指针和模板都可以实现多态，但虚函数是C++中最常用的多态实现方式，因为它提供了更灵活和易于理解的方式来实现运行时的多态。\n\n38. new和malloc区别\n\n    `new`和`malloc`都是用于动态分配内存的C++和C函数，但它们有一些重要的区别：\n\n    1. 类型安全性：\n       - `new`是C++的运算符，具有类型安全性。它会在分配内存时考虑对象的类型，并调用相应类型的构造函数进行对象的初始化。\n       - `malloc`是C语言的函数，没有类型安全性。它只关心分配的字节数，不会初始化对象。\n\n    2. 返回类型：\n       - `new`返回指向分配的对象的指针，可以直接使用。\n       - `malloc`返回`void*`类型的指针，需要进行类型转换后才能使用。\n\n    3. 内存大小：\n       - `new`用于分配特定类型的内存，并根据类型大小进行内存分配。\n       - `malloc`用于分配指定字节数的内存，可以在其中存储任意类型的数据。\n\n    4. 构造和析构函数：\n       - `new`会调用对象的构造函数来初始化分配的内存，同时在对象被销毁时会调用析构函数。\n       - `malloc`不会调用构造和析构函数，需要手动调用构造和析构函数。\n\n    5. 对象数组：\n       - `new`可以用于分配对象数组，并自动调用对象的构造函数初始化数组元素。\n       - `malloc`可以用于分配字节数组，但不会调用对象的构造函数。\n\n    综上所述，对于C++代码，应该优先使用`new`来分配内存，以保证类型安全和对象的正确初始化。在C代码或C++代码中，如果需要分配内存块而不关心类型和构造函数初始化，可以使用`malloc`。但在C++中，最好使用`new`和`delete`来进行动态内存分配和释放。另外，在C++11中，还可以使用`std::malloc`和`std::free`来使用C的`malloc`和`free`函数，但在大部分情况下，仍然建议使用`new`和`delete`。\n\n39. 堆和开放存储区的二者区别\n\n    事实上，“开放存储区（Free Store）”在C++中并没有特定的含义，而是在一些C++教材或资料中用来替代“堆（Heap）”的说法。所以实际上，\"堆\"和\"开放存储区\"是同一个概念，都是计算机内存中用于动态分配内存的一部分。\n\n    因此，\"堆\"和\"开放存储区\"没有实质上的区别，它们指的都是计算机内存中用于动态分配的一块区域，通常由程序员手动控制内存的分配和释放。在C++中，可以通过`new`和`delete`运算符来进行堆内存的动态分配和释放。\n\n    因为C++标准并没有正式定义\"堆\"或\"开放存储区\"这样的术语，所以在C++开发中通常使用\"堆\"这个术语，来表示动态分配内存的一部分。在C++中，堆的使用需要特别小心，因为它容易引发内存泄漏和悬挂指针等问题，所以建议在使用堆内存时，尽量使用智能指针（如`std::unique_ptr`、`std::shared_ptr`等）来管理，以避免手动管理内存带来的问题。\n\n    在 C++ 中，\"开放存储区（Free Store）\"并没有特定的含义或是与\"堆（Heap）\"有区别的定义。实际上，在 C++ 标准中并没有明确定义或引入\"开放存储区\"这个术语。通常情况下，人们在 C++ 中所说的\"堆（Heap）\"，就是用于动态分配内存的一块区域，而没有专门提及\"开放存储区\"这个名称。\n\n    可能有一些教材或资料在介绍内存管理时，使用\"开放存储区\"来描述动态内存分配，这实际上是在为\"堆\"这个概念寻找一个更易于理解或是更友好的称呼。然而，这并不是 C++ 标准中的正式术语，而在 C++ 社区中，通常更倾向于使用\"堆\"来表达动态内存分配的含义。\n\n    所以，总结来说，\"开放存储区\"并没有特定的定义或区别于\"堆\"，在 C++ 中我们通常使用\"堆\"来描述动态分配内存的区域。当你听到或看到\"开放存储区\"这个术语时，可以理解它指的就是\"堆\"的概念。\n\n40. map底层实现是什么，对于自定义类为 key 的时候，需要注意什么（应该是重载比较运算符，当时没想到）\n\n    在 C++ 的标准库中，`std::map` 是使用红黑树（Red-Black Tree）来实现的。红黑树是一种自平衡二叉搜索树，能够保持插入、查找和删除操作的对数时间复杂度，因此在`std::map`中可以高效地进行查找和插入操作。\n\n    当使用自定义类作为`std::map`的键时，确实需要注意重载比较运算符，否则会导致默认的比较操作无法使用，从而不能正常构建红黑树。\n\n    在 C++ 中，`std::map`默认使用`std::less`作为比较函数对象，即默认使用 `<` 运算符进行键的比较。如果自定义的类作为键，而该类没有重载 `<` 运算符，编译器将无法进行默认的键比较操作，从而导致编译错误。\n\n    为了让自定义类能够作为`std::map`的键，需要确保：\n    1. 自定义类重载了 `<` 运算符，或者\n    2. 在定义`std::map`时，提供一个自定义的比较函数对象作为第三个模板参数。这个比较函数对象必须能够进行正确的键比较操作。\n\n    下面是一个使用自定义类作为`std::map`键的示例：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 48",
            "code": "    #include <iostream>\n    #include <map>\n    \n    class MyClass {\n    public:\n        int value;\n    \n        MyClass(int val) : value(val) {}\n    \n        // 重载 < 运算符，用于比较 MyClss 对象\n        bool operator<(const MyClass& other) const {\n            return value < other.value;\n        }\n    };\n    \n    int main() {\n        std::map<MyClass, int> myMap;\n    \n        MyClass key1(10);\n        MyClass key2(5);\n    \n        myMap[key1] = 100;\n        myMap[key2] = 200;\n    \n        std::cout << \"Value for key1: \" << myMap[key1] << std::endl; // 100\n        std::cout << \"Value for key2: \" << myMap[key2] << std::endl; // 200\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在这个示例中，我们重载了 `<` 运算符，使得`MyClass`对象能够作为`std::map`的键。如果没有重载 `<` 运算符，编译器会报错。所以确保在自定义类作为`std::",
        "transcript": "在这个示例中，我们重载了 `<` 运算符，使得`MyClass`对象能够作为`std::map`的键。如果没有重载 `<` 运算符，编译器会报错。所以确保在自定义类作为`std::map`键时，要提供正确的比较运算符或自定义比较函数对象。\n\n41. map和unorder map的区别是什么\n\n    `std::map`和`std::unordered_map`是C++标准库中的两种关联容器，它们都用于存储键-值对。它们之间的主要区别在于底层的数据结构和性能特点。\n\n    1. 底层数据结构：\n       - `std::map`：使用红黑树（Red-Black Tree）实现，是一种自平衡二叉搜索树。红黑树保持键值对有序，因此在遍历时会按键的顺序输出。\n       - `std::unordered_map`：使用哈希表（Hash Table）实现，是一种散列数据结构。哈希表不保持键值对有序，键通过哈希函数映射到桶中，因此遍历时键的顺序不是有序的。\n\n    2. 查找操作时间复杂度：\n       - `std::map`：红黑树具有对数时间复杂度O(log n)的查找性能。\n       - `std::unordered_map`：哈希表具有常数时间复杂度O(1)的平均查找性能，但在最坏情况下可能会退化为O(n)。\n\n    3. 内存占用：\n       - `std::map`：红黑树需要额外的内存来维护树结构，因此相比哈希表可能占用更多内存。\n       - `std::unordered_map`：哈希表的内存占用通常较低，但由于需要解决哈希冲突，可能会有一定的额外开销。\n\n    4. 迭代器稳定性：\n       - `std::map`：红黑树是一种自平衡二叉搜索树，对键值对的插入和删除操作不会破坏树的有序性，因此迭代器的稳定性比较好。\n       - `std::unordered_map`：哈希表在插入和删除操作时可能会导致哈希桶的重新分配和元素的重新哈希，这可能导致迭代器失效。\n\n    根据上述特点，可以选择适合自己需求的关联容器。如果对容器内的键值对有序性要求较高，可以选择`std::map`；如果对查找性能要求较高，而对有序性没有特别要求，可以选择`std::unordered_map`。\n\n42. map查找时间复杂度，哈希碰撞、解决方法（说了一个链式的，问我链表查找时间复杂度，On岂不是影响性能，怎么优化）\n\n    在`std::map`中，使用红黑树实现，其查找时间复杂度为O(log n)，其中n为`std::map`中键值对的个数。这是因为红黑树是一种自平衡二叉搜索树，能够保持树的平衡性，从而保证在最坏情况下查找的时间复杂度为O(log n)。\n\n    哈希表（`std::unordered_map`的底层数据结构）的查找时间复杂度是O(1)的平均情况下，即常数时间复杂度。这是因为哈希表利用哈希函数将键映射到桶中，大多数情况下哈希函数可以保证将键均匀地分布在不同的桶中，从而能够以常数时间找到对应的键值对。然而，哈希表在最坏情况下可能会发生哈希碰撞（Hash Collision），导致查找时间复杂度退化为O(n)。哈希碰撞指的是两个不同的键经过哈希函数后得到相同的哈希值，它们会被映射到同一个桶中，从而产生冲突。\n\n    解决哈希碰撞的常见方法有两种：\n\n    1. 链式解决法（Chaining）：在每个哈希桶中使用链表来存储冲突的键值对。当发生哈希碰撞时，新的键值对会被添加到链表中，通过遍历链表来查找对应的键值对。链式解决法能够有效解决哈希碰撞，但在链表较长时可能会影响性能。\n\n    2. 开放地址法（Open Addressing）：在哈希表的其他空桶中寻找可用的位置来存储冲突的键值对，而不是使用链表。开放地址法分为多种探测方式，如线性探测、二次探测和双重哈希探测等。开放地址法的优点是能够避免链表的使用，但可能需要更多的哈希桶空间。\n\n    对于哈希表中的查找时间复杂度，平均情况下是O(1)，但最坏情况下可能退化为O(n)，这可能会影响性能。为了优化哈希表的性能，可以考虑以下措施：\n\n    - 选择适当的哈希函数：好的哈希函数能够将键均匀地映射到不同的桶中，减少哈希碰撞的可能性。\n\n    - 调整哈希表大小：哈希表的性能与其大小有关。当哈希表的负载因子过大时，容易发生哈希碰撞，可以通过扩大哈希表的大小来降低负载因子，从而减少哈希碰撞。\n\n    - 使用开放地址法：在对哈希表进行操作时，可以选择开放地址法来避免使用链表，从而提高性能。\n\n    综上所述，哈希表的性能优化需要考虑哈希函数的设计、哈希表大小的调整以及使用开放地址法等因素。不同的哈希表实现和具体使用场景可能需要不同的优化策略。\n\n43. 给一个长度为n的int数组，里面的值范围为1-n，每个值出现1或2次，让我把所有出现两次的数字返回。他问我时间空间复杂度。他表示想要原地实现，不要额外开辟空间。\n\n    你可以使用数组的原地操作实现找出所有出现两次的数字。由于每个值出现1或2次，可以考虑使用异或运算来找出出现两次的数字。异或运算有以下性质：\n\n    - 对于任意整数x，x与自身的异或结果为0，即 x ^ x = 0。\n    - 对于任意整数x，x与0的异或结果为x，即 x ^ 0 = x。\n\n    根据这个性质，我们可以通过遍历数组，对数组中的所有元素进行异或运算，最终得到出现两次的数字的异或结果。然后再遍历数组，根据异或结果的二进制表示中的某一位来区分出现一次和出现两次的数字。\n\n    具体实现如下：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 49",
            "code": "    #include <iostream>\n    #include <vector>\n    \n    std::vector<int> findDuplicates(std::vector<int>& nums) {\n        std::vector<int> result;\n        int n = nums.size();\n    \n        // 找出所有出现两次的数字的异或结果\n        int xorResult = 0;\n        for (int num : nums) {\n            xorResult ^= num;\n        }\n    \n        // 找出异或结果中最低位的1\n        int lowestBit = xorResult & -xorResult;\n    \n        // 将数组分成两部分，分别进行异或运算\n        int part1 = 0, part2 = 0;\n        for (int num : nums) {\n            if (num & lowestBit) {\n                part1 ^= num;\n            } else {\n                part2 ^= num;\n            }\n        }\n    \n        // part1 和 part2 就是出现两次的数字\n        result.push_back(part1);\n        result.push_back(part2);\n        return result;\n    }\n    \n    int main() {\n        std::vector<int> nums = {4, 3, 2, 7, 8, 2, 1, 1};\n        std::vector<int> result = findDuplicates(nums);\n    \n        std::cout << \"出现两次的数字：\";\n        for (int num : result) {\n            std::cout << num << \" \";\n        }\n        std::cout << std::endl;\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "时间复杂度为O(n)，空间复杂度为O(1)，因为只用了常数个变量进行计算，没有额外开辟空间。这样可以满足题目的要求，实现了原地操作找出所有出现两次的数字。",
        "transcript": "时间复杂度为O(n)，空间复杂度为O(1)，因为只用了常数个变量进行计算，没有额外开辟空间。这样可以满足题目的要求，实现了原地操作找出所有出现两次的数字。\n\n44. 二分法原理？只适用于有序数组吗？\n\n    二分法（Binary Search）是一种在有序数组中查找特定元素的搜索算法。它的原理是将查找范围逐步缩小至目标元素所在的区间，从而快速定位目标元素的位置。\n\n    二分法的原理如下：\n    1. 确定查找范围的左边界`left`和右边界`right`，通常初始时`left = 0`，`right = 数组长度 - 1`。\n    2. 计算中间位置`mid = (left + right) / 2`，取中间元素`nums[mid]`。\n    3. 将目标元素与`nums[mid]`进行比较：\n       - 如果目标元素等于`nums[mid]`，则找到目标元素，结束搜索。\n       - 如果目标元素小于`nums[mid]`，则说明目标元素应该在左半部分，更新`right = mid - 1`，继续在左半部分查找。\n       - 如果目标元素大于`nums[mid]`，则说明目标元素应该在右半部分，更新`left = mid + 1`，继续在右半部分查找。\n    4. 重复步骤2和步骤3，直到找到目标元素或`left > right`，表示查找失败。\n\n    二分法的时间复杂度为O(log n)，其中n为数组的长度。由于每次搜索后查找范围都会减半，因此二分法的时间复杂度是对数级别的。\n\n    二分法适用于有序数组，因为其核心思想是利用数组的有序性，通过对比目标元素与中间元素的大小，不断缩小查找范围。如果数组无序，二分法就无法确定目标元素所在的区间，因此无法正确地进行查找。在无序数组中查找特定元素通常需要使用其他搜索算法，如线性搜索或哈希表等。\n\n    二分法不仅仅适用于有序数组，只要数据具有单调性，即在某种条件下有一定的大小顺序，就可以使用二分法进行查找。\n\n    具体来说，二分法适用于满足以下条件的情况：\n\n    1. 数据有序：在有序数组中查找目标元素时，可以利用二分法快速定位目标元素的位置。\n\n    2. 单调性：数据具有单调性，即满足递增或递减的条件。在非有序数组中，如果数据具有单调性，也可以使用二分法进行查找。\n\n    例如，在部分有序数组中查找目标元素，可以使用变体的二分法来进行搜索。在这种情况下，二分法每次选择中间元素，然后判断目标元素可能在左半部分或右半部分，从而缩小查找范围。\n\n    总的来说，二分法在满足数据有序性或单调性的情况下是可用的。如果数据无序且没有单调性，那么二分法就无法正确地进行查找。在这种情况下，通常需要使用其他搜索算法。\n\n45. 如何在一个数组中找到多个元素对应位置？（哈希表）\n\n    在一个数组中找到多个元素对应的位置可以通过哈希表来实现。哈希表是一种常用的数据结构，能够以常数时间复杂度O(1)进行查找、插入和删除操作，从而实现快速找到多个元素对应的位置。\n\n    具体步骤如下：\n\n    1. 创建一个哈希表，用于存储数组中元素及其对应的位置。\n    2. 遍历数组，将数组中的元素作为键，位置作为值，存储到哈希表中。\n    3. 遍历需要查找的多个元素，根据其值在哈希表中查找对应的位置。\n\n    以下是使用C++的`std::unordered_map`实现找到多个元素对应位置的示例代码：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 50",
            "code": "    #include <iostream>\n    #include <vector>\n    #include <unordered_map>\n    \n    std::vector<int> findPositions(std::vector<int>& nums, std::vector<int>& targets) {\n        std::unordered_map<int, int> hashTable;\n        std::vector<int> positions;\n    \n        // 将数组中的元素和对应的位置存储到哈希表中\n        for (int i = 0; i < nums.size(); ++i) {\n            hashTable[nums[i]] = i;\n        }\n    \n        // 查找多个元素的位置\n        for (int target : targets) {\n            if (hashTable.count(target) > 0) {\n                positions.push_back(hashTable[target]);\n            } else {\n                positions.push_back(-1); // 未找到该元素时，位置置为-1\n            }\n        }\n    \n        return positions;\n    }\n    \n    int main() {\n        std::vector<int> nums = {4, 3, 2, 7, 8, 2, 1, 1};\n        std::vector<int> targets = {2, 1, 5, 9};\n    \n        std::vector<int> positions = findPositions(nums, targets);\n    \n        std::cout << \"目标元素的位置：\";\n        for (int pos : positions) {\n            std::cout << pos << \" \";\n        }\n        std::cout << std::endl;\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "以上示例代码使用了`std::unordered_map`来实现哈希表，通过查找哈希表中的键来找到目标元素的位置。时间复杂度为O(n)（其中n为数组长度），因为需要遍历整个数组并构",
        "transcript": "以上示例代码使用了`std::unordered_map`来实现哈希表，通过查找哈希表中的键来找到目标元素的位置。时间复杂度为O(n)（其中n为数组长度），因为需要遍历整个数组并构建哈希表。使用哈希表能够在常数时间内找到多个元素的位置，因此是一种高效的方法。\n\n46. C++有哪些内存区？\n\n    在C++程序中，内存可以分为以下几个区域：\n\n    1. 栈（Stack）：栈是一种自动分配和释放内存的区域，用于存储局部变量和函数调用的上下文信息。栈中的内存是按照后进先出的顺序分配和释放的，函数调用时会在栈上创建函数的局部变量和参数，函数返回时会释放这些局部变量的内存。\n\n    2. 堆（Heap）：堆是一种动态分配和释放内存的区域，用于存储动态分配的对象和数据结构。在堆中分配的内存需要手动管理，即需要手动调用`new`来分配内存，然后在不需要时手动调用`delete`来释放内存。如果没有正确释放堆中分配的内存，会导致内存泄漏。\n\n    3. 全局/静态存储区（Global/Static Storage）：全局存储区用于存储全局变量和静态变量，这些变量在程序整个运行期间都存在，直到程序结束时才释放。全局变量在程序开始时初始化，静态变量的生命周期和作用域与全局变量类似，但作用域限制在定义的源文件中。\n\n    4. 常量存储区（Constant Storage）：常量存储区用于存储常量数据，例如字符串常量和全局`const`变量。这些常量数据在程序运行期间不可修改。\n\n    5. 程序代码区（Code/Text Segment）：程序代码区用于存储程序的指令代码，这些指令在程序运行时被执行。这个区域通常是只读的，不允许修改程序代码。\n\n    这些内存区在C++程序中有不同的用途和生命周期，了解它们可以帮助程序员更好地管理内存和优化程序性能。\n\n47. 3 个 char 4个 int 的结构体最大多少？\n\n    在 C++ 中，结构体的大小由其成员变量的大小决定，并且可能受到内存对齐（Memory Alignment）的影响。内存对齐是为了提高访问效率和优化内存访问的操作，编译器会将结构体成员按照一定的规则进行对齐，使得结构体的大小能够被最大对齐数整除。\n\n    在大多数系统中，int类型通常是4个字节（32位），而char类型通常是1个字节。因此，一个包含3个char和4个int的结构体的最大大小为：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 51",
            "code": "    3 * sizeof(char) + 4 * sizeof(int) = 3 + 4 * 4 = 19 字节"
          }
        ]
      },
      {
        "title": "需要注意的是，实际的结构体大小可能会大于19字节，因为编译器可能会对结构体进行内存对齐。内存对齐的规则可能因编译器、操作系统和处理器架构而异，通常情况下结构体的大小会是最大对齐数的",
        "transcript": "需要注意的是，实际的结构体大小可能会大于19字节，因为编译器可能会对结构体进行内存对齐。内存对齐的规则可能因编译器、操作系统和处理器架构而异，通常情况下结构体的大小会是最大对齐数的整数倍。\n\n    如果需要精确地确定结构体的大小，可以使用C++中的 `sizeof` 运算符来获取结构体的字节大小，例如：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 52",
            "code": "    #include <iostream>\n    \n    struct MyStruct {\n        char c1;\n        char c2;\n        char c3;\n        int i1;\n        int i2;\n        int i3;\n        int i4;\n    };\n    \n    int main() {\n        std::cout << \"Size of MyStruct: \" << sizeof(MyStruct) << \" bytes\" << std::endl;\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "上述代码将输出结构体`MyStruct`的大小，可以根据实际编译器和系统查看结果。",
        "transcript": "上述代码将输出结构体`MyStruct`的大小，可以根据实际编译器和系统查看结果。\n\n48. 自定义point类怎么放进unordered_map？\n\n    要将自定义的`Point`类放入`std::unordered_map`中，需要满足两个条件：\n\n    1. 定义哈希函数：由于`std::unordered_map`是基于哈希表实现的，必须提供一个哈希函数来将`Point`类的对象映射到哈希桶中。哈希函数应该返回一个整数，将`Point`对象映射到唯一的哈希值。\n\n    2. 定义相等比较函数：`std::unordered_map`使用相等比较函数来判断两个键是否相等。因此，必须在`Point`类中定义相等比较函数，以便在哈希表中查找和比较键。\n\n    下面是一个示例的`Point`类，并将其放入`std::unordered_map`中的代码：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 53",
            "code": "    #include <iostream>\n    #include <unordered_map>\n    \n    class Point {\n    public:\n        int x;\n        int y;\n    \n        Point(int _x, int _y) : x(_x), y(_y) {}\n    \n        // 定义哈希函数\n        size_t hash() const {\n            return std::hash<int>()(x) ^ std::hash<int>()(y);\n        }\n    \n        // 定义相等比较函数\n        bool operator==(const Point& other) const {\n            return x == other.x && y == other.y;\n        }\n    };\n    \n    namespace std {\n        // 自定义哈希函数\n        template <>\n        struct hash<Point> {\n            size_t operator()(const Point& p) const {\n                return p.hash();\n            }\n        };\n    }\n    \n    int main() {\n        std::unordered_map<Point, int> pointMap;\n    \n        Point p1(1, 2);\n        Point p2(3, 4);\n    \n        pointMap[p1] = 100;\n        pointMap[p2] = 200;\n    \n        std::cout << \"Value at p1: \" << pointMap[p1] << std::endl;\n        std::cout << \"Value at p2: \" << pointMap[p2] << std::endl;\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在上述代码中，我们定义了`Point`类，实现了哈希函数和相等比较函数，并将其用作`std::unordered_map`的键类型。通过自定义哈希函数和相等比较函数，可以确保`Po",
        "transcript": "在上述代码中，我们定义了`Point`类，实现了哈希函数和相等比较函数，并将其用作`std::unordered_map`的键类型。通过自定义哈希函数和相等比较函数，可以确保`Point`对象能够正确地放入`std::unordered_map`中，并能够正确地进行查找和比较操作。\n\n49. 死锁如何避免\n\n    死锁是多线程编程中常见的问题，当多个线程相互等待对方释放资源时，可能会导致程序陷入无法继续执行的状态。为了避免死锁，在C++中可以采取以下几个方法：\n\n    1. 避免循环锁：确保线程获取锁的顺序是一致的，不要形成循环锁的情况。例如，如果线程A先获取锁1，再获取锁2，那么其他线程也应该按照相同的顺序来获取锁，而不是先获取锁2再获取锁1。\n\n    2. 使用适当的锁粒度：锁的粒度应该尽可能小，即只在必要的代码段上加锁，而不是将整个函数或整个对象都加锁。这样可以减少锁竞争的可能性，降低发生死锁的概率。\n\n    3. 使用智能指针代替裸指针：在多线程环境中，使用智能指针来管理资源的生命周期，可以避免手动释放资源时发生死锁。\n\n    4. 避免长时间持有锁：在执行长时间的操作时，尽量减少持有锁的时间。可以在必要的地方将操作拆分成多个较小的操作，并在每个操作之间释放锁，从而降低死锁的风险。\n\n    5. 使用死锁检测工具：一些编译器和工具链提供死锁检测功能，可以用来检测程序中是否存在潜在的死锁问题。\n\n    6. 设计良好的并发策略：在设计并发程序时，要仔细考虑线程之间的交互和资源的共享，合理设计并发策略，避免出现死锁的情况。\n\n    避免死锁是多线程编程中的重要课题，需要仔细考虑程序的设计和并发策略，确保多个线程之间的资源访问是安全的，并避免出现互相等待的情况。\n\n50. 介绍快排思想，以及如何优化\n\n    快速排序（QuickSort）是一种高效的排序算法，它的思想是通过分治法将一个大的问题划分为小的子问题，然后逐步解决这些子问题，最终得到整个问题的解。\n\n    快速排序的基本思想如下：\n\n    1. 选择一个基准元素（pivot），通常是待排序数组中的一个元素。\n    2. 将数组中比基准元素小的元素放到基准元素的左边，比基准元素大的元素放到右边，形成两个子数组。\n    3. 对左右两个子数组递归地应用快速排序算法，直到子数组只包含一个元素或为空，此时数组已经有序。\n\n    快速排序的优化方法主要包括以下几个方面：\n\n    1. 三数取中法：在选择基准元素时，避免选择最左边或最右边的元素，而是通过取三个元素中的中间值作为基准元素，这样可以减少快排在某些情况下的最坏时间复杂度。\n\n    2. 随机化选择基准元素：在选择基准元素时，可以随机选择数组中的一个元素作为基准，从而降低因数组初始顺序导致的性能问题。\n\n    3. 插入排序优化：当数组的规模较小时，快速排序的性能可能不如插入排序。因此，可以在快速排序的递归过程中，当数组规模小于一定阈值时，采用插入排序来进一步优化性能。\n\n    4. 尾递归优化：在递归调用快速排序时，可以通过尾递归优化来避免栈溢出问题。尾递归优化可以将递归转换为迭代，避免不必要的栈空间消耗。\n\n    快速排序的平均时间复杂度为O(n log n)，最坏时间复杂度为O(n^2)（在某些特殊情况下可能出现，例如已排序数组），空间复杂度为O(log n)（递归调用的栈空间），是一种高效的排序算法。在实际应用中，快速排序通常是一种性能良好且被广泛使用的排序算法。\n\n51. 哈希以及如何解决哈希冲突，几种哈希冲突解决方法的适用场景\n\n    哈希（Hash）是一种将任意大小的数据映射为固定大小值的算法，用于快速查找和访问数据。哈希函数将输入数据（键）映射为哈希值（索引），然后将数据存储在对应的哈希表中。\n\n    哈希冲突指不同的键映射到了相同的哈希值，这可能导致数据存储冲突。解决哈希冲突的常见方法有以下几种：\n\n    1. 开放定址法（Open Addressing）：在发生哈希冲突时，通过探查（Probe）寻找下一个可用的位置存储数据。可以采用线性探查、二次探查、双散列等探查方法。适用于哈希表大小固定、空间使用紧凑的场景。\n\n    2. 链地址法（Chaining）：在哈希表的每个位置上使用链表来存储冲突的数据，即在相同哈希值位置上的数据形成一个链表。适用于哈希表大小不固定、空间使用灵活的场景。\n\n    3. 拉链法（Separate Chaining）：类似于链地址法，不同之处在于使用动态数组或其他数据结构来存储冲突的数据，而不是链表。适用于哈希表大小不固定、空间使用灵活的场景。\n\n    4. 建立公共溢出区：将所有冲突的数据放入一个公共的溢出区，需要较大的空间来存储溢出数据。适用于哈希表大小固定、空间使用紧凑的场景。\n\n    5. 建立二级哈希表：在发生哈希冲突时，再使用另一个哈希函数将冲突数据映射到不同的二级哈希表中。适用于哈希表大小固定、空间使用紧凑的场景。\n\n    不同的解决方法适用于不同的场景，选择合适的哈希冲突解决方法取决于哈希表的大小、数据的分布情况和对空间利用的要求。在实际应用中，通常根据数据量、查找效率和内存限制等因素来选择合适的哈希冲突解决方法。\n\n52. WebServer 项目以及主要改进点，线程池，epoll\n\n    WebServer是一个常见的网络服务器项目，主要用于处理客户端请求，提供Web服务。其主要功能包括监听端口、接收客户端请求、处理HTTP请求、解析HTTP报文、处理业务逻辑、返回响应等。\n\n    主要改进点可以包括以下方面：\n\n    1. 并发处理：引入线程池来管理并发连接，避免每个连接都创建一个线程，降低线程创建和销毁的开销，提高并发能力。\n\n    2. 使用epoll模型：使用epoll等高效的I/O多路复用机制，实现高性能的事件驱动网络编程，避免频繁的系统调用。\n\n    3. 支持HTTP长连接：通过设置HTTP响应头中的\"Connection: keep-alive\"字段，实现HTTP长连接，复用连接提高性能。\n\n    4. 支持静态资源缓存：缓存静态资源文件，减少文件读取的次数，提高响应速度。\n\n    5. 引入定时器：使用定时器来处理长时间未响应的连接，避免僵尸连接的产生。\n\n    6. 日志模块：添加日志模块，记录服务器运行状态和请求处理信息，便于排查问题。\n\n    7. 错误处理：增加对异常情况的处理，保证服务器稳定运行。\n\n    8. 安全性：加强安全措施，防止常见的网络攻击，如DDoS、SQL注入等。\n\n    9. 负载均衡：实现负载均衡策略，将请求分发到多个服务器上，提高系统的整体性能和可用性。\n\n    10. 支持HTTPS：引入SSL/TLS协议，实现HTTPS协议支持，保护数据传输的安全性。\n\n    以上改进点可以根据具体需求和项目规模进行选择和实现。WebServer项目是一个相对复杂的网络应用，需要综合考虑性能、稳定性、安全性等多方面因素，不断优化和改进才能满足不断增长的用户需求。\n\n53. epoll 底层结构 \n\n    在Linux中，`epoll`是一种高性能的I/O多路复用机制，用于实现高效的事件驱动编程。`epoll`的底层结构包括以下几个主要组成部分：\n\n    1. `epoll`实例（epoll instance）：`epoll`实例是`epoll`机制的核心数据结构，它代表了一个`epoll`对象，存储了所有`epoll`相关的信息和状态。\n\n    2. `eventpoll`结构体：`eventpoll`是一个用于管理`epoll`事件的结构体，它维护了所有被注册的事件列表，并提供对事件的添加、删除、修改等操作。\n\n    3. 红黑树（Red-Black Tree）：`epoll`使用红黑树来管理已注册的文件描述符（FD）和对应的事件，通过红黑树来快速定位文件描述符和事件。\n\n    4. 就绪事件链表：`epoll`维护一个就绪事件链表，用于存储当前已就绪的事件，即可读、可写或异常事件。\n\n    5. `epitem`结构体：`epitem`是用于管理每个文件描述符的结构体，它包含文件描述符的信息、对应的事件以及红黑树节点等。\n\n    6. `ep_poll_table`结构体：`ep_poll_table`是用于管理多个`epoll`实例的结构体，它提供了对多个`epoll`实例的管理和操作。\n\n    `epoll`底层的数据结构使用了红黑树和链表等数据结构来实现高效的事件管理和查找。它的设计使得能够在大量并发连接的情况下，高效地处理各种事件，实现了非常高的性能。在实际应用中，`epoll`被广泛用于网络编程，特别是在高并发的服务器应用中，它是一种非常高效的I/O多路复用机制。\n\n    `epoll`是Linux系统中的一种I/O多路复用机制，用于高效地处理大量并发连接的网络编程。它在Linux系统中提供了三个接口：`epoll_create`、`epoll_ctl`和`epoll_wait`，用于创建`epoll`实例、添加或删除事件，以及等待就绪事件。\n\n    在C++中，并没有直接对应的`epoll`库，因为`epoll`是一个Linux系统调用，而C++本身是一种通用的编程语言，不依赖于具体的操作系统。但是，C++中可以通过调用系统调用或使用相关的库来实现类似`epoll`的功能。\n\n    例如，可以在C++程序中使用`<sys/epoll.h>`头文件和相关的系统调用来调用`epoll`，实现高效的事件驱动网络编程。在其他操作系统上，可以使用不同的I/O多路复用机制，如Windows的`select`、`WSAPoll`或`IOCP`，以及macOS的`kqueue`，来实现类似的功能。\n\n    虽然C++本身并没有提供`epoll`接口，但通过调用系统调用或使用相关的库，可以在C++程序中实现类似`epoll`的功能，以满足高并发网络编程的需求。在不同的操作系统上，可能需要使用不同的I/O多路复用机制，但它们都能实现类似的功能，即高效地处理大量并发连接的网络请求。\n\n54. 宏定义和inline\n\n    宏定义（Macro Definition）和内联函数（Inline Function）是C++中用于代码替换和提高性能的两种机制，它们有以下不同点：\n\n    1. 宏定义：\n       - 宏定义是一种预处理指令，通过宏定义可以在代码中用一个标识符来代表一段代码片段，编译时会将标识符替换为相应的代码。\n       - 宏定义没有函数调用的开销，因为是简单的文本替换，但宏的替换可能导致代码膨胀，增加代码大小。\n       - 宏定义不进行类型检查，可能会导致错误，且不方便调试。\n\n    2. 内联函数：\n       - 内联函数是一种编译时的优化技术，用于减少函数调用的开销，将函数体直接嵌入到调用处。\n       - 内联函数通常通过在函数声明前加上`inline`关键字来指示编译器进行内联优化，但编译器最终是否内联函数取决于编译器的优化策略。\n       - 内联函数在代码中仅出现一次，避免了代码膨胀问题，因此通常比宏定义更安全和更易于调试。\n       - 内联函数的函数体不能过于复杂，否则可能导致代码膨胀，使得内联优化失效。\n\n    综合考虑，通常建议优先使用内联函数，因为它具有更好的类型检查和安全性，并且能够在一定程度上减少函数调用的开销。宏定义主要用于一些简单的代码替换，但在C++中，内联函数更常用于代码优化和性能提升。\n\n55. 编译,预编译 那讲讲分为几步 每个步骤的作用\n\n    在C++程序的编译过程中，可以分为以下几个主要步骤：\n\n    1. 预处理（Preprocessing）：\n       - 作用：预处理阶段主要处理以`#`开头的预处理指令，如`#include`、`#define`等，将它们展开和替换，生成一个被处理后的源代码文件（通常以`.i`或`.ii`为扩展名）。\n       - 过程：预处理器会根据预处理指令，将头文件内容包含到源文件中，替换宏定义，去除注释等。\n\n    2. 编译（Compilation）：\n       - 作用：编译阶段将预处理后的源代码文件翻译成汇编代码（Assembly Code）。\n       - 过程：编译器对源代码进行词法分析、语法分析和语义分析，生成对应的汇编代码。\n\n    3. 汇编（Assembly）：\n       - 作用：汇编阶段将汇编代码转换成机器代码（二进制代码）。\n       - 过程：汇编器将汇编代码转换成与特定计算机架构相关的机器代码。\n\n    4. 链接（Linking）：\n       - 作用：链接阶段将多个目标文件（包括自己编写的代码和使用的库文件）合并为一个可执行文件。\n       - 过程：链接器将所有目标文件中的符号（函数、变量等）解析为内存地址，处理函数调用和全局变量的访问等。\n\n    最终，通过预处理、编译、汇编和链接等步骤，将C++源代码转换为可执行文件，供计算机运行。每个步骤都有特定的作用，确保代码的正确性和性能，同时也提供了灵活性，允许在不同阶段进行优化和调试。\n\n56. linux 文件系统\n\n    Linux文件系统是指在Linux操作系统中用于组织和管理文件和目录的一套规则和结构。Linux支持多种文件系统类型，其中常见的有以下几种：\n\n    1. Ext4（Fourth Extended File System）：Ext4是Linux中最常用的文件系统类型，它是Ext文件系统家族的最新成员，支持大文件和大分区，具有较高的性能和可靠性。\n\n    2. Ext3（Third Extended File System）：Ext3是Ext4的前身，是Linux中另一种常见的文件系统类型，支持日志文件系统，提高了文件系统的恢复能力。\n\n    3. XFS：XFS是一种高性能的日志文件系统，适用于处理大型文件和大容量的数据，支持高并发读写操作。\n\n    4. Btrfs（B-tree File System）：Btrfs是一种先进的文件系统，支持快照、压缩、数据校验等特性，用于管理大容量的数据。\n\n    5. FAT（File Allocation Table）：FAT是一种简单的文件系统类型，通常用于兼容Windows系统。\n\n    6. NTFS（New Technology File System）：NTFS是Windows系统中常用的文件系统，Linux也支持对NTFS分区的读写。\n\n    7. NFS（Network File System）：NFS是一种网络文件系统协议，用于在网络上共享文件和目录，实现跨系统的文件共享。\n\n    8. ISO 9660：ISO 9660是光盘文件系统的标准，用于光盘的文件存储和交换。\n\n    Linux文件系统通过层次化的目录结构来组织文件和目录，根目录为`/`，其他目录和文件都挂载在根目录下。用户可以通过命令行或图形界面来操作文件和目录，如创建、删除、复制、移动等操作。文件系统的选择取决于具体应用场景和需求，不同的文件系统类型有不同的特性和适用范围。\n\n    Linux文件系统和C++之间是两个不同的概念，它们分别属于操作系统和编程语言的领域。\n\n    1. Linux文件系统：Linux文件系统是指在Linux操作系统中用于组织和管理文件和目录的一套规则和结构，包括Ext4、Ext3、XFS、Btrfs等文件系统类型。它是Linux操作系统的一部分，提供了对硬盘、分区、文件和目录的访问和管理。\n\n    2. C++编程语言：C++是一种通用的、面向对象的编程语言，具有高效、强大和可移植性的特性。C++可以在各种操作系统中运行，包括Linux、Windows、macOS等，而不局限于特定的文件系统。\n\n    虽然Linux操作系统中的文件系统和C++编程语言是两个不同的概念，但是在编程过程中，C++程序员可以使用C++标准库和相关的库函数来进行文件和目录的操作。C++标准库提供了一些与文件系统交互的类和函数，如`ifstream`和`ofstream`用于读写文件，`std::filesystem`用于处理文件和目录路径，以及`std::fstream`用于文件输入输出等。\n\n    通过C++编程语言，程序员可以在Linux操作系统中访问和操作文件系统，实现文件的读写、目录的创建和删除等操作。C++的可移植性使得在不同的操作系统上开发和运行程序变得更加方便。\n\n    在Linux文件系统中，软链接（Symbolic Link）和硬链接（Hard Link）是两种不同类型的链接方式，用于创建文件或目录的引用。\n\n    1. 软链接（Symbolic Link）：\n       - 软链接是一种特殊的文件，它包含指向另一个文件或目录的路径，类似于Windows系统中的快捷方式。\n       - 软链接本身是一个独立的文件，其大小很小，只保存了指向目标文件或目录的路径信息。\n       - 创建软链接使用`ln -s`命令，例如：`ln -s /path/to/target /path/to/link`。\n\n    2. 硬链接（Hard Link）：\n       - 硬链接是对同一个文件或目录的多个名称引用，它们在文件系统中指向同一个i-node（文件的元数据信息）。\n       - 硬链接创建的链接在文件系统中没有实际的区别，删除其中一个硬链接不会影响其他硬链接的可访问性。\n       - 硬链接不能链接目录，只能链接文件。创建硬链接使用`ln`命令，例如：`ln /path/to/target /path/to/link`。\n\n    主要区别：\n    - 软链接可以链接目录，而硬链接不能链接目录。\n    - 软链接是一个独立的文件，硬链接是同一个文件或目录的多个名称引用。\n    - 删除软链接不会影响目标文件，删除硬链接也不会影响目标文件，只有当最后一个硬链接被删除时，目标文件才会被真正删除。\n\n    使用链接可以方便地创建文件或目录的多个引用，节省存储空间，并使文件系统组织更加灵活。根据实际需求，可以选择使用软链接或硬链接。\n\n57. vector 扩容, 开放题: 1.5 和 2倍扩容什么区别\n\n    在C++中，`std::vector`是一种动态数组容器，它能够自动扩容以适应存储元素的需求。`std::vector`的扩容策略是在需要扩容时，将当前容器的大小扩大一定倍数，以容纳更多的元素。\n\n    对于`std::vector`的扩容倍数，通常有两种常见的策略：1.5倍扩容和2倍扩容。\n\n    1. 1.5倍扩容：\n       - 当`std::vector`需要扩容时，将当前容器的大小扩大1.5倍。例如，如果当前容器的大小是n，那么扩容后的容器大小是1.5 * n。\n       - 1.5倍扩容相对于2倍扩容来说，扩容的速度更慢，会减少一部分内存的浪费。但可能会导致频繁的扩容操作，因为当容器元素增加时，可能不断触发扩容操作。\n\n    2. 2倍扩容：\n       - 当`std::vector`需要扩容时，将当前容器的大小扩大2倍。例如，如果当前容器的大小是n，那么扩容后的容器大小是2 * n。\n       - 2倍扩容相对于1.5倍扩容来说，扩容的速度更快，会减少扩容操作的次数，但可能会造成更多的内存浪费。因为每次扩容都会分配较大的内存块。\n\n    选择使用1.5倍扩容还是2倍扩容取决于对内存和性能的需求权衡。如果内存利用率更为重要，可以选择1.5倍扩容；如果追求更高的性能，可以选择2倍扩容。在实际应用中，一般情况下，2倍扩容是更常见的选择，因为它在时间和空间上都有更好的性能表现。\n\n58. 怎么禁止动态分配内存 \n\n    在C++中，可以通过以下方法禁止动态分配内存：\n\n    1. 使用栈上的变量：在函数内部声明局部变量或使用对象的自动存储期，这样变量会在栈上自动分配和释放内存，不需要手动进行内存管理。\n\n    2. 使用容器类和智能指针：使用`std::vector`、`std::array`等容器类来管理动态数组，使用`std::unique_ptr`、`std::shared_ptr`等智能指针来管理动态对象，这样可以避免手动调用`new`和`delete`。\n\n    3. 避免使用`new`和`delete`：尽量避免直接使用`new`和`delete`来进行动态内存分配和释放。如果需要动态分配内存，优先使用智能指针来管理。\n\n    4. 使用栈上数组代替动态数组：如果需要动态数组，可以使用变长数组或者固定大小的数组来代替动态分配的数组。\n\n    5. 使用局部缓冲区：在需要临时存储大量数据时，可以使用局部缓冲区（例如栈上数组）来代替动态分配的内存。\n\n    6. 避免使用动态多态：在设计类时，尽量避免使用虚函数和动态多态，使用静态多态和模板等技术来代替，减少动态内存分配的可能性。\n\n    需要注意的是，禁止动态分配内存并不是绝对的，有些情况下动态分配内存是必要的，例如处理未知大小的数据或需要在程序运行时动态创建对象等情况。在这种情况下，可以使用智能指针等方式来管理动态分配的内存，确保内存的正确释放和避免内存泄漏。\n\n59. 怎么在栈上动态分配内存 (回答用 placement_new 不知道对不对 ) \n    C++中无法在栈上动态分配内存。栈是用于存储局部变量的区域，其大小在编译时就已经确定。动态内存分配是在堆上进行的，其大小可以在运行时动态地调整。\n\n    在C++中，可以使用`placement new`操作符来在栈上动态分配内存并构造对象。\n\n    `placement new`是C++标准库中的一个特性，它允许在指定的内存位置（通常是栈上）上构造对象，而不是在自由存储区（堆）上分配内存。`placement new`的语法如下：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 54",
            "code": "    void* operator new (std::size_t size, void* ptr);"
          }
        ]
      },
      {
        "title": "其中，`size`表示对象的大小，`ptr`表示指向内存位置的指针。调用`placement new`时，它会在指定的内存位置上构造一个对象，并返回指向该对象的指针。",
        "transcript": "其中，`size`表示对象的大小，`ptr`表示指向内存位置的指针。调用`placement new`时，它会在指定的内存位置上构造一个对象，并返回指向该对象的指针。\n\n    示例代码如下：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 55",
            "code": "    #include <iostream>\n    \n    class MyClass {\n    public:\n        MyClass(int value) : data(value) {\n            std::cout << \"Constructor called with value: \" << data << std::endl;\n        }\n    \n    private:\n        int data;\n    };\n    \n    int main() {\n        // 在栈上分配内存，构造对象\n        char buffer[sizeof(MyClass)];\n        MyClass* obj = new (buffer) MyClass(42);\n    \n        // 使用对象\n    \n        // 手动调用对象的析构函数\n        obj->~MyClass();\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "注意，使用`placement new`需要手动调用对象的析构函数来释放对象，因为`placement new`只是在指定的内存位置上构造对象，并没有自动管理对象的生命周期。",
        "transcript": "注意，使用`placement new`需要手动调用对象的析构函数来释放对象，因为`placement new`只是在指定的内存位置上构造对象，并没有自动管理对象的生命周期。\n\n    `placement new`主要用于特殊场景，如在特定的内存区域上构造对象，或者实现自定义的内存管理器。在一般情况下，应该优先使用栈上的局部变量或智能指针等方式来管理对象的生命周期，以避免手动处理对象的构造和析构。\n\n    在C++中，不能在栈上动态分配内存。栈是由编译器自动管理的一种数据结构，其大小在编译时确定，而且栈上的内存分配和释放是自动进行的，无法在运行时进行动态调整。\n\n    如果您需要在运行时动态分配内存并且需要灵活控制内存的大小，应该使用堆来分配内存。在C++中，可以使用`new`和`delete`操作符来在堆上动态分配和释放内存。例如：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 56",
            "code": "    int* ptr = new int; // 在堆上分配一个int大小的内存块\n    *ptr = 42; // 将值42存储在动态分配的内存中\n    delete ptr; // 释放堆上分配的内存"
          }
        ]
      },
      {
        "title": "注意，使用动态内存分配时需要谨慎，避免内存泄漏。每次使用`new`分配内存后，都应该相应地使用`delete`来释放内存，以防止内存泄漏。另外，C++中还推荐使用智能指针（如`st",
        "transcript": "注意，使用动态内存分配时需要谨慎，避免内存泄漏。每次使用`new`分配内存后，都应该相应地使用`delete`来释放内存，以防止内存泄漏。另外，C++中还推荐使用智能指针（如`std::unique_ptr`和`std::shared_ptr`）来管理动态内存，以便自动处理内存的释放，避免手动调用`delete`导致的潜在问题。\n\n60. c++ struct 和 class\n\n    在C++中，`struct`和`class`是用于定义自定义数据类型（类）的关键字，它们有很多相似之处，但也有一些区别。\n\n    相同点：\n\n    1. 成员变量和成员函数：`struct`和`class`都可以包含成员变量和成员函数，用于表示对象的状态和行为。\n\n    2. 访问权限：`struct`和`class`都支持访问权限控制关键字（`public`、`protected`、`private`），用于限制成员的访问范围。\n\n    区别：\n\n    1. 默认访问权限：在`struct`中，默认的访问权限是`public`，在`class`中，默认的访问权限是`private`。这意味着在`struct`中，成员变量和成员函数默认是公有的，而在`class`中默认是私有的。\n\n    2. 继承方式：当没有指定继承方式时，`struct`继承方式是`public`，而`class`继承方式是`private`。\n\n    示例代码如下：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 57",
            "code": "    // struct，默认的访问权限是public\n    struct MyStruct {\n        int x; // public\n        void foo() {} // public\n    };\n    \n    // class，默认的访问权限是private\n    class MyClass {\n        int y; // private\n        void bar() {} // private\n    };\n    \n    int main() {\n        MyStruct s;\n        s.x = 42; // 可以访问成员变量x\n        s.foo(); // 可以调用成员函数foo\n    \n        MyClass c;\n        // c.y = 100; // 错误：不能直接访问私有成员y\n        // c.bar(); // 错误：不能调用私有成员函数bar\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "总体上说，`struct`和`class`在大部分情况下可以互换使用，它们的主要区别在于默认的访问权限。在实际使用中，选择使用`struct`还是`class`主要取决于编程风格和",
        "transcript": "总体上说，`struct`和`class`在大部分情况下可以互换使用，它们的主要区别在于默认的访问权限。在实际使用中，选择使用`struct`还是`class`主要取决于编程风格和个人习惯，以及类的设计需要。\n\n61. 怎么知道 weak_ptr 失效了没\n\n    在C++中，可以通过使用`weak_ptr`的成员函数`expired()`来判断`weak_ptr`是否已经失效。\n\n    `weak_ptr`是`shared_ptr`的弱引用，它不会增加引用计数，当所有`shared_ptr`都释放后，`weak_ptr`就会失效。可以通过调用`expired()`函数来检查`weak_ptr`是否已经失效。\n\n    示例代码如下：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 58",
            "code": "    #include <iostream>\n    #include <memory>\n    \n    int main() {\n        std::shared_ptr<int> shared = std::make_shared<int>(42);\n        std::weak_ptr<int> weak = shared;\n    \n        if (!weak.expired()) {\n            std::cout << \"weak_ptr is still valid.\" << std::endl;\n            // 使用 weak_ptr\n            std::shared_ptr<int> shared2 = weak.lock();\n            if (shared2) {\n                std::cout << \"weak_ptr successfully converted to shared_ptr.\" << std::endl;\n            }\n        } else {\n            std::cout << \"weak_ptr has expired.\" << std::endl;\n        }\n    \n        // 释放 shared_ptr\n        shared.reset();\n    \n        if (weak.expired()) {\n            std::cout << \"weak_ptr has expired.\" << std::endl;\n        }\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在上述示例中，`weak_ptr`首先被赋值为一个`shared_ptr`的弱引用。通过`expired()`函数检查`weak_ptr`是否失效。当`shared_ptr`释放后",
        "transcript": "在上述示例中，`weak_ptr`首先被赋值为一个`shared_ptr`的弱引用。通过`expired()`函数检查`weak_ptr`是否失效。当`shared_ptr`释放后，再次调用`expired()`时，会返回`true`，表示`weak_ptr`已经失效了。\n\n    需要注意的是，在使用`weak_ptr`之前，最好通过`lock()`函数将其转换为`shared_ptr`，然后再判断是否为空指针，以确保在使用`shared_ptr`时不会出现悬空指针的情况。\n\n62. 类的成员变量是否可以是引用\n\n    是的，类的成员变量可以是引用。引用是一种指向对象的指针，它不能为 null。引用变量必须在初始化时绑定到对象，并且不能再绑定到其他对象。\n\n    在C++中，类的成员变量可以是各种类型，包括引用类型。引用类型的成员变量必须在声明时进行初始化，并且不能被重新赋值。引用成员变量必须在构造函数的成员初始化列表中进行初始化，否则会导致编译错误。\n\n    下面是一个示例代码，演示了类的成员变量为引用类型的情况：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 59",
            "code": "    #include <iostream>\n    \n    class MyClass {\n    public:\n        // 构造函数中初始化引用成员变量\n        MyClass(int& value) : refVar(value) {}\n    \n        void printValue() {\n            std::cout << \"Value: \" << refVar << std::endl;\n        }\n    \n    private:\n        int& refVar;\n    };\n    \n    int main() {\n        int x = 42;\n        MyClass obj(x); // 传入x的引用\n        obj.printValue(); // 输出：Value: 42\n    \n        x = 100; // 修改x的值\n        obj.printValue(); // 输出：Value: 100，因为refVar是x的引用，所以值也被修改了\n    \n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在上述示例中，`MyClass`类的成员变量`refVar`是一个整型引用，它在构造函数中初始化，并与传入的`x`引用绑定。因此，当修改`x`的值时，`refVar`也会随之改变。",
        "transcript": "在上述示例中，`MyClass`类的成员变量`refVar`是一个整型引用，它在构造函数中初始化，并与传入的`x`引用绑定。因此，当修改`x`的值时，`refVar`也会随之改变。引用成员变量在某些情况下可以用于传递外部数据给类，但需要谨慎使用，确保在类的生命周期内引用一直有效。\n\n    引用变量在 C++ 中很有用，因为它们可以提高性能和减少内存使用量。使用引用变量，可以避免对对象的值进行不必要的复制。\n\n63. 智能指针能够完全避免内存泄漏吗 \n\n    智能指针能够大大降低内存泄漏的风险，但不能完全避免内存泄漏。虽然智能指针可以自动管理动态分配的内存，但在某些情况下，仍然可能发生内存泄漏。\n\n    智能指针主要有两种类型：`std::shared_ptr`和`std::unique_ptr`。\n\n    1. `std::shared_ptr`：使用引用计数来管理动态内存，当最后一个`shared_ptr`指向的对象销毁时，会自动释放内存。但是，`std::shared_ptr`的循环引用（两个或多个对象相互持有对方的`shared_ptr`）可能导致内存泄漏，因为引用计数永远无法降为零。\n\n    2. `std::unique_ptr`：使用独占所有权的方式管理动态内存，确保只有一个指针指向对象。当`std::unique_ptr`销毁或转移所有权时，它会自动释放内存。由于不支持共享所有权，`std::unique_ptr`不存在循环引用导致的内存泄漏。\n\n    虽然智能指针可以在大多数情况下自动处理内存的释放，但仍然需要注意以下情况以避免内存泄漏：\n\n    1. 避免循环引用：当使用`std::shared_ptr`时，尽量避免形成循环引用，可以使用`std::weak_ptr`来解决循环引用问题。\n\n    2. 避免裸指针操作：尽量避免使用裸指针（原始指针），避免裸指针与智能指针混用，以防止内存泄漏。\n\n    3. 使用`std::make_shared`和`std::make_unique`：优先使用这些函数来创建智能指针，避免手动调用`new`和`delete`。\n\n    虽然智能指针能够很大程度上减少内存泄漏的可能性，但程序员仍然需要注意正确使用智能指针并遵循良好的内存管理实践，以确保内存的正确释放。\n\n64. 空类是否具有虚函数指针\n\n    在C++中，空类（没有成员变量和成员函数）不具有虚函数指针。虚函数表是一个存储有类的虚函数地址的数据结构，它是在包含虚函数的类中生成的。\n\n    如果一个类中没有虚函数，编译器通常不会为该类生成虚函数表，因为它没有虚函数需要调用。因此，空类不会有虚函数表，也就没有虚函数指针。\n\n    虚函数表的生成和使用涉及到类的继承和多态性，而空类没有任何继承关系，也没有虚函数，因此不会有虚函数表。\n\n    示例代码：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 60",
            "code": "    #include <iostream>\n    \n    class EmptyClass {\n    };\n    \n    int main() {\n        EmptyClass obj;\n        std::cout << \"Size of EmptyClass: \" << sizeof(obj) << std::endl;\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在上述示例中，`EmptyClass`是一个空类，没有任何成员变量和成员函数。输出的结果通常为1，表示空类的大小为1字节，因为C++要确保对象的地址是唯一的，所以即使没有成员，空类",
        "transcript": "在上述示例中，`EmptyClass`是一个空类，没有任何成员变量和成员函数。输出的结果通常为1，表示空类的大小为1字节，因为C++要确保对象的地址是唯一的，所以即使没有成员，空类也会占用一个字节的空间。但是空类不会有虚函数表或虚函数指针。\n\n65. 给一个空类，sizeof是多少\n\n    空类的`sizeof`大小通常是1字节。他必须在内存中占用一定空间，否则的话就无法使用这些实例，至于占用多少字节取决于编译器。\n\n    在C++中，每个对象在内存中都必须有一个独一无二的地址，即使是空类，也需要分配一个字节的内存空间。这样可以确保空类的对象在内存中有唯一的地址，使得空类的对象可以在不同的内存地址上存在，而不会出现冲突。\n\n    示例代码：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 61",
            "code": "    #include <iostream>\n    \n    class EmptyClass {\n    };\n    \n    int main() {\n        EmptyClass obj;\n        std::cout << \"Size of EmptyClass: \" << sizeof(obj) << std::endl;\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "上述示例中，`EmptyClass`是一个空类，没有任何成员变量和成员函数。`sizeof(obj)`输出的结果通常是1，表示空类的大小为1字节。但是需要注意的是，空类的大小可能会",
        "transcript": "上述示例中，`EmptyClass`是一个空类，没有任何成员变量和成员函数。`sizeof(obj)`输出的结果通常是1，表示空类的大小为1字节。但是需要注意的是，空类的大小可能会受到编译器、对齐方式和编译选项等因素的影响，因此在特定的编译环境中，空类的大小可能会略有不同。但一般情况下，空类的大小是1字节。\n\n66. 继承虚函数需要写virtual吗？overide呢\n\n    在C++中，如果一个类通过继承重写（override）了基类的虚函数，可以选择是否在派生类中使用`virtual`关键字来指明该函数是虚函数。当然，使用`virtual`关键字可以更加明确，但并非强制要求。\n\n    虚函数声明：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 62",
            "code": "    class Base {\n    public:\n        virtual void foo() {\n            // 虚函数实现\n        }\n    };\n    \n    class Derived : public Base {\n    public:\n        // 可以选择是否使用 virtual 关键字\n        void foo() override {\n            // 重写虚函数实现\n        }\n    };"
          }
        ]
      },
      {
        "title": "在派生类中，如果使用`override`关键字来标记重写的虚函数，编译器会进行额外的检查，确保该函数在基类中是虚函数。如果没有使用`override`关键字，编译器不会进行此类检查",
        "transcript": "在派生类中，如果使用`override`关键字来标记重写的虚函数，编译器会进行额外的检查，确保该函数在基类中是虚函数。如果没有使用`override`关键字，编译器不会进行此类检查，但函数的重写行为仍然有效。\n\n    在C++11标准之后，推荐使用`override`关键字来标记重写的虚函数，因为它能够提供更好的代码可读性，并且在函数签名不匹配时可以触发编译错误，帮助我们更早地发现代码错误。使用`override`关键字还可以防止一些误操作，例如函数签名拼写错误等。\n\n    总结起来，虚函数的重写需要在派生类中进行相应的实现，并且可以选择使用`virtual`和`override`关键字来增强代码的可读性和安全性。在C++11及以后的标准中，建议使用`override`关键字来标记虚函数的重写。\n\n67. extern使用\n\n    在C++中，如果一个类通过继承重写（override）了基类的虚函数，可以选择是否在派生类中使用`virtual`关键字来指明该函数是虚函数。当然，使用`virtual`关键字可以更加明确，但并非强制要求。\n\n    虚函数声明：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 63",
            "code": "    class Base {\n    public:\n        virtual void foo() {\n            // 虚函数实现\n        }\n    };\n    \n    class Derived : public Base {\n    public:\n        // 可以选择是否使用 virtual 关键字\n        void foo() override {\n            // 重写虚函数实现\n        }\n    };"
          }
        ]
      },
      {
        "title": "在派生类中，如果使用`override`关键字来标记重写的虚函数，编译器会进行额外的检查，确保该函数在基类中是虚函数。如果没有使用`override`关键字，编译器不会进行此类检查",
        "transcript": "在派生类中，如果使用`override`关键字来标记重写的虚函数，编译器会进行额外的检查，确保该函数在基类中是虚函数。如果没有使用`override`关键字，编译器不会进行此类检查，但函数的重写行为仍然有效。\n\n    在C++11标准之后，推荐使用`override`关键字来标记重写的虚函数，因为它能够提供更好的代码可读性，并且在函数签名不匹配时可以触发编译错误，帮助我们更早地发现代码错误。使用`override`关键字还可以防止一些误操作，例如函数签名拼写错误等。\n\n    总结起来，虚函数的重写需要在派生类中进行相应的实现，并且可以选择使用`virtual`和`override`关键字来增强代码的可读性和安全性。在C++11及以后的标准中，建议使用`override`关键字来标记虚函数的重写。\n\n68. c 和 c++ 编译区别（不会c） \n\n    C语言和C++语言在编译过程上有一些区别。虽然C和C++都是编译型语言，但由于语法和特性的差异，编译过程存在一些细微的差异。C++ 的设计目的是更高效和更强大，它引入了许多新特性，例如对象导向编程、继承和多态性。这些特性使 C++ 适合编写复杂的应用程序，而 C 更适合编写系统软件。\n\n    以下是 C 和 C++ 之间的一些主要区别：\n\n    - C++ 支持对象导向编程，而 C 不支持。\n    - C++ 支持继承，而 C 不支持。\n    - C++ 支持多态性，而 C 不支持。\n    - C++ 支持自动内存管理，而 C 不支持。\n    - C++ 支持标准库，而 C 不支持。\n\n    C++ 比 C 更复杂的语言，但它也更强大。如果您正在编写系统软件，那么 C 是一个不错的选择。如果您正在编写复杂的应用程序，那么 C++ 是一个更好的选择。\n\n    1. 文件扩展名：C语言的源文件通常使用`.c`作为文件扩展名，而C++语言的源文件通常使用`.cpp`作为文件扩展名。这样的区别是为了让编译器能够根据文件扩展名自动选择正确的编译方式。\n\n    2. 编译命令：C语言和C++语言的编译命令也有所不同。在大多数情况下，C语言可以使用`gcc`编译器，而C++语言可以使用`g++`编译器。这是因为`g++`编译器可以处理C++的特性，包括类、继承、多态等。\n\n    3. 预处理器：C和C++都使用预处理器对源代码进行预处理，包括宏展开、条件编译等。但是C++中引入了一些新的预处理指令，如`#include <iostream>`，用于处理C++标准库中的头文件。\n\n    4. 名字修饰：C++支持函数重载和命名空间等特性，因此在编译过程中会对函数名和类名进行名字修饰（name mangling）以区分不同的函数或类。这使得C++支持函数重载，而C语言不支持函数重载。\n\n    除了上述区别，C和C++在编译过程中都会经历类似的阶段，包括预处理、编译、汇编和链接等。在编译后生成的目标文件和可执行文件也类似。但是由于C++引入了更多的特性和标准库，编译后的C++程序可能会更大一些。\n\n69. select与epoll\n\n    `select`和`epoll`都是用于处理I/O多路复用的系统调用，主要用于实现高效的网络编程。它们的目的都是为了在一个线程内监视多个文件描述符的状态，并在有数据可读或可写时进行处理，从而避免使用多线程或多进程来处理大量并发连接。\n\n    1. `select`：\n       - `select`是Unix系统最早引入的I/O多路复用函数，支持监视多个文件描述符的读、写、异常等事件。\n       - 通过传递可读、可写和异常文件描述符的集合，让`select`函数阻塞等待这些描述符中的任何一个就绪（有数据可读或可写）。\n       - `select`函数的缺点是效率相对较低，因为每次调用`select`时，需要传递并初始化一个描述符集合，同时每次返回时都需要检查整个描述符集合，不适合处理大量的并发连接。\n\n    2. `epoll`：\n       - `epoll`是Linux系统引入的高性能I/O多路复用机制，使用了红黑树和双链表等数据结构来管理文件描述符。\n       - `epoll`提供了三个系统调用：`epoll_create`创建一个`epoll`实例，`epoll_ctl`用于添加、修改和删除文件描述符，`epoll_wait`用于等待就绪的文件描述符。\n       - `epoll`在处理大量并发连接时效率更高，因为它可以避免每次调用都传递和检查整个描述符集合，而是通过回调机制仅处理就绪的文件描述符，避免了无效遍历。\n\n    总结：\n    `epoll`是`select`的一个更加高效的替代方案，特别适用于处理大量并发连接的网络编程场景。它在Linux环境中得到广泛应用，并取代了`select`作为首选的I/O多路复用机制。\n\n70. epoll是阻塞还是非阻塞（可定）  同步还是异步（同步）\n\n    `epoll`既可以是阻塞的也可以是非阻塞的，同时它是一种同步的I/O多路复用机制。\n\n    1. 阻塞与非阻塞：\n       - `epoll`可以在调用`epoll_wait`时设定阻塞或非阻塞模式。\n       - 在阻塞模式下，`epoll_wait`函数会一直阻塞直到有文件描述符就绪才返回。\n       - 在非阻塞模式下，`epoll_wait`函数会立即返回，如果没有任何文件描述符就绪，它会返回0，不会等待。在非阻塞模式下，可以通过设置合适的超时时间来控制等待时间。\n\n    2. 同步与异步：\n       - `epoll`是一种同步的I/O多路复用机制，因为调用`epoll_wait`时需要等待就绪的文件描述符。\n       - 同步指的是调用方需要主动等待操作完成，而异步指的是调用方发起操作后可以继续进行其他操作，当操作完成时会通知调用方。\n\n    总结：\n    `epoll`既可以是阻塞的也可以是非阻塞的，它是一种同步的I/O多路复用机制。在实际使用中，可以根据具体的需求选择适合的阻塞模式和超时设置，以及合理利用`epoll`的回调机制来实现高效的网络编程。\n\n71. new   既是操作符又是关键字     操作符可以实现多态（静态重载）\n\n    在C++中，`new`既是一个操作符（运算符）也是一个关键字。\n\n    1. `new`作为操作符：\n       - `new`作为操作符用于在堆上分配内存并返回指向分配的内存的指针。它是动态内存分配的方式之一，用于创建对象或数组，并且会自动调用对象的构造函数。例如：`int* ptr = new int;` 会在堆上分配一个整型变量的内存，并将其地址赋给指针`ptr`。\n       - 此外，C++中还有`new[]`操作符用于在堆上分配数组内存。\n\n    2. `new`作为关键字：\n       - `new`作为关键字用于创建自定义的数据类型，即类和结构体。通过使用`class`或`struct`关键字来定义类或结构体，并使用`new`关键字来创建对象实例。例如：`class MyClass { /* class definition */ }; MyClass* obj = new MyClass;`\n\n    关于多态（Polymorphism）：\n    多态是C++面向对象编程的一个重要特性，它允许使用基类的指针或引用来调用派生类的成员函数。多态可以通过虚函数和继承来实现。\n\n    `new`操作符本身并不与多态直接相关。然而，当使用`new`操作符创建对象时，如果类定义了虚函数，那么创建的对象将具有多态性。通过基类指针指向派生类对象并调用虚函数，可以实现动态绑定，从而在运行时调用正确的派生类函数。\n\n    示例：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 64",
            "code": "    #include <iostream>\n    \n    class Base {\n    public:\n        virtual void show() {\n            std::cout << \"Base class\" << std::endl;\n        }\n    };\n    \n    class Derived : public Base {\n    public:\n        void show() override {\n            std::cout << \"Derived class\" << std::endl;\n        }\n    };\n    \n    int main() {\n        Base* ptr = new Derived; // 使用基类指针指向派生类对象\n        ptr->show(); // 输出：Derived class，因为虚函数实现了多态性\n        delete ptr; // 释放内存\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在上述示例中，`Base`类和`Derived`类都有虚函数`show`，通过基类指针`ptr`指向派生类`Derived`对象并调用虚函数，实现了多态性，输出结果为\"Derive",
        "transcript": "在上述示例中，`Base`类和`Derived`类都有虚函数`show`，通过基类指针`ptr`指向派生类`Derived`对象并调用虚函数，实现了多态性，输出结果为\"Derived class\"。\n\n72. static 重载 new 和 delete \n\n    在C++中，我们可以通过重载类的`new`和`delete`运算符来实现对内存分配和释放的自定义管理。这样可以实现更灵活的内存管理，并且可以与特定的资源分配策略相匹配。\n\n    重载 `new` 和 `delete` 运算符时，必须使用 `static` 关键字。这意味着重载 `new` 和 `delete` 运算符只能在类的内部使用。如果不使用 `static` 关键字，那么重载的 `new` 和 `delete` 运算符将会覆盖 C++ 标准库中定义的 `new` 和 `delete` 运算符。这可能会导致程序出现错误。\n\n    静态重载（static overload）是指将`new`和`delete`运算符声明为类的静态成员函数，并使用它们来管理类的内存分配和释放。这样做的好处是可以在类的作用域内定义新的内存分配策略，而不需要修改每个对象的内存分配方式。\n\n    示例：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 65",
            "code": "    #include <iostream>\n    \n    class MyClass {\n    public:\n        void* operator new(size_t size) {\n            std::cout << \"Custom memory allocation for size: \" << size << std::endl;\n            return ::operator new(size); // 调用默认的内存分配函数\n        }\n    \n        void operator delete(void* ptr) {\n            std::cout << \"Custom memory deallocation\" << std::endl;\n            ::operator delete(ptr); // 调用默认的内存释放函数\n        }\n    \n        // 也可以重载 new[] 和 delete[]\n        // void* operator new[](size_t size) { ... }\n        // void operator delete[](void* ptr) { ... }\n    };\n    \n    int main() {\n        MyClass* obj = new MyClass;\n        delete obj;\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在上述示例中，我们重载了`MyClass`类的`new`和`delete`运算符，实现了自定义的内存分配和释放。在`new`运算符中，我们输出了自定义的内存分配信息，并通过`::o",
        "transcript": "在上述示例中，我们重载了`MyClass`类的`new`和`delete`运算符，实现了自定义的内存分配和释放。在`new`运算符中，我们输出了自定义的内存分配信息，并通过`::operator new(size)`调用默认的内存分配函数。在`delete`运算符中，我们输出了自定义的内存释放信息，并通过`::operator delete(ptr)`调用默认的内存释放函数。\n\n    注意：静态重载只会影响特定的类，不会改变全局的内存分配方式。在实际应用中，请谨慎使用自定义的内存管理，确保它与类的使用和析构匹配，避免内存泄漏和潜在的错误。\n\n73. new 与malloc\n\n    `new`和`malloc`都是在C++中用于动态内存分配的方法，但它们在使用上有一些不同。\n\n    1. `new`：\n       - `new`是C++关键字，用于在堆上分配内存，并返回指向分配的内存的指针。\n       - 使用`new`时，会自动调用对象的构造函数（如果是类类型），并返回一个指向动态分配内存的指针。\n       - `new`的语法：`new Type;`（单个对象）或`new Type[N];`（数组）。\n       - 示例：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 66",
            "code": "         int* p1 = new int; // 在堆上分配一个整型变量的内存，并返回指向该内存的指针\n         int* p2 = new int[10]; // 在堆上分配一个整型数组的内存，并返回指向该内存的指针"
          }
        ]
      },
      {
        "title": "2. `malloc`：",
        "transcript": "2. `malloc`：\n       - `malloc`是C标准库函数，用于在堆上分配内存，并返回一个指向分配的内存的指针（`void*`类型）。\n       - `malloc`函数并不会自动调用对象的构造函数，仅分配内存，因此适用于分配简单的内存块，如数组或原始数据类型。\n       - `malloc`的语法：`void* malloc(size_t size);`，需要显式指定分配内存的字节数。\n       - 示例：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 67",
            "code": "         int* p1 = (int*)malloc(sizeof(int)); // 在堆上分配一个整型变量的内存，并返回指向该内存的指针\n         int* p2 = (int*)malloc(10 * sizeof(int)); // 在堆上分配一个整型数组的内存，并返回指向该内存的指针"
          }
        ]
      },
      {
        "title": "3. `new`与`malloc`的区别：",
        "transcript": "3. `new`与`malloc`的区别：\n       - `new`是C++的关键字，`malloc`是C标准库函数。\n       - `new`会自动调用对象的构造函数，而`malloc`不会。\n       - `new`返回的是指向具体类型的指针，而`malloc`返回的是`void*`类型的指针，需要显式进行类型转换。\n       - `new`和`delete`是关联的操作符，可以自动匹配构造函数和析构函数，而`malloc`和`free`是关联的函数，需要手动调用构造函数和析构函数。\n\n    在C++中，推荐优先使用`new`和`delete`进行动态内存分配，特别是在涉及类对象的情况下，以充分利用C++的特性。如果在C++代码中使用`malloc`和`free`，则需要特别注意对构造函数和析构函数的手动调用，避免出现内存泄漏或析构不完全的情况。\n\n74. 线程共享什么 \n\n    在多线程编程中，线程可以共享以下资源和数据：\n\n    1. 全局变量：全局变量是在所有线程中共享的数据，它们可以被所有线程读取和修改。\n\n    2. 静态变量：静态变量与全局变量类似，也是在所有线程中共享的数据。\n\n    3. 堆内存：堆内存是在所有线程之间共享的，所有线程都可以访问和释放堆上的内存。\n\n    4. 文件描述符：在Unix/Linux环境下，文件描述符（包括标准输入、标准输出、socket等）是进程级别的，所有线程共享同一组文件描述符。\n\n    5. 共享内存：共享内存是一种特殊的内存区域，它被映射到多个进程的地址空间，使得这些进程可以直接访问共享内存中的数据。多线程的情况下，线程也可以共享同一块共享内存。\n\n    6. 共享对象：通过使用互斥锁（mutex）、条件变量（condition variable）等同步机制，多个线程可以共享访问某个对象或数据结构，实现数据共享和同步。\n\n    除了上述共享的资源和数据，多线程编程中还要注意对共享数据的同步访问，避免出现竞争条件（race condition）和数据不一致等问题。对于需要共享的数据，需要使用互斥锁等同步机制来保护，以确保多个线程对数据的访问是安全和有序的。同时，还需要注意避免死锁和资源竞争等并发编程中的常见问题。\n\n75. 线程同步和互斥 概念\n\n    线程同步和互斥是多线程编程中的两个重要概念，用于解决多个线程访问共享资源时可能引发的竞争条件和数据不一致等问题。\n\n    1. 线程同步（Thread Synchronization）：\n       - 线程同步是指多个线程之间协调和协同工作，以确保它们能够按照既定的顺序和时序完成任务。\n       - 在多线程环境中，不同线程的执行速度是不确定的，可能会导致线程之间的相互影响和数据访问冲突。线程同步的目的是使得多个线程之间能够按照一定的规则协调运行，避免出现竞争条件和数据不一致等问题。\n\n    2. 互斥（Mutual Exclusion）：\n       - 互斥是线程同步的一种实现方式，它通过使用互斥锁（mutex）来保护共享资源的访问，使得同一时刻只有一个线程能够访问共享资源。\n       - 当一个线程获得了互斥锁并正在访问共享资源时，其他线程会被阻塞，直到互斥锁被释放，其他线程才能获得互斥锁并继续访问共享资源。\n       - 互斥锁可以确保多个线程之间对共享资源的互斥访问，从而避免了数据竞争和数据不一致的问题。\n\n    线程同步和互斥是多线程编程中非常重要的概念，它们可以通过使用互斥锁、条件变量、信号量等同步机制来实现，确保多个线程之间的正确协作和共享资源的安全访问。同时，合理地设计和使用线程同步机制可以提高多线程程序的性能和可靠性。然而，过度使用同步机制也可能导致死锁和性能下降等问题，因此在进行多线程编程时，需要根据实际情况选择合适的同步方法和粒度，避免过度同步和不必要的开销。\n\n76. 静态链接 动态链接\n\n    静态链接和动态链接是两种不同的方法，用于将程序的目标代码和库代码组合在一起，以创建可执行文件。它们有如下特点：\n\n    1. 静态链接（Static Linking）：\n       - 静态链接是指在编译时将程序所需的目标代码和库代码完整地复制到最终的可执行文件中。\n       - 在静态链接时，目标代码和库代码被合并在一起，形成一个独立的、包含所有功能的可执行文件。\n       - 优点：静态链接的可执行文件在运行时不依赖于外部的动态库，因此在其他计算机上也能独立运行，不需要安装额外的库。\n       - 缺点：静态链接会导致可执行文件的体积较大，并且每个可执行文件中都包含了完整的库代码，可能会造成浪费。\n\n    2. 动态链接（Dynamic Linking）：\n       - 动态链接是指在编译时只将程序的目标代码和引用的库代码的引用信息保留在可执行文件中，而不包含实际的库代码。\n       - 在程序运行时，系统会根据可执行文件中的引用信息，在内存中加载和链接所需的库代码。\n       - 优点：动态链接减小了可执行文件的体积，并且多个可执行文件可以共享同一份库代码，节省了系统资源。\n       - 缺点：动态链接的可执行文件在运行时依赖于外部的动态库，如果系统中没有相应的库，需要安装对应的库才能运行。\n\n    总结：\n    静态链接将目标代码和库代码完整地合并到可执行文件中，使得可执行文件独立运行，但可能导致体积较大。动态链接只保留了库代码的引用信息，可执行文件较小，但在运行时依赖于外部的动态库。选择静态链接还是动态链接取决于应用场景和需求，通常可以根据具体情况来选择合适的链接方式。\n\n77. stl 什么时候迭代器失效 \n\n    在 STL（标准模板库）中，迭代器失效是指迭代器在某些操作后不再指向有效的元素或容器，访问失效的迭代器会导致未定义的行为。迭代器失效的情况取决于容器类型和具体的操作，下面是一些常见情况迭代器会失效的示例：\n\n    1. 添加和删除元素：\n       - 在向容器中添加元素（如插入、push_back、push_front等）或删除元素（如erase、pop_back、pop_front等）时，可能会导致所有迭代器失效，因为容器内部的元素位置发生了改变。\n\n    2. 插入和移动元素：\n       - 在对容器进行插入（insert）或移动（splice、merge等）操作时，有可能会使得某些迭代器失效，因为元素的位置可能发生变化。\n\n    3. 重新分配内存：\n       - 对于某些容器（如vector、deque），在添加元素时可能会触发重新分配内存的操作，导致所有迭代器失效。\n\n    4. 清空容器：\n       - 调用容器的clear函数会清空所有元素，导致所有迭代器失效。\n\n    5. 使用end迭代器：\n       - 使用end迭代器指向的位置不是有效元素的位置，所以不能对end迭代器进行解引用或修改。\n\n    由于迭代器失效可能会导致程序运行时的未定义行为，因此在进行添加、删除、插入等可能引起迭代器失效的操作后，最好重新获取迭代器或谨慎使用原来的迭代器。在需要遍历容器的过程中，避免在迭代过程中进行容器的修改操作，以确保迭代器的有效性。\n\n78. extern c \n\n    `extern \"C\"` 是一个C++语言的特性，用于在C++代码中声明使用C语言编写的函数接口。\n\n    `extern \"C\"` 关键字用于告诉编译器，该块代码使用 C 语法。这对于与 C 代码进行交互很有用，因为它可以确保两种语言之间的代码兼容。\n\n    在C++中，函数名在编译后会进行名称修饰（name mangling），以支持函数重载和其他C++特性。而C语言没有名称修饰，函数名保持原始形式。\n\n    使用 `extern \"C\"` 声明的函数，告诉编译器按照C语言的方式进行名称处理，使得C++代码可以调用C语言编写的函数接口，避免了名称修饰导致的链接错误。\n\n    示例：\n\n    C语言代码（hello.c）：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 68",
            "code": "    #include <stdio.h>\n    \n    void hello() {\n        printf(\"Hello, C!\\n\");\n    }"
          }
        ]
      },
      {
        "title": "C++代码（main.cpp）：",
        "transcript": "C++代码（main.cpp）：",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 69",
            "code": "    #include <iostream>\n    \n    extern \"C\" {\n        void hello(); // 使用extern \"C\"声明C语言函数接口\n    }\n    \n    int main() {\n        std::cout << \"Hello from C++!\" << std::endl;\n        hello(); // 调用C语言函数\n        return 0;\n    }"
          }
        ]
      },
      {
        "title": "在上述例子中，C++代码中使用了 `extern \"C\"` 声明了 `hello()` 函数，这样C++代码就可以调用C语言的 `hello()` 函数接口。",
        "transcript": "在上述例子中，C++代码中使用了 `extern \"C\"` 声明了 `hello()` 函数，这样C++代码就可以调用C语言的 `hello()` 函数接口。\n\n    使用 `extern \"C\"` 通常用于在C++代码中调用C语言的函数库，或者用于实现C++和其他语言（如C、Fortran等）之间的接口。在这些情况下，使用 `extern \"C\"` 可以保证函数接口的兼容性。\n\n79. vector删除怎么得到有效的迭代器\n\n    在STL中，删除元素后如何获取有效的迭代器，有几种方法可以实现：\n\n    1. 使用返回值：vector的erase函数会返回一个指向下一个有效元素的迭代器。可以在删除元素后，将erase函数的返回值赋给迭代器，以获取有效的迭代器。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 70",
            "code": "    #include <vector>\n    \n    std::vector<int> vec = {1, 2, 3, 4, 5};\n    auto it = vec.begin();\n    it = vec.erase(it); // 删除第一个元素，并获取下一个元素的迭代器"
          }
        ]
      },
      {
        "title": "2. 使用算法函数：STL提供了一些算法函数，如std::remove和std::remove_if，用于删除元素，并返回指向有效元素的迭代器。",
        "transcript": "2. 使用算法函数：STL提供了一些算法函数，如std::remove和std::remove_if，用于删除元素，并返回指向有效元素的迭代器。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 71",
            "code": "    #include <vector>\n    #include <algorithm>\n    \n    std::vector<int> vec = {1, 2, 3, 4, 5};\n    auto it = std::remove(vec.begin(), vec.end(), 3); // 删除所有值为3的元素，并返回指向有效元素的迭代器\n    vec.erase(it, vec.end()); // 删除无效的元素"
          }
        ]
      },
      {
        "title": "3. 使用循环：可以通过遍历vector，并在循环中进行删除操作，从而获取有效的迭代器。",
        "transcript": "3. 使用循环：可以通过遍历vector，并在循环中进行删除操作，从而获取有效的迭代器。",
        "codeBlocks": [
          {
            "label": "中望 C++ 面试八股.md · 代码 72",
            "code": "    #include <vector>\n    \n    std::vector<int> vec = {1, 2, 3, 4, 5};\n    for (auto it = vec.begin(); it != vec.end(); ) {\n        if (*it == 3) {\n            it = vec.erase(it); // 删除元素，并获取下一个元素的迭代器\n        } else {\n            ++it;\n        }\n    }"
          }
        ]
      },
      {
        "title": "需要注意的是，在删除元素后，要确保迭代器指向的位置是有效的，否则可能导致未定义的行为。一般来说，删除元素后，可以通过更新迭代器或使用返回值来获取有效的迭代器，以确保操作的正确性。",
        "transcript": "需要注意的是，在删除元素后，要确保迭代器指向的位置是有效的，否则可能导致未定义的行为。一般来说，删除元素后，可以通过更新迭代器或使用返回值来获取有效的迭代器，以确保操作的正确性。\n\n80. 完美转发 右值引用 智能指针 \n\n    - 完美转发（Perfect Forwarding）是 C++ 中用于在函数中保持参数传递的原始类型和右值/左值属性的技术。通过使用转发引用（forwarding reference），可以将函数参数按照原样传递给其他函数，实现参数的完美传递。\n\n    - 右值引用（Rvalue Reference）是C++11引入的新特性，用于标识一个可以绑定到右值的引用。右值引用的特点是其生命周期可能仅在一个表达式内，通常表示临时对象或被转移的对象。\n\n    - 智能指针（Smart Pointer）是C++中用于管理动态内存的一种指针封装。C++标准库提供了三种智能指针：std::unique_ptr、std::shared_ptr和std::weak_ptr。它们都通过RAII（资源获取即初始化）机制来管理内存，自动释放资源，避免了手动管理内存的繁琐和可能导致的内存泄漏。\n\n    结合完美转发、右值引用和智能指针的应用场景：\n\n    1. 完美转发结合右值引用：在模板函数中，通过使用转发引用，可以实现对任意类型和右值/左值属性的参数进行完美传递，以保持原始参数的特性。\n\n    2. 右值引用结合智能指针：在使用智能指针时，可以使用右值引用来转移所有权，从而避免不必要的内存拷贝，提高性能。\n\n    3. 完美转发结合右值引用和智能指针：在处理需要传递动态内存管理权的函数调用时，可以使用完美转发和右值引用，实现对智能指针的转移，确保资源的正确释放和管理。\n\n    这些特性在现代C++编程中被广泛使用，可以提高代码的安全性、可读性和性能。同时，使用智能指针还可以避免手动释放内存的错误，有效减少内存泄漏的风险。\n\n81. 如何禁止在堆区开辟内存\n\n    在 C++ 中，禁止在堆区（即使用`new`和`malloc`等动态分配内存的方式）开辟内存通常是通过避免使用动态内存分配操作来实现的。可以采取以下方法来限制在堆区开辟内存：\n\n    1. 使用栈区变量：在函数内部声明对象或数组时，通常会在栈区自动分配内存，而不需要显式地使用动态内存分配。\n\n    2. 使用容器类：使用 C++ 标准库提供的容器类，如`std::vector`、`std::array`等，它们会自动管理内存，无需手动进行内存分配和释放。\n\n    3. 使用智能指针：如果确实需要使用动态内存分配，可以考虑使用智能指针（如`std::shared_ptr`、`std::unique_ptr`等），它们可以自动管理动态分配的内存，在对象不再被使用时自动释放内存。\n\n    4. 避免手动使用`new`和`delete`：避免手动使用`new`和`delete`进行内存分配和释放，因为手动管理内存可能容易出现内存泄漏和悬挂指针等问题。\n\n    请注意，堆区内存的动态分配通常用于需要在程序运行时动态确定大小或生命周期较长的情况。如果在设计程序时可以避免使用堆区分配，尽量使用栈区变量或容器类等方式，可以简化内存管理，并降低出错的风险。\n\n82. lru了解吗？如何实现？\n\n83. 与lru相关的还有一个lfu，如何实现？ \n\n84. 讲一下static关键字； \n\n85. 用free释放new的东西会怎么样？ \n\n86. 父类的构造函数中调用虚函数会出什么问题？ \n\n87. shared_ptr怎么实现引用计数？\n\n88. unique_ptr怎么实现独占？ \n\n89. unique_ptr可以用作函数返回值吗？"
      },
      {
        "title": "birdsFields",
        "codeBlocks": [
          {
            "label": "birdsFields.cpp",
            "code": "//\n//  birdsFields.cpp\n//  test\n//\n//  Created by Wenbo Geng on 9/5/23.\n//\n\n#include <iostream>\n#include <cmath>\n#include <vector>\n\nusing namespace std;\n\n/* 思路：就是有个几何的模板涉及到叉积、点乘，可以求出一个点是不是在多边形内部，如果在内部的话就找距离所有桩子最远的，如果在外面就找最近的\n*/\n\nint m, n;\n\nconst double eps = 1e-8; // 需要根据精度要求设定\n\nstruct Point {\n    double x, y;\n    Point(double x = 0, double y = 0) : x(x), y(y) {} // 修正成 y(y)\n    \n    Point operator +(const Point &b) const {\n        return Point(x + b.x, y + b.y);\n    }\n    \n    Point operator -(const Point &b) const {\n        return Point(x - b.x, y - b.y);\n    }\n    \n    double operator *(const Point &b) const {\n        return x * b.x + y * b.y;\n    }\n    \n    double operator ^(const Point &b) const {\n        return x * b.y - y * b.x;\n    }\n};\n\ntypedef Point Vector;\n\nint dcmp(double x) {\n    if (fabs(x) < eps) return 0;\n    else\n        return x < 0 ? -1 : 1;\n}\n\nbool OnSegment(Point P1, Point P2, Point Q) {\n    return dcmp((P1 - Q) ^ (P2 - Q)) == 0 && dcmp((P1 - Q) * (P2 - Q)) <= 0;\n}\n\nbool inPolygon(Point P, const std::vector<Point>& polygon) {\n    bool flag = false;\n    Point P1, P2;\n    for (int i = 1, j = n; i <= n; j = i++) {\n        P1 = polygon[i];\n        P2 = polygon[j];\n        if (OnSegment(P1, P2, P)) return true;\n        if (dcmp(P1.y - P.y) > 0 != dcmp(P2.y - P.y) > 0 && dcmp(P.x - (P.y - P1.y) * (P1.x - P2.x) / (P1.y - P2.y) - P1.x) < 0)\n            flag = !flag;\n    }\n    return flag;\n}\n\nint main() {\n    cin >> n; // 多边形的顶点个数\n\n    vector<Point> polygon(n);\n    for (int i = 0; i < n; ++i) {\n        double x, y;\n        cin >> x >> y;\n        polygon[i] = Point(x, y);\n    }\n\n    double bird_x, bird_y;\n    cin >> bird_x >> bird_y;\n    \n    Point bird(bird_x, bird_y);\n    \n    // 调用 inPolygon 函数判断鸟儿是否在多边形内部\n    if (inPolygon(bird, polygon)) {\n        // 鸟儿在多边形内部，计算距离最远的桩子距离\n        double maxDistance = 0.0;\n        for (const Point& p : polygon) {\n            double distance = sqrt((p.x - bird.x) * (p.x - bird.x) + (p.y - bird.y) * (p.y - bird.y));\n            maxDistance = max(maxDistance, distance);\n        }\n        cout << \"鸟儿距离最远桩的距离：\" << maxDistance << endl;\n    } else {\n        // 鸟儿在多边形外部，计算距离最近的桩子距离\n        double minDistance = 1e9; // 初始设置一个较大的值\n        for (const Point& p : polygon) {\n            double distance = sqrt((p.x - bird.x) * (p.x - bird.x) + (p.y - bird.y) * (p.y - bird.y));\n            minDistance = min(minDistance, distance);\n        }\n        cout << \"鸟儿距离最近桩的距离：\" << minDistance << endl;\n    }\n    \n    return 0;\n}"
          }
        ]
      },
      {
        "title": "getTreeNames",
        "codeBlocks": [
          {
            "label": "getTreeNames.cpp",
            "code": "//\n//  getTreeNames.cpp\n//  test\n//\n//  Created by Wenbo Geng on 9/5/23.\n//\n\n#include <stdio.h>\n#include <iostream>\n\nusing namespace std;\n\n/*\n 输入里面可能会有[\"abc\"\"abc(1)\"\"abc\"这种情况，所以添加数字的时候还要再判断一下这个合成的新的名字前有没有被使用过\n */\n\n\nclass Solution {\npublic:\n    vector<string> getTreeNames(vector<string>& names) {\n        unordered_map<string, int> cnt;\n        vector<string> ans;\n        \n        for (const string& name : names) {\n            if (!cnt.count(name)) {\n                cnt[name] = 1;\n                ans.push_back(name);\n            } else {\n                int currentCount = cnt[name];\n                string newName = name + \"(\" + to_string(currentCount) + \")\";\n                while (cnt.count(newName)) {\n                    currentCount++;\n                    newName = name + \"(\" + to_string(currentCount) + \")\";\n                }\n                cnt[name] = currentCount;\n                cnt[newName] = 1;\n                ans.push_back(newName);\n            }\n        }\n        return ans;\n    }\n};"
          }
        ]
      },
      {
        "title": "maxSubArray",
        "codeBlocks": [
          {
            "label": "maxSubArray.cpp",
            "code": "//\n//  maxSubArray.cpp\n//  test\n//\n//  Created by Wenbo Geng on 9/5/23.\n//\n\n#include <stdio.h>\n#include <iostream>\n#include <vector>\n\nusing namespace std;\n\n/*\n 一维动态规划\n\n nums: [-2,1,-3,4,-1,2,1,-5,4]\n f: [-2, 1(-2 小于0 没必要加就从自己开始), -2(-3 + 1), 4 , 3(-1 + 4) , 5 (2 + 3) , 6(1 +5) , 1(-5 + 6) , 5(1 + 4)]\n \n \n 回溯三问：\n    当前操作：枚举小于 i 的子数组选或不选\n    子问题：从前 i 个数中得到的最大和\n    下一个子问题：分类讨论：\n                    不选(子数组小于0)：从当前数开始计算子数组和\n                    选(子数组大于0)：加上当前数继续作为子数组的和\n    得到回溯公式：dfs(i) = max(nums[i], dfs(i - 1) + nums[i])\n\n 为什么不能用选或不选第 i 个数的思路？\n    由于需要得到连续子数组，所以需要逆向思维，选或不选第 i-1 个子数组\n    注：记忆化搜索，用 cache 数组记录已经选过的结果防止重复计算\n \n 复杂度:\n    时间复杂度: O(n)\n    空间复杂度: O(n) 可优化为 O(1)\n */\n\n\nclass Solution {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        const int n = (int)nums.size();\n        int ans = INT_MIN;\n        int cache[n];\n        memset(cache, -1, sizeof(cache));\n        function<int(int)> dfs = [&](int i) -> int {\n            if (i < 0) return 0;\n            if (cache[i] != -1)\n                return cache[i];\n            cache[i] = max(nums[i], dfs(i - 1) + nums[i]);\n            ans = max(ans, cache[i]);\n            return cache[i];\n        };\n        dfs(n - 1);\n        return ans;\n    }\n};\n\nclass Solution_2 {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        vector<int> f(nums.size());\n        f[0] = nums[0];\n        for(int i = 1; i < nums.size(); ++i)\n            f[i] = max(f[i - 1] + nums[i], nums[i]);\n        return *max_element(f.begin(), f.end());\n    }\n};\n\nclass Solution_3 {\npublic:\n    int maxSubArray(vector<int>& nums) {\n        int sums = nums[0], ans = nums[0];\n        for (int i = 1; i < nums.size(); ++i) {\n            sums = max(nums[i], nums[i] + sums);\n            if (ans < sums)\n                ans = sums;\n        }\n        return ans;\n    }\n};"
          }
        ]
      }
    ]
  },
  {
    "id": "cpp-test-source",
    "category": "C++ 基础",
    "topic": "备考资料",
    "company": "通用参考资料",
    "type": "参考资料",
    "round": "资料汇编",
    "date": "未记录日期",
    "time": "",
    "title": "C++ 测试题资料",
    "summary": "完整保留来源资料；仅用于阅读，不计入核心复习进度。",
    "tags": [
      "参考题",
      "C++"
    ],
    "trackProgress": false,
    "sourceFiles": [
      "4套测试题_改-240219/C++_改.docx"
    ],
    "sections": [
      {
        "title": "完整题面",
        "transcript": "C++\n1. 已知int array[10] = {1,2,3}，仅将数组名作为实参传递给函数，下列说法正确的是( ) \nA. 数组会退化为指针\nB. 实际传递给形参的是数组的第一个元素值\nC. 实际传递给形参的是数组中全部元素的值\nD. 可以在函数中获得数组元素的个数\n\n2、下面哪个语句在C++中属于合法的函数重载方式？\nA. void func(int x);void func2(double x)\nB. int func(int x);double func(int x)\nC. void func(int x);void func(int y)\nD. void func(int x);void func(int x, int y)\n\n3、下面哪种方式可以用来初始化整数类型的数组为全0？\nA. int arr[5];\nB. int arr[5] = {1, 2, 3, 4, 5};\nC. int arr[5] = {};\nD. 不确定，与编译器的处理方式有关\n\n\n4、在C++中，指针和引用之间的主要区别是什么？\nA. 指针可以为NULL，引用不能为NULL。\nB. 指针可以重新赋值，引用不能重新赋值。\nC. 指针需要分配空间，存储的是内存地址；而引用不分配内存，相当于别名。\nD. 指针可以指向其他指针，引用不能指向其他引用。\n\n5. 下面关于多态性的描述中，哪个是不正确的？（ ）\nA. 多态性可以实现同一个方法在不同对象上具有不同的行为    \nB. 多态性只能使用虚函数来实现\nC. 多态性是面向对象编程的重要特性之一\nD. 多态性包括动态多态和静态多态\n\n6. 下面关于纯虚函数的描述中，哪个是正确的？（ ）\nA. 没有实现纯虚函数的类可以实例化         \nB. 没有实现纯虚函数的类不可以作为指针         \nC. virtual void fun()=0，声明fun为纯虚函数       \nD. 继承了包含纯虚函数的类，就必须实现继承的纯虚函数\n\n\n\n\n7. 在排序方法中，关键码比较次数与记录的初始排列无关的是( )\nA. 快速排序    \nB. 归并排序      \nC. 冒泡排序        \nD. 选择排序\n\n8. 一个的数据结构，一端只能出，另一端既可以进也可以出，数据入栈序列是A，B，C，D，E，则出栈序列不可能是（ ）\nA. EACBD；  \nB. DECBA；    \nC. DCEAB；   \nD. ABCDE；\n\n9.下列语句中，存在错误的是（ ）\nA. int a=1; int &p = a;\nB. char a[10]; char *p = &a;\nC. const int a=1; const int &p= a;\nD. int a; float p=a;\n\n10 在C++中，以下哪个选项描述了私有继承的特点？\nA. 派生类可以访问基类的私有成员。\nB. 基类的私有成员在派生类中具有相同的访问级别。\nC. 基类的公有成员在派生类中变为私有成员。\nD. 对象之间的转换要求基类和派生类之间存在具有公有访问级别的继承关系。\n\n11 下列关于数据成员的说法，不正确的是( )\nA. 所有对象共享同一个静态成员变量的副本\nB. protected成员可以在类的内部但不可以在派生类中访问\nC. this是指向当前对象的指针，它可以被用来引用对象的成员变量\nD. 普通的成员函数可以直接访问类中的静态数据成员\n\n12 联函数的描述，正确的是( ) \nA. 内联函数可以提高程序效率\nB. 内联函数的调用过程与普通函数一样\nC. 只要用 inline 关键字声明的函数都是内联函数\nD. 全局函数不能声明为内联函数\n\n\n\n\n\n\n\n13 下面是关于派生类析构函数的执行顺序的叙述：①执行派生类自身的析构函数，即派生类中定义的析构函数。②执行基类的析构函数，按照继承关系从派生类的直接基类到最顶层的基类逐层执行。③如果派生类中存在虚基类，那么在基类析构函数执行完毕后，会执行派生类中虚基类的析构函数。上述执行步骤的正确排序是( )\nA. ①②③ B. ②①③ C. ③②① D. ②③①\n\n14 相较于C，以下哪种方式是C++特有的内存分配方式\nA. new 操作符\nB. delete 操作符\nC. malloc 函数\nD. free 函数\n\n\n15在 C++ 中，以下哪种运算符具有最高的优先级（）C\nA. &&\nB. !\nC. *\nD. /\n\n16在C++中，以下哪个标准库头文件用于输入和输出操作？\nA. iostream\nB. vector\nC. string\nD. algorithm\n\n17 下列关于抽象类描述不正确的是( )\nA. 抽象类不能定义对象\nB. 其派生类没有定义纯虚函数，则仍是抽象类。”\nC. 其派生类定义所有纯虚函数，则是具体类\nD. 不能定义指向抽象类的指针变量\n\n18 下面关于友元函数和友元类的叙述中，错误的是( )\nA. 如果在类A中把类B的某个函数声明为自己的友元函数，那么在类A的定义之前一定要有类B的完整定义\nB. 如果在类A中把类B声明为自己的友元类，那么在类A的定义之前可以仅有类B的前向声明，而不必有类B的完整定义\nC. 如果将类B声明为类A的友元，那么类A也就成为类B的友元\nD. 如果将类B声明为类A的友元，那么类B中的函数可以访问类A的全部成员\n\n\n\n\n19 在C++中，以下哪个操作符用于在条件语句中同时执行两个条件的逻辑与操作（）\nA. &&\nB. ||\nC. !\nD. &\n\n\n20关于this指针的用途下列说法错误的是（）\nA.在成员函数中访问成员变量：通过this指针，可以访问到对象的成员变量，这样可以避免与局部变量或参数重名的冲突\nB.this指针是一个指向对象的指针，因此可以对其进行解引用操作来访问对象的成员变量和成员函数\nC.this指针不允许进行链式调用\nD.在静态成员函数中不能使用this指针，因为静态成员函数是与类本身关联的，而不是与类的实例关联的\n\n21 于虚函数的描述中，错误的是()\nA.C++中的虚函数是一种特殊的成员函数，用于实现继承\nB.通过使用虚函数，可以在基类中定义通用的接口，然后在派生类中根据需要进行重写\nC.在派生类中，可以选择性地重写虚函数\nD.虚函数还可以声明为纯虚函数，在基类中只给出函数原型，而没有函数体\n\n\n22 （多选）this指针存在的目的是（ ）\nA.在C++中，this是一个特殊的指针，用于在类的成员函数中指向当前对象的指针\nB.this指针指向调用成员函数的对象本身，可以通过this指针访问对象的成员变量和成员函数\nC.this指针是一个隐藏的参数，在每个成员函数的内部都可以访问该指针\nD.当需要访问成员变量或调用其他成员函数时，默认会通过this指针来实现\n\n23 下面对静态数据成员的描述中，错误的是( )\nA.在C++中，静态成员函数（Static Member Function）是与类的实例对象相关联的函数，而不是与类相关联\nB.静态成员函数与类的静态数据成员相关联，它们共享相同的内存空间\nC.静态成员函数可以访问和修改类的静态数据成员，但不能访问非静态的成员变量和成员函数\nD.由于静态成员函数没有隐式的this指针，因此无法访问非静态成员变量，也无法调用非静态成员函数\n\n\n\n24 下面对友元函数的描述中正确的是 ( ) \nA.友元函数（Friend Function）是一种特殊类型的函数，允许函数访问其它类的私有成员或保护成员\nB.友元函数只可以定义在类的内部\nC.友元函数不能继承，因此子类不能继承父类的友元函数\nD.友元函数也不能被重载\n\n25 关于拷贝构造函数下列说法错误的是( ) \nA.拷贝构造函数可以有多个参数\nB.将对象作为函数返回值时，构造函数可能会被隐式调用\nC.用一个对象初始化另一个对象，构造函数可能会被隐式调用\nD.将对象作为函数参数传递给函数，构造函数可能会被隐式调用\n\n26 带默认参数的函数原型声明若有：void fun(int a,int b=7,char z=’’);下面函数调用中，不合法的是( )\nA. fun(1); B. fun(1,2);\nC. fun( ); D. fun(1,2,‘a’);\n\n\n27 下面有关重载函数的说法中正确的是( ) \n1.函数名称相同 2.函数参数列表不同 3.函数返回类型可以相同也可以不同 \n4.函数重载无法用于非成员函数\nA.123\nB.134\nC.234\nD.124\n\n28 下面有关重载函数的说法中，错误的是( ) \nA.在C++中，函数重载（Function Overloading）是指在同一作用域内定义具有相同名称但参数列表不同的多个函数。\nB.函数重载可以让程序员使用相同的函数名来表示不同的操作或功能，提高了代码的可读性和灵活性\nC.函数重载的实现原理是根据函数的参数列表来区分不同的函数。\nD.当调用一个重载函数时，编译器无法根据实际参数的类型和个数，自动匹配并调用对应的重载函数。\n\n29下列关于多继承二义性的描述中，错误的是 ( ) \nA.在C++中，多继承是允许一个类从多个基类派生的特性\nB.在C++中，可以使用作用域限定符来指定要调用的成员函数所属的基类\nC.虚继承是一种继承方式，可以用于解决由多条继承路径引起的二义性问题\nD.多继承二义性是多继承的一个潜在问题，但无法通过作用域限定符和虚继承来解决\n\n\n30 下列有关C++类的说法中，不正确的是( ) \nA.类可以包含成员变量和成员函数，用于描述对象的属性和行为\nB.类中的成员变量（也称为数据成员）用于表示对象的状态或属性\nC.在类中，如果不做特别说明，所有成员的访问权限均为私有的\nD.类是一种用户自定义的数据类型，用于封装数据和相关的操作",
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/cpp-test-source/source.docx"
          }
        ]
      }
    ]
  },
  {
    "id": "python-test-source",
    "category": "量化策略",
    "topic": "备考资料",
    "company": "通用参考资料",
    "type": "参考资料",
    "round": "资料汇编",
    "date": "未记录日期",
    "time": "",
    "title": "Python 测试题资料",
    "summary": "完整保留来源资料；仅用于阅读，不计入核心复习进度。",
    "tags": [
      "参考题",
      "Python"
    ],
    "trackProgress": false,
    "sourceFiles": [
      "4套测试题_改-240219/python_改.docx"
    ],
    "sections": [
      {
        "title": "完整题面",
        "transcript": "Python\n1、关于 Python 的数字类型，以下选项中描述错误的是\nA.Python 整数类型提供了 4 种进制表示：十进制、二进制、八进制和十六进制\nB.Python 语言要求所有浮点数必须带有小数部分\nC.Python 语言中，复数类型中实数部分和虚数部分的数值都是浮点类型，复数的虚数部分通过后缀“C”或者“c”来表示\nD.Python 语言提供 int、float、complex 等数字类型\n\n\n2、执行如下代码：\nimport timeprint(time.time())\n以下选项中描述错误的是\nA.time 库是 Python 的标准库  \nB.可使用 time.ctime()，显示为更可读的形式  \nC.print(time.time())  #可以获取当前时间戳  \nD.时间戳是指从计算机元年到现在经过的秒数。\n计算机元年是指1970年1月1日0时0分0秒。\n另外在python中时间戳表示为毫秒数，在java中表示为秒数。\n\n\n3、关于Python文件处理，以下选项中描述错误的是\nA.Python能处理JPG图像文件\nB.Python不可以处理PDF文件\nC.Python能处理CSV文件\nD.Python能处理Pickle文件\n\n\n4、在Python3中，下列程序运行结果为：\ndicts = {}\ndicts[(4, 3)] = ({2, (1, 5)})\nprint(dicts)\nA、报错\nB、{(4,3):{2,(1,5)}}\nC、{(4,3):[2,(1,5)]}\nD、{(4,3):[1,2,5]}\n\n\n5、 team=['agg','bjj','cgg']存在该示例，则：\n错误的是？（ ）                                                         \nA． team[-1]\nB． team[-2]\nC． team[0]\nD． team[3]\n\n\n6、 有两个numpy数组x和y，假设他们符合线性代数的乘法规则，则它们相乘的符号是\nA. x.dot(y) B. x * y C. x**y D. x.y   \n\n\n7、 Python语句’-’.join(list(‘hello!’))执行的结果是\nA. ‘-hello!’ B. ‘hello!-’ C. ‘h-e-l-l-o-!’ D. ‘hello!’\n\n\n8、表达式 ‘pgg’ in [‘pggxylwsdhjtojj’] 的值为   \nA. True B. False C. 1 D. 0\n\n\n9、 可用来获取网页内容的Python第三方库是：\n‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬‬\nA: sys  B: requests  C: sqlalchemy   D: SciPy    \n\n\n\n10、在Python3中，下列程序结果为：\ndicts = {'apple': 1, 'banana': 2, 'cheese': 3}        \nprint(dicts.pop())\n1\n2\nA、{‘cheese’: 3}\nB、报错\nC、3\nD、(‘cheese’: 3)\n\n\n11、\na = 50\nb = 7\nprint(divmod(a, b))\nA、(7, 0)\nB、[7, 1]\nC、(7, 1)\nD、NonE、\n\n\n12、在Python3中，下列程序运行结果为：\ndicts = {}\ndicts[(4,[3])]=({(1,5),2})\nprint(dicts)\nA、报错\nB、{(4, 3): {(1, 5), 2}}\nC、{(4, 3): [(1, 5), 2]}\nD、{(4, 3): [1, 2, 5]}\n\n\n13、下列说法错误的是  \nA、变量不必事先声明 B、算法的复杂度主要包括时间复杂度和数据复杂度\nC、变量无须指定类型 D、算法具有可行性、确定性、有穷性的基本特征\n\n\n14、关于Python中的复数，下列说法错误的是  \nA、lambda用于定义简单的、能够在一行内表示的函数 B、f = lambda x,y:x+y 执行后，f的类型为数字类型\nC、虚部必须后缀j，且必须是小写\n D、方法conjugate返回复数的共轭复数\n\n\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t15、x=2.61785436 print(round(x,2) ,round(x))\nA.3 2.31\nB.2 2\nC.2.62 3\nD.3.14 3\n\n\n16、下面代码的输出结果是\nfor J in \"OjjPjjXjj\":\n    if J==\"X\":\n        break\n    print(J, end=\"\")\nA.Xjj\nB.O\nC.OjjPjj\nD.OjjPjjXjj\n\n\n17、在Python3中，运行结果为：\nfor i in range(10, 1, -2):    \n    print(i)\nA、9，7，5，3，1\nB、10，8，6，4，2\nC、1，3，5，7，9\nD、2, 4, 6, 8, 10\n\n\n18、下面       是合法变量名。\nA）\ttrue\t\t\t\tB）\tbreak             \nC）\t1one\t\t\tD) \tlast name\n\n\n19、下面       不是合法的整数数字。\nA） 3e2\t\tB)\t0x2e\t\nC)\t0b1101\t\t\tC) \t0o27      \n\n\n20、在常见格式符中       是输出字符串。\nA）\t%s\t\t\t\tB)  %d\nC）\t%c\t\t\t\tD）\t%e  \n\n21、下面        一定是字符串。\nA）\tstr(782)\t\tB)\t14527                                            \nC)\tint(1.7782)\t\tD)\t3.575\n\n22、下面        是换行符。\nA）\t\\n\t\t\t\tB) \t\\b                   \nC)\t\\t\t\t\t\tD)\t\\\\\n\n\n23、a = \" bjrxts\", 能够显示输出bjrxts 的选项是：\nA）print(a[0:-1])\nB）print(a[-1:0])\nC）print(a[:6])\nD）print(a[:])\n\n\n24、关于random库，以下选项中描述错误的是\nA）设定相同种子，每次调用随机函数生成的随机数相同\nB）random.shuffle(a)将序列a中的元素顺序打乱\nC ）random.randint(1,10) 产生一个1-10整数型随机数（包含1，不含10）\nD）生成随机数之前不是必须要指定随机数种子\n\n\n25、print(\"%f\" %3.1415926) 输出的值为        。                   \nA）3.141593              \t\tB）3.1415926\nC）3.141592\t\t\tD）3\n\n26、print(\"%03.f\" %3.1415926) 输出的值为        。             \nA）03.1415926\t\tB）03.3.1415926\nC）3.1415926\t\tD）       003\n\n27、print(\"%6.3f\" %3.1415926) 输出的值为        。                 \nA）3.141593\t\tB） 3.142         \nC)3.1415926        D） 3.1415\n\n28、print(\"string=%7.2s\" %‘hello’) 输出的值为        。\nA）     he\t\tB）hello                               \nC）he\t\t\tD）  hello\n\n\n29、[17,255,333] + [369,111,687] 结果是\n\n\nA:[17, 255, 333, 369, 111, 687]\nB:[17,255,333][17,255,333]\nC:[386,366,1020]\nD:报错\n\n\n30、From a import *的作用是\nA:导入一个文件夹，代表相对路径\nB:导入某模块所有函数，相对路径\nC:导入某模块所有函数，绝对路径D:以上都错误",
        "links": [
          {
            "label": "下载原始题面 / 资料",
            "path": "interview-sources/python-test-source/source.docx"
          }
        ]
      }
    ]
  },
  {
    "id": "collected-qr-study-source",
    "category": "量化策略",
    "topic": "备考资料",
    "company": "通用参考资料",
    "type": "参考资料",
    "round": "资料汇编",
    "date": "未记录日期",
    "time": "",
    "title": "量化研究 QR 参考题资料",
    "summary": "完整保留来源资料；仅用于阅读，不计入核心复习进度。",
    "tags": [
      "量化研究",
      "概率统计",
      "参考题"
    ],
    "trackProgress": false,
    "sourceFiles": [
      "面经.xlsx / QR"
    ],
    "sections": [
      {
        "title": "QR · 第 1 行",
        "transcript": "Top Global Quant Hedge Fund QR 面试真题"
      },
      {
        "title": "QR · 第 2 行",
        "transcript": "做一个游戏，给 n 个随机变量，x1,x2,... xn i.i.d., uniformly distributed~(0,1). 依次猜测每个 xi在n 个变量中的大小排名 (从x1到xn),如果全部猜对则获得胜利。问你的best strategy 和采用这种 strategy 取胜的概率。"
      },
      {
        "title": "QR · 第 3 行",
        "transcript": "how to use biased coin to play a fair game, suppose p is near to 0.99。worse case number\nof tosses 最小的办法。\n（from citadel等多家）"
      },
      {
        "title": "QR · 第 4 行",
        "transcript": "A是 N*N 矩阵，每个 entry 都是1或 0，AxA 是zero matrix,问A里最多多少个 1。\nanswer：N的平方整除4"
      },
      {
        "title": "QR · 第 5 行",
        "transcript": "正整数 x,y,z ,满足 x+y+z=N,x<=y<=z.f(N)为满足这些条件的(x,y,z)个数问lim f(N)/N^2 as N->inf\nanswer：1/12"
      },
      {
        "title": "QR · 第 6 行",
        "transcript": "Given E[X], E(max(0, X)]，E[min(0,X )], write a formula for E[f(X)] for a C^2 function f. What\ndoes this represent (in terms of stocks, options, futures)?"
      },
      {
        "title": "QR · 第 7 行",
        "transcript": "N 只球队两两比赛，赢的队伍得 2 分，输的得0分，如果打平则各得 1分。已知所有队伍积分的一半都是从未尾 10 支队伍上赢来的。那么 N 是多少。"
      },
      {
        "title": "QR · 第 8 行",
        "transcript": "N个相同的桶，m 个不同的球，有多少种方法 distribute m balls in N 桶? Follow up: 如果每个桶至少要有 k 球呢? "
      },
      {
        "title": "QR · 第 9 行",
        "transcript": "K dollars in a black box. You write a number x, and Jack also writes a number y. Both don't know what each other writes. lf x+y<=K, you win x and Jack wins y. if x+y>K, both win 0\n1）One box, K=100. If Jack is rational, what should you write.\n2）Follow up: ten boxes, five of which have 50 inside, and another five have 40 inside. lf Jack is rational. what should you write.\n3）Follow up: one box, K=100. Play 1,000 times. lf Jack writes 80 every time, what is your\nstrategy?"
      },
      {
        "title": "QR · 第 10 行",
        "transcript": "从一个数组中找出第二大的数，最少需要进行多少次比较？\n（from Two Sigma等多家）"
      },
      {
        "title": "QR · 第 11 行",
        "transcript": "在球面上任取 5 个点，位于同一个半球的概率是多少?\nA:十六分之十一"
      },
      {
        "title": "QR · 第 12 行",
        "transcript": "There are N people arriving between 9 a.m. and 10 a.m.. Each waits for 15 minutes after\narrival. What is the probability that they meet each other given their arrival time is uniformly distributed.\n（from国内百亿TOP-佳期）\n思路：求uniform distribution的range，应该是一个beta(N-1,2) 然后就是求beta(N-1,2)比0.25小的概率"
      },
      {
        "title": "QR · 第 13 行",
        "transcript": "Draw N (N ≥ 3) i.i.d. points uniformly from interval [0, 1]. Define the neighbor of a pointas the closest point to it (excluding itself ). if the neighbor of its neighbor is the point itself, we call this point a good point. The expectation of the number of good points is f(N).What is f(N) in general? Please write down your proof.\n（from 佳期）\nA:是2N/3？N很大的时候相邻点的距离应该是波动状变化，这样每三个点差不多两个点是good points."
      },
      {
        "title": "QR · 第 14 行",
        "transcript": "Expected arc length between two points on the unit sphere.\nA:pi/2"
      },
      {
        "title": "QR · 第 15 行",
        "transcript": "Three frogs are jumping on the vertices of an equilateral triangle. A vertex can be occupied by more than one frog. Every minute, each frog jumps from the vertex where it is located to one of the other two vertices, each being equal likely. The frogs choose where to jump independently of each other. if initially each vertex contains exactly one frog, how long does it take on average for all the frogs to meet at thesame vertex?\nA:12"
      },
      {
        "title": "QR · 第 16 行",
        "transcript": "The numbers x1, x2, x3, ... are chosen uniformly at random from [0, 1] and independently from each other as long as they follow the pattern x1>x2, x2<x3, x3>x4,x4<x5, ... How many numbers on average can be chosen before the pattern is broken?\nA:1+sin1"
      },
      {
        "title": "QR · 第 17 行",
        "transcript": "What's the variance of det(A), where A is an n*n matrix whose entries are chosen from {-1. 1} independently at random?\n用定义展开就是n!"
      },
      {
        "title": "QR · 第 18 行",
        "transcript": "Two boxes, A and B contain n balls each. in each step, you randomly choose a box andthen draw one ball from it. Repeat this until the box you choose actually turns out to be empty. What's the expected number of remaining balls in the other box at the end of this process?"
      },
      {
        "title": "QR · 第 19 行",
        "transcript": "Asymmetry random walk. 对于一个起点为1的一维非对称随机游走，仅在原点处有一个吸收壁，求该随机游走被 0 处的吸收壁吸收时走过步数的数学期望"
      },
      {
        "title": "QR · 第 20 行",
        "transcript": "有N个点均匀随机分布在半径为 1的单位球中,设它们距离球心的距离为 d1,d2,…,dN。\n设 D =min(d1,d2,...,dN)，求 D 的中位数。\n（from RT投资，也许是锐天？）"
      },
      {
        "title": "QR · 第 21 行",
        "transcript": "if n is a random positive integer, what is the probability that 2^n starts with the digit 1?"
      },
      {
        "title": "QR · 第 22 行",
        "transcript": "约瑟夫问题及变形。\n（1）N个人围成一圈，顺时针给大家编号，第一个人编号为1，然后顺时针开始报数，报M的将被杀掉，下一个人接着从1开始报。如此反复，最后剩下一个人，求最后胜利者的编号。\n（2）N个人围坐一圈，顺时针给大家编号，第一个人编号为1，然后顺时针开始报数。第一轮依次报1，2，1，2...没报1的人出局。接着第二轮再从上一轮最后一 个报数的人开始依次报1，2，3，1，2，3...没报1的人都出局。如此反复，最后剩下一个人，求最后胜利者的编号。\n（来自国内某top4百亿笔试）"
      },
      {
        "title": "QR · 第 23 行",
        "transcript": "扔硬币的鞅解法。\n（1）一只猴子每秒钟等概率敲击键盘上的26个小写字母，求敲出quantresearcher需要的时间的期望。\n（2）假设一枚不公平硬币正面概率1/3，反面概率2/3，不断扔硬币求直到出现HHTHHTTTHH时需要的抛掷次数的期望。"
      },
      {
        "title": "QR · 第 24 行",
        "transcript": "扔一个长为1的针到1*1网格中。问这根针和网格线相交两次的概率。（来自国内某非百亿笔试）"
      },
      {
        "title": "QR · 第 25 行",
        "transcript": "因子合成。\n（1）已知预测目标为y，因子x1的IC是a（即corr(x1, y) = a），因子x2的IC是b，corr（x1, x2）=ρ。x3是x1和x2的线性组合即（x3=mx1+nx2），求x3的IC的最大值（a,b均＞0）。有什么intuition？\n（2）假如ρ是未知的，其他条件不变，请用a,b表示ρ的取值范围。有什么intuition？\n（来自国内某top4百亿笔试）"
      },
      {
        "title": "QR · 第 26 行",
        "transcript": "（来自国内某高频自营）\n1. 已知正态分布的随机变量X均值为0，取5个sample，怎么估算variance\n2. 正态分布的随机变量X均值未知，取5个sample，怎么估算variance\n3. 标准正态分布的iid随机变量X，Y，取1000000个sample pair，问在X+Y<0的pair里，X和Y的correlation是大于0，小于0还是等于0\n4. 标准正态分布的iid随机变量X，Y，取1000000个sample pair，问在X+Y>0的pair里，X和Y的correlation是大于0，小于0还是等于0\n5. 标准正态分布的iid随机变量X，Y，取1000000个pair，问X和Y的correlation的variance"
      },
      {
        "title": "QR · 第 27 行",
        "transcript": "Prove or disprove：A is a Hermian matrix，A^5+A^3+A=3I has a unique solution A=I.\n（from Jump trading）"
      },
      {
        "title": "QR · 第 28 行",
        "transcript": "（1）A^2=I，找到所有的A。\n（2）A^n=I，问A是否可对角化。\n（from Akuna Capital）"
      },
      {
        "title": "QR · 第 29 行",
        "transcript": "设correlation matrix A是正定矩阵，求A^-1的特征值的和的范围。\n（来自国内某top百亿-衍复笔试）"
      },
      {
        "title": "QR · 第 30 行",
        "transcript": "矩阵A和B是实对称矩阵，A的特征值位于区间[a, b]，B的特征值位于区间[c, d]，请给出A+B的特征值的取值范围并证明。\n（来自国内某top百亿笔试-衍复）"
      },
      {
        "title": "QR · 第 31 行",
        "transcript": "linear regression，一开始有feature X1，y=β1*X1+b1，之后加入feature X2，重新训练得y=β1*X1+β2*X2+b2，问β1的variance变大or变小。\n（from Akuna Capital）"
      },
      {
        "title": "QR · 第 32 行",
        "transcript": "给定下列两种线性回归：\n（1）y～x1和x2，得到R方；\n（2）先y～x1得到beta1和残差residual，再residual～x2得到beta2，利用分开计算的beta1/2计算R方。哪一种方法得到的R2更大？\n（来自国内某非百亿面试）"
      },
      {
        "title": "QR · 第 33 行",
        "transcript": "When is median regression better than OLS? lf median regression is so good, why would we still use OLS?"
      },
      {
        "title": "QR · 第 34 行",
        "transcript": "（1）For OLS，如果两个变量的相关性是 0.999，这两个变量的回归系数会如何? 如果是Lasso 和 Ridge 分别会如何，实践中如何选择保留哪个变量?\n（2）For OLS，如果给加上噪声会怎么样，分别从直观感受和推导上说。"
      },
      {
        "title": "QR · 第 35 行",
        "transcript": "How to use a blackbox that can do vanilla regression to do Ridge regression?"
      },
      {
        "title": "QR · 第 36 行",
        "transcript": "Regularized Linear Regression\n(1) Does Elastic Net have dense solution or sparse solution? Why?\n(2) Does Lasso have unique solution? How about Elastic Net?\n(3) Please compare Lasso v.s. Elastic Net and state their (dis)advantages, respectively.\n(4) When we should use Lasso or Ridge or Elastic Net or stepwise?"
      },
      {
        "title": "QR · 第 37 行",
        "transcript": "（from citadel）\n（1）X-N(0, 1), Y-N(0, 4), flip a fair coin and set Z = X if head else Z = Y. what is pdf and cdf of Z?\n（2）P(X=1) = P(X=-1) = 1/2, Z-N(0, 1) and they are independent. Let Y = XZ. Is Y-N(0, 1)? ls Y+Z normal? Does (Y. Z) have joint normal density?"
      },
      {
        "title": "QR · 第 38 行",
        "transcript": "Let X1-U(0,1),X2-U(X1,1), X3-U(x2,1),.., Xn-U(Xn-1, 1).\n(1) Find the pdf of Xn\n(2) Find lim(n->infinity) E[X1*X2*…*Xn]\nA1:好像是 （-1）^（n-1）*(ln（1-x）)^(n-1)/(n-1)!\nA2:设一个函数f(x)代表X_1～U(x,1)时候的极限，用conditional expectation作用在X_1上可以得到一个微分方程，算出来貌似是1/e"
      },
      {
        "title": "QR · 第 39 行",
        "transcript": "X, Y, Z iid U(0, 1) Find the distribution of (XY)^Z"
      },
      {
        "title": "QR · 第 40 行",
        "transcript": "1. 一个长为L的匀质细木棍，你把木棍上的一点固定在空间里。这根木棍可以绕这个点做无摩擦转动。把这根木棍从水平状态从静止释放，这根木棍就会在重力作用下向下摆动。要想让这跟木棍用最短时间第一次下摆到竖直状态，那么固定点应该距离木棍的中点多远？\n（来自国内某高频自营笔试）"
      },
      {
        "title": "QR · 第 41 行",
        "transcript": "2. 假设x是一个季频因子，y是未来3个月的股票收益率；现在把x按月度向下填充（即假设在3个月里x每个月都不变），y则使用月度收益率。对比这两个线性回归，x的回归系数显著性有什么区别？（来自国内某top百亿面试）"
      },
      {
        "title": "QR · 第 42 行",
        "transcript": "3. n个人占n个座位，每个人进去了以后随机选座，但是不能选已经被占的座位的相邻座位，what's the expected number of occupied seats in the end? \n（from SquarePoint）"
      },
      {
        "title": "QR · 第 43 行",
        "transcript": "4. Bt is standard Brownian motion. B(0)= 0, find E[B(t)|B(1)=c]. \n（from Citadel）"
      },
      {
        "title": "QR · 第 44 行",
        "transcript": "散题：\n1. n个台阶，每次move能向上走1个或多个，问一共有多少种不同走法\n2. 接上题，如果要求move的总次数是奇数，问一共有多少种不同走法\n3. X_1~N(0,\\sigma_1^2), X_2~N(0,\\sigma_2^2), 求X_1|X_1+X_2的分布\n4. 三个独立均匀分布[0,3]的随机变量，问median在1到2之间的概率\n5. 单位球上随机一点，求第一坐标的variance\n6. 单位圆内一点，求到圆心的期望距离\n7. 52张牌，每次取最上面一张插入到牌堆中，问原牌堆最下面一张牌出现在最上面时取牌的平均次数"
      },
      {
        "title": "QR · 第 45 行",
        "transcript": "1 V and W 是两个四维的subspaces of a 七维空间X，问V与W交集是否为空\n2 Joint dist of (x,y) is f(x,y) = x^2y^2 + 2xy, 问P(y <x)\n3 给你三个未知数xyz的三个等式，问是否有解无解还是无穷解（简单的线性代数）\n4 X 与 Y是iid 正太分布，问（X+Y）与（X-Y）是否独立\n（from Akuna）"
      },
      {
        "title": "QR · 第 46 行",
        "transcript": "1 在一个边长为的正方形四个顶点有四只妈蚁，接下来四只妈蚁会以相同的速度朝着它逆时针的下一只妈蚁爬去，最后四只蚂蚁相聚在正方形的中心，问每只妈蚁爬行的距离是\n2 假定n个人把帽子扔在一起，随机抽，问每个人都没有拿到自己帽子的概率在n趋于无穷时，是多少\n3 一个盒子里有两枚硬币，一枚两面都是正面，一枚一面正一面反，现在随机从两枚硬币中抽取一枚并掷硬币，结果发现正面朝上，问另外一面也是正面的概率是.\n4 你有三个不同类型的铲子，分别能铲6、9和20个石子，现在假设你可以重复使用这些铲子，问最多多少个石子你无法用这三个铲子铲出来\n（from PFH-国内某top量化私募）"
      }
    ]
  },
  {
    "id": "collected-qt-study-source",
    "category": "量化策略",
    "topic": "备考资料",
    "company": "通用参考资料",
    "type": "参考资料",
    "round": "资料汇编",
    "date": "未记录日期",
    "time": "",
    "title": "量化交易 QT 参考题资料",
    "summary": "完整保留来源资料；仅用于阅读，不计入核心复习进度。",
    "tags": [
      "量化研究",
      "概率统计",
      "参考题"
    ],
    "trackProgress": false,
    "sourceFiles": [
      "面经.xlsx / QT"
    ],
    "sections": [
      {
        "title": "QT · 第 1 行",
        "transcript": "1. 一个数所有数位乘积10000，这个数最小是多少，最大是多少？\n#JaneStreet"
      },
      {
        "title": "QT · 第 2 行",
        "transcript": "2. 周六有20%几率下雨，周日有30%，如果相互独立至少一天下雨几率是多少。如果周六下雨使周日更有可能下雨，这个几率会上升还是下降。如果不知道是否相互独立，至少一天下雨的几率的范围"
      },
      {
        "title": "QT · 第 3 行",
        "transcript": "3. 箱子里四个蓝球三个红球，取出不放回，摸到红球扣1块，摸到蓝球加1块，最佳策略是什么，预期收益是什么？"
      },
      {
        "title": "QT · 第 4 行",
        "transcript": "4. 比较以下三个expectation的大小：\n(1) 扔一次骰子，扔出的值的平方\n(2) 扔两次骰子，两次值的乘积\n(3) 扔五次骰子，中位数的平方"
      },
      {
        "title": "QT · 第 5 行",
        "transcript": "5. 从1-30 中取数，使得取出的数两两互质，然后使得这些数字的和尽可能大。"
      },
      {
        "title": "QT · 第 6 行",
        "transcript": "6. 扔1000个fair coins，500个silver 500个gold，gold正面得3块，silver正面得1块，问如果已知得了1100块，expected number of gold coins with heads up是多少？"
      },
      {
        "title": "QT · 第 7 行",
        "transcript": "7. 你和对手bid一个箱子，箱子里的钱等于扔200次硬币正面朝上的数量，出价最高者赢得箱子里的所有钱，如果你和一个或以上对手都是最高出价的时候你能赢得箱子里的钱（出价必须是整数）\n(1) 和一群普通人玩出价多少maximize profit\n(2) 和一群math major玩出价多少\n(3) 和一个绝对rational, 希望maximize profit的对手玩出价多少\n(4) 和一个从0-100随机出价的对手玩出价多少\n(5) 和一个从0-200随机出价的对手玩出价多少\n(6) 你和一个绝对rational的对手玩，但可以告诉对手你有关你的bid的information（must be true），请问你说什么能提升你的预期收益\n(7) 你和一个绝对rational的对手玩，他知道前10次扔硬币的结果，你应该出价多少？"
      },
      {
        "title": "QT · 第 8 行",
        "transcript": "1. 扔骰子，6个数字全部出现时扔到次数的期望。两个骰子，积是完全平方数的概率"
      },
      {
        "title": "QT · 第 9 行",
        "transcript": "2. 4个硬币，2个正面的概率，偶数个正面的概率"
      },
      {
        "title": "QT · 第 10 行",
        "transcript": "3. 各个数位之积是96的最小的整数是什么"
      },
      {
        "title": "QT · 第 11 行",
        "transcript": "4. 四个硬币，偶数面朝上概率；九个硬币，偶数面朝上的概率；奇数个硬币，偶数面朝上的概率；偶数个硬币，偶数面朝上的概率"
      },
      {
        "title": "QT · 第 12 行",
        "transcript": "5. 三个六面骰子和一个20面骰子比点数。是不是公平游戏"
      },
      {
        "title": "QT · 第 13 行",
        "transcript": "6. 今天起第一个8位数字均不同的日期？(YYYY:MM:DD)\n100面骰子，每摇一次可以获得摇到数字的钱/付一块钱继续摇，期望？\n改成1000面会怎么样？比100面时期望的10倍大还是小？\n改成10个10面的骰子会怎么样？期望的区间？"
      },
      {
        "title": "QT · 第 14 行",
        "transcript": "7. 两个骰子随机扔，你能看到一个的点数，你对手能看到另一个，盒子里放着点数之和的钱。轮流出价买这个盒子，谁先出价更好？你知道自己能看到的点数后最优出价策略是什么？"
      },
      {
        "title": "QT · 第 15 行",
        "transcript": "8. 4名选手各扔一次30边的骰子（fair），四个数均不相同，四个数中最大的和最小的组成一队，第二的和第三的组成一对，点数平均值小的队为loser，loser需给winner winner点数平均值的钱作为payoff。你作为第一个扔的人，最想拿到的数是什么？"
      },
      {
        "title": "QT · 第 16 行",
        "transcript": "9. 不停的扔一个筛子，你的payoff是扔到点数的cumulative sum，但当sum为完全平方数的时候，你输了。你可以随时停止游戏并拿走数目为sum的钱，现在你的点数为35，请问你想继续玩吗？"
      }
    ]
  },
  {
    "id": "transformers-test-source",
    "category": "量化策略",
    "topic": "备考资料",
    "company": "通用参考资料",
    "type": "参考资料",
    "round": "资料汇编",
    "date": "未记录日期",
    "time": "",
    "title": "量化建模备考 · Transformers 参考题",
    "summary": "源文件未标注公司；作为建模参考资料保存，不认定为某场公司面试，不计入核心复习进度。",
    "tags": [
      "Python",
      "量化建模",
      "参考题"
    ],
    "trackProgress": false,
    "sourceFiles": [
      "4套测试题_改-240219/transformers题目.docx"
    ],
    "sections": [
      {
        "title": "完整原题",
        "transcript": "1.在 Transformer 中，Self-attention 的一个主要问题是它可以分配过多的注意力给输入序列中的某个单词本身，即 Word 和自己的 Attention（Self-attention）。这可能导致模型过度关注单词本身，而忽略了其他相关的上下文信息。为了解决这个问题，可以尝试以下哪些方法（）\n1）引入位置编码（Positional Encoding）  \n2）使用多头注意力机制（Multi-Head Attention）\n3）设置不同的 Query 和 Key 的权重\n4）增加层数和维度                 \nA.2）3）4） B.1）3）4） C.1）2）4） D.1）2）3）4） \n2.Transformer 之所以能够对自然语言处理（NLP）、计算机视觉（CV）等 AI 领域的信息进行有效表示，主要源于以下哪些关键特点和优势（）：\n1）自注意力机制（Self-Attention）  2）并行计算\n3）多头注意力（Multi-Head Attention） 4）位置编码（Positional Encoding）                \n A.1）2）3）4）  B.2）3）4） C.1）3）4） D.1）2）4）\n3.通过 Ground Truth 来训练 Transformer 模型可以帮助模型学习到准确的目标输出，进而提升其泛化能力。以下是几个原因正确的是（）：\n1）提供准确的参考标签  2）减少标签噪声\n3）有效地指导模型训练  4）模型根据 Ground Truth 进行优化                \n A.1）3）4）  B.2）3）4） C.1）2）3）4） D.1）2）4）\n4.在Transformer模型中，Queries、Keys和Values矩阵是通过_（通常是全连接的线性层）从_中的原始表示（通常是词嵌入）得到的。这种线性变换可以使模型学习将原始输入进行投影到更适合于计算attention的表示空间上。_上应填入（）\nA.线性变换，输出序列\nB.线性变换，输入序列\nC.非线性变换，输出序列\nD.非线性变换，输入序列\n5. 在Transformer模型自注意力机制中，用来计算当前位置的注意力分布，指示模型关注哪些位置的信息的是（）\nA.Keys矩阵\nB.Queries矩阵\nC.Values矩阵\n6.Transformer 的 Feed Forward 层在训练的时候到底在训练什么？\nA.线性转换权重\nB.非线性激活函数\nC.线性转换权重和非线性激活函数\n7. 对于Transformer模型的三个主要组件Embeddings层、Attention层和Feedforward层中Attention层的复杂度为（），其中n为序列长度，d为词嵌入的维度，d_model为模型的隐藏表示维度\nA.O(1)\nB.O(n^2 * d)\nC.O(n * d_model^2)\nD.O(n * d^2)\n8.Transformer中的Positional Encoding用于表达序列中元素的相对位置关系,使用了一种特殊的编码方式，称为()\nA.正弦函数编码\nB.正切函数编码\nC.正切余切函数编码\nD.正弦余弦函数编码\n9.在Transformer中有多种Normalization方法，针对Transformer中的自注意力结构具有较好的性能和适用性是（）\nA.Batch Norm\nB.Layer Norm\nC.Instance Norm\nD.正弦余弦函数编码\n10.在Transformer模型中，Decoder和Encoder之间是存在依存关系的，这一关系体现在（）\nA.数据的流动方式上\nB.数据的输出以及数据的流动方式上\nC.数据的输入和输出之间以及数据的流动方式上\nD.数据的输入以及数据的流动方式上\n11.Transformer 中的 Tokenization 的问题有（）\n1）Out-of-vocabulary（OOV）问题  2）Tokenization不一致性问题\n3）长文本处理问题                  \nA.1）2）3） B.1）2） C.2）3） D.1）3） \n12.BERT模型中的[CLS]标记可以捕捉整个句子的表示，但有一些限制（）\n1）多句子输入  2）Fine-tuning效果\n3）长句子输入                 \nA.1）2）3） B.1）2） C.2）3） D.1）3） \n13.使用BPE（Byte-Pair Encoding）进行Tokenization对于Cross-lingual（跨语言）语言模型具有意义是：\n1）处理多语言数据  2）处理稀有词和未登录词\n3）提高模型的适用范围                 \nA.1）2）3） B.1）2） C.2）3） D.1）3） \n14.使用BPE进行Tokenization在跨语言语言模型中也可能遇到一些问题，例如（）\n1）长句子输入  2）BPE分割不一致性\n3）语言边界混淆                 \nA.1）2）3） B.1）2） C.2）3） D.1）3） \n15.使用BPE（Byte-Pair Encoding）进行Tokenization对于Cross-lingual（跨语言）语言模型的改进方法有（）\n1）多语言训练  2）语言标识符 3）控制分割过程                \nA.1）2）3） B.1）2） C.2）3） D.1）3） \n16.处理数据不平衡问题可以采用以下哪些方法来训练出一个相对理想的Transformer模型（）\n1）重采样  2）数据增强 3）类别权重 4）迁移学习 5）稀疏类别训练 6）集成学习                \nA.2）3）4）5）6）     B.1）2）3）4）5）6） \nC.2）3）5）6）        D.3）4）5）6）\n17.采用下列哪些技术，可以提高小样本类别的Transformer分类效果（）\n1）数据增强 2）适当的模型架构 3）微调策略 4）类别平衡策略 5）分层训练练 6）模型集成 7）元学习                \nA.1）2）3）4）5）6）7）     B.1）2）4）6）7） \nC.1）2）4）5）6）7）        D.1）2）3）4）5）7）\n18.在给Transformer输入嵌入时，确实可以使用多个来源的词嵌入来训练模型。这种做法被称为多嵌入（Multi-Embedding）方法。其工程实现机制是（）\n1）词嵌入层设计 2）嵌入向量融合 3）输入向量传递     \nA.1）2）3） B.1）2） C.2）3） D.1）3）\n19.在Transformer模型中，判断神经元（Neuron）相对重要程度的方法有（） \n1）注意力权重 2）梯度 3）激活值    \nA.1）2）3） B.1）2） C.2）3） D.1）3）\n\n20.Transformer模型中的注意力机制被认为相对廉价的主要原因是（）\n1）具有并行计算的能力 2）计算复杂度相对较低    \nA.1）  B.2）  C.1）2）\n21.Transformer的注意力机制相对于RNN系列和卷积神经网络而言，在计算上具有优势有（）\n1）可以实现更高效的并行计算，提高训练速度\n2）具有相对较低的计算复杂度，更适合处理长序列数据\n3）更容易扩展到更大的模型规模，适应不同任务和更复杂的数据结构     \nA.1）2） B.1）3） C.2）3） D.1）2）3）\n22.提升 Transformer 预测速度的方法有（）\n1）注意力机制剪枝\n2）局部注意力机制\n3）压缩Transformer模型     \nA.1）2） B.1）3） C.2）3） D.1）2）3）\n23.BERT模型中使用的预训练任务（）\n1）MLM   2）NSP   3）NLP   \nA.1）2） B.1）3） C.2）3） D.1）2）3）\n24.使用Transformer实现Zero-shot Learning的关键是用（）来实现分类预测\n1）预训练模型   2）嵌入类别   3）计算相似度  \nA.1）2） B.1）3） C.2）3） D.1）2）3）\n25对来自不同训练模型训练出来的Embeddings进行相似度比较的常见的方法（）\n1）余弦相似度   2）正弦余弦相似度   3）欧几里德距离  \nA.1）2） B.1）3） C.2）3） D.1）2）3）\n\n26要使一个小模型（如LSTM）具有类似于大模型（如BERT）的性能和能力的方法有（）\n1）迁移学习   2）模型蒸馏   3）动态路由   4）自适应学习率调整\nA.1）4） B.1）3）4） C.1）2）4） D.1）2）3）4）\n27.BERT 中 MLM 实现中的缺陷有（）\n1）掩码位置信息丢失     2）依赖上下文信息   \n3）稀疏的掩码训练信号   4）对于稀有词的处理\nA.2）3）4） B.1）3）4） C.1）2）4） D.1）2）3）4）\n28.MLM训练过程中，文本中的某些词会被随机掩码，存在一定的噪声。这可能导致模型对于被掩码的词的预测不准确，改进方法有（）\n1）增加数据量     2）使用更高质量的预训练数据   3）优化采样策略\nA.1）2） B.1）3） C.2）3） D.1）2）3）\n29.一个只由一个 Encoder 和 Decoder 组成的 Transformer 模型中，Attention 机制被应用于以下地方（）\n1）Encoder 的 Self-Attention     2）Encoder-Decoder Attention   \n3）Decoder 的 Self-Attention\nA.1）2） B.1）3） C.2）3） D.1）2）3）\n30.减少 Transformer 中训练后的 Word Embeddings 的偏差（bias）的方法有（）\n1）使用预训练的 Word Embeddings     2）随机删除或替换词汇   \n3）引入正则化方法                      4）增加训练迭代次数\nA.1）2）3）4） B.1）2）4） C.1）3）4） D.1）2）3）",
        "links": [
          {
            "label": "下载原始参考题文档",
            "path": "interview-sources/transformers-test-source/source.docx"
          }
        ]
      }
    ]
  },
  {
    "id": "deep-learning-test-source",
    "category": "量化策略",
    "topic": "备考资料",
    "company": "通用参考资料",
    "type": "参考资料",
    "round": "资料汇编",
    "date": "未记录日期",
    "time": "",
    "title": "量化建模备考 · 深度学习参考题",
    "summary": "源文件未标注公司；作为建模参考资料保存，不认定为某场公司面试，不计入核心复习进度。",
    "tags": [
      "Python",
      "量化建模",
      "参考题"
    ],
    "trackProgress": false,
    "sourceFiles": [
      "4套测试题_改-240219/深度学习30题_改.docx"
    ],
    "sections": [
      {
        "title": "完整原题",
        "transcript": "深度学习测试题\n一、单选题（1-20题）\n1、这些图中的哪一个表示sigmoid激活函数？（）\nA.B.\nC.D.\n2、对于隐藏单元，tanh激活通常比sigmoid激活函数更有效，因为其输出的平均值接近于1，因此它可以更好地将数据集中到下一层。\nA.对\nB.不对\n3. 以下哪个选项正确？\nA、卷积神经网络有反馈连接。\nB、增加多层感知机的隐层层数，测试集的分类错误会减小。\nC、卷积神经网络会发生权重共享。\nD、穷举搜索不可以用来更新参数。\n4、正规方程是y，假设您有m=18个训练示例，有n=5个特性（不包括需要另外添加的恒为1的截距项）。对于给定m和n的值，这个方程中,,y的维数分别是多少？\nA.  18×5, y 18×1,  5×5\nB.  18×6, y 18×1,  6×1\nC.  18×5, y 18×1,  5×1\nD.  18×6, y 18×6,  6×6\n5、假设您有一个数据集，每个示例有m=1000000个示例和n=200000个特性。你想用多元线性回归来拟合参数到我们的数据。你更应该用梯度下降还是正规方程？\nA. 梯度下降，因为正规方程中中计算非常慢\nB. 梯度下降，因为它总是收敛到最优\nC. 正规方程，因为它提供了一种直接求解的有效方法\nD. 正规方程，因为梯度下降可能无法找到最优\n6、输入图片为300x300，经过卷积（kernel size 8x8 ,padding 1,stride 2）pooling(kernel size 5x5 ,padding 0,stride 1)之后，输出特征图大小为:\nA．142\nB．143\nC．144\nD．145\n7、下面属于无监督学习的是：\nA．K-means\nB．决策树\nC．SVM\nD．F-RCNN\n8、假设你的输入的维度为128x128x16，单个1x1的卷积过滤器含有多少个参数（包括偏差）？\nA.1\nB.2\nC.17\nD.4097\n9、你有一个64x64x16的输入，并使用步幅为2、过滤器大小为2的最大化池，请问输出是多少？\nA.31x31x16\nB.32x32x8\nC.32x32x16\nD.64x64x8\n10、你有一个16x16x8的输入，并使用“pad = 2”进行填充，填充后的尺寸是多少？\nA.18x18x10\nB.20x20x8\nC.20x20x12\nD.18x18x8\n11、为什么要对输入x进行归一化？\nA.让参数初始化更快\nB.让代价函数更快地优化\nC.更容易做数据可视化\nD.是另一种正则化——有助减少方差\n12、下面哪个选项中哪一项不属于确定性算法？\nA、PCA\nB、K-Means\nC、以上都不是\n13、当你增大正则化的超参数时会发生什么？\nA.重量变大（远离0）\nB.权重变小（接近0）\nC.2倍的导致2倍的权重\n每次迭代，梯度下降采取更大的步距（与成正比）\n14、如果你有10,000个例子，你会如何划分训练/开发/测试集？\nA.33%训练，33%开发，33%测试\nB.60%训练，20%开发，20%测试\nC.98%训练，1%开发，1%测试\n15、开发和测试集应该：\nA.来自同一分布\nB.选择随机分布\nC.完全相同（一样的(x, y)对）\nD.数据数量应该相同\n16、你正在训练一个RNN网络，下列选项中，哪一个是最有可能导致你的权重与激活值都是“NaN”的？\nA.梯度爆炸\nB.梯度消失\nC.ReLU函数作为激活函数g(.)，在计算g(z)时，z的数值过大了\nD.Sigmoid函数作为激活函数g(.)，在计算g(z)时，z的数值过大了\n17、对数损失度量函数不可以取负值：\nA．对\nB．错\n18、下面哪一项对梯度下降（GD）和随机梯度下降（SGD）的描述是正确的？ 1 在 GD 中，每一次迭代需要使用整个训练集或子训练集的数据更新一个参数。 2 在 GD 和SGD 中，每一次迭代都需要遍历训练集中的所有样本以更新一次参数。 3 在 GD 和 SGD 中，每一次迭代中都是更新一组参数以最小化损失函数。\nA.只有 1\nB.只有 3\nC.只有2和3\nD.都正确\n19、LSTM与GRU的一个主要区别在于GRU将LSTM的哪几个gate融合了? \na .forget gate  b. input gate\nc. output gate  d. reset gate\nA.ab  \nB.abc\nC.abcd  \nD.bcd\n20、以下是目标变量在训练集上的13个实际值[0,0,0,0,1,1,1,1,1,1,1,1,1]，目标变量的熵是多少;\nA.-(9/13log(9/13)+4/13log(4/13))\nB. 9/13log(9/13)-4/13log(4/13)\nC. 9/13log(9/13)+4/13log(4/13)\nD. -9/13log(9/13)+4/13log(4/13)\n二、多选题（21-30题）\n21、以下哪些操作防止过拟合？（选出所有正确项）\nA.交叉验证\nB.增加训练数据\nC.Dropout\nD.L3正则化\nE.Xavier初始化\nF.梯度爆炸\nG.L2正则化\n\n\n22、将参数keep_prob增大但都不超过1会导致以下情况（选出所有正确项）：\nA.正则化效应被增强\nB.正则化效应被减弱\nC.模型结构复杂的层取大的keep_prob\nD.模型结构复杂的层取小的keep_prob\nE.训练集的误差会增加\nF.训练集的误差会减小\n\n23、怎么解决神经网络方差较高的问题？\nA.特征工程\nB.获取更多测试数据\nC.增加每个隐藏层的神经元数量\nD.提前终止\nE.用更深的神经网络\n\n24、你正在为苹果，香蕉和橘子制作分类器。 假设您的分类器在训练集上有0.5％的错误，以及开发集上有7％的错误。 以下哪项尝试是有希望改善你的分类器的分类效果的？\nA.增大正则化参数\nB.减小正则化参数\nC.获取更多训练数据\nD.用更大的神经网络\n\n25、以下哪些是“超参数”？(选出所有正确项)\nA.隐藏层规模\nB.神经网络的层数\nC.正则化参数\nD.学习的回合数\nE.学习率\nF.迭代次数\nG.神经元的激活函数\n\n26、假设在一个深度学习网络中，批量梯度下降花费了大量时间时来找到一组参数值，使成本函数小。以下哪些方法可以帮助找到值较小的参数值？\nA.令所有权重值初始化为0\nB.尝试调整学习率\nC.尝试mini-batch梯度下降\nD.尝试对权重进行更好的随机初始化\nE.尝试使用 Adam 算法\n\n27、为什么最好的mini-batch的大小通常不是1也不是m，而是介于两者之间？\nA.如果mini-batch的大小是1，那么在你取得进展前，你需要遍历整个训练集\nB.如果mini-batch的大小是m，就会变成批量梯度下降。在你取得进展前，你需要遍历整个训练集\nC.如果mini-batch的大小是1，那么你将失去mini-batch将数据矢量化带来的的好处\nD.如果mini-batch的大小是m，就会变成随机梯度下降，而这样做经常会比mini-batch慢\n\n28、关于参数共享的下列哪个陈述是正确的？（选出所有正确项）\nA.它减少了参数的总数，从而减少过拟合。\nB.它允许在整个输入值的多个位置使用特征检测器。\nC.它允许为一项任务学习的参数即使对于不同的任务也可以共享（迁移学习）。\nD.它允许梯度下降将许多参数设置为零，从而使得连接稀疏。\nE.减少模型复杂度。\nF.降低模型性能。\n\n29、对于分类问题，我们可以采用哪些损失函数？\nA.均方误差损失函数\nB.交叉熵损失函数\nC.平均绝对误差损失函数。\nD.二元交叉熵损失函数。\nE.Huber Loss。\n\n30、批归一化算法的优点\nA.渐少梯度消失\nB.减少收敛速度\nC.降低训练精度\nD.导致过拟合\nE.减少人为选择参数",
        "links": [
          {
            "label": "下载原始参考题文档",
            "path": "interview-sources/deep-learning-test-source/source.docx"
          }
        ]
      },
      {
        "title": "原题配图",
        "images": [
          {
            "path": "interview-sources/deep-learning-test-source/image-1.jpeg",
            "label": "文档配图 1"
          },
          {
            "path": "interview-sources/deep-learning-test-source/image-2.jpeg",
            "label": "文档配图 2"
          },
          {
            "path": "interview-sources/deep-learning-test-source/image-3.jpeg",
            "label": "文档配图 3"
          },
          {
            "path": "interview-sources/deep-learning-test-source/image-4.jpeg",
            "label": "文档配图 4"
          }
        ]
      }
    ]
  },
  {
    "id": "collected-interview-process-notes",
    "category": "量化策略",
    "topic": "备考资料",
    "company": "通用参考资料",
    "type": "参考资料",
    "round": "资料汇编",
    "date": "未记录日期",
    "time": "",
    "title": "量化公司面试流程备忘",
    "summary": "来自原工作簿的历史资料，不代表当前招聘流程；仅阅读，不计入核心复习。",
    "tags": [
      "面试准备",
      "资料摘录"
    ],
    "trackProgress": false,
    "sourceFiles": [
      "面经.xlsx / Sheet1"
    ],
    "sections": [
      {
        "title": "原工作表 · 第 1 行",
        "transcript": "面试流程：\n蒙玺：投研岗会视情况安排笔试，面试3-4轮，最后一轮现场面试，前几轮线上面试，形式电话、腾讯会议语音或者视频都有可能--面试反馈很慢，3-5天出结果\n平方和：hr面试+笔试（如有需要）+3轮投研面试\n洛书：面试2-3轮左右，团队成员和leader直接和他聊\n诚奇：简历项目-brain teaser（一个是什么什么环/约瑟夫问题，绿皮书原题都回答出了，还有一个Boostrap） --1Hour\nLux：1）流程是初面->笔试->项目测试->终面，反馈很快；约面试盘后时间\n     2）2笔试（主要是编程数学还有逻辑题-难度也不是很大-两个小时左右/需要自己建立腾讯会议链接）\n     3）3项目测试：主要是考察研究分析和文档总结能力，预计需要4-6小时完成，会给2的天时间，在这 2天内完成后发回即可；项目测试通过后就是终面了\n\n4alpha：一轮线上笔试，主要考察python，对应leetcode mid难度\n东北证券：一面候选人纯输出。会被挖很多策略方面的问题-了解候选人最新净值-大概一个小时\n金锝：（葛军）技术1面，不是老板聊，两个小时左右\n易方达：1线上（40min左右）CV-scanning question：如何让看待私募和公募中的工作环境，为什么选择公募？2线上（30min左右）一些统计，编程，机器学习方面的问题-照样CV scanning\n锐天：（CTA）1面大老板面（徐总）-基于简历和做过的策略聊，发送给徐总策略表现 或者（QR）普通CV scanning；二面是股票组的QR-简历和策略方面（1H），反馈时间1周；大概面试3-5轮\n洛书：（QR）讨论简历以及相关业务上的问题+概率论和比较细节的代码的题"
      }
    ]
  },
  {
    "id": "collected-interview-resource-links",
    "category": "量化策略",
    "topic": "备考资料",
    "company": "通用参考资料",
    "type": "参考资料",
    "round": "资料汇编",
    "date": "未记录日期",
    "time": "",
    "title": "量化面试参考链接",
    "summary": "来自原工作簿的历史资料，不代表当前招聘流程；仅阅读，不计入核心复习。",
    "tags": [
      "面试准备",
      "资料摘录"
    ],
    "trackProgress": false,
    "sourceFiles": [
      "面经.xlsx / 真题or其他链接"
    ],
    "sections": [
      {
        "title": "原工作表 · 第 1 行",
        "transcript": "two sigma面试真题网址\n怎么准备国内量化分析师岗位的面试？网址\n量化面试——猜数字（原题来自某知乎量化第一梯队）"
      },
      {
        "title": "原工作表 · 第 2 行",
        "transcript": "https://mp.weixin.qq.com/s/PLxKgZdNvDC2gtO2BjbsEw\nhttps://www.zhihu.com/answer/669217465\nhttps://zhuanlan.zhihu.com/p/89352581"
      },
      {
        "title": "原工作表 · 第 3 行",
        "transcript": "https://mp.weixin.qq.com/s/WSegOZYvkBDNvJ3QO4ygdw"
      },
      {
        "title": "原工作表 · 第 5 行",
        "transcript": "量化面试-马尔可夫链&鞅过程"
      },
      {
        "title": "原工作表 · 第 6 行",
        "transcript": "https://zhuanlan.zhihu.com/p/600026570"
      }
    ]
  }
];
