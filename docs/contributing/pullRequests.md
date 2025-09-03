---
sidebar_position: 2
---

# Pull Requests

Pull requests are how you propose changes to the Scaffold-Stylus documentation. They allow for discussion, review, and collaboration before changes are merged into the main branch.

## Pull Request Process

We follow the ["fork-and-pull" Git workflow](https://github.com/susam/gitpr):

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/scaffold-stylus-docs.git
cd scaffold-stylus-docs

# Add the upstream repository
git remote add upstream https://github.com/Arb-Stylus/scaffold-stylus-docs.git
```

### 2. Create a Branch

```bash
# Create a new branch with a descriptive name
git checkout -b fix/typo-in-installation-guide
# or
git checkout -b feature/add-troubleshooting-section
```

**Branch naming conventions:**
- `fix/` - Bug fixes
- `feature/` - New features
- `docs/` - Documentation changes
- `style/` - Formatting, styling
- `refactor/` - Code refactoring

### 3. Make Your Changes

- Make your changes following our [contribution guidelines](../contributing.md)
- Test your changes locally
- Ensure the build passes: `npm run build`

### 4. Commit Your Changes

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "docs: fix typo in installation guide"
```

### 5. Push and Create PR

```bash
# Push to your fork
git push origin your-branch-name
```

Then create a pull request on GitHub.

## Writing High-Quality Pull Requests

### PR Title Guidelines

**Format:** `type: brief description`

**Examples:**
- ✅ `docs: fix typo in installation guide`
- ✅ `feat: add troubleshooting section for Windows users`
- ✅ `fix: correct broken link in components overview`
- ❌ `fix stuff`
- ❌ `updates`

### PR Description Template

```markdown
## Description
Brief description of what this PR does

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Documentation update
- [ ] Style/formatting changes
- [ ] Refactoring (no functional changes)

## Related Issues
Fixes #123
Closes #456

## Changes Made
- List the specific changes you made
- Include any new files added
- Mention any files modified

## Testing
- [ ] I have tested these changes locally
- [ ] The build passes: `npm run build`
- [ ] I have checked the documentation renders correctly

## Screenshots (if applicable)
Add screenshots to help explain your changes

## Additional Notes
Any additional information that reviewers should know
```

### Content Guidelines

**For Documentation Changes:**
- Use clear, concise language
- Include practical examples
- Add screenshots/GIFs for complex interactions
- Follow existing documentation structure
- Update related sections if needed

**For Website Changes:**
- Follow existing code patterns
- Use Prettier for formatting: `npm run format`
- Test changes locally before submitting
- Ensure responsive design
- Update documentation if adding new features

## Review Process

### Automated Checks

Before your PR is reviewed, automated checks will run:

- **Formatting check** - Ensures code follows style guidelines
- **Build check** - Verifies the site builds without errors
- **Link check** - Validates all links work correctly

### Maintainer Review

A maintainer will review your PR and may:

- **Ask questions** - For clarification or additional context
- **Request changes** - If improvements are needed
- **Suggest alternatives** - If there's a better approach
- **Approve** - If everything looks good

### Responding to Feedback

When maintainers request changes:

1. **Read feedback carefully** - Understand what's being asked
2. **Ask questions** - If anything is unclear
3. **Make requested changes** - Update your PR accordingly
4. **Mark conversations as resolved** - When you've addressed feedback
5. **Be patient** - Reviews take time, especially for large changes

## Best Practices

### Before Submitting

- **Test thoroughly** - Ensure your changes work as expected
- **Check formatting** - Run `npm run format` and `npm run format-check`
- **Build locally** - Run `npm run build` to catch any errors
- **Review your changes** - Look at the diff before submitting
- **Link related issues** - Reference any issues your PR addresses

### During Review

- **Respond promptly** - Address feedback in a timely manner
- **Be open to suggestions** - Maintainers want to help improve your contribution
- **Ask questions** - If you don't understand feedback, ask for clarification
- **Keep PRs focused** - One PR should address one issue or feature

### After Approval

- **Celebrate!** 🎉 Your contribution is being merged
- **Watch for deployment** - Your changes will be live soon
- **Consider contributing again** - We'd love to see more from you!

## Common PR Types

### Documentation Fixes

**Examples:**
- Fix typos or grammatical errors
- Correct broken links
- Update outdated information
- Improve clarity and examples

**Tips:**
- Be specific about what you're fixing
- Include before/after examples
- Test all links you modify

### New Documentation

**Examples:**
- Add new guides or tutorials
- Create component documentation
- Add troubleshooting sections
- Write API documentation

**Tips:**
- Follow existing documentation structure
- Include practical examples
- Add to appropriate sections
- Update navigation if needed

### Website Improvements

**Examples:**
- Fix bugs in the website code
- Add new features to the site
- Improve styling and layout
- Enhance search functionality

**Tips:**
- Test across different browsers
- Ensure responsive design
- Update documentation for new features
- Follow existing code patterns

## Troubleshooting

### Build Failures

If your PR fails the build check:

1. **Check the error logs** - Look for specific error messages
2. **Test locally** - Run `npm run build` to reproduce the issue
3. **Fix the errors** - Address any syntax or configuration issues
4. **Push updates** - Your PR will automatically re-run checks

### Merge Conflicts

If your PR has merge conflicts:

1. **Fetch latest changes** - `git fetch upstream`
2. **Rebase your branch** - `git rebase upstream/main`
3. **Resolve conflicts** - Edit files to resolve conflicts
4. **Continue rebase** - `git rebase --continue`
5. **Force push** - `git push --force-with-lease origin your-branch`

### Large PRs

If your PR is large:

- **Consider splitting** - Break into smaller, focused PRs
- **Add detailed description** - Explain all changes clearly
- **Use draft PRs** - Mark as draft while working on it
- **Request early review** - Get feedback before completing

## Getting Help

If you need help with your PR:

- **Check existing documentation** - Look for similar examples
- **Ask in PR comments** - Maintainers and community can help
- **Join discussions** - Use GitHub Discussions for general questions
- **Contact maintainers** - For urgent issues

Remember: Every contribution, no matter how small, makes the project better! Thank you for contributing! 🙏
