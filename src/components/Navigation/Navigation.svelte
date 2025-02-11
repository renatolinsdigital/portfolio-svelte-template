<script>
    import './Navigation.scss';
    export let isMobile = false;
</script>

<nav class="navigation" class:mobile={isMobile}>
    <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
