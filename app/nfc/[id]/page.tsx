'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getNFCContent, type NFCContent } from '@/lib/nfc-content';

export default function NFCSharePage() {
  const params = useParams();
  const router = useRouter();
  const [content, setContent] = useState<NFCContent | null>(null);
  const [status, setStatus] = useState<{
    textCopied: boolean;
    imagesDownloaded: boolean;
    error: string | null;
  }>({
    textCopied: false,
    imagesDownloaded: false,
    error: null,
  });

  useEffect(() => {
    // 加载NFC内容
    const id = typeof params.id === 'string' ? params.id : 'default';
    const nfcContent = getNFCContent(id);
    setContent(nfcContent);

    // 自动复制文案到剪贴板
    copyTextToClipboard(nfcContent.text);
  }, [params.id]);

  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(prev => ({ ...prev, textCopied: true }));
    } catch (err) {
      console.error('复制文案失败:', err);
      setStatus(prev => ({ ...prev, error: '复制文案失败，请手动复制' }));
    }
  };

  const downloadImage = async (imageUrl: string, index: number) => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sentient-${content?.id}-${index + 1}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('下载图片失败:', err);
      throw err;
    }
  };

  const downloadAllImages = async () => {
    if (!content) return;

    try {
      setStatus(prev => ({ ...prev, error: null }));

      for (let i = 0; i < content.images.length; i++) {
        await downloadImage(content.images[i], i);
        // 添加延迟以避免浏览器阻止多个下载
        if (i < content.images.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }

      setStatus(prev => ({ ...prev, imagesDownloaded: true }));
    } catch (err) {
      setStatus(prev => ({ ...prev, error: '下载图片失败，请重试' }));
    }
  };

  const openXiaohongshu = () => {
    // 尝试打开小红书App
    // 小红书的URL Scheme
    const xiaohongshuScheme = 'xhsdiscover://';

    // 创建一个隐藏的iframe尝试打开App
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = xiaohongshuScheme;
    document.body.appendChild(iframe);

    // 如果App没有安装，1秒后移除iframe并提示用户
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 1000);

    // 也可以尝试使用通用链接（如果小红书支持）
    // window.location.href = xiaohongshuScheme;
  };

  const handleQuickStart = async () => {
    // 一键操作：下载图片 + 打开小红书
    await downloadAllImages();
    setTimeout(() => {
      openXiaohongshu();
    }, 1000);
  };

  if (!content) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">加载中...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            📱 小红书自动分享
          </h1>
          <p className="text-gray-600">
            NFC已读取内容，准备分享到小红书
          </p>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className={`p-4 rounded-lg ${status.textCopied ? 'bg-green-100 border-green-300' : 'bg-white border-gray-200'} border-2`}>
            <div className="flex items-center justify-center">
              {status.textCopied ? (
                <span className="text-2xl">✅</span>
              ) : (
                <span className="text-2xl">📝</span>
              )}
              <span className="ml-2 font-medium text-gray-900">
                {status.textCopied ? '文案已复制' : '准备复制文案'}
              </span>
            </div>
          </div>

          <div className={`p-4 rounded-lg ${status.imagesDownloaded ? 'bg-green-100 border-green-300' : 'bg-white border-gray-200'} border-2`}>
            <div className="flex items-center justify-center">
              {status.imagesDownloaded ? (
                <span className="text-2xl">✅</span>
              ) : (
                <span className="text-2xl">🖼️</span>
              )}
              <span className="ml-2 font-medium text-gray-900">
                {status.imagesDownloaded ? '图片已下载' : '准备下载图片'}
              </span>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {status.error && (
          <div className="mb-6 p-4 bg-red-100 border-2 border-red-300 rounded-lg">
            <p className="text-red-700 text-center">⚠️ {status.error}</p>
          </div>
        )}

        {/* Content Preview */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {content.title}
          </h2>

          {/* Text Content */}
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">📝 文案内容：</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans">
                {content.text}
              </pre>
            </div>
          </div>

          {/* Images Preview */}
          {content.images.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                🖼️ 图片预览（{content.images.length}张）：
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {content.images.map((img, idx) => (
                  <div key={idx} className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <img
                      src={img}
                      alt={`图片 ${idx + 1}`}
                      className="max-w-full max-h-full object-contain rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hashtags */}
          {content.hashtags.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">🏷️ 话题标签：</h3>
              <div className="flex flex-wrap gap-2">
                {content.hashtags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {/* Quick Start Button */}
          <button
            onClick={handleQuickStart}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            🚀 一键开始（下载图片 + 打开小红书）
          </button>

          {/* Individual Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => copyTextToClipboard(content.text)}
              className="bg-white border-2 border-indigo-300 text-indigo-700 font-medium py-3 px-4 rounded-lg hover:bg-indigo-50 transition-colors"
            >
              📋 复制文案
            </button>

            <button
              onClick={downloadAllImages}
              className="bg-white border-2 border-purple-300 text-purple-700 font-medium py-3 px-4 rounded-lg hover:bg-purple-50 transition-colors"
            >
              💾 下载图片
            </button>
          </div>

          <button
            onClick={openXiaohongshu}
            className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            📱 打开小红书 App
          </button>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-2">📖 使用说明：</h3>
          <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
            <li>文案已自动复制到剪贴板 ✅</li>
            <li>点击"下载图片"保存图片到相册</li>
            <li>点击"打开小红书"跳转到App</li>
            <li>在小红书中粘贴文案并选择图片</li>
            <li>点击发布即可！🎉</li>
          </ol>
          <p className="mt-3 text-xs text-blue-700">
            💡 提示：使用"一键开始"可以自动完成前3步
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => router.push('/')}
            className="text-gray-600 hover:text-gray-900 text-sm"
          >
            ← 返回首页
          </button>
        </div>
      </div>
    </div>
  );
}
