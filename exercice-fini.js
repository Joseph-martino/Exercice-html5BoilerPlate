// 1er div container
let myDiv = document.createElement('div');
myDiv.setAttribute('class', 'container');

// div dans 1er div site-header clearfix
let divInMyDiv = document.createElement('div');
divInMyDiv.setAttribute('class', 'site-header clearfix');

//ajouter div dans 1er div
myDiv.appendChild(divInMyDiv);

//div dans div dans 1erdiv
let divTitle = document.createElement('div')
divTitle.setAttribute('class', 'site-logo');

//ajouter div dans div dans div
divInMyDiv.appendChild(divTitle);

//p title
let paraTitle = document.createElement('p');

//text title
let Title = document.createTextNode('HTML5');

//ajouter text dans p
divTitle.appendChild(Title);

//ajouter 1er div dans body
document.body.appendChild(myDiv);

//div site nav
let ulNav = document.createElement('ul');
ulNav.setAttribute('class', 'site-nav inline-block-list');
let ulLi = document.createElement('li');
let ulLiTwo = document.createElement('li');
let ulLiThree = document.createElement('li');
let ulLiA = document.createElement('a');
let ulLiATwo = document.createElement('a');
let ulLiAThree = document.createElement('a');
ulLiA.href = 'https://github.com/h5bp/html5-boilerplate';
ulLiA.innerText = 'Source code';
ulLiATwo.href = 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md';
ulLiATwo.innerText = 'Docs';
ulLiAThree.href = 'https://h5bp.org';
ulLiAThree.innerText = 'Other projects';
divInMyDiv.appendChild(ulNav);
ulNav.appendChild(ulLi);
ulNav.appendChild(ulLiTwo);
ulNav.appendChild(ulLiThree);
ulLi.appendChild(ulLiA);
ulLiTwo.appendChild(ulLiATwo);
ulLiThree.appendChild(ulLiAThree);

//créer span
let spanTitle = document.createElement('span');
//nommer class/nom 
spanTitle.setAttribute('class', 'star');

/*
//contenu *
let spanStar = document.createTextNode('*');

//relie le contenue au span
spanTitle.appendChild(spanStar);
*/
//ou
spanTitle.innerText = ' * ';

//mettre le span dans la div site-logo
divTitle.appendChild(spanTitle);




//Créer 2ième partie du title
let partTwoTiltle = document.createTextNode('Boilerplate');

//relier
divTitle.appendChild(partTwoTiltle);


//Créer Div site promo
let divSitePromo = document.createElement('div');
divSitePromo.setAttribute('class', 'site-promo');

//relie div site promo à div container
myDiv.appendChild(divSitePromo);

//créer h1 dans div site promo
let sitePromoHone = document.createElement('h1');

//ajout de contenu au h1
sitePromoHone.innerText = 'The web’s most popular front-end template';

//ajout h1 dans divSitePromo
divSitePromo.appendChild(sitePromoHone);

//créer p pour div site-promo
let pDescription = document.createElement('p');
pDescription.setAttribute('class', 'description');

pDescription.innerText = 'HTML5 Boilerplate helps you build fast, robust, and adaptable web apps or sites. Kick-start your project with the combined knowledge and effort of 100s of developers, all in one little package.';

//relier p à div siteProm
divSitePromo.appendChild(pDescription);

//Créer strong dans p /div site promo
let strongPSiteP = document.createElement('strong');


/*
//ajoute strong dans p 
pDescription.appendChild(strongPSiteP);
pDescription.innerText = 'fast';
*/

//Creer div cta-option et ajouter dans site-promo
let divCtaOption = document.createElement('div');
divCtaOption.setAttribute('class', 'cta-option');
divSitePromo.appendChild(divCtaOption);

//créer a dans div cta + class + href + nom
let aInDivCta = document.createElement('a');
aInDivCta.setAttribute('class', 'btn btn-download');
aInDivCta.href = 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip';
aInDivCta.innerText = 'Download v8.0.0'
//ajouter a dans dic cta_option
divCtaOption.appendChild(aInDivCta);

//Créer 2ieme a dans div cta + class + nom
let aLastUpdate = document.createElement('a');
aLastUpdate.setAttribute('class', 'last-update');
aLastUpdate.href = "https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/CHANGELOG.md";
aLastUpdate.innerText = 'See the CHANGELOG';
//ajouter a-2 
divCtaOption.appendChild(aLastUpdate);

//Div site-section

let divSiteSection = document.createElement('div');
divSiteSection.setAttribute('class', 'site-section');

let myDivOne = document.createElement('div');
myDivOne.setAttribute('class', 'container');

divSiteSection.appendChild(myDivOne);

document.body.appendChild(divSiteSection);

let hSecond = document.createElement('h2');
hSecond.innerText = 'Save time. Create with confidence.';

myDivOne.appendChild(hSecond);

//div grid
let divGrid = document.createElement('div');
divGrid.setAttribute('class', 'grid');
myDivOne.appendChild(divGrid);

//div grid cell cell 1
let divGridCell = document.createElement('div');
divGridCell.setAttribute('class', 'grid-cell');
divGrid.appendChild(divGridCell);
//le h3 de div grid cell 1
let hThree = document.createElement('h3');
divGridCell.appendChild(hThree);
// * ?????????????????????????
let spanStarGridOne = document.createElement('span');
spanStarGridOne.innerText = '*';
hThree.appendChild(spanStarGridOne);
hThree.innerText = 'Analytics, icons, and more';
// ???????????????????
// p de la div grid cell 1
let pGridCell = document.createElement('p')
divGridCell.appendChild(pGridCell);
pGridCell.innerText = 'A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.';
//div grid cell 2 dans grid
//let divGridCellOne = document.createElement('div');
//divGridCellOne.setAttribute('class', 'grid-cell');
divGridCellOne = divGridCell.cloneNode(false);
hThreeOne = hThree.cloneNode(false);
pGridCellOne = pGridCell.cloneNode(false);
hThreeOne.innerText = 'Normalize.css and helpers';
pGridCellOne.innerText = 'Includes Normalize.css — a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.';
divGrid.appendChild(divGridCellOne);
divGridCellOne.appendChild(hThreeOne);
divGridCellOne.appendChild(pGridCellOne);

divGridCellTwo = divGridCell.cloneNode(false);
hThreeTwo = hThree.cloneNode(false);
pGridCellTwo = pGridCell.cloneNode(false);
hThreeTwo.innerText = 'Modernizr';
pGridCellTwo.innerText = 'Get the latest minified versions of Modernizr: Modernizr feature detection library, complete with a custom build configuration';
divGrid.appendChild(divGridCellTwo);
divGridCellTwo.appendChild(hThreeTwo);
divGridCellTwo.appendChild(pGridCellTwo);

divGridCellFour = divGridCell.cloneNode(false);
hThreeFour = hThree.cloneNode(false);
pGridCellFour = pGridCell.cloneNode(false);
hThreeFour.innerText = 'High performance';
pGridCellFour.innerText = 'Apache settings to help you deliver excellent site performance. We independently maintain server configs for multiple platforms.';
divGrid.appendChild(divGridCellFour);
divGridCellFour.appendChild(hThreeFour);
divGridCellFour.appendChild(pGridCellFour);

//creer div site-section site-section-video
//divsite-section-video
divSiteSectionVideo = divSiteSection.cloneNode(false);
divSiteSectionVideo.setAttribute('class', 'site-section site-section-video');
hSecondOne = hSecond.cloneNode(false);
hSecondOne.innerText = 'Introduction to v8';
let divContent = document.createElement('div');
divContent.setAttribute('class', 'content');
pContent = pGridCell.cloneNode(false);
pContent.setAttribute('class', 'new');
pContent.innerText = 'What\'s new';
let ulContent = document.createElement('ul');
ulContent.setAttribute('class', 'new');
let liContent = document.createElement('li');
liContentTwo = liContent.cloneNode(false);
liContentThree = liContent.cloneNode(false);
liContentFour = liContent.cloneNode(false);
liContentFive = liContent.cloneNode(false);
liContentSix = liContent.cloneNode(false);
liContentSeven = liContent.cloneNode(false);
liContent.innerText = 'Added a sample package.json with basic Parcel commands to jump start your app development';
liContentTwo.innerText = 'Added sample Open Graph metadata';
liContentThree.innerText = 'Updated Modernizr and main.css';
liContentFour.innerText = 'Removed jQuery';
liContentFive.innerText = 'Set anonymizeIp to true in Google Analytics snippet';
liContentSix.innerText = 'Removed Browser Upgrade Prompt';
liContentSeven.innerText = 'That\'s just the start of all the goodness. Check out the Changelog for all the details.';
document.body.appendChild(divSiteSectionVideo);
divSiteSectionVideo.appendChild(hSecondOne);
divSiteSectionVideo.appendChild(divContent);
divContent.appendChild(pContent);
divContent.appendChild(ulContent);
ulContent.appendChild(liContent);
ulContent.appendChild(liContentTwo);
ulContent.appendChild(liContentThree);
ulContent.appendChild(liContentFour);
ulContent.appendChild(liContentFive);
ulContent.appendChild(liContentSix);
ulContent.appendChild(liContentSeven);

//div site section 2
let divSiteSectionTwo = divSiteSection.cloneNode(false);
let hSecondTwo = hSecond.cloneNode(false);

//div site-section-two
divSiteSectionTwo = divSiteSection.cloneNode(false);
hSecondTwo = hSecond.cloneNode(false);
hSecondTwo.innerText = 'Who uses HTML5 Boilerplate?'
pContentOne = pGridCell.cloneNode(false);
pContentOne.setAttribute('class', 'in-the-wild');
pContentOne.innerText = 'Microsoft, NASA, Nike, Barack Obama, ITV News, Creative Commons, Australia Post, and many more.';

//div site-section-two
divSiteSectionTwo = divSiteSection.cloneNode(false);
hSecondTwo = hSecond.cloneNode(false);
hSecondTwo.innerText = 'Who uses HTML5 Boilerplate?'
pContentOne = pGridCell.cloneNode(false);
pContentOne.setAttribute('class', 'in-the-wild');
pContentOne.innerText = 'Microsoft, NASA, Nike, Barack Obama, ITV News, Creative Commons, Australia Post, and many more.';
divCtaOptionTwo = divCtaOption.cloneNode(false);
aInDivCtaTwo = aInDivCta.cloneNode(false);
aInDivCtaTwo.innerText = 'Download v8.0.0';
document.body.appendChild(divSiteSectionTwo);
divSiteSectionTwo.appendChild(hSecondTwo);
divSiteSectionTwo.appendChild(pContentOne);
divSiteSectionTwo.appendChild(divCtaOptionTwo);
divCtaOptionTwo.appendChild(aInDivCtaTwo);


//div class aside
let divAside = document.createElement('div')
divAside.setAttribute('class', 'aside');
myDivTwo = myDiv.cloneNode(false);

document.body.appendChild(divAside);

divAside.appendChild(myDivTwo);

ulContentTwo = ulContent.cloneNode(false);
ulContentTwo.setAttribute('class', 'inline-block-list');

myDivTwo.appendChild(ulContentTwo);

liContentEight = liContent.cloneNode(false);
liContentNine = liContent.cloneNode(false);
liContentTen = liContent.cloneNode(false);

ulContentTwo.appendChild(liContentEight);
ulContentTwo.appendChild(liContentNine);
ulContentTwo.appendChild(liContentTen);

aInDivCtaThree = aInDivCta.cloneNode(false);
aInDivCtaThree.setAttribute('class', "");
aInDivCtaThree.innerText = 'Report issues';

aInDivCtaFour = aInDivCta.cloneNode(false);
aInDivCtaFour.setAttribute('class', "");
aInDivCtaFour.innerText = 'Help on Stack Overflow';

aInDivCtaFive = aInDivCta.cloneNode(false);
aInDivCtaFive.setAttribute('class', "");
aInDivCtaFive.innerText = 'View the showcase';

liContentEight.appendChild(aInDivCtaThree);
liContentEight.appendChild(aInDivCtaFour);
liContentEight.appendChild(aInDivCtaFive);

//footer
let footer = document.createElement('footer');
footer.setAttribute('class', 'site-footer');
pFooter = pGridCell.cloneNode(false);
pFooterTwo = pGridCell.cloneNode(false);
pFooterThree = pGridCell.cloneNode(false);
pIframe = document.createElement('iframe');
pIframe.setAttribute('id', 'twitter-widget-1');
pIframe.setAttribute('class', 'twitter-share-button twitter-share-button-rendered twitter-tweet-button');
pIframeTwo = document.createElement('iframe');
pIframeTwo.setAttribute('id', 'twitter-widget-0');
pIframeTwo.setAttribute('class', 'twitter-follow-button twitter-follow-button-rendered');
document.body.appendChild(footer);
footer.appendChild(pFooter);
footer.appendChild(pFooterTwo);
footer.appendChild(pFooterThree);
pFooter.appendChild(pIframe);
pFooter.appendChild(pIframeTwo);
pFooterTwo.innerText = 'A project from H5BP currently maintained by Rob Larsen & Christian Oliff';
pFooterThree.innerText = 'This project wouldn\'t have been possible without our past team members: Mathias Bynens, Cătălin Mariș, Hans Christian Reinl, Nicolas Gallagher, Paul Irish, and Divya Manian.'





















