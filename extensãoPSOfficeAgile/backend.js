/**
 * @author Jean Carlos de Oliveira
 * @see {@link https://github.com/jeanoliveira92/psoffice-agile-somarapontamentos} 
*/

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.command == "getTimes") {

        var time = [...document.getElementsByClassName("row-list-component")].map(e => { return e.getElementsByClassName("col-md-6")[3].getElementsByClassName("col-md-2")[0].getElementsByClassName("font-weight-bold")[0].innerHTML })

        window.ScraperExt = time;
        chrome.runtime.sendMessage({ command: "complete", data: window.ScraperExt });
    } else {
        chrome.runtime.sendMessage({ command: "uncomplete", data: undefined });
    }
})