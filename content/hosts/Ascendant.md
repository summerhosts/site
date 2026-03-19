---
title: Ascendant
description: The successor to Altare 8
tags:
  - Free host
---

![banner](https://summerhosts.github.io/media/ascendant/banner.webp)

## Info
* [Discord](https://discord.gg/vQMct6RTaE)
* [Website](https://ascendant.sh)
* [GitHub](https://github.com/ascensant-sh)

## History
### Pun
Ascendant is building [Pun](https://github.com/ascendant-sh/pun) which is a fork of bun  
**<DateDisplay timestamp="1764709340484" />**  
_ethzr (ethzr, `287810414094450699`)_
> Anthropic acquired Bun so we are launching https://github.com/ascendant-sh/pun
> 

**<DateDisplay timestamp="1764709348788" />**  
_ethzr (ethzr, `287810414094450699`)_
> We will have the built version out tomorrow & docs
> 

### Host announcements
**<DateDisplay timestamp="1764779163336" />**  
_ethzr (ethzr, `287810414094450699`)_
> @everyone Ascendant’s hosting is launching before Christmas at latest 
> 
> **Technical things:**
> 
> We have completely dropped Pterodactyl, Cryogenic, Docker. I have been working on an entirely new truly all in one dashboard that will be Heliactyl Next 16
> 
> We have brought back Argon’s Krypton daemon, but rewritten in Rust and with a new Krypton container engine that directly bypasses Docker and uses containerd. We see significant speed improvements following this, our only goal is to make Ascendant the world’s fastest free host. We are no longer using WebSockets or a regular REST API, we are using a newer version of our FQTT (similar to MQTT) protocol. Previously we had to drop it due to issues in production, but we have brought it back with a new Firestorm 2 FQTT broker/client. We prefer this protocol as it has much less overhead than a normal WS 
> 
> We are also now using Crucible 1.0 as our reverse proxy & webserver, it’s much faster than 0.4, has better caching, significantly stronger Flux, and it directly hooks into our dashboard
> 

**<DateDisplay timestamp="1764779245689" />**  
_ethzr (ethzr, `287810414094450699`)_
> We also changed how our UI works significantly, rather than being entirely client side and being slow, we are using SSR and injecting data prior to load. This means there are no more spinners and slow loading times, this is much closer to older Heliactyl but without ditching Vite/React
> 

**<DateDisplay timestamp="1764779399396" />**  
_ethzr (ethzr, `287810414094450699`)_
> And we have also made the world’s fastest SSH client/server by completely dropping SSH itself and running everything over FQTT
> 

### Coming soon
**<DateDisplay timestamp="1764977016139" />**  
_ethzr (ethzr, `287810414094450699`)_
> @everyone things are a bit quiet here. but everything is in fact coming
> ![vid](https://summerhosts.github.io/media/ascendant/ascrev2.webp)
>

### Updates to the software
**<DateDisplay timestamp="1764991736257" />**  
_ethzr (ethzr, `287810414094450699`)_
> it’s quite a big month. Heliactyl Next 16, Radar 16, Cryogenic 16 (yes we decided to rename Krypton to that since we had v15), Crucible 16, Pun 16 are all out this month 
> 
> and Arc Code 2.0, AI Studio, whatever else in January
> 

### bros at apple park
**<DateDisplay timestamp="1765228013505" />**  
_Deleted User (Deleted User, `456226577798135808`)_
> @everyone come join me and @sam (samm9400, `673662795077648424`) at apple park in cupertino, cali
> ![apple park](https://summerhosts.github.io/media/ascendant/apple_park.webp)
> 

### More arc
**<DateDisplay timestamp="1765328409762" />**  
_Deleted User (Deleted User, `456226577798135808`)_
> @here arc code with claude opus 4.5, sonnet 4.5, gpt 5.1, gpt 5.1 codex, gemini 3 pro, qwen3 next, mistral large 3, devstral 2 plus arc 5, arc 5 max, arc 5 ultra?
> 
> all for free perhaps
> 

### no new hardware
**<DateDisplay timestamp="1765495439282" />**  
_Deleted User (Deleted User, `456226577798135808`)_
> @everyone Ascendant is on it’s way. I apologise for the delays, it’s around Christmas time and I have a lot of travelling, work and personal things going on
> 
> -
> 
> I planned for the return of our Nottingham location with new hardware, much more capacity and some significant changes. However, this has been cancelled. This is due to the absolutely disastrous RAM prices at the moment. In no way can we afford to do this, as all of our hardware requires upgrading. We will bring the location back as a lot of people liked it but at low capacity. We wanted to have 14 brand new machines to replace the current ones, but this isn’t feasible, especially as some hardware would be AM5 with DDR5 and the prices for DDR5 are even worse
> 
> Due to the fact the AI market has bought up literally the whole global RAM supply, and will keep doing so, likely to an even further extent, we don’t expect to be able to do this any time soon until the AI bubble pops, and with it the global economy. Isn’t this wonderful
> 

**<DateDisplay timestamp="1765495527364" />**  
_Deleted User (Deleted User, `456226577798135808`)_
> even the small scale, used market has gone up significantly. we are not paying £100 for 16GB of DDR4.
> 

**<DateDisplay timestamp="1765495872211" />**  
_samm9400 (samm9400, `673662795077648424`)_
> TLDR: Ascendant is underway, and we do apologise for the delay. We'll notify you once we have more updates, but we don't have a set release date right now. We expect everything to be ready by the new year.
> 

### ts is not coming soon
**<DateDisplay timestamp="1765548962045" />**  
_Deleted User (Deleted User, `456226577798135808`)_
> @here today we’ll sort out this discord server and get some boosts done, apologies for this server basically being empty
> 

**<DateDisplay timestamp="1766065262144" />**  
_samm9400 (samm9400, `673662795077648424`)_
> Ascendant is still underway and will be here for you all soon
> 
> Meanwhile, if you do need a free Minecraft server, feel free to check out CryHosting
> 
> discord: https://discord.gg/zak2gsJRTe
> site: https://cryhosting.net
> deploy your server: https://deploy.cryhosting.net
> 
> [ @everyone @Members (`1340358812221050881`) ]
> 

### Discord recycled
The Ascendant discord was used for [Altare 10](./Altare/10.md) after the Altare discord got nuked
