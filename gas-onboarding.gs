/**
 * OntoPortal Alliance — Onboarding form backend
 * -----------------------------------------------
 * Deploy as a Google Apps Script web app:
 *   1. Open https://script.google.com and create a new project.
 *   2. Paste this entire file.
 *   3. Set SPREADSHEET_ID to the ID of the "OntoPortal Alliance Members" sheet.
 *   4. Click Deploy → New deployment → Web app.
 *      - Execute as: Me
 *      - Who has access: Anyone
 *   5. Copy the deployment URL and paste it into onboarding.html as GAS_ENDPOINT.
 *
 * To update after code changes: Deploy → Manage deployments → Edit (new version).
 */

var SPREADSHEET_ID = '1A0D6lBQlvf1B9DCSga1Rf9eGZU2YOngot4JiOmc_2I0';
var SHEET_NAME     = 'Alliance members';

function doGet(e) {
  try {
    var p = e.parameter;

    if (!p.name || !p.email) {
      return ContentService
        .createTextOutput(JSON.stringify({status: 'error', message: 'Missing required fields'}))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    // Columns: A=Name, B=Portal, C=Gone, D=Fonction, E=Email, F=Google, G=GitHub, H=Mailing lists, I=GDrive, J=Slack, K=Notes
    sheet.appendRow([
      p.name           || '',   // A: Name
      p.portal         || '',   // B: Équipe (OntoPortal instance)
      'FALSE',                  // C: Gone
      p.fonction       || '',   // D: Fonction
      p.email          || '',   // E: Email
      p.google_account || '',   // F: Google account
      p.github_account || '',   // G: GitHub account
      p.mailing_lists  || '',   // H: Mailing lists (requested)
      'FALSE',                  // I: GDrive access
      'FALSE',                  // J: Slack access
      'Onboarding form — ' + new Date().toISOString().slice(0,10)  // K: Notes
    ]);

    // Send notification email to admin
    notifyAdmin(p);

    return ContentService
      .createTextOutput(JSON.stringify({status: 'ok'}))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({status: 'error', message: err.message}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function notifyAdmin(p) {
  try {
    var subject = '[OntoPortal Alliance] New onboarding request from ' + p.name;
    var body = [
      'A new member has submitted the onboarding form.',
      '',
      'Name:            ' + p.name,
      'Email:           ' + p.email,
      'Portal:          ' + p.portal,
      'Function:        ' + p.fonction,
      'Google account:  ' + p.google_account,
      'GitHub account:  ' + p.github_account,
      'Mailing lists:   ' + p.mailing_lists,
      '',
      'View the spreadsheet:',
      'https://docs.google.com/spreadsheets/d/' + SPREADSHEET_ID + '/edit?gid=1581953893#gid=1581953893'
    ].join('\n');

    MailApp.sendEmail('support@ontoportal.org', subject, body);
  } catch (err) {
    // Non-fatal — row was already appended
    Logger.log('Email notification failed: ' + err.message);
  }
}
