# homepage

Personal website built with [Hugo](https://gohugo.io/) and the
[hugo-book](https://github.com/alex-shpak/hugo-book) theme, deployed to
GitHub Pages.

## Contributing

### Pull request descriptions

All pull requests — whether opened by a human or by an agent such as the
GitHub Copilot coding agent or the Copilot app — use the template in
[.github/pull_request_template.md](.github/pull_request_template.md).
The Copilot coding agent reads this file automatically and fills in the
**PR Description** table, so every PR has the same consistent structure.
Do not remove or reformat the table; fill in every field (use "None"
when a field does not apply).

### Building locally

```sh
hugo build --gc --minify
```

Requires Hugo extended (see `HUGO_VERSION` in
[.github/workflows/hugo.yaml](.github/workflows/hugo.yaml)) and the
hugo-book theme submodule (`git submodule update --init --recursive`).
