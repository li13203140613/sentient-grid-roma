import { NextRequest, NextResponse } from 'next/server';
import { getNFCContent } from '@/lib/nfc-content';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const content = getNFCContent(params.id);

    // 返回JSON格式，方便iOS快捷指令使用
    return NextResponse.json(content, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Cache-Control': 'public, max-age=300', // 缓存5分钟
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Content not found' },
      { status: 404 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  );
}
