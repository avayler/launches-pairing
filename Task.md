## TOTD pairing session

We are a small group of FE engineers and so value communication and collaboration highly.

In this pairing session we could like you to fetch launch data from the spacex data api and display the results on the screen.

Please use https://api.spacexdata.com/v3/launches for the url to fetch the data and style the components as you wish.

The data that we would like you to display are:

- mission_name
- launch_date
- core_serial from the cores array in first_stage
- payload_id and payload_type from paylods array in second_stage
- display the image from mission_patch in links
- use launch_success and launch_failure_details to show the user the success/failure of launch and reason of failure.

Also, please consider that these properties may not be returned for all objects in the API.
