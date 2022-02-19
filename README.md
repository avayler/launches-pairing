## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Task to be completed

We would like you to clone this repository and amend the home page to display a list of Cards with the launch data retrieved from the spacex data api. You should not spend more than 1 hour to complete your solution. After this time it would be beneficial to create a TODO list of the changes that you would like to have done.

The restful api that we would like you to use is https://api.spacexdata.com/v3/launches

Your solution should cover the following tasks:

- Make api request on page load
- Store response json into component state
- Display data top 10 items

The data that we would like you to display are:

- mission_name
- launch_date_utc
- from rocket object
  - list core_serial from the cores array in first_stage
  - payload_id and payload_type from payloads array in second_stage
- display the image from mission_patch_small in links
- use launch_success and launch_failure_details to show the user the success/failure of launch and reason of failure.

Note
flight_number as a unique property for each launch object.

## To Do

- Better stylings of cards
- Paging - to show more data
- Filter - to view success of failed
