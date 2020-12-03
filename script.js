// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

const articleHeightMediaClass = 'article__content--restricted-media';
const articleHeightClass = 'article__content--restricted';
const paywallClass = 'paywall';
const messageRegisterId = 'js-message-register';

const articleMediaHeight = document.getElementsByClassName(articleHeightMediaClass)[0];
const articleHeight = document.getElementsByClassName(articleHeightClass)[0];
const paywall = document.getElementsByClassName(paywallClass)[0];
const messageRegister = document.getElementById(messageRegisterId);

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
