import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');

    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : '인카금융서비스 유니콘 사업단';

    const font = await fetch(
      new URL(
        '/fonts/NotoSansKR-SemiBold.ttf',
        process.env.NEXT_PUBLIC_API_URL,
      ),
    );
    const fontData = await font.arrayBuffer();

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              'linear-gradient(to bottom right, #d18cff, #4218B8)',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <img
              alt="IncarLogo"
              height={120}
              src={`${process.env.NEXT_PUBLIC_API_URL}/images/logo-horizon(white).png`}
              style={{ margin: '0 30px' }}
              width={330}
            />
          </div>
          <div
            style={{
              fontSize: 54,
              fontWeight: 600,
              fontFamily: 'Pretendard',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Inter',
            data: fontData,
            style: 'normal',
          },
        ],
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
