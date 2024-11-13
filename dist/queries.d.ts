/** Authenticated User's Login */
export declare const AUTHENTICATED_USER = "\n  query {\n    viewer {\n      login\n    }\n  }\n";
/** Total Contribution Count */
export declare const TOTAL_CONTRIBUTION_COUNT = "\n  query ($username: String!, $startDate: DateTime!) {\n    user(login: $username) {\n      contributionsCollection(from: $startDate) {\n        totalCommitContributions\n        totalIssueContributions\n        totalPullRequestContributions\n        totalPullRequestReviewContributions\n\n        totalRepositoriesWithContributedCommits\n        totalRepositoriesWithContributedIssues\n        totalRepositoriesWithContributedPullRequests\n        totalRepositoriesWithContributedPullRequestReviews\n\n        totalRepositoryContributions\n      }\n    }\n  }\n";
/** Issue Contributions (Grouped by Repository) */
export declare const ISSUE_CONTRIBUTIONS_BY_REPOSITORY = "\n  query ($username: String!, $startDate: DateTime!, $endCursor: String) {\n    user(login: $username) {\n      contributionsCollection(from: $startDate) {\n        issueContributionsByRepository(maxRepositories: 50) {\n          contributions(first: 50, after: $endCursor) {\n            nodes {\n              issue {\n                assignees(first: 50) {\n                  nodes {\n                    login\n                  }\n                }\n                body\n                comments(first: 50, orderBy: {field: UPDATED_AT, direction: ASC}) {\n                  nodes {\n                    author {\n                      login\n                    }\n                    body\n                    createdAt\n                  }\n                }\n                createdAt\n                number\n                state\n                title\n                url\n                viewerDidAuthor\n              }\n            }  \n            pageInfo {\n              endCursor\n              hasNextPage\n            }\n            totalCount\n          }  \n          repository {\n            nameWithOwner\n            url\n          }\n        }\n      }\n    }\n  }\n";
/** Pull Request Contributions (Grouped by Repository) */
export declare const PULL_REQUEST_CONTRIBUTIONS_BY_REPOSITORY = "\n  query ($username: String!, $startDate: DateTime!, $endCursor: String) {\n    user(login: $username) {\n      contributionsCollection(from: $startDate) {\n        pullRequestContributionsByRepository(maxRepositories: 50) {\n          contributions(first: 50, after: $endCursor) {\n            nodes {\n              pullRequest {\n                assignees(first: 10) {\n                  nodes {\n                    login\n                  }\n                }\n                body\n                changedFiles\n                closed\n                comments(first: 50, orderBy: {field: UPDATED_AT, direction: ASC}) {\n                  nodes {\n                    author {\n                      login\n                    }\n                    body\n                    createdAt\n                  }\n                }\n                createdAt\n                editor {\n                  login\n                }\n                isDraft\n                merged\n                number\n                reviewDecision\n                state\n                title\n                url\n                viewerDidAuthor\n                viewerLatestReview {\n                  state\n                }\n                viewerLatestReviewRequest {\n                  id\n                }\n              }\n            }\n            pageInfo {\n              endCursor\n              hasNextPage\n            }\n            totalCount\n          }\n          repository {\n            nameWithOwner\n            url\n          }\n        }\n      }\n    }\n  }\n";
export declare const PULL_REQUEST_REVIEW_CONTRIBUTIONS_BY_REPOSITORY = "\n  query ($username: String!, $startDate: DateTime!, $endCursor: String) {\n    user(login: $username) {\n      contributionsCollection(from: $startDate) {\n        pullRequestReviewContributionsByRepository(maxRepositories: 50) {\n          contributions(first: 50, after: $endCursor) {\n            nodes {\n              pullRequest {\n                author {\n                  login\n                }\n                body\n                closed\n                createdAt\n                merged\n                number\n                state\n                title\n                url\n                viewerDidAuthor\n                viewerLatestReview {\n                  state\n                }\n                viewerLatestReviewRequest {\n                  id\n                }\n              }\n              pullRequestReview {\n                body\n                createdAt\n                state\n              }\n            }\n            pageInfo {\n              endCursor\n              hasNextPage\n            }\n            totalCount\n          }\n          repository {\n            nameWithOwner\n            url\n          }\n        }\n      }\n    }\n  }\n";
/** Get a User's Contributions */
export declare const CONTRIBUTIONS = "\n  query ($username: String!, $startDate: DateTime!) {\n    user(login: $username) {\n      contributionsCollection(from: $startDate) {\n        pullRequestReviewContributionsByRepository {\n          repository {\n            nameWithOwner\n            url\n          }\n          contributions(first: 100) {\n            totalCount\n            nodes {\n              pullRequest {\n                title\n                url\n                createdAt\n                state\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n";
/** Gets the Global Node ID of a Project */
export declare const ORG_PROJECT_NODE_ID = "\n  query ($organization: String!, $projectNumber: Int!) {\n    organization(login: $organization) {\n      projectV2(number: $projectNumber) {\n        id\n      }\n    }\n  }\n";
/** Gets the User Project Node ID */
export declare const USER_PROJECT_NODE_ID = "\n  query ($login: String!, $projectNumber: Int!) {\n    user(login: $login) {\n      projectV2(number: $projectNumber) {\n        id\n      }\n    }\n  }\n";
/** Gets the Repository Node ID */
export declare const REPOSITORY_NODE_ID = "\n  query ($owner: String!, $name: String!) {\n    repository(owner: $owner, name: $name) {\n      id\n    }\n  }\n";
/** Adds an Issue to a Project */
export declare const ADD_ISSUE_TO_PROJECT = "\n  mutation ($projectId: ID!, $issueId: ID!) {\n    addProjectV2ItemById(input: {projectId: $projectId, contentId: $issueId}) {\n      item {\n        id\n      }\n    }\n  }\n";
/** Creates an Issue */
export declare const CREATE_ISSUE = "\n  mutation ($userId: ID!, $repositoryId: ID!, $body: String!, $title: String!) {\n    createIssue(input: {\n      assigneeIds: [$userId],\n      body: $body,\n      repositoryId: $repositoryId,\n      title: $title\n    }) {\n      issue {\n        id\n        number\n      }\n    }\n  }\n";
