<script lang="ts">
  import "./ProjectCard.scss";
  import Text from "../Text/Text.svelte";
  import type { Project } from "../../domain/models/Project.model";

  export let project: Project;
</script>

<div class="project-card">
  <img src={project.image} alt={project.title} />
  <!--TODO: This should be a link-->
  <Text tag="h3" margin="1rem 1rem 0.5rem" variation="secondary" isBold
    >{project.title}</Text
  >
  <Text tag="span" margin={{ bottom: "0.8rem" }}>{project.description}</Text>
</div>
