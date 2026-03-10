---
slug: shipping-ai-code
title: Shipping AI code - speed isn't everything
authors: [andyhawkes]
tags: [AI]
---

Today I saw [a LinkedIn post from a a COO](https://www.linkedin.com/posts/gper1_ai-softwareengineering-productivity-activity-7437048320210055168-za6F) saying:

> Today developers who spend 3 days writing "clean" code that someone else would have shipped in 4 hours with AI are no longer rewarded for their dilligence: they're penalised for their slowness.  
>
> What the customer is now measuring:
>
> - How many features did you ship?
> - Does it work?
> - Does it create value?  
>
> The market no longer pays for the craft of writing code; it pays for results.  
> What if the best thing a senior dev can do in 2026 is teach their team to ship faster, not code cleaner?

Friends, I have opinions...

<!-- truncate -->

## Fast is a race to the bottom

I am (as I find myself reiterating with monotonous regularity) not opposed to AI coding tools - I am working on an agent-driven development framework in my spare time, and it's very promising so far.

That being said, just focussing on speed is a pretty blinkered view.

There is a very dangerous false equivalence here, and "clean" versus "fast" is a subjective value judgement.

Being fast to market can be a good thing, but not if there are unrecognised security or performance issues in that code which otherwise passes the tests (that AI probably wrote for you as well) and an issue, outage, or data leak results in loss of consumer confidence (or, you know, financially and reputationally crippling law suits...).

## Why go slow though?

I'm not advocating for slow _per se_ — I am advocating for an understanding of what "quality" and "value" mean, both of which are complex and subjective.

The fundamental questions that I would ask are a little different:

- Do your customers _need_ features delivered in 4 hours rather than 3 days?
  - Are their customers ready to take on new features at continual break-neck pace, or will that put them off?
  - How many features do you intend to add that would make it so essential to deliver them all right now?
- What do your customers (or your customer's customers) actually _want_ and, more importantly, _need_?[^1]
- Creating value is key, so what do we mean by "value"?[^2]
  - For whom is it valuable?
  - What is the relative value of those features compared to others that you could be working on?

From that you can understand whether delivering features like a machinegun is actually valuable, or whether a more human cadence might be more appropriate.

## Want my advice?

Of course you do, but it's kind of you to ask anyway!

> Use AI as you would use a team of very enthusiastic employees of variable quality, experience, and attention to detail.

AI is an accelerator, but it doesn't replace the need for good judgement, architectural thought, validation of value propositions, and product-market fit.

If anything, the ability to act at unprecedented speed makes it more important to have a clear roadmap and good governance in place, not less.

"Move fast and break things" used to be the tech bro mantra, but that's when it was a choice between speeds defined by the limits of human locomotion — now we're talking about a metaphorical rocket ship, which is very impressive and everything, but not if you're accelerating directly into the sun with no ability to adjust speed or course!

AI can absolutely enhance the development process — I have a project going in my spare time to build a Backgammon game using React Native where all of the code is being written by AI [^3] — but it still needs good direction, clear, solid rules to follow, and someone with the ability to understand and validate the output (and guide debugging).

At this point in time I would stromngly advocate for experienced humans in the loop to direct and ensure quality.

No matter how good your prompts, skills files, and rules are, LLMs are still non-deterministic and prone to over-confidence, and most importantly they are trained on human-produced code rather than fundamentals of programming, so they're just as capable of creating bugs, security risks, and sub-optimal code as we slow, squishy-brained humans are if unsupervised!

[^1]: I explicitly said _need_ not _want_. All clients will want things that are unreasonable, unachievable, or inadvisable, because... clients. Part of being a good partner to your clients is steering them, managing their expectations, and helping them to realise what they (and/or their end customers) actually _need_, and then delivering that.

[^2]: This prompts another round of introspection - what is "value" for you, your clients, and their customers? For you and the client, value can be a stable and easily supportable platform rather than a shiny "feature" that is largely or completely ancillary to the end customer or actual business value. For the end customer it can be a simple "quality of life improvment" that reduces friction and in turn improves retention for your client. Having worked with websites and consumer applications for 25+ years I can be reasonably confident in saying that you would be very surprised what real users actually value compared to what a business ascribes value to.

[^3]: I am not really a modern app developer. I am an old-school, "hand-rolled code with minimal frameworks" kind of web developer and I have never properly built my own stuff with React, let alone React Native — largely because I haven't been actively coding in exchange for coins for 15 years or so, on account of having talented people to do that for me these days. Working on a green-field app as a both a learning project and a field test of my agentic framework is very interesting so far though.
In case you're interested, I picked a backgammon app because my wife and I both like playing Backgammon casually, the app I currently have on my phone is riddled with ads that interrupt gameplay, and backgammon has very simple rules and a probabalistic structure that makes it pretty suitable for a side project. With me being me, however, I have already mapped out a detailed enhanced feature set and potential revenue model, just in case I decide to try and make it into something that could pay enough for me to quit my day job...
