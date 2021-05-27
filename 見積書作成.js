function getInfo() {
  var ssForm = SpreadsheetApp.openById('1mC7bqKOgnOeXCX-TPII8UmSF_12-w1otsiPzValZ0RM')
  var sheetForm = ssForm.getSheetByName('記入情報');

  var lastRow = sheetForm.getLastRow();

  var timestamp = sheetForm.getRange(lastRow, 1).getValue();
  var companyName = sheetForm.getRange(lastRow, 2).getValue();
  var person = sheetForm.getRange(lastRow, 3).getValue();
  var email = sheetForm.getRange(lastRow, 4).getValue();

  var documentNumber = lastRow - 1;

  var items1 = sheetForm.getRange(lastRow, 5, 1, 4).getValues();
  var items2 = sheetForm.getRange(lastRow, 9, 1, 4).getValues();
  var items3 = sheetForm.getRange(lastRow, 13, 1, 4).getValues();

  Logger.log(companyName);
  Logger.log(person);
  Logger.log(items1);
  Logger.log(items2);
}
