# Binder - API Documentation

Binder is a planned web app for creating API documentation. Inspired by [swagger](https://swagger.io/) and [Document360](https://document360.com/) (without the AI part).

## Background
During the development of [RemoteHost](https://github.com/BlastyTheDev/Remotehost/), I wanted to document its API. I thought I could make something to document the API, so I decided I would make a web app to do so. I plan to design it using [Figma](https://figma.com/) and write the web app using [NextJS](https://nextjs.org/) so I have an opportunity to learn React elements and [tailwindcss](https://tailwindcss.com/).

## Planned Features
- Documentation using markdown for formatting
- Markdown documentation stored as .md files in working directory on host machine
- Navigation through API endpoints with a side navbar with support for groups (folders)
- HTTP Methods represented with colours, eg. blue for GET, green for POST
- Dedicated section to display request parameters and body objects
- Dedicated section to display response body objects
- Dedicated section to display possible status codes and a description for each
- Edit mode with markdown preview, probably with password authentication as anenvironment variable
