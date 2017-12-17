$(document).ready(function(){

  var client= "?client_id=vu17nt9hyqfphcoaoh23415f37oso9";
  var users =["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  var link = "https://api.twitch.tv/kraken/streams/";
  var link2 = "https://api.twitch.tv/kraken/channels/";
  var off = "offline";
  var offline = [];
  var online = [];

  users.forEach(function(item){
        $.getJSON(link+item+client, function(data){
            if(data.stream != null){
                online.push(item);
                $(".streaming").app
            }else{offline.push(item);}
        });

  });

  console.log(online);
    console.log(offline);

  $(".all").on('click', function(){
      cleanDiv();
      users.forEach(findOnline);
      offline.forEach(findOffline);
      online=[];
      offline=[];
  });
  
  $(".online").on('click', function(){
      users.forEach(findOnline);
      offline=[];
  })

  $(".offline").on('click', function(){
      offline.forEach(findOffline);
      online=[];
  })

    
    
    link = "https://api.twitch.tv/kraken/streams/";
    link2 = "https://api.twitch.tv/kraken/channels/";
  
function findOnline(item){
      cleanDiv();
     $.getJSON(link+item+client, function(data){
          if(data.stream != null){
            online.push(item);
            $(".streaming").append("<a href='"+data.stream.channel.url+"' target='_blank'><div id='tabs'> <div id='"+data.stream._id+"' class='image inline content'></div> <div class='channelName inline content'><p>"+data.stream.channel.display_name+"</p></div> <div class='description inline content'><p>"+data.stream.channel.status+"</p></div></div></a>")
            $("#"+data.stream._id).css({"background": "url("+data.stream.channel.logo+")", "background-size": "100px 50px"});
            console.log(data.stream.channel.logo + "..."+data.stream._id);
          }else{
            offline.push(item);
          }
      });
}

function findOffline(item){
      cleanDiv();

      $.getJSON(link2+item+client, function(data){
            $(".streaming").append("<a href='"+ data.url+"' target='_blank'><div id='tabs'> <div id='"+data._id+"' class='image inline content'></div> <div class='channelName inline content'><p>"+data.display_name+"</p></div> <div class='description inline content'><p>"+off+"</p></div></div></a>")
            $("#"+data._id).css({"background": "url("+data.logo+")", "background-size": "100px 50px"});
            console.log(data._id+", "+data.display_name+" ,"+ data.logo);
      });
}

function cleanDiv(){
      var streaming = $('.streaming');
      streaming.empty();
      if(streaming.css('display') === 'none'){
        streaming.css('display', 'inline-block');
      }
}
    

});   