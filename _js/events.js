(function(window, document){
  'use strict';

  //wait a little and add class to body so we can trigger some animations
  window.setTimeout(function(){
    document.getElementsByTagName('body')[0].className += ' page-loaded';
  }, 100);

  //open discussion
  var commentsTrigger = document.querySelector('[data-trigger="comments"]');
  if(commentsTrigger){
    commentsTrigger.addEventListener('click', function(e){
      e.preventDefault();
      this.className += ' hidden';
      var dsq = document.createElement('script');
      dsq.async = true;
      dsq.src = '//danielhusar.disqus.com/embed.js';
      document.getElementsByTagName('head')[0].appendChild(dsq);
    }, false);
  }

  //history back
  var historyTrigger = document.querySelector('[data-trigger="back"]');
  if(historyTrigger){
    historyTrigger.addEventListener('click', function(e){
      if(document.referrer && document.referrer.indexOf('http://localhost:8000/') !== -1 && window.history.back){
        e.preventDefault();
        window.history.back();
      }
    }, false);
  }

  //open popup
  var popupTriggers = document.querySelectorAll('[data-trigger="popup"]');
  var popupTrigger;
  for(var i = 0, length = popupTriggers.length; i < length; i++){
    if(popupTrigger = popupTriggers[i]){
      popupTrigger.addEventListener('click', function(e){
        var left = (screen.width / 2)  - (700 / 2);
        var top = (screen.height / 2) - (500 / 2);
        var href = this.href;
        var title = this.title;
        window.open(href,
                    title,
                    'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=700, height=500, top=' + top + ', left=' + left);
          e.preventDefault();
      }, false);
    }
  }

})(this, this.document);
