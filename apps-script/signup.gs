/**
 * Email signup handler for the chill vibes inc. landing.
 *
 * Setup:
 *   1. Open the target Google Sheet, then Extensions → Apps Script.
 *   2. Replace Code.gs with this file's contents.
 *   3. Deploy → New deployment → Type: Web app.
 *      • Execute as: Me
 *      • Who has access: Anyone
 *   4. Copy the resulting Web app URL into the VITE_SHEET_ENDPOINT env var.
 *
 * The frontend sends `application/x-www-form-urlencoded` with mode:'no-cors',
 * so we read e.parameter.email. Returns JSON for sanity but the browser can't
 * read it (Apps Script web apps don't emit CORS headers).
 */

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const email = readEmail_(e);

    if (!isValidEmail_(email)) {
      return json_({ ok: false, error: "invalid email" });
    }

    sheet.appendRow([
      new Date(),
      email,
      // Light context columns — drop these if you don't want them.
      (e && e.parameter && e.parameter.source) || "landing",
      Session.getActiveUser().getEmail() || "anonymous",
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({ ok: true, hint: "POST email=... to subscribe" });
}

function readEmail_(e) {
  if (e && e.parameter && e.parameter.email) return String(e.parameter.email).trim().toLowerCase();
  if (e && e.postData && e.postData.contents) {
    try {
      const parsed = JSON.parse(e.postData.contents);
      if (parsed && parsed.email) return String(parsed.email).trim().toLowerCase();
    } catch (_) {
      // not JSON — ignore
    }
  }
  return "";
}

function isValidEmail_(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function json_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
