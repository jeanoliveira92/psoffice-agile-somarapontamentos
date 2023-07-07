/**
 * Function that returns a random number
 * @author Jean Carlos de Oliveira
 * @see {@link https://github.com/jeanoliveira92/psoffice-agile-somarapontamentos} 
*/

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    if (msg.command == 'complete') {
        let total = moment.duration(0);

        msg.data.forEach(element => {
            total.add(moment.duration(element))
        });

        totalFormatado = moment.utc(total.asMilliseconds()).format("HH:mm");

        document.querySelector('.extTotal').innerHTML = totalFormatado;
    }
});


document.querySelector('.container .btnClickExt').addEventListener('click', function (e) {

    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];

        if (activeTab.url.includes('pso-zenvia.jexperts.cloud/agile/agiles')) {
            chrome.tabs.sendMessage(activeTab.id, { command: "getTimes", data: [""] });
        }
    });


});