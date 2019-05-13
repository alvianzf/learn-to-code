# Vue JS
#### A brief tutorial

VueJs is a progressive JavaScript framework mainly to code the view part of MVC. It is used for building user interfaces and single page applications.

VueJS uses an-HTML based syntax that allows binding the rendered DOM to the underlying Vue instance data.

Vue components extend basic HTML elements to encapsulate reusable code. At a high level, components are custom elements to which the Vue’s compiler attaches behavior. In Vue, a component is essentially a Vue instance with pre-defined options.

By far, Vue Js is the easiest JavaScript framework to learn and work with.

---

### Instalation

First, we must ensure that our device can run nodeJs environment. If you are using Windows, please install Windows Linux Sub-system first.

To know whether node is installed, run this on the terminal:

>`node -v`

it will return the current node version running on the machine. If node is not installed try installing it using:

#### Ubuntu

1. Add NodeJS PPA

install curl
> `sudo apt install curl`

then the PPA (latest)
> `curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -`

or the LTS PPA
> `curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -`

2. Install NodeJs

> `sudo apt-get install nodejs`

#### MacOS

> `No need, already pre-installed. LOL`

---

### Vue CLI
It is easier to use `vue-cli` to build a vue application.

> `npm i @vue/cli`