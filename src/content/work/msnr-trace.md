---
title: 'A traceability ERP where every kilo has to reconcile'
client: 'National commodity traceability platform'
sector: 'Traceability · Stock · Transactions'
year: 2025
code: 'TRC'
summary: 'MSNR Trace: purchase, processing and sale as one connected ledger, with compliance status threaded through every movement and official documents generated from the record.'
outcome: 'Three awards at the Malaysia Technology Expo, including Best Innovation.'
services: ['Technical lead', 'System architecture', 'API development', 'Database design']
stack: ['Angular 16', 'TypeScript', '.NET Core Web API', 'C#', 'SQL Server']
domains: ['Traceability', 'Stock', 'Transactions', 'Documents']
role: 'Technical lead & full-stack engineer'
repo: 'C:\Project Code\MSNR Trace'
demo: 'demo-trace'
awards:
  [
    'Best Innovation Award, International Innovation Awards',
    'Gold, International Innovation Awards',
    'Gold, Public Service Innovation Asia',
  ]
order: 1
featured: true
---

## The problem

A commodity moves through a chain: it is bought, it is processed into something
else, and it is sold. Each of those is a transaction, each changes the quantity
and the form of what is held, and each has to remain connected to the one
before it. If that connection breaks anywhere, you can no longer answer the
only question that matters to a regulator: where did this specific output come
from?

Most systems handle one of those three well. The difficulty is holding all
three in a single ledger where the arithmetic still reconciles at the end of a
year, across many participants, each of whom sees only their own position.

## What makes it hard

**Compliance is not a column, it is a property of the chain.** Every unit
carries a compliant or non-compliant status, and processing mixes units
together. The status of an output is a function of every input consumed to make
it, so the consumption rule and the compliance rule are the same rule.

**Fungible and non-fungible stock behave differently.** Raw material is
interchangeable, so it is consumed first in, first out within a bin, grade and
tariff-code group. Finished product is not: each batch keeps its own identity
and must remain individually selectable, never silently merged. The system
carries four material classes and the consumption semantics split down the
middle of them.

**One user is several roles.** A licence can be a trader, a processor, a
manufacturer, or more than one at once. Which menu renders, which outputs a
user may declare, and which stock classes they may draw from all follow from
that. Getting it wrong means either blocking legitimate work or permitting
something that will not reconcile later.

**The paperwork is the product.** Weighing slips, written authority forms,
delivery notes, receipts and due diligence reports are the artefacts the
outside world actually sees. They have to be generated from the record, never
retyped, and they have to print correctly on A4 with the footer pinned to the
bottom of the page.

## What I built

I led the technical development across an Angular 16 front end and a .NET Core
Web API over SQL Server.

**The transaction core.** Purchase, processing and sale, each writing into a
shared stock model of bins and lots. Stock endpoints return nested bins and
lots, flattened in the service layer into a single balance-and-lots contract so
that every screen consumes stock the same way regardless of material class.
Polymorphic references let one detail row point at any of the four source
tables through a reference-id pair rather than four nullable foreign keys.

**Identity from claims.** Login returns a JWT and almost all user context is
decoded from the token rather than re-fetched: licence number, categories,
trace ids, entitlements. An HTTP interceptor attaches that token to our own API
and, importantly, to nothing else, because the system also talks to a customs
API, a separate sales platform and a licensing service, each with its own auth.

**Role-scoped everything.** The sidebar, the available outputs and the
selectable stock classes are all derived from the licence trace ids, with a
name-matching fallback for older tokens that predate them. A licence holding
several roles gets an in-app role switcher.

**Documents as first-class screens.** A set of print templates that assemble an
A4 sheet, wait for logos and generated QR codes to finish loading, then hand
off to the browser's print pipeline. Colour fills survive printing because they
are declared as such rather than hoped for.

**Sequential ids do not appear in the address bar.** A custom URL serialiser
encodes numeric route segments to opaque tokens and decodes them on the way
back in, leaving legacy links working. It is obfuscation rather than security,
and the server-side authorisation is the real control, but it removes the
invitation to type a neighbouring number.

> The design decision I would defend hardest is refusing to merge product
> batches. It costs more code in every stock adapter, and it is the only reason
> a finished unit can still be traced to its inputs a year later.

## What it took

Integration with three external systems, each with its own authentication and
none of which could be changed. A domain where a rounding difference is not a
cosmetic bug. And a codebase that had to stay legible enough that a second
engineer could pick up a flow without being told which of four material classes
they were looking at.

<!-- REVIEW: add public volume or adoption numbers here if any exist. A number
     a client can picture is worth more than a paragraph of architecture. -->
