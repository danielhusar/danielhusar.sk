(function(window, document){
  'use strict';

  //wait a little and add class to body so we can trigger some animations
  window.setTimeout(function(){
    document.getElementsByTagName('body')[0].className += ' page-loaded';
  }, 10);

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

})(this, this.document);
