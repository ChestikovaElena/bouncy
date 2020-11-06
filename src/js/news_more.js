document.getElementById("news-more-button").onclick = function() {
    var news_more_button = document.getElementById("news-more-button");
    var news_more_text = document.getElementById("news-more-text");
    news_more_text.style.display = (news_more_text.style.display == 'block')? 'none' : 'block';
    news_more_button.textContent = (news_more_text.style.display == 'block')? "- Read More" : "+ Read More";
}