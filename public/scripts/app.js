/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];



var tweetData =
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }



$(document).ready(function() {


function loadTweets(){        //gets our tweets from the /tweets page.
    $.ajax({
       url: '/tweets',
       method: 'GET',
       success: renderTweets
     })
}

  loadTweets();





function renderTweets(tweets) {
  for (tweet of tweets) {  // loops through tweets
    console.log(tweet)
    var $tweet = createTweetElement(tweet)// calls createTweetElement for each tweet
    $('#tweets-container').append($tweet) // takes return value and appends it to the tweets container
  }
}


// $(`<div>${textFromUser}</div>`);
// $("<div>").text(textFromUser)



function createTweetElement(tweetData) {
  var $tweet =
  `<section id="tweets-container" >
    <article class="tweets-container">
      <header class="tweets-header">
        <img class="avatars" src="${tweetData.user.avatars.small}">
        <div class = "name"> <h2> ${tweetData.user.name} </h2> </div>
        <div class = "handle"> <h3> ${tweetData.user.handle} </h3> </div>
      </header>

      <div class="body">
          ${tweetData.content.text}
      </div>

      <footer class="footer">
        <div class = "time"> <h4> ${tweetData.created_at} </h4> </div>
      </footer>

    </article>

   </section>`

 return $tweet;
}


// renderTweets(data)


$(".form-submit").on("submit", function(event) {
  event.preventDefault();
  console.log('this.serialize', $(this).serialize()) //  Serialize => making a 'query string'
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: function(morePostHTML) {
        console.log('Success: ', morePostHTML);
      }
    })
  });


});







//// var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log("$tweet", $tweet); // to see what it looks like

// $(document).ready(function() {
//   $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// });


