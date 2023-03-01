## ️✏️ Commit messages guideline

A well-organized commit message history leads to:

- More readable messages that are easy to follow when looking through the project history.
- Automatically generate the CHANGELOGs.
- Better collaboration (code review)
  for those reasons, commit messages should follow an unified / normalized format:

```bash
# Format
:emoji: <type>(<scope>): <subject>
# Example
docs(readme): add contribution guidelines to docs
```

#### Commits use cases

| Type     | Emoji                 | Code                    | Description                                                                                            |
| :------- | :-------------------- | :---------------------- | :----------------------------------------------------------------------------------------------------- |
| feat     | :sparkles:            | `:sparkles:`            | A new feature                                                                                          |
| fix      | :bug:                 | `:bug:`                 | A bug fix                                                                                              |
| docs     | :books:               | `:books:`               | Documentation only changes                                                                             |
| style    | :gem:                 | `:gem:`                 | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) |
| refactor | :hammer:              | `:hammer:`              | A code change that neither fixes a bug nor adds a feature                                              |
| perf     | :rocket:              | `:rocket:`              | A code change that improves performance                                                                |
| test     | :rotating_light:      | `:rotating_light:`      | Adding missing tests or correcting existing tests                                                      |
| build    | :package:             | `:package:`             | Changes that affect the build system or external dependencies                                          |
| ci       | :construction_worker: | `:construction_worker:` | Changes to our CI configuration files and scripts                                                      |
| chore    | :wrench:              | `:wrench:`              | Other changes that don't modify src or test files                                                      |
| revert   | :rewind:              | `:rewind:`              | Reverts a previous commit                                                                              |
| wip      | :construction:        | `:construction:`        | Work in progress                                                                                       |

#### How to commit your changes ?

In order to standarize commit message format, we are using:

- [Husky](https://github.com/typicode/husky) - git hooks manager
- [Commitlint](https://commitlint.js.org/#/) - verify if your commit messages meet the conventional format.
- [CommitLint-Emoji](https://github.com/arvinxx/gitmoji-commit-workflow)- verify if your commit messages starts with an emoji
