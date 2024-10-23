async function CheckPage() {
    if (pathNameMatchPage("/cours/readme", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/README.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/markdown", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Github/Markdown/Learning.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Github/Markdown/Listing.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/markdown-listing", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Github/Markdown/Listing.md', false, false);
            await addMarkdown('github/.github', 'profile/README.md', false, false);
            await addMarkdown('lx78WyY0J5', '1525e23e7a3502c71014a499394ee967', true, true);
        });
    }

    else if (pathNameMatchPage("/cours/github-readme", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('github/.github', 'profile/README.md', false, false);
            await addMarkdown('lx78WyY0J5', '1525e23e7a3502c71014a499394ee967', true, true);
        });
    }

    else if (pathNameMatchPage("/cours/fibre", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/fibre.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/web", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/learning.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/liste.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/learning.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/media-queries.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/liste.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/boilerplate.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/SQL/learning.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/html", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/learning.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/liste.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/boilerplate.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/css", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/learning.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/media-queries.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/liste.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/js", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/JS/learning.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/binaire", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/Binaire/learning.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/Binaire/ip.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/lm-studio", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/IA/learning.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/scam", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Scam/learning.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/retraite", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Retraite/learning.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/windows", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Windows/learning.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Windows/console.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/linux", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/man.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/cmd-parameters.md', false, false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/directory.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/lister.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/file.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/permission.md', false, false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/arithmetique.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/logique.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/variable.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/os-version.md', false, false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/alias.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/apt.md', false, false);

            // await addMarkdown('Altherneum/.github', 'note/OS/Linux/arch.md', false, false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/process.md', false, false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/remote.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/remote-ssh.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/UFW.md', false, false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/HTTPD-from-src.md', false, false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/user.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/sudo.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/password.md', false, false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/copy-paste.md', false, false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/LVM.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/docker", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/Docker.md', false, true);
        });
    }


    else if (pathNameMatchPage("/cours/sql", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/SQL/learning.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/google-dorks", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Google/dorking.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/google-doodle", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Google/doodle.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/forkBomb", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/forkBomb.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/ip", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/ip.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/Binaire/ip.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/protocoles", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/protocoles.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/ethernet", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/wires.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/network", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/networks.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/OSI.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/cast.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/hyper-v", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Windows/hyper-v.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/dns", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Active-Directory/DNS.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/enterprise-network", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/enterprise-network.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/active-directory", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Active-Directory/active-directory.md', false, true);
        });
    }


    else if (pathNameMatchPage("/cours/active-directory-approbation", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Active-Directory/approbation.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/gpo", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Active-Directory/gpo.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/cisco", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/cisco.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/routage.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/dhcp.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/vlan.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/router-on-stick.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/fil-rouge.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/acl.md', false, true);
        });
    }

    else if (pathNameMatchPage("/cours/powershell", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/powershell.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/cmd.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/variables.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/arithmetique.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/logique.md', false, false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/powershell-AD.md', false, true);
        });
    }

    else {
        return false;
    }
    return true;
}