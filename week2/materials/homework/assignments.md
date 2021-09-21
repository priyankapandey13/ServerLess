## Mandatory assignments

**Assignment 4:**

Sync your changes to s3 and write down your s3 bucket url.

bucket url: `s3://priyankas-good-greens/`

**Assignment 5:**

Right now, the website does not support https. Explain which other AWS service needs to be integrated in order to achieve this.

service name: `CloudFront `

**Assignment 6:**

Figure out and write down the price per month of storing 51TB on S3.

Price: 
`$0.023/GB for first 50TB = 1.15 for 50GB`
`$0.022/GB for next 450TB = 0.022 for 1GB` 
`$1.172*1000 = Total 1172$  for 51TB`

Total size of website: `less then 51TB`

**Assignment 7:**

Write down the main cost factors for S3

brief description: `Storage Region : The region where you store your data. there are 21 different regions where it’s possible to store data. Prices are different for each storage region. `
    `Storage : The volume of data you store. The more data you store in the Standard storage tier, the less you pay per GB. `
    `Redundancy : The level of redundancy. Data stored in the AWS S3 storage service is highly durable, but to prevent any potential loss of data, Amazon replicates data stored in the Standard storage tier, the Standard Infrequent Access storage tier, and the Archive storage tier across a minimum of three Availability Zones (AZs).`
    `Storage class : The AWS S3 service allows businesses to store data in different storage classes (also known as tiers) depending on how frequently data will be accessed, how long you need to store the data, and the redundancy and availability required. Frequently accessed data should be placed in the Standard S3 tier `
    `Data requests : How you access your data also impacts your costs. S3 costs depend on the request type (e.g. PUT, COPY, GET, etc.), the number of requests, and the volume of data retrieved. Data transfers : Data transfer costs are incurred when data is transferred out from an S3 storage bucket to the internet or another region  data transfer into S3 is free). Like the volume discounts for AWS simple storage, the more data you transfer out, the lower the rate you pay per GB.`
    `Data retrievals : Retrieving data from a Standard S3 storage volume is free of charge. However, if you place data in an Infrequent or Glacier storage class, charges apply when you retrieve it (and for requesting it, as outlined above). Pricing for data retrieval is based on the volume of data retrieved, but can vary depending on whether an expedited retrieval or bulk retrieval from an archive storage tier is required.`

**Assignment 8:**

The file `week2/assignments/products.json` needs to be uploaded Inside the bucket `hyf-serverless-course-week-2`. Upload the file through the CLI and write down the command needed.

docs: `aws s3 cp D:\ServerLess\week2\materials\homework\products.json s3://hyf-serverless-course-week-2/`

**Assignment 9:**
Write down a brief use case on when S3 could be used for a data engineering assignment: 

use case: `I am taking an example of an online marketplace where many people sell/buy items. In this data engineering assignment there are few operations which can benefit from AWS s3. Below are the points how s3 can be used for better performance`
`1) Acquire datasets and transform data into useful, actionable information`
`3) Build, test, and maintain database pipeline architectures.`
`6) Ensure compliance with data governance and security policies : `


S3 provides storage with security and to make sure it creates multiple backup on different servers for safekeeping. It also provides data redundancy so if one server is down data can be accessed from another. With s3 read/write authority is provide to ensures security. Sharing data between different stakeholders can be easily done by temporary hosting. Because data is coming from the same region(same as server) it provides data redundancy with low latency rate so huge datasets can be easily accessible uninterrupted. The Continuous integration and deployment is convenient.



## Optional assignments: 

**Assignment 10:**

What can be done to reduce the pricing for S3 when hosting a large number of files?

brief description:
    `1) Clean up incomplete multipart uploads.`
    `2) Delete previous versions of objects that you don't need.`
    `3) Review your storage-class transition costs.`
    `4) Review your data retrieval costs.`
    `5) Track the requests made to your bucket.`
    `6) Check for changes in the size of your bucket.`
    `7) Review the cost of individual buckets.`
    `8) Understand how your usage relates to your charges.`

**Assignment 11:**

There are many security features built into S3. Find your favourite feature, documentation for it, and explain briefly why.

brief description of favourite security feature: `I find <strong>Amazon Macie<strong> to be my favourite feature. What i like most that it is automatic and runs continuously to search anomalies. It  discovers and protects sensitive data at scale. It automatically scans and provides the full inventory of S3 buckets which includes actionable security findings enumerating any data that fits these sensitive data types, including PII (e.g. customer names and credit cards numbers), and categories defined by privacy regulations, such as GDPR and HIPAA. It automatically and continually evaluates bucket-level preventative controls for any buckets that are unencrypted, publicly accessible, or shared with accounts outside of your organization, allowing you to quickly address unintended settings on buckets.` 
