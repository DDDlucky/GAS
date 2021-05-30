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

  // ６列分に変換
  items1[0].splice(1, 0, '', '');
  items2[0].splice(1, 0, '', '');
  items3[0].splice(1, 0, '', '');

  // 見積書のテンプレ
  var ssQuotation = SpreadsheetApp.openById('1P_jiTAQYKlmXmQD2Guo4jll6Vfq39wJh91B_MohD2XM')
  // var sheetQuotation = ssQuotation.getSheetByName('見積書_書き込み用');

  // シートの複製
  var now = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMdd_hhmm');
  var sheetName = now + '' + companyName;
  var sheetQuotation = ssQuotation.duplicateActiveSheet().setName(sheetName);
  var sheetId = sheetQuotation.getSheetId();
  sheetQuotation.activate();

  // 書き込み
  sheetQuotation.getRange('A4').setValue(companyName);
  sheetQuotation.getRange('A5').setValue(person + ' 様');
  sheetQuotation.getRange('F12').setValue(documentNumber);

  sheetQuotation.getRange('A17:F17').setValues(items1);
  sheetQuotation.getRange('A18:F18').setValues(items2);
  sheetQuotation.getRange('A19:F19').setValues(items3);

  // PDF出力
  SpreadsheetApp.flush();

  var url = 'https://docs.google.com/spreadsheets/d/1P_jiTAQYKlmXmQD2Guo4jll6Vfq39wJh91B_MohD2XM/export?exportFormat=pdf&gid=SID'.replace('SID', sheetId);
  var token = ScriptApp.getOAuthToken();
  var response = UrlFetchApp.fetch(url, {
    headers: {
      'Authorizaion': 'Bearer ' + token
    }
  });

  var date = Utilities.formatDate(new Date(), 'Asia/Tokyo', 'yyyyMMdd');
  var blob = response.getBlob().setName(date + '_' + companyName + '御中.pdf');

  var folder = DriveApp.getFolderById('1GcYwpC77f3rZZFI9SlsUjWBuJeN8Fk7i');
  var file = folder.createFile(blob);

  var to = email;
  var subject = 'テストメール';
  var body = 'こちらはテストメールです。';
  var options = {
    attachments: [file]
  };

  GmailApp.sendEmail(
    to,
    subject,
    body,
    options
  );

}
