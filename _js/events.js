(function(window, document){
  'use strict';

  //wait a little and add class to body so we can trigger some animations
  window.setTimeout(function(){
    document.getElementsByTagName('body')[0].className += ' page-loaded';
  }, 10);

  document.querySelector('[data-trigger="comments"]').addEventListener('click', function(e){
    e.preventDefault();
    this.className += ' hidden';
    var dsq = document.createElement('script');
    dsq.async = true;
    dsq.src = '//danielhusar.disqus.com/embed.js';
    document.getElementsByTagName('head')[0].appendChild(dsq);
  }, false);
})(this, this.document);
