import { NextResponse } from 'next/server';
import {prisma} from '../../lib/prisma';

export async function GET() {
  try {
    const incidents = await prisma.incident.findMany({
      include: {
        camera: true,
        type: true,
      },
    });

    return NextResponse.json(incidents);
  } catch (error) {
    console.error('Failed to fetch incidents:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}