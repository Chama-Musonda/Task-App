# Design System: The Intentional Calm

## 1. Overview & Creative North Star
**Creative North Star: "The Mindful Canvas"**
This design system moves beyond the utility of a "tool" and into the realm of a "sanctuary." For a beginner-friendly To-Do app, the biggest barrier is cognitive load. We solve this not through more lines and boxes, but through **Sophisticated Spatiality**. 

By utilizing an editorial approach, we prioritize "negative space" as a functional element. We break the rigid, boxed-in feeling of traditional productivity apps by employing intentional asymmetry—where headers may be slightly offset—and "Tonal Nesting" to create hierarchy. The result is an interface that feels like a clean, high-end paper planner reimagined for a digital age. It is quiet, premium, and purposefully minimal.

---

## 2. Colors & Surface Architecture
The palette is built on a foundation of "Ozone Whites" and "Cloud Grays," punctuated by a singular, authoritative Indigo (`primary`).

### The Hierarchy of Tone
- **Primary (`#4d44e3`):** Reserved exclusively for the "Moment of Action"—adding a task or completing a milestone.
- **Surface Foundations:** We use a "warm-cool" gray scale to define importance without ever drawing a line.
    - **App Background (`#f7f9fb`):** The base canvas.
    - **Surface-Container-Low (`#f0f4f7`):** Used for large structural groupings (e.g., a "Today" section).
    - **Surface-Container-Lowest (`#ffffff`):** Used for individual Task Cards to make them "pop" off the page naturally.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or card containment. Boundaries must be defined solely through background color shifts. If a Task Card sits on a `surface-container-low` background, the card itself must be `surface-container-lowest`. The eye recognizes the shift in luminance; a border is redundant noise.

### The Glass & Gradient Rule
To prevent the UI from feeling "flat" or "cheap," apply a subtle linear gradient to the Primary CTA:
- **Action Gradient:** `primary` (#4d44e3) to `primary_dim` (#4034d7) at a 135-degree angle.
- **Floating Elements:** Modals or "Add Task" sheets should utilize Glassmorphism: `surface_container_lowest` at 85% opacity with a `20px` backdrop-blur.

---

## 3. Typography: Editorial Clarity
We pair the high-character **Manrope** for displays with the utilitarian perfection of **Inter** for data entry.

| Level | Token | Font | Size | Weight | Intent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-md` | Manrope | 2.75rem | 700 | Emotive "Good Morning" greetings. |
| **Headline** | `headline-sm` | Manrope | 1.5rem | 600 | Section headers (e.g., "Upcoming"). |
| **Title** | `title-md` | Inter | 1.125rem | 500 | Task names/titles. |
| **Body** | `body-md` | Inter | 0.875rem | 400 | Task descriptions and notes. |
| **Label** | `label-md` | Inter | 0.75rem | 600 | Metadata (Dates, Tags). |

The extreme contrast between the `display-md` (Manrope) and `body-md` (Inter) creates a "Signature" look that feels like a premium magazine layout rather than a generic database.

---

## 4. Elevation & Depth: The Layering Principle
Shadows are not structural; they are atmospheric.

*   **Tonal Stacking:** For 90% of the UI, use layering. A Task Card (`surface-container-lowest`) should sit atop a section area (`surface-container-low`). This provides a soft, natural lift.
*   **Ambient Shadows:** For floating elements (like a FAB or Popover), use a "Ghost Shadow": `0px 12px 32px rgba(42, 52, 57, 0.06)`. The color is a tint of the `on-surface` token, never pure black.
*   **Ghost Border Fallback:** If accessibility requires a stroke (e.g., in high-contrast needs), use `outline-variant` at 15% opacity. It should be felt, not seen.

---

## 5. Components

### Task Cards & Lists
*   **Structure:** No dividers. Use `1.5rem` (xl) vertical spacing between task items. 
*   **Corner Radius:** Cards use `md` (0.75rem); buttons use `full` (9999px) for a friendly, approachable feel.
*   **Interaction:** On hover, a card should shift from `surface-container-lowest` to `surface-bright`.

### Checkboxes (The "Moment of Zen")
*   **Unchecked:** A simple `outline` circle.
*   **Checked:** Smooth transition to `primary`. The icon should be a custom, soft-weighted "check" (2pt stroke).
*   **Strikethrough:** When checked, the Task Title (`title-md`) shifts to `on-surface-variant` with a 20% opacity reduction.

### Input Fields
*   **Style:** No "box" inputs. Use a "Flushed" style—a simple `outline-variant` bottom-weighted line or a subtle `surface-container-highest` background fill with a `sm` radius.
*   **Focus State:** The background transitions to `primary-container` at 30% opacity, providing a soft glow rather than a harsh border change.

### The "Floating Orchestrator" (FAB)
*   Instead of a standard circle, use an elongated pill shape: `padding: 1rem 2rem`. 
*   **Color:** `primary` background with `on-primary` text/icon. This is the only high-contrast element on the screen.

---

## 6. Do's and Don'ts

### Do:
*   **Use Asymmetric Margins:** Let the "Headline" have more top padding than bottom padding to create a sense of "growth" and breathing room.
*   **Embrace Whitespace:** If you think there’s enough space, add 8px more. The goal is "Beginner-Friendly," which means "Uncluttered."
*   **Use Tonal Shifts:** Distinguish between a "Completed" task and an "Active" one by shifting the background of the completed card to `surface-dim`.

### Don't:
*   **Don't use 1px Dividers:** They cut the UI into "jail cells." Use white space or tonal blocks instead.
*   **Don't use Pure Black:** Even for text, use `on-surface` (#2a3439). It is softer on the eyes and feels more premium.
*   **Don't Over-Animate:** Transitions should be `200ms` with a "Cubic Bezier (0.4, 0, 0.2, 1)"—subtle and organic, not bouncy or distracting.