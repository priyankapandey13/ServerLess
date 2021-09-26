// Import required AWS SDK clients and commands for Node.js
import { ListMetricsCommand } from "@aws-sdk/client-cloudwatch";
import { cwClient } from "./libs/cloudWatchClient.js";

// Set the parameters
export const params = {
  Dimensions: [
    {
      Name: "LogGroupName" /* required */,
    },
  ],
  MetricName: "IncomingLogEvents",
  Namespace: "AWS/Logs",
};

export const run = async () => {
  try {
    const data = await cwClient.send(new ListMetricsCommand(params));
    console.log("Success. Metrics:", JSON.stringify(data.Metrics));
    return data;
  } catch (err) {
    console.log("Error", err);
  }
};
// Uncomment this line to run execution within this file.
run();