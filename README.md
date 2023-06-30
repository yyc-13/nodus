# Nodus: Decentralized Content Sharing and Monetization Platform

Nodus is an evolving platform that empowers creators to share and monetize a variety of digital content forms, including videos, PDFs, and audio files. With Nodus, creators can set a one-time payment price, establish a subscription plan, or accept donations from their audience. The platform offers features such as commenting, content collections, and home page customization.

A standout feature of Nodus is its use of smart contracts for secure and transparent transactions. Payments are processed transparently, with a low processing fee of 2.5%. This approach allows creators to keep 97.5% of their sales revenue. The platform is currently developed under the Arbitrum Goerli testnet. Visit the [Nodus Contracts](https://github.com/yyc-13/nodus_contracts) repository to learn more about the smart contracts I use.

## Features

- **Content Sharing**: Upload and share various types of content, including videos, PDFs, and audio files.
- **Content Monetization**: Monetize content through one-time payments, subscription plans, or user donations.
- **Interactive Platform**: Engage with the content through commenting, adding content to collections, and customizing home pages.
- **Low Processing Fee**: Retain more earnings with a minimal 2.5% processing fee, leaving creators with 97.5% of their sales revenue.

## Technologies

- **Next.js and TypeScript**: Used for building a scalable React application.
- **Next-Auth**: Employed for secure user authentication.
- **Tailwind CSS**: Utilized for building a responsive and modern user interface.
- **Supabase and Prisma**: Handle database management and operations.
- **Ethers.js**: Facilitates interactions with the Ethereum blockchain and smart contracts.
- **Other Libraries**: Libraries such as React Hook Form, Formidable, Yup, and Storybook are incorporated to enhance functionality.

## Getting Started

Follow the steps below to run Nodus locally:

1. **Clone the repository**

2. **Install the dependencies**

3. **Start the development server**

## Setup

1. Clone the repository.

   ```
   git clone https://github.com/yyc-13/nodus
   ```

2. Install the dependencies.

   ```
   yarn
   ```

3. Create a `.env` file in the root of your project based on .env.example:

   Use .env.example as a reference to create a .env file in the root of your project.

4. Start the development server

   ```
   yarn dev
   ```

## Future Work

- **Content Renderer Enhancement**: The current content renderer uses native content tags like <img>, pdf.js, and <audio>. There's significant potential for refinement here.

- **Integration with Algolia**: Plans are underway to integrate with Algolia to offer advanced content search features, such as full-text search, multi-factor search, and personalized recommendations.

> _Note: This project is still in progress, and more features will be added over time._
