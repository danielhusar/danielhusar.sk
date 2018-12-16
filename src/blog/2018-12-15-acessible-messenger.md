---
slug: 'graphql-book'
date: '2018-12-15'
title: 'How we made the Intercom Messenger accessible'
categories: ['en']
banner: './images/accessible-messenger/banner.png'
draft: false
---

_[This is a cross post from the Intercom blog.](https://www.intercom.com/blog/messenger-accessibility/)_

## Here at Intercom, our mission is to make internet business personal. But in order for an internet business to be personal, it must also be possible for everyone to access.

More than one billion people worldwide live with a disability – that’s more than [15% of the global population](https://www.audioeye.com/resources/accessibility-essentials/). Without assistive technologies like screen readers, the web is inaccessible or hard for them to use. Think of it this way: it’s like entering your neighborhood coffee shop and if you’re in a wheelchair, discovering that the counter is too tall for you to reach.

We believe businesses should be able to communicate with everyone on their website, regardless of how their visitors interact with the web. This isn’t just a company philosophy; it’s also an engineering commitment. To prioritize accessibility in [our Messenger](https://www.intercom.com/messenger), we took a hard look at the technical improvements we needed to make and turned what were often fuzzy requirements into real, meaningful solutions.

What we achieved is making our web Messenger accessible and compliant with the [Web Content Accessibility Guidelines 2.0 Level AA](https://www.w3.org/TR/UNDERSTANDING-WCAG20/conformance.html#uc-conformance-requirements-head).

## A shared framework for web accessibility

[The Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) are a shared set of technical standards that explain how to make web content accessible to people with disabilities. Its 12 guidelines are organized around four main principles, which provide the foundation for web accessibility:

- **Perceivable**: Users must be able to perceive the content in some way, using one or more of their senses. For instance, images that convey meaningful information should have alternative text provided.
- **Operable**: Users must be able to control UI elements. For example, all functionality like buttons and form elements should be accessible using keyboard controls.
- **Understandable**: The content must be understandable to its users. That means things like the language of the page should be detectable in the code.
- **Robust**: The content must be developed using well-known and adopted web standards. In other words, your code should be easily parsed and interpreted by different browsers and user agents like screen readers.

Our engineering work started by exploring the WCAG guidelines and then identifying all the areas in our web Messenger that needed improvement. As we quickly learned, turning these four principles into real solutions was simpler on paper than in practice.

## Turning fuzzy requirements into real solutions

The WCAG guidelines are extensive – across the four principles, there are nearly 100 sections – and some areas are quite fuzzy. Requirements like “meaningful sequence” and “focus order” are very broad in scope, especially for applications like ours that get embedded in many different environments.

These fuzzy requirements meant there wasn’t always a direct or obvious correlation between the WCAG guidelines and what we needed to build. We encountered issues that didn’t have clear answers online, leaving it up to us to come up with the right technical solutions.

In the end, we identified three main areas of focus for accessibility in our web Messenger:

- Keyboard navigation
- Screen reader support
- Color contrast

I’ll walk you through each of these areas, what we learned and the solutions we shipped.

## Improving keyboard navigation

Keyboard navigation is a very important part of making your app accessible. When visually or auditory impaired people use web browsers, they often rely on keyboard navigation to tab into fields and then have their screen reader read what action could be performed.

Our work on keyboard navigation can be broken down into three main changes:

1.  Making elements clickable by keyboard
2.  Setting proper focus states
3.  Designing intentional focus traps

### 1. Making elements clickable by keyboard

The Intercom web Messenger is a [React](https://reactjs.org/) app. If we want keyboard navigation to work with the Messenger, every onClick handler that is added to an element, except the [elements that browsers support natively](http://websiteaccessibility.donaldevans.com/2011/06/30/when-does-onclick-work-with-the-keyboard-enter-key), also needs onKeyDown that checks if the enter or space keys were pressed and execute the same function as the onClick handler.
