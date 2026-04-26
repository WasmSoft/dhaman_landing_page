
# Agent Rules

These rules must be followed by every AI agent, developer, or team member working on this project.

The purpose of this file is to keep the project architecture clean, consistent, scalable, and easy to maintain.

Do not ignore these rules when building UI, adding logic, using MCP servers, generating code, or refactoring existing files.

---

## 1. Core Architecture

This project uses Next.js with the App Router.

The approved architecture is:

```txt
project-root/
  public/
  src/
    app/
    components/
    constants/
    types/
    lib/
```

Rules:

1. `public` must stay outside `src`.
2. `src/app` is only for routing, pages, layouts, loading files, error files, and route-level files.
3. `src/components` is for UI components.
4. `src/components/shared` is for reusable components.
5. `src/constants` is for static content and configuration data.
6. `src/types` is for TypeScript types.
7. `src/lib` is for helpers, schemas, formatters, transformations, and logic.
8. Do not create `components`, `constants`, `types`, or `lib` inside `src/app`.
9. Do not place reusable UI components inside `src/app`.

---

## 2. App Router Rules

The `src/app` folder must only contain route-related files.

Allowed examples:

```txt
src/app/page.tsx
src/app/layout.tsx
src/app/globals.css
src/app/loading.tsx
src/app/error.tsx
src/app/not-found.tsx
src/app/terms/page.tsx
src/app/privacy/page.tsx
src/app/contact/page.tsx
```

Do not create these folders inside `src/app`:

```txt
src/app/components
src/app/constants
src/app/types
src/app/lib
```

A page file must stay clean and should only compose sections.

Correct:

```tsx
import { HeroSection } from "@/components/hero";
import { FeaturesSection } from "@/components/features";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
```

Wrong:

```tsx
export default function HomePage() {
  return (
    <main>
      {/* Huge Hero JSX directly here */}
      {/* Huge Features JSX directly here */}
    </main>
  );
}
```

---

## 3. Components Rules

All UI components must be placed inside:

```txt
src/components
```

Reusable components must be placed inside:

```txt
src/components/shared
```

Section-specific components must be placed inside:

```txt
src/components/{section-name}
```

Example:

```txt
src/components/
  shared/
    button/
      Button.tsx
      index.ts
    section-header/
      SectionHeader.tsx
      index.ts
    container/
      Container.tsx
      index.ts

  hero/
    HeroSection.tsx
    HeroImage.tsx
    HeroActions.tsx
    index.ts

  features/
    FeaturesSection.tsx
    FeatureCard.tsx
    index.ts
```

Rules:

1. Before creating a new component, check if a suitable shared component already exists.
2. If a component is used in more than one section, it must be moved to `src/components/shared`.
3. If a component is used only by one section, it must stay inside that section folder.
4. Every component folder must include an `index.ts` file.
5. Do not duplicate components.
6. Do not create unnecessary abstractions.
7. UI components should not contain large static data, schemas, or heavy logic.

---

## 4. Constants Rules

All static UI data must be placed inside:

```txt
src/constants
```

Static data includes:

- Section content
- Navigation items
- CTA links
- Card data
- Feature lists
- Pricing plans
- FAQ items
- Image paths
- Icon names
- Route paths
- Static configuration values

Each section must have its own constants file.

Example:

```txt
src/constants/hero.ts
src/constants/features.ts
src/constants/pricing.ts
src/constants/faq.ts
src/constants/index.ts
```

Rules:

1. Do not keep large static arrays inside UI components.
2. Do not repeat the same static data in multiple places.
3. Export all constants from `src/constants/index.ts`.

Example:

```ts
export * from "./hero";
export * from "./features";
export * from "./pricing";
export * from "./faq";
```

---

## 5. Types Rules

All TypeScript types must be placed inside:

```txt
src/types
```

Each section must have its own type file.

Example:

```txt
src/types/hero.ts
src/types/features.ts
src/types/pricing.ts
src/types/faq.ts
src/types/index.ts
```

Rules:

1. Do not define large reusable types inside components.
2. Shared types can be placed inside `src/types/common.ts` when needed.
3. Export all types from `src/types/index.ts`.
4. Use `import type` when importing types.

Example:

```ts
import type { HeroContent } from "@/types";
```

---

## 6. Lib Rules

All helper functions, schemas, formatters, transformations, validations, and section-specific logic must be placed inside:

```txt
src/lib
```

Section-specific logic must be placed inside:

```txt
src/lib/{section-name}
```

Example:

```txt
src/lib/contact/
  helpers.ts
  schemas.ts
  index.ts
```

Rules:

1. Do not place heavy logic directly inside UI components.
2. Use `helpers.ts` for pure helper functions.
3. Use `schemas.ts` for Zod validation schemas.
4. Use `formatters.ts` only when formatting utilities are needed.
5. Use `actions.ts` only when actions are needed.
6. Every section-specific lib folder must include an `index.ts` file.
7. Do not create empty helper, schema, formatter, or action files unless needed.

---

## 7. Public Assets Rules

The `public` folder must stay at the project root, outside `src`.

Correct:

```txt
project-root/public
project-root/src
```

Wrong:

```txt
project-root/src/public
```

Assets must be organized by section.

Example:

```txt
public/
  hero/
    images/
      hero-main-image.png
    icons/
      play-icon.svg

  features/
    images/
    icons/
```

Rules:

1. Hero assets must go inside `public/hero`.
2. Features assets must go inside `public/features`.
3. Pricing assets must go inside `public/pricing`.
4. Testimonials assets must go inside `public/testimonials`.
5. FAQ assets must go inside `public/faq`.
6. Contact assets must go inside `public/contact`.
7. Footer assets must go inside `public/footer`.
8. Do not place all assets randomly in the root of `public`.
9. Use clear and descriptive file names.
10. If asset paths are reused, store them inside the related constants file.

Example:

```ts
export const heroAssets = {
  image: "/hero/images/hero-main-image.png",
  playIcon: "/hero/icons/play-icon.svg",
};
```

---

## 8. shadcn/ui Rules

This project must use `shadcn/ui` as the base UI component system whenever suitable.

Rules:

1. Before creating any custom UI component, check whether `shadcn/ui` already provides a suitable base component.
2. Buttons, cards, dialogs, dropdowns, accordions, tabs, selects, inputs, badges, forms, and tooltips should use `shadcn/ui` whenever possible.
3. Do not duplicate UI primitives.
4. Do not create a new custom button if a shared button or shadcn button already exists.
5. Custom shared components should compose shadcn components instead of replacing them randomly.
6. Styling must stay consistent with the existing theme variables and Tailwind setup.
7. Any reusable UI component built on top of shadcn must be placed inside `src/components/shared`.

---

## 9. Form Rules

If a section contains a form, follow these rules:

1. Use React Hook Form.
2. Use Zod for validation.
3. Store Zod schemas inside `src/lib/{section-name}/schemas.ts`.
4. Store form-related types inside `src/types/{section-name}.ts`.
5. Use shadcn/ui form components when suitable.
6. Do not write validation logic directly inside JSX.

Example:

```txt
src/lib/contact/schemas.ts
src/types/contact.ts
src/components/contact/ContactForm.tsx
```

---

## 10. MCP Server, Stitch, Figma MCP, and Design Generation Rules

When using MCP server, Stitch, Figma MCP, screenshots, or any design-generation tool, generated code must still follow this architecture.

Before building any section:

1. Analyze the requested section.
2. Identify reusable UI parts.
3. Check `src/components/shared` before creating new reusable components.
4. Use existing shadcn/ui components where suitable.
5. Ask whether the user wants to provide a screenshot, Figma link, Stitch link, or any other design reference before implementing a new UI section.
6. Do not create a random visual style.
7. Match the current project theme, spacing, typography, layout, and color system.
8. Convert any generated design into the approved architecture.
9. Build the UI using a mobile-first approach.
10. Make sure the implementation is mobile-friendly and responsive across all screen sizes.
11. Keep the final UI visually aligned with the provided Figma, Stitch, screenshot, or design reference.
12. Do not change the design style while making the layout responsive.

Generated code must be separated into:

- UI components inside `src/components`
- Static data inside `src/constants`
- Types inside `src/types`
- Helpers and schemas inside `src/lib`
- Assets inside `public`

Do not allow MCP, Stitch, Figma MCP, or any generated output to create messy, duplicated, non-responsive, desktop-only, or inconsistent file structures.

---

## 11. Responsive and Mobile-First UI Rules

Every UI section, component, and page must be built using a mobile-first approach.

This rule applies to all UI work, including manual coding, MCP server output, Stitch-generated UI, Figma MCP output, screenshot-based implementation, or any other design-generation workflow.

Rules:

1. Start the implementation from the smallest mobile viewport first.
2. Make sure the UI is fully usable, readable, and visually balanced on mobile screens before adding tablet or desktop styles.
3. Use Tailwind responsive utilities in a mobile-first way.
4. Add larger breakpoint styles progressively using `sm:`, `md:`, `lg:`, `xl:`, and `2xl:` only when needed.
5. Do not build the desktop layout first and then try to force it into mobile.
6. The mobile version must not look like a broken or squeezed desktop version.
7. The UI must adapt smoothly across mobile, tablet, laptop, and desktop screens.
8. When using a Figma link, Stitch link, screenshot, or MCP-generated design, the final implementation must match the provided design as closely as possible.
9. The responsive behavior must preserve the same visual identity, spacing logic, typography hierarchy, colors, and layout direction from the reference design.
10. Do not change the design style when making it responsive.
11. Do not replace the original visual direction with a different layout unless the user explicitly approves it.
12. If the reference design only shows desktop, create a mobile-friendly version that keeps the same visual identity and content hierarchy.
13. If the reference design includes mobile screens, the implementation must match the mobile reference first, then scale up to larger screens.
14. Use flexible layouts such as `flex`, `grid`, responsive columns, wrapping, and proper spacing utilities instead of fixed widths that break on smaller screens.
15. Avoid hardcoded widths, heights, margins, or positioning that can break responsiveness unless they are clearly required by the design.
16. Images, icons, cards, buttons, forms, navigation, and text blocks must resize or rearrange naturally on small screens.
17. Test the implemented UI mentally and structurally against common viewport sizes before considering the task complete.
18. Do not consider a UI task complete until the section works correctly on mobile and desktop.

Mobile-first Tailwind example:

```tsx
<section className="px-4 py-10 md:px-8 md:py-16 lg:px-12 lg:py-24">
  <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
    {/* Content */}
  </div>
</section>
```

Wrong approach:

```tsx
<section className="w-[1200px] h-[700px] absolute left-[300px] top-[100px]">
  {/* Fixed desktop-only layout */}
</section>
```

The final UI must be:

- Mobile-first
- Mobile-friendly
- Responsive across all screen sizes
- Consistent with the provided design reference
- Consistent with the project theme
- Built using the approved architecture in `AGENTS.md`

---

## 12. Section Building Workflow

For every new section, follow this exact workflow.

### Step 1: Analyze the section

Identify:

- Section name
- Required components
- Reusable parts
- Static data
- Types
- Helper functions
- Required schemas
- Required assets
- Whether the section contains forms or validation
- Mobile layout requirements
- Tablet layout requirements
- Desktop layout requirements

### Step 2: Check existing shared components

Before creating anything new, check:

```txt
src/components/shared
```

Reusable examples:

- Button
- Badge
- Card
- Section header
- Container
- Icon wrapper
- CTA block
- Form input
- Modal or dialog

### Step 3: Create the section component folder

Example:

```txt
src/components/hero/
  HeroSection.tsx
  HeroImage.tsx
  HeroActions.tsx
  index.ts
```

### Step 4: Create the section constants file

```txt
src/constants/hero.ts
```

### Step 5: Create the section types file

```txt
src/types/hero.ts
```

### Step 6: Create lib files only if needed

```txt
src/lib/hero/
  helpers.ts
  schemas.ts
  index.ts
```

Do not create empty helper or schema files if the section does not need them.

### Step 7: Organize assets

```txt
public/hero/
  images/
  icons/
```

### Step 8: Add clean exports

Example:

```ts
export { HeroSection } from "./HeroSection";
export { HeroImage } from "./HeroImage";
export { HeroActions } from "./HeroActions";
```

### Step 9: Use the section in the page

The page file must stay clean.

```tsx
import { HeroSection } from "@/components/hero";
import { FeaturesSection } from "@/components/features";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
```

### Step 10: Verify responsiveness

Before completing the task, verify that the section works correctly on:

- Mobile
- Tablet
- Laptop
- Desktop

Do not mark the section as complete if it is desktop-only or if the mobile layout is broken.

---

## 13. Import Rules

Use path aliases whenever possible.

Preferred:

```ts
import { HeroSection } from "@/components/hero";
import { heroContent } from "@/constants";
import type { HeroContent } from "@/types";
```

Avoid deep relative imports:

```ts
import { HeroSection } from "../../../components/hero/HeroSection";
```

Recommended alias in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

---

## 14. Naming Rules

Component files:

```txt
HeroSection.tsx
HeroImage.tsx
HeroActions.tsx
FeatureCard.tsx
PricingCard.tsx
FaqAccordion.tsx
```

Constants files:

```txt
hero.ts
features.ts
pricing.ts
faq.ts
```

Types files:

```txt
hero.ts
features.ts
pricing.ts
faq.ts
```

Lib files:

```txt
helpers.ts
schemas.ts
formatters.ts
index.ts
```

Public assets:

```txt
hero-main-image.png
feature-automation-icon.svg
pricing-pro-icon.svg
```

---

## 15. Code Quality Rules

1. Use TypeScript.
2. Use functional React components.
3. Use named exports for components.
4. Use default exports only where Next.js requires them, such as `page.tsx` and `layout.tsx`.
5. Keep files small and focused.
6. Do not mix UI, constants, types, and logic in one file.
7. Do not duplicate code.
8. Do not create unnecessary abstractions.
9. Do not create unused files.
10. Do not leave unused imports.
11. Do not break the existing design.
12. Do not change business content unless requested.
13. Do not move assets without updating their paths.
14. Do not place reusable components inside `src/app`.
15. Run lint and build checks after refactoring when possible.
16. Ensure every UI implementation is responsive and mobile-first.
17. Do not use fixed desktop-only dimensions unless the design explicitly requires them.
18. Do not ignore mobile, tablet, or desktop responsiveness.

---

## 16. Code Comments Rules

All generated or modified code must include clear comments when they help explain intent, structure, or behavior.

Rules:

1. Write comments in both Arabic and English in the same comment whenever adding meaningful UI, logic, or functions.
2. UI comments must briefly explain what the interface or section is and the purpose of its design.
3. Logic or function comments must briefly explain what the function does, why it exists, and how it is used.
4. Comments should be helpful and concise, not excessive or noisy.
5. Do not comment obvious syntax or simple self-explanatory lines.
6. Use comments to clarify design intent, interaction behavior, data transformations, validation logic, and non-obvious decisions.

Example:

```tsx
// AR: هذا القسم يعرض المزايا الرئيسية للمستخدم بطريقة مختصرة وواضحة.
// EN: This section presents the main features to the user in a clear and concise way.
export function FeaturesSection() {
  return <section>{/* Content */}</section>;
}
```

Function example:

```ts
// AR: تقوم هذه الدالة بتنسيق السعر قبل عرضه داخل كروت الأسعار.
// EN: This function formats the price before displaying it inside pricing cards.
export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}
```

---

## 17. Versioning Rules

The project version in `package.json` must be updated after completing any feature or fix.

This project follows semantic-style versioning using three numeric levels:

```txt
major.minor.patch
```

Rules:

1. When adding a new feature, increase the second number, also known as the minor version.
2. When fixing an existing bug, behavior, issue, or previous implementation, increase the third number, also known as the patch version.
3. Do not change the first number unless the user explicitly requests a major release.
4. Always update the `version` field inside `package.json` after the feature or fix is completed.
5. Do not update the version before the implementation is finished.
6. Mention the version change in the final response.

Examples:

```txt
Current version: 1.1.0
New feature:     1.2.0
Bug fix:         1.1.1
```

```txt
Current version: 1.2.0
New feature:     1.3.0
Bug fix:         1.2.1
```

If the current version is written with two numbers only, normalize it to three numbers before updating:

```txt
Current version: 1.1
Treat as:        1.1.0
New feature:     1.2.0
Bug fix:         1.1.1
```

---

## 18. Golden Rule

The page file should stay clean and should only compose sections.

Correct:

```tsx
import { HeroSection } from "@/components/hero";
import { FeaturesSection } from "@/components/features";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
```

Wrong:

```tsx
export default function HomePage() {
  return (
    <main>
      {/* Huge Hero JSX here */}
      {/* Huge Features JSX here */}
    </main>
  );
}
```

---

## 19. Short Prompt for Future Agent Tasks

Use this prompt whenever asking an agent to build a new section, component, UI, or MCP/Stitch/Figma-based implementation.

```md
Before writing any code, read and follow `AGENTS.md` from the project root.

Build the requested section/component using the approved architecture:

- Route files only inside `src/app`
- UI components inside `src/components/{section-name}`
- Reusable components inside `src/components/shared`
- Static data inside `src/constants/{section-name}.ts`
- Types inside `src/types/{section-name}.ts`
- Helpers/schemas/logic inside `src/lib/{section-name}`
- Assets inside `public/{section-name}`

Use shadcn/ui components whenever suitable.

Before creating any reusable component, check `src/components/shared` first.

Do not mix UI, constants, types, and logic in the same file.

Do not place components inside `src/app`.

Use a mobile-first approach for every UI implementation.

The UI must be mobile-friendly first, then progressively responsive for tablet, laptop, and desktop screens.

If using MCP server, Stitch, Figma MCP, screenshots, or design links, convert the generated code into the approved architecture and make sure the implementation matches the provided reference design as closely as possible.

Do not redesign the current style unless explicitly requested.

Do not create a desktop-only layout.

Do not change the design style while making it responsive.
```