<template>
    <a :href="project?.url" target="_blank" rel="noopener noreferrer" class="project-show-case-card-container-link">
        <div class="project-show-case-card-container">
          <h1>{{ project?.title }}</h1>
        </div>
    </a>
</template>

<script>
export default {
name: "ProjectShowCaseCard",
props: {
    project: {
        type: Object,
        required: true
    }
}

}
</script>

<style>

.project-show-case-card-container-link {
    text-decoration: none;
    color: black;
    transition: all 0.2s ease-in-out;
}
.project-show-case-card-container-link:hover {
    transform: scale(1.2);
    color: rgba(10, 112, 195, 0.837)
}

</style>