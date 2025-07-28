# Adobe Edge Delivery Services (EDS) Demo
## Overview:
For this month’s townhall, we’re showcasing a live demo of Adobe Edge Delivery Services (EDS) to highlight its capabilities and potential impact across our digital experience initiatives. This project serves as a proof-of-concept (POC) to demonstrate how EDS can enable faster, more scalable, and cost-effective web experiences through Git-based workflows and edge-optimized content delivery.

## Purpose:
To educate teams on the key differences between traditional AEM Sites and EDS, and to illustrate how EDS can streamline site creation, accelerate load times, and support modern, decoupled web architectures.

## Key Features Demonstrated:
GitHub-driven authoring and publishing workflow
Ultra-fast page loads powered by edge caching
Universal Editor and block-based page construction
Integration with Universal Editor for author-friendly content updates
Lightweight deployment without traditional AEM stacks

## Business Value:
This demo helps stakeholders understand how EDS can be leveraged for campaign sites, microsites, and localized content initiatives with minimal infrastructure overhead and significantly reduced time to market.

## What’s Next:
Based on the feedback from this demo, we’ll evaluate opportunities for broader adoption across targeted site types and establish a framework for scaling EDS projects in alignment with our digital roadmap.

## Environments
- Preview: https://main--july-townhall--eysean.aem.page/
- Live: https://main--july-townhall--eysean.aem.live/

## Documentation

Before using the aem-boilerplate, we recommand you to go through the documentation on [www.aem.live](https://www.aem.live/docs/) and [experienceleague.adobe.com](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/authoring), more specifically:
1. [Getting Started](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/edge-dev-getting-started), [Creating Blocks](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/create-block), [Content Modelling](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/content-modeling)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

Furthremore, we encourage you to watch the recordings of any of our previous presentations or sessions:
- [Getting started with AEM Authoring and Edge Delivery Services](https://experienceleague.adobe.com/en/docs/events/experience-manager-gems-recordings/gems2024/aem-authoring-and-edge-delivery)

## Prerequisites

- nodejs 18.3.x or newer
- AEM Cloud Service release 2024.8 or newer (>= `17465`)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)
