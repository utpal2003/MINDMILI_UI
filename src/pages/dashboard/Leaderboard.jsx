import React from "react";

const leaderboardData = [
  { rank: 1, name: "Steven A", medal: "gold", score: 98 },
  { rank: 2, name: "Raghav M", medal: "silver", score: 95 },
  { rank: 3, name: "Ryan Z", medal: "bronze", score: 93 },
  { rank: 4, name: "Joseph R", score: 90 },
  { rank: 5, name: "Muwaffaq I", score: 88 },
  { rank: 6, name: "Joshua L", score: 85 },
  { rank: 7, name: "Nick M", score: 83 },
  { rank: 8, name: "Ravindra R", score: 80 },
  { rank: 9, name: "Ricardo M", score: 78 },
  { rank: 10, name: "John Doe", score: 76 },
  { rank: 11, name: "Jane Smith", score: 75 },
  { rank: 12, name: "Emily B", score: 73 },
  { rank: 13, name: "Mohammed Z", score: 72 },
  { rank: 14, name: "Liam D", score: 70 },
  { rank: 15, name: "Olivia R", score: 69 },
];

// Sort by score descending
leaderboardData.sort((a, b) => b.score - a.score);

const medalImages = {
  gold: "https://d125fmws0bore1.cloudfront.net/assets/pages/leaderboard/medal-gold-c49052bfa07f36621f16dbe77f7fc36cbafd72ff088ea970256ff998be05687b.svg",
  silver:
    "https://d125fmws0bore1.cloudfront.net/assets/pages/leaderboard/medal-silver-d099c5dd916c167c3ba4716c8968a819f317daaef1901c8e8bae6c6932852faa.svg",
  bronze:
    "https://d125fmws0bore1.cloudfront.net/assets/pages/leaderboard/medal-bronze-d0f15d413800257442c8d4b2d5239cfe28c9fd9594f863ab1fad5258f8d1d5eb.svg",
};

const Leaderboard = () => {
  return (
    <div className="bg-[#fafbfc] min-h-screen font-sans">
      <section className="text-center py-6 px-2 sm:px-6 bg-white">
        <img
          alt="Quiz Leaderboard Icon"
          className="mx-auto mb-4 w-12 sm:w-16"
          src="https://d125fmws0bore1.cloudfront.net/assets/svgs/icon_trophy_leaderboard-3442a4b2312e6cdd02aa9870e636dc082890277a6267c4ed986a750fef7cbb35.svg"
        />
        <h2 className="text-lg sm:text-2xl font-light text-[#2e3d49] mb-2">
          Leaderboard
        </h2>
        <p className="text-xs sm:text-base text-[#525c65] max-w-xl mx-auto">
         Your rank is based on your total quiz scores. Keep
          answering questions, boost your knowledge, and climb your way to the
          top!
        </p>
      </section>

      <section className="px-2 sm:px-4 max-w-6xl mx-auto pb-10">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden text-xs sm:text-sm">
          <div className="flex justify-between items-center py-3 text-gray-500 font-semibold uppercase border-b border-gray-200 px-2 sm:px-4">
            <div className="w-1/5 text-center">Rank</div>
            <div className="w-3/5 text-left pl-2">Name</div>
            <div className="w-1/5 text-center">Score</div>
          </div>

          {leaderboardData.map((user, index) => {
            const isTopThree = index < 3;
            const medalClass =
              user.medal === "gold"
                ? "border-blue-400"
                : user.medal === "silver"
                ? "border-gray-300"
                : user.medal === "bronze"
                ? "border-[#dfdfd1]"
                : "border-transparent";

            return (
              <div
                key={index}
                className={`flex items-center justify-between px-2 sm:px-4 py-3 hover:bg-blue-100 ${
                  isTopThree
                    ? `bg-white shadow-sm rounded-md mb-2 border-2 ${medalClass}`
                    : index % 2 === 0
                    ? "bg-white"
                    : "bg-[#fafbfc]"
                }`}
              >
                <div className="w-1/5 text-center font-semibold text-[#525c65]">
                  {user.medal ? (
                    <img
                      src={medalImages[user.medal]}
                      alt={user.medal}
                      className="w-6 sm:w-8 h-auto mx-auto"
                    />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="w-3/5 text-[#2e3d49] pl-2">{user.name}</div>
                <div className="w-1/5 text-center font-bold text-[#4a5568]">
                  {user.score}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Leaderboard;
