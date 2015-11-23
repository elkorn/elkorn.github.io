---
layout: post
title: Climbing the Ivory Tower: my journey towards Haskell
categories: [code]
---

- Describe what has been a constituent of my journey so far.
- Batch vs 'ambient' applications -> characteristics, problems
    - game loop
- Difficulties with wrapping my head around the purely functional way of doing
  things
    - mapping between monads
    - `do` notation is misleading
    - everything must be explicitly defined at the usage level due to the type
      system (somewhat bar `TemplateHaskell` - there things are defined on the
      definition, not usage, level)
    - it requires much more effort to understand higher-level concepts, b/c in
      practice you pretty much need to know whats happening under the hood
      - this can be due to an advanced beginner syndrome (seeing infinitely many
      possibilities for how things could work and not being able to pick out the
      most salient points)
      - another possible reason might be that there actually are multiple
      interpretations for how computational contexts (i.e. monadic stuff) might
      behave under sequencing.
- Ivory Tower theory
    - you are climbing a steep learning curve towards a language you would be
      very lucky to have a job in,
    - the effort for understanding stuff is a double edged sword: takes more
      time, but expands horizons,
    - unexpected side effect: having to see through complexity makes me
      understand otherwise more difficult concepts in other languages more
      easily and rapidly.
      - other things just seem simpler (explain this feeling better)
- Is it worth it? Would I recommend it? Yes, if:
    - you have time to spare or
    - you feel like lacking the means to further your knowledge (i.e. you feel
      'too stupid' for stuff)
    - you feel at a dead point on your IT road, i.e. you are passionate about it
      but at the same time feel like you don't know where to go and you just
      don't have the energy to go exploring right now
      - learning Haskell is like a good training regime, chipping away at it,
        even in small chunks will require you to understand a few new pieces
        most of the time. Moreover, you will most likely also get the
        compounding effect in understanding other concepts in different
        technologies.
- Where do you go?
    - Read various blog posts
    - Recommend a few books
    - Community is awesome and very helpful, hit IRC
