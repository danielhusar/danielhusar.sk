(function(window, document){
  'use strict';

  //wait a little and add class to body so we can trigger some animations
  window.setTimeout(function(){
    document.getElementsByTagName('body')[0].className+=' page-loaded';
  }, 10);

  //add class to body when user scroll
  window.onscroll = function(e, data){
    if(document.body.scrollTop > 10){

    }else{

    }
  };

})(this, this.document);
