import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing file id" }, { status: 400 });
  }

  const driveUrl = `https://drive.google.com/uc?export=view&id=${id}`;

  try {
    const res = await fetch(driveUrl);
    if (!res.ok) {
      console.error(`Failed to fetch image ${id} from Google Drive: status ${res.status}`);
      return NextResponse.json({ error: "Failed to fetch from Google Drive" }, { status: res.status });
    }

    const contentType = res.headers.get("content-type") || "image/jpeg";
    
    // Read response as array buffer
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Response(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=31536000, immutable", // Cache for 1 year
      },
    });
  } catch (error: any) {
    console.error(`Error in media proxy for ${id}:`, error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
