import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/mongodb";
import Retro from "@/models/Retro";
import User from "@/models/User";

export async function GET() {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json([], { status: 200 });
    }


    const retros = await Retro.find({
      userId: user._id,
    }).sort({ createdAt: -1 });
    return NextResponse.json(retros, { status: 200 });
  } catch (err) {
    console.error("RETRO GET ERROR:", err);
    return NextResponse.json(
      { error: "Failed to fetch retros" },
      { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { name, columns } = await req.json();

    const user = await User.findOneAndUpdate(
      { email: session.user.email },
      {
        email: session.user.email,
        name: session.user.name,
        image: session.user.image,
      },
      { upsert: true, new: true }
    );

    const retro = await Retro.findOneAndUpdate(
      { userId: user._id },
      {
        name,
        columns,
      },
      { new: true, upsert: true, }
    );

    return NextResponse.json(retro, { status: 201 });
  } catch (err) {
    console.error("RETRO CREATE ERROR:", err);
    return NextResponse.json({ error: "Failed to save retro" }, { status: 500 });
  }
}

// export async function POST_CARD(req: Request, { params }: { params: { retroId: string } }) {
//   try {
//     await connectDB();

//     const session = await getServerSession(authOptions);
//     if (!session?.user?.email) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }
//     const { columnTitle, card } = await req.json();
//     const { retroId } = params;

//     const retro = await Retro.findOneAndUpdate(
//       {
//         _id: retroId,
//         "columns.title": columnTitle
//       },
//       { $push: { "columns.$.cards": card } },
//       { new: true }
//     );
//     if (!retro) {
//       return NextResponse.json({ error: "Retro not found" }, { status: 404 });
//     }

//     return NextResponse.json(retro, { status: 200 });
//   } catch (err) {
//     console.error("ADD CARD ERROR:", err);
//     return NextResponse.json({ error: "Failed to add card" }, { status: 500 });

//   }
// }