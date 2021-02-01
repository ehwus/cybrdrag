<p  align="center">
<img src="./screenshots/LogoBlack.png" alt="Logo"></img>
<br />

<img  alt="Version"  src="https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge&cacheSeconds=2592000"  />

<a  href="https://github.com/ehwus/cybrdrag#readme"  target="_blank">

<img  alt="Documentation"  src="https://img.shields.io/badge/documentation-yes-brightgreen.svg?style=for-the-badge"  />

</a>

<a  href="https://github.com/ehwus/cybrdrag/graphs/commit-activity"  target="_blank">

<img  alt="Maintenance"  src="https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge"  />

</a>

<a  href="https://github.com/ehwus/cybrdrag/graphs/commit-activity">

<img  alt="GitHub commit activity"  src="https://img.shields.io/github/commit-activity/y/ehwus/cybrdrag?style=for-the-badge">

</a>

<a  href="https://github.com/ehwus/cybrdrag/commits/main">

<img  alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/ehwus/cybrdrag?style=for-the-badge">

</a>

<a  href="https://github.com/ehwus/cybrdrag/graphs/contributors">

<img  alt="Collaborators"  src="https://img.shields.io/github/contributors/ehwus/cybrdrag?style=for-the-badge"  />

</a>

<a  href="https://www.npmjs.com/">

<img  alt="npm"  src="https://img.shields.io/npm/v/npm?style=for-the-badge">

</a>

</p>

Set in a dystopian cyberpunk future, CYBRDRAG is a browser based fantasy sports style web game. Users invest in the careers of drag performers who are forced to stream every hour by a tech megacorp.

Users can invest in randomly generated performers to build a portfolio of shares. The value of performers go up and down over time, according to random events that happen during performances. We want to create the possibility for a shared experience, much like fantasy football, but with a cyberpunk inspired drag theming.

We built the game using a MERN stack - MongoDB for the database, Express for the routing, React for the front end, and Node to handle the business logic. This gave us a separate front end client for designing the user interface, and an independent server for the business logic. Seperating into teams with distinctive responsibilities was much easier because of this. Having JavaScript as our sole programming language was also very helpful, especially as this was a new stack for us.

We use Redux to manage state, and Axios to pull from our Node API to React.

## Installation

Requirements: NodeJS, MongoDB, Nodemon.

```sh
~ git clone https://github.com/ehwus/cybrdrag
~ cd ./cybrdrag/client
~ npm install
~ cd ..
~ npm install
```

## Usage

```sh

npm run server  # run the Node server
npm run client  # run the React client
npm run dev     # run both in parallel using concurrently
```

## Testing

We used Jest for tests on both the front and back end. We have high back end test coverage of 96.94% over 45 tests, but need to work on our front end coverage.

```sh

npm test

```

## Blog

We kept a record of our progress through the final project [HERE](https://github.com/ehwus/cybrdrag/blob/master/BLOG.md).

## Design Process

We catalogued the visual design process [HERE](https://github.com/ehwus/cybrdrag/blob/master/PROCESS.md).

We have a miro board for planning events and performer characteristics [HERE](https://miro.com/app/board/o9J_lXvngBA=/).

## Authors

[![](https://github.com/alexleesonmill.png?size=50)](https://github.com/alexleesonmill) - Alex Leeson-Mill<br>

[![](https://github.com/ehwus.png?size=50)](https://github.com/ehwus) - Alex Withington-Smith<br>

[![](https://github.com/mykenuleng.png?size=50)](https://github.com/mykenuleng) - Michael Linford<br>

[![](https://github.com/rafael-oelmann.png?size=50)](https://github.com/rafael-oelmann) - Rafael Perez<br>

## 🤝 Contributors

[![GitHub contributors](https://img.shields.io/github/contributors/ehwus/cybrdrag.svg)](https://GitHub.com/ehwus/cybrdrag/graphs/contributors/)

## 📝 License

This project is [MIT](https://github.com/ehwus/cybrdrag/blob/master/LICENSE) licensed.
