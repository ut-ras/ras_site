# UT IEEE Robotics and Automation Society Website

This is the website for the UT Austin IEEE Robotics and Automation Society. You can view the site at [ras.ece.utexas.edu](ras.ece.utexas.edu).

This site was built using the ReactJS framework using the Vite frontend tool for development.

# Prerequisites:
Make sure you have the `npm` package manager installed on your machine. It can usually be installed by your operating system's package manager.

# Installation:
Run the following commands in your terminal:
`
git clone git@github.com:DhruvNistala/ras_site.git
cd ras_site
npm install
`
This will load the repository and install all of the required Node packages.

# Running a local server:
Run `npm run dev` in your terminal and navigate to `http://localhost:5173/` in your browser to activate the live server.

# Building your files for deployment:
Run `npm run build`. This will build your website into a static site which is available in the `dist` folder.

Modify `index.html` accordingly. After this, you can upload these files the remote server (in this case, it is an Apache server).

Note: the process for deployment is still a work in progress.