# Agile for Github

## Issues
Issues are the equivalent of a **story**. When creating an issue, try to:
1. Give it a descriptive but not long title.
2. Give it a description, if title is not self explanatory.
3. Give a checklist of tasks (see below).
4. Give it labels (`frontend`, `backend`, `infrastructure`, etc ...).
5. Assign the issue to an assignee (or multiple).
6. **Link it to a project (important to make our agile workflow work).**
7. Document observations/comments in the issue as you are making progress (see below).

You can create a checklist of tasks/substasks for the issue using markdown:
```
- [ ] task1
- - [ ] subtask1
- - [ ] subtask2
- [ ] task2
- [ ] task3
```

These can be easily checked/unchecked without having to edit the markdown (pretty neat). Also any images/observations that you'd like to document (either on your own assigned issue, or other peoples issues) should can be added as a reply/comment on the issue.

See [this issue](https://github.com/jaymody/codegeist/issues/10) as an example.

## Project
The project can be looked at as a **sprint** or **epic**. The projects can be automated such that any new issues that are assigned to a given project are automaticaly put in that projects "To Do" column.

The best way to interact with issues/cards in each column are via **pull requests**. When making a pull request that addresses an issue (or multiple issues), link the pull request with the issues so that the issues are automatically sent to the "In Progress" column. When a pull request is merged and closed, all it's linked issues will be closed as well and will be sent to the "Done" column (along with the pull request itself). Isn't that neat!

However, if you want, you can also drag them into whatever columns you like.
