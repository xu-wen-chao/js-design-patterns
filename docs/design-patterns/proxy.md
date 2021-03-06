# 代理模式

## 参考

[https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/proxy.html#id5](https://design-patterns.readthedocs.io/zh_CN/latest/structural_patterns/proxy.html#id5)

## 定义

给某一个对象提供一个代理，并由代理对象控制对原对象的引用。 通过引入代理对象来间接访问一个对象。
 
## 应用场景

在某些情况下，一个客户不想或者不能直接引用一个对象，此时可以通过一个称之为“代理” 的第三者来实现间接引用。 

代理对象（如下loadImgWithHolder）可以在客户端和目标对象（如下loadImg）之间起到中介的作用， 并且可以通过代理对象去掉客户不能看到的内容和服务或者添加客户需要的额外服务。

在web开发中常见的有虚拟代理（如图片预加载），缓存代理（服务端渲染缓存，请求接口缓存，复杂计算缓存等等）

## 优点

- 代理模式能够协调调用者和被调用者，在一定程度上降低了系统的耦合度。

- 远程代理使得客户端可以访问在远程机器上的对象，远程机器可能具有更好的计算性能与处理速度，可以快速响应并处理客户端请求。

- 虚拟代理通过使用一个小对象来代表一个大对象，可以减少系统资源的消耗，对系统进行优化并提高运行速度。

- 保护代理可以控制对真实对象的使用权限。

## 缺点

- 由于在客户端和真实主题之间增加了代理对象，因此有些类型的代理模式可能会造成请求的处理速度变慢。

- 实现代理模式需要额外的工作，有些代理模式的实现非常复杂。

## 代码实例

<ClientOnly>
  <design-patterns-proxy />
</ClientOnly>

<<< @/docs/design-patterns/js/proxy.js