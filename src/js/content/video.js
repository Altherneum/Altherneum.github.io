var videolinks = [
    {
        videoID: "XYgM9jSkYAM",
        categorie: "hack",
    },
    {
        videoID: "Zcvxw7yAXK0",
        top: true,
        categorie: "discord",
    },
    {
        videoID: "fV-pTu5T59M",
        categorie: "malware",
    },
    {
        videoID: "bVmukCdg7SQ",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "_26Fg09tW_0",
        categorie: "game",
    },
    {
        videoID: "yle2LScFdWs",
        categorie: "game",
    },
    {
        videoID: "s8MT-5X7cyk",
        categorie: "game",
    },
    {
        videoID: "D_pw841ZR1E",
        categorie: "game",
    },
    {
        videoID: "RjEWyYs6zpw",
        categorie: "game",
    },
    {
        videoID: "qQcHkMvsQwA",
        categorie: "game",
    },
    {
        videoID: "0C_0qaT81HE",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "GkErU_r5QIs",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "mVKAyw0xqxw",
        categorie: "IT",
    },
    {
        videoID: "RhfM24skj34",
        categorie: "code",
    },
    {
        videoID: "vNxl7L3Zuck",
        categorie: "IT",
    },
    {
        videoID: "WLJGZlt5y2E",
        categorie: "malware",
    },
    {
        videoID: "4N2GWTQX0rk",
        categorie: "DeepWeb",
    },
    {
        videoID: "hdHjjBS4cs8",
        categorie: "code",
    },
    {
        videoID: "KdoaiGTIBY4",
        categorie: "IT",
    },
    {
        videoID: "XTcP4oo4JI4",
        categorie: "science",
    },
    {
        videoID: "LKCVKw9CzFo",
        categorie: "IT",
    },
    {
        videoID: "JdxfhMbSwL0",
        categorie: "science",
    },
    {
        videoID: "z_8hGSGCK3Q",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "_LiZWbBR96A",
        categorie: "IT",
    },
    {
        videoID: "3FhdEDjzHt0",
        categorie: "hack",
        short: true,
    },
    {
        videoID: "IRD06dycqYc",
        categorie: "game",
        short: true,
        text: "<a href='#yt-Ab65Cr-XU8U'>The TRUTH about the MIG Switch Nintendo Flash Cart</a>",
    },
    {
        videoID: "Ab65Cr-XU8U",
        categorie: "game",
    },
    {
        videoID: "gO44cB1pqWI",
        categorie: "malware",
    },
    {
        videoID: "nwEN0H6rdY4",
        categorie: "malware",
        short: true,
    },
    {
        videoID: "jmHKJfKkF3Y",
        categorie: "game",
    },
    {
        videoID: "JRzNHDcUk3w",
        categorie: "science",
        short: true,
    },
    {
        videoID: "304UONRtVqI",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "PLp31D6HATKfeEHEFqFo5hlCOYwHi4Sl9O",
        categorie: "IT",
        playlist: true,
    },
    {
        videoID: "3v5saN9J94A",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "ePiF7BWB6_s",
        categorie: "code",
    },
    {
        videoID: "wPLyH1lp0bM",
        categorie: "code",
        short: true,
    },
    {
        videoID: "D7UwheQ_7cQ",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "Xa1Ry6O-hag",
        categorie: "DeepWeb"
    },
    {
        videoID: "lXuKTSU2XBY",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "6EXUFnDFeNw",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "upXQQaDTuFM",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "5H7cQAl-vno",
        categorie: "hack",
        short: true,
    },
    {
        videoID: "mMZNWx4r4Rk",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "2EL2MVgVrso",
        categorie: "game",
        short: true,
    },
    {
        videoID: "F429yqTVUyI",
        categorie: "hack",
        short: true,
    },
    {
        videoID: "heBrCo9ondM",
        categorie: "IT",
        short: true,
    },
    {
        videoID: "kE3rGmoSOqs",
        categorie: "IT",
    },
    {
        videoID: "WIQAu0Sd5s0",
        categorie: "discord",
    },
    {
        videoID: "fGQhdzc571w",
        categorie: "hack",
    },
    {
        videoID: "6LUl57Qoxic",
        categorie: "hack",
    },
    {
        videoID: "pQCT2ZnpHfY",
        categorie: "code",
    },
    {
        videoID: "VUMUgL_nh-g",
        categorie: "game",
    },
    {
        videoID: "Nz1BVWjTfb8",
        categorie: "IT",
    },
    {
        videoID: "SRsILJ6q1qQ",
        categorie: "hack",
    },
    {
        videoID: "7YM2EKc0Tk4",
        categorie: "IT",
        short: true,
    }
];

var VideoListType = ["hack", "IT", "discord", "code", "malware", "game", "science", "DeepWeb"];

function getVideoListType(){
    return VideoListType;
}

function GetVideoList(){
    return videolinks;
}

function getEmoji(VideoListType){
    switch (VideoListType) {
        case 'hack':
            return "💀";
        case 'IT':
            return "💻";
        case 'discord':
            return "📞";
        case 'code':
            return "💾";
        case 'malware':
            return "🦠";
        case 'game':
            return "🕹";
        case 'science':
            return "🔬";
        case 'DeepWeb':
            return "🕸️";
        default:
            return "X";
      }
}
