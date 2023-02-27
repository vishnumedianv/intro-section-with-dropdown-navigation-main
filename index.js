function openfeatures() {
  if (document.getElementById("features").className == "block") {
    document.getElementById("features").className = "hidden";
    document.getElementById("featuresImg").style = "unset";
  } else if (document.getElementById("features").className == "hidden") {
    document.getElementById("company").className = "hidden";
    document.getElementById("features").className = "block";
    document.getElementById("featuresImg").style.content =
      "url(./images/icon-arrow-up.svg)";
    document.getElementById("companyImg").style = "unset";
  }
}

function opencompany() {
  if (document.getElementById("company").className == "block") {
    document.getElementById("company").className = "hidden";
    document.getElementById("companyImg").style = "unset";
  } else if (document.getElementById("company").className == "hidden") {
    document.getElementById("features").className = "hidden";
    document.getElementById("featuresImg").style = "unset";
    document.getElementById("company").className = "block";
    document.getElementById("companyImg").style.content =
      "url(./images/icon-arrow-up.svg)";
  }
}

function expandMenu() {
  document.getElementById("menuModal").className = "block";
}

function closeMenu() {
  document.getElementById("menuModal").className = "hidden";
}

function openFeatureModal() {
  if (document.getElementById("FM").className == "block") {
    document.getElementById("FM").className = "hidden";
    document.getElementById("FI").style = "unset";
  } else if (document.getElementById("FM").className == "hidden") {
    document.getElementById("FM").className = "block";
    document.getElementById("FI").style.content =
      "url(./images/icon-arrow-up.svg)";
  }
}

function openComapanyModal() {
  if (document.getElementById("companyModal").className == "block") {
    document.getElementById("companyModal").className = "hidden";
    document.getElementById("companyimg").style = "unset";
  } else if (document.getElementById("companyModal").className == "hidden") {
    document.getElementById("companyModal").className = "block";
    document.getElementById("companyimg").style.content =
      "url(./images/icon-arrow-up.svg)";
  }
}
