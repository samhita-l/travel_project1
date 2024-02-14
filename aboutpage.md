<html>
<head>
 <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
     <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <div style="text-align: center;">
     <h1>About</h1>
     <p>Our website was designed to help people plan and visualize their trip to San Diego. Our theme was inspired by where we live, and we wanted to help share it with others. Our site gives information on the weather and activities in San Diego, and you can use that information along with our itinerary to plan when and where you want to go. The map embedded into our site makes directions to your activities easily accessible. Create an account on our site to save your travel plans, and you're all set for your next trip to San Diego!
     </p>
     <div id="comment-section">
  <h2>Comments</h2>
  <div id="comments"></div>
  <textarea id="comment-input" placeholder="Add a comment..."></textarea>
  <button onclick="addComment()">Post Comment</button>
</div>
<script>
function addComment() {
  var input = document.getElementById('comment-input');
  var comment = input.value.trim();
  if (comment) {
    var commentsContainer = document.getElementById('comments');
    var newComment = document.createElement('p');
    newComment.textContent = comment;
    commentsContainer.appendChild(newComment);
    input.value = ''; // Clear input field
  } else {
    alert('Please enter a comment.');
  }
}
</script>
</body>
</html>