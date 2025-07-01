---
slug: is-vibe-coding-a-recipe-for-disaster
title: Is "vibe coding" a recipe for disaster?
authors: [andyhawkes]
tags: [AI, Coding, Development, Vibe coding]
---

Given [some of my previous comments about vibe coding](/blog/some-thoughts-on-ai), I found myself taking a different track and questioning some assumptions (and biases) over the last week and wanted to capture a bit more nuance around the topic.

<!-- truncate -->

For anyone that may have missed my earlier sparkling prose and witty observations, here's what I wrote mere 7 days ago:

> the very idea of anything produced by "vibe coding" getting in to production is frankly terrifying to me

OK, so that was pretty clear and direct, but what do we actually mean by "vibe coding"?

To be sure, I asked an AI (in this case Gemini via Google search), and it said:

> Vibe coding is an emerging approach to software development where developers primarily use natural language prompts to instruct AI tools to generate, refine, and debug code. It's characterized by focusing on describing the desired outcome (the "vibe") and letting AI handle the low-level implementation details. This method aims to make software creation more accessible, potentially faster, and allows developers to focus on higher-level goals.

Whilst I do genuinely believe that just asking an LLM to write code for you for anything beyond the simplest application and flatly trusting it to be production-ready is (currently) as dumb as a bag of rocks, I don't think that "vibe coding" itself is necessarily bad... with some important caveats.

## Taking responsibility

Unpicking the definition above, the focus is on the outcome rather than the code generation, and that's where caveat number one comes in:

1. the developer still needs to be responsible for the code at the end of the day, even if you're "letting AI handle the low-level implementation details"

We're not ready (yet) to just trust the machines — there needs to be a human in (charge of) the loop.

## Learning and growing

The genie is out of the bottle when it comes to AI / LLM tools — if you're not already using them then you'll be falling behind people and organisations who are — but there is still a need for developers to learn, grow, and evolve.

### A new, faster way to learn?

I thought back to how I learned to code, way back when in the dim and distant mid '90s to early 2000's, and I realised that I learned to code by looking at existing code and then trying it myself.

As an autodidact, that's how it works for me with almost anything new — find a thing, figure out what it is and how it works (or doesn't), then fix or adapt it.

Anyone approaching "learning to code" today has so many more learning resources at their disposal than I ever did - in my day it was mostly hefty tomes on specific subjects or software and a healthy dose of "figure it out as you go".

In fact most of the digital technologists of my era — certainly in my peer group — were self taught, and very few came from a formal Computer Science background.

Part of that is probably because we weren't doing traditional "computer programming" — I was a "full stack developer" before that term even existed, as we were coding for a new medium (or "new media" as it was called back then), writing HTML, CSS, JavaScript, Lingo, or ActionScript before venturing into the murky worlds of server-side code with ColdFusion, PHP, ASP.NET, or Java along with databases like MySQL, Postgres, or MSSQL.

And partly it came from the fact that it was so new — some of us actually knew people who were writing some of the books on how to do what we were doing! Inevitably, academia took quite a while to catch up on what the cool kids were doing and create a curriculum to match, and to some degree they have always remained one step behind.

### So how is that relevant to "vibe coding", grandad?

The thing is that back then we _were_ pretty much vibe coding — figuring it out as we went by trial and error — but we had to write (or steal) the code ourselves, and we had to figure out why it worked (or didn't) and whether there was a better way to do it[^1].

AI makes that exponentially faster, and by association it also (to some extent) removes the need to figure out the "why it worked" and "whether there was a better way to do it" bits, because you can just go again, and again, and again at speed until you get something that will run and you think to yourself "yeah, that'll do", because you know no better. Until you learn the hard way, of course...

I think the key thing is the distinction between "learning to code" — wherein you undertake the journey of learning what it all means and how it all works — and simply a mechanism for "producing functional code".

### Learning by doing vs "having it all done for you"

AI can "produce code", but unless you interrogate it — and you can also get the AI to explain and document the code for you — then you're not learning to code, you're asking a black box tool to write code and trusting that tool to do the work for you, and to do it "right" and "in the best way".

Even if you do get all of the hard work done for you, I like to think of AI assistants as being similar to myriad outsourced dev teams of the early 90's — you will, at best, get *exactly* what you ask for.

No more. No less. No discretion applied. No thought beyond the immediate context. No boundary testing. No consideration of scalability. No consideration of extensibility. No security testing. No consideration of maintainability.

Unless you ask for it. Explicitly[^2]. And know how to validate that it was included and delivered.

So the key comes down to another facet of learning — learning how to use a new tool.

## Do we need software engineers any more?

As I noted previously, AI's don't (currently) think — they are based on probabalistic models fed on a massive corpus of data reacting to given inputs.

So they are (again, currently) writing code based on code that was written before. Code that was written by humans, many (or most?) of whom were figuring it out as they went.

That means that they are also writing code that closely resembles what humans would write, which is reassuring, but it also misses out on the real breakthroughs that are still to come when AI can originate new code in new ways, and create new things in ways that humans haven't (or maybe even couldn't) imagine.

Until then we still have the fundamental law of Computer Science to solve: rubbish in === rubbish out[^3]

## Prompt Engineers vs Software Engineers - survival of the fittest?

Are we going to see a new generation of "prompt engineers" surplanting "software engineers"?

Maybe.

And maybe that's not as bad a thing as you may instinctively fear.

We are already seeing existing software engineers elevating their working practices to use these new tools better, to tune the inputs used to generate the code in the first place, and to understand the systems as a whole and guide their evolution by whoever (or whatever) is writing the code.

I believe that the key differentiators are (still) depth & breadth of knowledge, fundamental understanding, and above all *context* — a good engineer (whether "prompt" or "software") can understand the context of the question or instruction that needs to be put to the coding assistant of their choice (whether that's a junior developer or a fancy LLM tool), and can express it in such a way as to be clearly understood, can clarify and correct as needed, and can validate the results coming out of the end of the process.

You know, like people like me have all been doing for the last 25+ years anyway!

[^1]: Until StackOverflow came into existence, at which point we had lots of conflicting opinions on how to do ~something~ *anything and everything* and we still basically just had to "pick one" and roll with it.

[^2]: Non-functional requirements are important. I will write something about that soon, I think!

[^3]: For the non-British out there you may freely exchange "garbage" for "rubbish" in this context. You're welcome.