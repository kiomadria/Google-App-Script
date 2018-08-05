function doGet() {
  return HtmlService.createHtmlOutputFromFile('index').setTitle('Walking to Mordor');
}

function doPost(e){
  Logger.log(e);
}

function sendText(data){
  var sheet = SpreadsheetApp.openById('1lR7PBX_H8A7a5Rr8drpDK2CpaWmYe1UjxioJ3_KUePM').getActiveSheet();
  var challegeDay = sheet.getRange(3, 7).getValue();
  Logger.log(data.day);
  
  if (data.day == "today"){
    var inputDay = challegeDay
    Logger.log("today")
    } if (data.day == "yesterday"){
      var inputDay = challegeDay - 1
    }if (data.day == "dayBeforeYesterday"){
      var inputDay = challegeDay - 2
    }
 
  if (data.user == 'glen'){
    var userCol = "1"
  } if (data.user == 'meegs'){
        var userCol = "2"
    }if (data.user == 'jen'){
          var userCol = "3"
      };
  Logger.log(challegeDay);  
  Logger.log(inputDay);  

  sheet.getRange(inputDay, userCol).setValue(data.millage);
   
  return 'Success!';
  
}
function challegeDay()
{
  var sheet = SpreadsheetApp.openById('1lR7PBX_H8A7a5Rr8drpDK2CpaWmYe1UjxioJ3_KUePM').getActiveSheet();
  var challegeDay = sheet.getRange(3,7).getValue();
  sheet.getRange(3,7).setValue(challegeDay +1);
  var newChallegeDay = sheet.getRange(3,7).getValue();
      
   //set the date
  var curDate = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy");
  sheet.getRange(newChallegeDay, 4).setValue( curDate);
  
}