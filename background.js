function cleanup() {
  const articleHeightMediaClass = 'article__content--restricted-media';
  const articleHeightClass = 'article__content--restricted';
  const paywallClass = 'paywall';
  const messageRegisterId = 'js-message-register';
  const banniereHauteId = 'banniere_haute';
  const banniereMilieuId = 'banniere_milieu';
  const banniereBasseId = 'banniere_basse';
  const leaderboardSkinId = 'leaderboardSkin';
  const dfpInreadClass = 'dfp__inread';
  const friendClass = 'friend';
  const servicesClass = 'area--section-services';
  const opsClass = 'ops__content';
  const ayadsLayerId = 'ayads-video-layer';
  const ayadsVideoContainerId = 'ayads-video-container';
  const ayadsHtmlId = 'ayads-html';

  const articleMediaHeight = document.getElementsByClassName(articleHeightMediaClass)[0];
  const articleHeight = document.getElementsByClassName(articleHeightClass)[0];
  const paywall = document.getElementsByClassName(paywallClass)[0];
  const messageRegister = document.getElementById(messageRegisterId);
  const friendList = document.getElementsByClassName(friendClass);
  const servicesList = document.getElementsByClassName(servicesClass);
  const opsList = document.getElementsByClassName(opsClass);

  if (articleMediaHeight) {
    articleMediaHeight.style.height = '100%';
  }

  if (articleHeight) {
    articleHeight.style.height = '100%';
  }

  if (paywall) {
    paywall.style.display = 'none';
  }

  if (messageRegister) {
    messageRegister.style.display = 'none';
  }

  if (friendList) {
    Array.from(friendList).forEach((el) => {
      el.style.display = 'none';
    });
  }

  if (servicesList) {
    Array.from(servicesList).forEach((el) => {
      el.setAttribute('style', 'display:none !important');
    });
  }

  if (opsList) {
    Array.from(opsList).forEach((el) => {
      el.style.display = 'none';
    });
  }

  function ongoingHidding() {
    const banniereHaute = document.getElementById(banniereHauteId);
    const banniereBasse = document.getElementById(banniereBasseId);
    const banniereMilieu = document.getElementById(banniereMilieuId);
    const leaderboardSkin = document.getElementById(leaderboardSkinId);
    const ayadsLayer = document.getElementById(ayadsLayerId);
    const ayadsHtml = document.getElementById(ayadsHtmlId);
    const ayadsVideoContainer = document.getElementById(ayadsVideoContainerId);
    const dfpInreadList = document.getElementsByClassName(dfpInreadClass);

    if (dfpInreadList) {
      Array.from(dfpInreadList).forEach((el) => {
        el.style.display = 'none';
      });
    }

    if (banniereHaute) {
      banniereHaute.style.display = 'none';
    }

    if (banniereBasse) {
      banniereBasse.style.display = 'none';
    }

    if (banniereMilieu) {
      banniereMilieu.style.display = 'none';
    }

    if (leaderboardSkin) {
      leaderboardSkin.style.display = 'none';
    }

    if (ayadsLayer) {
      ayadsLayer.setAttribute('style', 'display:none !important');
    }

    if (ayadsHtml) {
      ayadsHtml.setAttribute('style', 'display:none !important');
    }

    if (ayadsVideoContainer) {
      ayadsVideoContainer.setAttribute('style', 'display:none !important');
    }
  }

  setInterval(ongoingHidding, 1000);
}

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: cleanup
    });
  }
});
