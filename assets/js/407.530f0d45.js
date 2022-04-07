(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{691:function(a,s,e){"use strict";e.r(s);var t=e(2),r=Object(t.a)({},function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"附：linux-lvm-磁盘扩容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#附：linux-lvm-磁盘扩容","aria-hidden":"true"}},[a._v("#")]),a._v(" 附：Linux LVM 磁盘扩容")]),a._v(" "),e("h2",{attrs:{id:"lvm-的基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lvm-的基本概念","aria-hidden":"true"}},[a._v("#")]),a._v(" LVM 的基本概念")]),a._v(" "),e("h3",{attrs:{id:"物理卷-physical-volume-pv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#物理卷-physical-volume-pv","aria-hidden":"true"}},[a._v("#")]),a._v(" 物理卷 Physical volume (PV)")]),a._v(" "),e("p",[a._v("可以在上面建立卷组的媒介，可以是硬盘分区，也可以是硬盘本身或者回环文件（loopback file）。物理卷包括一个特殊的 header，其余部分被切割为一块块物理区域（physical extents）。")]),a._v(" "),e("h3",{attrs:{id:"卷组-volume-group-vg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#卷组-volume-group-vg","aria-hidden":"true"}},[a._v("#")]),a._v(" 卷组 Volume group (VG)")]),a._v(" "),e("p",[a._v("将一组物理卷收集为一个管理单元。")]),a._v(" "),e("h3",{attrs:{id:"逻辑卷-logical-volume-lv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#逻辑卷-logical-volume-lv","aria-hidden":"true"}},[a._v("#")]),a._v(" 逻辑卷 Logical volume (LV)")]),a._v(" "),e("p",[a._v("虚拟分区，由物理区域（physical extents）组成。")]),a._v(" "),e("h3",{attrs:{id:"物理区域-physical-extent-pe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#物理区域-physical-extent-pe","aria-hidden":"true"}},[a._v("#")]),a._v(" 物理区域 Physical extent (PE)")]),a._v(" "),e("p",[a._v("硬盘可供指派给逻辑卷的最小单位（通常为 4MB）。")]),a._v(" "),e("h2",{attrs:{id:"磁盘操作相关命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#磁盘操作相关命令","aria-hidden":"true"}},[a._v("#")]),a._v(" 磁盘操作相关命令")]),a._v(" "),e("h3",{attrs:{id:"df-h（查看挂载点）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#df-h（查看挂载点）","aria-hidden":"true"}},[a._v("#")]),a._v(" "),e("code",[a._v("df -h")]),a._v("（查看挂载点）")]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310001.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"lvdisplay（显示当前的-logical-volume）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lvdisplay（显示当前的-logical-volume）","aria-hidden":"true"}},[a._v("#")]),a._v(" "),e("code",[a._v("lvdisplay")]),a._v("（显示当前的 logical volume）")]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310002.png",alt:""}})]),a._v(" "),e("p",[e("strong",[a._v("备注：")]),a._v(" 注意这里目前有两个，一个是文件系统所在的 "),e("code",[a._v("volume")]),a._v("，另一个是 "),e("code",[a._v("swap")]),a._v(" 分区使用的 "),e("code",[a._v("volume")]),a._v("，当然，我们需要扩容的是第一个")]),a._v(" "),e("h3",{attrs:{id:"vgdisplay（显示当前的-volume-group）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vgdisplay（显示当前的-volume-group）","aria-hidden":"true"}},[a._v("#")]),a._v(" "),e("code",[a._v("vgdisplay")]),a._v("（显示当前的 volume group）")]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310003.png",alt:""}})]),a._v(" "),e("p",[e("strong",[a._v("备注：")]),a._v(" 注意 "),e("code",[a._v("VG SIZE")]),a._v("，这里应该是你当前的可用空间大小，待扩容完毕，这里显示的应该是最终的大小")]),a._v(" "),e("h3",{attrs:{id:"pvdisplay（显示当前的-physical-volume）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pvdisplay（显示当前的-physical-volume）","aria-hidden":"true"}},[a._v("#")]),a._v(" "),e("code",[a._v("pvdisplay")]),a._v("（显示当前的 physical volume）")]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310004.png",alt:""}})]),a._v(" "),e("h2",{attrs:{id:"开始-lvm-扩容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开始-lvm-扩容","aria-hidden":"true"}},[a._v("#")]),a._v(" 开始 LVM 扩容")]),a._v(" "),e("h3",{attrs:{id:"查看-fdisk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看-fdisk","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看 fdisk")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("fdisk -l\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310005.png",alt:""}})]),a._v(" "),e("p",[a._v("因为这台机器默认开启了 LVM，所以目前有一个 "),e("code",[a._v("extended")]),a._v(" 分区和一个 "),e("code",[a._v("LVM")]),a._v(" 分区，并且他们是完全重叠的。这是因为，LVM 分区作为一个虚拟的分区，完全占用了这个 extended 分区，原理图见下：")]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Bg7zYac6&690.png",alt:""}})]),a._v(" "),e("p",[a._v("因此，现在需要做的就是将 extended partition ("),e("code",[a._v("sda2")]),a._v(") 扩展到最大，然后创建一个新的 LVM logical partition ("),e("code",[a._v("sda6")]),a._v(")，用它来填满 sda2")]),a._v(" "),e("h3",{attrs:{id:"查看所有连接到电脑上的储存设备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看所有连接到电脑上的储存设备","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看所有连接到电脑上的储存设备")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("fdisk -l |grep '/dev'\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_1-块磁盘效果图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-块磁盘效果图","aria-hidden":"true"}},[a._v("#")]),a._v(" 1 块磁盘效果图")]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310006.png",alt:""}})]),a._v(" "),e("h4",{attrs:{id:"_2-块磁盘效果图（新增磁盘，尚未挂载）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-块磁盘效果图（新增磁盘，尚未挂载）","aria-hidden":"true"}},[a._v("#")]),a._v(" 2 块磁盘效果图（新增磁盘，尚未挂载）")]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310007.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"创建-sdb-分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-sdb-分区","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建 "),e("code",[a._v("sdb")]),a._v(" 分区")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("fdisk /dev/sdb\nn\t# 新建分区\nl\t# 选择逻辑分区，如果没有，则首先创建扩展分区（p），然后再添加逻辑分区（硬盘：最多四个分区 P-P-P-P 或 P-P-P-E）\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310008.png",alt:""}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("回车\n回车\n回车\nw\t# 写入磁盘分区\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("h3",{attrs:{id:"格式化磁盘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#格式化磁盘","aria-hidden":"true"}},[a._v("#")]),a._v(" 格式化磁盘")]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310009.png",alt:""}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mkfs -t ext4 /dev/sdb1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310010.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"创建-pv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建-pv","aria-hidden":"true"}},[a._v("#")]),a._v(" 创建 PV")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pvcreate /dev/sdb1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"查看卷组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看卷组","aria-hidden":"true"}},[a._v("#")]),a._v(" 查看卷组")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pvscan\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310011.png",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"扩容-vg"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩容-vg","aria-hidden":"true"}},[a._v("#")]),a._v(" 扩容 VG")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vgdisplay\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310012.png",alt:""}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vgextend ubuntu-vg /dev/sdb1\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"扩容-lv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩容-lv","aria-hidden":"true"}},[a._v("#")]),a._v(" 扩容 LV")]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310013.png",alt:""}})]),a._v(" "),e("p",[e("img",{attrs:{src:"/funtl/assets/Lusifer_201810310014.png",alt:""}})]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("lvextend -L +30G /dev/ubuntu-vg/root\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"刷新分区"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#刷新分区","aria-hidden":"true"}},[a._v("#")]),a._v(" 刷新分区")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("resize2fs /dev/ubuntu-vg/root\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"删除-unknown-device"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除-unknown-device","aria-hidden":"true"}},[a._v("#")]),a._v(" 删除 unknown device")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("pvscan\nvgreduce --removemissing ubuntu-vg\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[e("strong",[a._v("注意：不要卸载扩容的磁盘，可能出现丢失数据或是系统无法启动")])])])},[],!1,null,null,null);s.default=r.exports}}]);