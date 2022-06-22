#!/usr/bin/env node

const { execSync, exec } = require("child_process");
const path = require("path");
const fs = require("fs");

if (process.argv.length < 3) {
  console.log("Please give a name to your app.");
  console.log("For example :");
  console.log("    npx @medromo/react-app my-app");
  process.exit(1);
}

const projectName = process.argv[2];
const currentPath = process.cwd();
const projectPath = path.join(currentPath, projectName);
const git_repo = "git@github.com:medromo/react-boilerplate.git";

try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === "EEXIST") {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`
    );
  } else {
    console.log(error);
  }
  process.exit(1);
}

async function main() {
  try {
    console.log("Downloading files...");
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    process.chdir(projectPath);

    console.log("Installing dependencies...");
    execSync("npm install");

    console.log("Removing useless files");
    fs.rm(path.join(projectPath, ".git"), { recursive: true }, err => {
      if (err) throw err;
    });
    fs.rm(path.join(projectPath, "bin"), { recursive: true }, err => {
      if (err) throw err;
    });
    fs.rm(
      path.join(projectPath, "src/components/molecules/.gitkeep"),
      { recursive: false },
      err => {
        if (err) throw err;
      }
    );
    fs.rm(
      path.join(projectPath, "src/components/organisms/.gitkeep"),
      { recursive: false },
      err => {
        if (err) throw err;
      }
    );
    fs.writeFile(path.join(projectPath, ".env"), "", err => {
      if (err) throw err;
    });
    exec("git init && git add . && git commit -m 'Initial commit'");
    console.log("The installation is done, this is ready to use !");
  } catch (error) {
    console.log(error);
  }
}
main();
