<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/GuyBerko/xtickets">
    <img src="https://storage.googleapis.com/xtickets/assets/logo-black.png" alt="Logo">
  </a>

  <p align="center">
    XTicket it's an application designated for buying and selling tickets.<br />
    The application was built in a microservices design pattern.<br />
    The backend was written with Node.js and typescript and the client was written with React server side rendering.
    <br />
    <br />
    <a href="http://xtickets.guy-berkovich.com">View Demo</a>
    ·
    <a href="https://github.com/GuyBerko/xtickets/issues">Report Bug</a>
    ·
    <a href="https://github.com/GuyBerko/xtickets/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-structure">Project Structure</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img src="https://storage.googleapis.com/portfolio-309012/xtickets-desktop2.PNG" alt="project screen shot" />

<!-- PROJECT STRUCTURE -->

## Project Structure

<ul>
  <li>xt-client - React + Next.js application for ssr client</li>
  <li>xt-common - Npm library for common code implantation</li>
  <li>
    <span>Infrastructure</span>
    <ul>
      <li>.github - CI/CD workflow configuration</li>
      <li>xt-infra - Kubernetes infrastructure configuration</li>
    </ul>
  </li>
  <li>
    <span>Services</span>
    <ul>
      <li>xt-auth - Node.js + express application for users authentication</li>
      <li>xt-expiration - Node.js application for orders expiration job scheduler</li>
      <li>xt-orders - Node.js + express application for managing ticket orders</li>
      <li>xt-payments - Node.js + express application for payment processing</li>
      <li>xt-messeging - Node.js application for sending messages to the users (currently emails only)</li>
      <li>xt-tickets - Node.js + express application for managing tickets</li>
    </ul>
  </li>
</ul>

### Built With

- [Nats streaming server](https://github.com/nats-io/nats-streaming-server) - for the event bus implementation.
- [Bull.js](https://github.com/OptimalBits/bull) - for job scheduler and event queue.
- [Google Cloud Storage](https://www.npmjs.com/package/@google-cloud/storage) - for images bucket.
- [Next.js](https://nextjs.org/) - for server side rendering client.
- [Stripe](https://stripe.com/) - for payments and credit card processing.
- [Mongodb](https://www.mongodb.com/) - for services database.
- [Redis](https://redis.io/) - for services databse.
- [Reactstrap](https://reactstrap.github.io/) - for react bootstrap implementation.
- [Sendgrid](https://sendgrid.com/) - for email server.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/GuyBerko/xtickets/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Guy Berkovich - <a href="mailto:mailofguy@gmail.com">Email</a> - [LinkedIn](https://www.linkedin.com/in/guy-berkovich-8a4892123/)

Project Link: [Xtickets](https://github.com/GuyBerko/xtickets)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/GuyBerko/xtickets.svg?style=for-the-badge
[contributors-url]: https://github.com/GuyBerko/xtickets/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GuyBerko/xtickets.svg?style=for-the-badge
[forks-url]: https://github.com/GuyBerko/xtickets/network/members
[stars-shield]: https://img.shields.io/github/stars/GuyBerko/xtickets.svg?style=for-the-badge
[stars-url]: https://github.com/GuyBerko/xtickets/stargazers
[issues-shield]: https://img.shields.io/github/issues/GuyBerko/xtickets.svg?style=for-the-badge
[issues-url]: https://github.com/GuyBerko/xtickets/issues
[license-shield]: https://img.shields.io/github/license/GuyBerko/xtickets.svg?style=for-the-badge
[license-url]: https://github.com/GuyBerko/xtickets/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/guy-berkovich-8a4892123/
