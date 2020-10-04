function addNewClass(element, className) {
  element.classList.add(className);
}

function addAttribute(element, name, value) {
  element.setAttribute(name, value);
}

function createWebsite() {
  const divContainer = document.createElement("div");
  addNewClass(divContainer, "container");

  const siteSectionClearfix = document.createElement("div");
  addNewClass(siteSectionClearfix, "site-section");
  addNewClass(siteSectionClearfix, "clearfix");
  addAttribute(siteSectionClearfix, "role", "banner");

  const siteLogo = document.createElement("div");
  addNewClass(siteLogo, "site-logo");

  const htmlText = document.createTextNode("HTML ");

  const spanStar = document.createElement("span");
  addNewClass(spanStar, "star");
  const star = document.createTextNode("★");

  const boilerPlate = document.createTextNode(" BoilerPlate");

  const ulList = document.createElement("ul");
  addNewClass(ulList, "site-nav");
  addNewClass(ulList, "inline-block-list");

  const li1 = document.createElement("li");

  const a1 = document.createElement("a");
  a1.href = "https://github.com/h5bp/html5-boilerplate";
  addAttribute(a1, "data-ga-category", "Outbound-links");
  addAttribute(a1, "data-ga-action", "Nav-click");
  addAttribute(a1, "data-ga-label", "Source code");

  const sourceCodeText = document.createTextNode("Source code");

  const li2 = document.createElement("li");

  const a2 = document.createElement("a");
  a2.href =
    "https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md";
  addAttribute(a2, "data-ga-category", "Outbound-links");
  addAttribute(a2, "data-ga-action", "Nav-click");
  addAttribute(a2, "data-ga-label", "Docs");

  const docsText = document.createTextNode("Docs");

  const li3 = document.createElement("li");
  const a3 = document.createElement("a");
  a3.href = "https://h5bp.org";
  addAttribute(a3, "data-ga-category", "Outbound-links");
  addAttribute(a3, "data-ga-action", "Nav-click");
  addAttribute(a3, "data-ga-label", "Other projects");

  const otherProjectsText = document.createTextNode("Other projects");
  const sitePromo = document.createElement("div");
  addNewClass(sitePromo, "site-promo");

  const siteSection = document.createElement("div");
  addNewClass(siteSection, "site-section");

  const titreSitePromo = document.createElement("h1");
  const textTitre = document.createTextNode(
    "The web’s most popular front-end template"
  );

  const description = document.createElement("p");
  addNewClass(description, "description");

  const descriptionContent = document.createTextNode(
    "HTML5 Boilerplate helps you build"
  );
  const descriptionStrong = document.createElement("strong");

  const ctaOption = document.createElement("div");
  addNewClass(ctaOption, "cta-option");

  siteLogo.appendChild(htmlText);
  spanStar.appendChild(star);
  siteLogo.appendChild(spanStar);
  siteLogo.appendChild(boilerPlate);

  siteSectionClearfix.appendChild(siteLogo);
  a1.appendChild(sourceCodeText);
  li1.appendChild(a1);
  ulList.appendChild(li1);

  a2.appendChild(docsText);
  li2.appendChild(a2);
  ulList.appendChild(li2);

  a3.appendChild(otherProjectsText);
  li3.appendChild(a3);
  ulList.appendChild(li3);

  siteSectionClearfix.appendChild(ulList);

  divContainer.appendChild(siteSectionClearfix);

  titreSitePromo.appendChild(textTitre);
  sitePromo.appendChild(titreSitePromo);

  divContainer.appendChild(sitePromo);

  document.body.appendChild(divContainer);
}

createWebsite();
