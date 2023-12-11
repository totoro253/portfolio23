document .addEventListener('DOMContentLoaded',function) {
    document.getElementsByTagName('form')[0].onsubmit=function(evt){
        evt.preventDefault();
        window.scrollTo(0,150)
    }

    document.getElementById('terminalTextInput').focus();
    var textInputValue = document.getElementById('terminalTextInput').value.trim();
    var textResultsValue = document.getElementById('terminalsResultCont').innerHTML;
    var  clearInput = function(){
        document.getElementById('terminalTextInput').value = "";
    }
    var scrollToBottomOfResults = function(){
        var terminalResultsDiv = document.getElementById('terminalResultCont');
        terminalResultDiv =  document.getElementById('terminalResultContent')
    }
    scrollToBottomOfResults();
}
