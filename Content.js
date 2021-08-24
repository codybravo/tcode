document.getElementsByTagName("title")[0].innerText = "MD DANISH";

let html =
`<button id="prt" type="button" class="collapsible">Notification</button>
<div class="content">
    <div class="row">
      <div class="col-25">
        <label for="title">Notification Title</label>
      </div>
      <div class="col-75">
        <input id="notice-title" type="text" placeholder="Notification Title" class="noti_title">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="message">Notification Message</label>
      </div>
      <div class="col-75">
        <textarea id="notice-message" placeholder="Notification Message" style="height:200px" class="noti_message"></textarea>
      </div>
      <div class="col-75">
        <input id="notice-delay" type="number" placeholder="After Delay in Seconds" class="noti_delay">
      </div>
    </div>
    <div class="row">
      <button id="notice-button" type="submit">Submit</button>
    </div>
</div>`;



// injecting notification block 
document.querySelector("body").insertAdjacentHTML("afterbegin", html);


// Sending Signal to create notification in background.js
let notify = function() {
  
  let notice_title = document.getElementById("notice-title");
  let notice_message = document.getElementById("notice-message");
  let notice_delay = document.getElementById("notice-delay");
  chrome.runtime.sendMessage({ notification:true},function(){
      chrome.storage.sync.set({
        title: notice_title.value,
        message: notice_message.value,
        delay: notice_delay.value+"000"
      });
  });
  
}

let enterKey = function (){
  let e;
  e = window.event;
  if (e.keyCode == 13)
  {
    document.getElementById("notice-button").click();
    return false;
  }
  return true;
}

// Triggering Buttons
document.getElementById("notice-delay").addEventListener("keypress",enterKey);
document.getElementById("notice-button").addEventListener("click", notify);



