# Favourite beverages
Favourite beverages is a web app that displays favourite beverages and allows addition of new favourite beverages. This is a programming challenge during my interview process to [Alma Media](https://www.almamedia.fi/). There was a time limit of using at maximum 6 hours to develop this, so some polish is missing.


## Tech stack
Frontend: React + TS, [Zod](https://zod.dev/) used for validating data

Backend: Kotlin + Spring boot, [Gson](https://github.com/google/gson) used for reading and writing json data

"Database": Is just a .json file in the backend

During my first interview we briefly talked about Kotlin which is widely used at Alma. Prior to this I had never used Kotlin before. However I wanted to try it out and since this programming challenge was very simple I decided to implement my backend using it. In my opinion the end result was a success.

## Installation(Tested on Ubuntu)

Make sure you have [Node](https://nodejs.org/en/) and [Kotlin](https://kotlinlang.org/) with it's dependencies installed. OpenJDK 17.0.5 is the java version being used. Also [Gradle](https://gradle.org/) is required.

1. After cloning the repo and being in it's root folder, execute `sh scripts/run_project.sh`  Assuming the script is successful, frontend is accessible in http://localhost:5173 and backend in http://localhost:8080/api/beverages.

_IF_ the script does not work, you just need to execute `npm install` and `npm run dev` in the frontend folder. In the backend you need to run `./gradlew build` and `./gradlew bootRun`

## Improvements

- Due to the time constraint, there are no tests implemented yet. This project is just a CR app so there really aren't any functionalities to test. E2E tests would have been my way to go if I would have had time for tests.

- Backend does some validation, but it is not as strict as the validation in frontend. For example negative values are allowed in the backend.