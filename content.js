console.log("I am a test extension");


$("body").arrive(`[aria-label="Post"]`, function (e) {
  console.log("Create post is now opened");
  $(e)
    .parent()
    .append(
      `<div class="make_it_bold" style="background: red; cursor: pointer;">Bold</div>
      <div class="make_it_strikeThrough" style="background: red; cursor: pointer;">Strike Through</div>
      <div class="make_it_cursive" style="background: red; cursor: pointer;">C</div>`
    );
});
// // var flag=0;
// // if (flag===0)
// {

const textFormatOption = (type) => {
  console.log("here clicked");
  console.log("dfgdfg", selectedObj);
  restoreSelection(selectedObj);
  if ($(`[aria-label="Post"]`).length) {
    var stringSelected = document.getSelection().toString();
    if (stringSelected) {
      console.log(stringSelected)
      var reformatedText = reformatIt(stringSelected, type);
      console.log(reformatedText);
      console.log("reformation done")

      const blob = new Blob([reformatedText], {
        type: "text/plain",
      });
      let cpData = [
        new ClipboardItem({
          "text/plain": blob,
        }),
      ];

      navigator.clipboard.write(cpData).then(
        function () {
          restoreSelection(selectedObj);
          setTimeout(() => {
            console.log("pasting");
            document.execCommand("paste");
          }, 500);
        },
        function (error) {
          console.error("Unable to paste the data. Error:");
          console.log(error);
        }
      );
    }
  }
};

$(document).on("click", ".make_it_bold", () => {
  
  if(document.getElementsByClassName("make_it_bold")[0].style.background === "red"){
    document.getElementsByClassName("make_it_bold")[0].style.background = "green";
    textFormatOption(0)
  }else {
    document.getElementsByClassName("make_it_bold")[0].style.background = "red";
    textFormatOption(5)
  }
});

$(document).on("click", ".make_it_strikeThrough", () => {
  // textFormatOption(3);
  if(document.getElementsByClassName("make_it_strikeThrough")[0].style.background === "red"){
    document.getElementsByClassName("make_it_strikeThrough")[0].style.background = "green";
    textFormatOption(3)
  }else {
    document.getElementsByClassName("make_it_strikeThrough")[0].style.background = "red";
    textFormatOption(5)
  }
});

$(document).on("click", ".make_it_cursive", () => {
  // textFormatOption(4);
  if(document.getElementsByClassName("make_it_cursive")[0].style.background === "red"){
    document.getElementsByClassName("make_it_cursive")[0].style.background = "green";
    textFormatOption(4)
  }else {
    document.getElementsByClassName("make_it_cursive")[0].style.background = "red";
    textFormatOption(5)
  }
});

function saveSelection() {
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }
  return null;
}

function restoreSelection(range) {
  if (range) {
    if (window.getSelection) {
      sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.selection && range.select) {
      range.select();
    }
  }
}

var selectedObj = "";

$(document).on("selectionchange", function (e) {
  if ($(`[aria-label="Post"]`).length) {
    var stringSelected = window.getSelection().toString();
    if (stringSelected) {
      selectedObj = saveSelection();
    }
  }
});

var charArray = [];
charArray["A"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
charArray["B"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
charArray["C"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
charArray["D"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
charArray["E"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
charArray["F"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
charArray["G"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
charArray["H"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
charArray["I"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
charArray["J"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
charArray["K"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
charArray["L"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
charArray["M"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
charArray["N"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
charArray["O"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
charArray["P"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
charArray["Q"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
charArray["R"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
charArray["S"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
charArray["T"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
charArray["U"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
charArray["V"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
charArray["W"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
charArray["X"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
charArray["Y"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
charArray["Z"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
charArray["a"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
charArray["b"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
charArray["c"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
charArray["d"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
charArray["e"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
charArray["f"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
charArray["g"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
charArray["h"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
charArray["i"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
charArray["j"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
charArray["k"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
charArray["l"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
charArray["m"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
charArray["n"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
charArray["o"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
charArray["p"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
charArray["q"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
charArray["r"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
charArray["s"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
charArray["t"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
charArray["u"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
charArray["v"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
charArray["w"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
charArray["x"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
charArray["y"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
charArray["z"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
charArray["1"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
charArray["2"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
charArray["3"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
charArray["4"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
charArray["5"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
charArray["6"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
charArray["7"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
charArray["8"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
charArray["9"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
charArray["0"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];

charArray["𝗔"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
charArray["𝗕"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
charArray["𝗖"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
charArray["𝗗"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
charArray["𝗘"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
charArray["𝗙"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
charArray["𝗚"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
charArray["𝗛"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
charArray["𝗜"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
charArray["𝗝"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
charArray["𝗞"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
charArray["𝗟"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
charArray["𝗠"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
charArray["𝗡"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
charArray["𝗢"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
charArray["𝗣"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
charArray["𝗤"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
charArray["𝗥"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
charArray["𝗦"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
charArray["𝗧"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
charArray["𝗨"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
charArray["𝗩"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
charArray["𝗪"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
charArray["𝗫"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
charArray["𝗬"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
charArray["𝗭"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
charArray["𝗮"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
charArray["𝗯"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
charArray["𝗰"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
charArray["𝗱"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
charArray["𝗲"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
charArray["𝗳"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
charArray["𝗴"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
charArray["𝗵"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
charArray["𝗶"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
charArray["𝗷"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
charArray["𝗸"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
charArray["𝗹"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
charArray["𝗺"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
charArray["𝗻"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
charArray["𝗼"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
charArray["𝗽"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
charArray["𝗾"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
charArray["𝗿"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
charArray["𝘀"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
charArray["𝘁"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
charArray["𝘂"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
charArray["𝘃"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
charArray["𝘄"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
charArray["𝘅"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
charArray["𝘆"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
charArray["𝘇"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
charArray["𝟭"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
charArray["𝟮"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
charArray["𝟯"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
charArray["𝟰"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
charArray["𝟱"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
charArray["𝟲"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
charArray["𝟳"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
charArray["𝟴"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
charArray["𝟵"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
charArray["𝟬"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];

charArray["𝘈"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
charArray["𝘉"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
charArray["𝘊"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
charArray["𝘋"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
charArray["𝘌"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
charArray["𝘍"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
charArray["𝘎"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
charArray["𝘏"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
charArray["𝘐"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
charArray["𝘑"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
charArray["𝘒"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
charArray["𝘓"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
charArray["𝘔"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
charArray["𝘕"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
charArray["𝘖"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
charArray["𝘗"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
charArray["𝘘"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
charArray["𝘙"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
charArray["𝘚"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
charArray["𝘛"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
charArray["𝘜"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
charArray["𝘝"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
charArray["𝘞"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
charArray["𝘟"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
charArray["𝘠"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
charArray["𝘡"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
charArray["𝘢"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
charArray["𝘣"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
charArray["𝘤"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
charArray["𝘥"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
charArray["𝘦"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
charArray["𝘧"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
charArray["𝘨"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
charArray["𝘩"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
charArray["𝘪"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
charArray["𝘫"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
charArray["𝘬"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
charArray["𝘭"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
charArray["𝘮"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
charArray["𝘯"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
charArray["𝘰"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
charArray["𝘱"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
charArray["𝘲"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
charArray["𝘳"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
charArray["𝘴"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
charArray["𝘵"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
charArray["𝘶"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
charArray["𝘷"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
charArray["𝘸"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
charArray["𝘹"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
charArray["𝘺"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
charArray["𝘻"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
charArray["1"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
charArray["2"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
charArray["3"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
charArray["4"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
charArray["5"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
charArray["6"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
charArray["7"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
charArray["8"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
charArray["9"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
charArray["0"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];
 
charArray["A̶"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
charArray["B̶"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
charArray["C̶"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
charArray["D̶"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
charArray["E̶"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
charArray["F̶"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
charArray["G̶"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
charArray["H̶"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
charArray["I̶"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
charArray["J̶"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
charArray["K̶"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
charArray["L̶"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
charArray["M̶"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
charArray["N̶"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
charArray["O̶"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
charArray["P̶"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
charArray["Q̶"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
charArray["R̶"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
charArray["S̶"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
charArray["T̶"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
charArray["U̶"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
charArray["V̶"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
charArray["W̶"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
charArray["X̶"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
charArray["Y̶"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
charArray["Z̶"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
charArray["a̶"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
charArray["b̶"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
charArray["c̶"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
charArray["d̶"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
charArray["e̶"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
charArray["f̶"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
charArray["g̶"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
charArray["h̶"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
charArray["i̶"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
charArray["j̶"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
charArray["k̶"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
charArray["l̶"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
charArray["m̶"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
charArray["n̶"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
charArray["o̶"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
charArray["p̶"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
charArray["q̶"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
charArray["r̶"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
charArray["s̶"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
charArray["t̶"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
charArray["u̶"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
charArray["v̶"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
charArray["w̶"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
charArray["x̶"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
charArray["y̶"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
charArray["z̶"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
charArray["1̶"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
charArray["2̶"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
charArray["3̶"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
charArray["4̶"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
charArray["5̶"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
charArray["6̶"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
charArray["7̶"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
charArray["8̶"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
charArray["9̶"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
charArray["0̶"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];

charArray["𝒜"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
charArray["ℬ"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
charArray["𝒞"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
charArray["𝒟"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
charArray["ℰ"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
charArray["ℱ"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
charArray["𝒢"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
charArray["ℋ"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
charArray["ℐ"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
charArray["𝒥"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
charArray["𝒦"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
charArray["ℒ"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
charArray["ℳ"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
charArray["𝒩"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
charArray["𝒪"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
charArray["𝒫"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
charArray["𝒬"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
charArray["ℛ"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
charArray["𝒮"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
charArray["𝒯"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
charArray["𝒰"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
charArray["𝒱"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
charArray["𝒲"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
charArray["𝒳"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
charArray["𝒴"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
charArray["𝒵"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
charArray["𝒶"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
charArray["𝒷"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
charArray["𝒸"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
charArray["𝒹"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
charArray["ℯ"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
charArray["𝒻"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
charArray["ℊ"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
charArray["𝒽"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
charArray["𝒾"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
charArray["𝒿"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
charArray["𝓀"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
charArray["𝓁"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
charArray["𝓂"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
charArray["𝓃"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
charArray["ℴ"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
charArray["𝓅"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
charArray["𝓆"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
charArray["𝓇"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
charArray["𝓈"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
charArray["𝓉"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
charArray["𝓊"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
charArray["𝓋"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
charArray["𝓌"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
charArray["𝓍"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
charArray["𝓎"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
charArray["𝓕"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
charArray["1"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
charArray["2"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
charArray["3"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
charArray["4"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
charArray["5"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
charArray["6"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
charArray["7"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
charArray["8"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
charArray["9"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
charArray["0"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];

const reformatIt = (theText, textType) => {
  console.log(theText,"hello world");
  var theText = [...theText]  
  console.log(theText)
  var c = "";
  var reformatted = "";
  for (var x = 0; x < theText.length; x++) {
    c = theText[x]
    console.log("reformating", c);
    if (c in charArray) {
        console.log("reformated single text", charArray[c][textType]);
      reformatted += charArray[c][textType];
    } else {
      reformatted += c;
    }
    console.log("reformated text joining", reformatted);
  }
  console.log("reformated word done", reformatted);

  console.log("pasted");
  return reformatted;
};

html = `
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
`
document.querySelector("head").insertAdjacentHTML("beforeend", html);