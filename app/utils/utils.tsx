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

const TEMPLATE_COLORS = {
    BLUE: "rgb(3, 169, 244)",
    RED: "rgb(238, 44, 29)",
    ORANGE: "rgb(255, 152, 0)",
    GREEN: "rgb(0, 147, 6)",
    DARK_BLUE: "rgb(32, 61, 229)",
};


const TEMPLATE_DETAILS = [
    [
        ["🟢 Start", "Ideas to begin implementing", TEMPLATE_COLORS.BLUE],
        ["🛑 Stop", "Practices to discontinue", TEMPLATE_COLORS.RED],
        ["🚙 Continue", "Actions to maintain", TEMPLATE_COLORS.ORANGE],
    ],
    [
        ["🤗 Glad", "Positive Experiences", TEMPLATE_COLORS.BLUE],
        ["😞 Sad", "Negative experiences", TEMPLATE_COLORS.RED],
        ["😡 Mad", "Frustrations and challenges", TEMPLATE_COLORS.ORANGE],
    ],
    [
        ["💨 Wind", "Forces helping us", TEMPLATE_COLORS.BLUE],
        ["⚓️ Anchors", "Obstacles holding us back", TEMPLATE_COLORS.RED],
        ["🤺 Actions", "Steps for improvement", TEMPLATE_COLORS.ORANGE],
    ],
    [
        ["👍 What Went Well", "Successful elements", TEMPLATE_COLORS.BLUE],
        ["👎 What Went Wrong", "Aspects that didn't work", TEMPLATE_COLORS.RED],
        ["🛠️ What We Want to Improve", "Areas for development", TEMPLATE_COLORS.ORANGE],
    ],
    [
        ["🚦 Start", "New initiatives", TEMPLATE_COLORS.BLUE],
        ["✋ Stop", "Ineffective practices", TEMPLATE_COLORS.RED],
        ["🚙 Continue", "Effective ongoing actions", TEMPLATE_COLORS.ORANGE],
        ["💪 Change", "Modifications needed", TEMPLATE_COLORS.GREEN],
    ],
    [
        ["👍 Liked", "Enjoyable aspects", TEMPLATE_COLORS.BLUE],
        ["📚 Learned", "Key learnings", TEMPLATE_COLORS.RED],
        ["👎 Lacked", "Missing elements", TEMPLATE_COLORS.ORANGE],
        ["🧞 Longed For", "Desired improvements", TEMPLATE_COLORS.GREEN],
    ],
    [
        ["➡️ Keep", "Effective current practices", TEMPLATE_COLORS.BLUE],
        ["➕ Add", "New practices to try", TEMPLATE_COLORS.RED],
        ["⬇️ Less", "Practices to reduce", TEMPLATE_COLORS.ORANGE],
        ["⬆️ More", "Practices to increase", TEMPLATE_COLORS.GREEN],
    ],
    [
        ["⬇️ Drop", "Unproductive practices", TEMPLATE_COLORS.BLUE],
        ["➕ Add", "New ideas to implement", TEMPLATE_COLORS.RED],
        ["➡️ Keep", "Successful current practices", TEMPLATE_COLORS.ORANGE],
        ["⬆️ Improve", "Areas for enhancement", TEMPLATE_COLORS.GREEN],
    ],
    [
        ["🗞️ Topics", "Potential discussion points", TEMPLATE_COLORS.BLUE],
        ["🗳️ Votes", "Priority indicators", TEMPLATE_COLORS.RED],
        ["🗣️ Discussion", "Key takeaways", TEMPLATE_COLORS.ORANGE],
    ],
    [
        ["⚪️ White Hat", "Facts and information", TEMPLATE_COLORS.BLUE],
        ["🔴 Red Hat", "Emotions and feelings", TEMPLATE_COLORS.RED],
        ["⚫️ Black Hat", "Critical judgment", TEMPLATE_COLORS.ORANGE],
        ["🟡 Yellow Hat", "Optimism and benefits", TEMPLATE_COLORS.GREEN],
        ["🟢 Green Hat", "Creativity and new ideas", TEMPLATE_COLORS.DARK_BLUE],
        ["🔵 Blue Hat", "Big picture overview", TEMPLATE_COLORS.BLUE],
    ],
];

function currentDate() {
    const formattedDate = new Date().toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return formattedDate;
}

const COLORS = ["rgb(238, 44, 29)", "rgb(255, 152, 0)", "rgb(255, 193, 7)", "rgb(255, 235, 59)", "rgb(102, 148, 42)", "rgb(0, 147, 6)", "rgb(0, 150, 136)", "rgb(0, 188, 212)", "rgb(3, 169, 244)", "rgb(27, 111, 178)", "rgb(32, 61, 229)", "rgb(92, 70, 232)", "rgb(103, 58, 183)", "rgb(233, 30, 99)", "rgb(0, 0, 0)", "rgb(96, 125, 139)", "rgb(158, 158, 158)", "rgb(121, 85, 72)"];

export { CATEGORY, TEMPLATES, TEMPLATE_DETAILS, currentDate, COLORS };