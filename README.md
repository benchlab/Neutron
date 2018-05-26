<p align="center">
  <img src="https://github.com/benchlab/benchx-media/raw/master/benos-logo.png" width="300px" alt="benOS Logo"/>
</p> <br>

[![](https://img.shields.io/badge/made%20with%20love%20by-BenchLabs-purple.svg?style=flat-square)](https://labs.benchx.io)
[![](https://img.shields.io/badge/benOS%20Library%20KeplerUUID-yellow.svg?style=flat-square)](https://kepler.benchx.io)
[![](https://img.shields.io/badge/benOS-Version-v.1.0.7-blue.svg?style=flat-square)](https://os.benchx.io/mercury/v/1-0-7)


# Neutron
Decentralized Network Creation and Management (SideChains and dappChains) Within The Bench Network.


## Under Development 
Neutron is currently under development in the `development` branch. 

## What Purpose Will Neutron Serve?
Neutron's sole job on the Bench Network to assist in the creation of decentralized networks, also known as blockchains which end up being `SideChains` and `dappChains` (SideChains used by dApps) and also assists benOS and benOS-based applications in retreiving from, connecting to and utilizing all the networks under its management. Neutron works directly with [Kepler](https://github.com/benchlab/kepler) when it comes to giving new networks unique identifiers, known as `GalaxyNames`. [Kepler](https://github.com/benchlab/kepler) is also integrated with each SideChain and dAppChain to assist in unique identifiers for users, their wallets, transactions and more. Neutron is one of the most important pieces to the Bench Network design. 

## What Decentralized Networks Are Created With Neutron?
There are many decentralized networks, both `SideChains` and `dappChains` that were created for dApps and other reasons, related to the launch of [benOS](https://github.com/benchlab/benos). These networks were created to give dApps their own decentralized networks, so that the dApps related to them didn't bog down the root-level of the Bench Network. Below are some decentralized networks being built with Neutron.

[BenchChain](https://github.com/benchlab/benchchain) - `RootChain` (root-level network) for the Bench Network. <br>
[MusicChain](https://github.com/benchlab/musicchain) - `dAppChain` (sub network) within the Bench Network, used for BenchMusic dApp.<br>
[ShareChain](https://github.com/benchlab/sharechain) - `dAppChain` (sub network) within the Bench Network, used for BenchShare dApp.<br>
[TubeChain](https://github.com/benchlab/tubechain) - `dAppChain` (sub network) within the Bench Network, used for BenchTube dApp.<br>
[ReadChain](https://github.com/benchlab/readchain) - `dAppChain` (sub network) within the Bench Network, used for BenchRead dApp.<br>
[DocChain](https://github.com/benchlab/docchain) - `dAppChain` (sub network) within the Bench Network, used for BenchDocs dApp.<br>
[QuintChain](https://github.com/benchlab/quintchain) - `SideChain` (sub network) within the Bench Network, used for the Quint network.<br>
[MailChain](https://github.com/benchlab/mailchain) - `dAppChain` (sub network) within the Bench Network, used for BenchMail dApp.<br>
[MemoChain](https://github.com/benchlab/memochain) - `dAppChain` (sub network) within the Bench Network, used for BenchMemo dApp.<br>
[ShopChain](https://github.com/benchlab/shopchain) - `dAppChain` (sub network) within the Bench Network, used for BenchShop dApp.<br>


## Is Neutron A Blockchain?
No, Neutron is not a blockchain or a multichain. Neutron creates, manages and connects blockchains across the Bench Network and blockchains outside the Bench Network. The blockchains aka decentralized networks that Neutron creates are compliant with the [BenchCore](https://github.com/benchlab/benchcore) consensus logic (DPOS), design and specification. To create a new Neutron-based decentralized network, we have created `Neutron-CLI`. You can read more about how Neutron-CLI works below.

## Neutron-CLI
Neutron also comes with a command-line client called [Neutron-CLI](https://github.com/benchlab/neutron-cli). Neutron-CLI is used to create new networks (SideChains and dappChains) on Bench Network and to retreive information about networks. A very useful tool when it comes to launching a new decentralized network that you would like to run on the Bench Network. 

### Generating A New Network With Neutron-CLI

```ssh
# neutron-cli new network --dapp --gkey "musicchain"
New neutron network was created and is stored in ~/.neutron/networks/musicchain_dawn.json
# cat ~/.neutron/networks/musicchain_dawn.json
{
  "dawn_time": "2018-05-20T07:11:22.526Z",
  "galaxy_name": "musicchain",
  "network_uuid": "e0a519f2-e0d0-43e1-9d32-b3940222db11",
  "astronauts": [
    {
      "uni_key": [
        1,
        "GASNQVDCZEXEJ2H2HT4ODFG2RTYRCRKBWFXCUJVEGYFDSAVKF3SRVBKZ"
      ],
      "fuel": 1,
      "aname": "michaelx"
    },
    {
      "uni_key": [
        1,
        "GCYP7DYFOBHW64J7WYEVHNNQ5TWKQB55T6TUJHSU2PUN7YUCYBYYTTEY"
      ],
      "fuel": 1,
      "aname": "stan"
    },
    {
      "uni_key": [
        1,
        "GBEZO4UKWYRQ6UKLBN6XJRDRC6SB7YRZ22SUHTIJNBFJWIYHUP6OTVTG"
      ],
      "fuel": 1,
      "aname": "jared"
    },
    {
      "uni_key": [
        1,
        "GDSWQAKTEE6JX4QCRCQZVQ7YMVELOZSG7OQT2LBASE53IB4MFFGDA5NQ"
      ],
      "fuel": 1,
      "aname": "nomoreheroes"
    },
    {
      "uni_key": [
        1,
        "GCGLXOLNMD767AHRQ2EVD2LKWYQNETLTPLZKAXM3PZFNCMVPZKXVEAAP"
      ],
      "fuel": 1,
      "aname": "nickeles"
    }
  ],
  "dapp_uuid": "4e5b41aa-ba8e-4845-bbdf-3c5cd93aa5af",
  "dapp_state": {
    {"designate_account": "muzbot", "muzcoin": 1000000000}
  }
}
```

# How To Launch a Neutron-based Network?
Neutron uses a software called [BenchCore](https://github.com/benchlab/benchcore), the blockchain engine utilized by Neutron, it also powers Neutron as well. Neutron simply manages the networks within the Bench ecosystem, identifies those networks through Kepler and provides tools for creating the BenchCore-powered networks that eventually end up under its management.


# What Is benOS
[benOS](https://github.com/benchlab/benos) is a decentralized operating system, originally based on Linux, uses some design strategies from [RedoxOS](https://github.com/redox-os) and even some design concepts from [OpenStack](https://github.com/openstack), [Ethereum](https://github.com/ethereum/go-ethereum) and [EOS](https://github.com/eosio). Although we utilize some of their design strategies, benOS is completely custom from a codebase perspective. 

benOS has many components that make the wheels turn. Below are a list of those components:

## Other benOS Network Components
[Nova](https://github.com/benchlab/nova) - Global Decentralized Hypervisor For The Bench Network <br>
[Kepler](https://github.com/benchlab/kepler) - Global Decentralized Identity Management For The Bench Network <br>
[Designate](https://github.com/benchlab/designate) - Global Decentralized Naming Service For The Bench Network <br>
[Flutter](https://github.com/benchlab/flutter) - Global Decentralized Image Service For The Bench Network <br>
[Neutron](https://github.com/benchlab/neutron) - Global Network Creation & Management For The Bench Network <br>
  - [BenchCore](https://github.com/benchlab/BenchCore) - Core Decentralized Network Component For The Bench Network <br>
  - [BenchChain](https://github.com/benchlab/BenchChain) - Neutron's RootChain On The Bench Network <br>

[Aero](https://github.com/benchlab/aero) - Global Object Storage Distributor & Manager For The Bench Network <br>
[Explorer](https://github.com/benchlab/explorer) - Global dApp Distributor, Manager and Viewer For The Bench Network <br>
[benFS](https://github.com/benchlab/benFS) - benOS FileSystem <br>
[dappJS](https://github.com/benchlab/dappjs) - dApp Development Kit For The Bench Network <br>
[Mercury](https://github.com/benchlab/mercury) - benOS Graphical User Interface <br>
[Asteroid](https://github.com/benchlab/go-asteroid) - benOS Native Programming Language <br>
[Meteor](https://github.com/benchlab/meteor) - benOS Native IDE for dApp Development <br>
<br><br>

## benOS Core Components
[benOS-Microkernel](https://github.com/benOS-Microkernel) - benOS Microkernel <br>
[benOS-Bootloader](https://github.com/benchlab/benOS-Bootloader) - benOS Bootloader <br>
[ParseArgs](https://github.com/benchlab/parseargs) - benOS-based Argument Parsing  <br>
[X](https://github.com/benchlab/X) - benOS Graphical User Interface <br>

**NOTE:** ***There are other pieces under development as well, as our development team grows.*** 

## CREDITS AND ATTRIBUTES
benOS may use software from other open source libraries. For a full list of software credits and acknowledgements, please visit [https://github.com/benchlab/benOS/blob/master/ATTRIBUTES.md](https://github.com/benchlab/benOS/blob/master/ATTRIBUTES.md). The original LICENSE or LICENSES for the originating software(s) and library or libraries that were used to create `Neutron` are still active, although, considering this Bench software and the softwares and/or libraries/packages it is `imported` into may be used to issue illegal securities, the BENCH LICENSE is activated for this purpose. This does not take away the credits, disable the originating LICENSE or in any way disown the original creation, creators, developers or organizations that originally developed many of the libaries used throughout Bench's large array of software libraries packaged together for the purposes of building a decentralized operating system (benOS)

## VERSION
1.0.0

## LICENSE
BENCH LICENSE<br>
For Neutron
<br><br>
Copyright (c) 2018 Bench Computer, Inc. <legal@benchx.io>
<br><br>
Permission to use, copy, modify, and distribute this blockchain-related
software or blockchain-based software for any purpose with or without 
fee is hereby granted, provided that the above copyright notice and this 
permission notice appear in all copies.

THE USAGE OF THIS BLOCKCHAIN-RELATED OR BLOCKCHAIN-BASED SOFTWARE WITH THE
PURPOSE OF CREATING ICOS OR "INITIAL COIN OFFERINGS", UNREGISTERED SECURITIES 
SPECIFICALLY IN THE UNITED STATES OR IN OTHER COUNTRIES THAT HAVE A LEGAL 
FRAMEWORK FOR SECURITIES, IS PROHIBITED. BENCH FOUNDATION, LLC RESERVES THE 
RIGHT TO TAKE LEGAL ACTION AGAINST ANY AND ALL COMPANIES OR INDIVIDUALS WHO
USE THIS BLOCKCHAIN-RELATED OR BLOCKCHAIN-BASED SOFTWARE FOR THE PURPOSE OF 
DISTRIBUTING CRYPTOCURRENCIES WHERE THOSE CRYPTOCURRENCIES AND THEIR METHOD
OF DISTRIBUTION ARE IN DIRECT VIOLATION OF UNITED STATES SECURITIES LAWS. 
IF A GOVERNMENT BODY TAKES ACTION AGAINST ANY USERS, DEVELOPERS, MARKETERS,
ORGANIZATIONS, FOUNDATIONS OR ANY PROFESSIONAL ENTITY WHO CHOOSES TO UTILIZE
THIS SOFTWARE FOR THE DISTRIBUTION OF ILLEGAL SECURITIES, BENCH COMPUTER INC.
WILL NOT BE HELD LIABLE FOR ANY ACTIONS TAKEN BY THE USERS, DEVELOPERS, MARKETERS,
ORGANIZATIONS, FOUNDATIONS OR ANY PROFESSIONAL ENTITIES WHO CHOOSE TO DO SO.

UNITED STATES SECURITIES VIOLATIONS SPECIFICALLY REFER TO ANY VIOLATIONS OF
SECTION 10(b) OF THE SECURITIES EXCHANGE ACT OF 1934 [15 U.S.C. § 78j(b)] AND
RULE 10b-5(b) PROMULGATED THEREUNDER [17 C.F.R. § 240.10b-5(b)], AND
SECTIONS 5(a), 5(c), and 17(a)(2) OF THE SECURITIES ACT OF 1933 [15 U.S.C.
§§ 77e(a), 77e(c), and 77q(a)(2)]; BY MAKING USE OF ANY MEANS OR INSTRUMENTS
OF TRANSPORTATION OR COMMUNICATION IN INTERSTATE COMMERCE OR OF THE MAILS TO
SELL THROUGH THE USE OR MEDIUM OF ANY WRITTEN CONTRACT, OFFERING DOCUMENT,
PROSPECTUS, WHITEPAPER, OR OTHERWISE, ANY SECURITY AS TO WHICH NO REGISTRATION
STATEMENT WAS IN EFFECT. OR FOR THE PURPOSE OF SALE OR DELIVERY AFTER SALE,
CARRYING OR CAUSING TO BE CARRIED THROUGH THE MAILS OR IN INTERSTATE COMMERCE,
BY MEANS OR INSTRUMENTS OF TRANSPORTATION OR COMMUNICATION IN INTERSTATE
COMMERCE OR OF THE MAILS TO OFFER TO SELL OR OFFER TO BUY THROUGH THE USE OR 
MEDIUM OF ANY WRITTEN CONTRACT, OFFERING DOCUMENT, PROSPECTUS, WHITEPAPER,
OR OTHERWISE, SECURITIES AS TO WHICH NO REGISTRATION STATEMENT HAS BEEN FILED.

OUTSIDE OF THESE LEGAL REQUIREMENTS, THIS SOFTWARE IS PROVIDED "AS IS" AND 
THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING 
ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL 
THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL 
DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, 
WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, 
ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

