const CATEGORY = ["👉 Common Templates",
    "🌐 Public Templates",
    "🎡 Themed Templates",
    "✨ AI Generated",
    "⏮️ Previous Templates"];

const TEMPLATES = [
    ["Start-Stop-Continue",
        "Glad, Sad, Mad",
        "Sailboat (or Speedboat) Retrospective",
        "3W's - What Went Well, What Went Wrong, What We Want to Improve",
        "Start-Stop-Continue-Change",
        "4L's - Liked, Learned, Lacked, Longed For",
        "KALM - Keep, Add, Less, More",
        "DAKI - Drop, Add, Keep, Improve"
    ],
    [
        "Agile Thanksgiving",
        "Autumn Harvest Retrospective",
        "Black Friday Blitz",
        "Lean Coffee Lounge"
    ],
    ["Pirate Adventure",
        "Space Odyssey",
        "Sailing the Seas",
        "Wild West",
        "Enchanted Forest",
        "Superheroes Lair",
        "Underwater Exploration",
        "Jurassic Jungle"
    ],
    [

    ],
    [

    ]
]

const TEMPLATE_DETAILS = [[
    ["🟢 Start", "Ideas to begin implementing"],
    ["🛑 Stop", "Practices to discontinue"],
    ["🚙 Continue", "Actions to maintain"]],
[
    ["🤗 Glad", "Positive Experiences"],
    ["😞 Sad", "Negative experiences"],
    ["😡 Mad", "Frustrations and challenges"]
],
[
    ["💨 Wind", "Forces helping us"],
    ["⚓️ Anchors", "Obstacles holding us back"],
    ["🤺 Actions", "Steps for improvement"]
],
[
    ["👍 What Went Well", "Successful elements"],
    ["👎 What Went Wrong", "Aspects that didn't work"],
    ["🛠️ What We Want to Improve", "Areas for development"]
],
[
    ["🚦 Start", "New initiatives"],
    ["✋ Stop", "Ineffective practices"],
    ["🚙 Continue", "Effective ongoing actions"],
    ["💪 Change", "Modifications needed"]
],
[
    ["👍 Liked", "Enjoyable aspects"],
    ["📚 Learned", "Key learnings"],
    ["👎 Lacked", "Missing elements"],
    ["🧞 Longed For", "Desired improvements"]
],
[
    ["➡️ Keep", "Effective current practices"],
    ["➕ Add", "New practices to try"],
    ["⬇️ Less", "Practices to reduce"],
    ["⬆️ More", "Practices to increase"]
],
[
    ["⬇️ Drop", "Unproductive practices"],
    ["➕ Add", "New ideas to implement"],
    ["➡️ Keep", "Successful current practices"],
    ["⬆️ Improve", "Areas for enhancement"]
],
[
    ["🗞️ Topics", "Potential discussion points"],
    ["🗳️ Votes", "Priority indicators"],
    ["🗣️ Discussion", "Key takeaways"]
],
[
    ["⚪️ White Hat", "Facts and information"],
    ["🔴 Red Hat", "Emotions and feelings"],
    ["⚫️ Black Hat", "Critical judgment"],
    ["🟡 Yellow Hat", "Optimism and benefits"],
    ["🟢 Green Hat", "Creativity and new ideas"],
    ["🔵 Blue Hat", "Big picture overview"]
]
]

function currentDate() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
}


export { CATEGORY, TEMPLATES, TEMPLATE_DETAILS, currentDate };