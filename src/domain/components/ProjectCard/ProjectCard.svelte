<script lang="ts">
  import "./ProjectCard.scss";
  import Text from "../../../shared/components/Text/Text.svelte";
  import type { Project } from "../../models/Project.model";

  export let project: Project;
</script>

<div class="project-card" data-testid="project-card">
  <img src={project.image} alt={project.title} />

  <Text tag="h3" margin="0.4rem 0.4rem 0.4rem" colorVariant="primary" isBold
    >{project.title}</Text
  >
  <Text tag="span" margin="0 0.4rem 0.8rem">{project.description}</Text>
</div>
