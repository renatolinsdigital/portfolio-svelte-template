<script lang="ts">
  import "./app.scss";
  import Footer from "./components/Footer/Footer.svelte";
  import Header from "./components/Header/Header.svelte";
  import ProjectGrid from "./pages/ProjectGrid/ProjectGrid.svelte";
  import MainContainer from "./components/MainContainer/MainContainer.svelte";
  import PageContainer from "./components/PageContainer/PageContainer.svelte";
</script>

<Header />
<MainContainer>
  <PageContainer>
    <ProjectGrid />
  </PageContainer>
</MainContainer>
<Footer />
