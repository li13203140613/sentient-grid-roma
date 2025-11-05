# NFC 小红书自动分享设置指南

## 📱 功能介绍

通过NFC标签，实现一触即分享到小红书的自动化流程：
1. iPhone靠近NFC标签
2. 自动打开分享页面
3. 文案自动复制到剪贴板
4. 一键下载图片并打开小红书
5. 在小红书中粘贴内容，点击发布

## 🎯 支持的设备

- **iPhone**: iPhone 7及以上（iOS 11+）支持NFC读取
- **iPhone XS及以上**: 支持后台NFC读取（无需打开App）
- **Android**: 大部分Android设备支持NFC

## 🛠️ NFC标签设置步骤

### 方法一：使用iPhone快捷指令（推荐）

1. **下载NFC标签写入App**
   - 推荐使用：[NFC Tools](https://apps.apple.com/app/nfc-tools/id1252962749)
   - 或者：Apple快捷指令（内置）

2. **配置NFC标签内容**

   使用NFC Tools写入URL：
   ```
   https://www.grid-ai.app/nfc/default
   ```

   **可用的内容ID**：
   - `default` - 默认Sentient Labs介绍
   - `grid` - GRID去中心化AI网络
   - `roma` - ROMA多智能体框架

   示例URL：
   ```
   https://www.grid-ai.app/nfc/grid
   https://www.grid-ai.app/nfc/roma
   ```

3. **写入NFC标签**
   - 在NFC Tools中选择"写入"
   - 添加"URL/URI"记录
   - 输入上述URL
   - 将iPhone靠近NFC标签
   - 完成写入

### 方法二：使用Apple快捷指令

1. **创建个人自动化**
   - 打开"快捷指令"App
   - 进入"自动化"标签
   - 点击右上角"+"
   - 选择"创建个人自动化"
   - 选择"NFC"

2. **配置NFC自动化**
   - 扫描你的NFC标签
   - 添加操作："打开URL"
   - 输入：`https://www.grid-ai.app/nfc/default`
   - 关闭"运行前询问"（可选）
   - 完成设置

## 📝 自定义内容

### 编辑内容配置

编辑 `lib/nfc-content.ts` 文件来添加新的分享内容：

```typescript
export const nfcContents: Record<string, NFCContent> = {
  'my-product': {
    id: 'my-product',
    title: '我的产品名称',
    description: '产品描述',
    text: `📱 产品文案

这里是你的小红书文案内容
可以包含emoji和换行

#标签1 #标签2`,
    images: [
      'https://your-domain.com/image1.jpg',
      'https://your-domain.com/image2.jpg',
    ],
    hashtags: ['标签1', '标签2', '标签3']
  }
};
```

然后使用URL：`https://www.grid-ai.app/nfc/my-product`

### 图片要求

- **格式**: JPG, PNG, GIF
- **尺寸**: 建议1:1方图或3:4竖图
- **大小**: 建议每张 < 5MB
- **数量**: 小红书支持1-9张图片

## 🚀 使用流程

1. **靠近NFC标签**
   - 将iPhone顶部靠近NFC标签
   - 会自动弹出通知

2. **打开分享页面**
   - 点击通知打开页面
   - 或在Safari中自动打开

3. **页面自动操作**
   - ✅ 文案自动复制到剪贴板
   - 📊 显示内容预览

4. **一键开始**
   - 点击"一键开始"按钮
   - 自动下载所有图片
   - 自动打开小红书App

5. **在小红书中发布**
   - 小红书会自动打开
   - 点击"+"创建笔记
   - 选择刚下载的图片
   - 长按粘贴文案（已在剪贴板）
   - 点击发布！🎉

## 💡 使用技巧

### 提高成功率

1. **允许浏览器权限**
   - 首次使用时允许Safari访问剪贴板
   - 允许下载文件

2. **使用Chrome或Safari**
   - Safari效果最佳（iOS原生）
   - Chrome也支持

3. **网络环境**
   - 确保网络连接稳定
   - 图片较大时需要时间下载

### 快捷操作

- 如果自动复制失败，点击"📋 复制文案"按钮
- 如果下载失败，可以长按图片保存
- 如果小红书无法打开，手动打开App即可

## 🔧 高级配置

### 通过API动态获取内容

创建API端点来动态提供内容：

```typescript
// app/api/nfc-content/[id]/route.ts
export async function GET(request: Request, { params }: { params: { id: string } }) {
  // 从数据库或CMS获取内容
  const content = await fetchContentFromDB(params.id);
  return Response.json(content);
}
```

### 统计和分析

可以在页面中添加统计代码：

```typescript
useEffect(() => {
  // 记录访问
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify({
      nfcId: params.id,
      timestamp: Date.now()
    })
  });
}, []);
```

## ⚠️ 注意事项

### iOS限制

- iOS不允许网页完全自动化所有操作
- 需要用户点击确认下载图片
- 打开第三方App需要用户确认

### 小红书限制

- 小红书没有公开的URL Scheme API
- 无法直接填充图片和文案到小红书
- 需要用户手动粘贴和选择图片
- 本方案已是最优解决方案

### 浏览器兼容性

- Safari: ✅ 完全支持
- Chrome: ✅ 支持
- Firefox: ⚠️ 部分功能可能受限
- 微信内置浏览器: ⚠️ 功能受限，建议在Safari打开

## 🐛 常见问题

### Q: iPhone无法读取NFC标签？

**A**:
- 确保iPhone 7及以上型号
- iOS 11及以上版本
- 手机没有连接CarPlay
- 将手机顶部中央靠近标签
- 摘掉厚重手机壳

### Q: 点击通知没反应？

**A**:
- 检查网络连接
- 尝试在Safari中手动打开URL
- 重启Safari

### Q: 文案没有自动复制？

**A**:
- 首次使用时需要允许访问剪贴板
- 手动点击"复制文案"按钮
- 检查浏览器权限设置

### Q: 图片下载失败？

**A**:
- 检查网络连接
- 确保图片URL可访问
- 尝试手动长按图片保存
- 检查手机存储空间

### Q: 无法打开小红书？

**A**:
- 确保已安装小红书App
- 手动打开小红书App
- 检查小红书App版本是否最新

### Q: 如何在Android上使用？

**A**:
- Android自带NFC功能
- 使用NFC Tools写入URL
- 靠近标签会自动打开浏览器
- 后续流程与iOS相同

## 📞 技术支持

如有问题，请访问：
- GitHub: https://github.com/sentient-agi/ROMA
- 官网: https://sentient.xyz
- 文档: https://docs.sentient.xyz

## 🎯 推荐NFC标签

- **NTAG215**: 容量504字节，适合URL
- **NTAG216**: 容量888字节，可存储更多数据
- **购买渠道**: 淘宝、京东搜索"NFC标签"

建议购买可重复写入的标签，方便后续修改内容。

---

## 📊 效果演示

```
用户操作流程：
┌─────────────┐
│ 1. 靠近NFC  │ (1秒)
└──────┬──────┘
       ↓
┌─────────────┐
│ 2. 点击通知  │ (1秒)
└──────┬──────┘
       ↓
┌─────────────┐
│ 3. 一键开始  │ (1秒)
└──────┬──────┘
       ↓
┌─────────────┐
│ 4. 小红书粘贴│ (5秒)
└──────┬──────┘
       ↓
┌─────────────┐
│ 5. 发布完成  │ ✅
└─────────────┘

总耗时：约10秒
传统流程：约2-3分钟
效率提升：12-18倍！
```

---

**Happy Sharing! 🎉**
