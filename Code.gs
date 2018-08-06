function doGet(e) {
  var html = HtmlService.createTemplateFromFile('index');
  var responses = SpreadsheetApp.openById('1lR7PBX_H8A7a5Rr8drpDK2CpaWmYe1UjxioJ3_KUePM');
  
  
  html.responses = parseResponses(responses.getDataRange().getValues())
  
  return html.evaluate();
}

function doPost(e){
  Logger.log(e);
}

function sendText(data){
  var sheet = SpreadsheetApp.openById('1lR7PBX_H8A7a5Rr8drpDK2CpaWmYe1UjxioJ3_KUePM').getSheetByName('Data');
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
  var sheet = SpreadsheetApp.openById('1lR7PBX_H8A7a5Rr8drpDK2CpaWmYe1UjxioJ3_KUePM').getSheetByName('Data');
  var challegeDay = sheet.getRange(3,7).getValue();
  sheet.getRange(3,7).setValue(challegeDay +1);
  var newChallegeDay = sheet.getRange(3,7).getValue();
      
   //set the date
  var curDate = Utilities.formatDate(new Date(), "GMT-5", "MM/dd/yyyy");
  sheet.getRange(newChallegeDay, 4).setValue( curDate);
}

function parseResponses(values){
  var responses = [];
  for (var i = 1; i < values.length; i++){
    responses.push({
      glen: values[i][0],
      meegs: values[i][1],
      jen: values[i][2],
      location: values[i][5]
      
    });
  }
  Logger.log(responses.location);
  return responses;

}



