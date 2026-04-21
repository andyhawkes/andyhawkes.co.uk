---
slug: what-is-best-in-life
title: What is best in life?
date: 2026-04-20
authors: [andyhawkes]
tags: [Career]
description: I have been doing some introspection recently as part of updating this site, and realised that I have worked on some incredible projects that I should take more obvious pride in.
---

> Conan! What is best in life?  
To crush your project deadlines, see them launched before you, and to hear the satisfaction of their users.

When I wrote about my career history late last year in [The seven year itch](/blog/seven-year-itch), I called out a few of the projects that I have worked on, but I have been doing some introspection recently as part of updating this site, and realised that I have worked on some incredible projects that I should take more obvious pride in.

<!-- truncate -->

It would be fair to say that I am a little uncomfortable with the kind of flagrant self-aggrandisement that afflicts so many LinkedIn users, but if I was putting together a personal credentials deck, I would be able to scatter some pretty impressive and international names and logos over it - R/GA, Google, Goldman Sachs, Aston Martin, BBC, ITV, and the London 2012 Olympics to name just a few.

I have worked on some projects that have been particularly memorable — all for different reasons — here are just a few of them:

## Get Set for London 2012 (2008)

[Get Set](https://www.getset.co.uk/) was originally created as the official London 2012 education programme, to deliver against Lord Coe's vision to use the Games to inspire a generation of young people, and has gone on to be the British Olympic Association and British Paralympic Association’s youth engagement programme.

### A wonderful time to be British

The run up to London 2012 was an interesting time, marked by a mixture of traditional British cynicism — the Olympics is bound to be rubbish, we're spending too much money on it etc. etc. — cautious optimism, and even national pride.

Get Set was a memorable project for a number of reasons:

* It was incredibly high profile as the official UK schools project for the London 2012 Olympics, and part of the Olympic legacy remit for the organising committee (LOCOG)
* It was a long-running project — starting in 2008 and running all the way through to the games in 2012 (although I moved on from that role and company in early 2011) — and it has achieved a life beyond what we ever imagined in the 14 years since the London games.
* It marked a key point in my transition from individual contributor to manager and leader of engineering teams
* We built the entire content management system behind the site in-house
* We even managed to localise it into Welsh at very short notice, despite having been repeatedly and reliably informed that it 100% definitely only needed to be in English...

### Digital project, physical impact

Get Set was a rare thing for a digital agency to have the opportunity to be involved with - an online project that had a tangible benefit for children in the real world.

It may seem like a small thing, but being involved with the project and seeing the impact that LOCOG was making on real lives was inspiring.

The numbers bear it out, but they also undersell it — these weren't vanity metrics, they were measures of genuine behavioural change in young people:[^1]:

Using Get Set’s programmes has encouraged uptake of a wider range of sports and activities, and more young people taking part in sport in general. Over 80% of young people agree that the programme has contributed to increased participation in physical activity. Over 80% of teachers have found that the programme supports their school’s ethos, and has made the school community more active.

The benefits don’t stop with PE and sport. From teachers surveyed in 2016:

* 91% agree that pupils are more motivated
* 79% feel pupils’ engagement in learning has improved
* 89% agree pupils have increased their self-confidence
* 87% agree pupils have improved their team working skills

Pupils are also aware of the impact of the programme:

* 89% believe they have developed new skills
* 88% acknowledge they now have a wanting to achieve more
* 83% feel more positively about disabled people

As someone who has spent his career helping to sell everything from Aston Martin cars to underarm deodorant, Get Set really stands out as the project with the most tangible, social impact, and as such it occupies a very fond place in my memories.

## Google Web Fundamentals (2014)

My favourite individual project would probably be [Google Web Fundamentals](https://developers.googleblog.com/en/web-fundamentals-and-web-starter-kit-resources-for-modern-web-development/) — Google's first stake in the ground on modern, standards-led responsive development — which my small, agile team built from scratch in record time.

We went from zero to 100% in 4 weeks.

It was a pretty daunting task — to provide an opinionated view on what best-in-class web development techniques looked like — and particularly to do it in full view of everyone who might want to contest that opinion!

### How did we do it?

1. A small team - 7 people in all, but a core team of one Open Standards Developer, a Tech Intern, a Visual Designer, and an Experience Designer, with me and a Producer overseeing it.
2. An engaged client - the client was broadly "the Google Chrome Developer Relations team", but in day-to-day reality it was one guy, [Paul Kinlan](https://paul.kinlan.me/), who is still leading the Chrome Developer Relations team at Google to this day! Direct communication, a collaborative attitude, fast decision-making, and sole sign-off made for a fantastic, developer-led process.
3. A lightweight process - it seems a bit buzzword-heavy, but it was a truly `Agile` project, delivering best-in-class `Responsive` web code backed by a strong `Design System`, and enabled by genuine `Transparency` and direct `Collaboration`.

But most importantly, we kept it _simple_.

Our planning tools were some A3 paper, Post-it notes and Sharpie pens.

![State of the art IA](/img/web-fundamentals-postits.png)

The client signed off the initial information architecture based on a smartphone photo of a whiteboard with some Post-it notes on it.

They then signed off on the design direction, _not_ the images as a “final” design — the design evolved continuously and collaboratively, right up to the final delivery.

The delivery was also simple:

* Modular build
* Frequent updates
* Deploy little & often
* Regular client feedback
* No “big reveals”
* One deliverable — a website

### Pragmatic technology choices

The whole technology stack was chosen for overall familiarity, ease of use, and speed — both internally and with the Google Team.

* Code managed using [`GitHub`](https://github.com/google/WebFundamentals)
* Built using [`Jekyll`](https://jekyllrb.com/)
* Structured using [`Markdown`](https://daringfireball.net/projects/markdown/) and templated with [`Liquid`](https://shopify.github.io/liquid/)
* Styled using [`SASS`](https://sass-lang.com/)
* Automated with [`Grunt`](https://gruntjs.com/)
* ...and a tiny bit of JavaScript[^2]

Content authors were working in parallel with us, and frequent deployment to the development and staging sites allowed them to adjust their content strategy when they realised that the content was _way too long_ and needed splitting down into more digestible chunks.

### Ruthless efficiency

With such a small team and a tight deadline, the project required us to work fast.

* Week 1
  * First round design direction
  * IA based on Google’s content
  * Site structure & URL strategy
  * Staging site build
* Week 2
  * Client review of design direction & iteration
  * Approval of design direction & architecture
  * Site and design iterations
* Week 3
  * Content population & core template build
  * Site and design iteration
* Week 4
  * Site & design iterations
  * Client acceptance & sign off
  * Soft launch

### About that "soft launch"...

"We’re just going to send it out to a few key developers to review it...” turned into the legendary [Jeffrey Zeldman](https://zeldman.com/) tweeting about it, 250K hits on day one, 550k hits in week one, page one of Hacker News, and the site being all over Twitter like a rash... and whilst there were inevitably some detractors, the reaction to the site — and to our code — was generally very positive.

### Some stats

In the first month:

* More than 25% of traffic from mobile devices — developers.google.com was getting 5%
* More than 9% of traffic from tablet devices — developers.google.com got 1%
* 30% bounce rate — html5rocks.com got 80%

### A very happy client

The client team wasn’t just impressed with the final site (or the code). They were talking about the whole process — the speed, the adaptability, the Post-it notes, the pencil sketches, the collaborative approach — and they showcased it at Google I/O across an impressive array of devices.

![Google I/O showcase for Web Fundamentals](/img/web-fundamentals-googleio-showcase.png)

> “It is now the basis of all of our future web outreach”.  
>
> “It will be used as the basis of the entire /web/ directory now too, and is used as a model for the rest of the site”
>
> Paul Kinlan

### The start of something wonderful

Above all of the world-class technical output and undeniable delivery success in such a short timeframe, the thing that puts a smile on my face the most is that Antoine, the second most active developer on the project, was a tech intern — what a great project to learn your craft and kick-start your career with!

![GitHub commits showing some of my team's output - Pedro Duarte and Antoine Grelard were the stars of the show](/img/web-fundamentals-commits.png)

## BritBox UK (2019)

BritBox UK represented my first project delivery at Deltatre, and an entirely new technical domain for me to learn (at pace).

When I joined Deltatre in March 2019, I went straight in to the BritBox UK project, which had kicked off not long before and was still very much in its infancy.

### The best of British

The BritBox proposition wasn't new — it had existed for some time in the USA as [britbox.com](https://www.britbox.com), which is also a Deltatre project — but due to the unique combination of licensing rights and the specific context of British public service broadcasting the UK version was to be run by ITV while the international version was a separate entity headed up by the BBC.

### Agility and pragmatism

We were very fortunate to have a client team that took a pragmatic and agile approach.

We started out with Web and iOS builds as our "Alpha" deliverable, expanding before launch to include Android and ending up with numerous Smart TV devices by the time we were done — Samsung Tizen, LG WebOS, Apple TV, Google Chromecast, Amazon FireTV, Roku, Freeview Play, YouView, Netgem... the list was pretty impressive!

With a small, dedicated team we went live in November 2019 and continued to evolve the platform over the next few years, adding new features, functionality, and partner integrations, pushing out a record _90 releases in one quarter alone_.

In the streaming platform space, consumer expectations are set not by the platforms that Deltatre delivers but by the R&D budgets of Netflix, Amazon Prime, and Apple TV — which raises the bar just a bit — so being able to deliver world-class apps and competitive features in that context is a huge credit to the project team and the AXIS product!

### Collaboration in the age of COVID

Having launched BritBox UK in November 2019, we were plunged into the maelstrom of COVID-19 in early 2020.

Being a fundamentally international and geographically distributed team, we had an advantage when it came to remote work, but we also benefitted significantly from having had the face-to-face time with the client team at ITV during the first 12 months of the project. That empathy — and more importantly, _trust_ — enabled us to keep everything running with a minimum of disruption.

Our close collaboration and frequent visits to each others offices may have given way to Zoom calls, but we did find the time for a few "work drinks" evenings even in the thick of the various lockdowns!

Perhaps the most personally gratifying moment was a simple thank-you email sent by one of the client team to the project manager on our side saying "we love having Andy on the project - he always gives us confidence and we know that if anything goes wrong, he'll fix it".

Leading collaboration through an era-defining pandemic was certainly not on my bingo card when I joined Deltatre, but it clearly demonstrated the value of something that has come up throughout my career - the ability to bridge the gap between business and technology, and to bring the conversation together in clear, non-technical language.

### All good things must come to an end

Due to a strategic shift at ITV and the launch of ITVX in December 2022, the standalone BritBox UK platform was eventually retired in April 2024, with its content fully merging into ITVX as part of the Premium offering within the new platform.

It was obviously sad to see that project head into the sunset, but it did so with its head held high — we built a genuinely compelling service, proved the commercial viability of the content within the UK market, and, most importantly, we built a fantastic working relationship with the team at ITV.

## Onwards and upwards

I have never sought progression for the sake of progression — I have built my career based on taking on interesting challenges when they arise, working with talented colleagues, and focusing on identifying and solving real problems and delivering real value.

Looking back, Get Set gave me the opportunity to grow and move from being an individual contributor into being a leader.

Google Web Fundamentals demonstrated the power of a _truly agile_ methodology when paired with a focused, kick-ass team and a genuinely engaged and invested client.

BritBox was the project that let me cut my teeth in the world of streaming video, and was my introduction to many of the great people at Deltatre that I have continued to work with since.

The successful foundations and relationships that I built on each project and in each role have allowed me to grow and progress as an individual.

Most recently, as the chimes of midnight sounded and the London fireworks burst into life on New Year's Day in 2025, I took another significant step forward, taking on the role of VP Product Architecture and Engineering, and with it the responsibility for software engineering across Deltatre's core products.

It's been an interesting journey so far, and the challenges do find a way of keeping on coming, but life without challenges to keep me sharp would be pretty boring, wouldn't it?

[^1]: See [www.getset.co.uk/about-get-set](https://www.getset.co.uk/about-get-set)

[^2]: Any JS code we wanted to include had to go through a full Google security audit, and any libraries needed to have appropriate licenses. We therefore kept the JS to an absolute minimum - the only place it was used was on the main nav.
