toggleTheme();
toggleBackgroundGride();

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    console.log("Loading theme : " + themeName);
}

function toggleBackgroundGride(){
    let body = document.body.classList;
    if(localStorage.getItem("BackgroundGride") === "true"){
        body.add("gride");
    }
    else{
        body.remove("gride");
    }
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
    else if (localStorage.getItem('theme') === 'transparent') {
        setTheme('transparent');
    }

    else {
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
        if (systemSettingDark) {
            setTheme('dark');
            console.log("Default color scheme : Dark");
        }
        else {
            setTheme('light');
            console.log("Default color scheme : Light");
        }
    }
}

function changeTheme() {
    if (localStorage.getItem('theme') === 'day' && localStorage.getItem('ThemeTransparent') === "true") {
        setTheme('transparent');
    }
    else if (localStorage.getItem('theme') === 'day') {
        setTheme('dark');
    }
    else if (localStorage.getItem('theme') === 'dark') {
        setTheme('light');
    }
    else if (localStorage.getItem('theme') === 'light') {
        setTheme('day');
    }
    else if (localStorage.getItem('theme') === 'day') {
        setTheme('dark');
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
    else if (localStorage.getItem('theme') === 'transparent') {
        img.src = "/assets/svg/linux.svg";
    }

    else { img.src = "/assets/svg/settings.svg"; }
}