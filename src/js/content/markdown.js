async function addMarkdown(repo, file, gist, doesSetAnchor) {
    console.info("Loading markdown CSS");
    await include_css("/src/css/markdown.css");
    console.info("Loading .md");

    var markdownHolder = setMarkdownHolder();
    var content = setMarkdownFileDiv(repo, file, markdownHolder);

    await githubData(repo, file, content, gist);

    await addMarkdownText(gist, content, repo, file);

    if (doesSetAnchor === true) {
        setAnchor();
    }

    autoScroll();
    console.info("Fin markdown");
}

function setMarkdownHolder() {
    var root = document.querySelector("#contentArticle");
    var markdownHolder = document.getElementById("markdown");
    if (markdownHolder === null || markdownHolder === undefined) {
        var newDiv = document.createElement("div");
        newDiv.id = "markdown";
        root.appendChild(newDiv);
        markdownHolder = document.getElementById("markdown")
    }
    return markdownHolder;
}

function setMarkdownFileDiv(repo, file, markdownHolder) {
    var content = document.createElement("div");
    content.id = repo + "/" + file;
    content.className = "markdowned";
    markdownHolder.appendChild(content);
    return content;
}

const parseMarkdown = (text) => {
    console.info("Loading markdown parser");
    const toHTML = text
        .replace(/([^!])\[([^\[]+)\]\(([^\)]+)\)/g, '$1<a href=\"$3\">$2</a>') // <a>
        .replace(/!\[([^\[]+)\]\(([^\)]+)\)/g, '<img src=\"$2\" alt=\"$1\" />') // <img>

        .replace(/\`{3}(.*?)\`{3}/gms, '<textarea>$1</textarea>') // <code>
        .replace(/(?<!<textarea>)\`{2} (.*?) \`{2}/gm, '<code>$1</code>') // backtick inside <code>
        .replace(/(?<!<textarea>)\`{1,2}(.*?)\`{1,2}/gm, '<code>$1</code>') // <code>

        .replace(/(?<!.)(-{3,})(?!.)/g, '<hr/>') //hr (Decoration line)

        .replace(/\~\~(.*?)\~\~/gim, '<del>$1</del>')// <del>
        .replace(/\n(?:&gt;|\>)\W*(.*)/gim, '<blockquote><p>$1</p></blockquote>') // <blockquote>

        .replace(/\_\_(.*?)\_\_/g, '<u>$1</u>') // underline
        .replace(/(?<!\\)(?<!\/)\*\*(.*?)\*\*/g, '<b>$1</b>') //bold
        .replace(/^(?<!\`)(?<!\\)(?<!\/)\*(.*?)\*/gm, '<i>$1</i>') //italic

        .replace(/^\*(.*$)/gim, '<ul><li>$1</li></ul>') // <li>
        .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>') // <li>
        .replace(/^ {2}- (.*$)/gim, '<ul><li style="margin-left:12px;">$1</li></ul>') // <li>
        .replace(/^ {4}- (.*$)/gim, '<ul><li style="margin-left:24px;">$1</li></ul>') // <li>
        .replace(/^ {6}- (.*$)/gim, '<ul><li style="margin-left:36px;">$1</li></ul>') // <li>
        .replace(/^ {8,}- (.*$)/gim, '<ul><li style="margin-left:48px;">$1</li></ul>') // <li>
        .replace(/(^[0-9])+\.\s*(.*$)/gim, '<ol><li style="list-style-type: &quot;$1. &quot;;">$2</li></ol>') // <li>

        .replace(/\\\*/g, '*') //replace /* & \* to *

        .replace(/\[\x\]/gim, '<input type="checkbox" class="checkboxBox" checked/>')
        .replace(/\[ \]/gim, '<input type="checkbox" class="checkboxBox"/>')

        .replace(/^###### (.*$)/gim, '<h6>$1</h6>') // h6 tag
        .replace(/^##### (.*$)/gim, '<h5>$1</h5>') // h5 tag
        .replace(/^#### (.*$)/gim, '<h4>$1</h4>') // h4 tag
        .replace(/^### (.*$)/gim, '<h3>$1</h3>') // h3 tag
        .replace(/^## (.*$)/gim, '<h2>$1</h2>') // h2 tag
        .replace(/(?<!<textarea[^>]*>[^<]*)(^# (.*))(?![^<]*<\/textarea>)/gim, '<hr style="margin-top:50px;margin-bottom:20px"><h1>$2</h1>') // h1 tag

        //.replace(/(?![^<]*>|[^>]*<\/)([a-z0-9A-Z:;\\\/\|?!§%'~’"°«»\(\)\{\}\[\]@&=+-/^ _¨$£¤µ\*€.,`âôœûùéêëèàçïî<>▶⬇⚠/]+)(?![^<]*>|[^>]*<\/.)/gim, '<p>$1</p>') // text p balise
        .replace(/(?![^<]*>|[^>]*<\/)(.+)(?![^<]*>|[^>]*<\/.)/gim, '<p>$1</p>') // text p balise
        //text inside summary 

        .replace(/[\n]{1,}/g, "<br>") //new line

        .trim();
    console.info("Loading return markdown trim");
    return toHTML.trim();
}

async function addMarkdownText(gist, content, repo, file) {
    var x;
    var x2;
    if (gist === true) {
        x = await getMarkdown('https://gist.githubusercontent.com/' + repo + "/" + file + "/raw")
        x = "<h1>code</h1>\n<textarea>" + x + "</textarea>";
        x2 = x;
    } else if (gist === false) {
        x = await getMarkdown('https://raw.githubusercontent.com/' + repo + "/main/" + file);
        x2 = parseMarkdown(x);
    }
    // console.log(".md : " + x);
    // console.log("Loading HTML wrapped .md :" + x2);

    //console.log("Loading clean code in .md");
    var regex = /<textarea>((?!<<textarea>>))*((?!<\/textarea>)[\s\S])*<\/textarea>/gim;
    var x3 = x2.match(regex);
    //console.log(x3);

    for (i in x3) {
        var res = x3[i].replaceAll("<br>", "\n");
        x2 = x2.replace(x3[i], res);
    }

    content.innerHTML += x2;
}

async function githubData(repo, file, content, gist) {
    var fileTrimed = file.replaceAll("/", "%2F");
    

    var holder = document.createElement("div");
    holder.id = "fileData";

    content.appendChild(holder);

    if (gist) {
        anchorButton(repo, file, gist, holder);
        anchorEdit(repo, file, gist, holder);
        anchorRaw(repo, file, holder, gist);
        anchorHolder(repo.split('/')[0], holder);
    }
    if (!gist) {
        var data = await gather("https://api.github.com/repos/" + repo + "/commits?path=" + fileTrimed + "&page=1&per_page=1");

        var commit = getValue(data[0], "commit");
        var author = getValue(data[0], "author");
        var htmlUrl = getValue(data[0], "html_url");

        var commitAuthor = getValue(commit, "author");
        var commitMessage = getValue(commit, "message");

        var commitAuthorName = getValue(commitAuthor, "name");
        var commitAuthorDate = getValue(commitAuthor, "date");

        var authorLogin = getValue(author, "login");
        anchorRepo(repo, holder);
        anchorButton(repo, file, gist, holder);
        anchorEdit(repo, file, gist, holder);
        anchorRaw(repo, file, holder, gist);
        anchorHolder(repo.split('/')[0], holder);
        anchorUpdate(htmlUrl, holder);
        anchorAuthor(authorLogin, holder, commitAuthorName, authorLogin, holder);
        textData(commitMessage, commitAuthorDate, holder);
    }
}

function textData(commitMessage, commitAuthorDate, holder) {
    var commitDiv = document.createElement("div");
    commitDiv.className = "commit";

    if (commitMessage !== undefined) {
        var updateMessage = document.createElement("p");
        updateMessage.textContent = commitMessage;
        commitDiv.appendChild(updateMessage);
    }

    if (commitAuthorDate !== undefined) {
        const date1 = new Date(commitAuthorDate);
        var date2 = date1.toLocaleString();
        var updateDate = document.createElement("p");
        updateDate.textContent = date2;
        commitDiv.appendChild(updateDate);
    }

    holder.appendChild(commitDiv);
}

function anchorUpdate(url, holder) {
    if (url === undefined) {
        return;
    }
    var link = document.createElement("a");
    var button = document.createElement("button");
    var image = document.createElement("img");
    var text = document.createElement("p");
    link.href = url;
    image.src = "/assets/svg/update.svg";
    button.classList = "edit-gist"
    text.textContent = "Last commit";
    link.target = "_blank";
    image.classList = "svg";
    button.appendChild(image);
    button.appendChild(text);
    link.appendChild(button);
    holder.appendChild(link);
}

function anchorAuthor(authorLogin, holder, commitAuthorName, authorLogin, holder) {
    if (authorLogin === undefined) {
        return;
    }
    var link = document.createElement("a");
    var button = document.createElement("button");
    var image = document.createElement("img");
    var text = document.createElement("p");
    link.href = "https://github.com/" + authorLogin;
    image.src = "/assets/svg/writer-write-blogger-work-at-desk.svg";
    button.classList = "edit-gist"
    
    if (authorLogin !== commitAuthorName) {
        text.textContent = "committer : " + authorLogin + " (" + commitAuthorName + ")";
    }else{
        text.textContent = "committer : " + authorLogin;
    }

    link.target = "_blank";
    image.classList = "svg";
    button.appendChild(image);
    button.appendChild(text);
    link.appendChild(button);
    holder.appendChild(link);
}

function anchorRaw(repo, file, holder, gist) {
    var link = document.createElement("a");
    var button = document.createElement("button");
    var image = document.createElement("img");
    var text = document.createElement("p");
    if (gist === true) {
        link.href = "https://gist.github.com/" + repo + "/" + file + "/raw";
    }
    else if (gist === false) {
        link.href = "https://raw.githubusercontent.com/" + repo + "/main/" + file;
    }
    image.src = "/assets/svg/language.svg";
    button.classList = "edit-gist"
    text.textContent = "RAW";
    link.target = "_blank";
    image.classList = "svg";
    button.appendChild(image);
    button.appendChild(text);
    link.appendChild(button);
    holder.appendChild(link);
}

function anchorRepo(repo, holder) {
    var link = document.createElement("a");
    var button = document.createElement("button");
    var image = document.createElement("img");
    var text = document.createElement("p");
    link.href = "https://github.com/" + repo;
    image.src = "/assets/svg/trademark/repo.svg";
    button.classList = "edit-gist"
    text.textContent = repo.split("/")[1];
    link.target = "_blank";
    image.classList = "svg";
    button.appendChild(image);
    button.appendChild(text);
    link.appendChild(button);
    holder.appendChild(link);
}

function anchorHolder(user, holder) {
    var link = document.createElement("a");
    var button = document.createElement("button");
    var image = document.createElement("img");
    var text = document.createElement("p");

    link.href = "https://github.com/" + user;
    image.src = "/assets/svg/trademark/organisation.svg";
    button.classList = "edit-gist"
    text.textContent = "@ " + user;
    link.target = "_blank";
    image.classList = "svg";
    button.appendChild(image);
    button.appendChild(text);
    link.appendChild(button);
    holder.appendChild(link);
}

async function getMarkdown(url) {
    console.info("Loading download markdown");
    var data = (await fetch(url)).text();
    return data;
}

function anchorButton(repo, file, gist, holder) {
    var link = document.createElement("a");
    var button = document.createElement("button");
    var image = document.createElement("img");
    var text = document.createElement("p");
    if (gist === true) {
        link.href = "https://gist.github.com/" + repo + "/" + file;
        button.classList = "edit-gist"
    }
    else if (gist === false) {
        link.href = "https://github.com/" + repo + "/blob/main/" + file;
        button.classList = "edit-md"
    }
    image.src = "/assets/svg/trademark/github.svg";
    text.textContent = file.split('/').pop();
    link.target = "_blank";
    image.classList = "svg";
    button.appendChild(image);
    button.appendChild(text);
    link.appendChild(button);
    holder.appendChild(link);
}

function anchorEdit(repo, file, gist, holder) {
    var link = document.createElement("a");
    var button = document.createElement("button");
    var image = document.createElement("img");
    var text = document.createElement("p");
    if (gist === true) {
        link.href = "https://gist.github.com/" + repo + "/" + file + "/edit";
        button.classList = "edit-gist"
    }
    else if (gist === false) {
        link.href = "https://github.com/" + repo + "/edit/main/" + file;
        button.classList = "edit-md"
    }
    image.src = "/assets/svg/edit.svg";
    text.textContent = "Modifier";
    link.target = "_blank";
    image.classList = "svg";
    button.appendChild(image);
    button.appendChild(text);
    link.appendChild(button);
    holder.appendChild(link);
}

function setAnchorButton(id, asset) {
    var content = document.querySelector(id);

    var button = document.createElement("button");
    button.id = "SummaryAnchor";
    var image = document.createElement("img");

    button.onclick = function () {
        var anchorList = document.getElementById("anchorList");

        if (anchorList.style.display === "none") {
            anchorList.style.display = "grid";
        }
        else {
            anchorList.style.display = "none";
        }
    }

    image.classList = "svg";
    image.src = asset;

    button.appendChild(image);
    content.appendChild(button);
}

function setAnchor() {
    setAnchorButton("#anchor", "/assets/svg/book.svg");
    var anchorList = document.createElement("div");
    anchorList.id = "anchorList";
    var contentLeft = document.getElementById("content-left");
    contentLeft.appendChild(anchorList);

    var divAnchorTitle = document.createElement("div");
    divAnchorTitle.id = "AnchorTitle";



    var anchorTitleLogo = document.createElement("img");
    anchorTitleLogo.src = "/assets/svg/book.svg";
    anchorTitleLogo.classList = "svg";
    anchorTitleLogo.style = "max-width: 25px; transform: translateY(25%); padding-right: 15px; padding-left: 10px;"
    divAnchorTitle.appendChild(anchorTitleLogo);

    var anchorTitle = document.createElement("b");
    anchorTitle.textContent = "Sommaire"
    divAnchorTitle.appendChild(anchorTitle);

    var AnchorSummary = document.createElement("div");
    AnchorSummary.id = "AnchorSummary";

    var check = document.createElement("div");
    check.classList = "check";
    check.style = "padding:10px;";
    var checkbox = document.createElement("div");
    checkbox.classList = "checkboxToggle invert";
    var input = document.createElement("input");
    input.type = "checkbox";
    var isOn = false;
    input.onclick = () => {
        var list = document.getElementById('anchorList').getElementsByClassName("summary-hidder");

        if (isOn) {
            isOn = false;

        } else {
            isOn = true;
        }

        console.log("run");
        for (i = 0; i < list.length; i++) {
            var childDiv = list[i];
            if (isOn) {
                childDiv.style.display = "none";
            } else {
                childDiv.style.display = "block";
            }
            console.log("run child");
        }
    };
    var textCheck = document.createElement("p");
    textCheck.textContent = "# Titre 3+";
    textCheck.style = "padding:10px;";
    var span = document.createElement("span");



    //

    var check2 = document.createElement("div");
    check2.classList = "check";
    check2.style = "padding:10px;";
    var checkbox2 = document.createElement("div");
    checkbox2.classList = "checkboxToggle invert";
    var input2 = document.createElement("input");
    input2.type = "checkbox";
    var isOn2 = false;
    input2.onclick = () => {
        var list2 = document.getElementById('anchorList').getElementsByClassName("summary-h2");

        if (isOn2) {
            isOn2 = false;
        } else {
            isOn2 = true;
        }

        console.log("run");
        for (i = 0; i < list2.length; i++) {
            var childDiv2 = list2[i];
            if (isOn2) {
                childDiv2.style.display = "none";
            } else {
                childDiv2.style.display = "block";
            }
            console.log("run child");
        }
    };
    var textCheck2 = document.createElement("p");
    textCheck2.textContent = "Titre #2";
    textCheck2.style = "padding:10px;";
    var span2 = document.createElement("span");


    check2.appendChild(checkbox2);
    check2.appendChild(textCheck2);
    checkbox2.appendChild(input2);
    checkbox2.appendChild(span2);
    AnchorSummary.appendChild(check2);

    //

    check.appendChild(checkbox);
    check.appendChild(textCheck);
    checkbox.appendChild(input);
    checkbox.appendChild(span);
    AnchorSummary.appendChild(check);

    anchorList.appendChild(divAnchorTitle);
    anchorList.appendChild(AnchorSummary);
    setAnchorButton("#AnchorSummary", "/assets/svg/close.svg");


    var childDivs = document.getElementById('markdown').querySelectorAll("h1, h2, h3, h4, h5, h6");

    for (i = 0; i < childDivs.length; i++) {
        var childDiv = childDivs[i];
        var textPre = childDiv.textContent;
        var text = textPre.replaceAll(" ", "-");
        var text = text.replaceAll("'", "");
        var text = text.replaceAll(":", "");
        var text = text.replaceAll("@", "");
        var text = text.replaceAll("(", "");
        var text = text.replaceAll(")", "");
        var anchor = document.createElement("a");
        anchor.href = "#" + text;
        anchor.id = text;
        anchor.style = "padding-left:12px;scroll-margin-top: 100px;";
        childDiv.append(anchor);

        var anchorOnList = document.createElement("a");
        anchorOnList.href = "#" + text;
        if (childDivs[i].tagName.toLocaleLowerCase() === "h1") {
            anchorOnList.textContent = "#1 " + textPre;
            anchor.textContent = "#";
            anchorOnList.style = "padding-left:5px;font-size: large;";
            anchorOnList.className = "summary-h1";
        }
        else if (childDivs[i].tagName.toLocaleLowerCase() === "h2") {
            anchorOnList.textContent = "#2 " + textPre;
            anchor.textContent = "##";
            anchorOnList.style = "padding-left:10px;text-decoration:none;font-size: medium;";
            anchorOnList.className = "summary-h2";
        }
        else if (childDivs[i].tagName.toLocaleLowerCase() === "h3") {
            anchorOnList.textContent = "#3 " + textPre;
            anchor.textContent = "###";
            anchorOnList.style = "padding-left:15px;text-decoration:none;font-size: small;";
            anchorOnList.className = "summary-hidder";
        }
        else if (childDivs[i].tagName.toLocaleLowerCase() === "h4") {
            anchorOnList.textContent = "#4 " + textPre;
            anchor.textContent = "####";
            anchorOnList.style = "padding-left:20px;text-decoration:none;font-size: x-small;";
            anchorOnList.className = "summary-hidder";
        }
        else if (childDivs[i].tagName.toLocaleLowerCase() === "h5") {
            anchorOnList.textContent = "#5 " + textPre;
            anchor.textContent = "#####";
            anchorOnList.style = "padding-left:25px;text-decoration:none;font-size: x-small;";
            anchorOnList.className = "summary-hidder";
        }
        else if (childDivs[i].tagName.toLocaleLowerCase() === "h6") {
            anchorOnList.textContent = "#6 " + textPre;
            anchor.textContent = "######";
            anchorOnList.style = "padding-left:30px;text-decoration:none;font-size: x-small;";
            anchorOnList.className = "summary-hidder";
        }
        else {
            anchorOnList.textContent = "#7+ " + textPre;
            anchor.textContent = "#7+";
            anchorOnList.style = "padding-left:35px;text-decoration:none;font-size: xx-small;";
            anchorOnList.className = "summary-hidder";
        }
        anchorList.appendChild(anchorOnList);
    }
}

function autoScroll() {
    var hash = decodeURIComponent(window.location.hash);
    hash = hash.replace("#", "");

    var element = document.getElementById(hash);
    if (element !== null) {
        element.scrollIntoView();
    }
}

function addHRChapter() {
    var hr = document.createElement("hr");
    hr.style.marginTop = "100px"; hr.style.marginBottom = "100px";
    document.getElementById("markdown").appendChild(hr);
}
