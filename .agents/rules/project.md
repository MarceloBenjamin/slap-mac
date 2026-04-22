---
trigger: always_on
glob:
description:
---

- **Dependency Management**: Use `bun` as the package manager.
- **State Management**: Use `zustand` for managing application state.
- **Theming**: Implement both Light and Dark mode for all screens.
- **Reusability First**: Before implementing a new component, thoroughly check if an equivalent component already exists to prevent code duplication and keep the codebase lean.
- **Platform**: This project is exclusive to Mac, so there is no need to worry about Windows or Linux.
- **Icons**: Use `lucide-react` as the primary icon provider.
- **Internationalization**: All new text added to the project (labels, buttons, titles, etc.) must have their respective translation keys added and used via Paraglide JS.
