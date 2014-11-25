# Unacademic API

The API for the unacademic platform. It is built on top of [piep](https://github.com/piep/piep).

## Installation

Clone this repository.

```sh
git clone https://github.com/coding-the-humanities/unacademic-backend.git
```

Navigate to the install directory and install the node dependencies.

```sh
cd unacademic-backend && npm install
```

## Setting up the development environment

There are two ways to develop locally; within a Vagrantbox, or directly on your machine with
SQLite3. It is recommended that you use the Vagrant development environment.

### Setting up Vagrant

- Ensure that [Ansible](http://docs.ansible.com/intro_installation.html#getting-ansible) is installed.
  You can test this by running `ansible --version` in the command line.

- You'll also need [Vagrant](https://www.vagrantup.com/downloads.html).
  Run `vagrant -v` in the command line to verify that you've got it.

- Run `vagrant up` to start up the virtual machine

  *NOTE: If you run into an error running `vagrant up`, you should pen Virtual Box, remove all VMs and associated files, and then run `sudo "/Library/Application Support/VirtualBox/LaunchDaemons/VirtualBoxStartup.sh" restart` to restart Virtual Box.*

- Lastly, run `sudo npm run configure-hosts-vm`

That's all!

To test that it's working, navigate to `cth.loc/api/0/paths` in the browser. It should return a JSON response.

### Setting up local SQLite3

- Run `sudo npm run configure-hosts-local`

- Start the app via `npm index.js`

Confirm that it's working by pointing your browser to `cth.loc:8080/api/0/paths`. If you get a JSON response, then all is well!
