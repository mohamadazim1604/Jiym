---
title: 'Booking, check-in and attendance as one record'
client: 'Internal operations platform'
sector: 'Booking · Scheduling'
year: 2025
code: 'BKG'
summary: 'Space: room booking with participants, QR check-in and attendance reporting, scoped to an organisation chart of divisions and departments.'
outcome: 'Availability became a screen instead of a phone call, and attendance became a report instead of a paper sheet.'
services: ['Product design', 'Angular development', 'API integration', 'Reporting']
stack: ['Angular 16', 'TypeScript', 'Angular Material', 'Bootstrap 5', 'SweetAlert2']
domains: ['Booking', 'Attendance', 'Reporting']
role: 'Full-stack engineer'
repo: 'C:\Project Code\LGM-Space'
demo: 'demo-booking'
order: 2
featured: true
---

## The problem

Booking a room was a message to whoever held the diary. Attendance afterwards
was a sheet of paper passed around the table. Neither produced anything anyone
could look at later, so two questions had no answer: is this room free, and did
the meeting actually happen.

This is the least glamorous category of software and one of the highest return.
The saving is small per person and constant, which is exactly the shape of
problem software is good at.

## What makes it less trivial than it looks

**A booking is not one entity.** It is a room, a time range, a creator, a set
of participants who each have an invitation status, and a set of attendance
records that only exist once people arrive. Modelling those as one table is the
mistake that makes reporting impossible six months later.

**Permissions follow an existing org chart.** Divisions and departments already
existed and were not going to be redesigned to suit a booking tool. Bookings
carry both, so a department administrator sees their own estate and nobody
writes a bespoke permission rule per screen.

**Check-in has to work for people who are not users.** External guests attend
meetings. Attendance therefore records a guest name and organisation as well as
a user id, and a booking carries a QR token so arrival can be captured at the
door without an account.

## What I built

An Angular 16 application on Angular Material, structured around four
entities that stay separate: rooms, bookings, participants and attendance.

**Availability as the primary screen.** A grid of rooms against time slots
where a conflict is not something you are warned about after submitting, it is
something the interface will not let you express. Capacity is checked against
the participant count at the point of booking rather than discovered in the
room.

**Participants carry their own state.** Each has an invitation status, a name
and an organisation, so a booking knows who was invited independently of who
turned up.

**QR check-in.** Each booking issues a token. Scanning it records a check-in
time against that booking, which is what turns attendance from an assertion
into a timestamp.

**Reporting that answers the original question.** A booking report over rooms
and date ranges, which is how a facilities decision gets made without anyone
counting by hand.

Behind all of it: JWT login, route guards, role-driven navigation, and the same
confirmation and alert conventions used consistently rather than reinvented per
screen.

## What changed

- Double bookings stopped, because the conflict became impossible to create.
- Attendance became a record attached to the booking it belongs to.
- Room utilisation became answerable from a report rather than from memory.

<!-- REVIEW: add adoption numbers if you have them, such as rooms managed,
     staff onboarded, or bookings per month. -->
