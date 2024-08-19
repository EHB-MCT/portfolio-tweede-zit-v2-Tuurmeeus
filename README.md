# Portfolio

## Table of Contents

- [About the Project](abouttheproject)
- [Getting Started](gettingstarted)
  - [Installation](installation)
  - [Usage](usage)
- [References](references)
- [Contributing](contributing)
- [License](license)

## About the project
This work was the final project in a series of five development courses. It's the culmination of three years worth of development skills. The API in question is meant for a closed forum that can be used by EhB personell and students. The students can post questions themselves or answer their colleague's dreaded questions. It aims to promote community and teamwork within the school.

## Getting Started
First of all you'll need to clone this repository to your local device.

```bash
$  git clone https://github.com/EHB-MCT/portfolio-tweede-zit-v2-Tuurmeeus.git
```

### Installation
Once the repository is cloned you'll need to open up a terminal to install the internally used packages.
```bash
$  npm install
```
The api is fully runneable on docker:
```bash
$  docker-compose up --build
```

### Usage
The APi works on the principle that you first make a user account. This user account has all the info you would inspect within it's object apart from a role that defines if you are a student or teacher. Teachers having the power to moderate and highlight correct answers. Once you have an account you can create a thread. This thread can be filled with the question you are dying to know the answer to. From here on out other people can comment on your thread to help you find and answer. Once the question is answered you can mark the thread as resolved so other people know that a correct answer can be found. This answer can be highlighted to be permanently displayed right underneath the question. 


## References

See [`REFERENCES.md`](REFERENCES.md)

## Contributing

See [`CONTRIBUTING`](CONTRIBUTING.md)

## License

This project is released under the [MIT](https://opensource.org/license/mit/) License (see [`LICENSE.txt`](LICENSE.txt)).