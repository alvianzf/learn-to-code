# `GIT` learned

In order to be a web developer nowadays, one should be familliar with `git`, see [here](https://git-scm.com/) for information

#### Windows

you can install git using these steps:

1. Download the git tool by downloading it from [here](https://git-scm.com/download/win).
2. Inside your project folder, right click on an empty space and click `open git bash here`.

#### Ubuntu

By using ubuntu, you can setup your git using:

1. Open the terminal, this can be done easily using `ctrl` + `shift` + `T`
2. Update your system using `sudo apt-get update`, type your password if prompted
3. Install git using `sudo apt-get install git-core`

#### MacOS

no need, it is pre-installed

## To use git

#### Clone
To use git, first clone this project using the command `git clone https://github.com/alvianzf/learn-to-code.git`

#### Checkout
You are currently in the `master` branch. Which is the main branch of the project. It is a good idea to `branch` your changes, so that it can be reviewed of any `bugs` before committing it (or `merge`) it into the main branch. Do this by typing `git checkout -b (your branch name)`. Notice the `-b` means that you are creating a new branch.

If you already have a branch, or want to view another person's branch, do this by typing `git checkout (name of branch)`. This branch will be the default branch you are working in

#### Pull
Pulling is a term used to download all the codes on a branch. You 'pull' codes from the branch to your current directory so that you can work on it offline on your computer. Do this by typing `git pull`.

To pull from other branches, you can do it using the command `git pull origin (branch name)`, or simply `git pull (branch name)`

#### Add
After you cloned the repo, create a new branch, pull recent changes it, and code inside your project. When done, you should add the changed you've done to the project. Do this using the command `git add (your file's name)`. If you want to add all your changes use `.` to add all: `git add .`

#### Commit
Commit your changes to queue it before uploading (or `push`) to the repo. Do this by typing `git commit -m "(your commit message)"`, your commit message must be compact and represents what are you doing to the code or the changes that you've done. It is so that other developers may know what are the recent changes that's happening to the project.

#### Push
After committing your code, you want to upload it back onto the github repo. Do this by using the command `git push`. Remember to check on which branch you are on before pushing the code.

#### Config
Sometimes, the system would like to ask you who you are before pushing the code, you can do this by using the commands:

> `git config --global user.name "(your git account username)"`

and

> `git config --glocal user.email "(your git account email)"`