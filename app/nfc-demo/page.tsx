'use client';

import Link from 'next/link';

export default function NFCDemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            📱 NFC 小红书自动分享演示
          </h1>
          <p className="text-lg text-gray-600">
            体验一触即分享的便捷功能
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">🔗</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              靠近NFC
            </h3>
            <p className="text-gray-600">
              iPhone靠近NFC标签，自动打开分享页面
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              自动复制
            </h3>
            <p className="text-gray-600">
              文案自动复制到剪贴板，图片一键下载
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              快速发布
            </h3>
            <p className="text-gray-600">
              打开小红书，粘贴内容，一键发布
            </p>
          </div>
        </div>

        {/* Demo Links */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🎯 快速体验（点击下方链接）
          </h2>

          <div className="space-y-4">
            <Link
              href="/nfc/default"
              className="block p-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    默认演示 - Sentient Labs介绍
                  </h3>
                  <p className="text-indigo-100">
                    体验完整的GRID & ROMA介绍内容
                  </p>
                </div>
                <span className="text-3xl">→</span>
              </div>
            </Link>

            <Link
              href="/nfc/grid"
              className="block p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    GRID演示 - 去中心化AI网络
                  </h3>
                  <p className="text-purple-100">
                    分享GRID的强大功能和生态系统
                  </p>
                </div>
                <span className="text-3xl">→</span>
              </div>
            </Link>

            <Link
              href="/nfc/roma"
              className="block p-6 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 transform hover:scale-105"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    ROMA演示 - Minsky奖得主
                  </h3>
                  <p className="text-pink-100">
                    展示ROMA多智能体框架的创新技术
                  </p>
                </div>
                <span className="text-3xl">→</span>
              </div>
            </Link>
          </div>
        </div>

        {/* NFC Setup Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            🛠️ 设置NFC标签
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                1. 下载NFC工具
              </h3>
              <p className="text-gray-600">
                在App Store下载"NFC Tools"或使用iPhone快捷指令
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                2. 写入URL到NFC标签
              </h3>
              <p className="text-gray-600 mb-2">
                将以下任一URL写入NFC标签：
              </p>
              <div className="bg-gray-50 p-3 rounded font-mono text-sm space-y-1">
                <div className="text-gray-800">
                  https://www.grid-ai.app/nfc/default
                </div>
                <div className="text-gray-800">
                  https://www.grid-ai.app/nfc/grid
                </div>
                <div className="text-gray-800">
                  https://www.grid-ai.app/nfc/roma
                </div>
              </div>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">
                3. 测试NFC标签
              </h3>
              <p className="text-gray-600">
                用iPhone靠近标签，应该会自动打开分享页面
              </p>
            </div>
          </div>
        </div>

        {/* Usage Flow */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl shadow-xl p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-6">
            📊 完整使用流程
          </h2>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-1">靠近NFC标签</h4>
                <p className="text-indigo-100">
                  将iPhone顶部靠近NFC标签（约1秒）
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-1">自动打开页面</h4>
                <p className="text-indigo-100">
                  点击通知，Safari自动打开分享页面
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-1">文案自动复制</h4>
                <p className="text-indigo-100">
                  小红书文案已自动复制到剪贴板 ✅
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-1">一键开始</h4>
                <p className="text-indigo-100">
                  点击"一键开始"，自动下载图片并打开小红书
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-white text-indigo-600 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <h4 className="font-semibold mb-1">在小红书中发布</h4>
                <p className="text-indigo-100">
                  选择图片，粘贴文案，点击发布！🎉
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-indigo-400">
            <p className="text-center text-lg font-semibold">
              ⚡ 总耗时约10秒，效率提升12-18倍！
            </p>
          </div>
        </div>

        {/* Documentation Link */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-blue-900 mb-1">
                📖 完整设置文档
              </h3>
              <p className="text-blue-700 text-sm">
                查看详细的NFC标签设置指南和常见问题解答
              </p>
            </div>
            <a
              href="/NFC_SETUP.md"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              查看文档
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
