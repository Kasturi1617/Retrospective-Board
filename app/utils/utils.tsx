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
        "DAKI - Drop, Add, Keep, Improve",
        "Lean Coffee - Democratic Discussions",
        "Six Thinking Hats - Diverse Perspectives"
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
    ["🟢 Start", "Ideas to begin implementing", "rgb(3, 169, 244)"],
    ["🛑 Stop", "Practices to discontinue", "rgb(238, 44, 29)"],
    ["🚙 Continue", "Actions to maintain", "rgb(255, 152, 0)"]],
[
    ["🤗 Glad", "Positive Experiences", "rgb(3, 169, 244)"],
    ["😞 Sad", "Negative experiences", "rgb(238, 44, 29)"],
    ["😡 Mad", "Frustrations and challenges", "rgb(255, 152, 0)"]
],
[
    ["💨 Wind", "Forces helping us", "rgb(3, 169, 244)"],
    ["⚓️ Anchors", "Obstacles holding us back", "rgb(238, 44, 29)"],
    ["🤺 Actions", "Steps for improvement", "rgb(255, 152, 0)"]
],
[
    ["👍 What Went Well", "Successful elements", "rgb(3, 169, 244)"],
    ["👎 What Went Wrong", "Aspects that didn't work", "rgb(238, 44, 29)"],
    ["🛠️ What We Want to Improve", "Areas for development", "rgb(255, 152, 0)"]
],
[
    ["🚦 Start", "New initiatives", "rgb(3, 169, 244)"],
    ["✋ Stop", "Ineffective practices", "rgb(238, 44, 29)"],
    ["🚙 Continue", "Effective ongoing actions", "rgb(255, 152, 0)"],
    ["💪 Change", "Modifications needed", "rgb(0, 147, 6)"]
],
[
    ["👍 Liked", "Enjoyable aspects", "rgb(3, 169, 244)"],
    ["📚 Learned", "Key learnings", "rgb(238, 44, 29)"],
    ["👎 Lacked", "Missing elements", "rgb(255, 152, 0)"],
    ["🧞 Longed For", "Desired improvements", "rgb(0, 147, 6)"]
],
[
    ["➡️ Keep", "Effective current practices", "rgb(3, 169, 244)"],
    ["➕ Add", "New practices to try", "rgb(238, 44, 29)"],
    ["⬇️ Less", "Practices to reduce", "rgb(255, 152, 0)"],
    ["⬆️ More", "Practices to increase", "rgb(0, 147, 6)"]
],
[
    ["⬇️ Drop", "Unproductive practices", "rgb(3, 169, 244)"],
    ["➕ Add", "New ideas to implement", "rgb(238, 44, 29)"],
    ["➡️ Keep", "Successful current practices", "rgb(255, 152, 0)"],
    ["⬆️ Improve", "Areas for enhancement", "rgb(0, 147, 6)"]
],
[
    ["🗞️ Topics", "Potential discussion points", "rgb(3, 169, 244)"],
    ["🗳️ Votes", "Priority indicators", "rgb(238, 44, 29)"],
    ["🗣️ Discussion", "Key takeaways", "rgb(255, 152, 0)"]
],
[
    ["⚪️ White Hat", "Facts and information", "rgb(3, 169, 244)"],
    ["🔴 Red Hat", "Emotions and feelings", "rgb(238, 44, 29)"],
    ["⚫️ Black Hat", "Critical judgment", "rgb(255, 152, 0)"],
    ["🟡 Yellow Hat", "Optimism and benefits", "rgb(0, 147, 6)"],
    ["🟢 Green Hat", "Creativity and new ideas", "rgb(32, 61, 229)"],
    ["🔵 Blue Hat", "Big picture overview"]
]
]

// const COLUMN_NAMES=[
//     ["Start", "Stop", "Continue"],
//     ["Glad", "Sad", "Mad"],
//     ["Wind", "Anchors", "Actions"],
//     [""]
// ]

function currentDate() {
  const formattedDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return formattedDate;
}

const COLORS=["rgb(238, 44, 29)", "rgb(255, 152, 0)", "rgb(255, 193, 7)", "rgb(255, 235, 59)", "rgb(102, 148, 42)", "rgb(0, 147, 6)", "rgb(0, 150, 136)", "rgb(0, 188, 212)", "rgb(3, 169, 244)", "rgb(27, 111, 178)", "rgb(32, 61, 229)", "rgb(92, 70, 232)", "rgb(103, 58, 183)", "rgb(233, 30, 99)", "rgb(0, 0, 0)", "rgb(96, 125, 139)", "rgb(158, 158, 158)", "rgb(121, 85, 72)"];

export { CATEGORY, TEMPLATES, TEMPLATE_DETAILS, currentDate, COLORS };