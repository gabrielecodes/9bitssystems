---
title: "AI in Data Engineering"
date: "2025-09-18"
author: Gabriele C.
subtitle: "Some thoughs sparked by a social media discussion regarding AI in data engineering"
excerpt: "Even after years of AI becoming mainstream, many questions remain unanswered. There are many opinions out there concerning the best ways to leverage AI."
tags: ["Data Engineering", "Career", "Data Strategy"]
image: "ai.jpg"
alt: "graphs on a computer"
---

## Introduction

A post on LinkedIn caught my attention. The author was mentioning that <em>"engineering and data teams"</em> need to be on board with embracing AI, otherwise the company would move rapidly in one domain and remain behind in another.

That made me think. I understand the appeal of AI, it can really increase your productivity if used correctly and it's fun. But I think AI has very different values across differen teams.

First, **engineering is not like marketing or sales**. There's no reason why "progress" in different teams can and should be measured in the same way. Theese teams have very different functions and goals, and operate in different ways.

Second, **AI can do well one thing only**. Of all the things an "intelligent entity" can do, AI can only do one, and that's generating text somewhat resembling human text. (and generating images, though we're not talking about that in this article). You may have noticed, I'm pushing the brake pedal a bit here, by using the word "resembling". We haven't really established that AI is "intelligent like a human", and <em>who know what that really means</em>.

Even with considering that AI is capable, in some sense and with varying degree, to "understand" text, it doesn't mean that it's production has the same value for every task, be it writing copy for advertising or writing code. Clearly these use cases, involve producing production "text", but of very different type and with different uses. The magical coding abilities of AI have been sponsored for a while, but as of the date of this article, in my view we don't have an AI capable of replacing even the average programmer.

A LinkedIn posted mentioned using AI for debugging and boilerplate generation. I think that the effectiveness of AI in these case is more limited than what may seem at first glance.

Concerning debugging, it's not clear to me how effective AI is, in what cases and to what extent. Debugging a small function you're uncertain about is one thing, finding the needle in a 100k codebase haystack is another. Also, who's going to debug the debugger?

Concerning boilerplate generation. I'd rather use a human-made boilerplate. It's under source control, possibly well maintained and updated, tested and used, perhaps for production code, by multiple people etc. Why exposing myself to the randomness of AI?

## Uses of AI in Data Engineering

How can we use AI in data engineering?

I think a couple of ways to use AI effectively are **documentation generation and research**.

Documentation is important and it's somewhat of a chore to write. AI is quite good at picking up what your function does and it can at least help you write all those inputs arguments, errors and output types that require special formatting. If you want to be more concise just trim the text. **This use case is low risk, documentation is not buggy code**.

Researching documentation is also a good application in my view. **New tools and APIs are coming out all the time** and it's a real job to keep up to speed with everything. Let's say you are using the API of a newly release AI too. It's still evolving and it has a vast documentation already. You can spend half of your day sifting through the docs trying to find that function but AI can find it quickly. You maybe tempted to just generate code and call it a day, but in my experience, with new or rapidly evolving APIs that code often won't compile/run. Asking AI to interpret the documentation though can speed up your understaing of how the API works.

## Conclusion

Tasks like documentation generation and researching APIs are practical, low-risk applications where AI can genuinely boost productivity. However, more complex tasks like debugging or code generation still require human judgment and oversight in my view. As with any tool, understanding its limitations is just as important as recognizing its potential.
