<script lang="ts">
  import "./app.scss";
  import Footer from "./domain/components/Footer/Footer.svelte";
  import Header from "./domain/components/Header/Header.svelte";
  import ProjectGrid from "./pages/ProjectGrid/ProjectGrid.svelte";
  import MainContainer from "./domain/components/MainContainer/MainContainer.svelte";
  import PageContainer from "./domain/components/PageContainer/PageContainer.svelte";
</script>

<Header />
<MainContainer>
  <PageContainer>
    <ProjectGrid />
  </PageContainer>
</MainContainer>
<Footer />
