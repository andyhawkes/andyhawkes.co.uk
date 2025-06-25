---
slug: work-clock
title: Work clock - a slightly unusual desk clock
authors: [andyhawkes]
tags: [Tinkering, Coding, Raspberry Pi]
---

I wanted a clock for my office, and couldn't decide what I wanted, so I opted to make a slightly unusual one with a Raspberry Pi and an e-ink screen.

<!-- truncate -->

Inspired by [Matt Webb's AI Poem clock](https://www.kickstarter.com/projects/genmon/poem-1-the-ai-poetry-clock) as well as this [very expensive wall clock](https://www.jurawatches.co.uk/products/qlocktwo-classic-creators-edition-rust-wall-clock-45cm-fcenrt) (and this [much less expensive one](https://amzn.to/3SPwldn)), I wanted a word-based clock for my office that would not show the exact time but would be deliberately more vague.

An e-paper display seemed ideal for this as it would only need to update relatively infrequently — I settled on every 5 minutes, and only during working hours.

Because this was going to be sat on my desk, I only want / need it to show the time during by working hours (and to act as a prompt to tell me to stop working at the appropriate hour), so to reduce the number of display refreshes the script will write a status value to a text file each time it runs, and will check the status next time it runs in order to see if it needs to update the display or not.

![A crappy photo of my clock saying "it's half past nine ish"](https://github.com/andyhawkes/work-clock/raw/main/images/half-past.jpg)

Check out the [GitHub repo](https://github.com/andyhawkes/work-clock) for more info and a parts list if you're interested in making your own.