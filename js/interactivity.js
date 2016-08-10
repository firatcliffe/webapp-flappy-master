jQuery("#scoresbtn").on("click", function() {
  console.log("Gimme the scores man");
    jQuery("#content").empty();
    jQuery("#content").append(
        "<ul>" +
            "<li>" + "Me" + "</li>" +
            "<li>" + "Myself(ie)" + "</li>" +
            "<li>" + "I" + "</li>" +
        "</ul>"
    );
});

jQuery("#creditsbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append(
        "<div>" + "Game (loosely) created by Flo! (and a lot by Sam)" + "</div>"
    );
});

jQuery("#helpbtn").on("click", function() {
    jQuery("#content").empty();
    jQuery("#content").append("<ul>" + "<li>" + "Press [SPACE] to flap your wings" + "</li>" + "<li>" + "Don't touch the pipes" + "</li>" + "</ul>");
});

function registerScore (score) {
  var playerName = prompt("What's your name?");
  var scoreEntry = "<li>" + playerName + ":" + score.toString() + "</li>";
}
