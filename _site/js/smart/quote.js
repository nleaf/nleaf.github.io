var listQuotes = [
    {quote: "The unquestionable integrity, intelligence and vision of the leadership team inspires and motivates every employee to passionately contribute to an enjoyable culture that inspires high-quality outcomes for clients.", author: "Sam Sarnicke, Director of Business Development & Technical Solutions"},
    {quote: "Despite the company’s rapid growth and personnel expansion, Expedient still offers a down-to-earth and comfortable work environment… Not only does Expedient encourage professional training but also advancement opportunities from within. I continue to be impressed by demonstrations of integrity. With our customers and employees.  I work for a solid company that cares about its reputation and the quality of service offered.", author: "Tammy Wiggins, Project Manager, Service Delivery"},
    {quote: "I really like the atmosphere and the people who work here. Everyone is professional and friendly. I’ve been with Expedient for almost a year now and could not be happier overall.", author: "Jason Morris, Analyst, Billing Support"},
    {quote: "I enjoy the relaxed atmosphere here at Expedient. All of my co-workers are nice, friendly and have been very helpful with any of my questions. It is nice that Expedient supplies snacks and drinks for its employees.", author: "Diane Baird, Analyst, Billing Support"},
    {quote: "Joining Expedient is the best thing I did for my career. The collaborative work environment here is a thing to experience. My colleagues are experts in their fields and are always open to share their knowledge. I get to work with many cutting-edge industry technologies. I love learning new things and have always been encouraged to explore and innovate in my position. This is a great place to work, as all of my work revolves around helping our customers do their best.", author: "Apurva Patel, Virtualization Engineer, Operations Support Center"},
    {quote: "Expedient is an amazing place to work. The transparency of the company is refreshing and keeps all employees well-informed. Also, the dynamic as a whole is wonderful. With the communication tools that Expedient has in place, we are able to seamlessly work with team members and co-workers from other departments, in other states.", author: "Matt Leary, Systems Engineer, Service Delivery"},
    {quote: "This is the first time out of my last 10 years in the work force that I have felt that a company truly cares about my growth and development, and in doing so, they have made me a believer in the company. I can now say with honesty and assurance that I no longer see Expedient as just another job — I now see Expedient as both a career and a family.", author: "Nick Lansberry, Inside Project Coordinator, Technical Solutions"},
];

var currentQuote = 0;
var progress = setInterval(timerProgress, 40);
var progressWidth = 0;

// var timeDisplayed = 10000;
// var timer = setInterval(changeQuote, timeDisplayed);

function timerProgress() {
  $(".quote-progress").width(progressWidth + "%");
  if(progressWidth < 100) {
    progressWidth += 0.1;
  } else {
    changeQuote();
    progressWidth = 0;
  }
}

function setQuote() {
  $(".quote").html('"' + listQuotes[currentQuote].quote + '"');
  $(".author-name").html(listQuotes[currentQuote].author);
}

function getRandomQuote() {
  currentQuote[0];
  setQuote();
}

function changeQuote() {
  // $("blockquote").fadeToggle( "slow", "linear" );
  if(currentQuote < listQuotes.length - 1){
    currentQuote++;
  } else {
    currentQuote = 0;
  }
  setQuote();
}

$(".previous").click(function() {
  if(currentQuote > 0){
    currentQuote--;
  } else {
    currentQuote = listQuotes.length - 1;
  }
  setQuote();
  progressWidth = 0;
});

$(".next").click(function() {
  changeQuote();
  progressWidth = 0;
});

$(".random").click(function() {
  getRandomQuote();
  progressWidth = 0;
});


getRandomQuote();
