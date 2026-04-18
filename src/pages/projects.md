# Projects

Having been in leadership and management roles for a long time now, I do still like to keep my hand in with the odd bit of hobby coding.

Here are a few side projects that I build and maintain outside of day-to-day work - more odd side projects will inevitably appear here over time.

## Chef-o-tron

Back in November 2021 I found myself laughing at a couple of tweets from [Alex Rushmer](https://x.com/justcookit/status/1460522952978571264) and [Dhruv Baker](https://x.com/DhruvBaker1/status/1460568926727946241) — a couple of chefs I followed on Twitter — bemoaning the ludicrous state of festive food items in UK supermarkets and on TV, and wondering if there was some kind of festive food generator machine that churned them out?

Seemingly there wasn't, so I created one - the [Chef-o-tron](https://chef-o-tron.andyhawkes.co.uk/)

It started out simply enough as [a randomised text string generator that smashed together a few festive foods](https://chef-o-tron.andyhawkes.co.uk/npd/xmas) in the name of comedy, but then I started adding to it.

What was originally xmas focussed turned into [something more suited to all year round usage](https://chef-o-tron.andyhawkes.co.uk/).

And then I added a [tasting menu generator](https://chef-o-tron.andyhawkes.co.uk/tasting-menu) for extra pseudo-chefiness.

And a bingo card generator for people to use while watching their favourite cooking shows - first [Masterchef](https://chef-o-tron.andyhawkes.co.uk/bingo/) and then [Great British Bake Off](https://chef-o-tron.andyhawkes.co.uk/bingo/bakeoff/).

The markup is crap, the CSS is buggy, and the JS is clunky, and it's kind of languished for a while now, but still raises a smile whenever I decide to pick it up again — normally before a fancy meal out at [Vanderlyle](https://www.vanderlyle-restaurant.com/) in Cambridge, which is run by Alex Rushmer, one of the original inspirations for Chef-o-tron in the first place!

## Drink-o-tron

Not being one to waste the opportunity to stretch a joke, I decided to recycle the shoddy code underpinning Chef-o-tron to produce similarly over-the top beverage ideas, because... well, I could, and I like delicious (and sometimes ludicrous) beverages!

Thus [Drink-o-tron](https://drink-o-tron.andyhawkes.co.uk/) was born and proceded to come up with stupid beverages galore!

Given the propensity for some craft beer afficionados to blather on about umpteen different grains, hops, adjuncts, and beer styles, I created a [craft beer generator](https://drink-o-tron.andyhawkes.co.uk/beer/) - and some of them even sound like they might be tasty!

I also wanted to have a stab at [cocktails](https://drink-o-tron.andyhawkes.co.uk/cocktails/) too, so I did.

I've thought about plugging the craft beer generator into some kind of AI image generation to produce beer labels for the ludicrous ideas it comes up with, but I haven't got round to it yet.

I did, however, [make ChatGPT come up with a name for a beer as well as a review and some accompanying tasting notes](https://drink-o-tron.andyhawkes.co.uk/blog/2023-06-30-is-ai-coming-for-our-beer/).

## Work clock

I wanted a clock for my office, and couldn't decide what I wanted, so I opted to make a slightly unusual one with a Raspberry Pi and an e-ink screen.

Inspired by [Matt Webb's AI Poem clock](https://www.kickstarter.com/projects/genmon/poem-1-the-ai-poetry-clock) as well as this [very expensive wall clock](https://www.jurawatches.co.uk/products/qlocktwo-classic-creators-edition-rust-wall-clock-45cm-fcenrt) (and this [much less expensive one](https://amzn.to/3SPwldn)), I wanted a word-based clock for my office that would not show the exact time but would be deliberately more vague.

An e-paper display seemed ideal for this as it would only need to update relatively infrequently — I settled on every 5 minutes, and only during working hours.

Because this was going to be sat on my desk, I only want / need it to show the time during by working hours (and to act as a prompt to tell me to stop working at the appropriate hour), so to reduce the number of display refreshes the script will write a status value to a text file each time it runs, and will check the status next time it runs in order to see if it needs to update the display or not.

![A crappy photo of my clock saying "it's half past nine ish"](https://github.com/andyhawkes/work-clock/raw/main/images/half-past.jpg)

Check out the [GitHub repo](https://github.com/andyhawkes/work-clock) for more info and a parts list if you're interested in making your own.

I will make a nice frame for it at some point.

No, really, I will - it's on a "to do" list in my office, and everything!

## Home automation

I have a "home lab" server sat on top of the bookshelves in my home office running Proxmox and a handful of projects, including my ever-expanding [Home Assistant](https://www.home-assistant.io/) setup.

I started out with modert intentions — a few LED light strips in the living room controlled over WiFi via Google Assistant and some Google Home Mini / Nest Mini speakers — which has somewhat inevitably expanded to:

* WiFi LED lights in the living room, kitchen, and office
* A self-made "chandellier" in our stairwell with wireless RF switches and WiFi integration
* Zigbee lights in the porch and side door
* Zigbee door sensors in the swimming pool
* Zigbee climate sensor in the poolhouse and porch
* Zigbee sockets scattered aroudn the house to extend range
* Zigbee smoke alarm in the garage just in case our solar inverters or batteries (or either of my motorbikes) decide to spontaneously combust
* A WiFi camera watching over the driveway
* A night-vision enabled WiFi camera and IR light to watch over our puppy in her crate (which has now been retired as she's somehow 2 years old already)
* 9 (I think) Google Home Mini / Nest Mini speakers around the house, including stereo pairs in the kitchen and living room, and a hand-made / physically hacked one in the pool house with an externally wired AUX-out socket and switch, feeding into the poolhouse sound system
* A WiFi access point on the side of the garden shed, giving WiFi to the full property boundaries
* WiFi smart sockets controlling pond pumps and garden lights
* Shelly smart relays controlling the pool pump, dehumidifiers, and underwater light
* Smart sockets in the greenhouse to control a heater
* Hand-built ESP32 temperature sensors in the greenhouse monitoring outside air temperature, ground temperature, and inside air temperature in 2 zones
* Hand built ESP32 temperature sensors in the pump room to monitor pool outflow and inflow temperatures, as well as boiler outflow temperature
* Hand build data-logger for my Solis solar inverter
* Modbus connection to my FoxESS inverter and battery management system
* Lots of automations to:
  * Manage battery charging / discharging in conjunction with Octopus Energy pricing and special events
  * Turn lights on with smart timers linked to sunset times
  * Heat the greenhouse if it drops below 5C (to keep my wife's fuchsia collection safe over winter)
  * Run the pool dehumidifiers only when the humidity is too high (and the doors aren't open)
  * Run the pool pump and filtration on timers that vary by season to make the most of either cheap night-time electricity in the winter or solar yield in the lighter months.

So, yeah, a fun mix of physical electronics (although I hate having to solder tiny wires with my big hands and deteriorating middle-aged eyesight), code hacking, YAML, and running a home lab server while keeping physical switch backups for every "smart" implementation and doing it all in a way that is accessible to my distinctly less geeky wife!