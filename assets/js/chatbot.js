$(document).ready(() => {
    $(document).on("click", "#chatbot", () => {
        $("#emailchat-detailElem").toggle();
        $("#iconchat").toggleClass("fa-solid fa-xmark fa-solid fa-comment");
        $("#input").focus();
    });

    const userTexts = [
        ["hi", "hey", "hello", "good morning", "good afternoon", "good day"],
        [
            "how are you",
            "how is life",
            "how are things",
            "how are you doing",
            "are you doing good",
            "are you fine",
            "how is your day going",
            "how is your day",
            "what's up",
            "whats up",
            "you good",
        ],
        [
            "what are you doing",
            "what is going on",
            "what is up",
            "what's up",
            "whats up",
            "you good",
        ],
        [
            "how is your day",
            "how was your day",
            "how did your day go",
            "how's your day going",
            "how's your day",
            "hows your day",
            "how's your day going",
            "how is your day going",
        ],
        ["how old are you", "are you old"],
        ["who are you", "are you human", "are you bot", "are you human or bot"],
        ["who created you", "who made you", "were you created"],
        [
            "your name please",
            "your name",
            "may i know your name",
            "what is your name",
            "what call yourself",
            "What are you called",
            "What do i call you",
            "do you have a name",
            "tell me your name",
        ],
        ["i love you", "i like you"],
        [
            "happy",
            "good",
            "fun",
            "wonderful",
            "fantastic",
            "cool",
            "nice",
            "lovely",
        ],
        ["bad", "bored", "tired", "sad"],
        ["help me", "tell me story", "tell me joke", "im bored"],
        ["ah", "yes", "ok", "okay", "nice"],
        ["bye", "good bye", "goodbye", "see you later"],
        ["what should i eat today", "what do i cook today"],
        ["bro"],
        ["what", "why", "how", "where", "when"],
        ["no", "not sure", "maybe", "no thanks"],
        [""],
        ["haha", "ha", "lol", "hehe", "funny", "joke", "lmao"],
        ["im ok", "im good", "im okay", "im fine", "good"],
        ["authenticate", "how to authenticate", "authentication problem"],
        ["message information"],
        ["other"],
        [
            "how to send message",
            "how this website works?",
            "what is the flow of website?",
            "flow of website",
        ],
        ["how to subscribe a plan", "how to pay"],
        [
            "what are the plans",
            "plan description",
            "plans details",
            "plan details",
            "plans description",
        ],
        [
            "why error is coming from google sheet",
            "why error is coming from csv file",
            "why error is coming from local file",
            "why error is coming from local csv file",
            "why website is not recognizing phone number",
            "why website is not recognizing column of mobile number",
            "why message is not sent",
            "what is the problem with data",
            "what is the problem with csv file",
            "what is the problem with google sheet",
            "what is the problem with google sheet file",
        ],
        [
            "what is custom template",
            "what is the use of custom template",
            "tell me about custom template",
            "tell me something about custom template",
        ],
        [
            "what is the use of channel",
            "use of channel",
            "why should we have to create channel",
            "purpose of channel",
            "what is the purpose of channel",
        ],
        [
            "Why we should save contact information",
            "why we should save contact",
            "use of contact",
            "purpose of contact",
            "purpose of contact list",
            "use of contact list",
        ],
        [
            "what is email configuration",
            "use of email configuration",
            "purpose of email configuration",
            "what is the purpose of email configuration",
            "what is the use of email configuration",
            "why error is coming while sending email",
        ],
        [
            "where is the payment option",
            "how to go to the payment page",
            "how to go to the subscription page",
        ],
    ];

    const botReplies = [
        ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
        ["Fine... and you?", "Pretty well, and you?", "Fantastic, and you?"],
        [
            "Nothing much",
            "About to go to sleep",
            "I'm just chilling",
            "I don't know actually",
        ],
        ["Been good so far"],
        ["I am infinite"],
        ["I am just a bot", "I am a bot. What are you?"],
        ["The one true God, JavaScript"],
        ["I am nameless", "I don't have a name"],
        ["I love you too", "Me too"],
        ["Have you ever felt bad?", "Glad to hear it"],
        ["Why?", "Why? You shouldn't!", "Try watching TV"],
        ["What about?", "Once upon a time... that's the end of my story"],
        ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
        ["Bye", "Goodbye", "See you later"],
        ["Sushi", "Pizza"],
        ["Bro!"],
        ["Great question"],
        ["That's ok", "I understand", "What do you want to talk about?"],
        ["Please say something :("],
        ["Haha!", "Good one!"],
        ["that's nice", "that's good", "nice", "okay"],
        [
            "1. Click on scanQR button to generate a QRcode<br>2. Scan QR-code and then wait for sometime to Authenticate message.",
        ],
        [
            "1. Enter valid mobile-number to send a message<br>2. Enter image to send a image.<br>video or Gif not a supported.",
        ],
        ["For any other problem dial on 9898737345"],
        [
            "1. First create an instance. <br>2. Then go to that instance and <br> &emsp; scan qr code for whatsapp.<br>3. Select API of your choice and <br> &emsp; then send the appropriate <br> &emsp; message.<br>4. If you want to send message <br> &emsp; from google sheet or local csv <br> &emsp; file, name of column for <br> &emsp; mobile number must be <br> &emsp; <b>'phone'</b> and for client names, <br> &emsp; it should be <b>'name'</b>. Other <br> &emsp; columns are allowed.",
        ],
        [
            "1. Go to the subscription page<br>2. Select plan of your choice<br>3. Click on Subscribe button<br>4. Pay the amount of selected<br> &emsp; plan",
        ],
        [
            "We have 5 plans<br><br>1. Basic Plan (Monthly) Free<br>2. Standard Plan (Monthly) of <br> &emsp; 1000 &#8377;<br>3. Premium Plan (Monthly) of <br> &emsp; 2000 &#8377;<br>4. Standard Plan (Yearly) of <br> &emsp; 10000 &#8377;<br>5. Premium Plan (Yearly) of <br> &emsp; 20000 &#8377;",
        ],
        [
            "The Google Sheet or Local CSV file must have column name of <b>'phone'</b> for mobile number, <b>'name'</b> for client name and <b>'email'</b> for email",
        ],
        [
            "Custom template means you can create your own template with the message you want. You also have to provide userfields means number of columns you want to replace data with.",
        ],
        [
            "With the help of channel, you can group contacts into a single unit and use the channel afterwards to send the message or email to regular customers.",
        ],
        [
            "By storing contact details, you can avoid selecting google sheets or local csv file every time and can save your time by storing the contact details of the regular clients in the contact list",
        ],
        [
            "To send email from your registered email address, you have to create app password for your gmail acoount and set it as your <b>'App password for gmail'</b>. To do the above, you have to follow the steps given on the Email Configuration page",
        ],
        [
            "Click on your profile button on header, then click on the pay option from the dropdown list. You will be redirected to the subscription page for payment.",
        ],
    ];

    // console.log(botReplies.length);
    // console.log(userTexts.length);

    const alternative = ["Try again", "Try another one", "I am not able to understand", "I don't understand"];

    const inputValue = document.getElementById("input");
    let finalResult, reply;
    const messagesContainer = document.getElementById("conversation");
    var date_ob = new Date();
    var i = 0;

    function output(input) {
        inputValue.value = "";

        // Regex remove non word/space chars
        // Trim trailing whitespce
        // Remove digits - not sure if this is best

        let text = input
            .toLowerCase()
            .replace(/[^\w\s]/gi, "")
            .replace(/[\d]/gi, "")
            .trim();

        // text = text
        //     .replace(/ a /g, " ") // replaces 'tell me a story' to 'tell me story'
        //     .replace(/i feel /g, "")
        //     .replace(/whats/g, "what is") // replaces "whats" to "what is"
        //     .replace(/please /g, "")
        //     .replace(/ please/g, "")
        //     .replace(/r u/g, "are you"); //replaces "r u" to "are you"

        if (compare(userTexts, botReplies, text)) {
            // search for exact match in `userTexts`
            finalResult = compare(userTexts, botReplies, text);
        } else {
            // if everything else fails, bot produces a random alternative reply
            finalResult = alternative[Math.floor(Math.random() * alternative.length)];
        }

        // to update our HTML DOM element
        addToChat(input, finalResult);
    }

    // function to match the bot's reply to a user's text
    function compare(userTexts, botReplies, text) {
        for (let x = 0; x < userTexts.length; x++) {
            for (let y = 0; y < botReplies.length; y++) {
                console.log(text);
                if (userTexts[x][y] === text) {
                    let replies = botReplies[x];
                    reply = replies[Math.floor(Math.random() * replies.length)];
                }
                else {
                    reply = alternative[Math.floor(Math.random() * alternative.length)]
                }
            }
        }
        return reply;
    }

    function addToChat(input, finalResult) {
        i++;
        let userDiv = document.createElement("li");
        userDiv.id = `user${i}`;
        userDiv.tabindex = `${i}`;
        userDiv.className = "chat-list right";
        userDiv.innerHTML = `
                      <div class="conversation-list">
                          <div class="user-chat-content">
                              <div class="ctext-wrap">
                                  <div class="ctext-wrap-content">
                                      <p class="mb-0 ctext-content">${input}</p>
                                  </div>
                              </div>
                              <div class="conversation-name">
                                  <small class="text-muted time">${date_ob.getHours()} : ${date_ob.getMinutes()}</small>
                                  <span class="text-success check-message-icon">
                                      <i class="ri-check-double-line align-bottom"></i>
                                  </span>
                              </div>
                          </div>
                      </div>`;
        messagesContainer.appendChild(userDiv);

        let botDiv = document.createElement("div");
        let botImg = document.createElement("img");
        let botText = document.createElement("span");
        botDiv.id = `bot${i}`;
        botDiv.tabindex = `${i}`;
        botImg.className = "avatar";
        botDiv.className = "chat-list left";
        botText.innerHTML = `
                      <li class="chat-list left">
                          <div class="conversation-list">
                              <div class="user-chat-content">
                                  <div class="ctext-wrap">
                                      <div class="ctext-wrap-content bg-soft-info">
                                          <p class="mb-0 ctext-content">Typing</p>
                                      </div>
                                  </div>
                                  <div class="conversation-name">
                                      <small class="text-muted time">${date_ob.getHours()} : ${date_ob.getMinutes()}</small>
                                      <span class="text-success check-message-icon">
                                          <i class="ri-check-double-line align-bottom"></i>
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </li>`;
        botDiv.appendChild(botImg);
        botDiv.appendChild(botText);
        messagesContainer.appendChild(botDiv);
        // Keep messages at most recent
        messagesContainer.scrollTop =
            messagesContainer.scrollHeight - messagesContainer.clientHeight;

        // Fake delay to seem "real"
        setTimeout(() => {
            botText.innerHTML = `
                      <li class="chat-list left">
                          <div class="conversation-list">
                              <div class="user-chat-content">
                                  <div class="ctext-wrap">
                                      <div class="ctext-wrap-content bg-soft-info">
                                          <p class="mb-0 ctext-content">${finalResult}</p>
                                      </div>
                                  </div>
                                  <div class="conversation-name">
                                      <small class="text-muted time">${date_ob.getHours()} : ${date_ob.getMinutes()}</small>
                                      <span class="text-success check-message-icon">
                                          <i class="ri-check-double-line align-bottom"></i>
                                      </span>
                                  </div>
                              </div>
                          </div>
                      </li>`;
        }, 2000);
        var target = $(`#bot${i}`);
        $("#conversation").animate(
            {
                scrollTop: target.offset().top,
            },
            1000
        );
    }

    $("#conversation").html(`
                  <li class="chat-list left">
                      <div class="conversation-list">
                          <div class="user-chat-content">
                              <div class="ctext-wrap">
                                  <div class="ctext-wrap-content bg-soft-info">
                                      <p class="mb-0 ctext-content">
                                          Hii Qit at your service.
                                      </p>
                                      <p class="mb-0 ctext-content">
                                          How can I Help you?
                                      </p>
                                  </div>
                              </div>
                              <input type="button" class="que btn btn-outline-success waves-effect waves-line mb-1"
                                  value="Authentication" name="authenticate" id="authenticate" /><br />
                              <input type="button" value="Message Information" name="message" 
                                  class="btn btn-outline-success  waves-effect waves-line que mb-1" id="msginfo" /><br />
                                  <input type="button" value="Email Configuration" name="emailconfig" 
                                  class="btn btn-outline-success  waves-effect waves-line que mb-1" id="emailconfig" /><br />
                              <input type="button" class="que btn btn-outline-success waves-effect waves-line mb-1" value="Other"
                                  id="other" name="Other"/>
                          </div>
                      </div>
                  </li>`);

    $("#input").keypress((e) => {
        var keycode = e.keyCode ? e.keyCode : e.which;
        if (keycode == "13") {
            $("#sendbotmsg").click();
        }
    });

    $(document).on("click", "#sendbotmsg", function () {
        // console.log(inputValue.value);
        output(inputValue.value);
    });

    $("#authenticate").on("click", function () {
        Authenticate();
    });

    $("#msginfo").on("click", function () {
        Message();
    });

    $("#emailconfig").on("click", function () {
        EmailConfig();
    });

    $("#other").on("click", function () {
        Other();
    });

    function Authenticate() {
        inputValue.value = "Authenticate";
        $("#sendbotmsg").click();
    }

    function Message() {
        inputValue.value = "Message Information";
        $("#sendbotmsg").click();
    }

    function EmailConfig() {
        inputValue.value = "what is email configuration";
        $("#sendbotmsg").click();
    }

    function Other() {
        inputValue.value = "Other";
        $("#sendbotmsg").click();
    }
});
