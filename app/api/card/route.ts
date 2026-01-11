import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import connectDB from "@/lib/mongodb";
import Retro from "@/models/Retro";
import User from "@/models/User";

export async function POST(req: Request) {
  try {
    await connectDB();

    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { columnTitle, card } = await req.json();

    // Find the user
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Update the retro for this user
    const retro = await Retro.findOneAndUpdate(
      {
        userId: user._id,
        "columns.title": columnTitle
      },
      { $push: { "columns.$.cards": card } },
      { new: true }
    );

    if (!retro) {
      return NextResponse.json({ error: "Retro not found" }, { status: 404 });
    }

    return NextResponse.json(retro, { status: 200 });
  } catch (err) {
    console.error("ADD CARD ERROR:", err);
    return NextResponse.json({ error: "Failed to add card" }, { status: 500 });
  }
}