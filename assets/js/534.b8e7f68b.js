(window.webpackJsonp=window.webpackJsonp||[]).push([[534],{529:function(t,a,e){"use strict";e.r(a);var r=e(2),v=Object(r.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"rocketmq-简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-简介","aria-hidden":"true"}},[t._v("#")]),t._v(" RocketMQ 简介")]),t._v(" "),e("h2",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 概述")]),t._v(" "),e("p",[t._v("消息队列作为高并发系统的核心组件之一，能够帮助业务系统解构提升开发效率和系统稳定性。主要具有以下优势：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("削峰填谷：")]),t._v(" 主要解决瞬时写压力大于应用服务能力导致消息丢失、系统奔溃等问题")]),t._v(" "),e("li",[e("strong",[t._v("系统解耦：")]),t._v(" 解决不同重要程度、不同能力级别系统之间依赖导致一死全死")]),t._v(" "),e("li",[e("strong",[t._v("提升性能：")]),t._v(" 当存在一对多调用时，可以发一条消息给消息系统，让消息系统通知相关系统")]),t._v(" "),e("li",[e("strong",[t._v("蓄流压测：")]),t._v(" 线上有些链路不好压测，可以通过堆积一定量消息再放开来压测")])]),t._v(" "),e("h2",{attrs:{id:"rocketmq"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq","aria-hidden":"true"}},[t._v("#")]),t._v(" RocketMQ")]),t._v(" "),e("p",[t._v("Apache Alibaba RocketMQ 是一个消息中间件。消息中间件中有两个角色：消息生产者和消息消费者。RocketMQ 里同样有这两个概念，消息生产者负责创建消息并发送到 RocketMQ 服务器，RocketMQ 服务器会将消息持久化到磁盘，消息消费者从 RocketMQ 服务器拉取消息并提交给应用消费。")]),t._v(" "),e("h2",{attrs:{id:"rocketmq-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-特点","aria-hidden":"true"}},[t._v("#")]),t._v(" RocketMQ 特点")]),t._v(" "),e("p",[t._v("RocketMQ 是一款分布式、队列模型的消息中间件，具有以下特点：")]),t._v(" "),e("ul",[e("li",[t._v("支持严格的消息顺序")]),t._v(" "),e("li",[t._v("支持 Topic 与 Queue 两种模式")]),t._v(" "),e("li",[t._v("亿级消息堆积能力")]),t._v(" "),e("li",[t._v("比较友好的分布式特性")]),t._v(" "),e("li",[t._v("同时支持 Push 与 Pull 方式消费消息")]),t._v(" "),e("li",[e("strong",[t._v("历经多次天猫双十一海量消息考验")])])]),t._v(" "),e("h2",{attrs:{id:"rocketmq-优势"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rocketmq-优势","aria-hidden":"true"}},[t._v("#")]),t._v(" RocketMQ 优势")]),t._v(" "),e("p",[t._v("目前主流的 MQ 主要是 RocketMQ、kafka、RabbitMQ，其主要优势有：")]),t._v(" "),e("ul",[e("li",[t._v("支持事务型消息（消息发送和 DB 操作保持两方的最终一致性，RabbitMQ 和 Kafka 不支持）")]),t._v(" "),e("li",[t._v("支持结合 RocketMQ 的多个系统之间数据最终一致性（多方事务，二方事务是前提）")]),t._v(" "),e("li",[t._v("支持 18 个级别的延迟消息（RabbitMQ 和 Kafka 不支持）")]),t._v(" "),e("li",[t._v("支持指定次数和时间间隔的失败消息重发（Kafka 不支持，RabbitMQ 需要手动确认）")]),t._v(" "),e("li",[t._v("支持 Consumer 端 Tag 过滤，减少不必要的网络传输（RabbitMQ 和 Kafka 不支持）")]),t._v(" "),e("li",[t._v("支持重复消费（RabbitMQ 不支持，Kafka 支持）")])]),t._v(" "),e("h2",{attrs:{id:"消息队列对比参照表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消息队列对比参照表","aria-hidden":"true"}},[t._v("#")]),t._v(" 消息队列对比参照表")]),t._v(" "),e("p",[e("img",{attrs:{src:"/assets1/12619159-ebd12b24d5ae33d9.png",alt:""}})])])},[],!1,null,null,null);a.default=v.exports}}]);