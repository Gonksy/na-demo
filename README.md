# NA User Finder

A small backend service that retrieves users from a JSON file. Accessible through a simple dashboard or through an API endpoint (/users). Allows user to search, filter, and sort the data.

## Table of Contents

- [Live demo](#live-demo)
- [Installation](#installation)
- [API Endpoints](#api-endpoint-usage)
- [Example](#example)
- [Postman tests](#postman-tests)
- [Eror handling](#error-handling)
- [Optimizations](#optimizations)
- [Dependencies used](#dependencies-used)

## Live demo

Find live demo of this service here:

### ***https://na-demo.onrender.com/***

## Installation

1. Clone this repo to your local machine

```sh
    git clone https://github.com/Gonksy/na-demo
```

2. Navigate to the project directory

```sh
    cd na-demo
```

3. Install dependencies

```sh
    npm install
```

4. Run the start command

```sh
    npm run start
```

5. Navigate to http://localhost:3000 in your browser to view the application.

## API Endpoint Usage

### GET /users

Retrieve a list of users based on specified criteria.

#### Parameters

- `minAge` (optional): Minimum age of users to include in the results. (0-200)
- `maxAge` (optional): Maximum age of users to include in the results. (0-200)
- `active` (optional): Filter users by active status (`true`, `false`, or leave blank for all).
- `searchTerm` (optional): Search for users by name (case-insensitive).
- `sort` (optional): Sort users by last login date (`on` to enable sorting, leave blank to disable).

## Example

Retrieve users aged 28-40, who have 'Jo' in their name, who are active, sorted by last login date:

```http
    GET /users?searchTerm=Jo&minAge=28&maxAge=40&active=true&sort=on
```

Response:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "age": 28,
    "active": true,
    "last_login": "2024-02-28"
  },
  {
    "id": 5,
    "name": "Alice Johnson",
    "age": 31,
    "active": true,
    "last_login": "2024-03-05"
  }
]
```

## Postman tests

Try the live service's API endpoint here:

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/20493201-cc923d32-25e0-46ca-b52b-7acaace5a3aa?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D20493201-cc923d32-25e0-46ca-b52b-7acaace5a3aa%26entityType%3Dcollection%26workspaceId%3D8031f576-d733-4a9a-820f-0f63d819bce2)

## Error handling

Invalid parameter names or values will return an appropriate error message

```json
"error: 'minAge', 'maxAge' must be numbers between 0-200"
```

## Optimizations

- **Pagination**: Implement pagination to improve performance when dealing with large datasets.

- **Rate Limits**: Implement rate limiting to prevent abuse and ensure fair usage of the API.

- **Bloom Filter for Name Search**: Use a Bloom filter for efficient name searches, reducing the number of database queries.

- **Basic AJAX for Reactivity**: Alternatively, implement basic AJAX functionality to make the dashboard reactive without migrating to Next.js.

- **Refactoring getData Service**: As the project grows, consider breaking down the getData service into smaller, more manageable functions.

- **Ascending/Descending Sorting**: Add support for both ascending and descending sorting options.

- **Additional Sorting Criteria**: Include more sorting criteria such as age and name.

- **Using Nest for Routing & Validation**: Consider using Nest.js for easier routing and automatic validation of requests.

- **Cleaner URL Generation**: Improve the URL generation for searching/filtering in the dashboard to exclude empty parameters, enhancing readability and efficiency.

## Dependencies used

#### Dependencies:

- **ejs**: Embedded JavaScript templates for rendering views.
- **express**: Web framework for Node.js.
- **morgan**: HTTP request logger middleware for Node.js.

#### Dev Dependencies:

- **daisyui**: My go-to css/tailwind library for quickly building good looking pages.
- **nodemon**: Monitoring changes in dev environment.
- **prettier**: Opinionated code formatter to ensure a consistent code style.
- **tailwindcss**: My CSS framework of choice for rapidly building custom designs.
