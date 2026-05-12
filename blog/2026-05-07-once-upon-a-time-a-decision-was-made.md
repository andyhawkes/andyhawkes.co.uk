---
slug: once-upon-a-time-a-decision-was-made
title: "Once upon a time, a decision was made"
date: 2026-05-07
authors: [andyhawkes]
tags: [Architecture, Engineering]
description: "Without deliberate context preservation, architecture decisions stop being history and start becoming folklore."
---

Every engineering organisation has its stories.

* “We tried that once and it failed.”
* “There’s a reason we built it this way.”
* “Don’t touch that service.”
* “The database can’t handle it.”
* “We can’t deploy on Fridays.[^1]”

Nobody is ever entirely sure whether these are:

* historical facts
* cautionary tales
* institutional trauma
* or the architectural equivalent of a Brothers Grimm fairy tale passed verbally between increasingly confused villagers.

<!-- truncate -->

At some point, every system accumulates folklore.

The interesting thing is that this rarely happens deliberately — it usually starts with a perfectly rational engineering decision made in a perfectly rational context by normally quite rational people.

A deadline.

A platform limitation.

A production incident.

A technical trade-off.

![Once upon a time, a decision was made...](/img/fairytale-banner-v2.png)

## Context decay

Architecture decisions start life with rich context.

Constraints. Trade-offs. Timelines. Political realities. Technical limitations. Things that were tried and rejected.

At the beginning, the “source file” is layered and detailed, like a fully editable PSD.

Everything is there:

* the layers
* the annotations
* the hidden elements
* the experimentation
* the rationale
* the "final-final-v3-USE-THIS-ONE" version

Then time passes and the decisions get flattened into:

* a Jira ticket
* a Confluence page
* a half-remembered Slack or Teams thread
* somebody saying “I think there was a reason for that…”

Eventually, what remains is the organisational equivalent of a badly compressed, sliced up JPEG image.

The edges are blurry, the detail is gone, and everyone is filling in the gaps themselves.

## Verbal transfer starts as lossy compression

At first glance, verbal knowledge transfer looks like lossy compression.

Context gets flattened, detail disappears, and nuance fades over time.

The problem goes deeper than that, however, because verbal transfer isn't just compression.

It’s translation, and translation changes meaning.

Every time context passes from one person to another, subtle things shift:

* emphasis
* interpretation
* certainty
* emotional framing

Human memory isn't archival storage.

When a computer reads a file, it retrieves the same sequence of bits every time.

Human beings don't work like that. We don't “load” memories. We reinterpret them based on:

* previous understanding
* emotional context
* subsequent experience
* the stories we have heard since

Human memory isn't verbatim playback of canonical data, it's opinionated and unreliable reconstruction.

This means that organisational history isn't simply preserved through retelling, it's continuously rewritten by it.

The original decision may have been:

> “Given the platform constraints and delivery deadline in 2019, this was the least risky option.”

Three years later, the inherited version becomes:

> “We can’t do that because the platform doesn’t support it.”

Five years later:

> “That approach is dangerous and should never be attempted.”

At some point, nobody remembers:

* what the original constraint actually was
* whether it still exists
* who made the decision
* or whether the decision was ever correct in the first place

The story survives, but the context doesn’t.

## Temporary decisions have a nasty habit of becoming permanent architecture

This is where things start getting dangerous.

Engineering organisations are _full_ of temporary decisions that quietly fossilised into permanent constraints.

A workaround becomes a platform standard.

A deployment restriction becomes almost religious doctrine.

A hurried implementation detail becomes “the way the system works”.

Nobody revisits it because nobody fully understands where it came from anymore, and because the original context has decayed, challenging the decision starts to feel risky.

After all, we don’t go into the woods anymore, because _that’s where the **monsters** are_.

## A map of the past

At some point, the architecture starts to resemble a medieval map.

![A micro-service architecture in the style of a medieval illuminated map](/img/fairytale-architecture-map-transparent.png)

Beyond a certain boundary, all meaningful context disappears and the only remaining documentation effectively reads:

> Here be dragons.

Nobody is entirely sure:

* what the dragons are
* whether they still exist
* whether they breathe fire, hoard gold, or eat babies
* or whether anyone ever actually saw one in the first place

The warning survives and, over time, becomes self-reinforcing, because if nobody is willing to explore the territory, challenge the assumption, or revisit the original constraint, then the map never changes.

The dragons stay exactly where they are.

Not because they are real, but because the story outlived the evidence.

At some point, inherited assumptions stop being questioned and start being treated as truth.

That’s not architecture or documentation.

That’s _folklore_.

## Every company has technical campfire stories

Usually involving:

* a catastrophic production outage
* a database recovery performed under extreme emotional distress
* or “the Kubernetes incident”

The stories survive because they are memorable, not because they are necessarily accurate.

And over time, stories gain narrative weight — people simplify them, sharpen them, and re-tell them with slightly different emphasis each time.

Eventually, the organisation stops learning from the original event and starts learning from the mythology surrounding it.

## ADRs are not bureaucracy

This is where [Architectural Decision Records](https://adr.github.io/) become interesting.

Not because they are process, and definitely not because engineers enjoy writing documentation[^2].

They matter because they preserve context before it decays.

A good ADR isn't (just) a governance artifact, it's a historical snapshot.

It captures:

* what decision was made
* why it was made
* what alternatives were considered
* what constraints existed at the time

Most importantly, it preserves intent.

That matters far more than people realise, because even if the decision later turns out to be wrong, understanding _why_ it was made is often more valuable than the decision itself.

## Fragility through memory

Without deliberate context preservation, organisations become dangerously dependent on individuals.

Certain people become living archives, the revered bardic guardians of a rich shared history.

Or, you know, the only remaining copies of critical historical context stored in biological memory running on caffeine, stress, and whatever was left over from the last incident retrospective...

Either way, it creates fragility.

Not just _technical_ fragility.

_Organisational_ fragility.

Because eventually those people burn out, change teams, disappear into management, or leave entirely, and when they do, an enormous amount of invisible context vanishes with them.

## The problem with folklore

The problem with folklore is that it feels authoritative.

Humans are a storytelling species, and stories survive precisely because they are memorable, not because they are accurate.

Architecture works the same way.

Without deliberate context preservation, systems stop being shaped by engineering judgement and start being shaped by inherited stories.

Inherited fairy stories are a dangerous way to run a platform, especially when nobody can remember which parts were true in the first place.

[^1]: OK, so maybe the "Don't deploy on Fridays" thing isn't without justification, and people _are_ entitled to their weekends, but to me that constraint is more of a symptom of incomplete or unreliable testing and flawed CI/CD discipline than fundamental dogma.

[^2]: Oh, dear god(s), do engineers _hate_ writing documentation, and even having the AI equivalent of a medieval scribe to help them doesn't seem to... help.
