if(!document.querySelector('#BoostTrigger') && window.location.pathname.search('/admin/')<0) {

    const BoostTrigger = document.createElement('img');
    BoostTrigger.id = 'BoostTrigger';
    //BoostTrigger.src = 'https://300modernainternal.boost.ai/img/agent.png';
    BoostTrigger.src = 'https://boost-files-general-eu-west-1-prod.s3-eu-west-1.amazonaws.com/files/MODERNAINTERNAL/QshaBkFJpUrOT6RDAGyubBlg5KFmKj_QDH-EWh_l4G6XyDhWgkfFkZGcAYip5EEBNTk_8o8FtQfuFL-FmamCwB0YOSKhm2mMto1-Zaqw6wzZqH3kwH4e7I3qY-G_Q0vDXz3EEQ==';
    BoostTrigger.classList.add('modal_trigger');
    //BoostTrigger.style = 'position: fixed;bottom: 1em;right: 2em;cursor:pointer;width: 100px;';
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
                            apiUrlBase: 'https://odd-water-128c.molin-jesper.workers.dev/api',
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
