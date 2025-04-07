<template>
    <a :href="project?.url" target="_blank" rel="noopener noreferrer" class="project-show-case-card-container-link">
        <p class="project-show-case-title">{{ project?.title }}</p>
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

.project-show-case-title {
    font-size: 2rem;
    font-weight: 700;
    padding: 1rem;
}

@media screen and (max-width: 600px) {
    .project-show-case-title {
        font-size: 1.5rem;
    }
}

</style>