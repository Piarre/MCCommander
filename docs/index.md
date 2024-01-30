---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Minecraft Commander"
  tagline: A CLI to easily create Minecraft servers
  actions:
    - theme: brand
      text: Markdown Examples
      link: /markdown-examples
    - theme: alt
      text: API Examples
      link: /api-examples

  image: ./minecraft.svg
---

<style>
:root {
  --vp-home-hero-name-color: #5bae3c;

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #3eae30 50%, #3eae30 50%);
  --vp-home-hero-image-filter: blur(44px);
}

:root img {
  border-radius: 35px;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
