if(document.referrer.search("adfs.prd1.prdroot.net")>=0) 
{
    console.log("Referrer: " + document.referrer);
    console.log("Location: " + window.location.href);
    console.log("Running Boost-srcipt"); 

    if(!document.querySelector('#BoostTrigger') && window.location.pathname.search('/admin/')<0) {

        const BoostTrigger = document.createElement('img');
        BoostTrigger.id = 'BoostTrigger';
        BoostTrigger.src = 'https://boost-files-general-eu-west-1-prod.s3-eu-west-1.amazonaws.com/files/MODERNAINTERNAL/QshaBkFJpUrOT6RDAGyubBlg5KFmKj_QDH-EWh_l4G6XyDhWgkfFkZGcAYip5EEBNTk_8o8FtQfuFL-FmamCwB0YOSKhm2mMto1-Zaqw6wzZqH3kwH4e7I3qY-G_Q0vDXz3EEQ==';
        BoostTrigger.classList.add('modal_trigger');
        BoostTrigger.style = 'position: fixed;bottom: 1em;right: 2em;cursor:pointer;width: 60px;height:60px;border-radius: 50%;';
        BoostTrigger.onload = function() {

            const BoostScript = document.createElement('script');
            BoostScript.src = 'https://300modernainternal.boost.ai/chatPanel/chatPanel.js';
            BoostScript.id = 'BoostScript';
            BoostScript.onload = function () {

                const conversationIdMatch = /conversation_id=([^&]*)/.exec(document.location.search);
                const conversationId = conversationIdMatch !== null ? decodeURIComponent(conversationIdMatch[1]) : null;

                // Create chat panel
                var chatPanel = window.boostChatPanel({
                                apiUrlBase: 'https://300modernainternal.boost.ai/api',
                                conversationId: conversationId,
                                pace: 'supersonic'
                });

                // Open the chat panel on load
                //chatPanel.show();

                // Open panel on click
                document.querySelector('.modal_trigger')
                                .addEventListener('click', function () {
                                                chatPanel.show();
                });

            }
            document.head.append(BoostScript);

        }
        document.body.append(BoostTrigger);

    }
} 
else if (window.location.href.search("notice")<0)
{
  window.location.replace("https://adfs.prd1.prdroot.net/adfs/ls/idpinitiatedsignon.aspx?logintoRP=https://300modernainternal.boost.ai/api/auth/saml2/metadata/");
}
