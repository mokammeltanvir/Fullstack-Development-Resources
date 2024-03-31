---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const creator = [
    {
    avatar: 'https://avatars.githubusercontent.com/u/69724418?v=4',
    name: 'Mokammel Hossain Tanvir',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/mokammeltanvir' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/mokammeltanvir' },
      { icon: 'facebook', link: 'https://www.facebook.com/mokammelhossaintanvir' },
      { icon: 'x', link: 'https://twitter.com/mokammeltanvir' }
    ]
  }
]
const contributors=[
    {
    avatar: 'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png',
    name: 'New Contributor',
    title: 'Contributors',
    links: [
      { icon: 'github', link: 'https://github.com/username' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/username/' },
      { icon: 'facebook', link: 'https://www.facebook.com/username/' },
      { icon: 'x', link: 'https://twitter.com/username' }
    ]
  },
  {
    avatar: 'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png',
    name: 'New Contributor',
    title: 'Contributors',
    links: [
      { icon: 'github', link: 'https://github.com/username' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/username/' },
      { icon: 'facebook', link: 'https://www.facebook.com/username/' },
      { icon: 'x', link: 'https://twitter.com/username' }
    ]
  },
  {
    avatar: 'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png',
    name: 'New Contributor',
    title: 'Contributors',
    links: [
      { icon: 'github', link: 'https://github.com/username' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/username/' },
      { icon: 'facebook', link: 'https://www.facebook.com/username/' },
      { icon: 'x', link: 'https://twitter.com/username' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Core Contributors
    </template>
    <template #lead>
      Please submit a pull request for adding new links or making any changes or modifications. Kindly refrain from adding more than one link per commit.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="creator"></VPTeamMembers>
  <VPTeamMembers size="small" :members="contributors"></VPTeamMembers>
</VPTeamPage>
