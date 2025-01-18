async function CheckPage() {
    if (pathNameMatchPage("/cours/readme", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/README.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/markdown", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Github/Markdown/Learning.md', false);
            await addMarkdown('Altherneum/.github', 'note/Github/Markdown/Listing.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/markdown-listing", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Github/Markdown/Listing.md', false);
            await addMarkdown('github/.github', 'profile/README.md', false);
            await addMarkdown('lx78WyY0J5', '1525e23e7a3502c71014a499394ee967', true);
        });
    }

    else if (pathNameMatchPage("/cours/github-readme", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('github/.github', 'profile/README.md', false);
            await addMarkdown('lx78WyY0J5', '1525e23e7a3502c71014a499394ee967', true);
        });
    }

    else if (pathNameMatchPage("/cours/fibre", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/fibre.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/web", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/learning.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/liste.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/learning.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/media-queries.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/liste.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/boilerplate.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/SQL/learning.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/JS/learning.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/html", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/learning.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/liste.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/HTML/boilerplate.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/css", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/learning.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/media-queries.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/CSS/liste.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/js", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/JS/learning.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/binaire", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/Binaire/learning.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/Binaire/ip.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/lm-studio", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/IA/learning.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/scam", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Scam/learning.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/retraite", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Retraite/learning.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/windows", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Windows/learning.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Windows/console.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/linux", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/readme.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/introduction.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/man.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/cmd-parameters.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/directory.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/lister.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/file.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/permission.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/arithmetique.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/logique.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/variable.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/os-version.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/alias.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/apt.md', false);

            // await addMarkdown('Altherneum/.github', 'note/OS/Linux/arch.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/process.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/remote.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/remote-ssh.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/UFW.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/HTTPD-from-src.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/user.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/sudo.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Linux/password.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/copy-paste.md', false);

            await addMarkdown('Altherneum/.github', 'note/OS/Linux/LVM.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/docker", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Container/Docker.md', false);
        });
    }


    else if (pathNameMatchPage("/cours/sql", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Code/Web/SQL/learning.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/google-dorks", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Google/dorking.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/google-doodle", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Google/doodle.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/forkBomb", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/forkBomb.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/ip", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/ip.md', false);
            await addMarkdown('Altherneum/.github', 'note/Code/Web/Binaire/ip.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/protocoles", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/protocoles.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/ethernet", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/wires.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/network", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/networks.md', false);
            await addMarkdown('Altherneum/.github', 'note/Network/OSI.md', false);
            await addMarkdown('Altherneum/.github', 'note/Network/cast.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/hyper-v", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Windows/hyper-v.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/dns", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Active-Directory/DNS.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/enterprise-network", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/enterprise-network.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/active-directory", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Active-Directory/active-directory.md', false);
        });
    }


    else if (pathNameMatchPage("/cours/active-directory-approbation", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Active-Directory/approbation.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/gpo", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/Active-Directory/gpo.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/cisco", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/cisco.md', false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/routage.md', false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/dhcp.md', false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/vlan.md', false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/router-on-stick.md', false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/fil-rouge.md', false);
            await addMarkdown('Altherneum/.github', 'note/Network/Cisco/acl.md', false);
        });
    }

    else if (pathNameMatchPage("/cours/powershell", true)) {
        await includes();
        await include_script("/src/js/content/markdown.js").then(async () => {
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/powershell.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/cmd.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/variables.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/arithmetique.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/logique.md', false);
            await addMarkdown('Altherneum/.github', 'note/OS/Windows/PowerShell/powershell-AD.md', false);
        });
    }

    else {
        return false;
    }
    return true;
}