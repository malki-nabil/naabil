---
title: "Introducing HonoForge"
description: "Why I started HonoForge, a Hono-based batteries included starter template."
pubDate: 2026-08-20
tags: ["Hono", "TypeScript", "Backend"]
---

I've been building backend systems with TypeScript and NodeJs for a while, and I kept
coming back to [Hono](https://hono.dev) for its speed, minimal surface area and great
TypeScript support.

The main issue i faced was re-doing all the same boilerplate setup everytime i started a new project,
HonoForge is my attempt to speed things up for myself.

by simply running **`npx create-hono-forge@latest my-app`** i can be up and running in seconds,
with a production ready web server that includes typesafe env variables, structured logging,
migrations and authentication wired up, versioned routes, etc...

## Where things are

The repo is at [codeberg.org/Naabil/HonoForge](https://codeberg.org/Naabil/HonoForge).
It's early days, expect the structure to shift as patterns solidify.
It's fully open source, MIT Licensed.

For more information checkout the repo linked above or visit [honoforge.naabil.com](https://honoforge.naabil.com)
