if (window.location.href === "https://topdesk.uc-it.vu.nl/") {
    window.location.href = "https://topdesk.uc-it.vu.nl/tas/secure/login/saml";
} else {
    let login = document.querySelector("#idp-form a");
    login.click();
}