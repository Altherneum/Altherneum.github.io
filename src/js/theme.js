toggleTheme();

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    console.log("Loading theme : " + themeName);
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        setTheme('dark');
    }
    else if (localStorage.getItem('theme') === 'day') {
        setTheme('day');
    }
    else if (localStorage.getItem('theme') === 'light') {
        setTheme('light');
    }

    else {
        console.log("Default color scheme");
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
        if (systemSettingDark) {
            setTheme('day');
        }
        else {
            setTheme('light');
        }
    }
}

function changeTheme() {
    if (localStorage.getItem('theme') === 'day') {
        setTheme('dark');
    }
    else if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    }
    else if (localStorage.getItem('theme') === 'light') {
        setTheme('day');
    }

    else { setTheme('dark'); }

    setIconTheme();
}

async function setIconTheme() {
    var themeButton = document.getElementById('theme');
    var img = themeButton.children[0];

    if (localStorage.getItem('theme') === 'dark') {
        img.src = "/assets/svg/sun.svg";
    }
    else if (localStorage.getItem('theme') === 'day') {
        img.src = "/assets/svg/light.svg";
    }
    else if (localStorage.getItem('theme') === 'light') {
        img.src = "/assets/svg/moon.svg";
    }

    else { img.src = "/assets/svg/settings.svg"; }
}